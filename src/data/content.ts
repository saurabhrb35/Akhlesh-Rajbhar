export type Language = 'en' | 'hi';

export type ServiceId =
  | 'display-replacement'
  | 'touch-repair'
  | 'battery-replacement'
  | 'charging-jack-repair'
  | 'speaker-microphone-repair'
  | 'software-problems'
  | 'water-damage-inspection'
  | 'other-mobile-repairs';

export interface RepairService {
  id: ServiceId;
  code: string;
  featured?: boolean;
  en: {
    title: string;
    summary: string;
    scope: string;
    cta: string;
  };
  hi: {
    title: string;
    summary: string;
    scope: string;
    cta: string;
  };
}

export const BUSINESS_INFO = {
  name: 'AKHLESH MOBILE REPAIRING',
  owner: 'Mr SK Saurabh Ji',
  ownerPhoto: '/assets/aistudio/1000007148_3823feb8.jpg',
  phoneDisplay: '7503371249',
  phoneHref: 'tel:+917503371249',
  whatsappBase: 'https://wa.me/917503371249',
  serviceAreas: ['Faridabad', 'Delhi', 'Haryana'],
  shopAddressEn:
    '3rd Floor, House In Front of Pani Ki Tanki, Sector 34, Faridabad, Haryana 121001',
  shopAddressHi:
    'तीसरी मंज़िल (3rd Floor), पानी की टंकी के सामने वाला मकान, सेक्टर 34, फरीदाबाद, हरियाणा 121001',
  openingHoursEn: 'Mon – Sat: 10:00 AM – 6:00 PM · Sunday Closed',
  openingHoursHi: 'सोमवार – शनिवार: सुबह 10:00 – शाम 6:00 · रविवार बंद',
  shopMapLink: 'https://maps.app.goo.gl/kS571QaJwgsVeUq98',
  shopMapEmbed: 'https://maps.google.com/maps?q=28.463678,77.314494&z=16&output=embed',
};

export const MOBILE_BRANDS = [
  'Apple iPhone',
  'Samsung',
  'Xiaomi / Redmi / POCO',
  'OnePlus',
  'Vivo',
  'Oppo',
  'Realme',
  'Motorola',
  'Google Pixel',
  'Nothing',
  'Nokia / Other',
];

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'display-replacement',
    code: '01',
    featured: true,
    en: {
      title: 'Display Replacement',
      summary:
        'Cracked glass, dead pixels, black screen, or vertical display lines restored with high-grade LCD and AMOLED panels.',
      scope: 'Doorstep & Shop · All Major Brands',
      cta: 'Book Display Repair',
    },
    hi: {
      title: 'डिस्प्ले रिप्लेसमेंट',
      summary:
        'टूटी स्क्रीन, ब्लैक डिस्प्ले, डेड पिक्सेल या स्क्रीन पर लाइनों की समस्या को उच्च-गुणवत्ता वाले LCD और AMOLED पैनल से ठीक किया जाता है।',
      scope: 'होम और शॉप सर्विस · सभी प्रमुख ब्रांड',
      cta: 'डिस्प्ले रिपेयर बुक करें',
    },
  },
  {
    id: 'touch-repair',
    code: '02',
    en: {
      title: 'Touch Repair',
      summary:
        'Fix unresponsive touchscreens, ghost touches, delayed swipes, and damaged touch digitizer flex connectors.',
      scope: 'Precision Calibration · Quick Turnaround',
      cta: 'Book Touch Repair',
    },
    hi: {
      title: 'टच रिपेयर',
      summary:
        'टच काम न करना, अपने आप टच चलना (घोस्ट टच), या स्लो टच रिस्पॉन्स की सटीक मरम्मत।',
      scope: 'सटीक कैलिब्रेशन · तेज़ सर्विस',
      cta: 'टच रिपेयर बुक करें',
    },
  },
  {
    id: 'battery-replacement',
    code: '03',
    en: {
      title: 'Battery Replacement',
      summary:
        'Resolve fast battery drain, sudden shutdowns, overheating, or swollen batteries with safe replacement cells — backed by a 6 Months Warranty.',
      scope: '6 Months Warranty · Same-Day Service',
      cta: 'Book Battery Service',
    },
    hi: {
      title: 'बैटरी रिप्लेसमेंट',
      summary:
        'बैटरी जल्दी खत्म होना, फोन अचानक बंद होना, या फूली हुई बैटरी को 6 महीने की वारंटी के साथ नई सुरक्षित बैटरी से बदलें।',
      scope: '6 महीने की वारंटी · उसी दिन सर्विस',
      cta: 'बैटरी रिपेयर बुक करें',
    },
  },
  {
    id: 'charging-jack-repair',
    code: '04',
    en: {
      title: 'Charging Jack Repair',
      summary:
        'Repair loose USB-C, Lightning, or Micro-USB ports, slow charging faults, and damaged charging IC connections.',
      scope: 'Port Cleaning & Replacement',
      cta: 'Book Port Repair',
    },
    hi: {
      title: 'चार्जिंग जैक रिपेयर',
      summary:
        'ढीला चार्जिंग पोर्ट, चार्जिंग रुक-रुक कर होना, स्लो चार्जिंग या USB-C/Lightning जैक की पूरी मरम्मत।',
      scope: 'पोर्ट क्लीनिंग और रिप्लेसमेंट',
      cta: 'चार्जिंग रिपेयर बुक करें',
    },
  },
  {
    id: 'speaker-microphone-repair',
    code: '05',
    en: {
      title: 'Speaker and Microphone Repair',
      summary:
        'Fix muffled call audio, crackling loudspeaker output, or mic issues where the other person cannot hear your voice.',
      scope: 'Earpiece · Mic · Loudspeaker',
      cta: 'Book Audio Repair',
    },
    hi: {
      title: 'स्पीकर और माइक रिपेयर',
      summary:
        'कॉल पर आवाज़ कम आना, स्पीकर फटना, या सामने वाले को आपकी आवाज़ न जाने की समस्या का समाधान।',
      scope: 'ईयरपीस · माइक · लाउडस्पीकर',
      cta: 'ऑडियो रिपेयर बुक करें',
    },
  },
  {
    id: 'software-problems',
    code: '06',
    en: {
      title: 'Software Problems',
      summary:
        'Troubleshoot boot loops, stuck logo screens, OS crashes, hanging issues, and firmware updates safely.',
      scope: 'OS Recovery · Stability Fix',
      cta: 'Book Software Fix',
    },
    hi: {
      title: 'सॉफ्टवेयर समस्याएं',
      summary:
        'फोन लोगो पर अटकना, बार-बार रीस्टार्ट होना, हैंग होना और सिस्टम अपडेट से जुड़ी दिक्कतों का सुरक्षित समाधान।',
      scope: 'ओएस रिकवरी · सिस्टम सुधार',
      cta: 'सॉफ्टवेयर सेवा बुक करें',
    },
  },
  {
    id: 'water-damage-inspection',
    code: '07',
    en: {
      title: 'Water Damage Inspection',
      summary:
        'Thorough internal ultrasonic drying, corrosion cleanup, and short-circuit diagnostics for liquid-exposed devices.',
      scope: 'Urgent Inspection · Board Check',
      cta: 'Book Inspection',
    },
    hi: {
      title: 'वॉटर डैमेज जांच',
      summary:
        'पानी में गिरे या नमी से खराब हुए फोन की आंतरिक सफाई, जंग हटाना और शॉर्ट-सर्किट की पूरी जांच।',
      scope: 'तुरंत जांच · बोर्ड चेकअप',
      cta: 'जांच बुक करें',
    },
  },
  {
    id: 'other-mobile-repairs',
    code: '08',
    featured: true,
    en: {
      title: 'Other Mobile Repairs',
      summary:
        'Back glass replacement, camera lens repair, power or volume button fixes, SIM tray issues, and network checks.',
      scope: 'Custom Diagnostics · Home & Shop',
      cta: 'Book Custom Repair',
    },
    hi: {
      title: 'अन्य मोबाइल रिपेयर',
      summary:
        'बैक ग्लास बदलना, कैमरा लेंस, पावर/वॉल्यूम बटन, सिम ट्रे या नेटवर्क से जुड़ी किसी भी अन्य समस्या की मरम्मत।',
      scope: 'कस्टम जांच · होम और शॉप',
      cta: 'अन्य रिपेयर बुक करें',
    },
  },
];

export const TRANSLATIONS = {
  en: {
    nav: {
      services: 'Services',
      book: 'Book Repair',
      coverage: 'Coverage',
      about: 'About Us',
      faq: 'FAQ',
      cta: 'Book Home Service',
    },
    hero: {
      locationLine: 'Faridabad · Delhi · Haryana — Home Visit & Shop Service',
      headline: 'Mobile Repair at Your Doorstep!',
      subtitle: 'Professional Mobile Repair Services at Home & Shop.',
      description:
        'Direct, honest smartphone repair led by Owner Mr SK Saurabh Ji. Get transparent inspection before any repair, quality spare parts, and fast booking straight on WhatsApp.',
      primaryCta: 'Book Home Service',
      whatsappCta: 'WhatsApp Now',
      callCta: 'Call Now',
      imageCaptionTitle: 'Precision Mobile Diagnostics',
      imageCaptionSub: 'Doorstep technician visit or in-shop service across Faridabad, Delhi & Haryana.',
      commitments: [
        { label: 'Service Hours', value: 'Mon–Sat · 10 AM – 6 PM (Sun Closed)' },
        { label: 'Battery Warranty', value: '6 Months Replacement Warranty' },
        { label: 'Coverage Area', value: 'Faridabad · Delhi · Haryana' },
        { label: 'Owner · Direct Contact', value: 'Mr SK Saurabh Ji · 7503371249' },
      ],
    },
    services: {
      eyebrow: 'Repairing Services',
      title: 'Complete Smartphone Hardware & Software Care',
      subtitle:
        'Select any service below to pre-fill your booking request and send details directly to Mr SK Saurabh Ji on WhatsApp.',
      kitTitle: 'Portable Doorstep Repair Setup',
      kitBody:
        'Most display, battery, charging jack, speaker, and touch issues are repaired cleanly right in front of you at your home or workplace.',
      kitCta: 'Schedule Home Visit',
    },
    booking: {
      eyebrow: 'Online Booking System',
      title: 'Book Your Mobile Repair in Under a Minute',
      subtitle:
        'Fill in your device details below. Submitting generates an instant formatted booking message and opens WhatsApp directly with 7503371249.',
      fields: {
        name: 'Customer Name',
        namePlaceholder: 'Enter your full name',
        mobile: 'Mobile Number',
        mobilePlaceholder: '10-digit mobile number',
        brand: 'Mobile Brand',
        brandPlaceholder: 'Select mobile brand',
        model: 'Mobile Model',
        modelPlaceholder: 'e.g. iPhone 14, Galaxy A54, Redmi Note 12',
        problem: 'Repair Problem',
        serviceType: 'Service Preference',
        homeService: 'Home Service (Doorstep)',
        shopVisit: 'Shop Visit',
        address: 'Customer Address',
        addressPlaceholderHome: 'House/Flat No., Street, Sector/Colony, City (Faridabad / Delhi / Haryana)',
        addressPlaceholderShop: 'Optional: Your area or landmark (Faridabad / Delhi / Haryana)',
        date: 'Preferred Date',
        time: 'Preferred Time',
        message: 'Additional Message (Optional)',
        messagePlaceholder: 'Describe when the issue started or any extra note for Mr SK Saurabh Ji...',
      },
      timeSlots: [
        '10:00 AM – 12:30 PM',
        '12:30 PM – 3:00 PM',
        '3:00 PM – 6:00 PM',
        'Urgent (Mon–Sat, 10 AM – 6 PM)',
      ],
      submitButton: 'Confirm & Open WhatsApp Booking',
      noteNoPayment: 'Open Mon–Sat, 10:00 AM – 6:00 PM (Sunday Closed). Pay only after repair.',
      errors: {
        name: 'Please enter your name.',
        mobile: 'Please enter a valid 10-digit mobile number.',
        brand: 'Please select your mobile brand.',
        model: 'Please enter your mobile model.',
        address: 'Please enter your full address for Home Service.',
        date: 'Please choose a preferred date.',
        sundayClosed: 'Service is closed on Sundays. Please select Monday to Saturday (10:00 AM – 6:00 PM).',
      },
      confirmation: {
        title: 'Repair Booking Confirmation Ready',
        subtitle:
          'Your booking details are formatted below and WhatsApp has been opened with Mr SK Saurabh Ji (7503371249). If WhatsApp did not open automatically, click the button below.',
        openWhatsapp: 'Send Booking on WhatsApp',
        copyMessage: 'Copy Booking Details',
        copied: 'Copied',
        editBooking: 'Edit / New Booking',
      },
    },
    coverage: {
      eyebrow: 'Service Areas & Shop Location',
      title: 'Serving Faridabad, Delhi & Haryana',
      subtitle:
        'Choose doorstep convenience at your home or office, or coordinate an in-shop repair directly with Mr SK Saurabh Ji.',
      areas: [
        {
          region: 'Faridabad',
          detail: 'Doorstep home service and shop coordination across residential sectors, NIT, Ballabgarh, and Greater Faridabad.',
        },
        {
          region: 'Delhi',
          detail: 'Home visit mobile repair available across South Delhi, East Delhi, and nearby NCR neighborhoods by appointment.',
        },
        {
          region: 'Haryana',
          detail: 'Service coverage across Gurugram border areas, Palwal, and surrounding Haryana locations on scheduled booking.',
        },
      ],
      mapCardTitle: 'Shop Location & Google Maps',
      mapCardBadge: 'Sector 34 · Faridabad · 121001',
      mapCardBody:
        'Visit our shop location in Sector 34, Faridabad, Haryana (121001) or open live turn-by-turn directions on Google Maps. Home service is also available across Faridabad, Delhi & Haryana.',
      mapOpenBtn: 'Open in Google Maps',
      mapWhatsappBtn: 'WhatsApp on 7503371249',
      mapCallBtn: 'Call 7503371249',
    },
    about: {
      eyebrow: 'About Us',
      title: 'Honest Mobile Repair Led Personally by Mr SK Saurabh Ji',
      p1: 'AKHLESH MOBILE REPAIRING was built around a simple principle: smartphone repair should be transparent, convenient, and trustworthy. Instead of leaving your phone behind for days without knowing what is happening inside, you can get clear diagnostics and repairs right at your doorstep or at our shop.',
      p2: 'Whether it is a shattered OLED display, a worn-out battery, a loose charging jack, or sudden water damage, every device is inspected carefully before any part is replaced. You approve the solution and cost upfront — with zero hidden fees.',
      highlights: [
        { title: 'Owner-Led Care', desc: 'Direct communication with Mr SK Saurabh Ji — no middlemen or call centers.' },
        { title: 'Data Privacy First', desc: 'Repairs performed transparently in front of you during home visits.' },
        { title: 'Home & Shop Flexibility', desc: 'Book a technician to your doorstep or schedule a shop visit.' },
      ],
    },
    reviews: {
      eyebrow: 'Customer Reviews & Feedback',
      title: 'Verified Customer Feedback Only',
      subtitle:
        'We never display fabricated ratings or fake reviews. Genuine customer feedback is added only after real completed repairs.',
      emptyTitle: 'Real Reviews Coming Soon',
      emptyBody:
        'Got your phone repaired by AKHLESH MOBILE REPAIRING recently? Submit your honest feedback below — it opens directly in WhatsApp so verified reviews can be featured here.',
      formName: 'Your Name',
      formNamePlaceholder: 'e.g. Amit Verma',
      formDevice: 'Device & Service',
      formDevicePlaceholder: 'e.g. Samsung A52 Display Replacement',
      formRating: 'Your Rating',
      formComment: 'Your Experience',
      formCommentPlaceholder: 'Share your honest experience with the repair service...',
      formSubmit: 'Send Genuine Review via WhatsApp',
      savedTitle: 'Your Review Preview (Saved on This Device)',
      thankYou: 'Thank you! Your review has been prepared for WhatsApp and saved in your browser preview.',
    },
    faq: {
      eyebrow: 'Frequently Asked Questions',
      title: 'Common Questions Before You Book',
      items: [
        {
          q: 'How does Home Service mobile repair work?',
          a: 'Fill out the online booking form above and choose "Home Service". Your details are sent directly to Mr SK Saurabh Ji on WhatsApp (7503371249). We confirm your time slot, bring the required tools and spare parts to your location in Faridabad, Delhi, or Haryana, and repair the phone at your doorstep.',
        },
        {
          q: 'Do I have to pay anything online while booking?',
          a: 'No. Online booking is completely free and no advance payment gateway is required. You pay only after the mobile inspection or repair is completed to your satisfaction.',
        },
        {
          q: 'How long does a screen or battery replacement take?',
          a: 'Most display replacements, battery swaps, and charging jack repairs take 30 to 60 minutes once the technician arrives or at the shop. Complex motherboard or water damage inspections may require extra diagnostic time.',
        },
        {
          q: 'Is my phone data safe during repair?',
          a: 'Yes. For hardware repairs like display, battery, speaker, or charging port replacement, your data is not wiped. During home service, the repair happens right in front of you.',
        },
        {
          q: 'What are your working days, hours, and battery warranty?',
          a: 'Both Home Service and Shop Service are open Monday to Saturday from 10:00 AM to 6:00 PM. We remain closed on Sundays. All battery replacements include a 6 Months Warranty.',
        },
        {
          q: 'Where is the shop located?',
          a: 'Our shop is on the 3rd Floor, House In Front of Pani Ki Tanki, Sector 34, Faridabad, Haryana 121001. You can open live directions on Google Maps in the Shop Address section above, or call/WhatsApp 7503371249.',
        },
      ],
    },
    contact: {
      eyebrow: 'Direct Contact',
      title: 'Need Urgent Mobile Repair?',
      subtitle:
        'Speak directly with Owner Mr SK Saurabh Ji for quick fault guidance, spare part availability, or same-day doorstep booking.',
      ownerLabel: 'Owner',
      phoneLabel: 'Phone & WhatsApp',
      modeLabel: 'Service Modes',
      modeValue: 'Home Service & Shop Service',
      areaLabel: 'Service Regions',
      areaValue: 'Faridabad, Delhi & Haryana',
      callBtn: 'Call 7503371249',
      waBtn: 'Chat on WhatsApp',
    },
    footer: {
      rights: 'AKHLESH MOBILE REPAIRING. All rights reserved.',
      tagline: 'Doorstep & Shop Mobile Repair across Faridabad, Delhi & Haryana.',
    },
    floating: {
      call: 'Call',
      whatsapp: 'WhatsApp',
    },
  },
  hi: {
    nav: {
      services: 'सेवाएं',
      book: 'बुकिंग करें',
      coverage: 'सर्विस क्षेत्र',
      about: 'हमारे बारे में',
      faq: 'सवाल-जवाब',
      cta: 'होम सर्विस बुक करें',
    },
    hero: {
      locationLine: 'फरीदाबाद · दिल्ली · हरियाणा — होम विज़िट और शॉप सर्विस',
      headline: 'आपके दरवाज़े पर मोबाइल रिपेयरिंग!',
      subtitle: 'घर और दुकान पर प्रोफेशनल मोबाइल रिपेयर सेवाएं।',
      description:
        'ओनर Mr SK Saurabh Ji के नेतृत्व में सीधी और भरोसेमंद मोबाइल रिपेयरिंग। रिपेयर से पहले स्पष्ट जांच, उच्च गुणवत्ता के पार्ट्स और सीधे व्हाट्सएप पर आसान बुकिंग।',
      primaryCta: 'होम सर्विस बुक करें',
      whatsappCta: 'व्हाट्सएप करें',
      callCta: 'अभी कॉल करें',
      imageCaptionTitle: 'सटीक मोबाइल जांच एवं रिपेयर',
      imageCaptionSub: 'फरीदाबाद, दिल्ली और हरियाणा में होम विज़िट और शॉप सर्विस उपलब्ध।',
      commitments: [
        { label: 'सर्विस समय', value: 'सोम–शनि · 10 AM – 6 PM (रविवार बंद)' },
        { label: 'बैटरी वारंटी', value: '6 महीने की वारंटी' },
        { label: 'सर्विस क्षेत्र', value: 'फरीदाबाद · दिल्ली · हरियाणा' },
        { label: 'ओनर · सीधा संपर्क', value: 'Mr SK Saurabh Ji · 7503371249' },
      ],
    },
    services: {
      eyebrow: 'रिपेयरिंग सेवाएं',
      title: 'सभी स्मार्टफोन हार्डवेयर और सॉफ्टवेयर सेवाएं',
      subtitle:
        'अपनी समस्या चुनें — बुकिंग फॉर्म अपने आप भर जाएगा और आप सीधे Mr SK Saurabh Ji को व्हाट्सएप पर जानकारी भेज सकते हैं।',
      kitTitle: 'पोर्टेबल डोरस्टेप रिपेयर सेटअप',
      kitBody:
        'डिस्प्ले, बैटरी, चार्जिंग जैक, स्पीकर और टच जैसी अधिकतर समस्याएं आपके घर या ऑफिस में आपकी आंखों के सामने ठीक की जाती हैं।',
      kitCta: 'होम विज़िट बुक करें',
    },
    booking: {
      eyebrow: 'ऑनलाइन बुकिंग सिस्टम',
      title: '1 मिनट में मोबाइल रिपेयर बुक करें',
      subtitle:
        'नीचे अपने फोन की जानकारी भरें। सबमिट करने पर पूरी बुकिंग डिटेल तैयार होगी और सीधे 7503371249 पर व्हाट्सएप चैट खुलेगी।',
      fields: {
        name: 'ग्राहक का नाम',
        namePlaceholder: 'अपना पूरा नाम लिखें',
        mobile: 'मोबाइल नंबर',
        mobilePlaceholder: '10 अंकों का मोबाइल नंबर',
        brand: 'मोबाइल ब्रांड',
        brandPlaceholder: 'ब्रांड चुनें',
        model: 'मोबाइल मॉडल',
        modelPlaceholder: 'जैसे: iPhone 14, Galaxy A54, Redmi Note 12',
        problem: 'रिपेयर की समस्या',
        serviceType: 'सर्विस का प्रकार',
        homeService: 'होम सर्विस (घर पर)',
        shopVisit: 'शॉप विज़िट (दुकान पर)',
        address: 'ग्राहक का पता',
        addressPlaceholderHome: 'मकान नंबर, गली, सेक्टर/कॉलोनी, शहर (फरीदाबाद / दिल्ली / हरियाणा)',
        addressPlaceholderShop: 'वैकल्पिक: आपका क्षेत्र या नज़दीकी लैंडमार्क',
        date: 'पसंदीदा तारीख',
        time: 'पसंदीदा समय',
        message: 'अतिरिक्त संदेश (वैकल्पिक)',
        messagePlaceholder: 'समस्या कब शुरू हुई या कोई अन्य जरूरी जानकारी लिखें...',
      },
      timeSlots: [
        'सुबह 10:00 – दोपहर 12:30',
        'दोपहर 12:30 – दोपहर 3:00',
        'दोपहर 3:00 – शाम 6:00',
        'तुरंत (सोम–शनि, 10 AM – 6 PM)',
      ],
      submitButton: 'बुकिंग कन्फर्म करें और व्हाट्सएप खोलें',
      noteNoPayment: 'सोम–शनि, सुबह 10 से शाम 6 बजे तक सेवा उपलब्ध (रविवार बंद)। रिपेयर के बाद पेमेंट करें।',
      errors: {
        name: 'कृपया अपना नाम लिखें।',
        mobile: 'कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।',
        brand: 'कृपया मोबाइल ब्रांड चुनें।',
        model: 'कृपया मोबाइल मॉडल लिखें।',
        address: 'होम सर्विस के लिए कृपया अपना पूरा पता लिखें।',
        date: 'कृपया पसंदीदा तारीख चुनें।',
        sundayClosed: 'रविवार को सेवा बंद रहती है। कृपया सोमवार से शनिवार (सुबह 10 से शाम 6 बजे) के बीच तारीख चुनें।',
      },
      confirmation: {
        title: 'रिपेयर बुकिंग कन्फर्मेशन तैयार है',
        subtitle:
          'आपकी बुकिंग जानकारी तैयार है और Mr SK Saurabh Ji (7503371249) के साथ व्हाट्सएप खुल गया है। यदि व्हाट्सएप अपने आप नहीं खुला, तो नीचे दिए बटन पर क्लिक करें।',
        openWhatsapp: 'व्हाट्सएप पर बुकिंग भेजें',
        copyMessage: 'बुकिंग जानकारी कॉपी करें',
        copied: 'कॉपी हो गया',
        editBooking: 'बदलाव करें / नई बुकिंग',
      },
    },
    coverage: {
      eyebrow: 'सर्विस क्षेत्र और दुकान का स्थान',
      title: 'फरीदाबाद, दिल्ली और हरियाणा में सेवा उपलब्ध',
      subtitle:
        'अपने घर या ऑफिस पर डोरस्टेप रिपेयर चुनें, या दुकान पर विज़िट करने के लिए सीधे Mr SK Saurabh Ji से संपर्क करें।',
      areas: [
        {
          region: 'फरीदाबाद',
          detail: 'सभी सेक्टर, एनआईटी, बल्लभगढ़ और ग्रेटर फरीदाबाद में होम सर्विस और शॉप समन्वय।',
        },
        {
          region: 'दिल्ली',
          detail: 'अपॉइंटमेंट के अनुसार साउथ दिल्ली, ईस्ट दिल्ली और आसपास के एनसीआर क्षेत्रों में होम विज़िट।',
        },
        {
          region: 'हरियाणा',
          detail: 'गुरुग्राम बॉर्डर, पलवल और हरियाणा के नजदीकी क्षेत्रों में शेड्यूल बुकिंग पर सेवा।',
        },
      ],
      mapCardTitle: 'दुकान का पता और गूगल मैप्स',
      mapCardBadge: 'सेक्टर 34 · फरीदाबाद · 121001',
      mapCardBody:
        'आप सेक्टर 34, फरीदाबाद, हरियाणा (121001) स्थित हमारी दुकान पर आ सकते हैं या Google Maps पर सीधी लोकेशन खोल सकते हैं। फरीदाबाद, दिल्ली और हरियाणा में होम सर्विस भी उपलब्ध है।',
      mapOpenBtn: 'Google Maps में खोलें',
      mapWhatsappBtn: 'व्हाट्सएप करें',
      mapCallBtn: '7503371249 पर कॉल करें',
    },
    about: {
      eyebrow: 'हमारे बारे में',
      title: 'Mr SK Saurabh Ji के नेतृत्व में ईमानदार मोबाइल रिपेयरिंग',
      p1: 'AKHLESH MOBILE REPAIRING की शुरुआत इस सोच के साथ हुई कि मोबाइल रिपेयरिंग पारदर्शी, आसान और भरोसेमंद होनी चाहिए। फोन को कई दिनों तक बिना जानकारी के छोड़ने के बजाय, आप घर बैठे या दुकान पर सटीक जांच और रिपेयर करवा सकते हैं।',
      p2: 'चाहे टूटी डिस्प्ले हो, कमजोर बैटरी हो, खराब चार्जिंग जैक हो या पानी जाने की समस्या — किसी भी पार्ट को बदलने से पहले पूरी जांच की जाती है और सही खर्च पहले बताया जाता है।',
      highlights: [
        { title: 'सीधा संपर्क', desc: 'Mr SK Saurabh Ji से सीधी बातचीत — कोई बिचौलिया या कॉल सेंटर नहीं।' },
        { title: 'डेटा की सुरक्षा', desc: 'होम विज़िट के दौरान आपके सामने पारदर्शी तरीके से रिपेयरिंग।' },
        { title: 'होम और शॉप सुविधा', desc: 'अपनी सुविधा अनुसार घर पर बुलाएं या दुकान पर आएं।' },
      ],
    },
    reviews: {
      eyebrow: 'ग्राहक समीक्षा और फीडबैक',
      title: 'केवल असली ग्राहकों की समीक्षा',
      subtitle:
        'हम कभी भी नकली रेटिंग या झूठे रिव्यू नहीं दिखाते। केवल वास्तविक रिपेयर के बाद प्राप्त फीडबैक ही जोड़ा जाता है।',
      emptyTitle: 'असली ग्राहक रिव्यू जल्द जोड़े जाएंगे',
      emptyBody:
        'क्या आपने हाल ही में AKHLESH MOBILE REPAIRING से अपना फोन रिपेयर करवाया है? नीचे अपना ईमानदार अनुभव लिखें — यह सीधे व्हाट्सएप पर भेजा जाएगा।',
      formName: 'आपका नाम',
      formNamePlaceholder: 'जैसे: अमित वर्मा',
      formDevice: 'मोबाइल और सेवा',
      formDevicePlaceholder: 'जैसे: Samsung A52 डिस्प्ले रिप्लेसमेंट',
      formRating: 'आपकी रेटिंग',
      formComment: 'आपका अनुभव',
      formCommentPlaceholder: 'अपनी रिपेयर सर्विस का सच्चा अनुभव लिखें...',
      formSubmit: 'व्हाट्सएप पर समीक्षा भेजें',
      savedTitle: 'आपकी समीक्षा का प्रीव्यू (इस डिवाइस पर सेव)',
      thankYou: 'धन्यवाद! आपकी समीक्षा व्हाट्सएप के लिए तैयार हो गई है और प्रीव्यू में सेव की गई है।',
    },
    faq: {
      eyebrow: 'अक्सर पूछे जाने वाले सवाल',
      title: 'बुकिंग से पहले जरूरी जानकारी',
      items: [
        {
          q: 'होम सर्विस मोबाइल रिपेयर कैसे काम करती है?',
          a: 'ऊपर दिए गए बुकिंग फॉर्म में "होम सर्विस" चुनें और जानकारी भरें। आपकी डिटेल सीधे व्हाट्सएप (7503371249) पर जाएगी। समय तय होने के बाद फरीदाबाद, दिल्ली या हरियाणा में आपके पते पर आकर फोन रिपेयर किया जाएगा।',
        },
        {
          q: 'क्या बुकिंग करते समय ऑनलाइन पैसे देने होंगे?',
          a: 'नहीं। ऑनलाइन बुकिंग पूरी तरह फ्री है और कोई एडवांस पेमेंट गेटवे नहीं है। जांच और संतुष्टि के बाद ही पेमेंट लिया जाता है।',
        },
        {
          q: 'स्क्रीन या बैटरी बदलने में कितना समय लगता है?',
          a: 'अधिकतर डिस्प्ले, बैटरी और चार्जिंग जैक रिपेयर 30 से 60 मिनट में पूरे हो जाते हैं। वॉटर डैमेज या मदरबोर्ड की जांच में थोड़ा अतिरिक्त समय लग सकता है।',
        },
        {
          q: 'क्या रिपेयरिंग के दौरान मेरा डेटा सुरक्षित रहेगा?',
          a: 'जी हां। डिस्प्ले, बैटरी, स्पीकर या चार्जिंग पोर्ट जैसे हार्डवेयर रिपेयर में डेटा डिलीट नहीं होता। होम सर्विस में काम आपके सामने होता है।',
        },
        {
          q: 'दुकान खुलने का समय और बैटरी वारंटी क्या है?',
          a: 'होम सर्विस और शॉप सर्विस सोमवार से शनिवार सुबह 10:00 बजे से शाम 6:00 बजे तक खुली रहती है (रविवार को बंद)। सभी बैटरी रिप्लेसमेंट पर 6 महीने की वारंटी मिलती है।',
        },
        {
          q: 'दुकान का सटीक पता क्या है?',
          a: 'हमारी दुकान तीसरी मंज़िल (3rd Floor), पानी की टंकी के सामने वाला मकान, सेक्टर 34, फरीदाबाद, हरियाणा 121001 में है। आप ऊपर दिए Google Maps लिंक से सीधा रास्ता देख सकते हैं या 7503371249 पर कॉल/व्हाट्सएप कर सकते हैं।',
        },
      ],
    },
    contact: {
      eyebrow: 'सीधा संपर्क',
      title: 'तुरंत मोबाइल रिपेयर की जरूरत है?',
      subtitle:
        'समस्या की जानकारी, पार्ट्स की उपलब्धता या आज ही होम सर्विस बुकिंग के लिए ओनर Mr SK Saurabh Ji से सीधे बात करें।',
      ownerLabel: 'ओनर (Owner)',
      phoneLabel: 'फोन और व्हाट्सएप',
      modeLabel: 'सर्विस प्रकार',
      modeValue: 'होम सर्विस और शॉप सर्विस',
      areaLabel: 'सर्विस क्षेत्र',
      areaValue: 'फरीदाबाद, दिल्ली और हरियाणा',
      callBtn: '7503371249 पर कॉल करें',
      waBtn: 'व्हाट्सएप पर चैट करें',
    },
    footer: {
      rights: 'AKHLESH MOBILE REPAIRING. सर्वाधिकार सुरक्षित।',
      tagline: 'फरीदाबाद, दिल्ली और हरियाणा में होम और शॉप मोबाइल रिपेयरिंग।',
    },
    floating: {
      call: 'कॉल',
      whatsapp: 'व्हाट्सएप',
    },
  },
} as const;
