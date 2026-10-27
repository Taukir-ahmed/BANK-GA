import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import sheet from '../src/data/mocks/set1.js';
import { mockSets } from '../src/data/mocks/index.js';
import { gradeMock, remainingSeconds } from '../src/mock-scoring.js';

test('50 unique sourced questions, five distinct choices and valid answer keys', () => {
  assert.equal(sheet.questions.length, 50);
  assert.equal(new Set(sheet.questions.map(q=>q.id)).size,50);
  assert.equal(new Set(sheet.questions.map(q=>q.q)).size,50);
  const news=JSON.parse(fs.readFileSync('docs/pdf-extractions/news-index.json','utf8'));
  const histogram=Array(5).fill(0);
  const months={};
  for(const q of sheet.questions) {
    assert.equal(q.options.length,5);
    assert.equal(new Set(q.options).size,5);
    assert.ok(Number.isInteger(q.answer) && q.answer>=0 && q.answer<5);
    assert.ok(q.note.length>80);
    assert.ok(fs.existsSync(q.source.document));
    assert.ok(news.some(n=>n.month===q.source.month.toLowerCase().replace(' ','-') && n.item===q.source.newsItem && n.page===q.source.page));
    histogram[q.answer]++;
    months[q.source.month]=(months[q.source.month]??0)+1;
  }
  assert.deepEqual(histogram,[10,10,10,10,10]);
  assert.deepEqual(Object.values(months).sort((a,b)=>a-b),[6,8,10,12,14]);
});
test('correct, wrong and blank answers score with negative marking, including E', () => {
  const example={negativeMark:0.25,questions:[{answer:4,options:Array(5)},{answer:1,options:Array(5)},{answer:0,options:Array(5)}]};
  const result=gradeMock(example,{0:4,1:3},12);
  assert.equal(result.correct,1); assert.equal(result.wrong,1); assert.equal(result.unattempted,1);
  assert.equal(result.netScore,0.75);
  assert.equal(gradeMock(example,{},0).netScore,0);
  assert.equal(gradeMock(example,{0:0,1:0,2:1},10).netScore,-0.75);
});
test('a complete correct attempt scores 50',()=>{
  const result=gradeMock(sheet,Object.fromEntries(sheet.questions.map((q,i)=>[i,q.answer])),2100,'time-expired');
  assert.equal(result.netScore,50); assert.equal(result.unattempted,0); assert.equal(result.reason,'time-expired');
});
test('deadline uses wall-clock time, clamps at zero and handles sleeping tabs',()=>{
  assert.equal(remainingSeconds(2100000,0),2100);
  assert.equal(remainingSeconds(2100000,2099500),1);
  assert.equal(remainingSeconds(2100000,2100000),0);
  assert.equal(remainingSeconds(2100000,3000000),0);
});

test('all four registered sets have independent IDs and 50 sourced five-choice questions',()=>{
  assert.equal(mockSets.length,4);
  assert.equal(new Set(mockSets.map(s=>s.id)).size,4);
  assert.equal(new Set(mockSets.flatMap(s=>s.questions.map(q=>q.id))).size,200);
  const news=JSON.parse(fs.readFileSync('docs/pdf-extractions/news-index.json','utf8'));
  for (const set of mockSets) {
    assert.equal(set.questions.length,50);
    assert.equal(set.timeLimitSeconds,2100);
    assert.equal(set.negativeMark,0.25);
    assert.equal(new Set(set.questions.map(q=>q.q)).size,50);
    const histogram=Array(5).fill(0);
    for(const q of set.questions) {
      assert.equal(q.options.length,5);
      assert.equal(new Set(q.options).size,5);
      assert.ok(q.options.every(o=>typeof o==='string' && o.trim()));
      assert.ok(Number.isInteger(q.answer) && q.answer>=0 && q.answer<5);
      assert.ok(fs.existsSync(q.source.document));
      assert.ok(news.some(n=>n.month===q.source.month.toLowerCase().replace(' ','-') && n.item===q.source.newsItem && n.page===q.source.page));
      histogram[q.answer]++;
    }
    assert.deepEqual(histogram,[10,10,10,10,10]);
    assert.equal(gradeMock(set,Object.fromEntries(set.questions.map((q,i)=>[i,q.answer])),120).netScore,50);
  }
});

test('Sets 2-4 revisit 75 families from different angles across different sets',()=>{
  const families=new Map();
  const all=[];
  for(const set of mockSets.slice(1)) {
    assert.equal(new Set(set.questions.map(q=>q.familyId)).size,50);
    assert.ok(set.questions.filter(q=>q.type==='statements').length>=6);
    assert.equal(new Set(set.questions.map(q=>q.source.month)).size,5);
    for(const q of set.questions) {
      assert.ok(q.angle);
      assert.ok(q.note.includes('Exam link:'));
      assert.ok(q.note.includes(q.options[q.answer]));
      const variants=families.get(q.familyId)??[];
      variants.push({set:set.id,q});families.set(q.familyId,variants);
      all.push(q.q);
    }
  }
  assert.equal(new Set(all).size,150);
  assert.equal(families.size,75);
  for(const variants of families.values()) {
    assert.equal(variants.length,2);
    assert.notEqual(variants[0].set,variants[1].set);
    assert.notEqual(variants[0].q.angle,variants[1].q.angle);
    assert.notEqual(variants[0].q.q,variants[1].q.q);
  }
});
