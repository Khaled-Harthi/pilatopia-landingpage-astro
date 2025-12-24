export type Language = "en" | "ar";

export const translations = {
  en: {
    // Navigation
    nav: {
      studio: "Our Studio",
      classes: "Classes",
      gift: "Gift",
      app: "Mobile App",
      prices: "Prices",
      bookClass: "Book Your Class",
      joinUs: "Become a Member"
    },

    // Hero Section
    hero: {
      welcome: "Pilatopia Welcomes You",
      title1: "Your Pilates Utopia",
      subtitle: "Step into our serene studio in Al Narjis, Riyadh and discover the transformative power of Pilates. Every session is a step toward the better you",
      bookFirst: "Book Your First Class",
      explore: "Explore the Studio",
      members: "members",
    },
    // Classes Section
    classes: {
      label: "Our Classes",
      title: "Find your perfect",
      titleHighlight: "practice",
      subtitle: "From beginner-friendly mat sessions to challenging reformer workouts, discover the class that aligns with your goals.",
      viewSchedule: "View full class schedule",
      perfectFor: "Perfect for:",
      duration: "min",
      classList: [
        {
          name: "Foundation",
          description: "Your essential intro to the reformer machine. Learn equipment basics, safety, and core principles in this session. Required for all new members.",
          level: "Required",
          perfect: "All new members",
        },
        {
          name: "Beginners Reformer",
          description: "Start your transformation journey. Build strength, improve posture, and master fundamental movements in this perfectly-paced class for new practitioners.",
          level: "Beginner",
          perfect: "New practitioners",
        },
        {
          name: "Intermediate Reformer",
          description: "Level up your practice. Challenge yourself with dynamic flows, increased resistance, and advanced variations for faster, visible results.",
          level: "Intermediate",
          perfect: "Those ready to advance",
        },
        {
          name: "Jump Reformer",
          description: "High-intensity cardio Pilates. Burn maximum calories with explosive jumpboard sequences. Not suitable for injuries or pregnancy.",
          level: "Advanced",
          perfect: "High-intensity seekers",
        },
        {
          name: "Chairs & Barrels",
          description: "Specialty equipment class. Target deep muscles, improve flexibility, and enhance balance using our Wunda Chair and Ladder Barrel.",
          level: "All Levels",
          perfect: "Variety seekers",
        },
        {
          name: "Cadillac Mix",
          description: "Personalized exercises on our Cadillac tower system, adapted to match your fitness level and goals.",
          level: "All Levels",
          perfect: "Personalized training",
        },
      ],
    },

    // Studio Section
    studio: {
      label: "Our Space",
      title: "Step into",
      titleHighlight: "serenity",
      subtitle: "A thoughtfully designed sanctuary where every detail—from the lighting to the equipment—supports your practice.",
      images: [
        { label: "Reformer Studio", description: "State-of-the-art equipment", image: "/reformer-room.jpg" },
        { label: "Reception", description: "Warm welcome awaits", image: "/reception.jpg" },
        { label: "Matcha Lounge", description: "Matcha & specialty coffee", image: "/cafe.jpg" },
        { label: "Chairs & Barrels", description: "Strength & sculpting", image: "/chairs-room.jpg" },
        { label: "Lockers", description: "Privacy & security", image: "/lockers.jpg" },
      ],
    },


    // Wellness Gift Section
    gift: {
      badge: "The Perfect Gift",
      title: "a wellness gift for",
      titleHighlight: "Her",
      subtitle: "Gift a Pilatopia membership to someone special and we'll send them a beautifully curated welcome tote filled with thoughtful surprises.",
      includes: "Each gift includes:",
      items: [
        "Pilates membership package",
        "Fresh rose",
        "Pilates grip socks",
        "other surprises",
        "Pilatopia stamp book",
      ],
      cta: "Gift the Experience",
    },


    // Intro Offer Section
    offer: {
      downloadOn: "Download on the",
      appStore: "App Store",
      getItOn: "Get it on",
      googlePlay: "Google Play",
    },

    // App Section
    app: {
      label: "The Pilatopia App",
      title: "Book in",
      titleHighlight: "seconds",
      subtitle: "Manage your entire Pilates journey from one beautiful app. Book classes, track progress, and earn rewards with every session.",
      features: [
        "Easy class booking & scheduling",
        "Track your attendance & progress",
        "Earn points with every class",
      ],
      bookNext: "Book your next class",
    },

    // Pricing Section
    pricing: {
      label: "Pricing",
      title: "Classes from",
      titleHighlight: "178",
      subtitle: "New members get 10% off all packages. All packages valid for 3 months.",
      viewPackages: "View all packages",
      recommended: "Recommended",
      perClass: "/class",
      classes: "classes",
      off: "10% OFF",
      packages: [
        {
          name: "Single Pass",
          classes: 1,
          price: 290,
          pricePerClass: 290,
          noDiscount: true,
        },
        {
          name: "Foundation",
          classes: 5,
          originalPrice: 1380,
          price: 1242,
          pricePerClass: 248,
        },
        {
          name: "Transformation",
          classes: 10,
          originalPrice: 2490,
          price: 2241,
          pricePerClass: 224,
          recommended: true,
          note: "Best results in 5 weeks",
        },
        {
          name: "Dedication",
          classes: 20,
          originalPrice: 3950,
          price: 3555,
          pricePerClass: 178,
        },
      ],
    },

    // Testimonials Section
    testimonials: {
      label: "Member Stories",
      title: "What our",
      titleHighlight: "members say",
      list: [
        {
          quote: "I was so nervous on my first day, but the instructors made me feel comfortable immediately. Now I can't imagine my week without Pilatopia!",
          name: "Sarah A.",
          role: "Member since 2024",
          transformation: "From nervous beginner to confident regular",
        },
        {
          quote: "After 3 months, I noticed a huge difference in my posture and core strength. My back pain is almost gone. This studio changed my life.",
          name: "Noura M.",
          role: "Member since 2024",
          transformation: "Goodbye back pain, hello strong core",
        },
        {
          quote: "I was recovering from a shoulder injury and was scared to exercise. The trainers modified every move for me. Now I'm stronger than before my injury!",
          name: "Lama K.",
          role: "Member since 2024",
          transformation: "From injury recovery to full strength",
        },
      ],
    },

    // Location Section
    location: {
      label: "Find Us",
      title: "Visit our studio",
      address: "Address",
      addressValue: "Al Narjis District\nRiyadh, Saudi Arabia",
      addressArabic: "حي النرجس",
      hours: "Hours",
      hoursValue: "Saturday - Thursday: 2pm - 10pm\nFriday: Closed",
      parking: "Parking",
      parkingValue: "Free dedicated parking",
      contact: "Contact",
      getDirections: "Get directions",
      mapPlaceholder: "Google Maps Embed",
    },

    // FAQ Section
    faq: {
      label: "Questions & Answers",
      title: "Frequently",
      titleHighlight: "asked",
      list: [
        {
          question: "Is Pilates suitable for beginners?",
          answer: "Absolutely! Our instructors are trained to deliver exercises for all levels. We offer special beginner classes designed specifically to guide you step by step and introduce you to the fundamentals.",
        },
        {
          question: "What is the Foundation class?",
          answer: "The Foundation class is a required introductory session for all new members. It teaches you equipment basics, safety, and core Pilates principles. This class counts as one class from your package and must be completed before joining group classes.",
        },
        {
          question: "What age is appropriate for Pilates?",
          answer: "Pilates is suitable for all ages. However, at Pilatopia, we're happy to serve members aged 16 and above.",
        },
        {
          question: "When do your offers end?",
          answer: "Our current offer is 10% off all packages. The offer is valid until Wednesday, December 31st.",
        },
        {
          question: "Can I subscribe today and start later?",
          answer: "Absolutely! You can subscribe today and choose your membership start date whenever you like, with no restrictions.",
        },
        {
          question: "What should I wear to class?",
          answer: "Wear comfortable, form-fitting workout clothes that allow you to move freely. We recommend avoiding loose clothing that might get caught in the equipment. Pilates grip socks are required—you'll receive socks with your membership!",
        },
        {
          question: "What should I bring to class?",
          answer: "You'll need a clear mind, Pilates grip socks, and your workout clothes. We provide all the equipment and tools needed for your Pilates practice. We also provide a personal towel and water during your session.",
        },
        {
          question: "How often should I practice Pilates?",
          answer: "For best results, we recommend 2-3 sessions per week. However, even once a week can bring noticeable benefits. Consistency is more important than frequency.",
        },
        {
          question: "I have an injury, can I still do Pilates?",
          answer: "Pilates is very beneficial for many people with injuries and may be their path to recovery. However, we recommend consulting a doctor first, then attending an assessment session where one of our certified instructors evaluates your condition and determines the appropriate exercises for you.",
        },
        {
          question: "What is your cancellation policy?",
          answer: "You can cancel or reschedule up to 6 hours before your class for a full credit refund. Late cancellations or no-shows will be charged the full class fee.",
        },
      ],
    },

    // Final CTA Section
    cta: {
      title: "Begin your",
      titleHighlight: "transformation",
      subtitle: "Your journey to a stronger, more balanced you starts with a single class. We can't wait to welcome you.",
      button: "Become a Member",
    },

    // Membership Modal
    membershipModal: {
      title: "Become a Member",
      subtitle: "Choose how you'd like to join our community",
      appOption: {
        title: "Download Our App",
        description: "The fastest way to become a member. Download, sign up, and purchase your membership in under 2 minutes.",
        badge: "Recommended",
        scanQR: "Scan to download on your phone",
      },
      whatsappOption: {
        title: "Chat with Us",
        description: "We'll help you get started.",
        scanQR: "Scan to open WhatsApp",
        replyTime: "We reply in minutes!",
      },
      openLink: "Open in browser",
      or: "or",
    },

    // Footer
    footer: {
      tagline: "Where movement meets mindfulness. Your Pilates sanctuary in Al Narjis, Riyadh.",
      studio: "Studio",
      ourExperience: "Our Experience",
      classes: "Classes",
      gallery: "Gallery",
      giftCards: "Gift Cards",
      support: "Support",
      faq: "FAQ",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      weAccept: "We accept:",
      rights: "All rights reserved.",
    },

    // Language
    language: {
      switch: "العربية",
      current: "EN",
    },
  },

  ar: {
    // Navigation
    nav: {
      studio: "الاستوديو",
      classes: "كلاسات البيلاتس",
      gift: "الهدية",
      app: "التطبيق",
      bookClass: "احجزي كلاسك",
      prices: "الأسعار",
      joinUs: "انضمي الآن"
    },

    // Hero Section
    hero: {
      welcome: "في بيلاتوبيا",
      title1: "بيلاتس في مكان يشبهك",
      subtitle: "حياك في أستوديو بيلاتوبيا في حي النرجس، الرياض تعالي واكتشفي قوة وأثر البيلاتس. كل جلسة هي خطوة  لنسخة منك تحبينها أكثر.",
      bookFirst: "احجزي كلاسك الأول",
      explore: "استكشفي الاستوديو",
      members: "عضوة",
    },


    // Classes Section
    classes: {
      label: "كلاساتنا",
      title: "تنوع يضمن لك",
      titleHighlight: "النتائج والتقدم",
      subtitle: "كلاساتنا تخدم جميع المستويات من تمارين مناسبة للمبتدئيات إلى المستويات المتقدمة",
      viewSchedule: "عرض جدول الكلاسات الكامل",
      perfectFor: "مثالي لـ:",
      duration: "دقيقة",
      classList: [
        {
          name: "الأساسي",
          description: "مقدمتك الأساسية لجهاز الريفورمر. تعلمي أساسيات المعدات والسلامة والمبادئ الأساسية في هذه الجلسة. مطلوبة لجميع العضوات الجدد.",
          level: "مطلوب",
          perfect: "جميع العضوات الجدد",
        },
        {
          name: "ريفورمر للمبتدئات",
          description: "ابدئي رحلة تحولك. ابني القوة، حسّني الوضعية، وأتقني الحركات الأساسية في هذه الحصة المصممة بعناية للمبتدئات.",
          level: "مبتدئ",
          perfect: "المبتدئات الجدد",
        },
        {
          name: "ريفورمر متوسط",
          description: "ارتقي بتمرينك. تحدّي نفسك مع تدفقات ديناميكية ومقاومة متزايدة وتنويعات متقدمة لنتائج أسرع وملموسة.",
          level: "متوسط",
          perfect: "المستعدات للتقدم",
        },
        {
          name: "جامب ريفورمر",
          description: "بيلاتس كارديو عالي الكثافة. احرقي أقصى السعرات الحرارية مع تسلسلات القفز المتفجرة. غير مناسب للإصابات أو الحمل.",
          level: "متقدم",
          perfect: "الباحثات عن تمرين مكثف",
        },
        {
          name: "تشيرز وبارلز",
          description: "حصة معدات متخصصة. استهدفي العضلات العميقة، حسّني المرونة، وعززي التوازن باستخدام كرسي وندا وبرميل السلم.",
          level: "جميع المستويات",
          perfect: "الباحثات عن التنوع",
        },
        {
          name: "كاديلاك ميكس",
          description: "تمارين مخصصة على نظام برج الكاديلاك، مصممة لتناسب مستوى لياقتك وأهدافك.",
          level: "جميع المستويات",
          perfect: "التدريب المخصص",
        },
      ],
    },

    // Studio Section
    studio: {
      label: "استوديو بيلاتوبيا",
      title: "تفاصيل صغيرة … تصنع فرق",
      titleHighlight: "كبير",
      subtitle: `
       صممنا لك عالم يتجاوز حدود التمرين من ترحيب الاستقبال وخزانة خاصة لمقتنياتك إلى كلاس على الريفورمر أو 
      تشيرز وبارلز وبعدها … ماتشا أو قهوة مختصة في اللاونج
      `,
      images: [
        { label: "منطقة الريفومر (غرفة فويو)", description: "مجهز بأحدث أجهزة الريفورمر وبأعلى جودة", image: "/reformer-room.jpg" },
        { label: "الاستقبال", description: "ترحيب يليق فيك واهتمام بالتفاصيل", image: "/reception.jpg" },
        { label: "لاونج الماتشا", description: "ماتشا وقهوة قبل أو بعد الكلاس", image: "/cafe.jpg" },
        { label: "منطقة تشيرز وبارلز (غرفة هارو)", description: "قوة ونحت للجسم", image: "/chairs-room.jpg" },
        { label: "الخزائن", description: "خصوصية وأمان", image: "/lockers.jpg" },
      ],
    },

    // Wellness Gift Section
    gift: {
      badge: "الهدية المثالية",
      title: "اهديها هدية",
      titleHighlight: "تترك أثر",
      subtitle: "اهديها باقة من بيلاتوبيا وبنوصل لها حقيبة ترحيبية أنيقة ومليئة بالمفاجآت في نفس اليوم. اكتب رسالتك واختر عدد الكلاسات اللي حاب تهديها واترك الباقي علينا.",
      includes: "كل هدية تتضمن:",
      items: [
        "باقة اشتراك في البيلاتس",
        "وردة طبيعية",
        "جوارب بيلاتس",
        "مفاجآت أخرى",
        "دفتر الأختام من بيلاتوبيا"
        
      ],
      cta: "اهديها اليوم",
    },

    // Intro Offer Section
    offer: {
      downloadOn: "حمليه من",
      appStore: "App Store",
      getItOn: "احصلي عليه من",
      googlePlay: "Google Play",
    },

    // App Section
    app: {
      label: "تطبيق بيلاتوبيا",
      title: "احجزي في",
      titleHighlight: "ثواني",
      subtitle: "تجربتك معنا لازم تكون مثالية وسلسة وسريعة ولهذا وفرنا لك تطبيق واحد لإدارة حجوزاتك واشتراكاتك بكل سهولة.",
      features: [
        "احجزي وجدولي كلاساتك",
        "اكسبي نقاط مع كل كلاس تحضرينه",
        "اشتركي وجددي باقتك - نوفر جميع طرق الدفع",
      ],
      bookNext: "احجزي حصتك القادمة",
    },

    // Pricing Section
    pricing: {
      label: "الأسعار",
      title: "الكلاس يبدأ من",
      titleHighlight: "178",
      subtitle: "خصم 10% للمشتركات الجدد على جميع الباقات. جميع الباقات صالحة لمدة 3 أشهر.",
      viewPackages: "عرض جميع الباقات",
      recommended: "ننصح بها",
      perClass: "/كلاس",
      classes: "كلاس",
      off: "خصم 10%",
      packages: [
        {
          name: "زيارة واحدة",
          classes: 1,
          price: 290,
          pricePerClass: 290,
          noDiscount: true,
        },
        {
          name: "الأساسية",
          classes: 5,
          originalPrice: 1380,
          price: 1242,
          pricePerClass: 248,
        },
        {
          name: "التحول",
          classes: 10,
          originalPrice: 2490,
          price: 2241,
          pricePerClass: 224,
          recommended: true,
          note: "أفضل النتائج في 5 أسابيع",
        },
        {
          name: "الالتزام",
          classes: 20,
          originalPrice: 3950,
          price: 3555,
          pricePerClass: 178,
        },
      ],
    },

    // Testimonials Section
    testimonials: {
      label: "قصص عضواتنا",
      title: "ماذا تقول",
      titleHighlight: "عضواتنا",
      list: [
        {
          quote: "كنت متوترة جداً في أول يوم، لكن المدربات خلوني أحس بالراحة من أول لحظة. الحين ما أقدر أتخيل أسبوعي بدون بيلاتوبيا!",
          name: "سارة أ.",
          role: "عضوة منذ 2024",
          transformation: "من مبتدئة متوترة إلى عضوة واثقة",
        },
        {
          quote: "بعد 3 شهور، لاحظت فرق كبير في وقفتي وقوة عضلات البطن. آلام ظهري تقريباً راحت. هذا الاستوديو غيّر حياتي.",
          name: "نورة م.",
          role: "عضوة منذ 2024",
          transformation: "وداعاً آلام الظهر، أهلاً بالقوة",
        },
        {
          quote: "كنت أتعافى من إصابة في الكتف وكنت خايفة أتمرن. المدربات عدّلوا كل حركة لحالتي. الحين أنا أقوى من قبل الإصابة!",
          name: "لمى ك.",
          role: "عضوة منذ 2024",
          transformation: "من التعافي من الإصابة إلى القوة الكاملة",
        },
      ],
    },

    // Location Section
    location: {
      label: "موقعنا",
      title: "زورينا في بيلاتوبيا",
      address: "Pilatopia Studio",
      addressValue: "حي النرجس\nالرياض، المملكة العربية السعودية",
      addressArabic: "النرجس",
      hours: "ساعات العمل",
      hoursValue: "السبت - الخميس: 2 مساءً - 10 مساءً\nالجمعة: مغلق",
      parking: "المواقف",
      parkingValue: "موقف سيارات مجاني",
      contact: "تواصلي معنا",
      getDirections: "احصلي على الاتجاهات",
      mapPlaceholder: "خريطة جوجل",
    },

    // FAQ Section
    faq: {
      label: "أسئلة وأجوبة",
      title: "الأسئلة",
      titleHighlight: "الشائعة",
      list: [

        {
          question: "هل البيلاتس مناسب للمبتدئات؟",
          answer: "طبعًا. مدرباتنا مدربات على تقديم التمارين لجميع المستويات. ونقدم كلاسات خاصة للمبتدئات مصممة خصيصًا عشان تأخذك خطوة بخطوة وتعرفك بالأساسيات",
        },
        {
          question: "ما هو كلاس الأساسي (Foundation)؟",
          answer: "كلاس الأساسي هو جلسة تعريفية مطلوبة لجميع العضوات الجدد. يعلمك أساسيات الأجهزة والسلامة ومبادئ البيلاتس الأساسية. هذا الكلاس يُحتسب من رصيد باقتك ولازم تكملينه قبل الانضمام للكلاسات الجماعية.",
        },
        {
          question: "ما العمر المناسب لممارسة البيلاتس؟",
          answer: "البيلاتس مناسب لجميع الأعمار. ولكن في بيلاتوبيا نسعد بخدمة المتدربات من عمر ال16 عام وما فوق",
        },
        {
          question: "متى تنتهي عروضكم؟",
          answer: "عرضنا الحالي هو خصم 10% على جميع الباقات. والعرض سارٍ حتى يوم الأربعاء 31/12",
        },
        {
          question: "هل ممكن أشترك اليوم وأبدأ بعد فترة؟",
          answer: "بكل تأكيد! ممكن تشتركين اليوم وتختارين تاريخ بداية الإشتراك متى ما تحبين بدون قيود.",
        },
        {
          question: "ايش ممكن ألبس للكلاس؟",
          answer: "البسي ملابس رياضية مريحة ومناسبة تسمح لك بالحركة بأريحية. ننصح بتجنب الملابس الفضفاضة اللي ممكن تعلق في المعدات. جوارب البيلاتس مطلوبة، راح تحصلين على الجوارب مع اشتراكك!",
        },
        {
          question: "وش أجيب معي للكلاس؟",
          answer: "تحتاجين صفاء ذهن، جوارب بيلاتس، ولبسك الرياضي. واحنا بنوفر لك كل المعدات والأدوات اللازمة لممارسة البيلاتس. وأيضًا نوفر لك منشفة خاصة ومياه وقت التمرين.",
        },
        {
          question: "كم مرة لازم أمارس البيلاتس؟",
          answer: "عشان تطلعين بأفضل نتيجة، ننصح بجلستين إلى ثلاث جلسات أسبوعيًا. ومع ذلك، حتى لو مرة واحدة في الأسبوع ممكن تشوفين معاها نتائج وفوائد ملحوظة. الاستمرارية هي الأهم.",
        },
        {
          question: "عندي إصابة هل عادي أتمرن بيلاتس؟",
          answer: "البيلاتس مفيد جدًا لكثير من الناس اللي عندهم إصابات وقد يكون هو طريقهم للشفاء. لكن ننصح باستشارة طبيب ثم حضور جلسة تقيم فيها أحد مدرباتنا المعتمدات الحالة وتحدد لك أنواع التمارين المناسبة."
        },
        {
          question: "ما هي سياسة الإلغاء؟",
          answer: "بإمكانك الإلغاء أو إعادة الجدولة حتى 6 ساعات قبل الكلاس لاسترداد كامل الرصيد. الإلغاء المتأخر أو عدم الحضور سيُحتسب برسوم الكلاس الكاملة.",
        },
      ],
    },

    // Final CTA Section
    cta: {
      title: "مترددة؟",
      titleHighlight: "",
      subtitle: "اذا في بالك سؤال بخصوص البيلاتس أو الاشتراك أو أي شيء آخر لا تترددين في التواصل معنا فريقنا قريب ويرد في دقائق",
      button: "انضمي الآن",
    },

    // Membership Modal
    membershipModal: {
      title: "انضمي لعائلة بيلاتوبيا",
      subtitle: "اختاري الطريقة المناسبة لك",
      appOption: {
        title: "حملي التطبيق",
        description: "أسرع طريقة للاشتراك. حملي التطبيق، سجلي، واشتري باقتك في أقل من دقيقتين.",
        badge: "ننصح بها",
        scanQR: "امسحي الكود لتحميل التطبيق",
      },
      whatsappOption: {
        title: "تواصلي معنا",
        description: "بنساعدك تبدأين.",
        scanQR: "امسحي الكود لفتح الواتساب",
        replyTime: "نرد عليك في دقايق!",
      },
      openLink: "افتحي الرابط",
      or: "أو",
    },

    // Footer
    footer: {
      tagline: "حيث تلتقي الحركة بالوعي الذاتي. واحتك للبيلاتس في حي النرجس، الرياض.",
      studio: "الاستوديو",
      classes: "الكلاسات",
      gallery: "تفاصيل الاستديو",
      giftCards: "هدية بيلاتوبيا",
      support: "الدعم",
      faq: "الأسئلة الشائعة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contact: "تواصلي معنا",
      weAccept: "نقبل جميع طرق الدفع",
      rights: "جميع الحقوق محفوظة.",
    },

    // Language
    language: {
      switch: "English",
      current: "عربي",
    },
  },
} as const;

export type Translations = typeof translations.en | typeof translations.ar;
