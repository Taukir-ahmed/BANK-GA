// Each source family has two deliberately different recall targets.
// Correct answer comes first; the builder shuffles the five choices.
export const families = [];
function add(month, item, topic, context, first, second) {
  families.push({month,item,topic,context,variants:[first,second]});
}

add('may',78,'Banking',
  'SEBI operationalised PaRRVA to verify performance claims of investment advisers, research services and algorithmic trading providers. CARE Ratings is the verification agency; NSE is the Data Centre.',
  ['Publisher / regulator','Which regulator operationalised the Past Risk and Return Verification Agency (PaRRVA) platform?','SEBI','RBI','IRDAI','PFRDA','IFSCA'],
  ['Partner role','In the PaRRVA framework, which institution acts as the PaRRVA Data Centre?','National Stock Exchange','Bombay Stock Exchange','National Securities Depository Limited','Central Depository Services Limited','Indian Clearing Corporation']);
add('may',79,'Banking',
  'RBIH developed MuleHunter.AI to identify suspected mule accounts. Such accounts are used to move illicit funds, sometimes with the account holder’s complicity and sometimes without their knowledge.',
  ['Purpose','What is the principal purpose of MuleHunter.AI in banking?','Identifying suspected mule accounts','Predicting crop yields for farm lending','Setting the policy repo rate','Calculating deposit-insurance premiums','Matching buyers and sellers of government bonds'],
  ['Reverse recall','A bank deploys an AI tool developed by Reserve Bank Innovation Hub to detect accounts channelling illicit money. Which tool is it?','MuleHunter.AI','PRAVAAH','SraVaani','BHAVYA','AiNxt']);
add('may',120,'Banking',
  'NCDEX announced RAINMUMBAI, linked to Monsoon Cumulative Deviation Rainfall. The underlying rainfall observations come from IMD stations at Santacruz and Colaba.',
  ['Launching exchange','Which exchange announced the rainfall-based derivatives contract RAINMUMBAI?','NCDEX','NSE','BSE','Multi Commodity Exchange','Indian Energy Exchange'],
  ['Underlying data','Which pair of IMD observation locations supplies rainfall data for RAINMUMBAI?','Santacruz and Colaba','Safdarjung and Palam','Meenambakkam and Nungambakkam','Alipore and Dum Dum','Begumpet and Hakimpet']);
add('may',135,'Banking',
  'Q-SAFE means Quantum Secure and Adaptive Financial Ecosystem. Anil Prabhakar is the committee convenor; RBI’s FinTech Department provides secretarial support.',
  ['Department','Which RBI department provides secretarial support to the Q-SAFE expert committee?','FinTech Department','Department of Currency Management','Department of Banking Supervision','Department of Government and Bank Accounts','Department of Economic and Policy Research'],
  ['Full form','In RBI’s committee initiative, Q-SAFE stands for which of the following?','Quantum Secure and Adaptive Financial Ecosystem','Quantitative Surveillance and Financial Evaluation','Quality Standards for Accessible Financial Exchanges','Quantum Settlement and Automated Foreign Exchange','Quarterly Systemic Assessment of Financial Entities']);
add('may',278,'Rural development',
  'IIM Ahmedabad conducted the cited impact evaluation of SVAMITVA, supported by the World Bank. Property cards for rural habitation land can help households access formal credit; the scheme was launched in 2020.',
  ['Research institution','Which institution conducted the cited impact evaluation of SVAMITVA on rural property and credit access?','IIM Ahmedabad','IIM Bengaluru','IIT Bombay','National Institute of Public Finance and Policy','Indian Statistical Institute'],
  ['Launch year','SVAMITVA, associated with property cards for rural habitation areas, was launched in which year?','2020','2014','2016','2018','2022']);
add('may',316,'Reports',
  'The World Bank releases State and Trends of Carbon Pricing and is headquartered in Washington, D.C. ETS means emissions trading system; it is distinct from a carbon tax.',
  ['Headquarters','The institution publishing State and Trends of Carbon Pricing is headquartered in which city?','Washington, D.C.','Geneva','Paris','Vienna','Nairobi'],
  ['Terminology','In reports on carbon pricing, ETS denotes which mechanism?','Emissions Trading System','Environmental Tariff Schedule','Energy Transfer Subsidy','Ecological Tax Settlement','Emission Technology Standard']);
add('june',93,'Banking',
  'UPI acceptance in Cambodia uses KHQR, powered by the National Bank of Cambodia’s Bakong platform. The first phase serves Indian travellers in Cambodia; the planned second phase serves Cambodian visitors in India.',
  ['Platform','Which Cambodian payment platform powers KHQR, used for the UPI acceptance arrangement with ACLEDA Bank?','Bakong','PromptPay','PayNow','DuitNow','LankaPay'],
  ['Direction of linkage','Which statement correctly describes the planned second phase of the India-Cambodia UPI arrangement?','Cambodian visitors can pay at UPI QR merchants in India.','Only Indian visitors can pay at Cambodian ATMs.','Indian banks replace Cambodia’s central bank.','Cambodia abandons its domestic currency.','The linkage is restricted to wholesale government securities.']);
add('june',102,'Banking',
  'RBI recognised Sahamati Foundation as SRO-AA. PRAVAAH means Platform for Regulatory Application, Validation And AutHorisation. The Account Aggregator framework was introduced in September 2016.',
  ['Portal full form','RBI’s PRAVAAH portal expands to which of the following?','Platform for Regulatory Application, Validation And AutHorisation','Portal for Retail Assets, Valuation And Holdings','Platform for Rural Advances and Village Housing','Public Registry for All Verified Account Holders','Payment Routing and Validation Hub'],
  ['Framework year','The Account Aggregator framework, for whose ecosystem Sahamati received SRO recognition, was introduced in which year?','2016','2008','2012','2019','2024']);
add('june',148,'Banking',
  'TReDS means Trade Receivables Discounting System. RBI regulates the platform framework under the Payment and Settlement Systems Act, 2007; financing remains without recourse to MSME sellers.',
  ['Full form','TReDS, used to finance MSME invoices, stands for which of the following?','Trade Receivables Discounting System','Treasury Receipt Depository Service','Trade Refinancing and Debt Settlement','Transfer of Retail Deposits System','Transaction Registry for Debt Securities'],
  ['Governing law','The TReDS framework operates under which legislation?','Payment and Settlement Systems Act, 2007','Securities Contracts (Regulation) Act, 1956','Insurance Act, 1938','Insolvency and Bankruptcy Code, 2016','Regional Rural Banks Act, 1976']);
add('june',169,'Defence',
  'Project Kusha is DRDO’s long-range surface-to-air missile programme designed by DRDL. Its Advanced Weapon System Integration Complex was inaugurated at the Dr. APJ Abdul Kalam Missile Complex in Hyderabad.',
  ['Developing laboratory','Which DRDO laboratory designs the long-range surface-to-air missile programme Project Kusha?','Defence Research and Development Laboratory','Defence Bioengineering and Electromedical Laboratory','Naval Physical and Oceanographic Laboratory','Defence Food Research Laboratory','High Energy Materials Research Laboratory'],
  ['Location','The Advanced Weapon System Integration Complex associated with Project Kusha was inaugurated in which city?','Hyderabad','Pune','Kochi','Chandigarh','Balasore']);
add('june',232,'Science and technology',
  'SIA-India developed the Indian Space Industry E-Catalogue. It was launched at the fifth India Space Congress in New Delhi as a repository of space-sector capabilities.',
  ['Event location','The Indian Space Industry E-Catalogue was launched at India Space Congress 2026 in which city?','New Delhi','Bengaluru','Hyderabad','Ahmedabad','Chennai'],
  ['Reverse recall','Which repository of space-sector capabilities was developed by SIA-India and launched at India Space Congress 2026?','Indian Space Industry E-Catalogue','PRAVAAH','RSVC-AMRIT','ChipIN','BHAVYA']);
add('june',295,'Schemes',
  'Modified UDAN was approved for ten years, FY27-FY36, with an outlay of ₹28,840 crore. UDAN means Ude Desh Ka Aam Nagrik; it concerns regional air connectivity.',
  ['Outlay','What outlay was approved for the ten-year Regional Connectivity Scheme - Modified UDAN?','₹28,840 crore','₹18,100 crore','₹23,731 crore','₹60,000 crore','₹62,500 crore'],
  ['Full form','The regional aviation scheme UDAN derives its name from which phrase?','Ude Desh Ka Aam Nagrik','Urban Development and Air Navigation','Universal Domestic Aviation Network','Unified Development of Airports Nationwide','Udyam Development and Air Network']);
add('july',120,'Banking',
  'SEBI’s debenture-trustee review group was chaired by Ananta Barua with Rajnish Kumar as co-chair. Trustees monitor compliance with trust deeds and protect debenture holders; the review covers the 1993 Regulations.',
  ['Function','Which function is most directly associated with a debenture trustee?','Monitoring trust-deed compliance and protecting debenture holders','Setting monetary policy rates','Insuring bank deposits','Printing currency notes','Preparing the Union Budget'],
  ['Regulation year','SEBI’s working group on debenture trusteeship was tasked with reviewing the Debenture Trustees Regulations of which year?','1993','1988','1999','2007','2016']);
add('july',132,'Banking',
  'Visa Payment Passkey uses FIDO standards for OTP-less online card authentication. IDFC FIRST Bank was Visa’s first Indian banking partner for the solution.',
  ['Authentication standard','Visa Payment Passkey is built on which globally accepted authentication standards?','FIDO','SWIFT','IFRS','Basel III','XBRL'],
  ['Technology distinction','Which feature best distinguishes Visa Payment Passkey from conventional OTP-based online card authentication?','It provides secure authentication without relying on an OTP.','It removes the need for an issuing bank.','It converts every card transaction into a cash withdrawal.','It guarantees a fixed exchange rate for all currencies.','It applies only to physical cheque clearing.']);
add('july',162,'Banking',
  'CBDT notified NaBFID’s 10-year zero-coupon bond. Such bonds pay no periodic coupon and are typically issued at a discount, with redemption at face value.',
  ['Issuer','CBDT’s notified 10-year zero-coupon bond discussed in July 2026 was issued by which institution?','NaBFID','NABARD','SIDBI','NHB','EXIM Bank'],
  ['Applied concept','An investor buys a zero-coupon bond below face value and holds it to maturity. Which cash-flow pattern is expected?','No periodic coupon; face value is received at maturity.','Monthly coupon and no principal repayment.','Quarterly dividend and compulsory equity conversion.','Interest only if the repo rate falls.','Face value is paid at purchase and a discount is refunded later.']);
add('july',369,'Reports',
  'SOFI 2026 was released in Rome by FAO, IFAD, UNICEF, WFP and WHO. Remember the five publishers as well as the hunger and nutrition findings.',
  ['Publishing group','Which group correctly lists all five agencies associated with SOFI 2026?','FAO, IFAD, UNICEF, WFP and WHO','FAO, IMF, UNICEF, WFP and WHO','FAO, IFAD, UNESCO, WFP and WTO','UNDP, ILO, UNICEF, IMF and WHO','FAO, IFAD, UNEP, WTO and UN Women'],
  ['Release location','The State of Food Security and Nutrition in the World 2026 was released in which city?','Rome','Geneva','Nairobi','Paris','New York']);
add('july',24,'Environment',
  'Borjuli in Sonitpur, Assam, is associated with in-situ conservation of wild rice, Oryza rufipogon. ICAR-NBPGR implements the project with the Assam State Biodiversity Board.',
  ['State','Borjuli, highlighted for conserving wild rice Oryza rufipogon, is in which state?','Assam','Meghalaya','Manipur','Tripura','Arunachal Pradesh'],
  ['Implementing institution','Which institution implements the cited in-situ wild-rice conservation project in Sonitpur?','ICAR-National Bureau of Plant Genetic Resources','ICAR-Central Marine Fisheries Research Institute','Indian Institute of Forest Management','National Centre for Polar and Ocean Research','Botanical Survey of India']);
add('july',47,'National affairs',
  'The GI registrations for Unjha Cumin and Unjha Fennel were made in the name of APMC Unjha, Gujarat, under the Geographical Indications of Goods (Registration and Protection) Act, 1999.',
  ['Registered body','The registrations for Unjha Cumin and Unjha Fennel were made in the name of which body?','APMC Unjha','Spices Board India','Gujarat Tourism Corporation','Agricultural Insurance Company of India','National Cooperative Development Corporation'],
  ['Governing law','Which law governs registration and protection of geographical indications such as Unjha Cumin?','Geographical Indications of Goods (Registration and Protection) Act, 1999','Patents Act, 1970 alone','Companies Act, 2013','Competition Act, 2002','Essential Commodities Act, 1955']);
add('august',54,'Rural development',
  'NABARD and the Office of the Principal Scientific Adviser launched RSVC-AMRIT for rural technology adoption. AMRIT means Accelerated Medium for Rural Innovations & Technologies. NABARD was founded in 1982.',
  ['Full form','In RSVC-AMRIT, what does AMRIT stand for?','Accelerated Medium for Rural Innovations & Technologies','Agricultural Market Reform and Investment Trust','Advanced Mission for Rural Insurance and Transfers','Automated Monitoring of Rural Infrastructure Targets','Alliance for Modern Research in Industrial Technology'],
  ['Institutional static','NABARD, developer of RSVC-AMRIT with the Office of the Principal Scientific Adviser, was founded in which year?','1982','1935','1964','1990','2000']);
add('august',254,'Science and technology',
  'IISc Bengaluru’s SPIRE Lab developed SraVaani with ARTPARK and Google support. The speech-recognition model covers 65 languages and dialects and is freely available under an MIT licence.',
  ['Licence','Under which licence was the SraVaani speech-recognition model made publicly available?','MIT licence','GNU AGPL only','Creative Commons Attribution-NonCommercial only','A paid proprietary banking licence','A hardware-export licence'],
  ['Institution','Which institution’s SPIRE Lab developed SraVaani?','Indian Institute of Science, Bengaluru','IIT Madras','IIT Bombay','IIIT Hyderabad','Indian Statistical Institute, Kolkata']);
add('august',346,'Reports',
  'The PLFS quarterly bulletin is prepared by the National Statistical Office under MoSPI. Current Weekly Status uses the preceding seven days; at least one hour of work qualifies as employment.',
  ['Preparing institution','Which office prepares the Periodic Labour Force Survey quarterly bulletin?','National Statistical Office','Labour Bureau alone','NITI Aayog','Office of the Registrar General of India','National Sample Survey Training Academy'],
  ['Reference period','What is the reference period under the Current Weekly Status approach used in PLFS?','The preceding seven days','The preceding thirty days','The preceding ninety days','The preceding financial year','The preceding calendar year']);
add('september',156,'Banking',
  'New Development Bank proposed Maharajah INR Bonds as onshore rupee bonds. IRDAI permitted Indian insurers to invest in them; NDB is headquartered in Shanghai. Masala Bonds are issued offshore.',
  ['Issuer','Which multilateral bank proposed the Maharajah INR Bonds discussed in September 2026?','New Development Bank','Asian Development Bank','World Bank','Asian Infrastructure Investment Bank','European Investment Bank'],
  ['Regulator','Which regulator permitted Indian insurers to invest in the proposed Maharajah INR Bonds?','IRDAI','PFRDA','SEBI','IFSCA','Competition Commission of India']);
add('september',352,'Rural development',
  'LIC manages the PM-KMY pension fund. Eligible small and marginal farmers own up to two hectares, enter at ages 18-40 and receive ₹3,000 monthly from age 60; the spouse’s family pension is 50%.',
  ['Fund manager','Which institution manages the pension fund under Pradhan Mantri Kisan Maandhan Yojana?','Life Insurance Corporation of India','NABARD','State Bank of India','Pension Fund Regulatory and Development Authority','National Pension System Trust'],
  ['Eligibility and benefit','Which statements about PM-KMY are correct?\nI. Eligible small and marginal farmers may own up to two hectares of cultivable land.\nII. The spouse’s family pension is 50% of the beneficiary’s pension.\nIII. The assured pension starts at age 50.','I and II only','II and III only','I and III only','I, II and III','III only']);
add('september',422,'Rural development',
  'The Data in Climate Resilient Agriculture platform is supported by NABARD and UNDP. NABARD’s MoU integrates IMD agro-meteorological products; IMD is headquartered in New Delhi.',
  ['Supporting organisation','Besides NABARD, which UN organisation supports the Data in Climate Resilient Agriculture platform?','UNDP','UNEP','UNESCO','UNICEF','UNIDO'],
  ['Headquarters','IMD, NABARD’s partner for agro-meteorological data integration, is headquartered in which city?','New Delhi','Pune','Mumbai','Hyderabad','Kolkata']);
add('september',384,'Reports',
  'UN Women and UN DESA release The Gender Snapshot. Gender equality is SDG 5, and UN Women is headquartered in New York City.',
  ['SDG number','The Gender Snapshot tracks progress including gender equality, which is Sustainable Development Goal number what?','5','3','4','8','10'],
  ['Headquarters','UN Women, a co-publisher of The Gender Snapshot 2026, is headquartered in which city?','New York City','Geneva','Paris','Nairobi','Rome']);

add('may',108,'Banking',
  'PFRDA’s Retirement Income Scheme allows phased pension-corpus withdrawal. The source describes a 20% mandatory annuity requirement for private/non-government subscribers, versus 40% for government subscribers, subject to the stated corpus rules.',
  ['Regulator','Which regulator launched the Retirement Income Scheme to offer more flexible post-retirement payouts?','PFRDA','IRDAI','SEBI','RBI','IFSCA'],
  ['Compare subscriber classes','Under the Retirement Income Scheme reform reported in May 2026, which mandatory annuity percentages apply to private/non-government and government subscribers, respectively, where the requirement applies?','20% and 40%','40% and 20%','20% and 20%','40% and 60%','60% and 40%']);
add('may',137,'Banking',
  'RBI’s cooperative-bank governance change requires a minimum three-year cooling-off period after ten continuous years as a director. During cooling-off, association with the UCB is permitted only as a customer.',
  ['Cooling-off period','After completing ten continuous years on the same cooperative bank’s board, a director must observe a minimum cooling-off period of how long under the reported RBI norms?','Three years','One year','Two years','Four years','Five years'],
  ['Permitted relationship','During the prescribed cooling-off period, in what capacity may the former director remain associated with the urban cooperative bank?','As a customer only','As a paid adviser','As an executive consultant','As an observer on the board','As an unpaid director']);
add('may',145,'Defence',
  'CINBAX-II is the second edition of the India-Cambodia bilateral military exercise. The 2026 exercise was held in Cambodia’s Kampong Speu Province.',
  ['Partner country','CINBAX-II 2026 is an Indian Army bilateral exercise with which country?','Cambodia','Vietnam','Thailand','Malaysia','Indonesia'],
  ['Exercise location','Which location hosted CINBAX-II 2026?','Kampong Speu Province, Cambodia','Auli, India','Hawaii, United States','Jodhpur, India','Visakhapatnam, India']);
add('may',265,'Reports and awards',
  'DPIIT under the Ministry of Commerce and Industry organised LEAPS Awards 2025. In LEADS 2025, Tamil Nadu, Uttar Pradesh, Mizoram and Delhi were Exemplars in the coastal, landlocked, North-East and UT groups, respectively.',
  ['Organising department','Which department organised the fourth LEAPS Awards 2025?','Department for Promotion of Industry and Internal Trade','Department of Economic Affairs','Department of Financial Services','Department of Expenditure','Department of Public Enterprises'],
  ['Ranking category','Which pair is correctly matched as an Exemplar in the LEADS 2025 framework?','Tamil Nadu - Coastal states','West Bengal - Coastal states','Rajasthan - Landlocked states','Sikkim - North-East states','Andaman and Nicobar Islands - Union Territories']);
add('may',272,'Awards',
  'Chandrayaan-3 received the 2026 Goddard Astronautics Award from the American Institute of Aeronautics and Astronautics (AIAA). Vinay Kwatra accepted it on ISRO’s behalf in Washington, D.C.',
  ['Awarding organisation','Which organisation presented the 2026 Goddard Astronautics Award to Chandrayaan-3?','American Institute of Aeronautics and Astronautics','National Aeronautics and Space Administration','International Astronautical Federation','Royal Aeronautical Society','European Space Agency'],
  ['Award recipient','Which Indian space mission was honoured with the 2026 Goddard Astronautics Award?','Chandrayaan-3','Aditya-L1','Mars Orbiter Mission','AstroSat','Chandrayaan-2']);
add('may',282,'Banking and insurance',
  'PMJJBY provides life cover with an annual premium of ₹436; PMSBY provides accident cover with a ₹20 annual premium. APY is administered by PFRDA and provides a guaranteed pension after age 60.',
  ['Distinguish insurance products','Which pairing of annual premium and scheme is correct in the May 2026 Jan Suraksha review?','₹436 - PMJJBY; ₹20 - PMSBY','₹20 - PMJJBY; ₹436 - PMSBY','₹330 - PMJJBY; ₹12 - PMSBY','₹436 - APY; ₹20 - PMJJBY','₹500 - PMJJBY; ₹100 - PMSBY'],
  ['Administering authority','Which authority administers Atal Pension Yojana under the National Pension System framework?','PFRDA','IRDAI','SEBI','NABARD','Employees’ Provident Fund Organisation']);
add('june',132,'Banking',
  'PFRDA Pension Sahayak is an AI-enabled grievance-redress platform with voice complaints and support for 22 Indian languages. It incorporates principles of the NextGen CPGRAMS initiative.',
  ['Purpose','The AI-enabled Pension Sahayak platform primarily serves which purpose?','Redressal of pension subscribers’ grievances','Trading of pension-fund equities by retail investors','Automatic sanction of farm loans','Settlement of interbank foreign-exchange trades','Issuance of corporate credit ratings'],
  ['Language coverage','Pension Sahayak was launched with support for how many Indian languages?','22','12','18','30','65']);
add('june',135,'Banking',
  'RBI’s revised Lead Bank Scheme requires an exclusive Lead District Manager for each assigned district. The Block Level Bankers’ Committee is the foundation of the credit-planning process.',
  ['Credit-planning body','Under the revised Lead Bank Scheme, which committee forms the foundation of the credit-planning process?','Block Level Bankers’ Committee','Monetary Policy Committee','Financial Stability and Development Council','Bank Board’s Audit Committee','Asset Liability Management Committee'],
  ['District responsibility','The revised Lead Bank Scheme mandates an exclusive appointment for each district under a lead bank’s charge. Which post is this?','Lead District Manager','District Treasury Officer','Banking Ombudsman','District Magistrate','State Level Bankers’ Committee Convenor']);
add('june',174,'Awards and sports',
  'Lionel Messi won the 2026 Princess of Asturias Award for Sports. Award recipients receive a Joan Miró sculpture along with a diploma, badge and monetary award.',
  ['Winner','Who won the 2026 Princess of Asturias Award for Sports?','Lionel Messi','Cristiano Ronaldo','Rafael Nadal','Novak Djokovic','Kylian Mbappé'],
  ['Associated artist','Recipients of the Princess of Asturias Awards receive a sculpture associated with which artist?','Joan Miró','Pablo Picasso','Salvador Dalí','Antoni Gaudí','Auguste Rodin']);
add('june',267,'Awards',
  'DARPG selected projects for the 29th National Awards for e-Governance 2026. The awards were to be presented at the National Conference on e-Governance in Jaipur, Rajasthan.',
  ['Selecting department','Which department selected projects and initiatives for the National Awards for e-Governance 2026?','Department of Administrative Reforms and Public Grievances','Department of Science and Technology','Department of Telecommunications','Department of Economic Affairs','Department of Legal Affairs'],
  ['Conference venue','The 29th National Conference on e-Governance, associated with NAeG 2026, was scheduled in which city?','Jaipur','Bhopal','Bhubaneswar','Lucknow','Hyderabad']);
add('june',290,'Schemes',
  'NICDC developed the BHAVYA portal. Bharat Audyogik Vikas Yojana aims to develop 100 investment-ready industrial parks over six years.',
  ['Developing institution','Which corporation developed the BHAVYA portal?','National Industrial Corridor Development Corporation','National Small Industries Corporation','National Research Development Corporation','India Trade Promotion Organisation','National Skill Development Corporation'],
  ['Scheme target','Bharat Audyogik Vikas Yojana aims to develop how many investment-ready industrial parks over six years?','100','50','75','150','200']);
add('june',299,'Rural development',
  'The 23rd PM-KISAN instalment was released during celebrations at Tarakeswar in Hooghly, West Bengal. The cited Union Budget 2026-27 allocation for PM-KISAN was ₹60,000 crore.',
  ['Event location','The 23rd PM-KISAN instalment was released at Tarakeswar during Paschimbanga Divas celebrations in which state?','West Bengal','Odisha','Bihar','Jharkhand','Assam'],
  ['Budget allocation','What was the Union Budget 2026-27 allocation for PM-KISAN cited in the June review?','₹60,000 crore','₹28,840 crore','₹18,100 crore','₹23,731 crore','₹62,500 crore']);
add('june',313,'Reports',
  'The cited IRENA report ranked India second in annual solar-capacity additions in 2025, behind China. Annual additions are a flow measure and differ from total installed capacity.',
  ['Report organisation','Which organisation’s report identified India as the second-largest solar growth market by annual capacity additions in 2025?','International Renewable Energy Agency','International Monetary Fund','World Trade Organization','International Civil Aviation Organization','World Meteorological Organization'],
  ['Ranking leader','According to the cited IRENA assessment, which country led annual solar-capacity additions in 2025?','China','India','United States','Japan','Germany']);
add('june',321,'Reports',
  'The Institute for Economics and Peace compiles the Global Peace Index. The June source’s 2026 edition placed Iceland first and Bhutan first within South Asia. Do not confuse this GPI with the Global Passport Index.',
  ['Compiling organisation','Which organisation compiles the Global Peace Index?','Institute for Economics and Peace','World Economic Forum','Stockholm International Peace Research Institute','United Nations Development Programme','Economist Intelligence Unit'],
  ['Ranking leader','Which country ranked as the world’s most peaceful in the Global Peace Index 2026 cited in the June review?','Iceland','New Zealand','Switzerland','Slovenia','Ireland']);
add('july',123,'Banking and insurance',
  'IRDAI granted Prudential HCL Health Insurance its registration. The source describes a 70:30 joint venture between Prudential and HCL; the insurer is headquartered in Mumbai.',
  ['Licensing authority','Which authority granted the certificate of registration to Prudential HCL Health Insurance?','IRDAI','PFRDA','RBI','SEBI','IFSCA'],
  ['Ownership split','What shareholding ratio between Prudential and HCL was announced for their health-insurance joint venture?','70:30','51:49','50:50','74:26','60:40']);
add('july',151,'Rural development',
  'NABARD launched Gramodyam with NSDC to foster rural entrepreneurship. IID implements the three-year pilot, which targets approximately 4,000 rural entrepreneurs.',
  ['Launching institution','Which institution launched the Gramodyam rural entrepreneurship programme with NSDC?','NABARD','SIDBI','NITI Aayog','National Cooperative Development Corporation','National Housing Bank'],
  ['Implementation partner','Which institution carries out implementation of the Gramodyam pilot programme?','Institute for Industrial Development','Indian Institute of Corporate Affairs','National Institute of Bank Management','National Institute of Securities Markets','Indian Institute of Banking and Finance']);
add('july',180,'Defence',
  'RIMPAC 2026 took place around the Hawaiian Islands under US Indo-Pacific Command. The theme was Partners: Integrated and Prepared; RIMPAC is a biennial maritime exercise.',
  ['Exercise venue','The 30th RIMPAC maritime exercise in 2026 was held in and around which location?','Hawaiian Islands','Andaman and Nicobar Islands','Bay of Bengal','Gulf of Oman','Baltic Sea'],
  ['Theme','What was the theme of RIMPAC 2026?','Partners: Integrated and Prepared','One Ocean, One Future','Strength Through Partnership','Together for Maritime Security','United for a Free Pacific']);
add('july',213,'Science and sports',
  'The 56th International Physics Olympiad was held in Bucaramanga, Colombia. Homi Bhabha Centre for Science Education trained and mentored the Indian team.',
  ['Host country','The 56th International Physics Olympiad 2026 was held in Bucaramanga in which country?','Colombia','Brazil','Mexico','Peru','Argentina'],
  ['Training institution','Which institution trained and mentored India’s team for the International Physics Olympiad 2026?','Homi Bhabha Centre for Science Education','Raman Research Institute','Indian Institute of Astrophysics','Saha Institute of Nuclear Physics','Physical Research Laboratory']);
add('july',312,'Awards and cinema',
  'The July source’s 72nd National Film Awards list names Article 370 as Best Feature Film and Rajkumar Periasamy as Best Director for Amaran. The awards were announced by the Ministry of Information and Broadcasting.',
  ['Award-winning film','Which film was named Best Feature Film in the 72nd National Film Awards list reported in July 2026?','Article 370','Amaran','Bramayugam','Chandu Champion','Captain Miller'],
  ['Director and film','Which director-film pair won Best Director in the cited 72nd National Film Awards list?','Rajkumar Periasamy - Amaran','Aditya Suhas Jambhale - Article 370','Rahul Sadasivan - Bramayugam','Kabir Khan - Chandu Champion','Randeep Hooda - Swatantrya Veer Savarkar']);
add('july',337,'Schemes',
  'ESIC administers Atal Beemit Vyakti Kalyan Yojana for eligible insured workers facing unemployment. The source describes relief equal to 50% of average daily earnings for up to 90 days and extension until 30 June 2027.',
  ['Administering body','Which organisation administers Atal Beemit Vyakti Kalyan Yojana?','Employees’ State Insurance Corporation','Employees’ Provident Fund Organisation','Pension Fund Regulatory and Development Authority','Life Insurance Corporation of India','National Skill Development Corporation'],
  ['Benefit parameters','What relief is specified for eligible ABVKY claimants in the July review?','50% of average daily earnings for up to 90 days','100% of average daily earnings for 180 days','25% of average daily earnings for 365 days','A fixed ₹3,000 monthly pension from age 60','A ₹2 lakh life-insurance payment on retirement']);
add('july',349,'Reports',
  'Global Citizen Solutions publishes the Global Passport Index, whose 2026 edition placed Sweden first. This differs from Henley’s passport index and from the Institute for Economics and Peace’s Global Peace Index.',
  ['Publisher','Who released the fifth Global Passport Index 2026, which ranked Sweden first?','Global Citizen Solutions','Henley & Partners','Institute for Economics and Peace','World Economic Forum','Transparency International'],
  ['Ranking leader','Which country topped Global Citizen Solutions’ Global Passport Index 2026?','Sweden','Singapore','Japan','Switzerland','Finland']);
add('july',352,'Reports',
  'UNCTAD released World Investment Report 2026. The source ranks India 11th among recipients of FDI in 2025 and the United States first; report year and underlying data year differ.',
  ['Publisher','Which organisation released World Investment Report 2026?','United Nations Conference on Trade and Development','World Trade Organization','World Economic Forum','International Monetary Fund','Bank for International Settlements'],
  ['India’s ranking','In World Investment Report 2026, what was India’s rank among recipients of FDI in the underlying year 2025?','11th','4th','7th','13th','18th']);
add('july',355,'Reports',
  'WIPO and Luiss Business School jointly publish World Intangible Investment Report. Its 2026 edition identifies Sweden as the most intangible-intensive economy and India as the fastest-growing among the 15 largest economies in the cited 2023 data.',
  ['Joint publishers','World Intangible Investment Report 2026 was jointly published by which pair?','WIPO and Luiss Business School','WTO and Harvard Business School','IMF and INSEAD','World Bank and London Business School','UNCTAD and IIM Ahmedabad'],
  ['Intensity versus growth','Which country was identified as the world’s most intangible-intensive economy in World Intangible Investment Report 2026?','Sweden','India','China','Germany','Japan']);
add('july',371,'Reports',
  'Henley & Partners released the July 2026 Henley Passport Index. Singapore topped that edition, while India ranked 81st. Global Citizen Solutions publishes a different passport index.',
  ['Publisher','Which firm releases the Henley Passport Index?','Henley & Partners','Global Citizen Solutions','Institute for Economics and Peace','Kroll','Brand Finance'],
  ['Ranking leader','Which country topped the July 2026 Henley Passport Index?','Singapore','Sweden','Japan','United Arab Emirates','South Korea']);
add('august',136,'Banking',
  'RBI’s August draft loan-pricing directions proposed 1 April 2027 as the effective date. Floating-rate retail and MSME loans of commercial banks remain linked to an external benchmark; the draft does not impose that requirement on every lender category.',
  ['Draft effective date','What effective date was proposed in RBI’s August 2026 draft directions on interest rates on loans and advances?','1 April 2027','1 October 2026','1 January 2027','1 April 2028','1 July 2028'],
  ['Scope of a rule','Under the reported August draft, which statement about external benchmarks is correct?','Commercial banks’ floating-rate retail and MSME loans must remain externally benchmarked.','Every NBFC loan must be linked to an external benchmark.','RRBs must externally benchmark every loan without exception.','All internal benchmarks are abolished for every lender.','Commercial banks may price every floating-rate retail loan without a benchmark.']);

add('august',140,'Banking',
  'RBI’s draft on-tap UCB licensing initially covers eligible Multi-State Credit Cooperative Societies. The cited thresholds include ten years of existence, ₹10,000 crore in deposits and ₹300 crore net worth.',
  ['Eligible institutions','In the initial phase of RBI’s proposed on-tap UCB licensing, which entities would be eligible to apply?','Eligible Multi-State Credit Cooperative Societies','All primary agricultural credit societies automatically','Only payment banks','Only state financial corporations','All unregistered thrift groups'],
  ['Minimum deposit base','What minimum deposit base was proposed for a credit cooperative society seeking conversion into a UCB under the August draft?','₹10,000 crore','₹1,000 crore','₹2,500 crore','₹5,000 crore','₹20,000 crore']);
add('august',153,'Banking',
  'SEBI launched Cyber Suraksha as a cybersecurity-information hub. Its revamped Incident Reporting Portal aligns with the Financial Stability Board’s Format for Incident Reporting Exchange (FIRE).',
  ['Launching regulator','Which regulator launched the Cyber Suraksha Portal for the securities-market ecosystem?','SEBI','RBI','IRDAI','PFRDA','IFSCA'],
  ['International standard setter','The FIRE format used for SEBI’s revamped Incident Reporting Portal is associated with which body?','Financial Stability Board','Financial Action Task Force','International Accounting Standards Board','Basel Committee on Banking Supervision','International Organization of Securities Commissions']);
add('august',171,'Banking',
  'NPCI launched UPI in 2016 under RBI’s regulatory oversight. The August 2026 review marked ten years of its operation; the operator and regulator are different institutions.',
  ['Launch year','Unified Payments Interface was launched in which year?','2016','2010','2012','2014','2018'],
  ['Operator versus regulator','NPCI operates UPI. Which institution provides its regulatory oversight?','Reserve Bank of India','Securities and Exchange Board of India','Ministry of Corporate Affairs','Pension Fund Regulatory and Development Authority','Competition Commission of India']);
add('august',194,'Defence',
  'Exercise Pitch Black 2026 was hosted by the Royal Australian Air Force in Australia. Exercise Udara Shakti 2026 was hosted by the Royal Malaysian Air Force in Malaysia.',
  ['Host country','Which country hosted Exercise Pitch Black 2026, in which the Indian Air Force participated?','Australia','Malaysia','France','Japan','Singapore'],
  ['Different exercise','Exercise Udara Shakti 2026 was hosted by the air force of which country?','Malaysia','Australia','Indonesia','Thailand','Vietnam']);
add('august',293,'Awards and culture',
  'The Sant Kabir Handloom Award is the highest honour for handloom weavers. The 2025 awards were presented on 7 August 2026; the source also recalls the Swadeshi Movement’s formal launch on 7 August 1905.',
  ['Award category','Which award is described as India’s highest honour for handloom weavers?','Sant Kabir Handloom Award','Shilp Guru Award','Dronacharya Award','Sangeet Natak Akademi Fellowship','National Geoscience Award'],
  ['Linked historical date','The handloom-awards review recalls that the Swadeshi Movement was formally launched on which date?','7 August 1905','16 October 1905','15 August 1906','26 January 1905','7 August 1919']);
add('august',314,'Rural development',
  'PM-KISAN provides eligible landholding farmer families ₹6,000 per year in three equal instalments. The August source reports continuation for five years through FY31.',
  ['Benefit structure','What is the annual benefit and instalment structure under PM-KISAN?','₹6,000 in three equal instalments','₹3,000 in twelve equal instalments','₹12,000 in four equal instalments','₹5,000 in two equal instalments','₹6,000 in one compulsory annual payment'],
  ['Continuation period','The August 2026 Cabinet decision continued PM-KISAN until the end of which financial year?','FY2030-31','FY2026-27','FY2027-28','FY2028-29','FY2029-30']);
add('august',320,'Schemes',
  'BIND means Broadcasting Infrastructure and Network Development. The Ministry of Information and Broadcasting approved it to modernise and upgrade Prasar Bharati’s broadcasting infrastructure.',
  ['Responsible ministry','Which ministry approved the Broadcasting Infrastructure and Network Development scheme?','Ministry of Information and Broadcasting','Ministry of Electronics and Information Technology','Ministry of Communications','Ministry of Science and Technology','Ministry of Education'],
  ['Institution served','BIND primarily modernises the broadcasting infrastructure of which organisation?','Prasar Bharati','Press Council of India','Telecom Regulatory Authority of India','Bharat Sanchar Nigam Limited','National Informatics Centre']);
add('august',328,'Schemes',
  'Karnataka’s Sandhya Kiran scheme covers eligible government pensioners below 70, family pensioners and dependent family members. It offers cashless treatment up to ₹5 lakh per family per year on a floater basis.',
  ['State','Which state approved the Sandhya Kiran cashless healthcare scheme for eligible government pensioners?','Karnataka','Kerala','Tamil Nadu','Telangana','Andhra Pradesh'],
  ['Coverage','What annual family-floater treatment limit is specified under Sandhya Kiran?','₹5 lakh','₹2 lakh','₹3 lakh','₹10 lakh','₹15 lakh']);
add('august',343,'Reports',
  'Kroll India’s Celebrity Brand Valuation 2025 ranking was led by Shah Rukh Khan, followed by Ranveer Singh and Virat Kohli. Keep the ranking provider distinct from Brand Finance and Fortune.',
  ['Report provider','Which firm produced the Celebrity Brand Valuation 2025 rankings discussed in the August review?','Kroll','Brand Finance','Fortune','Henley & Partners','Global Citizen Solutions'],
  ['Ranking leader','Who topped Kroll India’s Celebrity Brand Valuation 2025 ranking?','Shah Rukh Khan','Ranveer Singh','Virat Kohli','Sachin Tendulkar','M. S. Dhoni']);
add('september',85,'Banking',
  'SEBI introduced the IT Resilience Index framework for Market Infrastructure Institutions. It measures critical-system robustness on a 100-point scale; the Industry Standards Forum develops calculation parameters and procedures.',
  ['Regulated entities','SEBI’s IT Resilience Index framework is directed at which entities?','Market Infrastructure Institutions','All gram panchayats','Only insurance intermediaries','Only pension fund managers','All regional transport offices'],
  ['Measurement scale','On what scale does the proposed IT Resilience Index measure critical IT-system robustness?','100 points','10 points','25 points','50 points','1,000 points']);
add('september',104,'Banking',
  'NIPL signed a commercial agreement with NIPC to enable UPI payments in Uzbekistan. Tashkent is Uzbekistan’s capital and the Uzbekistani Som is its currency; an agreement is distinct from operational rollout.',
  ['Partner country','NIPL’s commercial agreement with NIPC in September 2026 concerned enabling UPI payments in which country?','Uzbekistan','Kazakhstan','Kyrgyzstan','Tajikistan','Turkmenistan'],
  ['Capital and currency','Which capital-currency pair belongs to Uzbekistan, the country in NIPL’s agreement with NIPC?','Tashkent - Uzbekistani Som','Astana - Tenge','Bishkek - Som','Dushanbe - Somoni','Ashgabat - Manat']);
add('september',126,'Banking',
  'PFRDA announced a committee for a guaranteed-return pension scheme for the non-government sector at GFF 2026. The September source identifies Sivasubramanian Ramann as PFRDA Chairperson.',
  ['Responsible regulator','Which regulator announced work on a guaranteed-return pension scheme for the non-government sector at Global Fintech Fest 2026?','PFRDA','IRDAI','SEBI','RBI','IFSCA'],
  ['Head of institution','Who was identified as PFRDA Chairperson in the September 2026 pension-sector update?','Sivasubramanian Ramann','Ajay Seth','Tuhin Kanta Pandey','K. Rajaraman','Shaji K. V.']);
add('september',135,'Banking',
  'REC’s ₹500 crore tokenised corporate-bond pilot used distributed-ledger technology. It operated under SEBI’s Regulatory Sandbox Framework and used RBI’s wholesale CBDC for settlement.',
  ['Settlement instrument','Which instrument was used for settlement in REC’s tokenised corporate-bond pilot?','RBI’s wholesale Central Bank Digital Currency','Only physical currency notes','A foreign private stablecoin','A paper demand draft','Retail gold vouchers'],
  ['Regulatory framework','REC’s tokenised corporate-bond pilot was issued under whose Regulatory Sandbox Framework?','SEBI','IRDAI','PFRDA','Competition Commission of India','Insolvency and Bankruptcy Board of India']);
add('september',155,'Banking',
  'PRAN means Permanent Retirement Account Number. Under the reported revised NPS PoP charges, dormant accounts with no contributions for four consecutive quarters are exempt from the annual PoP charge.',
  ['Full form','In NPS onboarding, PRAN stands for which of the following?','Permanent Retirement Account Number','Pension Registration and Annuity Number','Personal Retirement Allocation Number','Permanent Revenue Assessment Number','Public Retirement Authorisation Number'],
  ['Dormancy condition','Under the revised PoP charge framework effective October 2026, an account is treated as dormant for annual-charge exemption after no contribution for how long?','Four consecutive quarters','One calendar month','Two consecutive quarters','Six consecutive quarters','Three consecutive years']);
add('september',171,'Banking and insurance',
  'PFRDA’s NPS Swasthya combines an investment account with a mandatory separate super top-up health-insurance policy. The family floater covers the subscriber, spouse and up to two dependent children, excluding parents.',
  ['Product structure','Which combination describes NPS Swasthya under the September 2026 guidelines?','An investment account plus a separate mandatory super top-up health policy','A life-insurance policy with no investment account','A bank fixed deposit plus crop insurance','A general-purpose credit card plus pension arrears','An equity trading account without insurance'],
  ['Family coverage','Which family members are included in the NPS Swasthya family floater described in the source?','Subscriber, spouse and up to two dependent children; parents excluded','Subscriber and parents only','Subscriber, spouse and all relatives without limit','Only the subscriber, with no family coverage','Subscriber and siblings only']);
add('september',177,'Defence',
  'SAHYOG HOP-TAC is an India-Vietnam Coast Guard exercise. Its second edition concluded off Chennai; Vietnam participated with Coast Guard Ship CSB 8002.',
  ['Partner service','SAHYOG HOP-TAC involves the Indian Coast Guard and the coast guard of which country?','Vietnam','Sri Lanka','Bangladesh','Thailand','Malaysia'],
  ['Exercise venue','The second edition of SAHYOG HOP-TAC concluded off the coast of which Indian city?','Chennai','Kochi','Mumbai','Porbandar','Port Blair']);
add('september',196,'Defence',
  'Yudh Abhyas 2026 was the 22nd India-US Army exercise. It used two Indian theatres: Mahajan Field Firing Range in Rajasthan and Auli in Uttarakhand.',
  ['Partner country','Yudh Abhyas 2026 was conducted by the Indian Army with the army of which country?','United States','Japan','Australia','France','United Kingdom'],
  ['Two-theatre locations','Which pair correctly identifies the Indian locations of Yudh Abhyas 2026?','Mahajan, Rajasthan and Auli, Uttarakhand','Jodhpur, Rajasthan and Pithoragarh, Uttarakhand','Chennai, Tamil Nadu and Kochi, Kerala','Leh, Ladakh and Tawang, Arunachal Pradesh','Babina, Uttar Pradesh and Belagavi, Karnataka']);
add('september',203,'Defence',
  'SLINEX-26 was the 13th India-Sri Lanka bilateral maritime exercise at Visakhapatnam under Eastern Naval Command. Indian participants included INS Kavaratti and INS Jyoti.',
  ['Partner country','SLINEX is India’s bilateral maritime exercise with which country?','Sri Lanka','Singapore','Seychelles','South Africa','Saudi Arabia'],
  ['Command','SLINEX-26 at Visakhapatnam was held under the aegis of which Indian naval command?','Eastern Naval Command','Western Naval Command','Southern Naval Command','Andaman and Nicobar Command','Strategic Forces Command']);
add('september',209,'Science and defence',
  'DRDO signed the high-value TDF project with Zero mK India for a 20 millikelvin dilution refrigerator for quantum applications. The cryogenic system enables operation and testing at extremely low temperatures.',
  ['Industry partner','Which company partnered with DRDO for the high-value TDF dilution-refrigerator project for quantum applications?','Zero mK India Pvt Ltd','Bharat Dynamics Limited','Data Patterns India','Astra Microwave Products','Paras Defence and Space Technologies'],
  ['Technology purpose','A 20 millikelvin dilution refrigerator in the cited DRDO project primarily supports which application?','Operation and testing of quantum-computing platforms','Production of aviation biofuel','Desalination of seawater','High-temperature steel forging','Commercial food cold storage']);
add('september',323,'Awards',
  'The 2026 Ramon Magsaysay laureates named are Tommy Koh of Singapore, Runa Khan of Bangladesh and Bo Kyi of Myanmar. Bo Kyi’s work is associated with the Assistance Association for Political Prisoners.',
  ['Laureate and country','Which 2026 Ramon Magsaysay Award laureate is associated with humanitarian work in Bangladesh?','Runa Khan','Tommy Koh','Bo Kyi','Nita Ambani','Karim Maredia'],
  ['Correct country matching','Which Ramon Magsaysay 2026 laureate-country pair is correctly matched?','Bo Kyi - Myanmar','Tommy Koh - Bangladesh','Runa Khan - Singapore','Bo Kyi - Thailand','Tommy Koh - Malaysia']);
add('september',332,'Awards',
  'Dr. Karim Maredia won the 2026 Borlaug CAST Communication Award. CAST stands for Council for Agricultural Science and Technology; he is associated with Michigan State University.',
  ['Award winner','Who won the 2026 Borlaug CAST Communication Award?','Dr. Karim Maredia','Tommy Koh','Vinay Kwatra','Ajay Kumar Sood','Anil Prabhakar'],
  ['Awarding organisation','Which organisation awards the Borlaug CAST Communication Award?','Council for Agricultural Science and Technology','Consultative Group on International Agricultural Research','Food and Agriculture Organization','International Fund for Agricultural Development','Indian Council of Agricultural Research']);
add('september',341,'Awards and cinema',
  'Gondhal, written and directed by Santosh Davakhar, was selected as India’s entry for the 2027 Oscars’ Best International Feature Film category. It is Marathi; the Film Federation of India announced the selection.',
  ['Film language','Gondhal, selected as India’s official entry for the Oscars 2027, is in which language?','Marathi','Malayalam','Tamil','Kannada','Bengali'],
  ['Selecting organisation','Which organisation announced Gondhal as India’s official entry for the 99th Academy Awards?','Film Federation of India','Central Board of Film Certification','National Film Development Corporation','Film and Television Institute of India','Ministry of External Affairs']);
add('september',354,'Schemes',
  'The Ministry of Petroleum and Natural Gas issued guidelines for the GOBARdhan National Circular Bioenergy Scheme. GOBARdhan expands to Galvanizing Organic Bio-Agro Resources Dhan and supports compressed biogas.',
  ['Full form','In the circular bioenergy initiative, GOBARdhan expands to which of the following?','Galvanizing Organic Bio-Agro Resources Dhan','Government Organic Biomass and Rural Development Housing Network','Green Organic Biofuel and Agricultural Residue Distribution Hub','Global Organic Biogas and Renewable Development Alliance','Gramin Organic Bioenergy and Rural Agriculture Development'],
  ['Responsible ministry','Which ministry issued the operational guidelines for the National Circular Bioenergy Scheme discussed in September 2026?','Ministry of Petroleum and Natural Gas','Ministry of New and Renewable Energy','Ministry of Rural Development','Ministry of Panchayati Raj','Ministry of Environment, Forest and Climate Change']);
add('september',362,'Schemes',
  'PM-SETU means Pradhan Mantri Skilling and Employability Transformation through Upgraded ITIs. Its outlay is ₹60,000 crore; half of the Central share is co-financed equally by ADB and the World Bank.',
  ['Full form','What does PM-SETU stand for in the government ITI-upgradation scheme?','Pradhan Mantri Skilling and Employability Transformation through Upgraded ITIs','Pradhan Mantri Skill Enhancement and Technical Universities','Prime Minister’s Scheme for Employment Training in Universities','Pradhan Mantri Science Education and Technology Upgradation','Pradhan Mantri Self Employment and Trade Undertakings'],
  ['Financing partners','Which two multilateral institutions co-finance half of the Central share of PM-SETU, equally?','Asian Development Bank and World Bank','New Development Bank and IMF','Asian Infrastructure Investment Bank and ILO','World Bank and WTO','Asian Development Bank and UNDP']);
add('september',376,'Reports and environment',
  'UNEP released Limiting Overshoot. The report discusses emissions cuts and Carbon Dioxide Removal (CDR) to bring temperatures back below 1.5°C after an overshoot.',
  ['Publisher','Which organisation released the report Limiting Overshoot?','United Nations Environment Programme','United Nations Development Programme','World Meteorological Organization','International Energy Agency','Intergovernmental Panel on Climate Change'],
  ['Full form','In the Limiting Overshoot report’s climate pathway, CDR refers to what?','Carbon Dioxide Removal','Climate Disaster Recovery','Carbon Debt Ratio','Clean Development Registry','Coal Demand Reduction']);

// Use selected linked targets in statement/matching form as well as direct recall.
function revise(month,item,variant,q,correct,...distractors) {
  const family=families.find(f=>f.month===month && f.item===item);
  const angle=family.variants[variant][0];
  family.variants[variant]=[angle,q,correct,...distractors];
}
revise('may',78,0,
  'Consider the PaRRVA framework:\nI. RBI operationalised the framework.\nII. CARE Ratings was recognised as the verification agency.\nIII. NSE acts as the PaRRVA Data Centre.\nWhich statements are correct?',
  'II and III only','I and II only','I, II and III','I and III only','II only');
revise('may',135,0,
  'With reference to RBI’s Q-SAFE committee:\nI. Anil Prabhakar of IIT Madras is its convenor.\nII. RBI’s FinTech Department provides secretarial support.\nIII. Q-SAFE concerns the pricing of agricultural insurance premiums.\nWhich statements are correct?',
  'I and II only','I and III only','II and III only','I, II and III','III only');
revise('june',93,0,
  'Consider the UPI acceptance arrangement in Cambodia:\nI. The first phase is exclusively for Cambodian travellers making payments in India.\nII. Bakong is associated with the National Bank of Cambodia.\nIII. KHQR is powered by the Bakong payment platform.\nWhich statements are correct?',
  'II and III only','I and III only','I and II only','I, II and III','III only');
revise('september',156,0,
  'Which pairs concerning Maharajah INR Bonds are correctly matched?\nI. Proposed issuer - New Development Bank\nII. Market of issuance - Onshore in India\nIII. Regulator permitting investment by Indian insurers - IRDAI',
  'I, II and III','I and II only','II and III only','I and III only','II only');
revise('june',132,0,
  'Which statements about Pension Sahayak are correct?\nI. It supports AI-enabled grievance redressal.\nII. It was launched with services in 65 Indian languages.\nIII. Its main function is to set insurance premium rates.',
  'I only','II only','I and II only','I, II and III','III only');
revise('july',352,0,
  'With reference to World Investment Report 2026:\nI. It was released by UNCTAD.\nII. The cited FDI recipient rankings relate to 2025.\nIII. India was the world’s largest FDI recipient in those rankings.\nWhich statements are correct?',
  'I and II only','I and III only','II and III only','I, II and III','III only');

revise('may',316,0,
  'Consider the report State and Trends of Carbon Pricing:\nI. It is published by the World Bank.\nII. The publishing institution is headquartered in Geneva.\nIII. ETS in this context means Environmental Tariff Schedule.\nWhich statements are correct?',
  'I only','I and III only','II and III only','I, II and III','III only');
revise('july',369,1,
  'With reference to SOFI 2026:\nI. It was released in Rome.\nII. The World Trade Organization is one of its five publishing agencies.\nIII. The World Health Organization is one of its five publishing agencies.\nWhich statements are correct?',
  'I and III only','I and II only','II and III only','I, II and III','II only');
revise('september',422,0,
  'Which statements concerning Data in Climate Resilient Agriculture are correct?\nI. The platform is supported by NABARD and UNDP.\nII. NABARD’s MoU with IMD integrates agro-meteorological data products.\nIII. The platform is an open-source digital initiative.',
  'I, II and III','I and II only','II and III only','I and III only','II only');
revise('june',135,0,
  'Consider RBI’s revised Lead Bank Scheme:\nI. An exclusive Lead District Manager is required for each district under the lead bank’s charge.\nII. The Block Level Bankers’ Committee is the foundation of credit planning.\nIII. The revised directions were issued by RBI.\nWhich statements are correct?',
  'I, II and III','I and II only','II and III only','I and III only','II only');
revise('july',337,0,
  'Which statements about Atal Beemit Vyakti Kalyan Yojana are correct?\nI. It is administered by ESIC.\nII. It provides 100% of average daily earnings for up to 180 days.\nIII. It is a pension scheme guaranteeing ₹3,000 a month from age 60.',
  'I only','I and III only','II and III only','I, II and III','III only');
revise('september',85,0,
  'Consider the IT Resilience Index framework reported in September 2026:\nI. It applies to every gram panchayat.\nII. It measures critical IT-system robustness on a 100-point scale.\nIII. The circular introducing it was issued by RBI.\nWhich statements are correct?',
  'II only','I and III only','II and III only','I, II and III','III only');

revise('june',102,1,
  'Consider the Account Aggregator ecosystem:\nI. Its framework was introduced in September 2018.\nII. Sahamati Foundation received recognition as SRO-AA.\nIII. PRAVAAH is SEBI’s regulatory application portal.\nWhich statements are correct?',
  'II only','I and III only','II and III only','I, II and III','III only');
revise('may',108,1,
  'Under the Retirement Income Scheme reform reported in May 2026, consider the mandatory annuity requirement where applicable:\nI. For private/non-government subscribers, it was reduced to 20%.\nII. For government subscribers, it remains 40%.\nIII. The same 20% requirement applies to both classes.\nWhich statements are correct?',
  'I and II only','I and III only','II and III only','I, II and III','III only');
revise('august',140,1,
  'Under RBI’s August draft for on-tap UCB licensing:\nI. The minimum deposit base proposed is ₹10,000 crore.\nII. The proposed minimum net worth is ₹300 crore.\nIII. A society whose application is rejected may reapply after only one year.\nWhich statements are correct?',
  'I and II only','I and III only','II and III only','I, II and III','III only');
revise('august',314,1,
  'With reference to the August 2026 PM-KISAN review:\nI. Eligible farmer families receive ₹6,000 annually in three equal instalments.\nII. The scheme’s continuation was approved through FY2030-31.\nIII. Eligibility is restricted exclusively to women farmers.\nWhich statements are correct?',
  'I and II only','I and III only','II and III only','I, II and III','III only');
revise('september',171,1,
  'Consider NPS Swasthya under the September 2026 guidelines:\nI. Its family floater includes the subscriber’s parents.\nII. The floater covers the subscriber, spouse and up to two dependent children.\nIII. The scheme combines an investment account with a mandatory separate super top-up health policy.\nWhich statements are correct?',
  'II and III only','I and II only','I and III only','I, II and III','I only');
revise('september',362,1,
  'Which statements about PM-SETU financing are correct?\nI. ADB and the World Bank equally co-finance half of the Central share.\nII. Those institutions finance half of the entire scheme outlay.\nIII. The total scheme outlay is ₹60,000 crore.',
  'I and III only','I and II only','II and III only','I, II and III','II only');

// Familiar lead-in, then a precise change of target after the comma.
// Keep the options and answer unchanged; explain the reading trap only in review.
function readingTrap(month,item,variant,stem,lesson) {
  const family=families.find(f=>f.month===month && f.item===item);
  family.variants[variant][1]=stem;
  family.readingTraps ??= {};
  family.readingTraps[variant]=lesson;
}

// Set 2: eight familiar openings whose final clauses test a supporting detail.
readingTrap('may',278,0,
  'With SVAMITVA property cards helping rural households access institutional credit, which institution conducted the impact evaluation cited in the May 2026 review?',
  'The opening recalls the scheme’s benefit. The question after the comma asks who conducted the study: IIM Ahmedabad.');
readingTrap('june',169,0,
  'With Project Kusha being developed as an indigenous long-range surface-to-air missile programme, which DRDO laboratory is responsible for its design?',
  'Recognising the missile programme is only the starting point. The requested detail is the designing laboratory: DRDL.');
readingTrap('june',232,0,
  'With SIA-India launching the Indian Space Industry E-Catalogue at India Space Congress 2026, which city hosted that congress?',
  'SIA-India is supplied in the opening. The final clause asks for the event’s city: New Delhi.');
readingTrap('july',132,0,
  'With IDFC FIRST Bank becoming Visa’s first Indian banking partner for Payment Passkey, which authentication standards underpin this OTP-less solution?',
  'The bank is background information. The question asks for the authentication standard: FIDO.');
readingTrap('august',254,0,
  'With IISc Bengaluru’s SraVaani supporting speech recognition across 65 Indian languages and dialects, under which licence was the model made publicly available?',
  'The institution and language count establish the familiar topic. The final clause tests the licence: MIT.');
readingTrap('may',265,0,
  'With Piyush Goyal felicitating the winners of the fourth LEAPS Awards 2025, which department organised these awards?',
  'The minister presenting the awards and the organising department are different recall targets. Here the answer is DPIIT.');
readingTrap('july',349,0,
  'With Sweden topping the fifth Global Passport Index 2026, which organisation released that index?',
  'Sweden is already given. Identify the publisher of this particular passport index: Global Citizen Solutions.');
readingTrap('september',352,0,
  'With PM-KMY assuring eligible farmers a monthly pension of ₹3,000 from age 60, which institution manages the scheme’s pension fund?',
  'The pension amount and age are background. The question asks for the fund manager: LIC.');

// Set 3: report findings, winners and launches lead into less familiar details.
readingTrap('june',321,0,
  'With Iceland ranked as the world’s most peaceful country in the Global Peace Index 2026, which organisation compiles the index?',
  'The country topping the index is already stated. The actual target is its compiler: the Institute for Economics and Peace.');
readingTrap('may',272,0,
  'With Chandrayaan-3 receiving the 2026 Goddard Astronautics Award, which organisation presented this honour?',
  'Recognising Chandrayaan-3 does not answer the final clause. The awarding organisation is AIAA.');
readingTrap('september',135,0,
  'With REC raising ₹500 crore through its tokenised corporate-bond pilot using distributed-ledger technology, which instrument was used to settle the transaction?',
  'The issuer and issuance technology are supplied. The asked-for settlement instrument is RBI’s wholesale CBDC.');
readingTrap('june',290,0,
  'With BHAVYA targeting 100 investment-ready industrial parks over six years, which corporation developed the portal used to operationalise the scheme?',
  'The scheme’s target is the familiar opening. The portal developer is the detail being tested: NICDC.');
readingTrap('july',213,1,
  'With India securing joint first place at the International Physics Olympiad 2026 in Colombia, which institution trained and mentored the Indian team?',
  'The medal result and host country are background. The training institution asked for is HBCSE.');
readingTrap('september',376,0,
  'With the Limiting Overshoot report discussing a return below 1.5°C after temporary warming beyond that level, which organisation released the report?',
  'The climate finding identifies the report. The final clause asks for its publisher: UNEP.');
readingTrap('august',153,1,
  'With SEBI revamping its Incident Reporting Portal in alignment with FIRE, which international body is associated with that reporting format?',
  'SEBI launched the portal. The requested international standard-setting body behind FIRE is the Financial Stability Board.');
readingTrap('june',174,1,
  'With Lionel Messi winning the 2026 Princess of Asturias Award for Sports, the sculpture given to recipients is associated with which artist?',
  'The winner is supplied before the comma. The less familiar detail being asked is the sculpture’s artist: Joan Miró.');

// Set 4: distinguish platforms from their laws, partners from implementers,
// and prominent winners from the institutions behind the award or selection.
readingTrap('may',120,1,
  'With NCDEX announcing RAINMUMBAI to hedge monsoon rainfall exposure, which pair of IMD observation locations supplies the underlying rainfall data?',
  'The exchange and product are background. The question tests the two data-source locations: Santacruz and Colaba.');
readingTrap('june',148,1,
  'With TReDS enabling MSMEs to obtain early payment by discounting their receivables, under which legislation does the platform framework operate?',
  'The opening describes how TReDS helps MSMEs. The final clause asks for its governing law: the Payment and Settlement Systems Act, 2007.');
readingTrap('september',332,1,
  'With Dr. Karim Maredia winning the 2026 Borlaug CAST Communication Award, which organisation awards this honour?',
  'The award winner is already named. Expand the awarding body correctly: Council for Agricultural Science and Technology.');
readingTrap('september',203,1,
  'With India and Sri Lanka conducting SLINEX-26 at Visakhapatnam, under the aegis of which Indian naval command was the exercise held?',
  'The partner country and city are given. The final clause asks for the responsible command: Eastern Naval Command.');
readingTrap('july',151,1,
  'With NABARD launching Gramodyam in collaboration with NSDC to promote rural entrepreneurship, which institution carries out implementation of the pilot?',
  'NABARD and NSDC are the prominent partners. The implementing institution asked for is the Institute for Industrial Development.');
readingTrap('september',341,1,
  'With the Marathi film Gondhal selected as India’s official entry for the Oscars 2027, which organisation announced the selection?',
  'The film and language are background facts. The organisation announcing the selection is the Film Federation of India.');
readingTrap('august',320,1,
  'With the Ministry of Information and Broadcasting approving BIND to modernise broadcasting infrastructure, which organisation’s infrastructure is the scheme intended to upgrade?',
  'The ministry approving the scheme is given. The question asks whose infrastructure benefits: Prasar Bharati’s.');
readingTrap('july',180,1,
  'With the 30th RIMPAC maritime exercise taking place around the Hawaiian Islands in 2026, what was the theme of that edition?',
  'The exercise and location identify the event. The final clause asks for its theme: Partners: Integrated and Prepared.');
