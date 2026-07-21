// ── COLOURS ───────────────────────────────────────────────────────────────────
const C = {
  bg:"#121212", surface:"#1A1A1C", card:"#1C2337",
  border:"#252E45", borderLight:"#2E3850",
  // `red` is now reserved only for genuine caution/error semantics: DO NOT
  // warnings, the burns-severity map colour key, and the location-error
  // banner. Everywhere else (CTAs, nav, headings, badges) uses `brand`.
  red:"#FF3B30", redDark:"#B02820", redDim:"rgba(255,59,48,0.14)",
  // Primary brand colour — used for CTAs, logo, nav, and generic UI accents.
  // `brandDark` is a same-hue darker shade for white-text buttons needing
  // stronger contrast (mirrors how `redDark` relates to `red`).
  brand:"#BA45EB", brandDark:"#8113AF", brandDim:"rgba(186,69,235,0.14)",
  green:"#00C853", greenDim:"rgba(0,200,83,0.14)",
  blue:"#0A84FF", blueDim:"rgba(10,132,255,0.14)",
  purple:"#BF5AF2", purpleDim:"rgba(191,90,242,0.14)",
  // Secondary accent — was mustard/amber (#FF911C), now a deep violet.
  warn:"#9010BF", warnDim:"rgba(144,16,191,0.2)",
  teal:"#30D5C8", tealDim:"rgba(48,213,200,0.14)",
  text:"#F0F3FA", sub:"#8B9CB0", muted:"#38465A",
};
// Nastaliq is appended only as a *fallback*: Latin glyphs (the logo wordmark,
// brand names, numbers) keep rendering in Lexend/Noto Sans, and the browser
// substitutes Noto Nastaliq Urdu per-glyph only for Arabic-script characters.
// This keeps every Latin element's font and metrics identical across languages,
// so switching to Urdu/Pashto no longer restyles the logo or shifts the layout.
const HEAD_FF = "'Noto Sans','Noto Nastaliq Urdu',sans-serif";   // display / headings (Figma: Noto Sans Medium)
const BODY_FF = "'Helvetica Neue',Helvetica,'Noto Nastaliq Urdu',Arial,sans-serif";  // nav / body / UI
const BODY_2_FF = "'Lexend','Noto Nastaliq Urdu',sans-serif";      // nav / body / UI (Figma: Lexend Light)

// ── ASSETS ──────────────────────────────────────────────────────────────────
const IMG = {
  logo:          "./images/logo.png",
  heroVideo:     "./images/hero-video-purple.mp4",
  psychological: "./images/psychological.png",
  medical:       "./images/medical.png",
  legal:         "./images/legal.png",
  employment:    "./images/employment.png",
  footer:        "./images/footer.png",
  whatToDo:      "./images/What-to-do.png",
  blog1:         "./images/blog-1.png",
  blog2:         "./images/blog-2.png",
  blog3:         "./images/blog-3.png",
  blog4:         "./images/blog-4.png",
  icBurns:       "./images/Icons/Burns Unit.png",
  icHospital:    "./images/Icons/Hospital.png",
  icRecon:       "./images/Icons/Resconstructive.png",
};

// ── VERIFIED ORGANISATIONS ────────────────────────────────────────────────────
const ORGS = {
  umang:   { name:"Umang Pakistan",               phone:"+92 311 7786264",  email:"info@umang.com.pk",          web:"umang.com.pk" },
  rozan:   { name:"Rozan Counselling Centre",     phone:"0304-111-1741",    email:"helpline@rozan.org",         web:"rozan.org",   phone2:"0800-22-444 (toll-free)" },
  asf:     { name:"Acid Survivors Foundation (ASF) Pakistan", phone:"051-2305354", email:"info@asfpakistan.org", web:"asfpakistan.org", phone2:"+92 (0)423 589 0003" },
  depilex: { name:"Depilex Smileagain Foundation",phone:"+92 (0)423 589 0003", email:"info@depilexsmileagain.com", web:"depilexsmileagain.com" },
  shirkat: { name:"Shirkat Gah",                  phone:"+92-42-35838815",  email:"info@sgah.org.pk",           web:"shirkatgah.org" },
};

// ── HOSPITALS ─────────────────────────────────────────────────────────────────
const HOSPITALS = [
  { id:1,  name:"Services Hospital Burns Centre",  city:"Lahore",     phone:"042-99200163", specialty:"Burns Unit",    note:"Largest burns centre in Punjab · 24h",                lat:31.5537, lng:74.3209, icon:"🔥" },
  { id:2,  name:"Jinnah Hospital Burns Ward",      city:"Lahore",     phone:"042-99204480", specialty:"Burns Ward",    note:"Major trauma centre · 24h",                           lat:31.5030, lng:74.3321, icon:"🔥" },
  { id:3,  name:"Acid Survivors Foundation Clinic",city:"Lahore",     phone:"051-2305354",  specialty:"Specialist",   note:"Specialist survivor care, legal aid & psych support",  lat:31.5146, lng:74.3295, icon:"💛" },
  { id:4,  name:"Depilex Smileagain Foundation",   city:"Lahore",     phone:"+92 (0)423 589 0003", specialty:"Reconstructive",note:"Free reconstructive surgery for survivors",    lat:31.5074, lng:74.3421, icon:"✂️" },
  { id:5,  name:"Civil Hospital Burns Ward",       city:"Karachi",    phone:"021-99215740", specialty:"Burns Ward",    note:"24h emergency · Largest public hospital Karachi",     lat:24.8548, lng:67.0179, icon:"🔥" },
  { id:6,  name:"JPMC Burns Centre",              city:"Karachi",    phone:"021-99201300", specialty:"Burns Centre",  note:"Dedicated burns unit · Major referral centre",         lat:24.8702, lng:67.0081, icon:"🔥" },
  { id:7,  name:"SIUT Karachi",                   city:"Karachi",    phone:"021-99201300", specialty:"Surgical",      note:"Free surgical care for all patients",                  lat:24.8826, lng:67.0611, icon:"⚕️" },
  { id:8,  name:"PIMS Burns Unit",                city:"Islamabad",  phone:"051-9261170",  specialty:"Burns Unit",    note:"Federal burns centre · Capital Territory",             lat:33.7225, lng:73.0943, icon:"🔥" },
  { id:9,  name:"Poly Clinic Hospital",           city:"Islamabad",  phone:"051-9218300",  specialty:"Emergency",     note:"24h A&E · Central Islamabad",                         lat:33.7109, lng:73.0786, icon:"🏥" },
  { id:10, name:"Lady Reading Hospital",          city:"Peshawar",   phone:"091-9210420",  specialty:"Burns Unit",    note:"Main burns referral centre KPK",                      lat:34.0075, lng:71.5784, icon:"🔥" },
  { id:11, name:"Hayatabad Medical Complex",      city:"Peshawar",   phone:"091-9217404",  specialty:"Emergency",     note:"Major trauma facility",                               lat:34.0116, lng:71.4773, icon:"🏥" },
  { id:12, name:"Nishtar Hospital",               city:"Multan",     phone:"061-9220082",  specialty:"Emergency",     note:"Burns ward on-site · South Punjab",                   lat:30.1803, lng:71.4627, icon:"🏥" },
  { id:13, name:"Allied Hospital",                city:"Faisalabad", phone:"041-9220369",  specialty:"Emergency",     note:"24h emergency · Central Punjab",                      lat:31.4484, lng:73.1350, icon:"🏥" },
  { id:14, name:"Sandeman Hospital",              city:"Quetta",     phone:"081-9201550",  specialty:"Emergency",     note:"Provincial referral centre · Balochistan",             lat:30.1988, lng:66.9988, icon:"🏥" },

  // ── Imported from the AcidHelp facility directory spreadsheet (47 verified
  // burn centres, hospitals & plastic-surgery units nationwide) ────────────
  { id:15, name:"Jinnah Burn & Reconstructive Surgery Centre", city:"Lahore", phone:"042-99231718", specialty:"Burns Centre", note:"Largest public burn facility in Pakistan: 78 beds, burn ICU, skin bank, modular OTs,… · Free", lat:31.4813, lng:74.2975, icon:"🔥" },
  { id:16, name:"Mayo Hospital Burns Unit", city:"Lahore", phone:"042-99211100-9", specialty:"Burns Unit", note:"Oldest burn unit in Punjab; fully functional per Punjab Health Dept; receives referrals… · Free", lat:31.5709, lng:74.314, icon:"🔥" },
  { id:17, name:"Services Hospital Lahore", city:"Lahore", phone:"042-99203402", specialty:"Surgical", note:"Plastic & reconstructive surgery dept; burn unit historically limited — call ahead, may… · Free", lat:31.5346, lng:74.3254, icon:"✂️" },
  { id:18, name:"Sir Ganga Ram Hospital", city:"Lahore", phone:"042-99200572", specialty:"Surgical", note:"Teaching hospital with plastic/reconstructive surgery services for follow-up care. · Free", lat:31.556, lng:74.323, icon:"✂️" },
  { id:19, name:"Shalamar Hospital", city:"Lahore", phone:"042-111-205-205", specialty:"Surgical", note:"Private teaching hospital; plastic surgery & wound care.", lat:31.586, lng:74.382, icon:"✂️" },
  { id:20, name:"Holy Family Hospital Burn Unit", city:"Rawalpindi", phone:"051-9290319", specialty:"Burns Unit", note:"One of only a handful of fully functional public burn units in Punjab · Free", lat:33.6415, lng:73.0656, icon:"🔥" },
  { id:21, name:"Benazir Bhutto Hospital", city:"Rawalpindi", phone:"051-9290301", specialty:"Emergency", note:"Emergency stabilization & surgery; refers complex burns to HFH Rawalpindi or PIMS. · Free", lat:33.6296, lng:73.0721, icon:"🏥" },
  { id:22, name:"Pakistan Army Burn Centre, CMH Kharian", city:"Kharian", phone:"0537-9280081", specialty:"Burns Centre", note:"One of the oldest specialized burn centers in the country; historically received severe…", lat:32.811, lng:73.848, icon:"🔥" },
  { id:23, name:"POF Hospital Burn Unit", city:"Wah Cantt", phone:"051-9055-27100", specialty:"Burns Unit", note:"Long-running burn unit serving Wah/Taxila/Attock belt.", lat:33.7583, lng:72.728, icon:"🔥" },
  { id:24, name:"Pak Italian Modern Burn Centre, Nishtar Hospital", city:"Multan", phone:"061-9200231-45", specialty:"Burns Centre", note:"Purpose-built modern burn centre serving all of South Punjab; ICU + reconstructive… · Free", lat:30.1953, lng:71.429, icon:"🔥" },
  { id:25, name:"Allied Hospital Burns Unit", city:"Faisalabad", phone:"041-9210087", specialty:"Burns Unit", note:"Fully functional public burn unit for Faisalabad division (per Punjab Health Dept). · Free", lat:31.44, lng:73.075, icon:"🔥" },
  { id:26, name:"Bahawal Victoria Hospital Burn Unit", city:"Bahawalpur", phone:"062-9255400", specialty:"Burns Unit", note:"Main tertiary hospital for Bahawalpur division; burn ward + plastic surgery dept. · Free", lat:29.3963, lng:71.6752, icon:"🔥" },
  { id:27, name:"Sheikh Zayed Hospital", city:"Rahim Yar Khan", phone:"068-5888021", specialty:"Emergency", note:"Tertiary care for southern Punjab border districts; emergency burn stabilization. · Free", lat:28.42, lng:70.313, icon:"🏥" },
  { id:28, name:"DHQ Teaching Hospital", city:"Dera Ghazi Khan", phone:"064-9260071", specialty:"Emergency", note:"Emergency stabilization; severe burns referred to Nishtar Multan. · Free", lat:30.056, lng:70.634, icon:"🏥" },
  { id:29, name:"DHQ Teaching Hospital Sahiwal", city:"Sahiwal", phone:"040-9200114", specialty:"Emergency", note:"Emergency stabilization; refers complex cases to Lahore/Multan. · Free", lat:30.662, lng:73.112, icon:"🏥" },
  { id:30, name:"DHQ Hospital Gujranwala", city:"Gujranwala", phone:"055-9200068", specialty:"Emergency", note:"Emergency stabilization; complex burns referred to Lahore (Jinnah/Mayo). · Free", lat:32.156, lng:74.187, icon:"🏥" },
  { id:31, name:"Aziz Bhatti Shaheed Teaching Hospital", city:"Gujrat", phone:"053-9260131", specialty:"Emergency", note:"Emergency stabilization; near CMH Kharian burn centre. · Free", lat:32.572, lng:74.09, icon:"🏥" },
  { id:32, name:"Govt. Allama Iqbal Memorial Teaching Hospital", city:"Sialkot", phone:"052-9250355", specialty:"Emergency", note:"Emergency stabilization; complex burns referred to Lahore. · Free", lat:32.501, lng:74.535, icon:"🏥" },
  { id:33, name:"PIMS Burn Care Centre", city:"Islamabad", phone:"051-9261170", specialty:"Burns Centre", note:"First international-standard public burn centre (est. 2007); 150,000+ patients treated;… · Free", lat:33.702, lng:73.048, icon:"🔥" },
  { id:34, name:"Federal Government Polyclinic", city:"Islamabad", phone:"051-9214965", specialty:"Emergency", note:"24/7 emergency; stabilization then referral to PIMS Burn Care Centre. · Free", lat:33.727, lng:73.079, icon:"🏥" },
  { id:35, name:"Shifa International Hospital", city:"Islamabad", phone:"051-8464646", specialty:"Emergency", note:"Private tertiary care; plastic & reconstructive surgery, wound care, ICU.", lat:33.677, lng:73.068, icon:"🏥" },
  { id:36, name:"Burns Centre, Dr. Ruth K.M. Pfau Civil Hospital", city:"Karachi", phone:"021-99215740", specialty:"Burns Centre", note:"Pakistan's first international-standard burns centre (est. 2004): modern OTs, burn ICU,… · Free", lat:24.8585, lng:67.0103, icon:"🔥" },
  { id:37, name:"Patel Hospital Burns Unit", city:"Karachi", phone:"021-111-174-174", specialty:"Burns Unit", note:"Leading burns unit: dedicated OT, ICU, ward, nurse-led dressing clinics for discharged…", lat:24.92, lng:67.087, icon:"🔥" },
  { id:38, name:"Aga Khan University Hospital", city:"Karachi", phone:"021-111-911-911", specialty:"Emergency", note:"Top private tertiary care; plastic & reconstructive surgery, burn management, 24/7…", lat:24.8918, lng:67.0748, icon:"🏥" },
  { id:39, name:"Liaquat National Hospital", city:"Karachi", phone:"021-111-456-456", specialty:"Emergency", note:"Well-reputed tertiary hospital with burn & plastic surgery services (60+ years).", lat:24.889, lng:67.079, icon:"🏥" },
  { id:40, name:"Jinnah Postgraduate Medical Centre (JPMC)", city:"Karachi", phone:"021-99201300", specialty:"Emergency", note:"Major public tertiary hospital; plastic surgery dept & 24/7 emergency; works alongside… · Free", lat:24.8482, lng:67.0409, icon:"🏥" },
  { id:41, name:"The Indus Hospital (Korangi Campus)", city:"Karachi", phone:"021-111-111-880", specialty:"Emergency", note:"Entirely free tertiary care incl. surgery & wound care; important option for low-income…", lat:24.8266, lng:67.1288, icon:"🏥" },
  { id:42, name:"Abbasi Shaheed Hospital", city:"Karachi", phone:"021-99260400", specialty:"Emergency", note:"KMC-run teaching hospital; emergency stabilization; refers complex burns to CHK Burns… · Free", lat:24.928, lng:67.043, icon:"🏥" },
  { id:43, name:"Holy Family Hospital Karachi", city:"Karachi", phone:"021-32258021-25", specialty:"Emergency", note:"PMC-verified private hospital noted for burn scar & reconstructive treatment.", lat:24.872, lng:67.035, icon:"🏥" },
  { id:44, name:"Dr. Ziauddin Hospital (Clifton)", city:"Karachi", phone:"021-35862937-39", specialty:"Emergency", note:"Private tertiary hospital; burn specialists & plastic surgery available.", lat:24.813, lng:67.029, icon:"🏥" },
  { id:45, name:"Liaquat University Hospital", city:"Hyderabad", phone:"022-9213301", specialty:"Emergency", note:"Main tertiary referral hospital for Hyderabad division; plastic surgery & burn ward. · Free", lat:25.3924, lng:68.3532, icon:"🏥" },
  { id:46, name:"Chandka Medical College Hospital (SMBBMU)", city:"Larkana", phone:"074-9410721", specialty:"Emergency", note:"Main tertiary hospital for upper Sindh; emergency burn stabilization & surgery. · Free", lat:27.557, lng:68.202, icon:"🏥" },
  { id:47, name:"Ghulam Muhammad Mahar Medical College Hospital", city:"Sukkur", phone:"071-9310731", specialty:"Emergency", note:"Teaching hospital for Sukkur region; stabilization then referral to Larkana/Karachi. · Free", lat:27.718, lng:68.821, icon:"🏥" },
  { id:48, name:"Peoples University Hospital", city:"Nawabshah (Shaheed Benazirabad)", phone:"0244-9370251", specialty:"Emergency", note:"Regional tertiary hospital; burn ward reported — verify capacity before referral. · Free", lat:26.244, lng:68.41, icon:"🏥" },
  { id:49, name:"Burns & Plastic Surgery Centre (BTC)", city:"Peshawar", phone:"091-7158555", specialty:"Burns Centre", note:"KP's first state-of-the-art 120-bed burns & plastic surgery centre (est. 2018): 8-bed… · Free", lat:33.9855, lng:71.4053, icon:"🔥" },
  { id:50, name:"Hayatabad Medical Complex (HMC)", city:"Peshawar", phone:"091-9217140-47", specialty:"Emergency", note:"Long-standing plastic surgery dept; now works alongside BTC next door. · Free", lat:33.991, lng:71.442, icon:"🏥" },
  { id:51, name:"Lady Reading Hospital (LRH)", city:"Peshawar", phone:"091-9211441", specialty:"Emergency", note:"Largest hospital in KP; 24/7 emergency; stabilization + referral to BTC Hayatabad. · Free", lat:34.0075, lng:71.5625, icon:"🏥" },
  { id:52, name:"Ayub Teaching Hospital", city:"Abbottabad", phone:"0992-381907-14", specialty:"Emergency", note:"Main tertiary hospital for Hazara division; plastic surgery dept; emergency burn care. · Free", lat:34.178, lng:73.221, icon:"🏥" },
  { id:53, name:"Mardan Medical Complex (MTI)", city:"Mardan", phone:"0937-9230295", specialty:"Emergency", note:"Regional tertiary hospital; stabilization then referral to BTC Peshawar. · Free", lat:34.19, lng:72.046, icon:"🏥" },
  { id:54, name:"Saidu Group of Teaching Hospitals", city:"Swat (Saidu Sharif)", phone:"0946-9240401", specialty:"Emergency", note:"Main referral hospital for Malakand division; emergency stabilization. · Free", lat:34.746, lng:72.356, icon:"🏥" },
  { id:55, name:"Sandeman Provincial (Civil) Hospital", city:"Quetta", phone:"081-9202813", specialty:"Emergency", note:"Main provincial hospital of Balochistan; 24/7 emergency; burn ward — severe cases often… · Free", lat:30.19, lng:67.014, icon:"🏥" },
  { id:56, name:"Bolan Medical Complex Hospital", city:"Quetta", phone:"081-9213823", specialty:"Emergency", note:"24/7 emergency, teaching hospital; plastic surgery services; complex burns referred… · Free", lat:30.174, lng:66.975, icon:"🏥" },
  { id:57, name:"Combined Military Hospital (CMH) Quetta", city:"Quetta", phone:"081-9201091", specialty:"Emergency", note:"Option for emergency care in Quetta, esp. when civil facilities are overloaded.", lat:30.196, lng:67.033, icon:"🏥" },
  { id:58, name:"Abbas Institute of Medical Sciences (AIMS)", city:"Muzaffarabad", phone:"05822-920525", specialty:"Emergency", note:"Main tertiary hospital of AJK capital; emergency stabilization; complex burns referred… · Free", lat:34.37, lng:73.4711, icon:"🏥" },
  { id:59, name:"Divisional Headquarters Hospital Mirpur", city:"Mirpur", phone:"05827-920021", specialty:"Emergency", note:"Emergency stabilization; refers to Islamabad/Rawalpindi burn units. · Free", lat:33.148, lng:73.751, icon:"🏥" },
  { id:60, name:"Provincial Headquarters Hospital Gilgit", city:"Gilgit", phone:"05811-920841", specialty:"Emergency", note:"Main hospital of GB; stabilization then air/road referral to Islamabad (PIMS) · Free", lat:35.92, lng:74.308, icon:"🏥" },
  { id:61, name:"DHQ Hospital Skardu", city:"Skardu", phone:"05815-920228", specialty:"Emergency", note:"Stabilization only; severe burns referred to Islamabad. · Free", lat:35.297, lng:75.632, icon:"🏥" },
];

function haversine(la1,lo1,la2,lo2){
  const R=6371,d=x=>x*Math.PI/180;
  const a=Math.sin(d(la2-la1)/2)**2+Math.cos(d(la1))*Math.cos(d(la2))*Math.sin(d(lo2-lo1)/2)**2;
  return +(R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))).toFixed(1);
}
function sColor(s){
  if(["Burns Unit","Burns Centre","Burns Ward"].includes(s))return C.red;
  if(s==="Specialist")return C.warn;
  if(s==="Reconstructive")return C.green;
  if(s==="Surgical")return C.blue;
  return C.sub;
}

// Secondary accent — used for the survivor/volunteer tab picker and the chatbot
const ACCENT_GREEN = "#74B2B8";

// ── STATS DATA (kept as-is per brief) ─────────────────────────────────────────
const STATS_ACCENT = "#9010BF";
const STATS_EN = [
  { num:1000, suffix:"+",  label:"Acid attacks reported annually in Pakistan", src:"Depilex Smileagain Foundation", color:"#DFA4F8" },
  { num:85,   suffix:"%",  label:"Of victims are women and girls", src:"ASF Pakistan", color:"#DFA4F8" },
  { num:5,    suffix:"%",  label:"Cases that result in conviction", prefix:"<", src:"ASF Pakistan", color:"#DFA4F8" },
  { num:40,   suffix:"%",  label:"Attacks committed by intimate partners or family members", src:"Depilex Smileagain Foundation", color:"#DFA4F8" },
];

// ── BLOG DATA (placeholder editorial content; English only) ───────────────────
const BLOG_POSTS = [
  { id:1, category:"Recovery", color:C.purple, dim:C.purpleDim,
    title:"What to Expect During Burns Recovery",
    excerpt:"A guide to the physical and emotional stages of healing after an acid attack, and how survivors and families can prepare for each one.",
    author:"Acidhelp Team", date:"May 23, 2024", image:IMG.blog1,
    body:[
      "Recovery from an acid burn is rarely linear. In the first weeks, medical teams focus on preventing infection and managing pain, while later stages shift toward scar management, mobility, and reconstructive surgery where needed.",
      "Emotional recovery often runs alongside — and sometimes behind — physical healing. Survivors and families benefit from connecting with counselling services early, rather than waiting for a crisis point.",
      "This guide walks through what families can realistically expect in the first three, six, and twelve months, and where to find support at each stage."
    ]},
  { id:2, category:"Reconstruction", color:C.blue, dim:C.blueDim,
    title:"Understanding Reconstructive Surgery Options",
    excerpt:"From skin grafts to multi-stage procedures — an overview of what reconstructive care can involve and how to access it in Pakistan.",
    author:"Acidhelp Team", date:"Apr 11, 2024", image:IMG.blog2,
    body:[
      "Reconstructive surgery after an acid attack can range from a single skin graft to a series of procedures spread over several years.",
      "Organisations like the Depilex Smileagain Foundation and Acid Survivors Foundation Pakistan offer free or subsidised reconstructive care — but navigating eligibility and waiting lists can be confusing.",
      "Here's what to ask your medical team, and which organisations to contact first."
    ]},
  { id:3, category:"Employment", color:C.green, dim:C.greenDim,
    title:"Returning to Work After an Acid Attack",
    excerpt:"Practical advice on re-entering the workforce, disclosing an injury to employers, and finding organisations that offer skills training.",
    author:"Acidhelp Team", date:"Mar 2, 2024", image:IMG.blog3,
    body:[
      "Many survivors face a second battle once medical treatment ends: rebuilding a livelihood.",
      "Skills training programmes run by ASF Pakistan and Depilex Smileagain Foundation focus specifically on survivors, offering both vocational training and direct job placement support.",
      "This piece covers how to apply, what documentation is typically needed, and how to talk to employers about visible scarring."
    ]},
  { id:4, category:"Legal", color:"#FF911C", dim:"rgba(255,145,28,0.14)",
    title:"Understanding Your Legal Rights After an Acid Attack in Pakistan",
    excerpt:"A plain-language guide to survivors' legal rights and protections in Pakistan — criminal penalties, the 2026 Supreme Court ruling, Punjab's new Acid Control Act, compensation, evidence preservation, and where to find help.",
    author:"Acidhelp Team", date:"Jun 30, 2026", image:IMG.blog4,
    body:[
      { note:"Disclaimer: This article provides general information about legal rights and protections available under Pakistani law. It is not a substitute for legal advice, and every case depends on its own facts and evidence. If you or someone you care about is considering legal action, please speak to a qualified lawyer or a legal aid organisation about your specific situation." },
      "If you are a survivor, a family member supporting a survivor, or someone trying to understand what protections exist in Pakistan, this guide is for you. The days and weeks after an attack can feel overwhelming; medical treatment comes first, and the legal system can feel distant or confusing. But Pakistani law does provide serious protections. The purpose of this guide is to explain them in clear language, so you can make informed decisions at your own pace.",
      "Many survivors quietly worry about the same things: Will the attacker actually be punished? Can I afford this? Will the case take years and go nowhere? What if the police won't listen? What if the attacker is my husband, my relative, or someone with influence? These worries are real. But it is also true that acid attacks are now among the most serious offences recognised under Pakistani law, and the courts have become clearer than ever about the harm they cause.",
      "You do not have to know everything before you take the next step. You only have to know that steps exist.",

      { h:"Acid Attacks Are Serious Criminal Offences Under Pakistani Law" },
      "Before 2011, acid attacks were usually prosecuted under general assault laws. That changed with the Criminal Law (Second Amendment) Act, 2011, which added two new sections to the Pakistan Penal Code (PPC) specifically for acid and other corrosive substances:",
      { list:[
        "Section 336-A defines the offence of causing hurt through a corrosive substance.",
        "Section 336-B sets the punishment.",
      ]},
      "Under Section 336-B, a person convicted of an acid attack must be sentenced to:",
      { list:[
        "Life imprisonment, or a minimum of 14 years' imprisonment, and",
        "A minimum fine of one million rupees.",
      ]},
      "These are among the strongest penalties in Pakistan's criminal justice system. They exist because the law recognises that acid violence causes lifelong harm — not only to the body, but to a survivor's income, education, relationships, and mental health.",
      "Who the attacker is does not change the law. Whether the person responsible is a stranger, a neighbour, a colleague, a rejected suitor, a spouse, or a family member, the offence is the same. Survivors do not lose their rights because they know their attacker.",

      { h:"Your Core Legal Rights as a Survivor" },
      "The most important thing to understand is that once a First Information Report (FIR) is registered, the case belongs to the State, not to any one family. You do not have to carry the prosecution alone. Here are the rights every survivor should know about:",
      { list:[
        "The right to have an FIR registered. Reporting the attack triggers a formal criminal investigation. You do not need a lawyer to file an FIR.",
        "The right to challenge police inaction. If a police station refuses to register your FIR, Sections 22-A and 22-B of the Code of Criminal Procedure allow you to approach a Magistrate directly and request an order for registration. Access to justice does not depend on any single officer's decision.",
        "The right to free legal aid if you cannot afford a lawyer. The Legal Aid and Justice Authority Act 2020 provides a framework for state-supported legal aid in criminal matters. Availability varies by district, but financial hardship should not automatically shut you out of the justice system.",
        "The right to compensation. Courts have the power to award compensation to survivors (explained in more detail below).",
        "The right to privacy in some circumstances. Depending on the case, protections such as in-camera proceedings may be available so that you do not have to give sensitive testimony in a public courtroom.",
        "The right to protection under Pakistan's wider framework on gender-based violence. This may include designated courts, coordinated support services, and safeguards during trial.",
      ]},
      "These rights apply whether the attacker was a stranger or someone known to you. The law does not offer weaker protection because the offender was a husband, former husband, family member, or acquaintance.",

      { h:"Is It Too Late to Report?" },
      "Many survivors do not report immediately. Some are focused on emergency medical care. Some face pressure from family. Some fear retaliation. Some simply did not know what options existed.",
      "A delay does not automatically close the door. Reporting early makes it easier to collect evidence, but every case depends on its own facts. If an attack happened months or even years ago, do not assume nothing can be done. Speaking to a lawyer or a legal aid organisation is the only way to know what may still be possible.",

      { h:"Preserving Evidence Can Strengthen a Future Case" },
      "Medical treatment always comes first. But evidence collected in the hours and days after an attack often plays a decisive role in a case. Wherever possible, try to keep:",
      { list:[
        "Medical records and medico-legal reports (MLRs)",
        "Photographs of injuries at different stages of healing",
        "Clothing and any physical items involved in the attack",
        "Names and contact details of witnesses",
        "Threatening messages, call records, or social media communications from the attacker or their family",
        "CCTV footage from nearby premises",
        "Receipts for treatment, travel, and other attack-related expenses",
      ]},
      "Keep copies wherever possible. Store them somewhere safe, ideally with a trusted person outside the immediate situation.",

      { h:"Can an Acid Attack Case Be Settled Privately?" },
      "Many survivors and families worry about pressure to \"settle\" an acid attack case outside the courts. This is particularly common when the attacker is a husband, former husband, relative, neighbour, or someone known to the family. Survivors may be approached by family elders, community leaders, intermediaries, or representatives of the offender who encourage reconciliation instead of legal action.",
      "Understanding the law is important in these situations. Acid attacks prosecuted under Section 336-B of the Pakistan Penal Code are classified as non-compoundable offences. In simple terms, this means the offence is considered so serious that it cannot simply be withdrawn or resolved through a private agreement between families in the same way that some other criminal matters can be. This protection exists because acid violence is recognised as causing severe and often lifelong harm. Parliament deliberately created stronger safeguards to prevent survivors from being pressured into abandoning legal proceedings against their wishes.",
      "That does not mean survivors never face pressure. In practice, some families may still encourage compromise because they are worried about social stigma, community tensions, financial concerns, or retaliation from the offender. Survivors should know that feeling pressured to forgive, reconcile, or remain silent does not take away their legal rights.",
      "If you are facing pressure to settle a case, it may be helpful to speak with an independent lawyer or legal aid organisation before making any decisions. Understanding your rights, the status of your case, and the legal consequences of any proposed arrangement can help ensure that decisions are made freely and with full information.",
      "Most importantly, survivors should remember that Pakistani law recognises acid attacks as among the most serious forms of violent crime. The legal system is designed to protect survivors, not to force them into agreements they do not want. Knowing that these offences are treated differently from ordinary disputes can help survivors and families make informed decisions about the path they wish to pursue.",

      { h3:"What If I Am Afraid of Retaliation?" },
      "Fear of retaliation is one of the most common reasons survivors delay reporting — particularly when the attacker is a husband, former husband, relative, or someone with influence. This fear is understandable, and you are not weak for feeling it.",
      "A few things are worth knowing:",
      { list:[
        "Because the offence is non-compoundable, the case does not depend entirely on your willingness to withstand pressure. Once the FIR is filed, the State becomes responsible for prosecuting.",
        "Threats, intimidation, and pressure to withdraw the case are themselves serious matters. Report them to the investigating officer and to your lawyer.",
        "Preserve evidence of intimidation: screenshots of messages, call logs, voice notes, social media threats, names of any intermediaries approaching your family.",
        "If you feel physically unsafe, discuss protection measures with your lawyer, the investigating officer, and any organisation supporting you.",
      ]},
      "No system can eliminate risk entirely. But being pressured, threatened, or shamed does not take away your legal rights.",

      { h:"Compensation and Financial Support" },
      "Survivors understandably want to know: Will I receive money? How much? When?",
      "The honest answer is that Pakistani law creates avenues for compensation, but does not guarantee any specific amount to every survivor. There are two main routes:",
      { list:[
        "The Rs 1 million fine under Section 336-B PPC. This is a minimum fine imposed on the convicted offender. Courts may direct that money recovered from the offender be paid to the survivor, but this is treated as part of the criminal punishment, not as an automatic transfer.",
        "Compensation under Section 544-A of the Code of Criminal Procedure. After conviction, the court can order the offender to pay compensation to the victim. Unlike the Rs 1 million fine, there is no fixed amount — the court decides based on the circumstances, including the severity of injuries, medical evidence, and financial losses.",
      ]},
      "Because both routes depend on conviction and a court order, it helps to keep careful records throughout — medical bills, surgical expenses, rehabilitation costs, proof of lost income, and any other documented financial impact. These records make it easier for a court to see the full picture of what the attack has cost you.",
      "Under the Punjab Acid Control Act 2025 (discussed below), there is also a route for compensation from a negligent acid seller if the attack resulted from illegal or negligent sale of acid.",

      { h:"What Recent Court Decisions Mean for Survivors" },
      "The strongest recent signal about how Pakistani courts view acid violence came in June 2026, when the Supreme Court delivered a landmark judgment in the case of Abdul Manan alias Imran.",
      "The convict had thrown acid on Iqra Perveen in her home in Faisalabad on 4 September 2019, while she was cooking. She suffered third-degree burns to around 40% of her body, including her face, chest, back, and left leg, and lost her left ear entirely. The Anti-Terrorism Court, Faisalabad had convicted him under Section 336-B in 2020 and sentenced him to life imprisonment with a Rs 1 million fine. The Lahore High Court upheld the conviction in 2022. The convict then appealed to the Supreme Court, asking for a reduced sentence on the basis that he had been around 17–18 years old at the time.",
      "A three-judge bench comprising Justice Muhammad Hashim Khan Kakar, Justice Salahuddin Panhwar, and Justice Ishtiaq Ibrahim rejected the appeal and upheld the life sentence and the fine. In a detailed 13-page judgment, Justice Kakar wrote that:",
      { list:[
        "Acid violence is an offence \"more heinous than homicide\". While a homicide victim dies once, an acid attack survivor is left to endure the harm every day.",
        "Acid violence is deeply rooted in gender-based violence, misogyny, and patriarchal aggression.",
        "Juvenility cannot shield perpetrators of brutal, premeditated crimes.",
      ]},
      "The Court also made a series of recommendations that, if implemented, would meaningfully change how survivors are supported in Pakistan:",
      { list:[
        "A National Acid Survivors' Rehabilitation Fund to cover reconstructive surgery, physiotherapy, and long-term psychological treatment.",
        "Trial completion within four months in acid attack cases, with High Courts actively monitoring timelines.",
        "Recognition of acid attack survivors as Persons with Disabilities, with disability certificates and quotas in employment, education, and welfare schemes.",
        "Monthly financial support for survivors left permanently disabled or unable to work.",
        "A centralised digital system for acid sales, requiring identity verification, biometric records, and real-time monitoring.",
        "A complete ban on retail sale of acid to private individuals, with legal sales limited to registered users through the digital system.",
      ]},
      "These are recommendations rather than automatic entitlements — but they now form part of an authoritative Supreme Court judgment. That matters when survivors, lawyers, and advocacy organisations push the State to act.",

      { h:"How Punjab's Acid Control Act Strengthens Protection" },
      "In 2025, Punjab passed the Punjab Acid Control Act 2025 — the first province-level law in Pakistan focused specifically on preventing acid violence at the point of sale.",
      "Key features:",
      { list:[
        "Licensing is mandatory for anyone selling, storing, transporting, importing, or manufacturing acid, with 30 corrosive chemicals regulated (including sulphuric, nitric, hydrochloric, and hydrofluoric acid).",
        "Selling acid without a licence is a non-bailable offence, punishable by up to 3 years' imprisonment and a fine of up to Rs 500,000.",
        "Licensed sellers who act negligently face 2 to 5 years' imprisonment and fines of Rs 200,000 to Rs 1 million.",
        "Sale of acid to individuals under 18 is prohibited.",
        "Sellers may be legally required to compensate victims if an attack resulted from their negligence, with the amount decided by the court.",
        "Every acid container must carry the chemical name, seller details, licence number, quality, quantity, and dates of manufacture and expiry.",
      ]},
      "The Deputy Commissioner of each district serves as the licensing authority. Enforcement is coordinated by the Punjab Home Department and the Punjab Women Protection Authority.",
      "At the time of writing, similar dedicated legislation has not yet been enacted in Sindh, Khyber Pakhtunkhwa, or Balochistan. However, the Punjab law provides a working template, and the Supreme Court's 2026 judgment has called for stronger acid regulation nationwide.",

      { h:"Where to Find Legal Support" },
      "Reaching out to a legal aid organisation does not commit you to going to court. It simply gives you information. For many survivors and families, that first conversation is the most valuable step, because it turns a confusing situation into something with clear options.",
      "Organisations that may be able to help with legal advice, referrals, representation, or advocacy include:",
      { list:[
        "Legal Aid and Justice Authority (Ministry of Human Rights)",
        "Acid Survivors Foundation Pakistan (ASF Pakistan)",
        "AGHS Legal Aid Cell",
        "Aurat Foundation",
        "Provincial Women Protection Authorities (particularly the Punjab Women Protection Authority)",
        "Legal aid committees of the Pakistan Bar Council and district bar associations",
      ]},
      "Availability, contact details, and services change over time. Please verify current information directly with the organisation before making decisions.",

      { h:"Challenges Survivors Still Face" },
      "While legal protections have become significantly stronger, it is important to be honest about the challenges that remain.",
      "Many survivors continue to face lengthy medical treatment, financial hardship, social stigma, and delays within the justice system. Access to specialised legal support can vary depending on location, and survivors living in rural areas may face additional barriers when seeking medical care or legal assistance.",
      "The legal landscape today is far stronger than it was even a decade ago. Penalties are severe. The Supreme Court has publicly recognised the lifelong harm survivors carry. Punjab has taken the first serious step towards prevention at the point of sale. Organisations across the country are working every day on legal, medical, and social support. The system is not perfect, but survivors are not, and never should feel, invisible to it.",

      { h:"A Final Word" },
      "Recovery after an acid attack is rarely quick. Many survivors spend years rebuilding their health, their confidence, their education, their income, and their sense of self. Whatever pace that takes, it belongs to you.",
      "Seeking legal advice is a personal decision. Some survivors want prosecution as soon as possible. Others need time before they can even think about a courtroom. Both paths are valid. What matters is knowing that the violence committed against you is recognised, in the eyes of Pakistani law, as one of the most serious crimes a person can commit — and that you are entitled to protection, dignity, and access to justice.",
      "You are not alone. And you have more options than you may have been told.",

      { h:"Frequently Asked Questions" },
      "**Can I pursue legal action if the attacker was my husband or a family member?** Yes. The law does not offer lesser protection because the offender was a spouse, former spouse, or relative. The offence under Section 336-B is the same regardless of relationship.",
      "**What if I do not know who carried out the attack?** You can still report. Investigations may identify suspects through witness statements, forensic evidence, CCTV footage, mobile phone data, and other methods.",
      "**What if the police refuse to register my FIR?** You can approach a Magistrate under Sections 22-A and 22-B of the Code of Criminal Procedure and request an order directing the police to register the FIR.",
      "**Do I need a lawyer to report an acid attack?** No. But legal advice is very helpful once an investigation begins and even more so during trial and compensation proceedings.",
      "**Can I get free legal aid?** Possibly. The Legal Aid and Justice Authority Act 2020 provides a framework for state-supported legal aid. Some NGOs and bar council committees also provide free or reduced-fee representation.",
      "**Can survivors receive compensation?** Courts can award compensation under Section 544-A CrPC after conviction, and can direct payment of the Rs 1 million fine under Section 336-B. Amounts vary based on the case.",
      "**What punishment can the attacker receive?** Under Section 336-B PPC: life imprisonment or a minimum of 14 years, plus a minimum fine of Rs 1 million.",
      "**Will my case be heard in public?** Depending on the circumstances, privacy protections such as in-camera proceedings may be available.",
      "**What if I forgave the attacker or initially decided not to pursue legal action?** Many decisions in the immediate aftermath are made under enormous pressure. If your circumstances have changed, speaking to a lawyer is the best way to understand what remains possible in your specific case.",
      "**What should I try to keep as evidence?** Medical records, medico-legal reports, photographs of injuries, treatment receipts, witness details, threatening messages, call records, and any documents related to the attack.",
      "**Is the Punjab Acid Control Act 2025 in force outside Punjab?** No. It applies only in Punjab. Other provinces continue to rely on the general framework under the Criminal Law (Second Amendment) Act 2011 and the Pakistan Penal Code.",

      "If you or someone you know is a survivor of an acid attack and needs support, AcidHelp maintains a directory of hospitals, legal aid organisations, women's protection resources, and psychological support services across Pakistan. Visit acidhelp.com for verified contacts and further guidance.",

      { h:"Summary" },
      "Under Pakistani law, acid attacks constitute extremely serious criminal offences. The Criminal Law (Second Amendment) Act, 2011 established dedicated provisions (Sections 336-A and 336-B, Pakistan Penal Code) mandating life imprisonment or minimum 14-year sentences plus Rs 1 million fines. Survivors possess rights including the right to have an FIR registered without needing legal representation initially, access to free legal assistance, compensation eligibility, and privacy protections. Crucially, these protections apply uniformly regardless of offender identity — whether stranger or family member.",
      "Acid attacks qualify as non-compoundable offences, meaning survivors cannot be pressured into private settlements. A landmark 2026 Supreme Court judgment characterised such violence as \"more heinous than homicide\" and recommended establishing victim rehabilitation funding, disability recognition, expedited trials, and comprehensive acid-sales regulation.",
      "Punjab's 2025 Acid Control Act pioneered province-specific prevention legislation requiring seller licensing, age restrictions, and enhanced labeling requirements. Reporting delays do not automatically eliminate legal recourse; evidence preservation — medical records, photographs, witness details, communications — strengthens prosecutions. Organisations like the Acid Survivors Foundation Pakistan and Legal Aid and Justice Authority provide survivor support nationwide.",
    ]},
];

// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
const T = {
  en:{
    dir:"ltr", name:"EN", ff:"'Helvetica Neue',Helvetica,Arial,sans-serif", hff:HEAD_FF,
    steps:[
      { n:"1", icon:"drop",  head:"FLUSH WITH WATER", sub:"Non-stop", body:"Pour cool running water over the area continuously for at least 20 minutes. Do not use a small amount and stop — keep flushing the entire time." },
      { n:"2", icon:"phone", head:"CALL 1122", sub:"Say: acid attack", body:"Pakistan's emergency response number. Say: 'Acid attack — send ambulance immediately.' Stay on the line." },
      { n:"3", icon:"cross", head:"GET TO HOSPITAL", sub:"Burns unit", body:"Burns unit. Do not cover the wound with cloth — contact with fabric worsens the burn. Keep flushing until medical help arrives." },
    ],
    emTitle:"ACID ATTACK?", emSub:"Act immediately. Every second matters",
    doNot:"DO NOT apply: toothpaste · cream · milk · oil · baking soda — and do NOT cover with cloth",
    callBtn:"CALL 1122", altLabel:"Also call:", edhi:"Edhi: 115", asf:"ASF: 051-2305354",
    playVideo:"PLAY VIDEO",
    videoLabel:"Watch: How to flush correctly",
    stepsTitle:"Immediate Action", stepsEyebrow:"First 30 minutes",
    stepsSub:"What you do in the first half hour matters most. Follow these three steps in order.",
    rescueCta:"Rescue 1122",
    navItems:["Emergency","Nearby","Recovery","Blog","About","Join Us"],
    pages:["emergency","medical","resources","blog","about","joinus"],
    blogTitle:"The AcidHelp Blog",
    featuredLabel:"Featured Post", readNowLabel:"Read Now", byLabel:"By", backToBlogLabel:"Back to Blog",
    medTitle:"Hospitals Near You", medSub:"Tap a pin · Get directions · Call",
    nearMe:"Hospitals Near Me", locating:"Finding you…", callHosp:"Call Now", directions:"Directions",
    resTitle:"Support & Recovery", resSub:"Resources for survivors and families",
    resCards:[
      { icon:"🧠", color:C.purple, dim:C.purpleDim, title:"Psychological Support", sub:"Trauma counselling & mental health", orgs:[
        { ...ORGS.umang  },{ ...ORGS.rozan  },{ ...ORGS.asf }]},
      { icon:"🩺", color:C.blue, dim:C.blueDim, title:"Medical & Surgical", sub:"Burns care & reconstructive surgery", orgs:[
        { ...ORGS.depilex },
        { name:"SIUT Karachi (free surgery)", phone:"021-99201300", web:"siut.org" },
        { name:"Services Hospital Lahore",     phone:"042-99200163", web:"—" }]},
      { icon:"📊", color:C.teal, dim:C.tealDim, title:"Dos & Don'ts Guide", sub:"First aid facts every bystander needs", orgs:[{ ...ORGS.asf }]},
      { icon:"⚖️", color:C.warn, dim:C.warnDim, title:"Legal Aid", sub:"Rights, FIR filing & court support", orgs:[
        { name:"War Against Rape (WAR)", phone:"021-35375533", web:"war.org.pk" },
        { ...ORGS.asf },{ ...ORGS.shirkat}]},
      { icon:"➕", color:C.green, dim:C.greenDim, title:"Employment & Livelihood", sub:"Skills training, income & job placement", orgs:[
        { ...ORGS.asf },{ ...ORGS.depilex}]},
    ],
    conTitle:"Get Help or Help Someone Heal", conSub:"Reach out for support, or partner with us to help more survivors heal and rebuild across Pakistan.",
    survivorTab:"I'm a Survivor", volunteerTab:"I'm a Volunteer",
    nameLabel:"Name", emailLabel:"Email", notesLabel:"Additional Information",
    helpLabel:"Help Required", helpOptions:["Medical","Legal","Employment","Share Your Story"],
    roleLabel:"Your Role", submitLabel:"Send Message",
    orgTypes:["Hospital / Medical Centre","NGO / Non-profit","Legal Organisation","Mental Health Provider","Corporate / CSR","Government Body","Other"],
    submittedMsg:"Thank you! Someone will be in touch soon.",
    survivorSubmitLabel:"Submit Request",
    survivorSubmittedMsg:"Thank you! Someone will be in touch soon.",
    abtTitle:"About AcidHelp",
    abtMission:"AcidHelp is Pakistan's first AI-integrated platform for acid attack first aid and support. It is free, and is being built to serve multiple regions across Pakistan.",
    statsTitle:"The Reality in Pakistan",
    statsSource:"Source:",
    faqTitle:"FAQs",
    faqs:[
      { q:"Is a small splash of water enough to flush an acid burn?", a:"No — you must flush continuously with large amounts of running water for at least 20 minutes. Stopping early or using too little water traps the acid against the skin and deepens the burn." },
      { q:"Should I cover the wound with cloth to protect it?", a:"No — never cover an acid burn with cloth, bandage, or any material. Fabric retains acid and heat, significantly worsening the injury. Keep the area open and keep flushing." },
      { q:"Will toothpaste or cream neutralise the acid?", a:"No — toothpaste, cream, milk, baking soda, and oil are all harmful on acid burns. They trap heat and cause further damage. Only cool running water helps." },
    ],
    advocacyTitle:"Our Advocacy",
    advocacy:"Acidhelp.com advocates for a complete ban on the open retail sale of acid in Pakistan, mandatory ID verification for all purchases, enhanced sentencing for perpetrators, and free reconstructive care for every survivor.",
    advocacyPoints:["Ban on open acid sales","Mandatory ID verification","Tougher sentencing for perpetrators","Free reconstructive care"],
    footerLine2:"Acidhelp.com is not a substitute for emergency services. If someone is in danger, call 1122 immediately.",
    chatTitle:"Ask AcidHelp", chatTeaser:"How can we help?",
    chatGreeting:"Hi, I'm here to help with quick first-aid questions. Ask me something, or pick a question below.",
    chatPlaceholder:"Type your question…",
    chatFallback:"I'm not sure about that one. For anything urgent, please call 1122 immediately. You can also try one of the questions below.",
    chatPrompts:[
      { q:"Can I apply milk?", a:"No — milk, like toothpaste, cream, oil, and baking soda, is not safe on an acid burn. It traps heat and can worsen the injury. Only flush with cool running water for at least 20 minutes." },
      { q:"Can I apply toothpaste?", a:"No — toothpaste does not neutralise acid and can trap heat against the skin. Stick to cool running water, continuously, for at least 20 minutes." },
      { q:"How much water should I use?", a:"Use large amounts of cool running water, non-stop, for at least 20 minutes. Don't stop early or use just a splash." },
      { q:"Should I cover the wound?", a:"No — never cover an acid burn with cloth or bandage. Fabric traps acid and heat and makes the injury worse. Keep flushing with water instead." },
      { q:"What number do I call?", a:"Call 1122 immediately — that's Pakistan's emergency response number. You can also reach Edhi at 115." },
    ],
  },
  ur:{
    dir:"ltr", name:"اردو", ff:"'Noto Nastaliq Urdu','Noto Sans',sans-serif", hff:"'Noto Nastaliq Urdu','Noto Sans',sans-serif",
    steps:[
      { n:"۱", icon:"drop",  head:"پانی سے دھوئیں", sub:"بغیر رکے", body:"کم از کم ۲۰ منٹ تک ٹھنڈا پانی مسلسل ڈالتے رہیں۔ تھوڑا پانی ڈال کر نہ رکیں — پورے وقت دھوتے رہیں۔" },
      { n:"۲", icon:"phone", head:"۱۱۲۲ کال کریں", sub:"کہیں: تیزاب حملہ", body:"پاکستان کا ہنگامی نمبر۔ کہیں: 'تیزاب حملہ — فوری ایمبولینس بھیجیں۔' لائن مت کاٹیں۔" },
      { n:"۳", icon:"cross", head:"ہسپتال جائیں", sub:"برنز وارڈ", body:"برنز وارڈ۔ زخم کو کپڑے سے مت ڈھانپیں — کپڑا لگنے سے جلن بڑھ جاتی ہے۔ مدد آنے تک پانی ڈالتے رہیں۔" },
    ],
    emTitle:"تیزاب حملہ؟", emSub:"فوری عمل کریں — ہر لمحہ اہم ہے",
    doNot:"یہ مت لگائیں: ٹوتھ پیسٹ · کریم · دودھ · تیل · سوڈا — اور کپڑے سے مت ڈھانپیں",
    callBtn:"ابھی ۱۱۲۲ کال کریں", altLabel:"یہ بھی آزمائیں:", edhi:"ایدھی: ۱۱۵", asf:"ASF: 051-2305354",
    playVideo:"ویڈیو چلائیں",
    videoLabel:"دیکھیں: صحیح طریقے سے پانی کیسے ڈالیں",
    stepsTitle:"فوری اقدام", stepsEyebrow:"پہلے ۳۰ منٹ",
    stepsSub:"پہلے آدھے گھنٹے میں آپ کا عمل سب سے اہم ہے۔ یہ تین اقدامات ترتیب سے اپنائیں۔",
    rescueCta:"ریسکیو 1122",
    navItems:["ہنگامی مدد","قریبی","وسائل","بلاگ","ہمارے بارے میں","شامل ہوں"],
    pages:["emergency","medical","resources","blog","about","joinus"],
    blogTitle:"ایسڈ ہیلپ بلاگ",
    featuredLabel:"نمایاں تحریر", readNowLabel:"ابھی پڑھیں", byLabel:"از", backToBlogLabel:"بلاگ پر واپس جائیں",
    medTitle:"قریبی ہسپتال", medSub:"پن دبائیں · سمت حاصل کریں · کال کریں",
    nearMe:"میرے قریب ہسپتال", locating:"تلاش جاری ہے…", callHosp:"ابھی کال کریں", directions:"سمت",
    resTitle:"مدد اور بحالی", resSub:"متاثرین اور خاندانوں کے لیے مفت مدد",
    resCards:[
      { icon:"🧠", color:C.purple, dim:C.purpleDim, title:"نفسیاتی مدد", sub:"مشاورت اور ذہنی صحت", orgs:[
        { ...ORGS.umang  },{ ...ORGS.rozan  },{ ...ORGS.asf }]},
      { icon:"🩺", color:C.blue,   dim:C.blueDim,   title:"طبی اور سرجری", sub:"برنز کیئر اور پلاسٹک سرجری", orgs:[
        { ...ORGS.depilex },
        { name:"SIUT کراچی", phone:"021-99201300", web:"siut.org" },
        { name:"سروسز ہسپتال لاہور", phone:"042-99200163" }]},
      { icon:"📊", color:C.teal,   dim:C.tealDim,   title:"کیا کریں؟ کیا نہ کریں؟", sub:"ابتدائی طبی امداد", orgs:[{ ...ORGS.asf }]},
      { icon:"⚖️", color:C.warn,  dim:C.warnDim,  title:"قانونی مدد", sub:"حقوق، FIR اور عدالتی سپورٹ", orgs:[
        { name:"WAR", phone:"021-35375533", web:"war.org.pk" },
        { ...ORGS.asf },{ ...ORGS.shirkat }]},
      { icon:"➕", color:C.green,  dim:C.greenDim,  title:"روزگار", sub:"ہنر تربیت اور آمدنی", orgs:[
        { ...ORGS.asf },{ ...ORGS.depilex }]},
    ],
    conTitle:"مدد حاصل کریں یا شامل ہوں", conSub:"مدد کے لیے رابطہ کریں یا زیادہ متاثرین تک پہنچنے میں ہمارا ساتھ دیں",
    survivorTab:"میں متاثرہ ہوں", volunteerTab:"میں رضاکار ہوں",
    nameLabel:"نام", emailLabel:"ای میل", notesLabel:"اضافی معلومات",
    helpLabel:"درکار مدد", helpOptions:["طبی","قانونی","روزگار","اپنی کہانی شیئر کریں"],
    roleLabel:"آپ کا کردار", submitLabel:"پیغام بھیجیں",
    orgTypes:["ہسپتال","این جی او","قانونی تنظیم","ذہنی صحت","کارپوریٹ","حکومتی ادارہ","دیگر"],
    submittedMsg:"شکریہ! جلد ہی کوئی رابطہ کرے گا۔",
    survivorSubmitLabel:"درخواست بھیجیں",
    survivorSubmittedMsg:"شکریہ! جلد ہی کوئی رابطہ کرے گا۔",
    abtTitle:"ہمارے بارے میں", abtMission:"Acidhelp پاکستان میں تیزاب حملے کے بچ جانے والوں کے لیے ایک غیر منافع بخش ہنگامی رسپانس پلیٹ فارم ہے۔",
    statsTitle:"پاکستان میں حقیقت", statsSource:"ماخذ:",
    faqTitle:"FAQs",
    faqs:[
      { q:"کیا تھوڑا سا پانی ڈالنا کافی ہے؟", a:"نہیں — کم از کم ۲۰ منٹ تک مسلسل بڑی مقدار میں پانی ڈالنا ضروری ہے۔ رکنا یا کم پانی استعمال کرنا تیزاب کو جلد پر رہنے دیتا ہے۔" },
      { q:"کیا زخم کو کپڑے سے ڈھانپنا چاہیے؟", a:"نہیں — کبھی بھی تیزاب کے زخم کو کپڑے یا پٹی سے نہ ڈھانپیں۔ کپڑا تیزاب اور گرمی کو روکتا ہے اور جلن بہت بڑھ جاتی ہے۔" },
      { q:"کیا ٹوتھ پیسٹ یا کریم لگانے سے تیزاب ختم ہوگا؟", a:"نہیں — ٹوتھ پیسٹ، کریم، دودھ، سوڈا اور تیل سب نقصاندہ ہیں۔ صرف ٹھنڈا بہتا پانی مدد کرتا ہے۔" },
    ],
    advocacyTitle:"ہماری وکالت",
    advocacy:"Acidhelp.com تیزاب کی عام فروخت پر مکمل پابندی اور تمام بچ جانے والوں کے لیے مفت سرجری کی وکالت کرتا ہے۔",
    advocacyPoints:["تیزاب کی کھلی فروخت پر پابندی","لازمی شناختی تصدیق","مجرموں کے لیے سخت سزائیں","مفت تعمیرِ نو کی سرجری"],
    footerLine2:"Acidhelp.com ہنگامی خدمات کا متبادل نہیں۔ فوری ۱۱۲۲ کال کریں۔",
    chatTitle:"AcidHelp سے پوچھیں", chatTeaser:"ہم کیسے مدد کر سکتے ہیں؟",
    chatGreeting:"السلام علیکم، میں فوری ابتدائی طبی امداد کے سوالات میں مدد کے لیے حاضر ہوں۔ کچھ پوچھیں یا نیچے دیے گئے سوالات میں سے کوئی منتخب کریں۔",
    chatPlaceholder:"اپنا سوال لکھیں…",
    chatFallback:"مجھے اس کا یقین نہیں۔ کسی بھی ہنگامی صورتحال میں فوری طور پر ۱۱۲۲ پر کال کریں۔ آپ نیچے دیے گئے سوالات بھی آزما سکتے ہیں۔",
    chatPrompts:[
      { q:"کیا دودھ لگا سکتے ہیں؟", a:"نہیں — دودھ، ٹوتھ پیسٹ، کریم، تیل اور سوڈا کی طرح تیزاب کے زخم پر محفوظ نہیں۔ یہ گرمی کو روکتا ہے اور زخم بڑھا سکتا ہے۔ صرف کم از کم ۲۰ منٹ تک ٹھنڈا بہتا پانی استعمال کریں۔" },
      { q:"کیا ٹوتھ پیسٹ لگا سکتے ہیں؟", a:"نہیں — ٹوتھ پیسٹ تیزاب کو ختم نہیں کرتا اور جلد پر گرمی روک سکتا ہے۔ صرف مسلسل کم از کم ۲۰ منٹ تک ٹھنڈا پانی استعمال کریں۔" },
      { q:"کتنا پانی استعمال کریں؟", a:"کم از کم ۲۰ منٹ تک مسلسل بڑی مقدار میں ٹھنڈا بہتا پانی استعمال کریں۔ جلدی نہ رکیں یا تھوڑا پانی استعمال نہ کریں۔" },
      { q:"کیا زخم کو ڈھانپیں؟", a:"نہیں — تیزاب کے زخم کو کبھی کپڑے یا پٹی سے نہ ڈھانپیں۔ کپڑا گرمی اور تیزاب کو روکتا ہے اور زخم بڑھا دیتا ہے۔ پانی ڈالتے رہیں۔" },
      { q:"کس نمبر پر کال کریں؟", a:"فوری طور پر ۱۱۲۲ پر کال کریں — یہ پاکستان کا ہنگامی نمبر ہے۔ آپ ایدھی کو ۱۱۵ پر بھی رابطہ کر سکتے ہیں۔" },
    ],
  },
  ro:{
    dir:"ltr", name:"ROM", ff:"'Helvetica Neue',Helvetica,Arial,sans-serif", hff:HEAD_FF,
    steps:[
      { n:"1", icon:"drop",  head:"PAANI SE DHOYEIN", sub:"Lagatar", body:"Thanda paani kam az kam 20 minute tak lagatar daalein. Thoda paani dal kar mat rukein — poore waqt dhote rahein." },
      { n:"2", icon:"phone", head:"1122 CALL KAREIN", sub:"Bolein: tezab hamla", body:"Pakistan ka hangami number. Bolein: 'Tezab hamla — fori ambulance bhejein.' Line mat kaatein." },
      { n:"3", icon:"cross", head:"HOSPITAL JAYEIN", sub:"Burns ward", body:"Burns ward. Zakham ko kapre se mat dhanpein — kapra lagaane se jalaa aur badh jaata hai. Madad aane tak paani daalte rahein." },
    ],
    emTitle:"TEZAB HAMLA?", emSub:"Fori amal karein — har pal qeemti hai",
    doNot:"YEH MAT LAGAYEIN: Toothpaste · Cream · Doodh · Tel · Soda — aur kapre se mat dhanpein",
    callBtn:"ABHI 1122 CALL KAREIN", altLabel:"Ya call karein:", edhi:"Edhi: 115", asf:"ASF: 051-2305354",
    playVideo:"VIDEO CHALAYEIN",
    videoLabel:"Dekhein: Sahi tareeqe se paani kaise daalein",
    stepsTitle:"Foran Iqdaam", stepsEyebrow:"Pehle 30 Minute",
    stepsSub:"Pehle adhe ghantay mein aap ka amal sab se ahem hai. In teen iqdamaat ko tarteeb se apnayein.",
    rescueCta:"Rescue 1122",
    navItems:["Hangami Madad","Qareeb","Wasail","Blog","Hamare Baare Mein","Shamil Hon"],
    pages:["emergency","medical","resources","blog","about","joinus"],
    blogTitle:"AcidHelp Blog",
    featuredLabel:"Featured Post", readNowLabel:"Abhi Parhein", byLabel:"Az", backToBlogLabel:"Blog Par Wapis Jayein",
    medTitle:"Qareeb Hospital", medSub:"Pin dabayein · Rasta lein · Call karein",
    nearMe:"Mere Qareeb Hospital", locating:"Dhundh raha hai…", callHosp:"Abhi Call Karein", directions:"Rasta",
    resTitle:"Madad aur Bahali", resSub:"Bachne walon ke liye muft madad",
    resCards:[
      { icon:"🧠", color:C.purple, dim:C.purpleDim, title:"Nafsiyati Madad", sub:"Mashwara aur zehni sehat", orgs:[
        { ...ORGS.umang  },{ ...ORGS.rozan  },{ ...ORGS.asf }]},
      { icon:"🩺", color:C.blue,   dim:C.blueDim,   title:"Tibbi aur Surgery", sub:"Burns care aur reconstructive surgery", orgs:[
        { ...ORGS.depilex },
        { name:"SIUT Karachi", phone:"021-99201300", web:"siut.org" },
        { name:"Services Hospital Lahore", phone:"042-99200163" }]},
      { icon:"📊", color:C.teal,   dim:C.tealDim,   title:"Kya Karein? Kya Na Karein?", sub:"First aid facts", orgs:[{ ...ORGS.asf }]},
      { icon:"⚖️", color:C.warn,  dim:C.warnDim,  title:"Qanooni Madad", sub:"Haqooq, FIR aur court support", orgs:[
        { name:"War Against Rape (WAR)", phone:"021-35375533" },
        { ...ORGS.asf },{ ...ORGS.shirkat }]},
      { icon:"➕", color:C.green,  dim:C.greenDim,  title:"Rozgaar", sub:"Hunar training aur aamdan", orgs:[
        { ...ORGS.asf },{ ...ORGS.depilex }]},
    ],
    conTitle:"Madad Hasil Karein ya Shamil Hon", conSub:"Madad ke liye rabta karein ya humara sath dein taake hum zyada bachne walon tak pohnch sakein",
    survivorTab:"Main Bachne Wala/Wali Hoon", volunteerTab:"Main Razakar Hoon",
    nameLabel:"Naam", emailLabel:"Email", notesLabel:"Mazeed Maloomat",
    helpLabel:"Darkar Madad", helpOptions:["Tibbi","Qanooni","Rozgaar","Apni Kahani Share Karein"],
    roleLabel:"Aap ka Kirdar", submitLabel:"Paigham Bhejein",
    orgTypes:["Hospital","NGO","Qanooni Tanzeem","Zehni Sehat","Corporate","Sarkari Idaara","Aur"],
    submittedMsg:"Shukriya! Jald hi koi rabta karega.",
    survivorSubmitLabel:"Darkhwast Bhejein",
    survivorSubmittedMsg:"Shukriya! Jald hi koi rabta karega.",
    abtTitle:"Hamare Baare Mein", abtMission:"Acidhelp Pakistan mein tezab hamle ke bachne walon ke liye ek ghair munafa bakhsh hangami response platform hai.",
    statsTitle:"Pakistan Mein Haqeeqat", statsSource:"Maakhaz:",
    faqTitle:"FAQs",
    faqs:[
      { q:"Kya thoda paani daalna kafi hai?", a:"Nahin — kam az kam 20 minute tak musalsal badi miqdar mein paani daalein. Rukein nahin — yahi tezab ko jald se hatata hai." },
      { q:"Kya zakham ko kapre se dhanpna chahiye?", a:"Nahin — kabhi bhi kapra ya patti mat lagayein. Kapra tezab aur garmi ko rok leta hai aur jalaan aur badh jaati hai." },
      { q:"Kya toothpaste ya cream se tezab khatam hoga?", a:"Nahin — toothpaste, cream, doodh, soda aur tel — yeh sab nuksan deh hain. Sirf thanda behta paani madad karta hai." },
    ],
    advocacyTitle:"Hamari Waqalat",
    advocacy:"Acidhelp.com tezab ki aam farokht par mukammal pabandi aur tamam bachne walon ke liye muft surgery ki waqalat karta hai.",
    advocacyPoints:["Tezab ki khuli farokht par pabandi","Lazmi shanakhti tasdeeq","Mujrimon ke liye sakht sazayen","Muft reconstructive surgery"],
    footerLine2:"Acidhelp.com hangami khidmaat ka mutbadil nahin. Fori 1122 call karein.",
    chatTitle:"AcidHelp Se Poochein", chatTeaser:"Hum Kaise Madad Kar Sakte Hain?",
    chatGreeting:"Assalam o Alaikum, main fori first aid sawalat mein madad ke liye hazir hoon. Kuch poochein ya neeche diye gaye sawalat mein se koi muntakhib karein.",
    chatPlaceholder:"Apna sawal likhein…",
    chatFallback:"Mujhe iska yaqeen nahin. Kisi bhi hangami surat mein fori 1122 par call karein. Aap neeche diye gaye sawalat bhi azma sakte hain.",
    chatPrompts:[
      { q:"Kya doodh laga sakte hain?", a:"Nahin — doodh, toothpaste, cream, tel aur soda ki tarah tezab ke zakham par mahfooz nahin. Yeh garmi ko rokta hai aur zakham badha sakta hai. Sirf kam az kam 20 minute tak thanda behta paani istemal karein." },
      { q:"Kya toothpaste laga sakte hain?", a:"Nahin — toothpaste tezab ko khatam nahin karta aur jild par garmi rok sakta hai. Sirf musalsal kam az kam 20 minute tak thanda paani istemal karein." },
      { q:"Kitna paani istemal karein?", a:"Kam az kam 20 minute tak musalsal badi miqdar mein thanda behta paani istemal karein. Jaldi na rukein ya thoda paani istemal na karein." },
      { q:"Kya zakham ko dhanpein?", a:"Nahin — tezab ke zakham ko kabhi kapre ya patti se mat dhanpein. Kapra garmi aur tezab ko rokta hai aur zakham badha deta hai. Paani daalte rahein." },
      { q:"Kis number par call karein?", a:"Fori 1122 par call karein — yeh Pakistan ka hangami number hai. Aap Edhi ko 115 par bhi rabta kar sakte hain." },
    ],
  },
};

// ── APP STATE ─────────────────────────────────────────────────────────────────
// Each page now lives in its own HTML file (see PAGE_URLS below); this file
// seeds window.INITIAL_PAGE in an inline <script> before app.js loads, so
// state.page starts on the right branch for whichever file this is.
const PAGE_URLS = {
  emergency:"/", medical:"/map", resources:"/resources",
  blog:"/blog", about:"/about", joinus:"/joinus",
};

const state = {
  // Cross-page nav is now a real reload, so the language choice has to
  // survive that reload itself — persisted here instead of just in memory.
  // Validate the stored value against the languages that still exist — a
  // visitor who chose a since-removed language (e.g. Pashto) falls back to
  // English instead of crashing on a missing T[] entry.
  lang:(()=>{ try{ const l = localStorage.getItem("acidhelp_lang"); return ["en","ur","ro"].includes(l) ? l : "en"; }catch(e){ return "en"; } })(),
  page: window.INITIAL_PAGE || "emergency",
  activeBlogId:null,
  joinTab:"survivor",
  survivorForm:{name:"",email:"",notes:"",help:""}, survivorSubmitted:false,
  volunteerForm:{name:"",email:"",notes:"",role:""}, volunteerSubmitted:false,
  chatOpen:false, chatMessages:[], chatDraft:"",
};
let openCard = null;
let openFaq = 0;
const mapState = { map:null, userMarker:null, selected:null, nearbyList:[], loading:false, locError:null, panelCollapsed:false, markers:{}, userLoc:null };
const revealedSections = new Set();

const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
// Nastaliq (ur) needs noticeably more line-height than Latin scripts at the same
// nominal value, or tall/multi-line headings visibly overlap the content below them.
// Keyed on language, not t.dir — the UI layout itself always stays left-to-right
// (see the `dir` field on each language above), this is purely a script-shaping fix.
const rtlLH = (t, tight, loose) => state.lang==="ur" ? loose : tight;

// ── SHARED SVG BITS ───────────────────────────────────────────────────────────
const phoneSVG = (size,fill)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="${fill}"/></svg>`;
// Speaker icon for the hero video mute toggle — crossed-out when muted,
// with sound waves when playing.
const speakerSVG = (muted)=>`<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H3v6h3l5 4V5z" fill="#fff"/>${muted ? `<path d="M16.5 9.5l5 5M21.5 9.5l-5 5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>` : `<path d="M16 9a4 4 0 010 6M18.7 6.8a7.5 7.5 0 010 10.4" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>`}</svg>`;
const xCircleSVG = (size,color)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><circle cx="12" cy="12" r="10" fill="${color}" fill-opacity="0.16"/><path d="M15 9l-6 6M9 9l6 6" stroke="${color}" stroke-width="2" stroke-linecap="round"/></svg>`;
const checkCircleSVG = (size,color)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><circle cx="12" cy="12" r="10" fill="${color}" fill-opacity="0.16"/><path d="M8 12.4l2.4 2.4L16 9" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
// stroke uses currentColor so the open/closed tint is driven entirely by the
// .faq-item.is-open CSS rule — letting a plain class toggle animate it smoothly
const plusSVG = (size)=>`<svg class="faq-plus" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
const chatBubbleSVG = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 4h16a1 1 0 011 1v11a1 1 0 01-1 1H9l-5 4v-4H4a1 1 0 01-1-1V5a1 1 0 011-1z" fill="#fff"/></svg>`;
const closeXSVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>`;
const sendSVG = (fill="#fff")=>`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 11l18-8-8 18-2-8-8-2z" fill="${fill}"/></svg>`;
const restartSVG = (color)=>`<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M4 4v6h6M20 20v-6h-6" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 15a8 8 0 0013.9 3M18.5 9A8 8 0 004.6 6" stroke="${color}" stroke-width="2" stroke-linecap="round"/></svg>`;
const dropPath = `M32 6C32 6 12 39 12 54 12 66.15 20.95 76 32 76 43.05 76 52 66.15 52 54 52 39 32 6 32 6Z`;

// Solid, filled map/hospital icons — same geometric, filled aesthetic as the
// logo mark (which is a shield with a droplet). Burns facilities reuse the
// logo's own droplet shape; survivor-care sites get a heart; every other
// medical facility gets a medical cross.
// Full-colour illustrated marker icons (from images/Icons) for the three main
// facility types; anything else falls back to the drawn SVG glyphs below.
const HOSP_IMG = { "🔥":IMG.icBurns, "✂️":IMG.icRecon, "🏥":IMG.icHospital, "⚕️":IMG.icHospital };
// Marker badge: every facility gets one of the three illustrated icons (burns
// centre / hospital / reconstruction) on a white disc. Any icon key not in
// HOSP_IMG (a stray emoji on an older entry, say) still falls back to the
// generic hospital icon rather than a plain SVG glyph, so no marker on the
// map is ever left without a proper illustrated icon.
const hospBadge = (emoji,diameter,col,ring)=>{
  const img = HOSP_IMG[emoji] || IMG.icHospital;
  // `ring` adds an outer stroke (used to flag the closest hospital).
  const shadow = ring ? `0 0 0 3px ${ring},0 3px 14px rgba(0,0,0,0.4)` : `0 3px 14px rgba(0,0,0,0.4)`;
  return `<div style="width:${diameter}px;height:${diameter}px;background:#fff;border-radius:50%;border:3px solid ${col};box-shadow:${shadow};display:flex;align-items:center;justify-content:center;cursor:pointer;padding:${Math.round(diameter*0.16)}px"><img src="${img}" alt="" style="width:100%;height:100%;object-fit:contain;display:block"></div>`;
};
const pinSVG = (size,fill)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.6A2.6 2.6 0 1112 6.4a2.6 2.6 0 010 5.2z" fill="${fill}"/></svg>`;
const navSVG = (size,fill)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M21 3L3 10.6l7.1 2.9 2.9 7.1L21 3z" fill="${fill}"/></svg>`;
const globeSVG = (size,c)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><circle cx="12" cy="12" r="9" stroke="${c}" stroke-width="1.6"/><path d="M3.2 12h17.6M12 3c2.6 2.5 2.6 15.5 0 18M12 3c-2.6 2.5-2.6 15.5 0 18" stroke="${c}" stroke-width="1.6"/></svg>`;
const mailSVG = (size,c)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="${c}" stroke-width="1.6"/><path d="M4.5 7.5l7.5 5.5 7.5-5.5" stroke="${c}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
// Figma logo mark — shield with white water drop (user-supplied, base64 in IMG.logo)
const logoMark = (h)=>`<img src="${IMG.logo}" alt="Acidhelp logo" style="height:${h}px;width:auto;flex-shrink:0;display:block">`;

// Big placeholder icons used inside "photo placeholder" step art
const STEP_ART_ICON = {
  drop: `<path d="${dropPath}" fill="rgba(255,255,255,0.16)" transform="translate(0,0) scale(1)"/>`,
  phone:`<path d="M17.6 28.8a40 40 0 0017.6 17.6l5.9-5.9a2.7 2.7 0 012.7-.6c3 1 6.2 1.5 9.5 1.5a2.7 2.7 0 012.7 2.7v9.3a2.7 2.7 0 01-2.7 2.7C28.3 56 8 35.7 8 10.7A2.7 2.7 0 0110.7 8H20a2.7 2.7 0 012.7 2.7c0 3.3.5 6.5 1.5 9.5a2.7 2.7 0 01-.6 2.7l-6 5.9z" fill="rgba(255,255,255,0.16)"/>`,
  cross:`<rect x="26" y="8" width="12" height="48" rx="6" fill="rgba(255,255,255,0.16)"/><rect x="8" y="26" width="48" height="12" rx="6" fill="rgba(255,255,255,0.16)"/>`,
};
const STEP_ART_GRAD = [
  "linear-gradient(150deg,#233a5c 0%,#12203a 55%,#0b1526 100%)",
  "linear-gradient(150deg,#4a1f2b 0%,#2a1220 55%,#160a12 100%)",
  "linear-gradient(150deg,#1f4038 0%,#10241f 55%,#0a1512 100%)",
];
// Simulated photo placeholder (clearly a stand-in; swap for real photography later)
function stepArt(i, iconKey){
  return `<div style="position:absolute;inset:0;background:${STEP_ART_GRAD[i]}">
    <svg width="100%" height="100%" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid meet" style="position:absolute;inset:0;padding:18%">${STEP_ART_ICON[iconKey]||""}</svg>
    <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0) 40%,rgba(0,0,0,0.6) 78%)"></div>
    <div style="position:absolute;top:12px;right:12px;font-family:${BODY_FF};font-size:9px;letter-spacing:.14em;color:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.18);border-radius:20px;padding:3px 8px">PHOTO TBD</div>
  </div>`;
}

// ── EMERGENCY / LANDING PAGE ──────────────────────────────────────────────────
function emergencyPage(t){
  return `<div>
    ${heroPortrait(t)}
    ${statsSection(t)}
    ${/* firstResponse(t) — original "What to do" temporarily hidden in favour
         of the firstResponseAlt variation below; restore by re-adding the call */""}
    ${firstResponseAlt(t)}
    ${faqSection(t)}
    ${footerStrip(t)}
  </div>`;
}

// "The Reality in Pakistan" — a row of key stats sitting directly under the
// hero video, aligned to its edges (same max-width), separated by dividers.
// No background bar: it reads as plain text on the page beneath the video.
function statsSection(t){
  return `<div class="reveal" data-reveal-id="stats" style="background:${C.bg};padding:0 clamp(20px,4vw,48px) clamp(20px,3vw,36px)">
    <div class="stats-row" style="max-width:1920px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:stretch">
      ${STATS_EN.map((s,i)=>`
        <div class="stats-item" style="flex:1;min-width:140px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;padding:16px 14px;${i>0?`border-left:1px solid ${C.border};`:""}">
          <span class="stat-counter" data-target="${s.num}" data-suffix="${s.suffix||""}" data-prefix="${s.prefix||""}" style="font-family:${BODY_FF};font-weight:900;font-size:34px;color:${s.color};font-variant-numeric:tabular-nums;line-height:1">${s.prefix||""}0${s.suffix||""}</span>
          <span style="font-family:${BODY_FF};font-size:14px;color:${C.sub};line-height:1.35">${s.label}</span>
          <span style="font-family:${BODY_FF};font-size:10px;color:${C.sub};opacity:0.75;line-height:1.3;margin-top:auto;padding-top:8px">${t.statsSource} ${s.src}</span>
        </div>`).join("")}
    </div>
  </div>`;
}

// Hero: centered heading + call-to-action above the full video in a rounded
// 16:9 box. On the landing page the nav and chat bot start hidden and slide in
// on first scroll (see initNavReveal + the .nav-hidden CSS).
function heroPortrait(t){
  return `<section class="reveal hero-lift" data-reveal-id="hero" style="background:${C.bg};padding:20px clamp(20px,4vw,48px) clamp(6px,1.2vw,14px)">
    <div class="hero-anim" style="max-width:720px;margin:0 auto;text-align:center;padding-bottom:clamp(14px,2vw,22px)">
      <h1 style="font-family:${BODY_FF};font-weight:700;font-size:clamp(44px,4.2vw,64px);letter-spacing:-1px;line-height:1.05;color:#fff;margin:0">${t.emTitle}</h1>
      <p class="hero-sub" style="font-family:${BODY_FF};font-weight:300;font-size:clamp(14px,1.2vw,16px);color:rgba(255,255,255,.85);margin:8px 0 18px">${t.emSub}</p>
      <a href="tel:1122" class="cta-btn" style="background:${C.brand};border-radius:40px;padding:12px 24px;display:inline-flex;align-items:center;gap:10px;text-decoration:none;box-shadow:0 8px 32px rgba(186,69,235,0.35)">
        ${phoneSVG(19,"#fff")}
        <span class="hero-cta-text" style="color:#fff;font-family:${BODY_FF};font-weight:700;font-size:clamp(16px,1.4vw,20px);letter-spacing:-0.5px">${t.callBtn}</span>
      </a>
    </div>
    <div style="max-width:1920px;margin:0 auto;display:flex;align-items:center;gap:clamp(10px,1.2vw,16px)">
      <div style="flex:1;min-width:0;border-radius:24px;overflow:hidden;aspect-ratio:1920/800;background:#050508">
        <video id="hero-video" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;object-position:center">
          <source src="${IMG.heroVideo}" type="video/mp4">
        </video>
      </div>
      ${heroVideoControls()}
    </div>
  </section>`;
}

// Circular language toggles + a mute button, stacked vertically in the space to
// the right of the hero video. The header keeps its own language pills as well.
function heroVideoControls(){
  const circleBase = "width:40px;height:40px;border-radius:50%;flex-shrink:0;cursor:pointer;display:flex;align-items:center;justify-content:center";
  const langCircle = (l)=>{
    const active = state.lang===l;
    const ff = l==="ur" ? "'Noto Nastaliq Urdu',sans-serif" : BODY_FF;
    return `<button onclick="setLang('${l}')" aria-label="${esc(T[l].name)}" style="${circleBase};background:${active?C.brand:"transparent"};color:#fff;border:1.5px solid ${active?C.brand:C.borderLight};font-size:${l==="ur"?12:10}px;font-weight:${active?700:600};letter-spacing:-0.3px;font-family:${ff}">${T[l].name}</button>`;
  };
  return `<div class="hero-vid-ctrls" style="display:flex;flex-direction:column;gap:9px;flex-shrink:0;align-items:center">
    ${["en","ur","ro"].map(langCircle).join("")}
    <button onclick="toggleHeroMute(this)" aria-label="Toggle video sound" class="hero-mute-btn" style="${circleBase};background:transparent;border:1.5px solid ${C.borderLight}">${speakerSVG(true)}</button>
  </div>`;
}
function toggleHeroMute(btn){
  const v = document.getElementById("hero-video");
  if(!v) return;
  v.muted = !v.muted;
  btn.innerHTML = speakerSVG(v.muted);
}

// "First response · What to do" — 3 step cards with brand-coloured left rail
function firstResponse(t){
  const rails = [C.brand, "#8E15C1", "#6D1093"];
  return `<section class="reveal" data-reveal-id="steps" style="padding:clamp(56px,12vw,96px) clamp(28px,5vw,80px) clamp(48px,6vw,80px)">
    <div style="max-width:1308px;margin:0 auto">
      <div style="font-family:${BODY_FF};font-size:12px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:${C.brand}">${t.stepsEyebrow}</div>
      <h2 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(42px,3.2vw,56px);letter-spacing:-1px;line-height:${rtlLH(t,1.1,1.6)};margin:16px 0 28px;color:${C.text}">${t.stepsTitle}</h2>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:18px">
        ${t.steps.map((s,i)=>`
          <div class="${["sc1","sc2","sc3"][i]}" style="background:#1a1e2e;border-radius:14px;overflow:hidden;display:flex;align-items:stretch;min-height:170px">
            <div style="background:${rails[i]};width:76px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:14px 0 0 14px">
              <span style="font-family:${BODY_FF};font-weight:900;font-size:56px;color:#fff;line-height:1">${s.n}</span>
            </div>
            <div style="padding:22px 24px;flex:1">
              <div style="font-family:${BODY_FF};font-weight:500;font-size:20px;color:#fff;letter-spacing:0.6px;line-height:${rtlLH(t,1.15,1.6)}">${s.head}</div>
              <div style="font-family:${BODY_FF};font-size:14px;color:rgba(255,255,255,.62);margin-top:10px;line-height:1.6">${s.body}</div>
            </div>
          </div>`).join("")}
      </div>

      <!-- DO NOT warning (Figma red variant) -->
      <div style="margin-top:20px;background:rgba(255,59,48,0.06);border:1px solid rgba(255,59,48,0.5);border-radius:12px;padding:16px 20px;display:flex;gap:12px;align-items:center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M12 2L1 21h22L12 2zm0 5.5L18.5 19h-13L12 7.5zm-1 5v4h2v-4h-2zm0 5v2h2v-2h-2z" fill="${C.red}"/></svg>
        <span style="font-family:${BODY_FF};font-weight:500;font-size:14px;color:${C.red};line-height:1.5">${t.doNot}</span>
      </div>
    </div>
  </section>`;
}

// Variation of "What to do" — eyebrow + heading + subcopy + a "Rescue 1122"
// CTA on the left, and three numbered steps connected by a single vertical
// line on the right (each number in a glowing ring beside its own card),
// with the DO NOT warning underneath. See the .fr-alt-* rules in styles.css.
function firstResponseAlt(t){
  // The three cards use the canonical Rinse / Ring / Remove first-aid steps
  // (shared with the About page's ABOUT_CONTENT.rrr).
  return `<section class="reveal" data-reveal-id="steps-alt" style="background:${C.bg};padding:clamp(48px,7vw,90px) clamp(20px,4vw,48px)">
    <div class="fr-alt-grid" style="max-width:1920px;margin:0 auto;column-gap:clamp(28px,4vw,64px);row-gap:16px">
      <!-- Left: eyebrow, heading, subcopy, CTA -->
      <div class="fr-alt-heading">
        <div style="font-family:${BODY_FF};font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#DFA4F8;margin:0 0 12px">${t.stepsEyebrow}</div>
        <h2 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(36px,3.4vw,52px);letter-spacing:-1px;line-height:1.06;text-transform:uppercase;color:#fff;margin:0">${t.stepsTitle}</h2>
        <p style="font-family:${BODY_FF};font-weight:300;font-size:15px;color:${C.sub};line-height:1.65;margin:16px 0 0;max-width:32ch">${t.stepsSub}</p>
        <a href="tel:1122" class="cta-btn" style="margin-top:24px;background:${C.brand};border-radius:40px;padding:12px 24px;display:inline-flex;align-items:center;gap:10px;text-decoration:none;box-shadow:0 8px 32px rgba(186,69,235,0.35)">
          ${phoneSVG(19,"#fff")}
          <span class="hero-cta-text" style="color:#fff;font-family:${BODY_FF};font-weight:700;font-size:clamp(16px,1.4vw,20px);letter-spacing:-0.5px">${t.rescueCta}</span>
        </a>
      </div>

      <!-- Right: three numbered steps, connected by one vertical line -->
      <div class="fr-alt-row">
        ${ABOUT_CONTENT.rrr.map((r,i)=>`
          <div class="fr-alt-item" style="display:flex;align-items:center;gap:22px">
            <span class="fr-alt-num-circle" style="width:52px;height:52px;border-radius:50%;border:1.5px solid ${C.brand};box-shadow:0 0 14px rgba(186,69,235,0.45);background:${C.bg};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:${BODY_FF};font-weight:700;font-size:19px;color:${C.brand}">${i+1}</span>
            <div class="fr-alt-card" tabindex="0" style="flex:1;min-width:0;background:none;border:1px solid rgba(255,255,255,0.15);border-radius:16px;padding:18px 22px;display:flex;flex-direction:column;gap:6px">
              <div class="fr-alt-card-head" style="font-family:${BODY_FF};font-weight:700;font-size:clamp(17px,1.5vw,21px);letter-spacing:0.4px;color:#fff;line-height:${rtlLH(t,1.3,1.7)}">${r.step.toUpperCase()}</div>
              <div class="fr-alt-body" style="font-family:${BODY_FF};font-size:14.5px;color:rgba(255,255,255,.75);line-height:1.65">${r.body}</div>
            </div>
          </div>`).join("")}
      </div>

      <!-- DO NOT warning: below cards only, same width as the card row -->
      <div class="fr-alt-warn" style="background:${C.redDim};border:1px solid rgba(255,59,48,0.35);border-radius:16px;padding:16px 20px;display:flex;gap:12px;align-items:center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M12 2L1 21h22L12 2zm0 5.5L18.5 19h-13L12 7.5zm-1 5v4h2v-4h-2zm0 5v2h2v-2h-2z" fill="${C.red}"/></svg>
        <span style="font-family:${BODY_FF};font-weight:500;font-size:14px;color:${C.red};line-height:1.5">${t.doNot}</span>
      </div>
    </div>
  </section>`;
}

// Shared footer — full-width photo strip with logo/email left, nav links right
function footerStrip(t){
  const isRTL = t.dir==="rtl";
  return `<footer class="reveal" data-reveal-id="footer" style="position:relative;width:100%;min-height:clamp(280px,30vw,380px);overflow:hidden;border-radius:24px 24px 0 0">
    <!-- Photo strip -->
    <div style="position:absolute;inset:0;background-image:url('${IMG.footer}');background-size:cover;background-position:center bottom"></div>
    <div style="position:absolute;inset:0;background:rgba(0,0,0,0.6)"></div>

    <div style="position:relative;min-height:100%;display:flex;flex-direction:column;padding:clamp(40px,5vw,64px) clamp(28px,5vw,80px) 0">
      <div class="footer-top-row" style="max-width:1440px;width:100%;margin:0 auto;flex:1;display:flex;justify-content:space-between;align-items:flex-end;gap:32px;flex-wrap:wrap;min-height:calc(clamp(280px,30vw,380px) - clamp(80px,10vw,128px));padding-bottom:clamp(28px,4vw,40px)">
        <!-- Left: logo + tagline + email -->
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:9px;margin-bottom:12px">
            ${logoMark(28)}
            <span style="font-family:${HEAD_FF};font-weight:900;font-size:26px;letter-spacing:-1px"><span style="color:${C.brand}">Acid</span><span style="color:#fff">help</span></span>
          </div>
          <a href="mailto:info@acidhelp.com" class="footer-link" style="font-family:${BODY_FF};font-size:14px;color:rgba(255,255,255,.85);letter-spacing:.22em;text-shadow:0 1px 8px rgba(0,0,0,0.5)">i n f o @ a c i d h e l p . c o m</a>
        </div>
        <!-- Right: nav links stacked -->
        <nav class="footer-nav" style="display:flex;flex-direction:column;gap:14px;text-align:${isRTL?"left":"right"}">
          ${[1,2,3,4,5].map(i=>`<a href="${PAGE_URLS[t.pages[i]]}" onclick="return setPage('${t.pages[i]}')" class="footer-link" style="font-family:${BODY_FF};font-weight:500;font-size:14px;color:#fff;letter-spacing:.24em;text-transform:uppercase;text-decoration:none;text-shadow:0 1px 8px rgba(0,0,0,0.5)">${t.navItems[i]}</a>`).join("")}
        </nav>
      </div>

      <!-- Safety disclaimer, mobile only: sits above the divider line -->
      <div class="footer-disclaimer-mobile" style="max-width:1440px;width:100%;margin:0 auto;padding-bottom:14px">
        <span style="font-family:${BODY_FF};font-size:12px;color:rgba(255,255,255,.55)">${t.footerLine2}</span>
      </div>

      <!-- Bottom bar: copyright left, disclaimer right (desktop only) -->
      <div style="max-width:1440px;width:100%;margin:0 auto;border-top:1px solid rgba(255,255,255,.18);padding:16px 0;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
        <span style="font-family:${BODY_FF};font-size:12px;color:rgba(255,255,255,.55)">© ${new Date().getFullYear()} Acidhelp.com. All rights reserved.</span>
        <span class="footer-disclaimer-desktop" style="font-family:${BODY_FF};font-size:12px;color:rgba(255,255,255,.55);text-align:right">${t.footerLine2}</span>
      </div>
    </div>
  </footer>`;
}

// ── MAP PAGE (kept majorly the same; brand text/fonts updated) ────────────────
// Map page: full-screen map with a floating "Hospitals Near Me" button. Tapping
// it drops a collapsible results panel (closest hospital first) over the left of
// the map; clicking a result (or a pin) swaps it to that hospital's detail.
function mapPage(){
  return `<div style="position:relative;height:calc(100vh - 64px);height:calc(100dvh - 64px);overflow:hidden;background:${C.bg}">
    <div id="map" style="width:100%;height:100%"></div>
    <div id="map-loading" style="position:absolute;inset:0;background:${C.bg};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;z-index:5">
      <div style="opacity:0.5">${pinSVG(44,C.sub)}</div>
      <div style="color:${C.sub};font-size:14px;font-weight:600;font-family:${BODY_FF}">Loading map…</div>
    </div>
    <div id="map-overlays"></div>
  </div>`;
}

// One hospital result card in the side panel's list. The closest one (isClosest)
// is outlined in the secondary colour and clicking it opens directions directly
// rather than its detail view.
function hospResultCard(h, isClosest){
  const outline = isClosest ? `border:1.5px solid #DFA4F8;background:rgba(223,164,248,0.06)` : `border:1.5px solid transparent;background:none`;
  const action = isClosest ? `openDirections(${h.id})` : `selectHospital(${h.id})`;
  return `<button onclick="${action}" class="hosp-card${isClosest?' is-closest':''}" style="width:100%;display:flex;gap:12px;align-items:flex-start;padding:12px;${outline};border-radius:12px;text-align:left;cursor:pointer">
    <div style="flex-shrink:0">${hospBadge(h.icon,40,sColor(h.specialty),isClosest?"#DFA4F8":null)}</div>
    <div style="flex:1;min-width:0">
      <div style="color:${C.text};font-size:14px;font-weight:600;font-family:${BODY_FF};line-height:1.3">${h.name}${isClosest?` <span style="color:#DFA4F8;font-size:11px;font-weight:700">· Closest</span>`:""}</div>
      <div style="color:${C.sub};font-size:12px;margin-top:2px;font-family:${BODY_FF}">${h.city} · <span style="color:${sColor(h.specialty)}">${h.specialty}</span></div>
      <div class="hosp-card-note" style="color:${C.sub};font-size:11.5px;margin-top:3px;font-family:${BODY_FF};line-height:1.4">${isClosest?"Tap for directions":h.note}</div>
    </div>
    <span style="flex-shrink:0;background:rgba(223,164,248,0.14);color:#DFA4F8;font-size:12px;font-weight:700;font-family:${BODY_FF};padding:4px 9px;border-radius:16px;white-space:nowrap">${h.dist} km</span>
  </button>`;
}

function renderMapOverlays(){
  const t = T[state.lang];
  const ov = document.getElementById("map-overlays");
  if(!ov) return;
  const sel = mapState.selected;
  const hasPanel = mapState.nearbyList.length>0 || !!sel; // there's something to show
  const panelOpen = hasPanel && !mapState.panelCollapsed;

  // Floating "Hospitals Near Me" button — original bottom-right position.
  const nearBtn = `<button onclick="nearMe()" ${mapState.loading?"disabled":""} class="cta-btn near-me-btn" style="position:absolute;bottom:20px;right:14px;z-index:1000;background:${mapState.loading?C.muted:C.brandDark};color:white;border:none;border-radius:30px;padding:13px 20px;font-size:14px;font-weight:800;font-family:${BODY_FF};cursor:${mapState.loading?"not-allowed":"pointer"};display:flex;align-items:center;gap:8px;box-shadow:${mapState.loading?"none":"0 4px 28px rgba(186,69,235,0.45)"}">${mapState.loading?"⏳":pinSVG(16,"#fff")} ${mapState.loading?t.locating:t.nearMe}</button>`;

  // Title pill (top-left) — only when nothing is expanded there.
  const title = (panelOpen || (hasPanel && mapState.panelCollapsed)) ? "" : `<div style="position:absolute;top:12px;left:12px;z-index:900;background:rgba(18,18,18,0.86);backdrop-filter:blur(8px);border-radius:12px;padding:9px 14px;max-width:calc(100% - 24px)">
      <div style="color:${C.text};font-size:14px;font-weight:800;font-family:${BODY_FF}">${t.medTitle}</div>
      <div style="color:${C.sub};font-size:11px;margin-top:1px;font-family:${BODY_FF}">${t.medSub}</div>
    </div>`;

  const err = mapState.locError ? `<div style="position:absolute;top:12px;left:12px;right:14px;z-index:1002;background:${C.redDark};color:white;padding:12px 14px;border-radius:12px;font-size:13px;font-weight:600;font-family:${BODY_FF};line-height:1.4;display:flex;justify-content:space-between;gap:10px;align-items:center;box-shadow:0 4px 20px rgba(0,0,0,0.3)"><span>⚠️ ${esc(mapState.locError)}</span><button onclick="clearError()" style="background:none;border:none;color:#fff;font-size:15px;cursor:pointer;flex-shrink:0">✕</button></div>` : "";

  // Collapsed → a small tab to reopen the panel.
  const reopen = (hasPanel && mapState.panelCollapsed) ? `<button onclick="expandPanel()" class="cta-btn" style="position:absolute;top:12px;left:12px;z-index:1000;background:${C.surface};border:1px solid ${C.border};color:${C.text};border-radius:24px;padding:9px 14px;font-size:13px;font-weight:700;font-family:${BODY_FF};cursor:pointer;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 20px rgba(0,0,0,0.35)">${pinSVG(15,C.brand)} ${mapState.nearbyList.length||1} nearby <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="${C.sub}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>` : "";

  let panel = "";
  if(panelOpen){
    const collapseBtn = `<button onclick="collapsePanel()" class="icon-btn" aria-label="Collapse" style="background:${C.card};border:none;color:${C.sub};border-radius:50%;width:30px;height:30px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center"><svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;

    let body;
    if(sel){
      const col = sColor(sel.specialty);
      const telHref = "tel:"+sel.phone.replace(/[\s\-()]/g,"");
      const dirHref = `https://www.google.com/maps/dir/?api=1&destination=${sel.lat},${sel.lng}&travelmode=driving`;
      body = `<div class="map-panel-scroll" style="flex:1;min-height:0;overflow-y:auto;padding:14px 16px 20px">
          ${mapState.nearbyList.length>0?`<button onclick="closeSheet()" class="back-link" style="background:none;border:none;color:${C.sub};font-family:${BODY_FF};font-size:13px;font-weight:600;cursor:pointer;padding:0;margin-bottom:14px;display:inline-flex;align-items:center;gap:6px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Back to list</button>`:""}
          <div style="display:flex;gap:12px;align-items:flex-start">
            <div style="flex-shrink:0">${hospBadge(sel.icon,46,col)}</div>
            <div style="min-width:0">
              <span style="background:${col};color:#fff;font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px;font-family:${BODY_FF}">${sel.specialty}</span>
              <div style="color:${C.text};font-size:18px;font-weight:900;line-height:1.2;margin-top:8px;font-family:${BODY_FF}">${sel.name}</div>
              <div style="color:${C.sub};font-size:12px;margin-top:6px;font-family:${BODY_FF};display:flex;align-items:center;gap:5px">${pinSVG(13,C.sub)} ${sel.city}${sel.dist?` · <span style="color:${C.brand};font-weight:700">${sel.dist} km</span>`:""}</div>
              <div style="color:${C.sub};font-size:12.5px;margin-top:8px;line-height:1.5;font-family:${BODY_FF}">${sel.note}</div>
            </div>
          </div>
          <div style="display:flex;gap:10px;margin-top:16px">
            <a href="${telHref}" class="cta-btn" style="flex:1;background:${C.brandDark};color:#fff;padding:11px;border-radius:12px;font-weight:700;font-size:13px;font-family:${BODY_FF};text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:6px">${phoneSVG(14,"#fff")} ${t.callHosp}</a>
            <a href="${dirHref}" target="_blank" rel="noreferrer" class="cta-btn" style="flex:1;background:${C.card};color:${C.text};padding:11px;border-radius:12px;font-weight:700;font-size:13px;font-family:${BODY_FF};text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:6px">${navSVG(14,C.text)} ${t.directions}</a>
          </div>
        </div>`;
    } else {
      body = `<div class="map-panel-scroll" style="flex:1;min-height:0;overflow-y:auto;padding:6px 8px 16px">
          ${mapState.nearbyList.map((h,i)=>hospResultCard(h, i===0)).join("")}
        </div>`;
    }

    panel = `<div class="map-panel" style="position:absolute;top:12px;left:12px;bottom:20px;width:min(360px, calc(100% - 26px));z-index:1001;background:${C.surface};border:1px solid ${C.border};border-radius:16px;box-shadow:0 12px 44px rgba(0,0,0,0.5);display:flex;flex-direction:column;overflow:hidden;animation:slideInLeft 0.3s cubic-bezier(.22,1,.36,1)">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 14px 12px 18px;border-bottom:1px solid ${C.border};flex-shrink:0">
          <div style="min-width:0">
            <div style="color:${C.text};font-size:16px;font-weight:800;font-family:${BODY_FF}">${t.medTitle}</div>
            <div style="color:${C.sub};font-size:11.5px;margin-top:1px;font-family:${BODY_FF}">${sel?"":`${mapState.nearbyList.length} nearest · sorted by distance`}</div>
          </div>
          ${collapseBtn}
        </div>
        ${body}
      </div>`;
  }

  ov.innerHTML = title + err + nearBtn + reopen + panel;
}

function mountMap(){
  const loadingEl = document.getElementById("map-loading");
  const init = ()=>{
    const el = document.getElementById("map");
    if(!el || !window.L) return;
    if(loadingEl) loadingEl.style.display="none";
    const L = window.L;
    const map = L.map(el,{ center:[30.4,69.4], zoom:5, zoomControl:false });
    // Esri's basemap is its own compiled cartographic dataset (not a pass-through of
    // OSM's per-feature "name" tag), so it labels places in English by default
    // worldwide instead of the local script — unlike standard OSM tiles, which
    // rendered Pakistani place names in Urdu.
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{ attribution:"Tiles © Esri — Esri, HERE, Garmin, USGS, EPA, NPS", maxZoom:19 }).addTo(map);
    L.control.zoom({ position:"topright" }).addTo(map);
    mapState.map = map;
    mapState.markers = {};
    HOSPITALS.forEach(h=>{
      const col = sColor(h.specialty);
      const icon = L.divIcon({
        className:"",
        html:hospBadge(h.icon,42,col),
        iconSize:[42,42], iconAnchor:[21,21],
      });
      const marker = L.marker([h.lat,h.lng],{icon}).addTo(map).on("click",()=>{
        // Closest hospital jumps straight to directions; the rest open detail.
        if(mapState.nearbyList[0] && mapState.nearbyList[0].id===h.id){ openDirections(h.id); return; }
        mapState.selected = h;
        mapState.panelCollapsed = false;
        map.setView([h.lat,h.lng], Math.max(map.getZoom(),13), {animate:true});
        renderMapOverlays();
      });
      mapState.markers[h.id] = marker;
    });
    // The map lives in a flex child next to the panel; nudge Leaflet to
    // re-measure once layout has settled so tiles fill the canvas.
    setTimeout(()=>map.invalidateSize(),60);
    renderMapOverlays();
  };
  if(window.L){ init(); return; }
  const existing = document.querySelector('script[data-leaflet]');
  if(!existing){
    const js = document.createElement("script");
    js.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    js.setAttribute("data-leaflet","1");
    js.onload = init;
    document.head.appendChild(js);
  } else {
    existing.addEventListener("load", init);
  }
}

// Breadcrumb shown above a page heading: Home › <current page> (the current
// page is underlined + in the brand colour to read as the selected item).
function breadcrumb(label){
  return `<div style="display:flex;align-items:center;gap:9px;font-family:${BODY_FF};font-size:13px;font-weight:300">
    <a href="/" onclick="return setPage('emergency')" class="crumb-link" style="color:${C.sub};text-decoration:none">Home</a>
    <span style="color:${C.muted};font-size:20px;line-height:1">›</span>
    <span style="color:${C.brand};font-weight:400;text-decoration:underline;text-underline-offset:3px">${label}</span>
  </div>`;
}

// ── RESOURCES PAGE ────────────────────────────────────────────────────────────
// Directory of vetted support organisations, grouped by category. Sourced from
// the AcidHelp resources spreadsheet — deliberately English-only (factual
// directory data), like BLOG_POSTS / ABOUT_CONTENT. Categories are added over
// time; the page renders whatever is in RESOURCE_CATEGORIES.
const RESOURCE_CATEGORIES = [
  { title:"Emergency & First Response", sub:"Ambulances, helplines & first response", photo:IMG.medical, orgs:[
    { name:"Rescue 1122", desc:"24/7 ambulance, medical first response, fire rescue — the first call after an acid attack", area:"All major cities", phone:"1122", tel:"1122", web:"rescue.gov.pk", webUrl:"https://www.rescue.gov.pk" },
    { name:"Police Emergency", desc:"Emergency police response; FIR registration; Punjab Police women help desks", area:"Nationwide", phone:"15", tel:"15", web:"punjabpolice.gov.pk", webUrl:"https://punjabpolice.gov.pk/women_help" },
    { name:"Edhi Foundation Ambulance", desc:"24/7 ambulance, largest volunteer ambulance network; also runs shelters", area:"Nationwide", phone:"115", tel:"115", web:"edhi.org", webUrl:"https://edhi.org" },
    { name:"Chhipa Ambulance Service", desc:"24/7 ambulance and emergency response", area:"Karachi + Sindh cities", phone:"1020", tel:"1020", web:"chhipa.org", webUrl:"https://chhipa.org" },
    { name:"Violence Against Women Centre (VAWC) Multan", desc:"24/7 all-women facility with everything under one roof: FIRST AID, POLICE REPORTING & FIR, MEDICAL EXAMINATION & FORENSICS, PROSECUTION,…", area:"Multan", phone:"1737", tel:"1737", web:"pwpa.punjab.gov.pk", webUrl:"https://pwpa.punjab.gov.pk/services" },
    { name:"Punjab Women's Helpline (PCSW)", desc:"24/7 all-women agents, legal advisors, psychosocial counsellor", area:"Lahore (province-wide)", phone:"1043", tel:"1043", web:"pcsw.punjab.gov.pk", webUrl:"https://pcsw.punjab.gov.pk/helpline_" },
    { name:"Punjab Violence Against Women Helpline", desc:"Guidance, counselling and referral for women victims of violence (PWPA)", area:"Province-wide", phone:"1737", tel:"1737", web:"pwpa.punjab.gov.pk", webUrl:"https://pwpa.punjab.gov.pk" },
    { name:"Sindh Women Development Dept Helpline", desc:"Helpline for women facing violence; guidance and referral", area:"Karachi (province-wide)", phone:"1094", tel:"1094" },
    { name:"Bolo Helpline (KP)", desc:"Helpline for women facing violence in KP", area:"Peshawar (province-wide)", phone:"0336 1097123", tel:"03361097123", web:"findahelpline.com", webUrl:"https://findahelpline.com/organizations/bolo-helpline-kpk" },
    { name:"Ministry of Human Rights Helpline", desc:"Free legal advice on human rights violations incl. violence against women; referrals", area:"Islamabad (nationwide)", phone:"1099", tel:"1099", web:"mohr.gov.pk", webUrl:"https://www.mohr.gov.pk" },
    { name:"Madadgaar National Helpline", desc:"Crisis helpline for women & children; legal support from FIR to lawyers; referrals", area:"Karachi (nationwide)", phone:"1098", tel:"1098", web:"madadgar.org.pk", webUrl:"https://madadgar.org.pk/" },
  ]},
  { title:"Eye & Vision Care", sub:"Free & specialist eye care", photo:IMG.medical, orgs:[
    { name:"LRBT (Layton Rahmatulla Benevolent Trust)", desc:"Pakistan's largest free eye-care network: corneal transplant, vitreo-retina, glaucoma, oculoplastics — critical for acid-related eye…", area:"19+ hospitals/centres incl. Karachi, Lahore, Multan, Mandra (Rawalpin…", phone:"0800-44441", tel:"080044441", web:"lrbt.org.pk", webUrl:"https://lrbt.org.pk/about/lrbt-locations/" },
    { name:"Al-Shifa Trust Eye Hospitals", desc:"Tertiary eye care incl. CORNEA and OCULOPLASTIC subspecialties and Low Vision programme; free, subsidised and private tiers", area:"Rawalpindi (HQ), Sukkur, Kohat, Muzaffarabad, Chakwal, Gilgit", phone:"+92 51 5487821-5", tel:"+925154878215", web:"alshifaeye.org", webUrl:"https://alshifaeye.org" },
  ]},
  { title:"Rehabilitation (Psychological and Physiological)", sub:"Counselling & recovery support", photo:IMG.psychological, orgs:[
    { name:"Dr Khadija Tahir", desc:"recognised EMDR therapist, history of treating Acid burn survivors", area:"Nationwide (online therapy)", web:"drkhadijatahir.com", webUrl:"https://www.drkhadijatahir.com/about-me/" },
    { name:"Rozan Counseling Helpline (RCHL)", desc:"Confidential counselling: emotional health, violence against women, child sexual abuse; phone/in-person/online/email", area:"Islamabad (nationwide phone)", web:"rozan.org", webUrl:"https://rozan.org/rozan-counseling-helpline/" },
    { name:"Taskeen Health Initiative", desc:"Wellness counselling, screening, referral to vetted providers", area:"Karachi (nationwide phone)", phone:"0316-8275336", tel:"03168275336", web:"taskeen.org", webUrl:"https://taskeen.org/seek-help/" },
    { name:"Karwan-e-Hayat", desc:"Psychiatric care, psychotherapy, rehabilitation for low-income patients", area:"Karachi", phone:"(021) 111-534-111", tel:"021111534111", web:"keh.org.pk", webUrl:"https://keh.org.pk" },
    { name:"Medical Teaching Institute (MTI) -Burns and Plastic Surgery Centre Hayatabad Peshawar", desc:"BTC KP provides psychiatry for burn patients;", area:"Peshawar", phone:"091-5830078-82", tel:"091583007882", web:"btckp.gov.pk", webUrl:"https://www.btckp.gov.pk" },
  ]},
  { title:"Legal Aid & Shelter", sub:"Rights, FIR, court support & shelter", photo:IMG.legal, orgs:[
    { name:"AGHS Legal Aid Cell (Asma Jahangir)", desc:"Pakistan's first free legal aid cell (est. 1980): pro-bono representation for women & victims of violence; crisis officers accompany…", area:"Lahore", phone:"042-35842256-7", tel:"042358422567", web:"aghslaw.net", webUrl:"https://aghslaw.net" },
    { name:"Dastak Charitable Trust", desc:"Access-to-justice centre: legal aid, emergency shelter, protection since 1996", area:"Lahore", phone:"03334161610", tel:"03334161610", web:"dastak.org.pk", webUrl:"https://dastak.org.pk" },
    { name:"Legal Aid Society (LAS) / Sindh Legal Advisory Call Center (SLACC)", desc:"Free legal guidance call centre, legal clinics for women & marginalised groups, paralegal network; also publishes the PUNJAB GBV SERVICES…", area:"Karachi", phone:"92-21-35634112", tel:"922135634112", web:"las.org.pk", webUrl:"https://www.las.org.pk" },
    { name:"Sahil", desc:"Free legal aid for child sexual abuse, early marriage, women victims of domestic violence — nationwide", area:"Islamabad (nationwide)", phone:"051-2260636", tel:"0512260636", web:"sahil.org", webUrl:"https://sahil.org/free-legal-aid/" },
    { name:"Human Rights Commission of Pakistan (HRCP)’s Complaints Cell", desc:"Complaints on rights violations; fact-finding; legal aid in grave collective cases", area:"Lahore (HQ), Islamabad, Karachi, Multan, Hyderabad, Quetta, Peshawar,…", phone:"042-3584-5969", tel:"04235845969", web:"hrcp-web.org", webUrl:"https://hrcp-web.org/hrcpweb/complaints-cell/" },
    { name:"Madadgaar National Helpline 1098", desc:"Legal support from FIR registration through provision of lawyers", area:"Karachi (nationwide)", phone:"1098", tel:"1098", web:"victimservicedirectory.org", webUrl:"https://victimservicedirectory.org/directory/details/52" },
    { name:"Legal Aid Foundation Pakistan", desc:"Legal representation and advice", area:"Karachi, Lahore, Islamabad", phone:"(+92)-3412277806", tel:"+923412277806", web:"legalaidfoundation.com.pk", webUrl:"https://legalaidfoundation.com.pk" },
    { name:"National Commission on the Status of Women (NCSW)", desc:"Statutory women's rights body; complaints referral; coordinates GBV helpline network", area:"Islamabad", phone:"051-9224875", tel:"0519224875", web:"ncsw.gov.pk", webUrl:"https://ncsw.gov.pk" },
    { name:"Women Shelter Homes (Dar-ul-Aman)", desc:"Shelter for women facing violence; ADMISSION ANY TIME OF DAY OR NIGHT; children may stay; 20-50 residents per home", area:"All 36 districts of Punjab", phone:"(042) 99232178-9", tel:"042992321789", web:"swd.punjab.gov.pk", webUrl:"https://swd.punjab.gov.pk/women_shelter_homes" },
    { name:"Shaheed Benazir Bhutto Human Rights Centre for Women (Islamabad)", desc:"Confidential support for victims of violence: FREE MEDICAL, LEGAL AID and SHELTER HOME", area:"Islamabad", phone:"1099", tel:"1099", web:"mohr.gov.pk", webUrl:"https://www.mohr.gov.pk/Detail/YWRiYjU0NzktMGE2Zi00NDYyLTljNzktMTA2N2M2MjBlZWZl" },
    { name:"Punjab Women Protection Authority (PWPA)", desc:"Runs VAWC Multan and the 1737 helpline; expanding VAWCs to 4 more districts", area:"Lahore (province-wide)", phone:"1737", tel:"1737", web:"pwpa.punjab.gov.pk", webUrl:"https://pwpa.punjab.gov.pk" },
    { name:"Panah Shelter Home (Panah Trust)", desc:"Free shelter with children, 24/7 security, medical aid, legal counselling, vocational training; est. 2002", area:"Karachi", phone:"+92 21 36360025", tel:"+922136360025", web:"panahshelter.org", webUrl:"https://panahshelter.org" },
    { name:"Dastak Shelter", desc:"Emergency shelter for women & girls with integrated legal aid", area:"Lahore", phone:"03334161610", tel:"03334161610", web:"dastak.org.pk", webUrl:"https://dastak.org.pk" },
    { name:"Pakistan Bait-ul-Mal Shelter / Women Empowerment Homes", desc:"Government shelter network under Pakistan Bait-ul-Mal", area:"Multiple cities", phone:"0800-66666", tel:"080066666", web:"shelterhome.pbm.gov.pk", webUrl:"http://shelterhome.pbm.gov.pk/contact.php" },
  ]},
  { title:"Rehabilitation & Physiotherapy", sub:"Physio, scar & mobility rehab", photo:IMG.psychological, orgs:[
    { name:"Physiotherapy & rehabilitation at burn centres", desc:"Cross-reference: scar management, occupational therapy and physiotherapy are built into JB&RSC and BTC KP; ask the treating burn unit first", area:"Lahore (JB&RSC), Peshawar (BTC KP), Islamabad (PIMS), Karachi (Patel)", phone:"92-42-99231480", tel:"924299231480", web:"aimc.edu.pk", webUrl:"https://aimc.edu.pk/burn-reconstructive-surgery-center/" },
    { name:"PSRD (Pakistan Society for the Rehabilitation of the Disabled)", desc:"Physiotherapy, occupational therapy, orthotics & prosthetics, rehabilitation at low cost", area:"Lahore", phone:"042 37427130", tel:"04237427130", web:"psrd.org.pk", webUrl:"https://psrd.org.pk" },
    { name:"AFIRM (Armed Forces Institute of Rehabilitation Medicine)", desc:"Pakistan's leading rehabilitation medicine institute: physio, occupational therapy, prosthetics", area:"Rawalpindi", phone:"92 51 9272071", tel:"92519272071" },
  ]},
  { title:"Financial & Social Support", sub:"Income, skills & reintegration", photo:IMG.employment, orgs:[
    { name:"Benazir Income Support Programme (BISP)", desc:"Cash transfers for low-income women; 8171 eligibility check", area:"Nationwide", phone:"0800-26477", tel:"080026477", web:"bisp.gov.pk", webUrl:"https://bisp.gov.pk" },
    { name:"Pakistan Bait-ul-Mal - Individual Financial Assistance (Medical)", desc:"Financial assistance for medical treatment for those who cannot afford it — relevant for surgery costs at private facilities", area:"Nationwide", phone:"0800-66666", tel:"080066666", web:"pbm.gov.pk", webUrl:"https://www.pbm.gov.pk" },
    { name:"Sehat Sahulat Program (health card)", desc:"Public health insurance covering hospitalisation at empanelled hospitals; check current coverage in survivor's province", area:"Nationwide (province-dependent)", phone:"8500", tel:"8500", web:"governmentschemes.pk", webUrl:"https://governmentschemes.pk/sehat-sahulat-program-eligibility/" },
    { name:"Depilex Smileagain Foundation - Economic Empowerment", desc:"Vocational training (incl. beautician training with job placement in Depilex salons), micro-business support, reintegration for burn…", area:"Lahore (nationwide reach)", phone:"+92", tel:"+92", web:"depilexsmileagain.com", webUrl:"https://depilexsmileagain.com" },
    { name:"ASF Pakistan - Personal Development & Reintegration", desc:"Personal development and economic reintegration services within ASF's rehabilitation package", area:"Islamabad (nationwide)", phone:"0301-8550011", tel:"03018550011", web:"asfpakistan.org", webUrl:"https://asfpakistan.org" },
    { name:"TEVTA (Punjab Technical Education & Vocational Training Authority)", desc:"Free/low-cost vocational and technical courses incl. women-focused trades", area:"Punjab-wide", phone:"92 4299263055-59", tel:"92429926305559", web:"tevta.gop.pk", webUrl:"https://tevta.gop.pk" },
    { name:"NAVTTC (National Vocational & Technical Training Commission)", desc:"National skills programmes (e.g. Hunarmand Pakistan-type schemes); check current offerings", area:"Nationwide", phone:"0800 88866", tel:"080088866", web:"navttc.gov.pk", webUrl:"https://navttc.gov.pk" },
    { name:"Acid Survivors Foundation (ASF) Pakistan", desc:"Case management: medical, legal aid, psychological support, reintegration for acid/burn survivors since 2006", area:"Islamabad", web:"asfpakistan.org", webUrl:"https://asfpakistan.org" },
    { name:"Depilex Smileagain Foundation (DSF)", desc:"Reconstructive surgery coordination, psychosocial support, economic empowerment since 2003", area:"Lahore", phone:"+92", tel:"+92", web:"depilexsmileagain.com", webUrl:"https://depilexsmileagain.com" },
    { name:"War Against Rape (WAR)", desc:"Legal aid, medico-legal guidance and counselling for survivors of sexual violence", area:"Karachi", phone:"(021) 35373008", tel:"02135373008", web:"facebook.com", webUrl:"https://www.facebook.com/WarAgainstRape1989/about/?ref=page_internal&_rdc=1&_rdr#" },
    { name:"Shirkat Gah", desc:"Women's rights advocacy and legal referrals", area:"Head Office-Lahore + presence in multiple cities", phone:"(+92-42) 35838815", tel:"+924235838815", web:"shirkatgah.org", webUrl:"https://shirkatgah.org" },
    { name:"Aurat Foundation", desc:"Women's rights information, advocacy, referrals to legal aid and protection", area:"Multiple cities", phone:"051-2609596", tel:"0512609596", web:"af.org.pk", webUrl:"https://www.af.org.pk" },
    { name:"Bedari", desc:"GBV support and legal referrals", area:"Islamabad", phone:"0300-5251717", tel:"03005251717", web:"bedari.org.pk", webUrl:"https://bedari.org.pk" },
    { name:"Chayn Pakistan", desc:"Online guides for women facing violence incl. emergency planning and provincial helpline lists — useful content partner for AcidHelp", area:"Online", web:"chaynpakistan.org", webUrl:"https://chaynpakistan.org" },
  ]},
];

// One organisation row inside an expanded category.
function orgRow(org){
  const ACCENT = "#F6E2FE";
  const link = (svg,text,href)=>`<span class="res-org-meta" style="display:inline-flex;align-items:center;gap:6px;min-width:0;max-width:100%">${svg}${href
    ? `<a href="${href}" target="_blank" rel="noopener noreferrer" style="font-family:${BODY_FF};font-size:12px;color:${C.sub};text-decoration:underline;text-underline-offset:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${text}</a>`
    : `<span style="font-family:${BODY_FF};font-size:12px;color:${C.sub};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${text}</span>`}</span>`;
  return `<div class="res-org" style="display:flex;gap:14px;align-items:flex-start;padding:14px 12px;border-radius:12px">
    <div style="flex:1;min-width:0">
      <div class="res-org-name" style="font-family:${BODY_FF};font-size:15px;font-weight:500;color:${C.text};line-height:1.3">${esc(org.name)}</div>
      ${org.desc?`<div style="font-family:${BODY_FF};font-size:12.5px;color:${C.sub};line-height:1.55;margin-top:4px">${esc(org.desc)}</div>`:""}
      <div style="display:flex;flex-wrap:wrap;gap:6px 16px;margin-top:8px">
        ${org.area?link(pinSVG(12,C.sub),esc(org.area)):""}
        ${org.web?link(globeSVG(12,C.sub),esc(org.web),org.webUrl):""}
      </div>
    </div>
    ${org.phone?`<a href="tel:${org.tel||org.phone.replace(/[^\d+]/g,"")}" class="phone-pill res-call" style="background:${ACCENT};color:${C.bg};padding:9px 14px;border-radius:22px;font-family:${BODY_FF};font-size:12px;font-weight:500;text-decoration:none;white-space:nowrap;flex-shrink:0;display:inline-flex;align-items:center;gap:6px">${phoneSVG(13,C.bg)} ${esc(org.phone)}</a>`:""}
  </div>`;
}

function resourcesPage(t){
  const ACCENT = "#F6E2FE";
  return `<div>
    <div style="background:${C.bg}">
    <!-- Hero -->
    <section class="reveal" data-reveal-id="res-hero" style="padding:clamp(18px,2.2vw,32px) clamp(28px,5vw,80px) clamp(28px,3vw,44px)">
      <div style="max-width:1440px;margin:0 auto">
        ${breadcrumb(t.navItems[2])}
        <h1 style="font-family:${BODY_FF};font-weight:500;font-size:clamp(36px,3.4vw,52px);letter-spacing:-1px;line-height:1.06;color:#fff;margin:14px 0 0">${t.resTitle.toUpperCase().replace(/RECOVERY/, `<span style="color:#DFA4F8">RECOVERY</span>`)}</h1>
        <p style="font-family:${BODY_FF};font-weight:300;font-size:16px;color:rgba(255,255,255,.65);margin:14px 0 0">${t.resSub}</p>
      </div>
    </section>

    <!-- Photo card grid — one per category, expands to its organisations -->
    <section class="reveal" data-reveal-id="res-grid" style="padding:0 clamp(28px,5vw,80px) clamp(40px,5vw,60px)">
      <div style="max-width:1440px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(460px,100%),1fr));gap:20px">
        ${RESOURCE_CATEGORIES.map((cat,i)=>{
          const isOpen = openCard===i;
          const orgList = isOpen ? `<div class="res-dropdown" style="background:${C.card};border:1px solid ${ACCENT};border-radius:20px;padding:8px">
              ${cat.orgs.map(orgRow).join("")}
            </div>` : "";
          return `<div>
            <button onclick="toggleCard(${i})" aria-expanded="${isOpen}" class="res-card-wrap${isOpen?' is-open':''}" style="display:block;width:100%;padding:0;border:none;text-align:left;font:inherit;color:inherit;position:relative;height:clamp(220px,20vw,300px);border-radius:20px;overflow:hidden;background:#1c2337">
              <!-- Real photo -->
              <div class="res-photo" style="background-image:url('${cat.photo}');background-position:center"></div>
              <!-- Bottom scrim for legibility -->
              <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0.85) 100%);pointer-events:none"></div>
              <!-- Content -->
              <div style="position:absolute;bottom:0;left:0;right:0;padding:24px 28px;display:flex;justify-content:space-between;align-items:flex-end;gap:16px;pointer-events:none">
                <div style="min-width:0">
                  <h3 style="font-family:${BODY_FF};font-weight:400;font-size:clamp(22px,2vw,28px);letter-spacing:-0.3px;line-height:${rtlLH(t,1.15,1.6)};color:#fff;margin:0;text-shadow:0 2px 12px rgba(0,0,0,0.5)">${cat.title.toUpperCase()}</h3>
                  <p style="font-family:${BODY_FF};font-size:14px;color:rgba(255,255,255,.9);margin:8px 0 0;text-shadow:0 1px 8px rgba(0,0,0,0.5)">${cat.sub}</p>
                </div>
                <svg class="res-arrow" width="26" height="26" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.5));${isOpen?'transform:rotate(90deg)':''}"><path d="M9 6l6 6-6 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
            </button>
            ${orgList}
          </div>`;
        }).join("")}
      </div>
    </section>
    </div>

    ${footerStrip(t)}
  </div>`;
}
// FAQs — shown on the landing page, after "What to do"
function faqSection(t){
  return `<section class="reveal" data-reveal-id="faq" style="padding:clamp(36px,6vw,76px) clamp(20px,4vw,48px) clamp(64px,8vw,96px)">
    <div style="max-width:1920px;margin:0 auto">
      <h2 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(42px,3.2vw,56px);letter-spacing:-1px;line-height:1.1;margin:0 0 28px;color:${C.text}">${t.faqTitle}</h2>
      <div style="display:flex;flex-direction:column;border-top:1px solid ${C.border}">
        ${t.faqs.map((item,i)=>{
          const isOpen = openFaq===i;
          return `<div class="faq-item${isOpen?' is-open':''}" data-faq-index="${i}" style="border-bottom:1px solid ${C.border}">
            <button onclick="toggleFaq(${i})" aria-expanded="${isOpen}" style="display:block;width:100%;background:none;border:none;text-align:left;cursor:pointer;padding:22px 0">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:16px">
                <div style="font-family:${BODY_FF};font-weight:400;font-size:16px;color:${C.text};line-height:1.4">${item.q}</div>
                <span class="faq-icon-badge" style="flex-shrink:0;width:30px;height:30px;border-radius:50%;background:${C.surface};display:flex;align-items:center;justify-content:center">${plusSVG(15)}</span>
              </div>
            </button>
            <div class="faq-answer" style="font-family:${BODY_FF};font-size:14.5px;color:${C.sub};line-height:1.7;padding-inline-end:46px">${item.a}</div>
          </div>`;
        }).join("")}
      </div>
    </div>
  </section>`;
}

// ── BLOG PAGE ──────────────────────────────────────────────────────────────────
// Tertiary "Read Now" indicator — underlined text + arrowhead, no capsule/
// border. Rendered as a <span> with no click handler of its own, since the
// entire featured-post card is already one clickable <button>, and per HTML
// can't validly contain a second, nested interactive control.
function readNowVisual(t){
  return `<span class="read-now-btn" style="color:#DFA4F8;font-size:15px;font-weight:500;font-family:${BODY_FF};border-bottom:1.5px solid currentColor;padding-bottom:4px;margin-bottom:16px;display:inline-flex;align-items:center;gap:6px">
      ${t.readNowLabel}
      <svg class="read-now-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </span>`;
}

function blogPage(t){
  const [featured, ...rest] = BLOG_POSTS;
  return `<div>
    <div style="background:${C.bg}">
    <!-- Hero -->
    <section class="reveal" data-reveal-id="blog-hero" style="padding:clamp(18px,2.2vw,32px) clamp(28px,5vw,80px) clamp(28px,3vw,44px)">
      <div style="max-width:1440px;margin:0 auto">
        ${breadcrumb(t.navItems[3])}
        <h1 style="font-family:${BODY_FF};font-weight:500;font-size:clamp(36px,3.4vw,52px);letter-spacing:-1px;line-height:1.06;color:#fff;margin:14px 0 0">${t.blogTitle.toUpperCase().replace(/ACID/, `<span style="color:${C.brand}">ACID</span>`)}</h1>
      </div>
    </section>

    <!-- Featured post -->
    <section class="reveal" data-reveal-id="blog-featured" style="padding:0 clamp(28px,5vw,80px) clamp(28px,4vw,44px)">
      <button onclick="openBlogPost(${featured.id})" aria-label="${esc(t.readNowLabel)}: ${esc(featured.title)}" class="blog-featured-btn" style="display:grid;width:100%;max-width:1440px;margin:0 auto;grid-template-columns:repeat(auto-fit,minmax(min(420px,100%),1fr));gap:36px;align-items:end;background:none;border:none;padding:0;text-align:left;font:inherit;color:inherit;cursor:pointer">
        <div class="blog-card blog-featured-photo" style="border-radius:20px;overflow:hidden;height:clamp(240px,32vw,420px);background:${C.card}">
          <img class="blog-photo" src="${featured.image}" alt="${esc(featured.title)}" style="width:100%;height:100%;object-fit:cover;display:block">
        </div>
        <div>
          <div class="bf-label" style="font-family:${BODY_FF};font-size:12px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#DFA4F8">${t.featuredLabel}</div>
          <h2 class="bf-title" style="font-family:${BODY_FF};font-weight:300;font-size:clamp(26px,3.4vw,40px);letter-spacing:-1px;line-height:1.15;color:#fff;margin:14px 0 16px">${featured.title}</h2>
          <div class="bf-byline" style="font-family:${BODY_FF};font-size:13px;color:rgba(255,255,255,.55);margin-bottom:16px">${t.byLabel} <span style="color:#fff;font-weight:600">${featured.author}</span> &nbsp;|&nbsp; ${featured.date}</div>
          <p class="bf-excerpt" style="font-family:${BODY_FF};font-size:15px;color:rgba(255,255,255,.65);line-height:1.7;margin:0 0 26px">${featured.excerpt}</p>
          ${readNowVisual(t)}
        </div>
      </button>
    </section>

    <!-- Post grid -->
    <section class="reveal" data-reveal-id="blog-grid" style="padding:0 clamp(28px,5vw,80px) clamp(40px,5vw,60px)">
      <div style="max-width:1440px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr));gap:20px">
        ${rest.map(post=>`
          <button class="blog-card" onclick="openBlogPost(${post.id})" style="display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;width:100%;text-align:left;background:${C.card};border:1px solid ${C.border};border-radius:20px;overflow:hidden;padding:0;font:inherit;color:inherit;cursor:pointer">
            <div style="height:200px;overflow:hidden;flex-shrink:0">
              <img class="blog-photo" src="${post.image}" alt="${esc(post.title)}" style="width:100%;height:100%;object-fit:cover;display:block">
            </div>
            <div style="padding:20px;flex:1;display:flex;flex-direction:column">
              <div style="align-self:flex-start;background:${post.dim};color:${post.color};font-family:${BODY_FF};font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:20px;margin-bottom:10px">${post.category}</div>
              <h3 style="font-family:${BODY_FF};font-weight:700;font-size:18px;line-height:1.3;color:${C.text};margin:0 0 8px">${post.title}</h3>
              <p style="font-family:${BODY_FF};font-size:13px;color:${C.sub};line-height:1.6;margin:0 0 14px">${post.excerpt}</p>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:auto">
                <div style="font-family:${BODY_FF};font-size:12px;color:${C.sub}">${t.byLabel} <span style="color:${C.text};font-weight:600">${post.author}</span> &nbsp;|&nbsp; ${post.date}</div>
                <span class="blog-card-arrow" aria-hidden="true" style="flex-shrink:0;display:flex;align-items:center;justify-content:center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#DFA4F8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
              </div>
            </div>
          </button>`).join("")}
      </div>
    </section>
    </div>

    ${footerStrip(t)}
  </div>`;
}

// Single blog post — opened by clicking the featured post or any card in the grid
// A blog post's `body` array is normally a list of plain paragraph strings,
// but can also contain {h:"..."} section headings, {h3:"..."} sub-headings,
// {list:[...]} bullet lists, and {note:"..."} callouts (disclaimers etc.),
// for reference-style posts (e.g. the legal-rights guide) where readers
// need to scan/find a specific section rather than read straight through.
// **bold** markdown spans are supported inside any string.
const mdBold = s => s.replace(/\*\*(.+?)\*\*/g, `<strong style="color:${C.text};font-weight:700">$1</strong>`);
function blogBodyItem(item){
  if(typeof item==="string"){
    return `<p style="font-family:${BODY_FF};font-size:16px;color:${C.sub};line-height:1.8;margin:0 0 20px">${mdBold(item)}</p>`;
  }
  if(item.h){
    return `<h2 style="font-family:${BODY_FF};font-weight:600;font-size:22px;color:${C.text};margin:36px 0 14px">${item.h}</h2>`;
  }
  if(item.h3){
    return `<h3 style="font-family:${BODY_FF};font-weight:600;font-size:17px;color:${C.text};margin:26px 0 10px">${item.h3}</h3>`;
  }
  if(item.list){
    return `<ul style="margin:0 0 20px;padding-inline-start:22px;display:flex;flex-direction:column;gap:8px">
      ${item.list.map(li=>`<li style="font-family:${BODY_FF};font-size:16px;color:${C.sub};line-height:1.7">${mdBold(li)}</li>`).join("")}
    </ul>`;
  }
  if(item.note){
    return `<div style="background:${C.card};border:1px solid ${C.border};border-radius:12px;padding:16px 18px;margin:0 0 24px">
      <span style="font-family:${BODY_FF};font-size:14px;color:${C.sub};line-height:1.7;font-style:italic">${mdBold(item.note)}</span>
    </div>`;
  }
  return "";
}
function blogPostPage(t){
  const post = BLOG_POSTS.find(p=>p.id===state.activeBlogId) || BLOG_POSTS[0];
  return `<div>
    <div style="position:relative;height:clamp(280px,40vw,480px);overflow:hidden;background:${C.bg}">
      <img src="${post.image}" alt="${esc(post.title)}" style="width:100%;height:100%;object-fit:cover;display:block">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.35) 0%,rgba(0,0,0,0.8) 100%)"></div>
      <div style="position:absolute;inset:0;display:flex;align-items:flex-end">
        <div style="max-width:900px;margin:0 auto;width:100%;padding:0 clamp(28px,5vw,80px) clamp(28px,4vw,44px)">
          <button onclick="setPage('blog')" class="back-link" style="background:none;border:none;color:rgba(255,255,255,.85);font-family:${BODY_FF};font-size:13px;font-weight:600;cursor:pointer;padding:0;margin-bottom:14px;display:flex;align-items:center;gap:6px">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            ${t.backToBlogLabel}
          </button>
          <div style="display:inline-block;background:${post.dim};color:${post.color};font-family:${BODY_FF};font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:20px;margin-bottom:12px">${post.category}</div>
          <h1 style="font-family:${BODY_FF};font-weight:900;font-size:clamp(28px,4vw,48px);letter-spacing:-1px;line-height:1.1;color:#fff;margin:0 0 12px;text-shadow:0 2px 16px rgba(0,0,0,.4)">${post.title}</h1>
          <div style="font-family:${BODY_FF};font-size:13px;color:rgba(255,255,255,.75)">${t.byLabel} <span style="color:#fff;font-weight:600">${post.author}</span> &nbsp;|&nbsp; ${post.date}</div>
        </div>
      </div>
    </div>

    <article style="max-width:760px;margin:0 auto;padding:clamp(32px,5vw,56px) clamp(16px,3vw,32px)">
      ${post.body.map(item=>blogBodyItem(item)).join("")}
    </article>

    ${footerStrip(t)}
  </div>`;
}

// ── ABOUT PAGE ─────────────────────────────────────────────────────────────────
// "What AcidHelp Provides" icons — thin, rounded line style consistent with
// the app's other drawn SVGs (restartSVG, res-arrow).
const provChecklistSVG = (s,c)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2.5" stroke="${c}" stroke-width="1.8"/><path d="M8 8h8M8 12.2l2 2 4-4M8 17h5" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const provChatSVG = (s,c)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" stroke="${c}" stroke-width="1.8" stroke-linejoin="round"/><circle cx="9" cy="9.5" r="1" fill="${c}"/><circle cx="12.5" cy="9.5" r="1" fill="${c}"/><circle cx="16" cy="9.5" r="1" fill="${c}"/></svg>`;
const advIdSVG = (s,c)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="5.5" width="19" height="13" rx="2.5" stroke="${c}" stroke-width="1.8"/><circle cx="8" cy="11" r="2" stroke="${c}" stroke-width="1.8"/><path d="M5 15.6c.5-1.4 1.7-2 3-2s2.5.6 3 2M13.5 10h5M13.5 13.5h5" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/></svg>`;

// New, expanded About page content. This is deliberately English-only (like
// BLOG_POSTS) rather than run through T{} per-language — it quotes specific
// legislation (Acid and Burn Crime Act 2018, Punjab Hazardous Substances
// Rules 2018, EMSB) that shouldn't be machine-translated without review, so
// it renders in English regardless of the selected site language until a
// reviewed Urdu/Pashto translation is supplied.
const ABOUT_CONTENT = {
  whyTitle: "Why We Exist",
  whyPara1: "Acid attack survivors in Pakistan lose critical time to first aid misinformation. While toothpaste, milk, ghee, oil, baking soda, and wet cloth are still widely believed to be effective responses to an acid burn, none of them are actually effective remedies. These agents trap acid against the skin and deepen the burn, and in the case of milk and baking soda, react chemically to release additional heat into the wound. In the first thirty minutes after an acid attack, this misinformation determines whether a survivor heals or is scarred for life.",
  rrr: [
    { step:"Rinse",  body:`Rinse the acid burn with cool, continuously running water for <span style="color:#DFA4F8;font-weight:600">at least thirty minutes</span>.` },
    { step:"Ring",   body:`Ring Rescue <span style="color:#DFA4F8;font-weight:600">1122</span> and stay on the line while rinsing continues.` },
    { step:"Remove", body:`Remove contaminated clothing by <span style="color:#DFA4F8;font-weight:600">cutting it away</span>, never by pulling it over the head.` },
  ],
  whyPara2: "Beyond emergency relief, acid attack survivors face a longer struggle. Reliable information on where to go for reconstructive care, psychosocial support, legal aid, and vocational reintegration is scattered across separate organisations, or unavailable altogether. AcidHelp exists to consolidate that information into a single verified database of acid attack support resources in Pakistan, so that survivors and their families can find, in one place, what has taken others years to piece together.",
  whyPara3: "AcidHelp also exists to spread awareness of what to do after an acid attack. Public knowledge of correct first aid remains one of the most preventable causes of long-term damage from acid violence in Pakistan, and this platform is one contribution to closing that gap.",

  providesTitle: "What AcidHelp Provides",
  provides: [
    "Step-by-step first aid guidance for acid attacks and chemical burns.",
    "An AI emergency assistant that answers acid attack first aid questions in regional languages.",
    "A directory of hospitals with burn treatment capacity in Pakistan, verified where possible, and expanding as we grow.",
    "Contact details for support organisations offering medical, psychosocial, and legal help to acid attack survivors.",
  ],

  advocacyIntro: "Acid violence in Pakistan is a policy failure and a gender-based violence crisis. While The Acid and Burn Crime Act 2018 exists on paper, in practice, acid remains openly available in chemical markets, convictions are rare, and the free treatment the law already promises survivors is not consistently delivered by public hospitals. Meanwhile, the conditions that produce acid violence in the first place — patriarchal control over women's decisions, weak enforcement of gender-based violence laws, and limited economic autonomy for women — remain largely unaddressed.",
  advocacyForLabel: "AcidHelp advocates for:",
  advocacyList: [
    "Licensing and identity verification for the retail sale of concentrated acid, in line with the Punjab Hazardous Substances Rules 2018, and extension of those rules to informal markets in every province.",
    "Full implementation of the Acid and Burn Crime Act 2018, including the treatment and rehabilitation the law already guarantees, and dedicated prosecutors for acid attack cases so that survivors do not spend years navigating the courts alone.",
    "Expansion of burn treatment capacity in public hospitals outside major cities, so that survivors are not forced to travel hours by road for specialised care.",
    "EMSB (Emergency Management of Severe Burns) training for Rescue 1122 and Edhi Ambulance Service staff, so that resuscitation begins in the ambulance and not on arrival at hospital.",
    "Stronger implementation of Pakistan's gender-based violence laws, including the Punjab Protection of Women against Violence Act, and reliable access to shelters, legal aid, and protection orders for women at risk.",
    "Investment in women's education, work, and economic autonomy as the long-term response to gender-based violence, of which acid attacks are the most visible form.",
  ],

  involvedTitle: "Get Help or Get Involved",
  involvedBody: "AcidHelp is growing. If you are a survivor of an acid attack and would like to share your experience, or if you work with an organisation supporting survivors and would like to get involved with AcidHelp, we would like to hear from you.",
  involvedCta: "Join Us",
};

function aboutPage(t){
  const AMBER = "#9010BF", AMBER_DIM = "rgba(144,16,191,0.14)";
  const AC = ABOUT_CONTENT;
  const provideIcons = [provChecklistSVG(24,AMBER), provChatSVG(24,AMBER), pinSVG(24,AMBER), advIdSVG(24,AMBER)];
  return `<div>
    <!-- Hero: photo left, title + subcopy right, so both are visible together -->
    <section class="reveal" data-reveal-id="abt-hero" style="background:${C.bg};padding:clamp(28px,4vw,56px) clamp(28px,5vw,80px)">
      <div style="max-width:1440px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:clamp(28px,4vw,56px);align-items:flex-end">
        <!-- Placeholder photo (images/footer.png) until a dedicated About
             image is supplied — swap the src below to replace it. -->
        <div style="border-radius:20px;overflow:hidden;height:clamp(320px,40vw,520px)">
          <img src="${IMG.footer}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">
        </div>
        <div style="padding-bottom:12px">
          ${breadcrumb(t.navItems[4])}
          <h1 style="font-family:${BODY_FF};font-weight:500;font-size:clamp(36px,3.4vw,52px);letter-spacing:-1px;line-height:1.06;color:#fff;margin:14px 0 0">${t.abtTitle.toUpperCase().replace(/ACID/, `<span style="color:${C.brand}">ACID</span>`)}</h1>
          <p style="font-family:${BODY_FF};font-weight:300;font-size:clamp(14px,1.2vw,16px);color:rgba(255,255,255,.7);line-height:1.75;margin:16px 0 0;max-width:60ch">${t.abtMission}</p>
          <a href="/joinus" onclick="return setPage('joinus')" class="cta-btn" style="margin-top:24px;background:none;border:1.5px solid #DFA4F8;color:#DFA4F8;padding:12px 28px;border-radius:32px;font-size:14px;font-weight:600;font-family:${BODY_FF};letter-spacing:-0.2px;display:inline-block;text-decoration:none">${AC.involvedCta}</a>
        </div>
      </div>
    </section>

    <!-- Why We Exist -->
    <section class="reveal" data-reveal-id="abt-why" style="background:${C.bg};padding:clamp(46px,5.5vw,80px) clamp(28px,5vw,80px)">
      <div style="max-width:1440px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr));gap:clamp(28px,4vw,56px);align-items:center">
        <div>
          <h2 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(26px,3.4vw,40px);letter-spacing:-1px;line-height:1.15;color:#fff;margin:0 0 20px">${AC.whyTitle}</h2>
          <p style="font-family:${BODY_FF};font-size:15px;color:${C.sub};line-height:1.8;text-align:justify;margin:0 0 24px">${AC.whyPara1}</p>
          <p style="font-family:${BODY_FF};font-size:15px;color:${C.sub};line-height:1.8;text-align:justify;margin:0 0 24px">${AC.whyPara2}</p>
          <p style="font-family:${BODY_FF};font-size:15px;color:${C.sub};line-height:1.8;text-align:justify;margin:0">${AC.whyPara3}</p>
        </div>
        <div style="border-radius:20px;overflow:hidden;height:clamp(280px,32vw,420px)">
          <img src="${IMG.whatToDo}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">
        </div>
      </div>
    </section>

    <!-- What AcidHelp Provides -->
    <section class="reveal" data-reveal-id="abt-provides" style="background:${C.bg};padding:clamp(46px,5.5vw,80px) clamp(28px,5vw,80px)">
      <div style="max-width:1440px;margin:0 auto">
        <h2 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(26px,3vw,40px);letter-spacing:-0.5px;color:#fff;margin:0 0 28px">${AC.providesTitle}</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr));gap:16px">
          ${AC.provides.map((p,i)=>`
            <div class="about-pillar" style="background:${C.card};border:1px solid ${C.border};border-radius:20px;padding:26px 22px">
              <span style="width:48px;height:48px;border-radius:14px;background:${AMBER_DIM};display:flex;align-items:center;justify-content:center;margin-bottom:18px">${provideIcons[i]||""}</span>
              <div style="font-family:${BODY_FF};font-weight:500;font-size:15px;color:${C.text};line-height:1.55">${p}</div>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- Our Advocacy -->
    <section class="reveal" data-reveal-id="abt-advocacy" style="background:${C.bg};padding:clamp(46px,5.5vw,80px) clamp(28px,5vw,80px)">
      <div style="max-width:1440px;margin:0 auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
          <span style="width:38px;height:38px;border-radius:11px;background:${AMBER_DIM};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:19px">🎗</span>
          <h2 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(26px,3vw,40px);letter-spacing:-0.5px;color:#fff;margin:0">${t.advocacyTitle}</h2>
        </div>
        <p style="font-family:${BODY_FF};font-size:15px;color:${C.sub};line-height:1.8;max-width:80ch;margin:0 0 20px">${AC.advocacyIntro}</p>
        <div style="font-family:${BODY_FF};font-weight:600;font-size:15px;color:${C.text};margin-bottom:6px">${AC.advocacyForLabel}</div>
        <div style="display:flex;flex-direction:column;border-top:1px solid ${C.border}">
          ${AC.advocacyList.map((p,i)=>`
            <div style="display:flex;gap:16px;align-items:flex-start;padding:18px 0;border-bottom:1px solid ${C.border}">
              <span style="width:26px;height:26px;border-radius:50%;background:${AMBER_DIM};color:${AMBER};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:${BODY_FF};font-weight:700;font-size:12px;margin-top:1px">${i+1}</span>
              <span style="font-family:${BODY_FF};font-size:14.5px;color:${C.sub};line-height:1.7;max-width:78ch">${p}</span>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- Get Help or Get Involved -->
    <section class="reveal" data-reveal-id="abt-involved" style="background:${C.bg};padding:clamp(46px,5.5vw,80px) clamp(28px,5vw,80px)">
      <div style="max-width:720px;margin:0 auto;text-align:center">
        <h2 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(26px,3vw,40px);letter-spacing:-0.5px;color:#fff;margin:0 0 16px">${AC.involvedTitle}</h2>
        <p style="font-family:${BODY_FF};font-size:15px;color:${C.sub};line-height:1.75;margin:0 0 28px">${AC.involvedBody}</p>
        <a href="/joinus" onclick="return setPage('joinus')" class="cta-btn" style="background:none;border:1.5px solid #DFA4F8;color:#DFA4F8;padding:12px 28px;border-radius:32px;font-size:14px;font-weight:600;font-family:${BODY_FF};letter-spacing:-0.2px;display:inline-block;text-decoration:none">${AC.involvedCta}</a>
      </div>
    </section>

    <!-- Footer -->
    ${footerStrip(t)}
  </div>`;
}

// ── JOIN US PAGE ───────────────────────────────────────────────────────────────
function joinUsPage(t){
  return `<div>
    <!-- Hero + form, side by side so the form is visible without scrolling -->
    <section class="reveal join-hero-grid" data-reveal-id="join-hero" style="background:${C.bg};padding:clamp(28px,4vw,56px) clamp(28px,5vw,80px)">
      <div style="max-width:1440px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(360px,100%),1fr));gap:clamp(32px,5vw,72px);align-items:stretch">
        <!-- Left: intro + placeholder image + stats -->
        <div>
          ${breadcrumb(t.navItems[5])}
          <h1 style="font-family:${BODY_FF};font-weight:500;font-size:clamp(28px,3.4vw,44px);letter-spacing:-1px;line-height:1.06;color:#fff;margin:14px 0 0">${t.conTitle.toUpperCase().replace(/\bHEAL\b/, `<span style="color:#DFA4F8">HEAL</span>`)}</h1>
          <p style="font-family:${BODY_FF};font-weight:300;font-size:clamp(14px,1.2vw,16px);color:rgba(255,255,255,.7);line-height:1.7;margin:16px 0 0;max-width:44ch">${t.conSub}</p>

          <!-- Image -->
          <div style="border-radius:20px;overflow:hidden;height:clamp(220px,26vw,300px);margin-top:30px;background:${C.card}">
            <img src="${IMG.psychological}" alt="Survivors and support workers together" style="width:100%;height:100%;object-fit:cover;display:block">
          </div>
        </div>

        <!-- Right: form (fills the column height so it aligns with the image). The
             divider sits at the actual grid-column edge so it's independent of the
             560px form box being right-aligned within its (wider) column. -->
        <div class="join-form-col" style="display:flex;flex-direction:column;border-inline-start:1px solid ${C.border};padding-inline-start:clamp(16px,2.6vw,32px)">
          <div style="width:100%;max-width:560px;margin-left:auto;display:flex;flex-direction:column;flex:1">
            ${joinUsForm(t)}
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    ${footerStrip(t)}
  </div>`;
}

// Two audiences, one form shell: a survivor requesting help, or a volunteer/org
// offering it. Each tab keeps its own draft + submitted state so switching
// between them never loses what's been typed.
function joinUsForm(t){
  const isSurvivor = state.joinTab==="survivor";
  const data = isSurvivor ? state.survivorForm : state.volunteerForm;
  const submitted = isSurvivor ? state.survivorSubmitted : state.volunteerSubmitted;
  const fourthKey = isSurvivor ? "help" : "role";
  const fourthLabel = isSurvivor ? t.helpLabel : t.roleLabel;
  const fourthOptions = isSurvivor ? t.helpOptions : t.orgTypes;
  const submitLabel = isSurvivor ? t.survivorSubmitLabel : t.submitLabel;
  const submittedMsg = isSurvivor ? t.survivorSubmittedMsg : t.submittedMsg;
  const isRTL = t.dir==="rtl";
  const inputStyle = `width:100%;padding:11px 14px;border-radius:11px;border:1.5px solid ${C.border};font-size:15px;font-weight:500;background:${C.surface};color:${C.text};font-family:${BODY_FF}`;
  // Native select arrows sit flush against the border in most browsers regardless of
  // padding, so we hide it and draw our own chevron with real breathing room. The SVG
  // is run through encodeURIComponent so its own quote marks can't collide with the
  // quotes used by url(...) or the surrounding style="..." attribute.
  const chevronSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="#7A8BA0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const chevron = `data:image/svg+xml,${encodeURIComponent(chevronSVG)}`;
  const selectStyle = `${inputStyle};appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-inline-end:40px;background-image:url(${chevron});background-repeat:no-repeat;background-position:${isRTL?"left 16px center":"right 16px center"}`;
  const labelStyle = `font-size:14.5px;letter-spacing:0.4px;font-weight:300;color:${C.sub};display:block;margin-bottom:4px;padding-inline-start:14px;font-family:${BODY_FF}`;
  const tabStyle = active=>`text-align:left;padding:10px 4px;margin-bottom:-1.5px;background:none;border:none;border-bottom:2.5px solid ${active?"#DFA4F8":"transparent"};color:${active?"#DFA4F8":C.sub};font-weight:${active?700:500};font-size:15px;font-family:${BODY_FF}`;

  const tabs = `<div class="join-tabs" style="display:flex;gap:24px;margin-bottom:14px;border-bottom:1.5px solid ${C.border}">
      <button onclick="setJoinTab('survivor')" class="join-tab-btn${isSurvivor?" is-active":""}" style="${tabStyle(isSurvivor)}">${t.survivorTab}</button>
      <button onclick="setJoinTab('volunteer')" class="join-tab-btn${!isSurvivor?" is-active":""}" style="${tabStyle(!isSurvivor)}">${t.volunteerTab}</button>
    </div>`;

  if(submitted){
    return tabs + `<div style="text-align:center;padding:64px 28px;background:${C.card};border:1px solid ${C.green};border-radius:24px">
        <svg class="success-check" width="64" height="64" viewBox="0 0 52 52">
          <circle class="success-check-circle" cx="26" cy="26" r="23" fill="none" stroke="${C.green}"/>
          <path class="success-check-mark" fill="none" stroke="${C.green}" d="M15 27l8 8 16-17"/>
        </svg>
        <div style="font-size:19px;font-weight:300;color:#fff;margin-top:22px;font-family:${BODY_FF}">${submittedMsg}</div>
      </div>`;
  }
  return tabs + `<div class="join-form-card" style="flex:1;display:flex;flex-direction:column;gap:12px">
      <div>
        <label for="join-name" style="${labelStyle}">${t.nameLabel}</label>
        <input id="join-name" value="${esc(data.name)}" oninput="updateJoinForm('name', this.value)" style="${inputStyle}">
      </div>
      <div>
        <label for="join-email" style="${labelStyle}">${t.emailLabel}</label>
        <input id="join-email" type="email" value="${esc(data.email)}" oninput="updateJoinForm('email', this.value)" style="${inputStyle}">
      </div>
      <div>
        <label for="join-fourth" style="${labelStyle}">${fourthLabel}</label>
        <select id="join-fourth" onchange="updateJoinForm('${fourthKey}', this.value)" style="${selectStyle}">
          <option value=""${data[fourthKey]===""?" selected":""}>—</option>
          ${fourthOptions.map(o=>`<option value="${esc(o)}"${data[fourthKey]===o?" selected":""}>${o}</option>`).join("")}
        </select>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;min-height:100px">
        <label for="join-notes" style="${labelStyle}">${t.notesLabel}</label>
        <textarea id="join-notes" rows="4" oninput="updateJoinForm('notes', this.value)" style="${inputStyle};flex:1;resize:vertical;min-height:100px;line-height:1.5">${esc(data.notes)}</textarea>
      </div>
      <div style="text-align:left;font-family:${BODY_FF};font-size:12.5px;color:${C.sub};margin-top:2px">Your information will remain completely confidential</div>
      <button onclick="submitJoinForm()" class="cta-btn" style="align-self:flex-start;background:#DFA4F8;color:${C.bg};border:none;padding:13px 36px;border-radius:28px;font-size:15px;font-weight:600;font-family:${BODY_FF};cursor:pointer;letter-spacing:-0.3px">${submitLabel}</button>
    </div>`;
}

function initCounters(){
  const duration = 1800;
  document.querySelectorAll(".stat-counter").forEach(el=>{
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const obs = new IntersectionObserver(([e])=>{
      if(!e.isIntersecting) return;
      obs.disconnect();
      let start=null;
      const step = ts=>{
        if(!start) start=ts;
        const p = Math.min((ts-start)/duration,1);
        el.textContent = prefix + Math.floor(p*target).toLocaleString() + suffix;
        if(p<1) requestAnimationFrame(step);
        else el.textContent = prefix + target.toLocaleString() + suffix;
      };
      requestAnimationFrame(step);
    },{ threshold:0.4 });
    obs.observe(el);
  });
}

// Sections rise into place once, the first time they enter view; re-renders
// triggered by clicks (toggling a card, submitting the form, etc.) don't replay it.
function initReveals(){
  document.querySelectorAll(".reveal").forEach(el=>{
    const id = el.dataset.revealId;
    if(id && revealedSections.has(id)){ el.classList.add("is-visible"); return; }
    const obs = new IntersectionObserver(([e])=>{
      if(!e.isIntersecting) return;
      el.classList.add("is-visible");
      if(id) revealedSections.add(id);
      obs.disconnect();
    },{ threshold:0.15 });
    obs.observe(el);
  });
}

// ── NAV + CHAT SCROLL REVEAL ────────────────────────────────────────────────
// On the landing page the header nav and the chat bot start off-screen (nav
// above the top edge, chat off the right) and slide into view on the first
// scroll — the immersive hero fills the screen until you engage with it. The
// visibility is toggled by adding/removing `.nav-hidden` on #root; the CSS
// handles the slide transitions. Other pages, and reduced-motion users, always
// show the nav + chat.
let navRevealCleanup = null;
function initNavReveal(){
  if(navRevealCleanup){ navRevealCleanup(); navRevealCleanup = null; }
  const root = document.getElementById("root");
  if(!root) return;

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(state.page !== "emergency" || reduce){ root.classList.remove("nav-hidden"); return; }

  // Measure the header so the hero can be pulled up by exactly its height on
  // the landing frame (see .nav-hidden .hero-lift in styles.css).
  const header = document.getElementById("site-header");
  if(header) root.style.setProperty("--header-h", header.offsetHeight + "px");

  const THRESHOLD = 24; // px scrolled before the nav + chat slide in
  // One-way reveal: hidden only until the first scroll, then they stay put —
  // scrolling back to the top does not hide them again.
  if(window.scrollY > THRESHOLD){ root.classList.remove("nav-hidden"); return; }
  root.classList.add("nav-hidden");
  const onScroll = () => {
    if(window.scrollY > THRESHOLD){
      root.classList.remove("nav-hidden");
      window.removeEventListener("scroll", onScroll);
      navRevealCleanup = null;
    }
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  navRevealCleanup = () => window.removeEventListener("scroll", onScroll);
}

// ── HYDRATION ─────────────────────────────────────────────────────────────
// index.html bakes a static, English, crawler-readable version of the header
// + hero + "what to do" + hospital snippet directly into #root (marked with
// data-ssr="true"), so search engines and no-JS clients get real content on
// the very first response instead of an empty <div>. On a normal client load
// we must NOT blow that away and rebuild it — the hero has an autoplaying
// <video> that would visibly restart, and replacing DOM that's already
// correct is just a pointless flash. So instead of calling render() (which
// unconditionally replaces all of #root), we splice in only the pieces the
// static shell doesn't have — stats, FAQ, footer, chat — leaving the shell's
// own header/hero/steps/hospital DOM untouched.
//
// Any state change after this point (language switch, page nav, etc.) goes
// through the normal setLang/setPage → render() path exactly as before —
// this function only ever runs once, on initial load, and render() itself
// is completely unmodified.
function hydrate(){
  const root = document.getElementById("root");
  // The shell is English-only — a returning visitor with a stored non-English
  // language preference must not see it, so fall back to a normal full render.
  if(root.dataset.ssr !== "true" || state.lang !== "en"){ render(); return; }

  const t = T.en; // the static shell is English-only, matching state's default lang
  const heroEl = document.getElementById("ssr-hero");
  const pageEl = document.getElementById("ssr-page");

  // Mark the shell's own sections as already revealed so initReveals() below
  // doesn't fade them in again or attach redundant observers to them.
  revealedSections.add("hero");
  revealedSections.add("steps");

  heroEl.insertAdjacentHTML("afterend", statsSection(t));
  // Keeps the same order as emergencyPage(): hero → stats → (hidden legacy
  // steps) → steps-alt → FAQ → footer.
  pageEl.insertAdjacentHTML("beforeend", firstResponseAlt(t) + faqSection(t) + footerStrip(t));
  root.insertAdjacentHTML("beforeend", chatWidget(t));

  root.removeAttribute("data-ssr");
  initCounters();
  initReveals();
  initNavReveal();
}

// ── CHATBOT WIDGET ─────────────────────────────────────────────────────────────
// Sticky FAB + panel, rendered on every page. No backend — quick-reply prompts
// answer instantly, and free-typed messages get a simple keyword match against
// those same prompts (falling back to "call 1122" when nothing matches).
function chatMessageBubble(m){
  const isBot = m.from==="bot";
  return `<div style="display:flex;justify-content:${isBot?"flex-start":"flex-end"}">
      <div style="max-width:82%;background:${isBot?C.card:STATS_ACCENT};color:${isBot?C.text:"#fff"};padding:10px 14px;border-radius:${isBot?"4px 16px 16px 16px":"16px 16px 4px 16px"};font-family:${BODY_FF};font-size:13px;line-height:1.5;white-space:pre-wrap">${esc(m.text)}</div>
    </div>`;
}

function chatWidget(t){
  const isRTL = t.dir==="rtl";
  const side = isRTL ? "left" : "right";
  const fabBtn = `<button onclick="toggleChat()" class="chat-fab chat-orb" aria-label="${state.chatOpen?'Close chat':esc(t.chatTitle)}" style="width:60px;height:60px;border-radius:50%;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0">
      ${state.chatOpen ? closeXSVG : chatBubbleSVG}
    </button>`;

  if(!state.chatOpen){
    // Collapsed state: one glassy capsule holding both the glowing orb avatar and
    // the invite text, glowing at the edges instead of two separate floating pieces.
    const iconBadge = `<span class="chat-orb" style="width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0"></span>`;
    const teaserText = `<span style="font-family:${BODY_FF};font-size:14px;font-weight:300;color:#DFA4F8;text-shadow:0 0 4px rgba(223,164,248,0.9),0 0 14px rgba(223,164,248,0.7);white-space:nowrap">${esc(t.chatTeaser)}</span>`;
    const edgePad = isRTL ? "6px 22px 6px 6px" : "6px 6px 6px 22px";
    return `<button onclick="toggleChat()" id="chat-fab-wrap" class="chat-capsule" aria-label="${esc(t.chatTitle)}" style="position:fixed;bottom:24px;${side}:24px;z-index:1500;display:flex;align-items:center;gap:12px;padding:${edgePad};border-radius:40px;border:1.5px solid rgba(223,164,248,0.55);background:rgba(26,26,28,0.55);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 0 22px rgba(223,164,248,0.45),0 8px 24px rgba(0,0,0,0.35);cursor:pointer">
        ${isRTL ? iconBadge + teaserText : teaserText + iconBadge}
      </button>`;
  }

  const fab = `<div id="chat-fab-wrap" style="position:fixed;bottom:24px;${side}:24px;z-index:1500">${fabBtn}</div>`;
  const hasUserMsg = state.chatMessages.some(m=>m.from==="user");
  const prompts = hasUserMsg ? "" : `<div style="padding:0 14px 14px;display:flex;flex-wrap:wrap;gap:8px;background:transparent">
      ${t.chatPrompts.map((p,i)=>`<button onclick="askChatPrompt(${i})" class="chat-prompt-btn" style="background:#fff;border:1px solid ${C.border};color:#000;border-radius:20px;padding:8px 14px;font-family:${BODY_FF};font-size:12px;cursor:pointer">${esc(p.q)}</button>`).join("")}
    </div>`;

  // Header is its own floating glass pill (matching the collapsed teaser
  // capsule's language) sitting above the message panel with a visible gap,
  // rather than a flat bar fused to the panel's top edge.
  const headerPill = `<div style="flex-shrink:0;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 8px 8px 20px;border-radius:40px;border:1.5px solid rgba(223,164,248,0.55);background:rgba(26,26,28,0.55);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 8px 24px rgba(0,0,0,0.35)">
      <div style="font-family:${BODY_FF};font-weight:300;font-size:15px;letter-spacing:.02em;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0">${esc(t.chatTitle)}</div>
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
        <button onclick="resetChat()" class="icon-btn spin-hover" aria-label="Restart" style="background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:50%;width:26px;height:26px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0">${restartSVG("#fff")}</button>
        <button onclick="toggleChat()" class="icon-btn" aria-label="Close chat" style="background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:50%;width:26px;height:26px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0">✕</button>
        <span class="chat-orb" style="width:38px;height:38px;border-radius:50%;flex-shrink:0"></span>
      </div>
    </div>`;

  const messagesPanel = `<div class="chat-panel" style="flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden;background:rgba(26,26,28,0.6);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(223,164,248,0.3);border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.5)">
      <div id="chat-messages" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:transparent;min-height:160px">
        ${state.chatMessages.map(chatMessageBubble).join("")}
      </div>

      ${prompts}

      <div style="display:flex;gap:8px;padding:12px;border-top:1px solid ${C.border};background:transparent;flex-shrink:0">
        <input id="chat-input" aria-label="${esc(t.chatPlaceholder)}" placeholder="${esc(t.chatPlaceholder)}" oninput="updateChatDraft(this.value)" onkeydown="if(event.key==='Enter'){event.preventDefault();sendChatMessage();}" value="${esc(state.chatDraft)}" style="flex:1;min-width:0;padding:10px 14px;border-radius:20px;border:1.5px solid #DFA4F8;background:rgba(11,15,28,0.6);color:${C.text};font-size:13px;font-family:${BODY_FF}">
        <button onclick="sendChatMessage()" class="cta-btn" aria-label="${esc(t.chatPlaceholder)}" style="background:#DFA4F8;border:none;border-radius:50%;width:38px;height:38px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0">${sendSVG(C.bg)}</button>
      </div>
    </div>`;

  const panel = `<div style="position:fixed;bottom:96px;${side}:24px;z-index:1499;width:min(360px, calc(100vw - 32px));max-height:min(560px, calc(100vh - 140px));display:flex;flex-direction:column;gap:10px">
      ${headerPill}
      ${messagesPanel}
    </div>`;

  return fab + panel;
}

function scrollChatToBottom(){
  requestAnimationFrame(()=>{
    const el = document.getElementById("chat-messages");
    if(el) el.scrollTop = el.scrollHeight;
  });
}

function getChatReply(text){
  const t = T[state.lang];
  const words = text.toLowerCase().split(/\s+/).filter(w=>w.length>3);
  const hit = t.chatPrompts.find(p=>{
    const q = p.q.toLowerCase();
    return words.some(w=>q.includes(w));
  });
  return hit ? hit.a : t.chatFallback;
}

// ── SHELL / RENDER ────────────────────────────────────────────────────────────
function render(){
  const t = T[state.lang];
  const root = document.getElementById("root");
  root.setAttribute("dir", t.dir);
  root.setAttribute("data-lang", state.lang);
  // state.lang's internal "ro" key means Roman Urdu (Latin-script Urdu), not
  // ISO 639-1 Romanian — map it to the correct BCP-47 tag so screen readers
  // don't apply Romanian pronunciation rules to this content.
  const HTML_LANG = { en:"en", ur:"ur", ro:"ur-Latn" };
  document.documentElement.setAttribute("lang", HTML_LANG[state.lang] || "en");
  root.style.fontFamily = t.ff;
  root.style.minHeight = "100vh";
  root.style.background = C.bg;
  root.style.color = C.text;

  // HEADER — logo · nav tabs (Figma) · language · 1122 pill
  const header = `<header id="site-header" style="position:sticky;top:0;z-index:1200;background:${C.bg};border-bottom:1px solid ${C.border}">
    <div class="site-header-inner" style="max-width:1440px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:11px 16px 12px">
      <a href="/" onclick="return setPage('emergency')" class="logo-btn" aria-label="Acidhelp — home" style="background:none;border:none;padding:0;cursor:pointer;display:flex;align-items:center;gap:9px;flex-shrink:0;text-decoration:none">
        ${logoMark(26)}
        <span class="brand-wordmark" style="font-family:${HEAD_FF};font-weight:900;font-size:24px;letter-spacing:-1px;line-height:1"><span style="color:${C.brand}">Acid</span><span style="color:#fff">help</span></span>
      </a>
      <nav class="nav-scroll" style="flex:1;justify-content:center;min-width:0">
        ${[1,2,3,4,5].map(i=>{  /* Figma order: Nearby · Recovery · Blog · About · Join Us — Emergency is the landing page (logo) */
          const label = t.navItems[i];
          const active = state.page===t.pages[i] || (t.pages[i]==="blog" && state.page==="blogPost");
          return `<a href="${PAGE_URLS[t.pages[i]]}" onclick="return setPage('${t.pages[i]}')" class="nav-tab-btn" style="background:none;border:none;cursor:pointer;padding:6px 2px;font-family:${BODY_FF};font-weight:${active?600:400};font-size:16px;letter-spacing:-0.5px;color:${active?"#fff":"rgba(240,243,250,.72)"};border-bottom:2px solid ${active?C.brand:"transparent"};white-space:nowrap;text-decoration:none">${label}</a>`;
        }).join("")}
      </nav>
      <div class="header-controls" style="display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div class="lang-group" style="display:flex;gap:4px">
          ${["en","ur","ro"].map(l=>{
            const active = state.lang===l;
            const ff = l==="ur" ? "'Noto Nastaliq Urdu',sans-serif" : BODY_FF;
            return `<button onclick="setLang('${l}')" class="lang-btn" style="background:${active?C.card:"transparent"};color:${active?"#fff":C.sub};border:1px solid ${active?C.borderLight:"transparent"};border-radius:16px;padding:3px 9px;font-size:${l==="ur"?12:10.5}px;font-weight:${active?700:500};cursor:pointer;font-family:${ff}">${T[l].name}</button>`;
          }).join("")}
        </div>
        <a href="tel:1122" class="cta-btn call-pill" style="background:${C.brand};border-radius:32px;padding:6px 12px;display:inline-flex;align-items:center;gap:4px">
          ${phoneSVG(17,"#fff")}
          <span style="color:#fff;font-family:${BODY_FF};font-weight:700;font-size:17px;letter-spacing:-0.5px">1122</span>
        </a>
      </div>
    </div>
  </header>`;

  let body = "";
  if(state.page==="emergency") body = emergencyPage(t);
  else if(state.page==="medical") body = mapPage();
  else if(state.page==="resources") body = resourcesPage(t);
  else if(state.page==="blog") body = blogPage(t);
  else if(state.page==="blogPost") body = blogPostPage(t);
  else if(state.page==="about") body = aboutPage(t);
  else if(state.page==="joinus") body = joinUsPage(t);

  // The map page has its own bottom-right controls (Near Me button, hospital
  // sheets) that the chatbot would collide with, so it's left out entirely there.
  root.innerHTML = header + `<main>${body}</main>` + (state.page==="medical" ? "" : chatWidget(t));

  if(state.page==="medical") mountMap();
  if(state.page==="emergency") initCounters();
  initReveals();
  initNavReveal();
}

// ── HANDLERS ──────────────────────────────────────────────────────────────────
function setLang(l){
  state.lang = l;
  try{ localStorage.setItem("acidhelp_lang", l); }catch(e){}
  render();
}
// Called from onclick="return setPage('x')" on real <a href> nav elements.
// Returning true lets the browser's normal navigation to the other file
// proceed; returning false swallows the click for an in-file transition
// (re-clicking the active tab, or "Back to Blog" leaving a post) so it
// resets state and scrolls up instead of reloading the same document.
function setPage(p){
  if(p !== window.INITIAL_PAGE){
    return true; // different file — let the real <a href> navigate there
  }
  if(p!=="resources") openCard = null;
  state.page = p;
  revealedSections.clear();
  render();
  window.scrollTo(0,0);
  return false;
}
function toggleCard(i){ openCard = (openCard===i) ? null : i; render(); }
// Toggles the .is-open class directly on the existing DOM nodes instead of calling
// render() — a full innerHTML replace would destroy and recreate the icon/answer
// elements, so the CSS transitions (icon rotation, answer reveal) would have nothing
// to animate from and would just snap to their end state.
function toggleFaq(i){
  const clicked = document.querySelector(`.faq-item[data-faq-index="${i}"]`);
  const wasOpen = clicked && clicked.classList.contains("is-open");
  document.querySelectorAll(".faq-item.is-open").forEach(el=>el.classList.remove("is-open"));
  if(!wasOpen && clicked) clicked.classList.add("is-open");
  openFaq = wasOpen ? null : i;
}
function openBlogPost(id){
  state.activeBlogId = id;
  state.page = "blogPost";
  revealedSections.clear();
  render();
  window.scrollTo(0,0);
}
function setJoinTab(tab){ state.joinTab = tab; render(); }
function updateJoinForm(key,val){
  (state.joinTab==="survivor" ? state.survivorForm : state.volunteerForm)[key] = val;
}
// Formspree form endpoint — relays Join Us submissions to the email configured
// in the Formspree dashboard (info@acidhelp.com). The site is static, so the
// form posts to Formspree instead of a backend of its own.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvgpjwv";

function submitJoinForm(){
  const isSurvivor = state.joinTab==="survivor";
  const data = isSurvivor ? state.survivorForm : state.volunteerForm;
  if(!data.name || !data.email) return;
  // Fire-and-forget: the confirmation UI shows immediately and isn't held up
  // by network latency.
  try{
    fetch(FORMSPREE_ENDPOINT, {
      method:"POST",
      headers:{ "Content-Type":"application/json", "Accept":"application/json" },
      body:JSON.stringify({
        _subject:`AcidHelp form: ${isSurvivor?"Survivor":"Volunteer"} — ${data.name}`,
        form:isSurvivor?"Survivor":"Volunteer / Organisation",
        name:data.name,
        email:data.email,
        [isSurvivor?"help_required":"role"]:data[isSurvivor?"help":"role"] || "—",
        additional_information:data.notes || "—",
      }),
    }).catch(()=>{});
  }catch(e){}
  if(isSurvivor) state.survivorSubmitted = true; else state.volunteerSubmitted = true;
  render();
}

function toggleChat(){
  state.chatOpen = !state.chatOpen;
  if(state.chatOpen && state.chatMessages.length===0){
    state.chatMessages.push({ from:"bot", text:T[state.lang].chatGreeting });
  }
  render();
  if(state.chatOpen){
    scrollChatToBottom();
    document.getElementById("chat-input")?.focus();
  }
}
function updateChatDraft(val){ state.chatDraft = val; }
// Clears the conversation back to the greeting + quick-prompt list — the only
// way back to that starting screen once a prompt/typed question has been answered.
function resetChat(){
  state.chatMessages = [{ from:"bot", text:T[state.lang].chatGreeting }];
  state.chatDraft = "";
  render();
  scrollChatToBottom();
}
function askChatPrompt(i){
  const p = T[state.lang].chatPrompts[i];
  if(!p) return;
  state.chatMessages.push({ from:"user", text:p.q }, { from:"bot", text:p.a });
  render();
  scrollChatToBottom();
}
function sendChatMessage(){
  const text = (state.chatDraft||"").trim();
  if(!text) return;
  const reply = getChatReply(text);
  state.chatMessages.push({ from:"user", text }, { from:"bot", text:reply });
  state.chatDraft = "";
  render();
  scrollChatToBottom();
  document.getElementById("chat-input")?.focus();
}

function selectHospital(id){
  const h = HOSPITALS.find(x=>x.id===id);
  if(!h) return;
  mapState.selected = h;
  mapState.panelCollapsed = false; // ensure the detail is visible
  if(mapState.map) mapState.map.setView([h.lat,h.lng],14,{animate:true});
  renderMapOverlays();
}
function closeSheet(){ mapState.selected = null; renderMapOverlays(); }
function clearError(){ mapState.locError = null; renderMapOverlays(); }
function collapsePanel(){ mapState.panelCollapsed = true; renderMapOverlays(); }
function expandPanel(){ mapState.panelCollapsed = false; renderMapOverlays(); }

// Open Google Maps driving directions to a hospital (from the user's location
// when we have it, otherwise Google uses the device's current location).
function openDirections(id){
  const h = HOSPITALS.find(x=>x.id===id);
  if(!h) return;
  const origin = mapState.userLoc ? `&origin=${mapState.userLoc.lat},${mapState.userLoc.lng}` : "";
  window.open(`https://www.google.com/maps/dir/?api=1${origin}&destination=${h.lat},${h.lng}&travelmode=driving`, "_blank", "noopener");
}

// Re-style markers so the closest hospital gets a secondary-colour ring.
function refreshMarkers(){
  const L = window.L;
  if(!L || !mapState.markers) return;
  const closestId = mapState.nearbyList[0] ? mapState.nearbyList[0].id : null;
  HOSPITALS.forEach(h=>{
    const m = mapState.markers[h.id];
    if(!m) return;
    m.setIcon(L.divIcon({ className:"", html:hospBadge(h.icon,42,sColor(h.specialty), h.id===closestId?"#DFA4F8":null), iconSize:[42,42], iconAnchor:[21,21] }));
  });
}

function nearMe(){
  mapState.locError = null;
  if(!navigator.geolocation){ mapState.locError = "Geolocation not supported."; renderMapOverlays(); return; }
  mapState.loading = true;
  renderMapOverlays();
  navigator.geolocation.getCurrentPosition(
    ({coords:{latitude:lat,longitude:lng}})=>{
      mapState.loading = false;
      const L = window.L, map = mapState.map;
      if(map){
        if(mapState.userMarker) mapState.userMarker.remove();
        mapState.userMarker = L.marker([lat,lng],{
          icon:L.divIcon({className:"",html:`<div style="width:18px;height:18px;background:${C.brand};border-radius:50%;border:3px solid white;box-shadow:0 0 0 6px rgba(186,69,235,0.22);"></div>`,iconSize:[18,18],iconAnchor:[9,9]})
        }).addTo(map);
      }
      mapState.userLoc = { lat, lng };
      const sorted = HOSPITALS.map(h=>({...h,dist:haversine(lat,lng,h.lat,h.lng)})).sort((a,b)=>a.dist-b.dist);
      mapState.nearbyList = sorted.slice(0,5); // closest first
      mapState.selected = null;                // show the list, not a single detail
      mapState.panelCollapsed = false;         // open the panel on locate
      refreshMarkers();                        // ring the closest hospital's pin
      if(map) map.flyTo([lat,lng],11,{duration:1.4});
      renderMapOverlays();
    },
    ()=>{ mapState.loading=false; mapState.locError="Location access denied. Allow it in browser settings."; renderMapOverlays(); },
    {timeout:12000}
  );
}

// Boot
hydrate();
