// ── COLOURS ───────────────────────────────────────────────────────────────────
const C = {
  bg:"#0B0F1C", surface:"#141924", card:"#1C2337",
  border:"#252E45", borderLight:"#2E3850",
  red:"#FF3B30", redDark:"#B02820", redDim:"rgba(255,59,48,0.14)",
  green:"#00C853", greenDim:"rgba(0,200,83,0.14)",
  blue:"#0A84FF", blueDim:"rgba(10,132,255,0.14)",
  purple:"#BF5AF2", purpleDim:"rgba(191,90,242,0.14)",
  warn:"#FF911C", warnDim:"rgba(255,145,28,0.2)",
  teal:"#30D5C8", tealDim:"rgba(48,213,200,0.14)",
  text:"#F0F3FA", sub:"#8B9CB0", muted:"#38465A",
};
// Nastaliq is appended only as a *fallback*: Latin glyphs (the logo wordmark,
// brand names, numbers) keep rendering in Lexend/Noto Sans, and the browser
// substitutes Noto Nastaliq Urdu per-glyph only for Arabic-script characters.
// This keeps every Latin element's font and metrics identical across languages,
// so switching to Urdu/Pashto no longer restyles the logo or shifts the layout.
const HEAD_FF = "'Noto Sans','Noto Nastaliq Urdu',sans-serif";   // display / headings (Figma: Noto Sans Medium)
const BODY_FF = "'Lexend','Noto Nastaliq Urdu',sans-serif";      // nav / body / UI (Figma: Lexend)
const BODY_2_FF = "'Lexend','Noto Nastaliq Urdu',sans-serif";      // nav / body / UI (Figma: Lexend Light)

// ── ASSETS ──────────────────────────────────────────────────────────────────
const IMG = {
  logo:          "./images/logo.png",
  heroVideo:     "./images/hero-video.mp4",
  psychological: "./images/psychological.png",
  medical:       "./images/medical.png",
  legal:         "./images/legal.png",
  employment:    "./images/employment.png",
  footer:        "./images/footer.png",
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
  { id:2,  name:"Jinnah Hospital Burns Ward",      city:"Lahore",     phone:"042-99204480", specialty:"Burns Ward",    note:"Major trauma centre · 24h",                           lat:31.5030, lng:74.3321, icon:"🏥" },
  { id:3,  name:"Acid Survivors Foundation Clinic",city:"Lahore",     phone:"051-2305354",  specialty:"Specialist",   note:"Specialist survivor care, legal aid & psych support",  lat:31.5146, lng:74.3295, icon:"💛" },
  { id:4,  name:"Depilex Smileagain Foundation",   city:"Lahore",     phone:"+92 (0)423 589 0003", specialty:"Reconstructive",note:"Free reconstructive surgery for survivors",    lat:31.5074, lng:74.3421, icon:"✂️" },
  { id:5,  name:"Civil Hospital Burns Ward",       city:"Karachi",    phone:"021-99215740", specialty:"Burns Ward",    note:"24h emergency · Largest public hospital Karachi",     lat:24.8548, lng:67.0179, icon:"🏥" },
  { id:6,  name:"JPMC Burns Centre",              city:"Karachi",    phone:"021-99201300", specialty:"Burns Centre",  note:"Dedicated burns unit · Major referral centre",         lat:24.8702, lng:67.0081, icon:"🔥" },
  { id:7,  name:"SIUT Karachi",                   city:"Karachi",    phone:"021-99201300", specialty:"Surgical",      note:"Free surgical care for all patients",                  lat:24.8826, lng:67.0611, icon:"⚕️" },
  { id:8,  name:"PIMS Burns Unit",                city:"Islamabad",  phone:"051-9261170",  specialty:"Burns Unit",    note:"Federal burns centre · Capital Territory",             lat:33.7225, lng:73.0943, icon:"🔥" },
  { id:9,  name:"Poly Clinic Hospital",           city:"Islamabad",  phone:"051-9218300",  specialty:"Emergency",     note:"24h A&E · Central Islamabad",                         lat:33.7109, lng:73.0786, icon:"🏥" },
  { id:10, name:"Lady Reading Hospital",          city:"Peshawar",   phone:"091-9210420",  specialty:"Burns Unit",    note:"Main burns referral centre KPK",                      lat:34.0075, lng:71.5784, icon:"🔥" },
  { id:11, name:"Hayatabad Medical Complex",      city:"Peshawar",   phone:"091-9217404",  specialty:"Emergency",     note:"Major trauma facility",                               lat:34.0116, lng:71.4773, icon:"🏥" },
  { id:12, name:"Nishtar Hospital",               city:"Multan",     phone:"061-9220082",  specialty:"Emergency",     note:"Burns ward on-site · South Punjab",                   lat:30.1803, lng:71.4627, icon:"🏥" },
  { id:13, name:"Allied Hospital",                city:"Faisalabad", phone:"041-9220369",  specialty:"Emergency",     note:"24h emergency · Central Punjab",                      lat:31.4484, lng:73.1350, icon:"🏥" },
  { id:14, name:"Sandeman Hospital",              city:"Quetta",     phone:"081-9201550",  specialty:"Emergency",     note:"Provincial referral centre · Balochistan",             lat:30.1988, lng:66.9988, icon:"🏥" },
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
const STATS_ACCENT = "#ff911c";
const STATS_EN = [
  { num:1000, suffix:"+",  label:"Acid attacks reported annually in Pakistan", src:"Depilex Smileagain Foundation", color:STATS_ACCENT },
  { num:85,   suffix:"%",  label:"Of victims are women and girls", src:"ASF Pakistan", color:STATS_ACCENT },
  { num:5,    suffix:"%",  label:"Cases that result in conviction", prefix:"<", src:"ASF Pakistan", color:STATS_ACCENT },
  { num:40,   suffix:"%",  label:"Attacks committed by intimate partners or family members", src:"Depilex Smileagain Foundation", color:STATS_ACCENT },
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
  { id:4, category:"Legal", color:C.warn, dim:C.warnDim,
    title:"Understanding Your Legal Rights After an Acid Attack in Pakistan",
    excerpt:"A guide to survivors' legal protections in Pakistan — criminal penalties, recent Supreme Court rulings, core rights during a case, and how to preserve evidence.",
    author:"Acidhelp Team", date:"Jun 30, 2026", image:IMG.blog4,
    body:[
      { h:"Overview" },
      "This guide explains protections available to acid attack survivors under Pakistani law in accessible language. It emphasizes that while the legal system has strengthened significantly, recovery is personal and proceeds at each survivor's own pace.",
      { h:"Key Legal Framework" },
      "**Criminal Classification**: Before 2011, acid attacks fell under general assault laws. The Criminal Law (Second Amendment) Act, 2011 added Sections 336-A and 336-B to the Pakistan Penal Code specifically addressing corrosive substance attacks.",
      "**Penalties**: Conviction requires life imprisonment, or a minimum of 14 years' imprisonment, and a minimum fine of one million rupees. These constitute among Pakistan's most severe penalties.",
      "**Non-Compoundable Status**: Acid attacks cannot be privately settled or withdrawn like certain other criminal matters, protecting survivors from pressure to abandon cases.",
      { h:"Core Survivor Rights" },
      { list:[
        "Right to First Information Report (FIR) registration",
        "Right to challenge police refusal via Magistrate (Sections 22-A, 22-B, Code of Criminal Procedure)",
        "Right to free legal aid under the Legal Aid and Justice Authority Act 2020",
        "Right to court-ordered compensation",
        "Right to privacy protections like in-camera proceedings",
        "Right to gender-based violence framework protections",
      ]},
      "These apply regardless of attacker identity — stranger, family member, or spouse.",
      { h:"Recent Developments" },
      "**Supreme Court Landmark (June 2026)**: The Court deemed acid violence \"more heinous than homicide\" and upheld life sentences. Recommendations included establishing a National Acid Survivors' Rehabilitation Fund, expedited four-month trial timelines, disability recognition for survivors, and digital acid sales monitoring systems.",
      "**Punjab Acid Control Act 2025**: The first province-level prevention legislation requiring seller licensing, prohibiting sales to minors, mandating container labeling, and enabling compensation from negligent sellers. Currently applies only to Punjab.",
      { h:"Evidence Preservation" },
      "Survivors should retain medical records, medico-legal reports, injury photographs, witness information, threatening communications, CCTV footage, and treatment receipts — storing copies with trusted individuals outside the immediate situation.",
      { h:"Support Resources" },
      "Organisations providing legal assistance include the Legal Aid and Justice Authority, Acid Survivors Foundation Pakistan, AGHS Legal Aid Cell, Aurat Foundation, and Provincial Women Protection Authorities. AcidHelp.com maintains verified contact directories across Pakistan.",
      { h:"Addressing Common Concerns" },
      "**Delayed Reporting**: While early reporting strengthens evidence collection, delays don't automatically prevent prosecution — circumstances vary by case.",
      "**Retaliation Fear**: Once an FIR is filed, state prosecution responsibility transfers from the survivor; intimidation itself constitutes a serious offense worthy of reporting.",
      "**Compensation**: Courts award amounts under Section 544-A based on injury severity, medical evidence, and documented losses — no fixed entitlement exists.",
      "**Private Settlement Pressure**: Non-compoundable status prevents forced reconciliation, though some families still encourage compromise for social or financial reasons.",
      { h:"Persistent Challenges" },
      "Despite strengthened protections, survivors continue facing lengthy medical treatment, financial hardship, social stigma, justice system delays, and geographic barriers to specialized support, particularly in rural areas.",
    ]},
];

// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
const T = {
  en:{
    dir:"ltr", name:"EN", ff:"'Lexend','Noto Sans',sans-serif", hff:HEAD_FF,
    steps:[
      { n:"1", icon:"drop",  head:"FLUSH WITH WATER", sub:"Non-stop", body:"Pour cool running water over the area continuously for at least 20 minutes. Do not use a small amount and stop — keep flushing the entire time." },
      { n:"2", icon:"phone", head:"CALL 1122", sub:"Say: acid attack", body:"Pakistan's emergency response number. Say: 'Acid attack — send ambulance immediately.' Stay on the line." },
      { n:"3", icon:"cross", head:"GET TO HOSPITAL", sub:"Burns unit", body:"Burns unit. Do not cover the wound with cloth — contact with fabric worsens the burn. Keep flushing until medical help arrives." },
    ],
    emTitle:"ACID ATTACK?", emSub:"Act immediately. Every second matters",
    doNot:"DO NOT apply: toothpaste · cream · milk · oil · baking soda — and do NOT cover with cloth",
    callBtn:"CALL 1122 NOW", altLabel:"Also call:", edhi:"Edhi: 115", asf:"ASF: 051-2305354",
    playVideo:"PLAY VIDEO",
    videoLabel:"Watch: How to flush correctly",
    stepsTitle:"What to do", stepsEyebrow:"First response",
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
    conTitle:"Get Help or Get Involved", conSub:"Reach out for support, or partner with us to help more survivors across Pakistan",
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
    stepsTitle:"کیا کریں", stepsEyebrow:"پہلا ردعمل",
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
    dir:"ltr", name:"ROM", ff:"'Lexend','Noto Sans',sans-serif", hff:HEAD_FF,
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
    stepsTitle:"Kya karein", stepsEyebrow:"Pehla iqdaam",
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
  ps:{
    dir:"ltr", name:"پښتو", ff:"'Noto Nastaliq Urdu','Noto Sans',sans-serif", hff:"'Noto Nastaliq Urdu','Noto Sans',sans-serif",
    steps:[
      { n:"۱", icon:"drop",  head:"د اوبو سره مینځل", sub:"بې وقفه", body:"لږ تر لږه ۲۰ دقیقې مسلسل سوړ اوبه واچوئ. یو لږ واچول او درېدل بس نه دي — ټول وخت مینځل." },
      { n:"۲", icon:"phone", head:"۱۱۲۲ ته زنګ وهئ", sub:"ووایاست: د تیزاب برید", body:"د پاکستان بیړني شمیره. ووایاست: 'د تیزاب برید — فوري امبولانس راولئ.' خط مه پرېږدئ." },
      { n:"۳", icon:"cross", head:"روغتون ته لاړ شئ", sub:"د سوختګۍ وارډ", body:"د سوختګۍ وارډ. د زخم سره کالي مه لگوئ — کالي تیزاب ساتي او سوځیدنه زیاتوي. د مرستې تر رارسیدو پورې اوبه واچوئ." },
    ],
    emTitle:"د تیزاب برید؟", emSub:"سمدلاسه اقدام وکړئ — هر شیبه مهمه ده",
    doNot:"دا مه لگوئ: ټوتھ پیسټ · کریم · شیدې · تیل · سوډا — او کالي مه لگوئ",
    callBtn:"اوس ۱۱۲۲ ته زنګ وهئ", altLabel:"یا زنګ وهئ:", edhi:"ایدهي: ۱۱۵", asf:"ASF: 051-2305354",
    playVideo:"ویډیو وګورئ",
    videoLabel:"وګورئ: سم ډول اوبه څنګه واچول شي",
    stepsTitle:"څه وکړئ", stepsEyebrow:"لومړی ګام",
    navItems:["بیړنۍ مرسته","نږدې","سرچینې","بلاگ","زمونږ د اړه","ګډون وکړئ"],
    pages:["emergency","medical","resources","blog","about","joinus"],
    blogTitle:"د AcidHelp بلاگ",
    featuredLabel:"ځانګړې لیکنه", readNowLabel:"اوس یې ولولئ", byLabel:"لیکوال", backToBlogLabel:"بلاگ ته بیرته لاړ شئ",
    medTitle:"نږدې روغتونونه", medSub:"پن ووهئ · لار ومومئ · زنګ وهئ",
    nearMe:"زما نږدې روغتونونه", locating:"لټون جاري دی…", callHosp:"اوس زنګ وهئ", directions:"لار",
    resTitle:"مرسته او بیارغونه", resSub:"د ژوندیو لپاره وړیا مرسته",
    resCards:[
      { icon:"🧠", color:C.purple, dim:C.purpleDim, title:"روانپوهنیز مرسته", sub:"مشوره او روانتیا", orgs:[
        { ...ORGS.umang  },{ ...ORGS.rozan  },{ ...ORGS.asf }]},
      { icon:"🩺", color:C.blue,   dim:C.blueDim,   title:"طبي او جراحي", sub:"د سوختګۍ پالنه او جراحي", orgs:[
        { ...ORGS.depilex },
        { name:"SIUT کراچي", phone:"021-99201300" },
        { name:"سروسز روغتون لاهور", phone:"042-99200163" }]},
      { icon:"📊", color:C.teal,   dim:C.tealDim,   title:"څه وکړئ؟ څه مه کوئ؟", sub:"د لومړني مرستې حقایق", orgs:[{ ...ORGS.asf }]},
      { icon:"⚖️", color:C.warn,  dim:C.warnDim,  title:"قانوني مرسته", sub:"حقوق، FIR او محکمه", orgs:[
        { name:"WAR", phone:"021-35375533" },
        { ...ORGS.asf },{ ...ORGS.shirkat }]},
      { icon:"➕", color:C.green,  dim:C.greenDim,  title:"دنده", sub:"مهارت روزنه او عاید", orgs:[
        { ...ORGS.asf },{ ...ORGS.depilex }]},
    ],
    conTitle:"مرسته ترلاسه کړئ یا یوځای شئ", conSub:"د مرستې لپاره اړیکه ونیسئ یا زموږ سره یوځای شئ ترڅو نورو ژوندیو ته ورسیږو",
    survivorTab:"زه ژغورل شوی/ې یم", volunteerTab:"زه رضاکار یم",
    nameLabel:"نوم", emailLabel:"بریښنالیک", notesLabel:"اضافي معلومات",
    helpLabel:"اړینه مرسته", helpOptions:["طبي","قانوني","دنده","خپله کیسه شریکه کړئ"],
    roleLabel:"ستاسو رول", submitLabel:"پیغام واستوئ",
    orgTypes:["روغتون","NGO","قانوني موسسه","روانتیا","کارپوریټ","حکومتي بنسټ","نور"],
    submittedMsg:"مننه! ژر به یو څوک اړیکه ونیسي.",
    survivorSubmitLabel:"غوښتنه واستوئ",
    survivorSubmittedMsg:"مننه! ژر به یو څوک اړیکه ونیسي.",
    abtTitle:"زموږ په اړه", abtMission:"Acidhelp د پاکستان د تیزاب برید ژوندیو لپاره یو غیر ګټه ور بیړني ځواب پلیټ فارم دی.",
    statsTitle:"پاکستان کې واقعیت", statsSource:"سرچینه:",
    faqTitle:"FAQs",
    faqs:[
      { q:"ایا یو لږ اوبه بس دي؟", a:"نه — لږ تر لږه ۲۰ دقیقې د لوی اندازې اوبو سره مسلسل مینځل پکار دي. درېدل تیزاب پوست ته نږدې ساتي." },
      { q:"ایا زخم دې کالیو سره وپوښل شي؟", a:"نه — هیڅکله کالي، پټۍ یا بل شی مه لگوئ. کالي تیزاب او تودوخه ساتي او سوځیدنه زیاتوي." },
      { q:"ایا ټوتھ پیسټ یا کریم سره تیزاب لرې کیږي؟", a:"نه — ټوتھ پیسټ، کریم، شیدې، سوډا او تیل — ټول مضر دي. یوازې سوړ بهونکي اوبه مرسته کوي." },
    ],
    advocacyTitle:"زمونږ دفاع",
    advocacy:"Acidhelp.com د تیزاب د عامه پلورنې د بشپړ منع کولو او د ټولو ژوندیو لپاره وړیا جراحي لپاره دفاع کوي.",
    advocacyPoints:["د تیزابو په ازاده پلورلو بندیز","لازمي پیژندنه تصدیق","د مجرمینو لپاره سختې سزاوې","وړیا رغونیزه جراحي"],
    footerLine2:"Acidhelp.com د بیړني خدماتو بدیل نه دی. فوري ۱۱۲۲ ته زنګ وهئ.",
    chatTitle:"له AcidHelp نه وپوښتئ", chatTeaser:"موږ څنګه مرسته کولی شو؟",
    chatGreeting:"سلام، زه د لومړنۍ مرستې چټکو پوښتنو کې مرستې لپاره دلته یم. یو څه وپوښتئ یا لاندې پوښتنو څخه یوه غوره کړئ.",
    chatPlaceholder:"خپله پوښتنه ولیکئ…",
    chatFallback:"زه پدې باور نه لرم. که کومه بیړنۍ خبره وي، سملاسي ۱۱۲۲ ته زنګ ووهئ. تاسو کولی شئ لاندې پوښتنې هم وکاروئ.",
    chatPrompts:[
      { q:"ایا شیدې لگولی شم؟", a:"نه — شیدې، د ټوتھ پیسټ، کریم، تیل او سوډا په څیر د تیزاب په زخم باندې خوندي نه دي. دا تودوخه ساتي او زخم زیاتوي. یوازې لږ تر لږه ۲۰ دقیقې سوړ بهونکي اوبه وکاروئ." },
      { q:"ایا ټوتھ پیسټ لگولی شم؟", a:"نه — ټوتھ پیسټ تیزاب لرې نه کوي او پوستکي ته تودوخه ساتلی شي. یوازې مسلسل لږ تر لږه ۲۰ دقیقې سوړ اوبه وکاروئ." },
      { q:"څومره اوبه وکاروم؟", a:"لږ تر لږه ۲۰ دقیقې مسلسل ډیرې سوړ بهونکي اوبه وکاروئ. مه ودریږئ او لږ اوبه مه کاروئ." },
      { q:"ایا زخم دې پوښم؟", a:"نه — د تیزاب زخم هیڅکله له کالیو یا پټۍ سره مه پوښئ. کالي تودوخه او تیزاب ساتي او زخم زیاتوي. اوبه اچول ته دوام ورکړئ." },
      { q:"کوم شمیرې ته زنګ ووهم؟", a:"سملاسي ۱۱۲۲ ته زنګ ووهئ — دا د پاکستان بیړنۍ شمیره ده. تاسو کولی شئ ایدهي ته هم ۱۱۵ زنګ ووهئ." },
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
  lang:(()=>{ try{ return localStorage.getItem("acidhelp_lang")||"en"; }catch(e){ return "en"; } })(),
  page: window.INITIAL_PAGE || "emergency",
  activeBlogId:null,
  joinTab:"survivor",
  survivorForm:{name:"",email:"",notes:"",help:""}, survivorSubmitted:false,
  volunteerForm:{name:"",email:"",notes:"",role:""}, volunteerSubmitted:false,
  chatOpen:false, chatMessages:[], chatDraft:"",
};
let openCard = null;
let openFaq = 0;
const mapState = { map:null, userMarker:null, selected:null, nearbyList:[], loading:false, locError:null };
const revealedSections = new Set();

const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
// Colors the word "ACID" red wherever it appears in the (already-uppercased) blog
// title — a no-op for translations where the word isn't spelled out in Latin script.
const highlightAcid = text => text.replace(/ACID/, `<span style="color:${C.red}">ACID</span>`);
// Nastaliq (ur/ps) needs noticeably more line-height than Latin scripts at the same
// nominal value, or tall/multi-line headings visibly overlap the content below them.
// Keyed on language, not t.dir — the UI layout itself always stays left-to-right
// (see the `dir` field on each language above), this is purely a script-shaping fix.
const rtlLH = (t, tight, loose) => (state.lang==="ur"||state.lang==="ps") ? loose : tight;

// ── SHARED SVG BITS ───────────────────────────────────────────────────────────
const phoneSVG = (size,fill)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="${fill}"/></svg>`;
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
// Marker badge: illustrated icons sit on a white disc (so their colours read),
// drawn SVG glyphs sit on the specialty-coloured disc as before.
const hospBadge = (emoji,diameter,col)=>{
  const img = HOSP_IMG[emoji];
  if(img) return `<div style="width:${diameter}px;height:${diameter}px;background:#fff;border-radius:50%;border:3px solid ${col};box-shadow:0 3px 14px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:${Math.round(diameter*0.16)}px"><img src="${img}" alt="" style="width:100%;height:100%;object-fit:contain;display:block"></div>`;
  return `<div style="width:${diameter}px;height:${diameter}px;background:${col};border-radius:50%;border:3px solid white;box-shadow:0 3px 14px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;cursor:pointer;">${hospIcon(emoji,Math.round(diameter*0.48),"#fff")}</div>`;
};
const pinSVG = (size,fill)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.6A2.6 2.6 0 1112 6.4a2.6 2.6 0 010 5.2z" fill="${fill}"/></svg>`;
const navSVG = (size,fill)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M21 3L3 10.6l7.1 2.9 2.9 7.1L21 3z" fill="${fill}"/></svg>`;
const globeSVG = (size,c)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><circle cx="12" cy="12" r="9" stroke="${c}" stroke-width="1.6"/><path d="M3.2 12h17.6M12 3c2.6 2.5 2.6 15.5 0 18M12 3c-2.6 2.5-2.6 15.5 0 18" stroke="${c}" stroke-width="1.6"/></svg>`;
const mailSVG = (size,c)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><rect x="3" y="5.5" width="18" height="13" rx="2.5" stroke="${c}" stroke-width="1.6"/><path d="M4.5 7.5l7.5 5.5 7.5-5.5" stroke="${c}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const hospIcon = (emoji,size,fill)=>{
  if(emoji==="🔥") return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 002.5 2.5z" fill="${fill}"/></svg>`;
  if(emoji==="💛") return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path d="M12 20.7l-1.45-1.32C5.4 14.72 2 11.64 2 7.9 2 4.9 4.42 2.5 7.5 2.5c1.74 0 3.41.81 4.5 2.09C13.09 3.31 14.76 2.5 16.5 2.5 19.58 2.5 22 4.9 22 7.9c0 3.74-3.4 6.82-8.55 11.49L12 20.7z" fill="${fill}"/></svg>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3h14v18h-4v-3a3 3 0 00-6 0v3H5V3zM11 7h2v2h2v2h-2v2h-2v-2H9V9h2V7z" fill="${fill}"/></svg>`;
};
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
    ${firstResponse(t)}
    ${faqSection(t)}
    ${footerStrip(t)}
  </div>`;
}

// "The Reality in Pakistan" — a slim stat banner that reads as an extension of
// the hero rather than its own heavy section, sitting flush underneath it.
function statsSection(t){
  return `<div class="reveal" data-reveal-id="stats" style="background:${C.surface};border-bottom:1px solid ${C.border}">
    <div class="stats-row" style="max-width:1440px;margin:0 auto;padding:0 clamp(24px,4vw,64px);display:flex;flex-wrap:wrap;align-items:stretch;justify-content:space-between">
      ${STATS_EN.map((s,i)=>`
        ${i>0?`<span class="stats-divider" style="width:1px;height:88px;align-self:center;background:${C.border};flex-shrink:0"></span>`:""}
        <div class="stats-item" style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;padding:20px 14px;max-width:300px">
          <span class="stat-counter" data-target="${s.num}" data-suffix="${s.suffix||""}" data-prefix="${s.prefix||""}" style="font-family:${BODY_FF};font-weight:900;font-size:36px;color:${s.color};font-variant-numeric:tabular-nums;flex-shrink:0;line-height:1">${s.prefix||""}0${s.suffix||""}</span>
          <span style="font-family:${BODY_FF};font-size:14px;color:${C.sub};line-height:1.35">${s.label}</span>
          <span style="font-family:${BODY_FF};font-size:10px;color:${C.sub};opacity:0.75;line-height:1.3;margin-top:auto;padding-top:8px">${t.statsSource} ${s.src}</span>
        </div>`).join("")}
    </div>
  </div>`;
}

// Hero: full-bleed portrait photo with the ACID ATTACK content overlaid on the left
function heroPortrait(t){
  const isRTL = t.dir==="rtl";
  return `<section class="reveal" data-reveal-id="hero" style="position:relative;width:100%;height:calc(100vh - 68px);height:calc(100dvh - 68px);min-height:480px;overflow:hidden;background:${C.bg}">
    <!-- Background video -->
    <video autoplay muted loop playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${isRTL?"left":"center right"}">
      <source src="${IMG.heroVideo}" type="video/mp4">
    </video>
    <!-- Left-side scrim: strong black on left fading fully to transparent past the older man's face -->
    <div style="position:absolute;inset:0;background:linear-gradient(${isRTL?"270deg":"90deg"},rgba(0,0,0,0.95) 0%,rgba(0,0,0,0.85) 15%,rgba(0,0,0,0.55) 35%,rgba(0,0,0,0.2) 55%,rgba(0,0,0,0) 72%)"></div>

    <!-- Content overlay -->
    <div style="position:absolute;inset:0;display:flex;align-items:flex-end">
      <div style="max-width:1440px;width:100%;margin:0 auto;padding:0 clamp(28px,5vw,80px) clamp(32px,4vw,56px)">
        <div style="max-width:640px">
          <h1 style="font-family:${BODY_FF};font-weight:900;font-size:clamp(44px,7vw,82px);letter-spacing:-2.5px;line-height:${rtlLH(t,0.95,1.3)};color:#fff;margin:0;text-shadow:0 2px 24px rgba(0,0,0,0.4)">${t.emTitle}</h1>
          <p style="font-family:${BODY_FF};font-weight:300;font-size:clamp(15px,1.3vw,18px);color:rgba(255,255,255,.9);margin:10px 0 32px;text-shadow:0 1px 12px rgba(0,0,0,0.5)">${t.emSub}</p>
          <a href="tel:1122" class="cta-btn" style="background:${C.red};border-radius:40px;padding:16px 30px;display:inline-flex;align-items:center;gap:12px;text-decoration:none;box-shadow:0 8px 32px rgba(255,59,48,0.35)">
            ${phoneSVG(22,"#fff")}
            <span style="color:#fff;font-family:${BODY_FF};font-weight:900;font-size:clamp(17px,1.5vw,22px);letter-spacing:-0.5px">${t.callBtn}</span>
          </a>
          <div style="display:flex;gap:16px;align-items:center;margin-top:22px;flex-wrap:wrap">
            <span style="font-family:${BODY_FF};font-size:12px;color:rgba(255,255,255,.6);text-shadow:0 1px 8px rgba(0,0,0,0.6)">${t.altLabel}</span>
            <a href="tel:115" class="text-link-alt" style="font-family:${BODY_FF};font-size:12px;color:rgba(255,255,255,.85);text-decoration:underline;text-underline-offset:3px;text-shadow:0 1px 8px rgba(0,0,0,0.6)">${t.edhi}</a>
            <a href="tel:05123053540" class="text-link-alt" style="font-family:${BODY_FF};font-size:12px;color:rgba(255,255,255,.85);text-decoration:underline;text-underline-offset:3px;text-shadow:0 1px 8px rgba(0,0,0,0.6)">${t.asf}</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

// "First response · What to do" — 3 step cards with red left rail (matches Figma exactly)
function firstResponse(t){
  const rails = [C.red, "#B52A22", "#8B1818"];
  return `<section class="reveal" data-reveal-id="steps" style="padding:clamp(56px,12vw,96px) clamp(28px,5vw,80px) clamp(48px,6vw,80px)">
    <div style="max-width:1308px;margin:0 auto">
      <div style="font-family:${BODY_FF};font-size:12px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:${C.red}">${t.stepsEyebrow}</div>
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
            <span style="font-family:${HEAD_FF};font-weight:900;font-size:26px;letter-spacing:-1px"><span style="color:${C.red}">Acid</span><span style="color:#fff">help</span></span>
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
function mapPage(){
  return `<div style="position:relative;height:calc(100vh - 64px);height:calc(100dvh - 64px);overflow:hidden;background:${C.bg}">
    <div id="map" style="width:100%;height:100%"></div>
    <div id="map-loading" style="position:absolute;inset:0;background:${C.bg};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px">
      <div style="opacity:0.5">${pinSVG(44,C.sub)}</div>
      <div style="color:${C.sub};font-size:14px;font-weight:600;font-family:${BODY_FF}">Loading map…</div>
    </div>
    <div id="map-overlays"></div>
  </div>`;
}

function renderMapOverlays(){
  const t = T[state.lang];
  const ov = document.getElementById("map-overlays");
  if(!ov) return;
  const sel = mapState.selected;

  const title = `<div style="position:absolute;top:12px;left:12px;z-index:900;background:rgba(11,15,28,0.86);backdrop-filter:blur(8px);border-radius:12px;padding:9px 14px">
      <div style="color:${C.text};font-size:14px;font-weight:900;font-family:${BODY_FF}">${t.medTitle}</div>
      <div style="color:${C.sub};font-size:11px;margin-top:1px;font-family:${BODY_FF}">${t.medSub}</div>
    </div>`;

  const listOpen = mapState.nearbyList.length>0 && !sel;
  const nearBtn = `<button onclick="nearMe()" ${mapState.loading?"disabled":""} class="cta-btn near-me-btn" style="position:absolute;bottom:${listOpen?252:20}px;right:14px;z-index:1000;background:${mapState.loading?C.muted:C.redDark};color:white;border:none;border-radius:30px;padding:13px 20px;font-size:14px;font-weight:800;font-family:${BODY_FF};cursor:${mapState.loading?"not-allowed":"pointer"};display:flex;align-items:center;gap:8px;box-shadow:${mapState.loading?"none":"0 4px 28px rgba(255,59,48,0.45)"}">${mapState.loading?"⏳":pinSVG(16,"#fff")} ${mapState.loading?t.locating:t.nearMe}</button>`;

  const err = mapState.locError ? `<button onclick="clearError()" style="position:absolute;top:12px;left:12px;right:12px;z-index:1001;background:${C.redDark};color:white;padding:12px 14px;border-radius:12px;font-size:13px;font-weight:600;font-family:${BODY_FF};line-height:1.4;text-align:left;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3)">⚠️ ${esc(mapState.locError)}</button>` : "";

  let sheet = "";
  if(mapState.nearbyList.length>0 && !sel){
    sheet = `<div style="position:absolute;bottom:0;left:0;right:0;z-index:1000;background:${C.surface};border-radius:22px 22px 0 0;padding:14px 18px 20px;max-height:45%;overflow-y:auto;box-shadow:0 -6px 30px rgba(0,0,0,0.45)">
        <div style="width:36px;height:4px;background:${C.muted};border-radius:2px;margin:0 auto 12px"></div>
        <div style="color:${C.sub};font-size:11px;font-weight:700;letter-spacing:1px;margin-bottom:10px;font-family:${BODY_FF}">NEAREST HOSPITALS</div>
        ${mapState.nearbyList.map(h=>`
          <button onclick="selectHospital(${h.id})" style="width:100%;display:flex;justify-content:space-between;align-items:center;padding:12px 0;border:none;border-bottom:1px solid ${C.border};background:none;text-align:left;cursor:pointer">
            <div><div style="color:${C.text};font-size:14px;font-weight:700;font-family:${BODY_FF}">${h.name}</div><div style="color:${C.sub};font-size:12px;margin-top:2px;font-family:${BODY_FF}">${h.city} · ${h.specialty}</div></div>
            <div style="text-align:right;flex-shrink:0;margin-left:12px"><div style="color:${C.red};font-size:15px;font-weight:800;font-family:${BODY_FF}">${h.dist} km</div><div style="color:${C.sub};font-size:11px;font-family:${BODY_FF}">away</div></div>
          </button>`).join("")}
      </div>`;
  } else if(sel){
    const col = sColor(sel.specialty);
    const telHref = "tel:"+sel.phone.replace(/[\s\-()]/g,"");
    const dirHref = `https://www.google.com/maps/dir/?api=1&destination=${sel.lat},${sel.lng}&travelmode=driving`;
    sheet = `<div style="position:absolute;bottom:16px;left:16px;width:min(460px, calc(100% - 32px));z-index:1000;background:rgba(20,25,36,0.8);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-radius:20px;padding:12px 18px 22px;box-shadow:0 12px 44px rgba(0,0,0,0.55);animation:slideInLeft 0.28s cubic-bezier(.22,1,.36,1)">
        <div style="width:36px;height:4px;background:${C.muted};border-radius:2px;margin:0 auto 14px"></div>
        <div style="display:flex;gap:12px;align-items:flex-start">
          <div style="flex-shrink:0;margin-top:2px">${hospBadge(sel.icon,46,col)}</div>
          <div style="flex:1;min-width:0">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px;flex-wrap:wrap">
              <span style="background:${col};color:white;font-size:10px;font-weight:700;padding:3px 9px;border-radius:20px;font-family:${BODY_FF}">${sel.specialty}</span>
              ${sel.dist?`<span style="color:${C.red};font-size:12px;font-weight:700;font-family:${BODY_FF};display:inline-flex;align-items:center;gap:4px">${navSVG(12,C.red)} ${sel.dist} km</span>`:""}
            </div>
            <div style="color:${C.text};font-size:17px;font-weight:900;line-height:1.2;font-family:${BODY_FF}">${sel.name}</div>
            <div style="color:${C.sub};font-size:12px;margin-top:4px;font-family:${BODY_FF};display:flex;align-items:center;gap:4px">${pinSVG(13,C.sub)} ${sel.city}</div>
            <div style="color:${C.sub};font-size:12px;margin-top:3px;line-height:1.4;font-family:${BODY_FF}">${sel.note}</div>
            <div style="display:flex;gap:10px;margin-top:14px">
              <a href="${telHref}" class="cta-btn" style="background:${C.redDark};color:white;padding:9px 16px;border-radius:24px;font-weight:700;font-size:13px;font-family:${BODY_FF};text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:6px">${phoneSVG(14,"#fff")} ${t.callHosp}</a>
              <a href="${dirHref}" target="_blank" rel="noreferrer" class="cta-btn" style="background:${C.card};color:${C.text};padding:9px 16px;border-radius:24px;font-weight:700;font-size:13px;font-family:${BODY_FF};text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:6px">${navSVG(14,C.text)} ${t.directions}</a>
            </div>
          </div>
          <button onclick="closeSheet()" class="icon-btn" aria-label="Close" style="background:${C.card};border:none;color:${C.sub};border-radius:50%;width:32px;height:32px;font-size:14px;cursor:pointer;flex-shrink:0">✕</button>
        </div>
      </div>`;
  }

  ov.innerHTML = title + nearBtn + err + sheet;
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
    HOSPITALS.forEach(h=>{
      const col = sColor(h.specialty);
      const icon = L.divIcon({
        className:"",
        html:hospBadge(h.icon,42,col),
        iconSize:[42,42], iconAnchor:[21,21],
      });
      L.marker([h.lat,h.lng],{icon}).addTo(map).on("click",()=>{
        mapState.selected = h;
        map.setView([h.lat,h.lng], Math.max(map.getZoom(),13), {animate:true});
        renderMapOverlays();
      });
    });
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

// ── RESOURCES PAGE ────────────────────────────────────────────────────────────
function resourcesPage(t){
  // Figma shows 4 cards — drop the "Dos & Don'ts Guide" card (index 2) here
  const cards = t.resCards.filter((_,i)=>i!==2);
  // Post-filter index → photo mapping (Psych, Medical, Legal, Employment)
  const CARD_PHOTOS = [
    IMG.psychological,
    IMG.medical,
    IMG.legal,
    IMG.employment,
  ];
  const CARD_FOCUS = ["center 35%","center","center 30%","center 30%"];
  return `<div>
    <div style="background:#141924">
    <!-- Hero -->
    <section class="reveal" data-reveal-id="res-hero" style="padding:clamp(18px,2.2vw,32px) clamp(28px,5vw,80px) clamp(28px,3vw,44px)">
      <div style="max-width:1440px;margin:0 auto">
        <h1 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(36px,5.5vw,60px);letter-spacing:-0.5px;line-height:${rtlLH(t,1.05,1.5)};color:#fff;margin:0">${t.resTitle.toUpperCase()}</h1>
        <p style="font-family:${BODY_FF};font-weight:300;font-size:16px;color:rgba(255,255,255,.65);margin:14px 0 0">${t.resSub}</p>
      </div>
    </section>

    <!-- 2x2 photo card grid -->
    <section class="reveal" data-reveal-id="res-grid" style="padding:0 clamp(28px,5vw,80px) clamp(40px,5vw,60px)">
      <div style="max-width:1440px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(460px,100%),1fr));gap:20px">
        ${cards.map((card,i)=>{
          const isOpen = openCard===i;
          // Unified accent for all Resources dropdowns — Figma amber
          const ACCENT = "#FF911C";
          const ACCENT_DIM = "rgba(255,145,28,0.16)";
          const metaRow = (icon,text)=>`<div style="display:flex;align-items:center;gap:7px;margin-top:5px;min-width:0"><span style="display:flex;flex-shrink:0">${icon}</span><span style="font-family:${BODY_FF};font-size:12px;color:${C.sub};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${text}</span></div>`;
          const orgList = isOpen ? `<div class="res-dropdown" style="background:${C.card};border:1px solid ${ACCENT};border-radius:20px;padding:8px">
              ${card.orgs.map(org=>{
                return `
                <div class="res-org" style="display:flex;gap:14px;align-items:center;padding:14px 12px;border-radius:14px">
                  <span class="res-org-dot" style="width:9px;height:9px;border-radius:50%;background:${ACCENT};box-shadow:0 0 0 4px ${ACCENT_DIM};flex-shrink:0;margin:0 6px"></span>
                  <div style="flex:1;min-width:0">
                    <div style="font-family:${BODY_FF};font-size:15px;font-weight:400;color:${C.text};line-height:1.3">${org.name}</div>
                    ${org.web?metaRow(globeSVG(13,C.sub),org.web):""}
                    ${org.email?metaRow(mailSVG(13,C.sub),org.email):""}
                    ${org.phone2?metaRow(phoneSVG(12,C.sub),org.phone2):""}
                  </div>
                  <a href="tel:${org.phone.replace(/[\s\-()+]/g,"")}" class="phone-pill res-call" style="background:${ACCENT};color:${C.bg};padding:9px 15px;border-radius:22px;font-family:${BODY_FF};font-size:12px;font-weight:500;text-decoration:none;white-space:nowrap;flex-shrink:0;display:inline-flex;align-items:center;gap:6px">${phoneSVG(13,C.bg)} ${org.phone}</a>
                </div>`;
              }).join("")}
            </div>` : "";

          return `<div>
            <button onclick="toggleCard(${i})" aria-expanded="${isOpen}" class="res-card-wrap${isOpen?' is-open':''}" style="display:block;width:100%;padding:0;border:none;text-align:left;font:inherit;color:inherit;position:relative;height:clamp(220px,20vw,300px);border-radius:20px;overflow:hidden;background:#1c2337">
              <!-- Real photo -->
              <div class="res-photo" style="background-image:url('${CARD_PHOTOS[i]}');background-position:${CARD_FOCUS[i]}"></div>
              <!-- Bottom scrim for legibility -->
              <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0.15) 0%,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0.85) 100%);pointer-events:none"></div>
              <!-- Content -->
              <div style="position:absolute;bottom:0;left:0;right:0;padding:24px 28px;display:flex;justify-content:space-between;align-items:flex-end;gap:16px;pointer-events:none">
                <div>
                  <h3 style="font-family:${BODY_FF};font-weight:400;font-size:clamp(22px,2vw,28px);letter-spacing:-0.3px;line-height:${rtlLH(t,1.15,1.6)};color:#fff;margin:0;text-shadow:0 2px 12px rgba(0,0,0,0.5)">${card.title.toUpperCase()}</h3>
                  <p style="font-family:${BODY_FF};font-size:14px;color:rgba(255,255,255,.9);margin:8px 0 0;text-shadow:0 1px 8px rgba(0,0,0,0.5)">${card.sub}</p>
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
  return `<section class="reveal" data-reveal-id="faq" style="padding:8px clamp(28px,5vw,80px) clamp(48px,6vw,72px)">
    <div style="max-width:1308px;margin:0 auto">
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
            <div class="faq-answer" style="font-family:${BODY_FF};font-size:13.5px;color:${C.sub};line-height:1.7;padding-inline-end:46px">${item.a}</div>
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
  return `<span class="read-now-btn" style="color:${C.red};font-size:15px;font-weight:500;font-family:${BODY_FF};border-bottom:1.5px solid currentColor;padding-bottom:4px;display:inline-flex;align-items:center;gap:6px">
      ${t.readNowLabel}
      <svg class="read-now-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </span>`;
}

function blogPage(t){
  const [featured, ...rest] = BLOG_POSTS;
  return `<div>
    <div style="background:#141924">
    <!-- Hero -->
    <section class="reveal" data-reveal-id="blog-hero" style="padding:clamp(18px,2.2vw,32px) clamp(28px,5vw,80px) clamp(28px,3vw,44px)">
      <div style="max-width:1440px;margin:0 auto">
        <h1 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(36px,5.5vw,60px);letter-spacing:-0.5px;line-height:${rtlLH(t,1.05,1.5)};color:#fff;margin:0">${highlightAcid(t.blogTitle.toUpperCase())}</h1>
      </div>
    </section>

    <!-- Featured post -->
    <section class="reveal" data-reveal-id="blog-featured" style="padding:0 clamp(28px,5vw,80px) clamp(28px,4vw,44px)">
      <button onclick="openBlogPost(${featured.id})" aria-label="${esc(t.readNowLabel)}: ${esc(featured.title)}" class="blog-featured-btn" style="display:grid;width:100%;max-width:1440px;margin:0 auto;grid-template-columns:repeat(auto-fit,minmax(min(420px,100%),1fr));gap:36px;align-items:end;background:none;border:none;padding:0;text-align:left;font:inherit;color:inherit;cursor:pointer">
        <div class="blog-card blog-featured-photo" style="border-radius:20px;overflow:hidden;height:clamp(240px,32vw,420px);background:${C.card}">
          <img class="blog-photo" src="${featured.image}" alt="${esc(featured.title)}" style="width:100%;height:100%;object-fit:cover;display:block">
        </div>
        <div>
          <div class="bf-label" style="font-family:${BODY_FF};font-size:12px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:${STATS_ACCENT}">${t.featuredLabel}</div>
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
          <button class="blog-card" onclick="openBlogPost(${post.id})" style="display:block;width:100%;text-align:left;background:${C.card};border:1px solid ${C.border};border-radius:20px;overflow:hidden;padding:0;font:inherit;color:inherit;cursor:pointer">
            <div style="height:200px;overflow:hidden">
              <img class="blog-photo" src="${post.image}" alt="${esc(post.title)}" style="width:100%;height:100%;object-fit:cover;display:block">
            </div>
            <div style="padding:20px">
              <div style="display:inline-block;background:${post.dim};color:${post.color};font-family:${BODY_FF};font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:20px;margin-bottom:10px">${post.category}</div>
              <h3 style="font-family:${BODY_FF};font-weight:700;font-size:18px;line-height:1.3;color:${C.text};margin:0 0 8px">${post.title}</h3>
              <p style="font-family:${BODY_FF};font-size:13px;color:${C.sub};line-height:1.6;margin:0 0 14px">${post.excerpt}</p>
              <div style="font-family:${BODY_FF};font-size:12px;color:${C.sub}">${t.byLabel} <span style="color:${C.text};font-weight:600">${post.author}</span> &nbsp;|&nbsp; ${post.date}</div>
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
// but can also contain {h:"..."} sub-headings and {list:[...]} bullet lists
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
  if(item.list){
    return `<ul style="margin:0 0 20px;padding-inline-start:22px;display:flex;flex-direction:column;gap:8px">
      ${item.list.map(li=>`<li style="font-family:${BODY_FF};font-size:16px;color:${C.sub};line-height:1.7">${mdBold(li)}</li>`).join("")}
    </ul>`;
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

    <article class="reveal" data-reveal-id="blog-post-body" style="max-width:760px;margin:0 auto;padding:clamp(32px,5vw,56px) clamp(16px,3vw,32px)">
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
  rrrLabel: "The correct response is three actions: Rinse. Ring. Remove.",
  rrr: [
    { step:"Rinse",  body:"Rinse the acid burn with cool, continuously running water for at least thirty minutes." },
    { step:"Ring",   body:"Ring Rescue 1122 and stay on the line while rinsing continues." },
    { step:"Remove", body:"Remove contaminated clothing by cutting it away, never by pulling it over the head." },
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
  const AMBER = "#FF911C", AMBER_DIM = "rgba(255,145,28,0.14)";
  const AC = ABOUT_CONTENT;
  const provideIcons = [provChecklistSVG(24,AMBER), provChatSVG(24,AMBER), pinSVG(24,AMBER), advIdSVG(24,AMBER)];
  return `<div>
    <!-- Hero -->
    <div style="background:#141924;border-bottom:1px solid ${C.border}">
      <section class="reveal" data-reveal-id="abt-hero" style="padding:clamp(18px,2.2vw,32px) clamp(28px,5vw,80px) clamp(30px,4vw,52px)">
        <div style="max-width:1440px;margin:0 auto">
          <h1 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(36px,5.5vw,60px);letter-spacing:-0.5px;line-height:${rtlLH(t,1.05,1.5)};color:#fff;margin:0">${t.abtTitle.toUpperCase()}</h1>
          <p style="font-family:${BODY_FF};font-weight:300;font-size:clamp(16px,1.4vw,19px);color:rgba(255,255,255,.7);line-height:1.75;margin:16px 0 0;max-width:60ch">${t.abtMission}</p>
        </div>
      </section>
    </div>

    <!-- Why We Exist -->
    <section class="reveal" data-reveal-id="abt-why" style="background:${C.bg};padding:clamp(46px,5.5vw,80px) clamp(28px,5vw,80px)">
      <div style="max-width:1440px;margin:0 auto">
        <h2 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(26px,3vw,40px);letter-spacing:-0.5px;color:#fff;margin:0 0 20px">${AC.whyTitle}</h2>
        <p style="font-family:${BODY_FF};font-size:15px;color:${C.sub};line-height:1.8;max-width:80ch;margin:0 0 24px">${AC.whyPara1}</p>

        <div style="background:${C.greenDim};border:1px solid ${C.green};border-radius:16px;padding:22px 24px;max-width:80ch;margin:0 0 24px">
          <div style="font-family:${BODY_FF};font-weight:600;font-size:15px;color:${C.green};margin-bottom:16px">${AC.rrrLabel}</div>
          <div style="display:flex;flex-direction:column;gap:12px">
            ${AC.rrr.map(r=>`
              <div style="display:flex;gap:12px;align-items:baseline">
                <span style="font-family:${BODY_FF};font-weight:700;font-size:14px;color:${C.green};flex-shrink:0;min-width:70px">${r.step}</span>
                <span style="font-family:${BODY_FF};font-size:14px;color:${C.text};line-height:1.6">${r.body}</span>
              </div>`).join("")}
          </div>
        </div>

        <p style="font-family:${BODY_FF};font-size:15px;color:${C.sub};line-height:1.8;max-width:80ch;margin:0 0 24px">${AC.whyPara2}</p>
        <p style="font-family:${BODY_FF};font-size:15px;color:${C.sub};line-height:1.8;max-width:80ch;margin:0">${AC.whyPara3}</p>
      </div>
    </section>

    <!-- What AcidHelp Provides -->
    <section class="reveal" data-reveal-id="abt-provides" style="background:${C.surface};padding:clamp(46px,5.5vw,80px) clamp(28px,5vw,80px)">
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
    <section class="reveal" data-reveal-id="abt-involved" style="background:#141924;border-top:1px solid ${C.border};padding:clamp(46px,5.5vw,80px) clamp(28px,5vw,80px)">
      <div style="max-width:720px;margin:0 auto;text-align:center">
        <h2 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(26px,3vw,40px);letter-spacing:-0.5px;color:#fff;margin:0 0 16px">${AC.involvedTitle}</h2>
        <p style="font-family:${BODY_FF};font-size:15px;color:${C.sub};line-height:1.75;margin:0 0 28px">${AC.involvedBody}</p>
        <a href="/joinus" onclick="return setPage('joinus')" class="cta-btn" style="background:${C.redDark};color:white;border:none;padding:14px 30px;border-radius:32px;font-size:15px;font-weight:600;font-family:${BODY_FF};cursor:pointer;letter-spacing:-0.3px;display:inline-block;text-decoration:none">${AC.involvedCta}</a>
      </div>
    </section>

    <!-- Footer -->
    ${footerStrip(t)}
  </div>`;
}

// ── JOIN US PAGE ───────────────────────────────────────────────────────────────
function joinUsPage(t){
  return `<div>
    <!-- Hero -->
    <div style="background:#141924;border-bottom:1px solid ${C.border}">
      <section class="reveal" data-reveal-id="join-hero" style="padding:clamp(18px,2.2vw,32px) clamp(28px,5vw,80px) clamp(30px,4vw,52px)">
        <div style="max-width:1440px;margin:0 auto">
          <h1 style="font-family:${BODY_FF};font-weight:300;font-size:clamp(36px,5.5vw,60px);letter-spacing:-0.5px;line-height:${rtlLH(t,1.05,1.5)};color:#fff;margin:0">${t.conTitle.toUpperCase()}</h1>
          <p style="font-family:${BODY_FF};font-weight:300;font-size:clamp(16px,1.4vw,19px);color:rgba(255,255,255,.7);line-height:1.75;margin:16px 0 0;max-width:60ch">${t.conSub}</p>
        </div>
      </section>
    </div>

    <!-- Form -->
    <section class="reveal abt-join-section" data-reveal-id="join-form" style="background:${C.bg};padding:clamp(46px,5.5vw,80px) clamp(28px,5vw,80px)">
      <div style="max-width:620px;margin:0 auto;text-align:start">${joinUsForm(t)}</div>
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
  const inputStyle = `width:100%;padding:11px 14px;border-radius:11px;border:1.5px solid ${C.border};font-size:14px;background:${C.bg};color:${C.text};font-family:${BODY_FF}`;
  // Native select arrows sit flush against the border in most browsers regardless of
  // padding, so we hide it and draw our own chevron with real breathing room. The SVG
  // is run through encodeURIComponent so its own quote marks can't collide with the
  // quotes used by url(...) or the surrounding style="..." attribute.
  const chevronSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="#7A8BA0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const chevron = `data:image/svg+xml,${encodeURIComponent(chevronSVG)}`;
  const selectStyle = `${inputStyle};appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-inline-end:40px;background-image:url(${chevron});background-repeat:no-repeat;background-position:${isRTL?"left 16px center":"right 16px center"}`;
  const labelStyle = `font-size:13px;font-weight:300;color:${C.sub};display:block;margin-bottom:4px;padding-inline-start:14px;font-family:${BODY_FF}`;
  const tabStyle = active=>`flex:1;text-align:center;padding:10px 4px;margin-bottom:-1.5px;background:none;border:none;border-bottom:2.5px solid ${active?STATS_ACCENT:"transparent"};color:${active?STATS_ACCENT:C.sub};font-weight:${active?700:500};font-size:15px;font-family:${BODY_FF}`;

  const tabs = `<div class="join-tabs" style="display:flex;gap:0;margin-bottom:14px;border-bottom:1.5px solid ${C.border}">
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
  return tabs + `<div class="join-form-card" style="background:${C.card};border-radius:20px;padding:20px 22px;border:1px solid ${C.border};display:flex;flex-direction:column;gap:12px">
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
      <div>
        <label for="join-notes" style="${labelStyle}">${t.notesLabel}</label>
        <textarea id="join-notes" rows="4" oninput="updateJoinForm('notes', this.value)" style="${inputStyle};resize:vertical;min-height:100px;line-height:1.5">${esc(data.notes)}</textarea>
      </div>
      <button onclick="submitJoinForm()" class="cta-btn" style="background:${C.redDark};color:white;border:none;padding:13px;border-radius:28px;font-size:15px;font-weight:600;font-family:${BODY_FF};cursor:pointer;letter-spacing:-0.3px;margin-top:2px">${submitLabel}</button>
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
  pageEl.insertAdjacentHTML("beforeend", faqSection(t) + footerStrip(t));
  root.insertAdjacentHTML("beforeend", chatWidget(t));

  root.removeAttribute("data-ssr");
  initCounters();
  initReveals();
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
    const teaserText = `<span style="font-family:${BODY_FF};font-size:14px;font-weight:300;color:${STATS_ACCENT};text-shadow:0 0 4px rgba(255,145,28,0.9),0 0 14px rgba(255,145,28,0.7);white-space:nowrap">${esc(t.chatTeaser)}</span>`;
    const edgePad = isRTL ? "6px 22px 6px 6px" : "6px 6px 6px 22px";
    return `<button onclick="toggleChat()" id="chat-fab-wrap" class="chat-capsule" aria-label="${esc(t.chatTitle)}" style="position:fixed;bottom:24px;${side}:24px;z-index:1500;display:flex;align-items:center;gap:12px;padding:${edgePad};border-radius:40px;border:1.5px solid rgba(255,145,28,0.55);background:rgba(20,25,36,0.55);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 0 22px rgba(255,145,28,0.45),0 8px 24px rgba(0,0,0,0.35);cursor:pointer">
        ${isRTL ? iconBadge + teaserText : teaserText + iconBadge}
      </button>`;
  }

  const fab = `<div id="chat-fab-wrap" style="position:fixed;bottom:24px;${side}:24px;z-index:1500">${fabBtn}</div>`;
  const hasUserMsg = state.chatMessages.some(m=>m.from==="user");
  const prompts = hasUserMsg ? "" : `<div style="padding:0 14px 14px;display:flex;flex-wrap:wrap;gap:8px;background:transparent">
      ${t.chatPrompts.map((p,i)=>`<button onclick="askChatPrompt(${i})" class="chat-prompt-btn" style="background:#fff;border:1px solid ${C.border};color:#000;border-radius:20px;padding:8px 14px;font-family:${BODY_FF};font-size:12px;cursor:pointer">${esc(p.q)}</button>`).join("")}
    </div>`;

  const panel = `<div class="chat-panel" style="position:fixed;bottom:96px;${side}:24px;z-index:1499;width:min(360px, calc(100vw - 32px));max-height:min(560px, calc(100vh - 140px));background:rgba(20,25,36,0.6);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid ${C.border};border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.5);display:flex;flex-direction:column;overflow:hidden">
      <div style="background:${C.redDark};padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-shrink:0">
        <div style="min-width:0">
          <div style="font-family:${BODY_FF};font-weight:300;font-size:15px;letter-spacing:.02em;color:#fff;white-space:nowrap">${esc(t.chatTitle)}</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <button onclick="resetChat()" class="icon-btn" aria-label="Restart" style="background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:50%;width:28px;height:28px;cursor:pointer;display:flex;align-items:center;justify-content:center">${restartSVG("#fff")}</button>
          <button onclick="toggleChat()" class="icon-btn" aria-label="Close chat" style="background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:50%;width:28px;height:28px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px">✕</button>
        </div>
      </div>

      <div id="chat-messages" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:transparent;min-height:160px">
        ${state.chatMessages.map(chatMessageBubble).join("")}
      </div>

      ${prompts}

      <div style="display:flex;gap:8px;padding:12px;border-top:1px solid ${C.border};background:transparent;flex-shrink:0">
        <input id="chat-input" aria-label="${esc(t.chatPlaceholder)}" placeholder="${esc(t.chatPlaceholder)}" oninput="updateChatDraft(this.value)" onkeydown="if(event.key==='Enter'){event.preventDefault();sendChatMessage();}" value="${esc(state.chatDraft)}" style="flex:1;min-width:0;padding:10px 14px;border-radius:20px;border:1.5px solid ${C.border};background:rgba(11,15,28,0.6);color:${C.text};font-size:13px;font-family:${BODY_FF}">
        <button onclick="sendChatMessage()" class="cta-btn" aria-label="${esc(t.chatPlaceholder)}" style="background:${STATS_ACCENT};border:none;border-radius:50%;width:38px;height:38px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0">${sendSVG(C.bg)}</button>
      </div>
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
  const HTML_LANG = { en:"en", ur:"ur", ro:"ur-Latn", ps:"ps" };
  document.documentElement.setAttribute("lang", HTML_LANG[state.lang] || "en");
  root.style.fontFamily = t.ff;
  root.style.minHeight = "100vh";
  root.style.background = C.bg;
  root.style.color = C.text;

  // HEADER — logo · nav tabs (Figma) · language · 1122 pill
  const header = `<header style="position:sticky;top:0;z-index:1200;background:${C.surface};border-bottom:1px solid ${C.border}">
    <div class="site-header-inner" style="max-width:1440px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:11px 16px 12px">
      <a href="/" onclick="return setPage('emergency')" class="logo-btn" aria-label="Acidhelp — home" style="background:none;border:none;padding:0;cursor:pointer;display:flex;align-items:center;gap:9px;flex-shrink:0;text-decoration:none">
        ${logoMark(26)}
        <span class="brand-wordmark" style="font-family:${HEAD_FF};font-weight:900;font-size:24px;letter-spacing:-1px;line-height:1"><span style="color:${C.red}">Acid</span><span style="color:#fff">help</span></span>
      </a>
      <nav class="nav-scroll" style="flex:1;justify-content:center;min-width:0">
        ${[1,2,3,4,5].map(i=>{  /* Figma order: Nearby · Recovery · Blog · About · Join Us — Emergency is the landing page (logo) */
          const label = t.navItems[i];
          const active = state.page===t.pages[i] || (t.pages[i]==="blog" && state.page==="blogPost");
          return `<a href="${PAGE_URLS[t.pages[i]]}" onclick="return setPage('${t.pages[i]}')" class="nav-tab-btn" style="background:none;border:none;cursor:pointer;padding:6px 2px;font-family:${BODY_FF};font-weight:${active?600:400};font-size:16px;letter-spacing:-0.5px;color:${active?"#fff":"rgba(240,243,250,.72)"};border-bottom:2px solid ${active?C.red:"transparent"};white-space:nowrap;text-decoration:none">${label}</a>`;
        }).join("")}
      </nav>
      <div class="header-controls" style="display:flex;align-items:center;gap:10px;flex-shrink:0">
        <div class="lang-group" style="display:flex;gap:4px">
          ${["en","ur","ro","ps"].map(l=>{
            const active = state.lang===l;
            const ff = (l==="ur"||l==="ps") ? "'Noto Nastaliq Urdu',sans-serif" : BODY_FF;
            return `<button onclick="setLang('${l}')" class="lang-btn" style="background:${active?C.card:"transparent"};color:${active?"#fff":C.sub};border:1px solid ${active?C.borderLight:"transparent"};border-radius:16px;padding:3px 9px;font-size:${(l==="ur"||l==="ps")?12:10.5}px;font-weight:${active?700:500};cursor:pointer;font-family:${ff}">${T[l].name}</button>`;
          }).join("")}
        </div>
        <a href="tel:1122" class="cta-btn call-pill" style="background:${C.red};border-radius:32px;padding:6px 12px;display:inline-flex;align-items:center;gap:4px">
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
function submitJoinForm(){
  const isSurvivor = state.joinTab==="survivor";
  const data = isSurvivor ? state.survivorForm : state.volunteerForm;
  if(!data.name || !data.email) return;
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
  if(mapState.map) mapState.map.setView([h.lat,h.lng],14,{animate:true});
  renderMapOverlays();
}
function closeSheet(){ mapState.selected = null; renderMapOverlays(); }
function clearError(){ mapState.locError = null; renderMapOverlays(); }

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
          icon:L.divIcon({className:"",html:`<div style="width:18px;height:18px;background:${C.red};border-radius:50%;border:3px solid white;box-shadow:0 0 0 6px rgba(255,59,48,0.22);"></div>`,iconSize:[18,18],iconAnchor:[9,9]})
        }).addTo(map);
      }
      const sorted = HOSPITALS.map(h=>({...h,dist:haversine(lat,lng,h.lat,h.lng)})).sort((a,b)=>a.dist-b.dist);
      mapState.nearbyList = sorted.slice(0,5);
      mapState.selected = sorted[0];
      if(map) map.flyTo([sorted[0].lat,sorted[0].lng],13,{duration:1.6});
      renderMapOverlays();
    },
    ()=>{ mapState.loading=false; mapState.locError="Location access denied. Allow it in browser settings."; renderMapOverlays(); },
    {timeout:12000}
  );
}

// Boot
hydrate();
