//language translation
const uiTranslations = {
    en: {
        instructions: "Instruction: Preparation of suspension containing 0% suspending agent",
        apparatusMenu: "Apparatus Menu",
        start: "Start",
        add: "ADD",
        next: "Next",
        previous: "Previous",
        reset: "Reset",
        help: "Help"
    },
    hi: {
        instructions: "निर्देश: 0% निलंबन एजेंट युक्त निलंबन तैयार करना",
        apparatusMenu: "उपकरण मेनू",
        start: "शुरू",
        add: "जोड़ें",
        next: "अगला",
        previous: "पिछला",
        reset: "रीसेट",
        help: "मदद"
    },
    mr: {
        instructions: "सूचना: 0% सस्पेंडिंग एजंट असलेले सस्पेंशन तयार करणे",
        apparatusMenu: "उपकरणे मेनू",
        start: "सुरू करा",
        add: "जोडा",
        next: "पुढे",
        previous: "मागे",
        reset: "रीसेट",
        help: "मदत"
    },
    gu: {
        instructions: "સૂચના: 0% સસ્પેન્ડિંગ એજન્ટ ધરાવતું સસ્પેન્શન તૈયાર કરવું",
        apparatusMenu: "ઉપકરણ મેનુ",
        start: "શરૂ કરો",
        add: "ઉમેરો",
        next: "આગળ",
        previous: "પાછળ",
        reset: "રીસેટ",
        help: "મદદ"
    },
    bn: {
        instructions: "নির্দেশ: ০% সাসপেন্ডিং এজেন্ট সম্বলিত সাসপেনশন প্রস্তুতকরণ",
        apparatusMenu: "যন্ত্রপাতি মেনু",
        start: "শুরু",
        add: "যোগ করুন",
        next: "পরবর্তী",
        previous: "পূর্ববর্তী",
        reset: "রিসেট",
        help: "সাহায্য"
    }
};

// Translations for all instruction text
const instructionTranslations = {
    en: {
        chooseLanguage: "Please select your preferred language from the dropdown menu above.",
        initialInstruction: "Instruction: First click the Start button to begin the experiment",
        clickSample: "Instruction: Click on Calamine 1 powder",
        movingSample: "Instruction: Calamine 1 powder is moving up from the bottom to the mortar",
        addingPowder: "Instruction: Gradually adding powder to mortar...",
        crushingPowder: "Instruction: Crushing powder with pestle...",
        crushAgain: "Instruction: Click Next to crush the powder again for better consistency.",
        crushingAgain: "Instruction: Crushing powder again for better consistency...",
        powderCrushed: "Instruction: Powder crushed successfully! Click Next to lift the beaker from the bottom and pour water into the mortar.",
        clickWaterBeaker: "Instruction: Click on the water beaker to lift it and pour water into the mortar.",
        liftingBeaker: "Instruction: Lifting water beaker from the bottom to pour water into the mortar...",
        pouringWater: "Instruction: Pouring water into the mortar...",
        mixingWater: "Instruction: Mixing water with powder to create a smooth dispersion...",
        dispersionCreated: "Instruction: Smooth dispersion created successfully! Click Next to lift the mortar from the bottom and pour the dispersion into a beaker.",
        liftingMortar: "Instruction: Lifting mortar with dispersion from the bottom...",
        movingMortar: "Instruction: Moving mortar to pour dispersion into beaker...",
        pouringDispersion: "Instruction: Pouring dispersion from mortar into beaker...",
        rinsePrompt: "Instruction: Click Next to rinse the mortar and pestle with water and add the rinsing water to the beaker.",
        rinsingMortar: "Instruction: Rinsing the mortar and pestle with water...",
        addingRinseWater: "Instruction: Adding the rinsing water to the beaker...",
        experimentComplete: "Instruction: Dispersion successfully transferred to beaker and mortar rinsed! Experiment complete."
    },
    hi: {
        chooseLanguage: "कृपया ऊपर दिए गए ड्रॉपडाउन मेनू से अपनी पसंदीदा भाषा चुनें।",
        initialInstruction: "निर्देश: प्रयोग शुरू करने के लिए पहले स्टार्ट बटन पर क्लिक करें",
        clickSample: "निर्देश: कैलामाइन 1 पाउडर पर क्लिक करें",
        movingSample: "निर्देश: कैलामाइन 1 पाउडर नीचे से खरल में ऊपर की ओर जा रहा है",
        addingPowder: "निर्देश: खरल में धीरे-धीरे पाउडर डाला जा रहा है...",
        crushingPowder: "निर्देश: मूसल से पाउडर को कुचल रहे हैं...",
        crushAgain: "निर्देश: बेहतर सामंजस्य के लिए पाउडर को फिर से कुचलने के लिए नेक्स्ट पर क्लिक करें।",
        crushingAgain: "निर्देश: बेहतर सामंजस्य के लिए पाउडर को फिर से कुचल रहे हैं...",
        powderCrushed: "निर्देश: पाउडर सफलतापूर्वक कुचल दिया गया है! नीचे से बीकर को उठाकर खरल में पानी डालने के लिए नेक्स्ट पर क्लिक करें।",
        clickWaterBeaker: "निर्देश: पानी वाले बीकर पर क्लिक करके उसे उठाएं और खरल में पानी डालें।",
        liftingBeaker: "निर्देश: नीचे से पानी वाले बीकर को उठाकर खरल में पानी डाल रहे हैं...",
        pouringWater: "निर्देश: खरल में पानी डाल रहे हैं...",
        mixingWater: "निर्देश: एक चिकना डिस्पर्शन बनाने के लिए पानी को पाउडर के साथ मिला रहे हैं...",
        dispersionCreated: "निर्देश: चिकना डिस्पर्शन सफलतापूर्वक बनाया गया है! खरल को नीचे से उठाकर डिस्पर्शन को बीकर में डालने के लिए नेक्स्ट पर क्लिक करें।",
        liftingMortar: "निर्देश: डिस्पर्शन के साथ खरल को नीचे से उठा रहे हैं...",
        movingMortar: "निर्देश: डिस्पर्शन को बीकर में डालने के लिए खरल को स्थानांतरित कर रहे हैं...",
        pouringDispersion: "निर्देश: खरल से बीकर में डिस्पर्शन डाल रहे हैं...",
        rinsePrompt: "निर्देश: खरल और मूसल को पानी से धोकर धोने के पानी को बीकर में डालने के लिए नेक्स्ट पर क्लिक करें।",
        rinsingMortar: "निर्देश: खरल और मूसल को पानी से धो रहे हैं...",
        addingRinseWater: "निर्देश: धोने का पानी बीकर में डाल रहे हैं...",
        experimentComplete: "निर्देश: डिस्पर्शन सफलतापूर्वक बीकर में स्थानांतरित किया गया और खरल धोया गया! प्रयोग पूरा हुआ।"
    },
    mr: {
        chooseLanguage: "कृपया वरील ड्रॉपडाउन मेनूमधून आपली पसंतीची भाषा निवडा.",
        initialInstruction: "सूचना: प्रयोग सुरू करण्यासाठी प्रथम स्टार्ट बटणावर क्लिक करा",
        clickSample: "सूचना: कॅलामाइन 1 पावडरवर क्लिक करा",
        movingSample: "सूचना: कॅलामाइन 1 पावडर खालून वरच्या दिशेने खलबत्त्यात जात आहे",
        addingPowder: "सूचना: खलबत्त्यात हळूहळू पावडर टाकत आहे...",
        crushingPowder: "सूचना: मुसळीने पावडर कुटत आहे...",
        crushAgain: "सूचना: अधिक चांगल्या सुसंगततेसाठी पावडर पुन्हा कुटण्यासाठी पुढे क्लिक करा.",
        crushingAgain: "सूचना: अधिक चांगल्या सुसंगततेसाठी पावडर पुन्हा कुटत आहे...",
        powderCrushed: "सूचना: पावडर यशस्वीरित्या कुटली गेली आहे! खालून बीकर उचलून खलबत्त्यात पाणी ओतण्यासाठी पुढे क्लिक करा.",
        clickWaterBeaker: "सूचना: पाण्याच्या बीकरवर क्लिक करून ते उचला आणि खलबत्त्यात पाणी ओता.",
        liftingBeaker: "सूचना: खालून पाण्याचे बीकर उचलून खलबत्त्यात पाणी ओतत आहे...",
        pouringWater: "सूचना: खलबत्त्यात पाणी ओतत आहे...",
        mixingWater: "सूचना: गुळगुळीत डिस्पर्शन तयार करण्यासाठी पाणी आणि पावडर मिसळत आहे...",
        dispersionCreated: "सूचना: गुळगुळीत डिस्पर्शन यशस्वीरित्या तयार केले आहे! खलबत्ता खालून उचलून डिस्पर्शन बीकरमध्ये ओतण्यासाठी पुढे क्लिक करा.",
        liftingMortar: "सूचना: डिस्पर्शनसह खलबत्ता खालून उचलत आहे...",
        movingMortar: "सूचना: डिस्पर्शन बीकरमध्ये ओतण्यासाठी खलबत्ता हलवत आहे...",
        pouringDispersion: "सूचना: खलबत्त्यातून बीकरमध्ये डिस्पर्शन ओतत आहे...",
        rinsePrompt: "सूचना: खलबत्ता आणि मुसळी पाण्याने धुऊन धुण्याचे पाणी बीकरमध्ये टाकण्यासाठी पुढे क्लिक करा.",
        rinsingMortar: "सूचना: खलबत्ता आणि मुसळी पाण्याने धुत आहे...",
        addingRinseWater: "सूचना: धुण्याचे पाणी बीकरमध्ये टाकत आहे...",
        experimentComplete: "सूचना: डिस्पर्शन यशस्वीरित्या बीकरमध्ये स्थानांतरित केले आहे आणि खलबत्ता धुतला आहे! प्रयोग पूर्ण झाला."
    },
    gu: {
        chooseLanguage: "કૃપા કરીને ઉપરના ડ્રોપડાઉન મેનુમાંથી તમારી પસંદગીની ભાષા પસંદ કરો.",
        initialInstruction: "સૂચના: પ્રયોગ શરૂ કરવા માટે પહેલા સ્ટાર્ટ બટન પર ક્લિક કરો",
        clickSample: "સૂચના: કેલામાઇન 1 પાવડર પર ક્લિક કરો",
        movingSample: "સૂચના: કેલામાઇન 1 પાવડર નીચેથી ઉપર ખરલમાં જઈ રહ્યો છે",
        addingPowder: "સૂચના: ખરલમાં ધીરે ધીરે પાવડર ઉમેરી રહ્યા છીએ...",
        crushingPowder: "સૂચના: મૂસળથી પાવડરને કચડી રહ્યા છીએ...",
        crushAgain: "સૂચના: વધુ સારી સુસંગતતા માટે પાવડરને ફરીથી કચડવા માટે નેક્સ્ટ પર ક્લિક કરો.",
        crushingAgain: "સૂચના: વધુ સારી સુસંગતતા માટે પાવડરને ફરીથી કચડી રહ્યા છીએ...",
        powderCrushed: "સૂચના: પાવડર સફળતાપૂર્વક કચડાઈ ગયો છે! નીચેથી બીકરને ઉંચકીને ખરલમાં પાણી રેડવા માટે નેક્સ્ટ પર ક્લિક કરો.",
        clickWaterBeaker: "સૂચના: પાણીના બીકર પર ક્લિક કરીને તેને ઉંચકો અને ખરલમાં પાણી રેડો.",
        liftingBeaker: "સૂચના: નીચેથી પાણીના બીકરને ઉંચકીને ખરલમાં પાણી રેડી રહ્યા છીએ...",
        pouringWater: "સૂચના: ખરલમાં પાણી રેડી રહ્યા છીએ...",
        mixingWater: "સૂચના: સરળ ડિસ્પર્શન બનાવવા માટે પાણીને પાવડર સાથે મિક્સ કરી રહ્યા છીએ...",
        dispersionCreated: "સૂચના: સરળ ડિસ્પર્શન સફળતાપૂર્વક બનાવવામાં આવ્યું છે! ખરલને નીચેથી ઉંચકીને ડિસ્પર્શનને બીકરમાં રેડવા માટે નેક્સ્ટ પર ક્લિક કરો.",
        liftingMortar: "સૂચના: ડિસ્પર્શન સાથે ખરલને નીચેથી ઉંચકી રહ્યા છીએ...",
        movingMortar: "સૂચના: ડિસ્પર્શનને બીકરમાં રેડવા માટે ખરલને ખસેડી રહ્યા છીએ...",
        pouringDispersion: "સૂચના: ખરલમાંથી બીકરમાં ડિસ્પર્શન રેડી રહ્યા છીએ...",
        rinsePrompt: "સૂચના: ખરલ અને મૂસળને પાણીથી ધોઈને ધોવાનું પાણી બીકરમાં ઉમેરવા માટે નેક્સ્ટ પર ક્લિક કરો.",
        rinsingMortar: "સૂચના: ખરલ અને મૂસળને પાણીથી ધોઈ રહ્યા છીએ...",
        addingRinseWater: "સૂચના: ધોવાનું પાણી બીકરમાં ઉમેરી રહ્યા છીએ...",
        experimentComplete: "સૂચના: ડિસ્પર્શન સફળતાપૂર્વક બીકરમાં ટ્રાન્સફર કરવામાં આવ્યું છે અને ખરલ ધોવામાં આવ્યું છે! પ્રયોગ પૂર્ણ થયો."
    },
    bn: {
        chooseLanguage: "অনুগ্রহ করে উপরের ড্রপডাউন মেনু থেকে আপনার পছন্দের ভাষা নির্বাচন করুন।",
        initialInstruction: "নির্দেশ: প্রথমে পরীক্ষা শুরু করতে স্টার্ট বাটনে ক্লিক করুন",
        clickSample: "নির্দেশ: ক্যালামাইন 1 পাউডারে ক্লিক করুন",
        movingSample: "নির্দেশ: ক্যালামাইন 1 পাউডার নীচ থেকে খলের দিকে উঠছে",
        addingPowder: "নির্দেশ: ধীরে ধীরে খলে পাউডার যোগ করা হচ্ছে...",
        crushingPowder: "নির্দেশ: হামানদিস্তা দিয়ে পাউডার পেষণ করা হচ্ছে...",
        crushAgain: "নির্দেশ: আরও ভালো সামঞ্জস্যের জন্য পাউডার আবার পেষণ করতে নেক্সট বাটনে ক্লিক করুন।",
        crushingAgain: "নির্দেশ: আরও ভালো সামঞ্জস্যের জন্য পাউডার আবার পেষণ করা হচ্ছে...",
        powderCrushed: "নির্দেশ: পাউডার সফলভাবে পেষণ করা হয়েছে! নীচ থেকে বিকার তুলে খলে জল ঢালতে নেক্সট বাটনে ক্লিক করুন।",
        clickWaterBeaker: "নির্দেশ: জলের বিকারে ক্লিক করে এটি তুলুন এবং খলে জল ঢালুন।",
        liftingBeaker: "নির্দেশ: নীচ থেকে জলের বিকার তুলে খলে জল ঢালছি...",
        pouringWater: "নির্দেশ: খলে জল ঢালা হচ্ছে...",
        mixingWater: "নির্দেশ: একটি মসৃণ ডিসপারশন তৈরি করতে জল এবং পাউডার মিশ্রিত করা হচ্ছে...",
        dispersionCreated: "নির্দেশ: মসৃণ ডিসপারশন সফলভাবে তৈরি করা হয়েছে! খলকে নীচ থেকে তুলে ডিসপারশনকে বিকারে ঢালতে নেক্সট বাটনে ক্লিক করুন।",
        liftingMortar: "নির্দেশ: ডিসপারশন সহ খলকে নীচ থেকে তোলা হচ্ছে...",
        movingMortar: "নির্দেশ: ডিসপারশনকে বিকারে ঢালার জন্য খলকে সরানো হচ্ছে...",
        pouringDispersion: "নির্দেশ: খল থেকে বিকারে ডিসপারশন ঢালা হচ্ছে...",
        rinsePrompt: "নির্দেশ: খল এবং হামানদিস্তাকে জল দিয়ে ধুয়ে সেই ধোয়ার জল বিকারে যোগ করতে নেক্সট বাটনে ক্লিক করুন।",
        rinsingMortar: "নির্দেশ: খল এবং হামানদিস্তাকে জল দিয়ে ধোয়া হচ্ছে...",
        addingRinseWater: "নির্দেশ: ধোয়ার জল বিকারে যোগ করা হচ্ছে...",
        experimentComplete: "নির্দেশ: ডিসপারশন সফলভাবে বিকারে স্থানান্তরিত করা হয়েছে এবং খল ধোয়া হয়েছে! পরীক্ষা সম্পন্ন হয়েছে।"
    }
};

// Sample animation and interaction
document.addEventListener('DOMContentLoaded', () => {
    // Get all the sample elements
    const sample1 = document.getElementById('Calamine1');
    const sample2 = document.getElementById('Calamine2');
    const sample3 = document.getElementById('Bentonite5');
    const sample4 = document.getElementById('Calamine3');
    const sample5 = document.getElementById('Bentonite6');
    const sample6 = document.getElementById('Calamine4');
    const sample7 = document.getElementById('Bentonite7');

    // Get other important elements
    const mortar = document.querySelector('.mortal');
    const pestle = document.querySelector('.pestle');
    const startButton = document.querySelector('.str-btn');
    const instructionElement = document.querySelector('.inst-container h1');
    const languageSelector = document.getElementById('languageSelector');

    // Track which samples have been added
    let calamine1Added = false;
    let calamine2Added = false;
    let bentonite5Added = false;
    let calamine3Added = false;
    let bentonite6Added = false;
    let calamine4Added = false;
    let bentonite7Added = false;

    // Track if Bentonite6 is clickable directly
    let bentonite6Clickable = false;

    // Initially disable all sample clicks
    sample1.style.pointerEvents = 'none';
    sample2.style.pointerEvents = 'none';
    sample3.style.pointerEvents = 'none';
    sample4.style.pointerEvents = 'none';
    sample5.style.pointerEvents = 'none';
    sample6.style.pointerEvents = 'none';
    sample7.style.pointerEvents = 'none';

    // Function to set pestle to vertical position (-90 degrees)
    function setPestleVertical() {
        gsap.set(pestle, { rotation: -90 });
    }

    // Always ensure pestle is at -90 degrees
    setPestleVertical();

    // Add click event listener to mortar for direct pouring into beaker2
    mortar.style.cursor = 'pointer'; // Add pointer cursor to indicate it's clickable

    // Function to handle mortar click for direct pouring into beaker2
    function handleMortarClick() {
        // Only allow click if mortar has dispersion (has active class)
        if (mortar.classList.contains('active')) {
            // Disable further clicks
            mortar.removeEventListener('click', handleMortarClick);
            mortar.style.cursor = 'default';

            // Update instruction
            updateInstruction("Instruction: Lifting mortar to pour dispersion into beaker2...");

            // Transfer dispersion to beaker2
            transferDispersionToBeaker();
        }
    }

    // Function to handle mortar click for pouring into beaker1
    function handleMortarClickForBeaker1() {
        // Only allow click if mortar has dispersion (has active class)
        if (mortar.classList.contains('active')) {
            // Disable further clicks
            mortar.removeEventListener('click', handleMortarClickForBeaker1);
            mortar.style.cursor = 'default';

            // Remove glow effect and label
            mortar.style.boxShadow = 'none';
            gsap.killTweensOf(mortar, {boxShadow: true});

            // Remove any added label
            const label = mortar.querySelector('div');
            if (label) {
                mortar.removeChild(label);
            }

            // Update instruction
            updateInstruction("Instruction: Lifting mortar to pour dispersion into beaker1...");

            // Transfer dispersion to beaker1
            transferDispersionToBeaker1();
        }
    }

    // Function to transfer the dispersion from mortar to beaker1
    function transferDispersionToBeaker1() {
        // Get the beaker1 element
        const targetBeaker = document.getElementById('beaker1');

        // Get the positions for accurate animation
        const mortarRect = mortar.getBoundingClientRect();
        const targetBeakerRect = targetBeaker.getBoundingClientRect();

        // Create a dispersion element inside the mortar (to represent the contents)
        const mortarContents = document.createElement('div');
        mortarContents.className = 'mortar-contents';
        mortarContents.style.position = 'absolute';
        mortarContents.style.width = '80px';
        mortarContents.style.height = '20px';
        mortarContents.style.backgroundColor = 'rgba(200, 200, 255, 0.7)';
        mortarContents.style.borderRadius = '50%';
        mortarContents.style.top = '50%';
        mortarContents.style.left = '50%';
        mortarContents.style.transform = 'translate(-50%, -50%)';
        mortarContents.style.zIndex = '3';
        mortar.appendChild(mortarContents);

        // Update instruction
        updateInstruction("Instruction: Lifting mortar with dispersion from the bottom...");

        // Create a timeline for the transfer animation
        const transferTl = gsap.timeline({
            onComplete: function() {
                // After transfer animation completes, show the rinse prompt
                showRinsePrompt();
            }
        });

        // First add a slight downward movement to emphasize lifting from the bottom
        transferTl.to(mortar, {
            y: 10, // Slight downward movement
            duration: 0.3,
            ease: "power1.in"
        })
        // Then lift the mortar up from the bottom with a slight bounce effect
        .to(mortar, {
            y: -100, // Move up vertically more
            duration: 1.5,
            ease: "back.out(1.1)" // Add a slight bounce effect
        })

        // Update instruction for moving to beaker
        .call(() => {
            updateInstruction("Instruction: Moving mortar to pour dispersion into beaker1...");
        })

        // Move it horizontally to position above the beaker1
        .to(mortar, {
            x: targetBeakerRect.left - mortarRect.left + (targetBeakerRect.width/2 - mortarRect.width/2),
            duration: 1.5,
            ease: "power2.inOut"
        })

        // Update instruction for pouring
        .call(() => {
            updateInstruction("Instruction: Pouring dispersion from mortar into beaker1...");
        })

        // Tilt the mortar to pour the contents - more dramatic tilt
        .to(mortar, {
            rotation: 60, // More tilt for more dramatic pouring
            transformOrigin: "center bottom",
            duration: 1.2,
            ease: "power2.inOut"
        })

        // Create simplified pouring animation
        .call(() => {
            // Get the mortar contents (dispersion)
            const mortarContents = mortar.querySelector('.smooth-dispersion');

            // Hide the contents in the mortar
            if (mortarContents) {
                gsap.to(mortarContents, {
                    opacity: 0,
                    duration: 0.5
                });
            }

            // Create simple liquid stream element
            const liquidStream = document.createElement('div');
            liquidStream.className = 'liquid-transfer-animation';
            liquidStream.style.position = 'absolute';

            // Calculate position based on the mortar's rotation (60 degrees)
            const angleInRadians = 60 * Math.PI / 180; // Convert 60 degrees to radians
            const offsetX = Math.cos(angleInRadians) * 30; // X offset based on angle
            const offsetY = Math.sin(angleInRadians) * 30; // Y offset based on angle

            // Position the stream at the edge of the tilted mortar
            liquidStream.style.top = (mortarRect.top - 100 + mortarRect.height/2 + offsetY) + 'px';
            liquidStream.style.left = (mortarRect.left + mortarRect.width - 20 + offsetX) + 'px';
            liquidStream.style.zIndex = '8';
            liquidStream.style.opacity = '0';
            liquidStream.style.backgroundColor = 'rgba(200, 200, 255, 0.8)'; // Match dispersion color
            liquidStream.style.width = '10px'; // Wider for better visibility
            liquidStream.style.borderRadius = '5px';
            document.body.appendChild(liquidStream);

            // Animate liquid stream
            gsap.to(liquidStream, {
                opacity: 0.9,
                height: targetBeakerRect.top - (mortarRect.top - 100) - 20,
                duration: 0.5
            });

            // Create dispersion in beaker
            const beakerDispersion = document.createElement('div');
            beakerDispersion.style.position = 'absolute';
            beakerDispersion.style.width = '55px';
            beakerDispersion.style.height = '0px'; // Start with 0 height and animate up
            beakerDispersion.style.backgroundColor = 'rgba(200, 200, 255, 0.8)';
            beakerDispersion.style.borderRadius = '0 0 10px 10px';
            beakerDispersion.style.bottom = '16%';
            beakerDispersion.style.left = '50%';
            beakerDispersion.style.transform = 'translateX(-50%)';
            beakerDispersion.style.opacity = '0.8';
            beakerDispersion.style.zIndex = '2';
            targetBeaker.appendChild(beakerDispersion);

            // Gradually increase the height of the dispersion in the beaker
            gsap.to(beakerDispersion, {
                height: '60px',
                duration: 2,
                ease: "power1.inOut"
            });

            // Fade out liquid stream after a delay
            setTimeout(() => {
                gsap.to(liquidStream, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        if (document.body.contains(liquidStream)) {
                            document.body.removeChild(liquidStream);
                        }
                    }
                });
            }, 2000);
        })

        // Return mortar to original position with a simpler animation
        .to(mortar, {
            rotation: 0,
            duration: 0.8,
            ease: "power1.inOut"
        })
        .to(mortar, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
            onComplete: function() {
                // Remove the contents element from the mortar if it exists
                const mortarContents = mortar.querySelector('.mortar-contents');
                if (mortarContents && mortar.contains(mortarContents)) {
                    mortar.removeChild(mortarContents);
                }

                // Remove the glow effect from the mortar
                mortar.style.boxShadow = 'none';
                gsap.killTweensOf(mortar, {boxShadow: true});
            }
        });
    }

    // Add the click event listener to mortar
    mortar.addEventListener('click', handleMortarClick);

    // Create and add the water beaker element if it doesn't exist
    let beakerWithWater = document.querySelector('.beaker-near-cylinder');
    if (!beakerWithWater) {
        beakerWithWater = document.createElement('div');
        beakerWithWater.className = 'beaker-near-cylinder';
        beakerWithWater.style.position = 'absolute';
        beakerWithWater.style.top = '750px';
        beakerWithWater.style.left = '1400px';
        beakerWithWater.style.height = '120px';
        beakerWithWater.style.width = '80px';
        beakerWithWater.style.backgroundImage = 'url(beaker.png)';
        beakerWithWater.style.backgroundSize = 'contain';
        beakerWithWater.style.backgroundRepeat = 'no-repeat';
        beakerWithWater.style.backgroundPosition = 'center';
        beakerWithWater.style.cursor = 'pointer';
        beakerWithWater.style.zIndex = '5';
        document.body.appendChild(beakerWithWater);

        // Create water inside the beaker
        const beakerWater = document.createElement('div');
        beakerWater.className = 'beaker-water';
        beakerWater.style.position = 'absolute';
        beakerWater.style.bottom = '16%';
        beakerWater.style.left = '50%';
        beakerWater.style.transform = 'translateX(-50%)';
        beakerWater.style.width = '55px';
        beakerWater.style.height = '60px';
        beakerWater.style.backgroundColor = 'rgba(135, 206, 250, 0.7)';
        beakerWater.style.borderRadius = '0 0 10px 10px';
        beakerWater.style.zIndex = '4';
        beakerWithWater.appendChild(beakerWater);
    }

    // Default language
    let currentLanguage = 'en';

    // Variable to track if language has been selected
    let languageSelected = false;

    // Function to update UI text based on selected language
    function updateUIText() {
        if (languageSelected) {
            // Update the main instruction title
            document.querySelector('.inst-container h1').textContent = uiTranslations[currentLanguage].instructions;

            // Update apparatus menu title
            document.querySelector('.menu h5').textContent = uiTranslations[currentLanguage].apparatusMenu;

            // Update button text
            startButton.textContent = uiTranslations[currentLanguage].start;
            document.getElementById('confirm-button').textContent = uiTranslations[currentLanguage].add;

            // Update current instruction
            updateInstruction(instructionTranslations[currentLanguage].initialInstruction);

            // Make the Start button pulse to draw attention
            gsap.to(startButton, {
                scale: 1.1,
                repeat: -1,
                yoyo: true,
                duration: 0.8,
                ease: "power1.inOut"
            });

            // Enable the Start button
            startButton.style.opacity = '1';
            startButton.style.cursor = 'pointer';
            startButton.removeAttribute('disabled');
        } else {
            // Show language selection instruction
            instructionElement.textContent = instructionTranslations[currentLanguage].chooseLanguage;

            // Disable the Start button until language is selected
            startButton.setAttribute('disabled', 'true');
            startButton.style.opacity = '0.5';
            startButton.style.cursor = 'not-allowed';

            // Make the language selector pulse to draw attention
            gsap.to(languageSelector, {
                scale: 1.1,
                repeat: 3,
                yoyo: true,
                duration: 0.8,
                ease: "power1.inOut"
            });
        }
    }

    // Add event listener to language selector
    languageSelector.addEventListener('change', function() {
        currentLanguage = this.value;
        languageSelected = true;
        updateUIText();
    });

    // Set default language in the selector but don't mark as selected
    languageSelector.value = "";

    // Initialize UI with language selection prompt
    updateUIText();

    // // Create powder element in mortar
    // const powderInMortar = document.createElement('div');
    // powderInMortar.className = 'powder-in-mortar';
    // powderInMortar.style.opacity = '0'; // Initially hidden
    // powderInMortar.style.width = '80px';
    // powderInMortar.style.height = '20px';
    // powderInMortar.style.backgroundColor = '#f0f0f0';
    // powderInMortar.style.borderRadius = '50%';
    // powderInMortar.style.position = 'absolute';
    // powderInMortar.style.top = '50%';
    // powderInMortar.style.left = '50%';
    // powderInMortar.style.transform = 'translate(-50%, -50%)';
    // mortar.appendChild(powderInMortar);

    // Function to get the instruction text in the current language
    function getInstructionText(key) {
        // Get the text from the translations object based on the current language
        // If the key doesn't exist in the current language, fall back to English
        return instructionTranslations[currentLanguage][key] || instructionTranslations['en'][key];
    }

    // Function to update instruction text with animation
    function updateInstruction(newText) {
        // Check if the newText is a key in the translations object
        let translationKey = '';

        // Find the key that matches the English text
        for (const [key, value] of Object.entries(instructionTranslations.en)) {
            if (value === newText) {
                translationKey = key;
                break;
            }
        }

        // If a key was found, use the translated text, otherwise use the original text
        const textToDisplay = translationKey ? getInstructionText(translationKey) : newText;

        // Fade out current text
        gsap.to(instructionElement, {
            opacity: 0,
            duration: 0.3,
            onComplete: function() {
                // Update text
                instructionElement.textContent = textToDisplay;
                // Fade in new text
                gsap.to(instructionElement, {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });
    }

    // Function to transfer the dispersion from mortar to beaker
    function transferDispersionToBeaker() {
        // Get the beaker2 element
        const targetBeaker = document.getElementById('beaker2');

        // Get the positions for accurate animation
        const mortarRect = mortar.getBoundingClientRect();
        const targetBeakerRect = targetBeaker.getBoundingClientRect();

        // Create a dispersion element inside the mortar (to represent the contents)
        const mortarContents = document.createElement('div');
        mortarContents.className = 'mortar-contents';
        mortarContents.style.position = 'absolute';
        mortarContents.style.width = '80px';
        mortarContents.style.height = '20px';
        mortarContents.style.backgroundColor = 'rgba(200, 200, 255, 0.7)';
        mortarContents.style.borderRadius = '50%';
        mortarContents.style.top = '50%';
        mortarContents.style.left = '50%';
        mortarContents.style.transform = 'translate(-50%, -50%)';
        mortarContents.style.zIndex = '3';
        mortar.appendChild(mortarContents);

        // Update instruction
        updateInstruction("Instruction: Lifting mortar with dispersion from the bottom...");

        // Create a timeline for the transfer animation
        const transferTl = gsap.timeline({
            onComplete: function() {
                // After transfer animation completes, show the rinse prompt
                showRinsePrompt();
            }
        });

        // First add a slight downward movement to emphasize lifting from the bottom
        transferTl.to(mortar, {
            y: 10, // Slight downward movement
            duration: 0.3,
            ease: "power1.in"
        })
        // Then lift the mortar up from the bottom with a slight bounce effect
        .to(mortar, {
            y: -100, // Move up vertically more
            duration: 1.5,
            ease: "back.out(1.1)" // Add a slight bounce effect
        })

        // Update instruction for moving to beaker
        .call(() => {
            updateInstruction("Instruction: Moving mortar to pour dispersion into beaker2...");
        })

        // Move it horizontally to position above the beaker2
        .to(mortar, {
            x: targetBeakerRect.left - mortarRect.left + (targetBeakerRect.width/2 - mortarRect.width/2),
            duration: 1.5,
            ease: "power2.inOut"
        })

        // Update instruction for pouring
        .call(() => {
            updateInstruction("Instruction: Pouring dispersion from mortar into beaker2...");
        })

        // Tilt the mortar to pour the contents - more dramatic tilt
        .to(mortar, {
            rotation: 60, // More tilt for more dramatic pouring
            transformOrigin: "center bottom",
            duration: 1.2,
            ease: "power2.inOut"
        })

        // Create simplified pouring animation
        .call(() => {
            // Get the mortar contents (dispersion)
            const mortarContents = mortar.querySelector('.smooth-dispersion');

            // Hide the contents in the mortar
            if (mortarContents) {
                gsap.to(mortarContents, {
                    opacity: 0,
                    duration: 0.5
                });
            }

            // Create simple liquid stream element
            const liquidStream = document.createElement('div');
            liquidStream.className = 'liquid-transfer-animation';
            liquidStream.style.position = 'absolute';

            // Calculate position based on the mortar's rotation (60 degrees)
            const angleInRadians = 60 * Math.PI / 180; // Convert 60 degrees to radians
            const offsetX = Math.cos(angleInRadians) * 30; // X offset based on angle
            const offsetY = Math.sin(angleInRadians) * 30; // Y offset based on angle

            // Position the stream at the edge of the tilted mortar
            liquidStream.style.top = (mortarRect.top - 100 + mortarRect.height/2 + offsetY) + 'px';
            liquidStream.style.left = (mortarRect.left + mortarRect.width - 20 + offsetX) + 'px';
            liquidStream.style.zIndex = '8';
            liquidStream.style.opacity = '0';
            liquidStream.style.backgroundColor = 'rgba(200, 200, 255, 0.8)'; // Match dispersion color
            liquidStream.style.width = '10px'; // Wider for better visibility
            liquidStream.style.borderRadius = '5px';
            document.body.appendChild(liquidStream);

            // Animate liquid stream
            gsap.to(liquidStream, {
                opacity: 0.9,
                height: targetBeakerRect.top - (mortarRect.top - 100) - 20,
                duration: 0.5
            });

            // Create dispersion in beaker
            const beakerDispersion = document.createElement('div');
            beakerDispersion.style.position = 'absolute';
            beakerDispersion.style.width = '55px';
            beakerDispersion.style.height = '0px'; // Start with 0 height and animate up
            beakerDispersion.style.backgroundColor = 'rgba(200, 200, 255, 0.8)';
            beakerDispersion.style.borderRadius = '0 0 10px 10px';
            beakerDispersion.style.bottom = '16%';
            beakerDispersion.style.left = '50%';
            beakerDispersion.style.transform = 'translateX(-50%)';
            beakerDispersion.style.opacity = '0.8';
            beakerDispersion.style.zIndex = '2';
            targetBeaker.appendChild(beakerDispersion);

            // Gradually increase the height of the dispersion in the beaker
            gsap.to(beakerDispersion, {
                height: '60px',
                duration: 2,
                ease: "power1.inOut"
            });

            // Fade out liquid stream after a delay
            setTimeout(() => {
                gsap.to(liquidStream, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        if (document.body.contains(liquidStream)) {
                            document.body.removeChild(liquidStream);
                        }
                    }
                });
            }, 2000);
        })

        // Return mortar to original position with a simpler animation
        .to(mortar, {
            rotation: 0,
            duration: 0.8,
            ease: "power1.inOut"
        })
        .to(mortar, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
            onComplete: function() {
                // Remove the contents element from the mortar if it exists
                const mortarContents = mortar.querySelector('.mortar-contents');
                if (mortarContents && mortar.contains(mortarContents)) {
                    mortar.removeChild(mortarContents);
                }

                // Remove the glow effect from the mortar
                mortar.style.boxShadow = 'none';
                gsap.killTweensOf(mortar, {boxShadow: true});
            }
        });
    }

    // Function to show Calamine2 clickable after pouring mortar into beaker1
    function showRinsePrompt() {
        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on Calamine2 (second powder) to add it to the mortar");

        // Get the Calamine2 element
        const sample2 = document.getElementById('Calamine2');

        // Add stronger visual cue - pulsing animation
        gsap.to(sample2, {
            scale: 1.2,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        sample2.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.7)';
        gsap.to(sample2, {
            boxShadow: '0 0 25px rgba(255, 255, 0, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        sample2.style.cursor = 'pointer';
        sample2.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        sample2.appendChild(label);

        // Add click event to Calamine2
        sample2.addEventListener('click', handleCalamine2ClickAfterPour);
    }

    // Function to handle Calamine2 click after pouring mortar into beaker1
    async function handleCalamine2ClickAfterPour() {
        // Get the Calamine2 element
        const sample2 = document.getElementById('Calamine2');

        // Remove click event
        sample2.removeEventListener('click', handleCalamine2ClickAfterPour);

        // Remove glow effect and label
        sample2.style.boxShadow = 'none';
        gsap.killTweensOf(sample2, {boxShadow: true});

        // Remove any added label
        const label = sample2.querySelector('div');
        if (label) {
            sample2.removeChild(label);
        }

        // Move sample to mortar
        await moveSampleToMortar(sample2);

        // Crush the powder
        await crushPowders();

        // Make Bentonite5 clickable
        makeBentonite5ClickableAfterPour();
    }

    // Function to make Bentonite5 clickable after Calamine2 is added
    function makeBentonite5ClickableAfterPour() {
        // Get the Bentonite5 element
        const sample3 = document.getElementById('Bentonite5');

        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on Bentonite5 (third powder) to add it to the mortar");

        // Add stronger visual cue - pulsing animation
        gsap.to(sample3, {
            scale: 1.2,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        sample3.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.7)';
        gsap.to(sample3, {
            boxShadow: '0 0 25px rgba(255, 255, 0, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        sample3.style.cursor = 'pointer';
        sample3.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        sample3.appendChild(label);

        // Add click event to Bentonite5
        sample3.addEventListener('click', handleBentonite5ClickAfterPour);
    }

    // Function to handle Bentonite5 click after Calamine2 is added
    async function handleBentonite5ClickAfterPour() {
        // Get the Bentonite5 element
        const sample3 = document.getElementById('Bentonite5');

        // Remove click event
        sample3.removeEventListener('click', handleBentonite5ClickAfterPour);

        // Remove glow effect and label
        sample3.style.boxShadow = 'none';
        gsap.killTweensOf(sample3, {boxShadow: true});

        // Remove any added label
        const label = sample3.querySelector('div');
        if (label) {
            sample3.removeChild(label);
        }

        // Move sample to mortar
        await moveSampleToMortar(sample3);

        // Crush the powder
        await crushPowders();

        // Mark sample as added
        bentonite5Added = true;

        // Make Calamine3 clickable
        makeCalamine3Clickable();
    }

    // Function to make Calamine3 clickable
    function makeCalamine3Clickable() {
        // Get the Calamine3 element
        const sample4 = document.getElementById('Calamine3');

        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on Calamine3 to add Calamine4 and Bentonite6 to the mortar");

        // Add stronger visual cue - pulsing animation
        gsap.to(sample4, {
            scale: 1.2,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        sample4.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.7)';
        gsap.to(sample4, {
            boxShadow: '0 0 25px rgba(255, 255, 0, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        sample4.style.cursor = 'pointer';
        sample4.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        sample4.appendChild(label);

        // Add click event to Calamine3
        sample4.addEventListener('click', handleCalamine3Click);
    }

    // Function to handle Calamine3 click
    async function handleCalamine3Click() {
        // Get the Calamine3 element
        const sample4 = document.getElementById('Calamine3');

        // Remove click event
        sample4.removeEventListener('click', handleCalamine3Click);

        // Remove glow effect and label
        sample4.style.boxShadow = 'none';
        gsap.killTweensOf(sample4, {boxShadow: true});

        // Remove any added label
        const label = sample4.querySelector('div');
        if (label) {
            sample4.removeChild(label);
        }

        // Mark Calamine3 as clicked
        calamine3Added = true;

        // Get the Calamine4 element
        const sample6 = document.getElementById('Calamine4');

        // Update instruction
        updateInstruction("Instruction: Adding Calamine4 to the mortar...");

        // Move Calamine4 to mortar
        await moveSampleToMortar(sample6);

        // Mark Calamine4 as added
        calamine4Added = true;

        // Crush the powder
        await crushPowders();

        // Update instruction
        updateInstruction("Instruction: Adding water to create paste in the mortar...");

        // Add water to mortar to create paste
        await addWaterToMortarForPaste();

        // Update instruction
        updateInstruction("Instruction: Now add Bentonite7 to the paste...");

        // Make Bentonite7 clickable
        makeBentonite7Clickable();
    }

    // Function to make Calamine4 clickable
    function makeCalamine4Clickable() {
        // Get the Calamine4 element
        const sample6 = document.getElementById('Calamine4');

        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on Calamine4 to add it to the mortar");

        // Add stronger visual cue - pulsing animation
        gsap.to(sample6, {
            scale: 1.2,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        sample6.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.7)';
        gsap.to(sample6, {
            boxShadow: '0 0 25px rgba(255, 255, 0, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        sample6.style.cursor = 'pointer';
        sample6.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        sample6.appendChild(label);

        // Add click event to Calamine4
        sample6.addEventListener('click', handleCalamine4Click);
    }

    // Function to handle Calamine4 click
    async function handleCalamine4Click() {
        // Get the Calamine4 element
        const sample6 = document.getElementById('Calamine4');

        // Remove click event
        sample6.removeEventListener('click', handleCalamine4Click);

        // Remove glow effect and label
        sample6.style.boxShadow = 'none';
        gsap.killTweensOf(sample6, {boxShadow: true});

        // Remove any added label
        const label = sample6.querySelector('div');
        if (label) {
            sample6.removeChild(label);
        }

        // Mark Calamine4 as added
        calamine4Added = true;

        // Update instruction
        updateInstruction("Instruction: Adding Calamine4 to the mortar...");

        // Move Calamine4 to mortar
        await moveSampleToMortar(sample6);

        // Crush the powder
        await crushPowders();

        // Update instruction
        updateInstruction("Instruction: Adding water to create paste in the mortar...");

        // Add water to mortar to create paste
        await addWaterToMortarForPaste();

        // Update instruction
        updateInstruction("Instruction: Now add Bentonite7 to the paste...");

        // Make Bentonite7 clickable
        makeBentonite7Clickable();
    }

    // Function to make Bentonite7 clickable
    function makeBentonite7Clickable() {
        // Get the Bentonite7 element
        const sample7 = document.getElementById('Bentonite7');

        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on Bentonite7 to add it to the mortar");

        // Add stronger visual cue - pulsing animation
        gsap.to(sample7, {
            scale: 1.2,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        sample7.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.7)';
        gsap.to(sample7, {
            boxShadow: '0 0 25px rgba(255, 255, 0, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        sample7.style.cursor = 'pointer';
        sample7.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        sample7.appendChild(label);

        // Add click event to Bentonite7
        sample7.addEventListener('click', handleBentonite7Click);
    }

    // Function to handle Bentonite7 click
    async function handleBentonite7Click() {
        // Get the Bentonite7 element
        const sample7 = document.getElementById('Bentonite7');

        // Remove click event
        sample7.removeEventListener('click', handleBentonite7Click);

        // Remove glow effect and label
        sample7.style.boxShadow = 'none';
        gsap.killTweensOf(sample7, {boxShadow: true});

        // Remove any added label
        const label = sample7.querySelector('div');
        if (label) {
            sample7.removeChild(label);
        }

        // Update instruction
        updateInstruction("Instruction: Lifting Bentonite7 and adding it to the mortar...");

        // Move Bentonite7 to mortar
        await moveSampleToMortar(sample7);

        // Mark Bentonite7 as added
        bentonite7Added = true;

        // Crush the powder
        await crushPowders();

        // Check if Calamine4 has been added
        if (calamine4Added) {
            // Update instruction
            updateInstruction("Instruction: Adding more water to dilute the paste...");

            // Add more water to mortar to create a more diluted paste
            await addMoreWaterToMortarForPaste();

            // Make mortar clickable to pour into beaker4
            makeMortarClickableForBeaker4();
        } else {
            // Make Calamine4 clickable
            makeCalamine4Clickable();
        }
    }

    // Function to make mortar clickable to pour into beaker4
    function makeMortarClickableForBeaker4() {
        // Update instruction
        updateInstruction("Instruction: Paste is ready! Click on the mortar to pour it into beaker4");

        // Add stronger visual cue - pulsing animation
        gsap.to(mortar, {
            scale: 1.1,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add a glow effect to the mortar
        mortar.style.boxShadow = '0 0 15px rgba(135, 206, 250, 0.7)';

        // Animate the glow effect
        gsap.to(mortar, {
            boxShadow: '0 0 25px rgba(135, 206, 250, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
        });

        // Make mortar clickable
        mortar.style.cursor = 'pointer';
        mortar.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-30px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(135, 206, 250, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        mortar.appendChild(label);

        // Remove old click event listeners if they exist
        mortar.removeEventListener('click', handleMortarClick);
        mortar.removeEventListener('click', handleMortarClickForBeaker1);
        mortar.removeEventListener('click', handleMortarClickForBeaker2);
        mortar.removeEventListener('click', handleMortarClickForBeaker3);

        // Add new click event to mortar
        mortar.addEventListener('click', handleMortarClickForBeaker4);
    }

    // Function to handle mortar click for pouring into beaker4
    function handleMortarClickForBeaker4() {
        // Disable further clicks
        mortar.removeEventListener('click', handleMortarClickForBeaker4);
        mortar.style.cursor = 'default';

        // Remove glow effect and label
        mortar.style.boxShadow = 'none';
        gsap.killTweensOf(mortar, {boxShadow: true});

        // Remove any added label
        const label = mortar.querySelector('div');
        if (label) {
            mortar.removeChild(label);
        }

        // Update instruction
        updateInstruction("Instruction: Lifting mortar to pour paste into beaker4...");

        // Transfer dispersion to beaker4
        transferDispersionToBeaker4();
    }

    // Function to transfer the dispersion from mortar to beaker4
    function transferDispersionToBeaker4() {
        // Get the beaker4 element
        const targetBeaker = document.getElementById('beaker4');

        // Get the positions for accurate animation
        const mortarRect = mortar.getBoundingClientRect();
        const targetBeakerRect = targetBeaker.getBoundingClientRect();

        // Create a dispersion element inside the mortar (to represent the contents)
        const mortarContents = document.createElement('div');
        mortarContents.className = 'mortar-contents';
        mortarContents.style.position = 'absolute';
        mortarContents.style.width = '80px';
        mortarContents.style.height = '20px';
        mortarContents.style.backgroundColor = 'rgba(200, 200, 255, 0.7)';
        mortarContents.style.borderRadius = '50%';
        mortarContents.style.top = '50%';
        mortarContents.style.left = '50%';
        mortarContents.style.transform = 'translate(-50%, -50%)';
        mortarContents.style.zIndex = '3';
        mortar.appendChild(mortarContents);

        // Update instruction
        updateInstruction("Instruction: Lifting mortar with dispersion from the bottom...");

        // Create a timeline for the transfer animation
        const transferTl = gsap.timeline({
            onComplete: function() {
                // After transfer animation completes, show the rinse prompt
                showRinsePrompt();
            }
        });

        // First add a slight downward movement to emphasize lifting from the bottom
        transferTl.to(mortar, {
            y: 10, // Slight downward movement
            duration: 0.3,
            ease: "power1.in"
        })
        // Then lift the mortar up from the bottom with a slight bounce effect
        .to(mortar, {
            y: -100, // Move up vertically more
            duration: 1.5,
            ease: "back.out(1.1)" // Add a slight bounce effect
        })

        // Update instruction for moving to beaker
        .call(() => {
            updateInstruction("Instruction: Moving mortar to pour dispersion into beaker4...");
        })

        // Move it horizontally to position above the beaker4
        .to(mortar, {
            x: targetBeakerRect.left - mortarRect.left + (targetBeakerRect.width/2 - mortarRect.width/2),
            duration: 1.5,
            ease: "power2.inOut"
        })

        // Update instruction for pouring
        .call(() => {
            updateInstruction("Instruction: Pouring dispersion from mortar into beaker4...");
        })

        // Tilt the mortar to pour the contents - more dramatic tilt
        .to(mortar, {
            rotation: 60, // More tilt for more dramatic pouring
            transformOrigin: "center bottom",
            duration: 1.2,
            ease: "power2.inOut"
        })

        // Create simplified pouring animation
        .call(() => {
            // Get the mortar contents (dispersion)
            const mortarContents = mortar.querySelector('.smooth-dispersion');

            // Hide the contents in the mortar
            if (mortarContents) {
                gsap.to(mortarContents, {
                    opacity: 0,
                    duration: 0.5
                });
            }

            // Create simple liquid stream element
            const liquidStream = document.createElement('div');
            liquidStream.className = 'liquid-transfer-animation';
            liquidStream.style.position = 'absolute';

            // Calculate position based on the mortar's rotation (60 degrees)
            const angleInRadians = 60 * Math.PI / 180; // Convert 60 degrees to radians
            const offsetX = Math.cos(angleInRadians) * 30; // X offset based on angle
            const offsetY = Math.sin(angleInRadians) * 30; // Y offset based on angle

            // Position the stream at the edge of the tilted mortar
            liquidStream.style.top = (mortarRect.top - 100 + mortarRect.height/2 + offsetY) + 'px';
            liquidStream.style.left = (mortarRect.left + mortarRect.width - 20 + offsetX) + 'px';
            liquidStream.style.zIndex = '8';
            liquidStream.style.opacity = '0';
            liquidStream.style.backgroundColor = 'rgba(200, 200, 255, 0.8)'; // Match dispersion color
            liquidStream.style.width = '10px'; // Wider for better visibility
            liquidStream.style.borderRadius = '5px';
            document.body.appendChild(liquidStream);

            // Animate liquid stream
            gsap.to(liquidStream, {
                opacity: 0.9,
                height: targetBeakerRect.top - (mortarRect.top - 100) - 20,
                duration: 0.5
            });

            // Create dispersion in beaker
            const beakerDispersion = document.createElement('div');
            beakerDispersion.style.position = 'absolute';
            beakerDispersion.style.width = '55px';
            beakerDispersion.style.height = '0px'; // Start with 0 height and animate up
            beakerDispersion.style.backgroundColor = 'rgba(200, 200, 255, 0.8)';
            beakerDispersion.style.borderRadius = '0 0 10px 10px';
            beakerDispersion.style.bottom = '16%';
            beakerDispersion.style.left = '50%';
            beakerDispersion.style.transform = 'translateX(-50%)';
            beakerDispersion.style.opacity = '0.8';
            beakerDispersion.style.zIndex = '2';
            targetBeaker.appendChild(beakerDispersion);

            // Gradually increase the height of the dispersion in the beaker
            gsap.to(beakerDispersion, {
                height: '60px',
                duration: 2,
                ease: "power1.inOut"
            });

            // Fade out liquid stream after a delay
            setTimeout(() => {
                gsap.to(liquidStream, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        if (document.body.contains(liquidStream)) {
                            document.body.removeChild(liquidStream);
                        }
                    }
                });
            }, 2000);
        })

        // Return mortar to original position with a simpler animation
        .to(mortar, {
            rotation: 0,
            duration: 0.8,
            ease: "power1.inOut"
        })
        .to(mortar, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
            onComplete: function() {
                // Remove the contents element from the mortar if it exists
                const mortarContents = mortar.querySelector('.mortar-contents');
                if (mortarContents && mortar.contains(mortarContents)) {
                    mortar.removeChild(mortarContents);
                }

                // Remove the glow effect from the mortar
                mortar.style.boxShadow = 'none';
                gsap.killTweensOf(mortar, {boxShadow: true});
            }
        });
    }

    // Function to make Bentonite6 clickable
    function makeBentonite6Clickable() {
        // Get the Bentonite6 element
        const sample5 = document.getElementById('Bentonite6');

        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on Bentonite6 to add it to the mortar");

        // Add stronger visual cue - pulsing animation
        gsap.to(sample5, {
            scale: 1.2,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        sample5.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.7)';
        gsap.to(sample5, {
            boxShadow: '0 0 25px rgba(255, 255, 0, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        sample5.style.cursor = 'pointer';
        sample5.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        sample5.appendChild(label);

        // Add click event to Bentonite6
        sample5.addEventListener('click', handleBentonite6Click);
    }

    // Function to handle Bentonite6 click
    async function handleBentonite6Click() {
        // Get the Bentonite6 element
        const sample5 = document.getElementById('Bentonite6');

        // Remove click event
        sample5.removeEventListener('click', handleBentonite6Click);

        // Remove glow effect and label
        sample5.style.boxShadow = 'none';
        gsap.killTweensOf(sample5, {boxShadow: true});

        // Remove any added label
        const label = sample5.querySelector('div');
        if (label) {
            sample5.removeChild(label);
        }

        // Update instruction
        updateInstruction("Instruction: Lifting Bentonite6 and adding it to the mortar...");

        // Move Bentonite6 to mortar
        await moveSampleToMortar(sample5);

        // Mark Bentonite6 as added
        bentonite6Added = true;

        // Crush the powder
        await crushPowders();

        // Check if Calamine2 or Calamine3 has been added
        if (calamine2Added) {
            // Update instruction
            updateInstruction("Instruction: Adding water to create paste in the mortar...");

            // Add water to mortar to create paste
            await addWaterToMortarForPaste();

            // Make mortar clickable to pour into beaker2
            makeMortarClickableForBeaker2();
        } else if (calamine3Added) {
            // Update instruction
            updateInstruction("Instruction: Adding more water to dilute the paste...");

            // Add more water to mortar to create a more diluted paste
            await addMoreWaterToMortarForPaste();

            // Make mortar clickable to pour into beaker3
            makeMortarClickableForBeaker3();
        } else {
            // Make water beaker clickable
            makeWaterBeakerClickable();
        }
    }

    // Function to pour beaker contents into measuring cylinder
    function pourBeakerIntoMeasuringCylinder(beaker) {
        // Get the first measuring cylinder
        const measuringCylinder = document.querySelector('.measuring-cylinder');

        // Get the positions for accurate animation
        const beakerRect = beaker.getBoundingClientRect();
        const cylinderRect = measuringCylinder.getBoundingClientRect();

        // Update instruction
        updateInstruction("Instruction: Pouring beaker contents into measuring cylinder...");

        // Create a timeline for the pouring animation
        const pourTl = gsap.timeline({
            onComplete: function() {
                // After pouring animation completes, show the final result
                showFinalResult();
            }
        });

        // First add a slight downward movement to emphasize lifting from the bottom
        pourTl.to(beaker, {
            y: 10, // Slight downward movement
            duration: 0.3,
            ease: "power1.in"
        })
        // Then lift the beaker up from the bottom with a slight bounce effect
        .to(beaker, {
            y: -80, // Move up vertically
            duration: 1.2,
            ease: "back.out(1.1)" // Add a slight bounce effect
        })

        // Move it horizontally to position above the measuring cylinder
        .to(beaker, {
            x: cylinderRect.left - beakerRect.left + (cylinderRect.width/2 - beakerRect.width/2),
            duration: 1.5,
            ease: "power2.inOut"
        })

        // Tilt the beaker to pour the contents
        .to(beaker, {
            rotation: 60, // Tilt for pouring
            transformOrigin: "center bottom",
            duration: 1,
            ease: "power2.inOut"
        })

        // Create simple pouring animation
        .call(() => {
            // Create liquid stream element
            const liquidStream = document.createElement('div');
            liquidStream.className = 'liquid-transfer-animation';
            liquidStream.style.position = 'absolute';

            // Calculate position based on the beaker's rotation (60 degrees)
            const angleInRadians = 60 * Math.PI / 180; // Convert 60 degrees to radians
            const offsetX = Math.cos(angleInRadians) * 30; // X offset based on angle
            const offsetY = Math.sin(angleInRadians) * 30; // Y offset based on angle

            // Position the stream at the edge of the tilted beaker
            liquidStream.style.top = (beakerRect.top - 80 + beakerRect.height/2 + offsetY) + 'px';
            liquidStream.style.left = (beakerRect.left + beakerRect.width - 20 + offsetX) + 'px';
            liquidStream.style.zIndex = '8';
            liquidStream.style.opacity = '0';
            liquidStream.style.backgroundColor = 'rgba(200, 200, 255, 0.8)'; // Match dispersion color
            liquidStream.style.width = '8px';
            liquidStream.style.borderRadius = '4px';
            document.body.appendChild(liquidStream);

            // Animate liquid stream
            gsap.to(liquidStream, {
                opacity: 0.9,
                height: cylinderRect.top - (beakerRect.top - 80) - 20,
                duration: 0.5
            });

            // Create dispersion in measuring cylinder
            const cylinderContents = document.createElement('div');
            cylinderContents.style.position = 'absolute';
            cylinderContents.style.width = '15px'; // Half width for cylinder (50% of original 30px)
            cylinderContents.style.height = '0px'; // Start with 0 height and animate up
            cylinderContents.style.backgroundColor = 'rgba(200, 200, 255, 0.8)';
            cylinderContents.style.borderRadius = '0 0 5px 5px';
            cylinderContents.style.bottom = '10%';
            cylinderContents.style.left = '50%';
            cylinderContents.style.transform = 'translateX(-50%)';
            cylinderContents.style.opacity = '0.8';
            cylinderContents.style.zIndex = '2';
            measuringCylinder.appendChild(cylinderContents);

            // Gradually increase the height of the dispersion in the measuring cylinder
            gsap.to(cylinderContents, {
                height: '50px', // Half height in the cylinder (50% of original 100px)
                duration: 2,
                ease: "power1.inOut"
            });

            // Fade out liquid stream after a delay
            setTimeout(() => {
                gsap.to(liquidStream, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        if (document.body.contains(liquidStream)) {
                            document.body.removeChild(liquidStream);
                        }
                    }
                });
            }, 2000);

            // Remove dispersion from beaker
            const beakerDispersion = beaker.querySelector('div');
            if (beakerDispersion) {
                gsap.to(beakerDispersion, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        if (beaker.contains(beakerDispersion)) {
                            beaker.removeChild(beakerDispersion);
                        }
                    }
                });
            }
        })

        // Return beaker to original position with a simpler animation
        .to(beaker, {
            rotation: 0,
            duration: 0.8,
            ease: "power1.inOut"
        })
        .to(beaker, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power1.inOut"
        });
    }

    // Function to rinse the mortar and pestle with water and add it to the beaker
    function rinseMortarAndPestle() {
        // Ensure pestle is vertical (-90 degrees) initially
        setPestleVertical();
        // Get the beaker with water, mortar, and pestle elements
        const beakerWithWater = document.querySelector('.beaker-near-cylinder');
        const mortar = document.querySelector('.mortal');
        const pestle = document.querySelector('.pestle');
        const targetBeaker = document.getElementById('beaker2');

        // Update instruction
        updateInstruction(instructionTranslations[currentLanguage].rinsingMortar);

        // Create a timeline for the rinsing animation
        const rinseTl = gsap.timeline({
            onComplete: function() {
                // After rinsing animation completes, show the final result
                showFinalResult();
            }
        });

        // First, move the water beaker to the mortar
        rinseTl.to(beakerWithWater, {
            y: -80, // Move up vertically
            duration: 1,
            ease: "power2.out"
        })
        .to(beakerWithWater, {
            x: (mortar.getBoundingClientRect().left - beakerWithWater.getBoundingClientRect().left) + 40,
            duration: 1,
            ease: "power1.inOut"
        })

        // Create water droplets falling into the mortar
        .call(() => {
            // Create water droplets
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const droplet = document.createElement('div');
                    droplet.style.position = 'absolute';
                    droplet.style.width = '5px';
                    droplet.style.height = '5px';
                    droplet.style.backgroundColor = 'rgba(135, 206, 250, 0.8)';
                    droplet.style.borderRadius = '50%';
                    droplet.style.zIndex = '10';

                    // Position the droplet at the beaker's bottom
                    const beakerRect = beakerWithWater.getBoundingClientRect();
                    droplet.style.top = (beakerRect.bottom - 20) + 'px';
                    droplet.style.left = (beakerRect.left + beakerRect.width/2) + 'px';

                    document.body.appendChild(droplet);

                    // Animate the droplet falling into the mortar
                    gsap.to(droplet, {
                        top: mortar.getBoundingClientRect().top + 20 + 'px',
                        opacity: 0.9,
                        duration: 0.5,
                        ease: "power1.in",
                        onComplete: function() {
                            // Create ripple effect in the mortar
                            const ripple = document.createElement('div');
                            ripple.style.position = 'absolute';
                            ripple.style.width = '10px';
                            ripple.style.height = '10px';
                            ripple.style.border = '2px solid rgba(135, 206, 250, 0.8)';
                            ripple.style.borderRadius = '50%';
                            ripple.style.zIndex = '9';
                            ripple.style.top = mortar.getBoundingClientRect().top + 20 + 'px';
                            ripple.style.left = mortar.getBoundingClientRect().left + mortar.getBoundingClientRect().width/2 + 'px';
                            ripple.style.transform = 'translate(-50%, -50%)';
                            document.body.appendChild(ripple);

                            // Animate the ripple
                            gsap.to(ripple, {
                                width: '30px',
                                height: '30px',
                                opacity: 0,
                                duration: 0.8,
                                ease: "power1.out",
                                onComplete: function() {
                                    document.body.removeChild(ripple);
                                }
                            });

                            document.body.removeChild(droplet);
                        }
                    });
                }, i * 200);
            }
        })

        // First position the pestle high above the mortar for dramatic entry
        .to(pestle, {
            x: (mortar.getBoundingClientRect().left - pestle.getBoundingClientRect().left) + (mortar.getBoundingClientRect().width/2 - pestle.getBoundingClientRect().width/2),
            y: (mortar.getBoundingClientRect().top - pestle.getBoundingClientRect().top) - 70, // Position higher above the mortar
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 0.8,
            ease: "power2.out"
        })

        // Then quickly move the pestle down into the mortar for dramatic impact
        .to(pestle, {
            y: (mortar.getBoundingClientRect().top - pestle.getBoundingClientRect().top) + 20, // Position inside the mortar
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 0.4,
            ease: "power3.in",
            onComplete: function() {
                // Create ripple effect for dramatic impact
                const createRippleEffect = () => {
                    const ripple = document.createElement('div');
                    ripple.style.position = 'absolute';
                    ripple.style.width = '40px';
                    ripple.style.height = '40px';
                    ripple.style.border = '2px solid rgba(135, 206, 235, 0.7)';
                    ripple.style.borderRadius = '50%';
                    ripple.style.top = '50%';
                    ripple.style.left = '50%';
                    ripple.style.transform = 'translate(-50%, -50%)';
                    ripple.style.opacity = '0.8';
                    mortar.appendChild(ripple);

                    gsap.to(ripple, {
                        width: '80px',
                        height: '80px',
                        opacity: 0,
                        duration: 0.8,
                        onComplete: function() {
                            mortar.removeChild(ripple);
                        }
                    });
                };
                createRippleEffect();
            }
        })
        .call(() => {
            // Create a circular motion for the pestle while keeping it vertical
            const pestleCircle = gsap.timeline({repeat: 2});

            // Instead of rotating the pestle itself, we'll move it in a circular path
            // while keeping it vertical (-90 degrees)
            const radius = 15; // Radius of circular motion

            // First quarter of circle
            pestleCircle.to(pestle, {
                x: "+=" + radius,
                y: "-=" + radius,
                rotation: -90, // Keep pestle vertical (-90 degrees)
                duration: 0.5,
                ease: "none"
            })
            // Second quarter of circle
            .to(pestle, {
                x: "-=" + radius,
                y: "-=" + radius,
                rotation: -90, // Keep pestle vertical (-90 degrees)
                duration: 0.5,
                ease: "none"
            })
            // Third quarter of circle
            .to(pestle, {
                x: "-=" + radius,
                y: "+=" + radius,
                rotation: -90, // Keep pestle vertical (-90 degrees)
                duration: 0.5,
                ease: "none"
            })
            // Fourth quarter of circle
            .to(pestle, {
                x: "+=" + radius,
                y: "+=" + radius,
                rotation: -90, // Keep pestle vertical (-90 degrees)
                duration: 0.5,
                ease: "none"
            });
        })

        // Return the pestle to its original position
        .to(pestle, {
            x: 0,
            y: 0,
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 1,
            ease: "power1.inOut",
            delay: 3, // Wait for the circular motion to complete
            onComplete: function() {
                // Force the pestle to be vertical at the end
                setPestleVertical();
            }
        })

        // Return the water beaker to its original position
        .to(beakerWithWater, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power1.inOut"
        })

        // Update instruction for adding rinse water to beaker
        .call(() => {
            updateInstruction(instructionTranslations[currentLanguage].addingRinseWater);
        })

        // Create rinse water in the mortar
        .call(() => {
            const rinseWater = document.createElement('div');
            rinseWater.className = 'rinse-water';
            rinseWater.style.position = 'absolute';
            rinseWater.style.width = '60px';
            rinseWater.style.height = '15px';
            rinseWater.style.backgroundColor = 'rgba(135, 206, 250, 0.5)';
            rinseWater.style.borderRadius = '50%';
            rinseWater.style.top = '50%';
            rinseWater.style.left = '50%';
            rinseWater.style.transform = 'translate(-50%, -50%)';
            rinseWater.style.zIndex = '3';
            mortar.appendChild(rinseWater);
        })

        // Lift the mortar with rinse water
        .to(mortar, {
            y: -80, // Move up vertically
            duration: 1,
            ease: "power2.out"
        })

        // Move it horizontally to position above the beaker
        .to(mortar, {
            x: targetBeaker.getBoundingClientRect().left - mortar.getBoundingClientRect().left + (targetBeaker.getBoundingClientRect().width/2 - mortar.getBoundingClientRect().width/2) + 20,
            duration: 1,
            ease: "power1.inOut"
        })

        // Tilt the mortar to pour the rinse water
        .to(mortar, {
            rotation: 45,
            transformOrigin: "center bottom",
            duration: 1,
            ease: "power1.inOut"
        })

        // Create pouring animation for rinse water
        .call(() => {
            // Get the rinse water element
            const rinseWater = document.querySelector('.rinse-water');

            // Hide the rinse water in the mortar
            gsap.to(rinseWater, {
                opacity: 0,
                duration: 0.5
            });

            // Create liquid stream element
            const liquidStream = document.createElement('div');
            liquidStream.className = 'liquid-transfer-animation';
            liquidStream.style.position = 'absolute';
            liquidStream.style.top = (mortar.getBoundingClientRect().top - 80 + mortar.getBoundingClientRect().height) + 'px';
            liquidStream.style.left = (targetBeaker.getBoundingClientRect().left + targetBeaker.getBoundingClientRect().width/2) + 'px';
            liquidStream.style.zIndex = '8';
            liquidStream.style.opacity = '0';
            liquidStream.style.backgroundColor = 'rgba(135, 206, 250, 0.6)';
            liquidStream.style.width = '5px';
            liquidStream.style.borderRadius = '2px';
            document.body.appendChild(liquidStream);

            // Animate liquid stream
            gsap.to(liquidStream, {
                opacity: 0.8,
                height: targetBeaker.getBoundingClientRect().top - (mortar.getBoundingClientRect().top - 80) - 20,
                duration: 0.5
            });

            // Get the existing dispersion in the beaker
            const beakerDispersion = targetBeaker.querySelector('div');

            // Increase the height of the dispersion in the beaker
            gsap.to(beakerDispersion, {
                height: '70px',
                duration: 1.5
            });

            // Fade out liquid stream after a delay
            setTimeout(() => {
                gsap.to(liquidStream, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        document.body.removeChild(liquidStream);
                    }
                });
            }, 1500);
        })

        // Return mortar to original position
        .to(mortar, {
            rotation: 0,
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "power1.inOut",
            onComplete: function() {
                // Remove the rinse water element from the mortar
                const rinseWater = document.querySelector('.rinse-water');
                if (rinseWater) {
                    mortar.removeChild(rinseWater);
                }
            }
        });
    }

    // Function to show the final result after transfer and rinsing
    function showFinalResult() {
        // Update instruction after transfer and rinsing is complete
        updateInstruction("Instruction: Process completed successfully! The dispersion has been transferred to the measuring cylinder.");

        // Add a completion animation to the measuring cylinder
        const measuringCylinder = document.querySelector('.measuring-cylinder');
        gsap.to(measuringCylinder, {
            scale: 1.1,
            repeat: 2,
            yoyo: true,
            duration: 0.7,
            ease: "power1.inOut"
        });

        // Add a subtle glow effect to the measuring cylinder
        measuringCylinder.style.boxShadow = '0 0 15px rgba(135, 206, 250, 0.7)';

        // Animate the glow effect
        gsap.to(measuringCylinder, {
            boxShadow: '0 0 25px rgba(135, 206, 250, 0.9)',
            repeat: 3,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut",
            onComplete: function() {
                // Remove the glow effect after animation completes
                measuringCylinder.style.boxShadow = 'none';
            }
        });

        // Change button text to Reset
        startButton.textContent = "Reset";

        // Enable the Reset button
        startButton.removeAttribute('disabled');
        startButton.style.opacity = '1';
        startButton.style.cursor = 'pointer';

        // Add visual cue to the Reset button
        gsap.to(startButton, {
            scale: 1.1,
            repeat: 2,
            yoyo: true,
            duration: 0.5,
            ease: "power1.inOut"
        });

        // Add reset functionality
        startButton.addEventListener('click', () => {
            if (startButton.textContent === "Reset") {
                // Reload the page to reset everything
                window.location.reload();
            }
        }, { once: true });
    }

    // Function to add water to the mortar and create a smooth dispersion
    function addWaterToMortar() {
        // Get the beaker with water and the mortar elements
        const beakerWithWater = document.querySelector('.beaker-near-cylinder');
        const beakerWater = document.querySelector('.beaker-water');

        // Update instruction
        updateInstruction("Instruction: Lifting water beaker from the bottom to pour water into the mortar...");

        // Create a timeline for the water addition animation
        const waterTl = gsap.timeline({
            onComplete: function() {
                // After water animation completes, show the final result
                showFinalDispersion();
            }
        });

        // First, add a slight downward movement to emphasize lifting from the bottom
        waterTl.to(beakerWithWater, {
            y: 15, // More noticeable downward movement
            duration: 0.4,
            ease: "power1.in"
        })

        // Then lift the beaker up from the bottom with a slight bounce effect
        .to(beakerWithWater, {
            y: -100, // Move up vertically more
            duration: 1.2,
            ease: "back.out(1.2)" // Add a slight bounce effect
        })

        // Move the beaker to the right side after lifting
        .to(beakerWithWater, {
            x: 180, // Move to the right side more
            duration: 1,
            ease: "power1.inOut"
        })

        // Update instruction for pouring water
        .call(() => {
            updateInstruction("Instruction: Pouring water into the mortar...");
        })

        // Move the beaker to position above the mortar from the right side
        .to(beakerWithWater, {
            x: (mortar.getBoundingClientRect().left - beakerWithWater.getBoundingClientRect().left) + 60, // More to the right
            y: -100, // Slightly higher
            duration: 1.5,
            ease: "power1.inOut"
        })

        // Tilt the beaker to pour water
        .to(beakerWithWater, {
            rotation: 60, // More tilt for more pronounced pouring
            transformOrigin: "bottom right",
            duration: 1.2,
            ease: "power1.inOut"
        })

        // Create water stream animation
        .call(() => {
            // Create water stream element
            const waterStream = document.createElement('div');
            waterStream.className = 'liquid-transfer-animation';
            waterStream.style.position = 'absolute';
            waterStream.style.top = beakerWithWater.getBoundingClientRect().top + 60 + 'px';
            waterStream.style.left = beakerWithWater.getBoundingClientRect().left + 30 + 'px';
            waterStream.style.zIndex = '8';
            waterStream.style.opacity = '0';
            waterStream.style.backgroundColor = 'rgba(135, 206, 250, 0.6)'; // Light blue color
            waterStream.style.width = '5px'; // Initial width
            waterStream.style.borderRadius = '2px';
            document.body.appendChild(waterStream);

            // Animate water stream
            gsap.to(waterStream, {
                opacity: 0.9,
                width: "8px", // Make the stream slightly wider
                height: mortar.getBoundingClientRect().top - beakerWithWater.getBoundingClientRect().top - 20,
                duration: 0.5,
                backgroundColor: "rgba(135, 206, 250, 0.8)" // More visible blue color
            });

            // Create ripple effect in the mortar
            const createRippleEffect = () => {
                // Create a ripple element
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.width = '40px';
                ripple.style.height = '40px';
                ripple.style.border = '2px solid rgba(135, 206, 235, 0.7)';
                ripple.style.borderRadius = '50%';
                ripple.style.top = '50%';
                ripple.style.left = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.opacity = '0.8';
                mortar.appendChild(ripple);

                // Animate the ripple
                gsap.to(ripple, {
                    width: '80px',
                    height: '80px',
                    opacity: 0,
                    duration: 1,
                    onComplete: function() {
                        mortar.removeChild(ripple);
                    }
                });
            };

            // Create multiple ripples with delays
            for (let i = 0; i < 3; i++) {
                setTimeout(createRippleEffect, i * 700 + 500);
            }

            // Fade out water stream after a delay
            setTimeout(() => {
                gsap.to(waterStream, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        document.body.removeChild(waterStream);
                    }
                });
            }, 2500);
        })

        // Reduce water level in beaker
        .to(beakerWater, {
            height: "20px",
            duration: 2,
            ease: "linear"
        }, "-=2.5")

        // Return beaker to original position
        .to(beakerWithWater, {
            rotation: 0,
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "power1.inOut",
            delay: 1
        });
    }

    // Function to show the final smooth dispersion
    function showFinalDispersion() {
        // Update instruction for mixing water with powder
        updateInstruction("Instruction: Mixing water with powder to create a smooth dispersion...");

        // Create a mixing effect in the mortar (ripples)
        const createRippleEffect = () => {
            // Create a ripple element
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '40px';
            ripple.style.height = '40px';
            ripple.style.border = '2px solid rgba(135, 206, 235, 0.7)';
            ripple.style.borderRadius = '50%';
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.opacity = '0.8';
            mortar.appendChild(ripple);

            // Animate the ripple
            gsap.to(ripple, {
                width: '80px',
                height: '80px',
                opacity: 0,
                duration: 1,
                onComplete: function() {
                    mortar.removeChild(ripple);
                }
            });
        };

        // Create multiple ripples with delays
        for (let i = 0; i < 3; i++) {
            setTimeout(createRippleEffect, i * 700);
        }

        // After mixing animation completes (2.5 seconds)
        setTimeout(() => {
            // Find and remove the water-in-mortar element if it exists
            const existingWater = mortar.querySelector('.water-in-mortar');
            if (existingWater) {
                mortar.removeChild(existingWater);
            }

            // Create a dispersion element in the mortar
            const dispersion = document.createElement('div');
            dispersion.className = 'smooth-dispersion';
            dispersion.style.position = 'absolute';
            dispersion.style.width = '80px';
            dispersion.style.height = '25px';
            dispersion.style.backgroundColor = 'rgba(200, 200, 255, 0.8)';
            dispersion.style.borderRadius = '50%';
            dispersion.style.top = '50%';
            dispersion.style.left = '50%';
            dispersion.style.transform = 'translate(-50%, -50%)';
            dispersion.style.opacity = '0';
            dispersion.style.boxShadow = 'inset 0 5px 10px rgba(255, 255, 255, 0.5), 0 2px 5px rgba(0, 0, 0, 0.1)';
            mortar.appendChild(dispersion);

            // Create a subtle shine effect on the dispersion surface
            const shineEffect = document.createElement('div');
            shineEffect.style.position = 'absolute';
            shineEffect.style.width = '30px';
            shineEffect.style.height = '10px';
            shineEffect.style.background = 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)';
            shineEffect.style.borderRadius = '50%';
            shineEffect.style.top = '40%';
            shineEffect.style.left = '40%';
            shineEffect.style.transform = 'translate(-50%, -50%)';
            shineEffect.style.opacity = '0';
            shineEffect.style.zIndex = '5';
            mortar.appendChild(shineEffect);

            // Animate the appearance of the smooth dispersion
            gsap.to(dispersion, {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut"
            });

            // Animate the shine effect
            gsap.to(shineEffect, {
                opacity: 0.8,
                duration: 1.2,
                ease: "power1.inOut",
                onComplete: function() {
                    // Create subtle movement in the liquid to show it's not completely settled
                    gsap.to(dispersion, {
                        height: '24px',
                        duration: 1.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });

                    // Create subtle movement in the shine
                    gsap.to(shineEffect, {
                        left: '60%',
                        top: '45%',
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });

                    // Add active class to mortar to indicate it has dispersion
                    mortar.classList.add('active');

                    // Update instruction after dispersion is complete
                    updateInstruction("Instruction: Dispersion is ready! Click on the mortar to pour it into beaker1");

                    // Add stronger visual cue - pulsing animation
                    gsap.to(mortar, {
                        scale: 1.1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.6,
                        ease: "power1.inOut"
                    });

                    // Add a glow effect to the mortar
                    mortar.style.boxShadow = '0 0 15px rgba(135, 206, 250, 0.7)';

                    // Animate the glow effect
                    gsap.to(mortar, {
                        boxShadow: '0 0 25px rgba(135, 206, 250, 0.9)',
                        repeat: -1,
                        yoyo: true,
                        duration: 1.5,
                        ease: "sine.inOut"
                    });

                    // Make mortar clickable
                    mortar.style.cursor = 'pointer';
                    mortar.style.pointerEvents = 'auto';

                    // Add a label to make it clearer
                    const label = document.createElement('div');
                    label.textContent = "Click me!";
                    label.style.position = 'absolute';
                    label.style.top = '-30px';
                    label.style.left = '50%';
                    label.style.transform = 'translateX(-50%)';
                    label.style.backgroundColor = 'rgba(135, 206, 250, 0.8)';
                    label.style.padding = '3px 8px';
                    label.style.borderRadius = '5px';
                    label.style.fontSize = '12px';
                    label.style.fontWeight = 'bold';
                    label.style.zIndex = '10';
                    mortar.appendChild(label);

                    // Remove old click event listener if exists
                    mortar.removeEventListener('click', handleMortarClick);

                    // Add new click event to mortar
                    mortar.addEventListener('click', handleMortarClickForBeaker1);
                }
            });
        }, 2500);
    }



    // Function to animate pestle crushing powder in mortar (first crushing)
    function animatePestleCrushing() {
        // Ensure pestle is vertical (-90 degrees) initially
        setPestleVertical();
        // Get the positions for accurate animation
        const pestleRect = pestle.getBoundingClientRect();
        const mortarRect = mortar.getBoundingClientRect();

        // Calculate the position to place pestle in mortar
        const xDistance = (mortarRect.left + mortarRect.width/2) - (pestleRect.left + pestleRect.width/2);
        const yDistance = (mortarRect.top + mortarRect.height/2) - (pestleRect.top + pestleRect.height/2);

        // Create powder particles in the mortar to show crushing effect
        const createCrushEffect = (intensity) => {
            // Create small particles that spread out from the center
            for (let i = 0; i < intensity; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '3px';
                particle.style.height = '3px';
                particle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                particle.style.borderRadius = '50%';
                particle.style.top = '50%';
                particle.style.left = '50%';
                particle.style.transform = 'translate(-50%, -50%)';
                particle.style.opacity = '0';
                particle.style.zIndex = '5';
                mortar.appendChild(particle);

                // Random angle and distance for particle movement
                const angle = Math.random() * Math.PI * 2;
                const distance = 10 + Math.random() * 20;
                const xMove = Math.cos(angle) * distance;
                const yMove = Math.sin(angle) * distance;

                // Animate the particle
                gsap.to(particle, {
                    x: xMove,
                    y: yMove,
                    opacity: 0.8,
                    duration: 0.3,
                    onComplete: function() {
                        gsap.to(particle, {
                            opacity: 0,
                            duration: 0.3,
                            onComplete: function() {
                                mortar.removeChild(particle);
                            }
                        });
                    }
                });
            }
        };

        // Create a timeline for the pestle animation
        const pestleTl = gsap.timeline({
            onComplete: function() {
                // After first crushing is complete, update instruction to crush again
                updateInstruction(instructionTranslations[currentLanguage].crushAgain);

                // Enable the Next button for second crushing
                startButton.removeAttribute('disabled');
                startButton.style.opacity = '1';
                startButton.style.cursor = 'pointer';

                // Add visual cue to the Next button
                gsap.to(startButton, {
                    scale: 1.1,
                    repeat: 2,
                    yoyo: true,
                    duration: 0.5,
                    ease: "power1.inOut"
                });
            }
        });

        // First move the pestle to position directly above the mortar
        pestleTl.to(pestle, {
            x: xDistance, // Position directly above the mortar center
            y: yDistance - 70, // Position higher above the mortar for a more dramatic entry
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 1,
            ease: "power2.out"
        })

        // Then perform up and down crushing motions with rotation
        // First crushing motion - dramatic entry into the mortar
        .to(pestle, {
            y: yDistance - 5, // Down position deep in the mortar
            rotation: -90, // Keep pestle vertical (-90 degrees)
            transformOrigin: "50% 50%",
            duration: 0.4, // Faster for more impact
            ease: "power3.in", // Stronger easing for more dramatic entry
            onComplete: function() {
                // Create crush effect with more particles for dramatic impact
                createCrushEffect(10);
            }
        })
        .to(pestle, {
            y: yDistance - 35, // Up position higher
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 0.5,
            ease: "power1.out"
        })

        // Second crushing motion
        .to(pestle, {
            y: yDistance - 5, // Down position (in the mortar)
            rotation: -90, // Keep pestle vertical (-90 degrees)
            transformOrigin: "50% 50%",
            duration: 0.5,
            ease: "power2.in",
            onComplete: function() {
                // Create crush effect with 8 particles
                createCrushEffect(8);
            }
        })
        .to(pestle, {
            y: yDistance - 30, // Up position
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 0.4,
            ease: "power1.out"
        })

        // Third crushing motion
        .to(pestle, {
            y: yDistance - 5, // Down position (in the mortar)
            rotation: -90, // Keep pestle vertical (-90 degrees)
            transformOrigin: "50% 50%",
            duration: 0.4,
            ease: "power2.in",
            onComplete: function() {
                // Create crush effect with 10 particles
                createCrushEffect(10);
            }
        })
        .to(pestle, {
            y: yDistance - 25, // Up position
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 0.3,
            ease: "power1.out"
        })

        // Fourth crushing motion
        .to(pestle, {
            y: yDistance - 5, // Down position (in the mortar)
            rotation: -90, // Keep pestle vertical (-90 degrees)
            transformOrigin: "50% 50%",
            duration: 0.3,
            ease: "power2.in",
            onComplete: function() {
                // Create crush effect with 12 particles
                createCrushEffect(12);
            }
        })
        .to(pestle, {
            y: yDistance - 20, // Up position
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 0.3,
            ease: "power1.out"
        })

        // Final crushing motion
        .to(pestle, {
            y: yDistance - 5, // Final down position (in the mortar)
            rotation: -90, // Keep pestle vertical (-90 degrees)
            transformOrigin: "50% 50%",
            duration: 0.3,
            ease: "power2.in",
            onComplete: function() {
                // Create crush effect with 15 particles (more for final crush)
                createCrushEffect(15);
            }
        })
        // Return pestle to original position
        .to(pestle, {
            x: 0,
            y: 0,
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 1,
            ease: "power2.inOut"
        });
    }

    // Function to animate second crushing of powder with pestle
    function animateSecondCrushing() {
        // Ensure pestle is vertical (-90 degrees) initially
        setPestleVertical();
        // Get the positions for accurate animation
        const pestleRect = pestle.getBoundingClientRect();
        const mortarRect = mortar.getBoundingClientRect();

        // Calculate the position to place pestle in mortar
        const xDistance = (mortarRect.left + mortarRect.width/2) - (pestleRect.left + pestleRect.width/2);
        const yDistance = (mortarRect.top + mortarRect.height/2) - (pestleRect.top + pestleRect.height/2);

        // Update instruction for second crushing
        updateInstruction(instructionTranslations[currentLanguage].crushingAgain);

        // Create a timeline for the second pestle animation
        const pestleTl2 = gsap.timeline({
            onComplete: function() {
                // After second crushing is complete, update instruction to click on water beaker
                updateInstruction(instructionTranslations[currentLanguage].clickWaterBeaker);

                // Add visual cue to the water beaker
                const beakerWithWater = document.querySelector('.beaker-near-cylinder');
                gsap.to(beakerWithWater, {
                    scale: 1.1,
                    repeat: 2,
                    yoyo: true,
                    duration: 0.8,
                    ease: "power1.inOut"
                });

                // Add click event to water beaker
                beakerWithWater.addEventListener('click', handleWaterBeakerClick);
                beakerWithWater.style.cursor = 'pointer';
            }
        });

        // First move the pestle to position directly above the mortar
        pestleTl2.to(pestle, {
            x: xDistance, // Position directly above the mortar center
            y: yDistance - 70, // Position higher above the mortar for a more dramatic entry
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 1,
            ease: "power2.out"
        })

        // More vigorous crushing motions for second round
        // First crushing motion - dramatic entry into the mortar
        .to(pestle, {
            y: yDistance - 5, // Down position deep in the mortar
            rotation: -90, // Keep pestle vertical (-90 degrees)
            transformOrigin: "50% 50%",
            duration: 0.4, // Faster for more impact
            ease: "power3.in", // Stronger easing for more dramatic entry
            onComplete: function() {
                // Create crush effect with more particles for dramatic impact
                createCrushEffect(15);
            }
        })
        .to(pestle, {
            y: yDistance - 40, // Higher up position
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 0.4,
            ease: "power1.out"
        })

        // Second crushing motion
        .to(pestle, {
            y: yDistance - 5, // Down position (in the mortar)
            rotation: -90, // Keep pestle vertical (-90 degrees)
            transformOrigin: "50% 50%",
            duration: 0.4,
            ease: "power2.in",
            onComplete: function() {
                // Create crush effect with 15 particles
                createCrushEffect(15);
            }
        })
        .to(pestle, {
            y: yDistance - 35, // Up position
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 0.3,
            ease: "power1.out"
        })

        // Third crushing motion
        .to(pestle, {
            y: yDistance - 5, // Down position (in the mortar)
            rotation: -90, // Keep pestle vertical (-90 degrees)
            transformOrigin: "50% 50%",
            duration: 0.3,
            ease: "power2.in",
            onComplete: function() {
                // Create crush effect with 20 particles
                createCrushEffect(20);
            }
        })
        .to(pestle, {
            y: yDistance - 30, // Up position
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 0.3,
            ease: "power1.out"
        })

        // Final crushing motion
        .to(pestle, {
            y: yDistance - 5, // Final down position (in the mortar)
            rotation: -90, // Keep pestle vertical (-90 degrees)
            transformOrigin: "50% 50%",
            duration: 0.3,
            ease: "power2.in",
            onComplete: function() {
                // Create crush effect with 25 particles (more for final crush)
                createCrushEffect(25);
            }
        })
        // Return pestle to original position
        .to(pestle, {
            x: 0,
            y: 0,
            rotation: -90, // Keep pestle vertical (-90 degrees)
            duration: 1,
            ease: "power2.inOut"
        });
    }

    // Function to handle water beaker click
    function handleWaterBeakerClick() {
        // Get the beaker with water and the mortar elements
        const beakerWithWater = document.querySelector('.beaker-near-cylinder');
        const beakerWater = document.querySelector('.beaker-water');

        // Disable the beaker click to prevent multiple clicks
        beakerWithWater.removeEventListener('click', handleWaterBeakerClick);
        beakerWithWater.style.cursor = 'default';

        // Update instruction
        updateInstruction(instructionTranslations[currentLanguage].liftingBeaker);

        // Create a timeline for the water addition animation
        const waterTl = gsap.timeline({
            onComplete: function() {
                // After water animation completes, show the final result
                showFinalDispersion();
            }
        });

        // First, add a slight downward movement to emphasize lifting from the bottom
        waterTl.to(beakerWithWater, {
            y: 15, // More noticeable downward movement
            duration: 0.4,
            ease: "power1.in"
        })

        // Then lift the beaker up from the bottom with a slight bounce effect
        .to(beakerWithWater, {
            y: -100, // Move up vertically more
            duration: 1.2,
            ease: "back.out(1.2)" // Add a slight bounce effect
        })

        // Move the beaker to the right side after lifting
        .to(beakerWithWater, {
            x: 180, // Move to the right side more
            duration: 1,
            ease: "power1.inOut"
        })

        // Update instruction for pouring water
        .call(() => {
            updateInstruction("Instruction: Pouring water into the mortar...");
        })

        // Move the beaker to position above the mortar from the right side
        .to(beakerWithWater, {
            x: (mortar.getBoundingClientRect().left - beakerWithWater.getBoundingClientRect().left) + 60, // More to the right
            y: -100, // Slightly higher
            duration: 1.5,
            ease: "power1.inOut"
        })

        // Tilt the beaker to pour water
        .to(beakerWithWater, {
            rotation: 60, // More tilt for more pronounced pouring
            transformOrigin: "bottom right",
            duration: 1.2,
            ease: "power1.inOut"
        })

        // Create enhanced water stream animation
        .call(() => {
            // Create water stream element
            const waterStream = document.createElement('div');
            waterStream.className = 'liquid-transfer-animation';
            waterStream.style.position = 'absolute';

            // Position the water stream at the top of the beaker (at the spout)
            const beakerRect = beakerWithWater.getBoundingClientRect();
            // Calculate the position based on the beaker's rotation (60 degrees)
            // When the beaker is tilted, the water should come from the top-right corner
            const angleInRadians = 60 * Math.PI / 180; // Convert 60 degrees to radians
            const offsetX = Math.cos(angleInRadians) * 30; // X offset based on angle
            const offsetY = Math.sin(angleInRadians) * 30; // Y offset based on angle

            // Position the water stream at the top of the beaker using the calculated offsets
            waterStream.style.top = (beakerRect.top + 20 + offsetY) + 'px'; // Higher position (top of beaker) with Y offset
            waterStream.style.left = (beakerRect.left + beakerRect.width - 15 + offsetX) + 'px'; // Right side of beaker with X offset
            waterStream.style.zIndex = '20'; // Higher z-index to ensure visibility
            waterStream.style.opacity = '0';
            waterStream.style.backgroundColor = 'rgba(135, 206, 250, 0.8)'; // More visible blue color
            waterStream.style.width = '8px'; // Wider for better visibility
            waterStream.style.borderRadius = '4px';
            document.body.appendChild(waterStream);

            // Animate water stream with a curved path to simulate gravity
            // Calculate the distance to the mortar
            const mortarRect = mortar.getBoundingClientRect();
            const streamHeight = mortarRect.top - beakerRect.top - 20;

            // Create a curved path for the water stream
            const waterPath = document.createElement('div');
            waterPath.style.position = 'absolute';
            waterPath.style.top = (beakerRect.top + 20 + offsetY) + 'px';
            waterPath.style.left = (beakerRect.left + beakerRect.width - 15 + offsetX) + 'px';
            waterPath.style.width = '8px';
            waterPath.style.height = streamHeight + 'px';
            waterPath.style.backgroundColor = 'transparent';
            waterPath.style.borderRadius = '4px';
            waterPath.style.zIndex = '19';
            document.body.appendChild(waterPath);

            // Animate the main water stream
            gsap.to(waterStream, {
                opacity: 0.9,
                width: "10px", // Make the stream wider
                height: streamHeight,
                duration: 0.5,
                backgroundColor: "rgba(135, 206, 250, 0.9)" // More visible blue color
            });

            // Create water accumulation in the mortar
            const waterInMortar = document.createElement('div');
            waterInMortar.className = 'water-in-mortar';
            waterInMortar.style.position = 'absolute';
            waterInMortar.style.width = '60px';
            waterInMortar.style.height = '0px';
            waterInMortar.style.backgroundColor = 'rgba(135, 206, 250, 0.6)';
            waterInMortar.style.borderRadius = '50%';
            waterInMortar.style.top = '50%';
            waterInMortar.style.left = '50%';
            waterInMortar.style.transform = 'translate(-50%, -50%)';
            waterInMortar.style.zIndex = '3';
            waterInMortar.style.opacity = '0';
            mortar.appendChild(waterInMortar);

            // Gradually increase the water level in the mortar
            gsap.to(waterInMortar, {
                height: '20px',
                opacity: 0.8,
                duration: 2.5,
                ease: "power1.inOut"
            });

            // Add water droplets along the stream for more realism
            const createWaterDroplet = () => {
                const droplet = document.createElement('div');
                droplet.style.position = 'absolute';
                droplet.style.width = Math.random() * 3 + 3 + 'px'; // Varied sizes
                droplet.style.height = Math.random() * 3 + 3 + 'px'; // Varied sizes
                droplet.style.backgroundColor = 'rgba(135, 206, 250, 0.9)';
                droplet.style.borderRadius = '50%';

                // Randomize starting position along the stream
                const streamProgress = Math.random();
                const startY = beakerRect.top + 20 + offsetY + streamProgress * (streamHeight * 0.3);

                droplet.style.top = startY + 'px';
                droplet.style.left = (beakerRect.left + beakerRect.width - 15 + offsetX + Math.random() * 5 - 2.5) + 'px';
                droplet.style.zIndex = '21';
                document.body.appendChild(droplet);

                // Animate the droplet falling with a slight curve
                gsap.to(droplet, {
                    top: mortarRect.top - 5 + Math.random() * 10,
                    left: (beakerRect.left + beakerRect.width - 15 + offsetX) + 15 + Math.random() * 30 - 15,
                    opacity: 0,
                    duration: 0.6 + Math.random() * 0.4,
                    ease: "power1.in",
                    onComplete: () => {
                        if (document.body.contains(droplet)) {
                            document.body.removeChild(droplet);
                        }
                    }
                });

                // Create splash effect when droplet hits the water
                setTimeout(() => {
                    // Only create splash if water is visible in mortar
                    if (parseFloat(waterInMortar.style.opacity) > 0.1) {
                        createSplashEffect();
                    }
                }, (0.6 + Math.random() * 0.4) * 1000);
            };

            // Create droplets at intervals - more frequent for better effect
            const dropletInterval = setInterval(createWaterDroplet, 50);

            // Create splash effect in the mortar
            const createSplashEffect = () => {
                // Create a tiny splash droplet
                const splash = document.createElement('div');
                splash.style.position = 'absolute';
                splash.style.width = '3px';
                splash.style.height = '3px';
                splash.style.backgroundColor = 'rgba(135, 206, 250, 0.9)';
                splash.style.borderRadius = '50%';

                // Random position within the mortar
                const randomAngle = Math.random() * Math.PI * 2;
                const randomRadius = Math.random() * 20;
                const splashX = 50 + Math.cos(randomAngle) * randomRadius;
                const splashY = 50 + Math.sin(randomAngle) * randomRadius;

                splash.style.top = splashY + '%';
                splash.style.left = splashX + '%';
                splash.style.zIndex = '4';
                splash.style.opacity = '0';
                mortar.appendChild(splash);

                // Animate the splash up and then down
                gsap.to(splash, {
                    y: -5 - Math.random() * 5,
                    opacity: 0.9,
                    duration: 0.2,
                    ease: "power1.out",
                    onComplete: function() {
                        gsap.to(splash, {
                            y: 0,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power1.in",
                            onComplete: function() {
                                if (mortar.contains(splash)) {
                                    mortar.removeChild(splash);
                                }
                            }
                        });
                    }
                });
            };

            // Create ripple effect in the mortar
            const createRippleEffect = () => {
                // Create a ripple element
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.width = '40px';
                ripple.style.height = '40px';
                ripple.style.border = '2px solid rgba(135, 206, 250, 0.7)';
                ripple.style.borderRadius = '50%';
                ripple.style.top = '50%';
                ripple.style.left = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.opacity = '0.8';
                ripple.style.zIndex = '4';
                mortar.appendChild(ripple);

                // Animate the ripple
                gsap.to(ripple, {
                    width: '80px',
                    height: '80px',
                    opacity: 0,
                    duration: 1,
                    onComplete: function() {
                        if (mortar.contains(ripple)) {
                            mortar.removeChild(ripple);
                        }
                    }
                });
            };

            // Create multiple ripples with delays
            for (let i = 0; i < 5; i++) {
                setTimeout(createRippleEffect, i * 500 + 300);
            }

            // Fade out water stream after a delay
            setTimeout(() => {
                gsap.to(waterStream, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        // Safely remove the water stream element if it still exists
                        if (document.body.contains(waterStream)) {
                            document.body.removeChild(waterStream);
                        }
                    }
                });

                // Also clear the droplet interval to ensure no more droplets are created
                clearInterval(dropletInterval);

                // Safely remove the water path element if it still exists
                if (document.body.contains(waterPath)) {
                    document.body.removeChild(waterPath);
                }

                // Create final ripples to show water settling
                for (let i = 0; i < 3; i++) {
                    setTimeout(createRippleEffect, i * 300);
                }
            }, 2500);
        })

        // Reduce water level in beaker
        .to(beakerWater, {
            height: "20px",
            duration: 2,
            ease: "linear"
        }, "-=2.5")

        // Return beaker to original position
        .to(beakerWithWater, {
            rotation: 0,
            x: 0,
            y: 0,
            duration: 1.5,
            ease: "power1.inOut",
            delay: 1
        });
    }

    // Function to move a sample to the mortar
    function moveSampleToMortar(sample) {
        return new Promise((resolve) => {
            // Update instruction
            updateInstruction("Instruction: Moving " + sample.id + " to mortar...");

            // Disable the sample click
            sample.style.pointerEvents = 'none';
            sample.style.cursor = 'default';

            // Create a timeline for the animation
            const tl = gsap.timeline();

            // First, lift the sample up
            tl.to(sample, {
                y: "-20%",
                duration: 1.5,
                ease: "power2.out"
            });

            // After lifting, move to mortar
            tl.add(() => {
                // Get positions
                const sampleRect = sample.getBoundingClientRect();
                const mortarRect = mortar.getBoundingClientRect();

                // Calculate distance
                const xDistance = mortarRect.left - sampleRect.left + (mortarRect.width/2 - sampleRect.width/2);
                const yDistance = mortarRect.top - sampleRect.top + (mortarRect.height/2 - sampleRect.height/2);

                // Move to mortar with arc
                gsap.to(sample, {
                    x: xDistance,
                    y: yDistance - 100,
                    scale: 0.5,
                    duration: 1,
                    ease: "power1.out",
                    onComplete: () => {
                        // Drop into mortar
                        gsap.to(sample, {
                            bottom: "0%",
                            scale: 0.1,
                            duration: 0.5,
                            ease: "power1.in",
                            onComplete: function() {
                                // Fade out sample
                                gsap.to(sample, {
                                    opacity: 0,
                                    duration: 1.5,
                                    ease: "steps(5)"
                                });

                                // Create powder particles
                                const powderColor = sample.id.includes('Calamine') ?
                                    'rgba(220, 220, 220, 0.8)' : // White for Calamine
                                    'rgba(210, 180, 140, 0.8)';  // Tan for Bentonite

                                for (let i = 0; i < 20; i++) {
                                    const particle = document.createElement('div');
                                    particle.className = 'powder-particle-' + sample.id;
                                    particle.style.position = 'absolute';
                                    particle.style.width = (Math.random() * 5 + 2) + 'px';
                                    particle.style.height = (Math.random() * 5 + 2) + 'px';
                                    particle.style.backgroundColor = powderColor;
                                    particle.style.borderRadius = '50%';
                                    particle.style.top = (50 + Math.random() * 20 - 10) + '%';
                                    particle.style.left = (50 + Math.random() * 20 - 10) + '%';
                                    particle.style.opacity = '0';
                                    particle.style.zIndex = '4';
                                    mortar.appendChild(particle);

                                    // Animate particle
                                    gsap.to(particle, {
                                        opacity: 0.8,
                                        duration: 0.5,
                                        delay: Math.random() * 0.5
                                    });
                                }

                                // Add active class to mortar
                                if (!mortar.classList.contains('active')) {
                                    mortar.classList.add('active');
                                }

                                // Update instruction
                                updateInstruction("Instruction: Added " + sample.id + " to mortar");

                                // Mark sample as added
                                if (sample.id === 'Calamine1') {
                                    calamine1Added = true;
                                } else if (sample.id === 'Calamine2') {
                                    calamine2Added = true;
                                } else if (sample.id === 'Bentonite5') {
                                    bentonite5Added = true;
                                }

                                // Resolve the promise after a delay
                                setTimeout(() => {
                                    resolve();
                                }, 2000);
                            }
                        });
                    }
                });
            }, "+=0.1");
        });
    }

    // Function to crush powders in mortar
    function crushPowders() {
        return new Promise((resolve) => {
            // Update instruction
            updateInstruction("Instruction: Crushing powders in mortar...");

            // Determine which crushing animation to use based on which samples have been added
            if (calamine1Added && !calamine2Added && !bentonite5Added) {
                // If only Calamine1 has been added, use first crushing animation
                animatePestleCrushing();
            } else {
                // For subsequent crushings, use second crushing animation
                animateSecondCrushing();
            }

            // Resolve after animation completes
            setTimeout(() => {
                resolve();
            }, 5000); // Adjust time based on crushing animation duration
        });
    }

    // Function to handle Calamine1 click
    async function handleCalamine1Click() {
        // Remove click event
        sample1.removeEventListener('click', handleCalamine1Click);

        // Remove any visual cues
        sample1.style.boxShadow = 'none';
        gsap.killTweensOf(sample1, {boxShadow: true});

        // Remove any added label
        const label = sample1.querySelector('div');
        if (label) {
            sample1.removeChild(label);
        }

        // Move sample to mortar
        await moveSampleToMortar(sample1);

        // Crush the powder
        await crushPowders();

        // Mark Calamine1 as added
        calamine1Added = true;

        // Update instruction
        updateInstruction("Instruction: Adding water to create paste in the mortar...");

        // Add water to mortar to create paste
        await addWaterToMortarForPaste();

        // Update instruction for adding more water
        updateInstruction("Instruction: Adding more water to dilute the paste...");

        // Add more water to mortar to create a more diluted paste
        await addMoreWaterToMortarForPaste();

        // Make mortar clickable to pour into beaker1
        makeMortarClickableForBeaker1();
    }

    // Function to add more water to mortar to create a more diluted paste
    async function addMoreWaterToMortarForPaste() {
        return new Promise((resolve) => {
            // Get existing water in mortar
            const existingWater = mortar.querySelector('.water-in-mortar');

            // If there's no existing water element, create one
            if (!existingWater) {
                const waterInMortar = document.createElement('div');
                waterInMortar.className = 'water-in-mortar';
                waterInMortar.style.position = 'absolute';
                waterInMortar.style.width = '80px';
                waterInMortar.style.height = '15px';
                waterInMortar.style.backgroundColor = 'rgba(135, 206, 250, 0.5)';
                waterInMortar.style.borderRadius = '50%';
                waterInMortar.style.top = '50%';
                waterInMortar.style.left = '50%';
                waterInMortar.style.transform = 'translate(-50%, -50%)';
                waterInMortar.style.opacity = '0.7';
                mortar.appendChild(waterInMortar);

                // Gradually increase the water level and make it more transparent
                gsap.to(waterInMortar, {
                    height: '25px',
                    backgroundColor: 'rgba(135, 206, 250, 0.4)',
                    opacity: 0.9,
                    duration: 2.5,
                    ease: "power1.inOut"
                });
            } else {
                // If water element exists, make it more diluted (more transparent)
                gsap.to(existingWater, {
                    height: '25px',
                    backgroundColor: 'rgba(135, 206, 250, 0.4)',
                    opacity: 0.9,
                    duration: 2.5,
                    ease: "power1.inOut"
                });
            }

            // Create water droplet animation
            const createWaterDroplet = () => {
                const droplet = document.createElement('div');
                droplet.style.position = 'absolute';
                droplet.style.width = '10px';
                droplet.style.height = '15px';
                droplet.style.backgroundColor = 'rgba(135, 206, 250, 0.7)';
                droplet.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
                droplet.style.top = '-30px';
                droplet.style.left = '50%';
                droplet.style.transform = 'translateX(-50%)';
                droplet.style.opacity = '0.9';
                droplet.style.zIndex = '5';
                mortar.appendChild(droplet);

                // Animate the droplet falling into the mortar
                gsap.to(droplet, {
                    top: '40%',
                    opacity: 0,
                    duration: 0.7,
                    ease: "power1.in",
                    onComplete: function() {
                        if (mortar.contains(droplet)) {
                            mortar.removeChild(droplet);
                        }
                    }
                });
            };

            // Create multiple droplets with delays
            for (let i = 0; i < 8; i++) {
                setTimeout(createWaterDroplet, i * 300);
            }

            // Create ripple effect in the mortar
            const createRippleEffect = () => {
                // Create a ripple element
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.width = '30px';
                ripple.style.height = '30px';
                ripple.style.border = '2px solid rgba(135, 206, 250, 0.5)';
                ripple.style.borderRadius = '50%';
                ripple.style.top = '50%';
                ripple.style.left = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.opacity = '0.6';
                ripple.style.zIndex = '4';
                mortar.appendChild(ripple);

                // Animate the ripple
                gsap.to(ripple, {
                    width: '70px',
                    height: '70px',
                    opacity: 0,
                    duration: 1,
                    onComplete: function() {
                        if (mortar.contains(ripple)) {
                            mortar.removeChild(ripple);
                        }
                    }
                });
            };

            // Create multiple ripples with delays
            for (let i = 0; i < 6; i++) {
                setTimeout(createRippleEffect, i * 400 + 300);
            }

            // Resolve after animation completes
            setTimeout(() => {
                updateInstruction("Instruction: Diluted paste is ready!");
                resolve();
            }, 3500);
        });
    }

    // Function to make Calamine2 clickable
    function makeCalamine2Clickable() {
        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on Calamine2 (second powder) to add it to the mortar");

        // Add stronger visual cue - pulsing animation
        gsap.to(sample2, {
            scale: 1.2,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        sample2.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.7)';
        gsap.to(sample2, {
            boxShadow: '0 0 25px rgba(255, 255, 0, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        sample2.style.cursor = 'pointer';
        sample2.style.pointerEvents = 'auto';
        sample2.addEventListener('click', handleCalamine2Click);

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        sample2.appendChild(label);
    }

    // Function to handle Calamine2 click
    async function handleCalamine2Click() {
        // Remove click event
        sample2.removeEventListener('click', handleCalamine2Click);

        // Remove glow effect and label
        sample2.style.boxShadow = 'none';
        gsap.killTweensOf(sample2, {boxShadow: true});

        // Remove any added label
        const label = sample2.querySelector('div');
        if (label) {
            sample2.removeChild(label);
        }

        // Move sample to mortar
        await moveSampleToMortar(sample2);

        // Crush the powder
        await crushPowders();

        // Mark Calamine2 as added
        calamine2Added = true;

        // Update instruction
        updateInstruction("Instruction: Adding water to create paste in the mortar...");

        // Add water to mortar to create paste
        await addWaterToMortarForPaste();

        // Update instruction
        updateInstruction("Instruction: Now add Bentonite5 to the paste...");

        // Make Bentonite5 clickable
        makeBentonite5Clickable();
    }

    // Function to make Bentonite5 clickable
    function makeBentonite5Clickable() {
        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on Bentonite5 (third powder) to add it to the mortar");

        // Add stronger visual cue - pulsing animation
        gsap.to(sample3, {
            scale: 1.2,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        sample3.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.7)';
        gsap.to(sample3, {
            boxShadow: '0 0 25px rgba(255, 255, 0, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        sample3.style.cursor = 'pointer';
        sample3.style.pointerEvents = 'auto';
        sample3.addEventListener('click', handleBentonite5Click);

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        sample3.appendChild(label);
    }

    // Function to handle Bentonite5 click
    async function handleBentonite5Click() {
        // Remove click event
        sample3.removeEventListener('click', handleBentonite5Click);

        // Remove glow effect and label
        sample3.style.boxShadow = 'none';
        gsap.killTweensOf(sample3, {boxShadow: true});

        // Remove any added label
        const label = sample3.querySelector('div');
        if (label) {
            sample3.removeChild(label);
        }

        // Move sample to mortar
        await moveSampleToMortar(sample3);

        // Crush the powder
        await crushPowders();

        // Mark Bentonite5 as added
        bentonite5Added = true;

        // Check if Calamine2 has been added (which should be true at this point)
        if (calamine2Added) {
            // Update instruction
            updateInstruction("Instruction: Adding more water to dilute the paste...");

            // Add more water to mortar to create a more diluted paste
            await addMoreWaterToMortarForPaste();

            // Make mortar clickable to pour into beaker2
            makeMortarClickableForBeaker2();
        } else if (calamine1Added) {
            // Update instruction
            updateInstruction("Instruction: Adding water to create paste in the mortar...");

            // Add water to mortar to create paste
            await addWaterToMortarForPaste();

            // Make mortar clickable to pour into beaker1
            makeMortarClickableForBeaker1();
        } else {
            // Make water beaker clickable
            makeWaterBeakerClickable();
        }
    }

    // Function to add water to mortar to create paste
    async function addWaterToMortarForPaste() {
        return new Promise((resolve) => {
            // Create water in mortar
            const waterInMortar = document.createElement('div');
            waterInMortar.className = 'water-in-mortar';
            waterInMortar.style.position = 'absolute';
            waterInMortar.style.width = '80px';
            waterInMortar.style.height = '0px';
            waterInMortar.style.backgroundColor = 'rgba(135, 206, 250, 0.6)';
            waterInMortar.style.borderRadius = '50%';
            waterInMortar.style.top = '50%';
            waterInMortar.style.left = '50%';
            waterInMortar.style.transform = 'translate(-50%, -50%)';
            waterInMortar.style.opacity = '0';
            mortar.appendChild(waterInMortar);

            // Gradually increase the water level in the mortar
            gsap.to(waterInMortar, {
                height: '20px',
                opacity: 0.8,
                duration: 2.5,
                ease: "power1.inOut"
            });

            // Create ripple effect in the mortar
            const createRippleEffect = () => {
                // Create a ripple element
                const ripple = document.createElement('div');
                ripple.style.position = 'absolute';
                ripple.style.width = '40px';
                ripple.style.height = '40px';
                ripple.style.border = '2px solid rgba(135, 206, 250, 0.7)';
                ripple.style.borderRadius = '50%';
                ripple.style.top = '50%';
                ripple.style.left = '50%';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.opacity = '0.8';
                ripple.style.zIndex = '4';
                mortar.appendChild(ripple);

                // Animate the ripple
                gsap.to(ripple, {
                    width: '80px',
                    height: '80px',
                    opacity: 0,
                    duration: 1,
                    onComplete: function() {
                        if (mortar.contains(ripple)) {
                            mortar.removeChild(ripple);
                        }
                    }
                });
            };

            // Create multiple ripples with delays
            for (let i = 0; i < 5; i++) {
                setTimeout(createRippleEffect, i * 500 + 300);
            }

            // Resolve after animation completes
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }

    // Function to make mortar clickable to pour into beaker1
    function makeMortarClickableForBeaker1() {
        // Update instruction
        updateInstruction("Instruction: Paste is ready! Click on the mortar to pour it into beaker1");

        // Add stronger visual cue - pulsing animation
        gsap.to(mortar, {
            scale: 1.1,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add a glow effect to the mortar
        mortar.style.boxShadow = '0 0 15px rgba(135, 206, 250, 0.7)';

        // Animate the glow effect
        gsap.to(mortar, {
            boxShadow: '0 0 25px rgba(135, 206, 250, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
        });

        // Make mortar clickable
        mortar.style.cursor = 'pointer';
        mortar.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-30px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(135, 206, 250, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        mortar.appendChild(label);

        // Remove old click event listener if exists
        mortar.removeEventListener('click', handleMortarClick);

        // Add new click event to mortar
        mortar.addEventListener('click', handleMortarClickForBeaker1);
    }

    // Function to make mortar clickable to pour into beaker3
    function makeMortarClickableForBeaker3() {
        // Update instruction
        updateInstruction("Instruction: Paste is ready! Click on the mortar to pour it into beaker3");

        // Add stronger visual cue - pulsing animation
        gsap.to(mortar, {
            scale: 1.1,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add a glow effect to the mortar
        mortar.style.boxShadow = '0 0 15px rgba(135, 206, 250, 0.7)';

        // Animate the glow effect
        gsap.to(mortar, {
            boxShadow: '0 0 25px rgba(135, 206, 250, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
        });

        // Make mortar clickable
        mortar.style.cursor = 'pointer';
        mortar.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-30px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(135, 206, 250, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        mortar.appendChild(label);

        // Remove old click event listeners if they exist
        mortar.removeEventListener('click', handleMortarClick);
        mortar.removeEventListener('click', handleMortarClickForBeaker1);
        mortar.removeEventListener('click', handleMortarClickForBeaker2);

        // Add new click event to mortar
        mortar.addEventListener('click', handleMortarClickForBeaker3);
    }

    // Function to handle mortar click for pouring into beaker3
    function handleMortarClickForBeaker3() {
        // Disable further clicks
        mortar.removeEventListener('click', handleMortarClickForBeaker3);
        mortar.style.cursor = 'default';

        // Remove glow effect and label
        mortar.style.boxShadow = 'none';
        gsap.killTweensOf(mortar, {boxShadow: true});

        // Remove any added label
        const label = mortar.querySelector('div');
        if (label) {
            mortar.removeChild(label);
        }

        // Update instruction
        updateInstruction("Instruction: Lifting mortar to pour paste into beaker3...");

        // Transfer dispersion to beaker3
        transferDispersionToBeaker3();
    }

    // Function to transfer the dispersion from mortar to beaker3
    function transferDispersionToBeaker3() {
        // Get the beaker3 element
        const targetBeaker = document.getElementById('beaker3');

        // Get the positions for accurate animation
        const mortarRect = mortar.getBoundingClientRect();
        const targetBeakerRect = targetBeaker.getBoundingClientRect();

        // Create a dispersion element inside the mortar (to represent the contents)
        const mortarContents = document.createElement('div');
        mortarContents.className = 'mortar-contents';
        mortarContents.style.position = 'absolute';
        mortarContents.style.width = '80px';
        mortarContents.style.height = '20px';
        mortarContents.style.backgroundColor = 'rgba(200, 200, 255, 0.7)';
        mortarContents.style.borderRadius = '50%';
        mortarContents.style.top = '50%';
        mortarContents.style.left = '50%';
        mortarContents.style.transform = 'translate(-50%, -50%)';
        mortarContents.style.zIndex = '3';
        mortar.appendChild(mortarContents);

        // Update instruction
        updateInstruction("Instruction: Lifting mortar with dispersion from the bottom...");

        // Create a timeline for the transfer animation
        const transferTl = gsap.timeline({
            onComplete: function() {
                // After transfer animation completes, show the rinse prompt
                showRinsePrompt();
            }
        });

        // First add a slight downward movement to emphasize lifting from the bottom
        transferTl.to(mortar, {
            y: 10, // Slight downward movement
            duration: 0.3,
            ease: "power1.in"
        })
        // Then lift the mortar up from the bottom with a slight bounce effect
        .to(mortar, {
            y: -100, // Move up vertically more
            duration: 1.5,
            ease: "back.out(1.1)" // Add a slight bounce effect
        })

        // Update instruction for moving to beaker
        .call(() => {
            updateInstruction("Instruction: Moving mortar to pour dispersion into beaker3...");
        })

        // Move it horizontally to position above the beaker3
        .to(mortar, {
            x: targetBeakerRect.left - mortarRect.left + (targetBeakerRect.width/2 - mortarRect.width/2),
            duration: 1.5,
            ease: "power2.inOut"
        })

        // Update instruction for pouring
        .call(() => {
            updateInstruction("Instruction: Pouring dispersion from mortar into beaker3...");
        })

        // Tilt the mortar to pour the contents - more dramatic tilt
        .to(mortar, {
            rotation: 60, // More tilt for more dramatic pouring
            transformOrigin: "center bottom",
            duration: 1.2,
            ease: "power2.inOut"
        })

        // Create simplified pouring animation
        .call(() => {
            // Get the mortar contents (dispersion)
            const mortarContents = mortar.querySelector('.smooth-dispersion');

            // Hide the contents in the mortar
            if (mortarContents) {
                gsap.to(mortarContents, {
                    opacity: 0,
                    duration: 0.5
                });
            }

            // Create simple liquid stream element
            const liquidStream = document.createElement('div');
            liquidStream.className = 'liquid-transfer-animation';
            liquidStream.style.position = 'absolute';

            // Calculate position based on the mortar's rotation (60 degrees)
            const angleInRadians = 60 * Math.PI / 180; // Convert 60 degrees to radians
            const offsetX = Math.cos(angleInRadians) * 30; // X offset based on angle
            const offsetY = Math.sin(angleInRadians) * 30; // Y offset based on angle

            // Position the stream at the edge of the tilted mortar
            liquidStream.style.top = (mortarRect.top - 100 + mortarRect.height/2 + offsetY) + 'px';
            liquidStream.style.left = (mortarRect.left + mortarRect.width - 20 + offsetX) + 'px';
            liquidStream.style.zIndex = '8';
            liquidStream.style.opacity = '0';
            liquidStream.style.backgroundColor = 'rgba(200, 200, 255, 0.8)'; // Match dispersion color
            liquidStream.style.width = '10px'; // Wider for better visibility
            liquidStream.style.borderRadius = '5px';
            document.body.appendChild(liquidStream);

            // Animate liquid stream
            gsap.to(liquidStream, {
                opacity: 0.9,
                height: targetBeakerRect.top - (mortarRect.top - 100) - 20,
                duration: 0.5
            });

            // Create dispersion in beaker
            const beakerDispersion = document.createElement('div');
            beakerDispersion.style.position = 'absolute';
            beakerDispersion.style.width = '55px';
            beakerDispersion.style.height = '0px'; // Start with 0 height and animate up
            beakerDispersion.style.backgroundColor = 'rgba(200, 200, 255, 0.8)';
            beakerDispersion.style.borderRadius = '0 0 10px 10px';
            beakerDispersion.style.bottom = '16%';
            beakerDispersion.style.left = '50%';
            beakerDispersion.style.transform = 'translateX(-50%)';
            beakerDispersion.style.opacity = '0.8';
            beakerDispersion.style.zIndex = '2';
            targetBeaker.appendChild(beakerDispersion);

            // Gradually increase the height of the dispersion in the beaker
            gsap.to(beakerDispersion, {
                height: '60px',
                duration: 2,
                ease: "power1.inOut"
            });

            // Fade out liquid stream after a delay
            setTimeout(() => {
                gsap.to(liquidStream, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        if (document.body.contains(liquidStream)) {
                            document.body.removeChild(liquidStream);
                        }
                    }
                });
            }, 2000);
        })

        // Return mortar to original position with a simpler animation
        .to(mortar, {
            rotation: 0,
            duration: 0.8,
            ease: "power1.inOut"
        })
        .to(mortar, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
            onComplete: function() {
                // Remove the contents element from the mortar if it exists
                const mortarContents = mortar.querySelector('.mortar-contents');
                if (mortarContents && mortar.contains(mortarContents)) {
                    mortar.removeChild(mortarContents);
                }

                // Remove the glow effect from the mortar
                mortar.style.boxShadow = 'none';
                gsap.killTweensOf(mortar, {boxShadow: true});
            }
        });
    }

    // Function to make mortar clickable to pour into beaker2
    function makeMortarClickableForBeaker2() {
        // Update instruction
        updateInstruction("Instruction: Paste is ready! Click on the mortar to pour it into beaker2");

        // Add stronger visual cue - pulsing animation
        gsap.to(mortar, {
            scale: 1.1,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add a glow effect to the mortar
        mortar.style.boxShadow = '0 0 15px rgba(135, 206, 250, 0.7)';

        // Animate the glow effect
        gsap.to(mortar, {
            boxShadow: '0 0 25px rgba(135, 206, 250, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
        });

        // Make mortar clickable
        mortar.style.cursor = 'pointer';
        mortar.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-30px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(135, 206, 250, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        mortar.appendChild(label);

        // Remove old click event listeners if they exist
        mortar.removeEventListener('click', handleMortarClick);
        mortar.removeEventListener('click', handleMortarClickForBeaker1);

        // Add new click event to mortar
        mortar.addEventListener('click', handleMortarClickForBeaker2);
    }

    // Function to handle mortar click for pouring into beaker2
    function handleMortarClickForBeaker2() {
        // Disable further clicks
        mortar.removeEventListener('click', handleMortarClickForBeaker2);
        mortar.style.cursor = 'default';

        // Remove glow effect and label
        mortar.style.boxShadow = 'none';
        gsap.killTweensOf(mortar, {boxShadow: true});

        // Remove any added label
        const label = mortar.querySelector('div');
        if (label) {
            mortar.removeChild(label);
        }

        // Update instruction
        updateInstruction("Instruction: Lifting mortar to pour paste into beaker2...");

        // Transfer dispersion to beaker2
        transferDispersionToBeaker();
    }

    // Function to make water beaker clickable
    function makeWaterBeakerClickable() {
        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on the water beaker to add water to the mortar");

        // Get water beaker
        const beakerWithWater = document.querySelector('.beaker-near-cylinder');

        // Add stronger visual cue - pulsing animation
        gsap.to(beakerWithWater, {
            scale: 1.2,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        beakerWithWater.style.boxShadow = '0 0 15px rgba(0, 191, 255, 0.7)'; // Blue glow for water
        gsap.to(beakerWithWater, {
            boxShadow: '0 0 25px rgba(0, 191, 255, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        beakerWithWater.style.cursor = 'pointer';
        beakerWithWater.style.pointerEvents = 'auto';
        beakerWithWater.addEventListener('click', handleWaterBeakerClick);

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(0, 191, 255, 0.8)'; // Blue for water
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        beakerWithWater.appendChild(label);
    }

    // Start button click event to begin the animation sequence
    startButton.addEventListener('click', () => {
        // Skip if button is disabled
        if (startButton.hasAttribute('disabled')) return;

        // Check if this is the first click (Start) or subsequent clicks (Next Step)
        if (startButton.textContent === "Start") {
            // Stop the pulsing animation on the Start button
            gsap.killTweensOf(startButton);
            gsap.set(startButton, { scale: 1 });

            // We'll lift the sample when it's clicked, not now

            // Update instruction to tell user to click on Calamine1 powder
            updateInstruction(instructionTranslations[currentLanguage].clickSample);

            // Change button text to "Next" and disable it until pestle animation is complete
            startButton.textContent = "Next";
            startButton.setAttribute('disabled', 'true');
            startButton.style.opacity = '0.5';
            startButton.style.cursor = 'not-allowed';

            // Add visual cue to sample1 to indicate it's clickable
            gsap.to(sample1, {
                scale: 1.1,
                repeat: 2,
                yoyo: true,
                duration: 0.5,
                ease: "power1.inOut"
            });

            // Update instruction with clearer text
            updateInstruction("Instruction: Click on Calamine1 (first powder) to add it to the mortar");

            // Add stronger visual cue - pulsing animation
            gsap.to(sample1, {
                scale: 1.2,
                repeat: 3,
                yoyo: true,
                duration: 0.6,
                ease: "power1.inOut"
            });

            // Add glow effect to make it more noticeable
            sample1.style.boxShadow = '0 0 15px rgba(255, 255, 0, 0.7)';
            gsap.to(sample1, {
                boxShadow: '0 0 25px rgba(255, 255, 0, 0.9)',
                repeat: -1,
                yoyo: true,
                duration: 1.2,
                ease: "sine.inOut"
            });

            // Add click event to sample1
            sample1.addEventListener('click', handleCalamine1Click);

            // Add cursor pointer style to make it clear it's clickable
            sample1.style.cursor = 'pointer';
            sample1.style.pointerEvents = 'auto';

            // Add a label to make it clearer
            const label = document.createElement('div');
            label.textContent = "Click me!";
            label.style.position = 'absolute';
            label.style.top = '-20px';
            label.style.left = '50%';
            label.style.transform = 'translateX(-50%)';
            label.style.backgroundColor = 'rgba(255, 255, 0, 0.8)';
            label.style.padding = '3px 8px';
            label.style.borderRadius = '5px';
            label.style.fontSize = '12px';
            label.style.fontWeight = 'bold';
            label.style.zIndex = '10';
            sample1.appendChild(label);
        } else if (startButton.textContent === "Next") {
            // Disable the Next button during animation
            startButton.setAttribute('disabled', 'true');
            startButton.style.opacity = '0.5';
            startButton.style.cursor = 'not-allowed';

            // Check which step we're on based on the instruction text
            const currentInstruction = instructionElement.textContent;

            if (currentInstruction.includes("Click Next to crush the powder again")) {
                // Update instruction for second crushing
                updateInstruction(instructionTranslations[currentLanguage].crushingAgain);

                // Animate second crushing
                animateSecondCrushing();
            } else if (currentInstruction.includes("Click Next to lift the beaker")) {
                // Update instruction for water addition
                updateInstruction(instructionTranslations[currentLanguage].liftingBeaker);

                // Create water droplet animation
                addWaterToMortar();
            } else if (currentInstruction.includes("transfer the dispersion to a beaker") || currentInstruction.includes("Click on the mortar to lift it")) {
                // This step is now handled by clicking directly on the mortar
                // Just update the instruction to make it clearer
                updateInstruction("Instruction: Click directly on the mortar to lift it and pour the dispersion into beaker2.");

                // Add visual cue to the mortar again
                gsap.to(mortar, {
                    scale: 1.05,
                    repeat: 2,
                    yoyo: true,
                    duration: 0.7,
                    ease: "power1.inOut"
                });

                // Re-enable the button
                startButton.removeAttribute('disabled');
                startButton.style.opacity = '1';
                startButton.style.cursor = 'pointer';
            } else if (currentInstruction.includes("rinse the mortar and pestle")) {
                // Update instruction for rinsing
                updateInstruction(instructionTranslations[currentLanguage].rinsingMortar);

                // Rinse mortar and pestle
                rinseMortarAndPestle();
            }


        }
    });

    // Function to show beaker clickable after pouring mortar into beaker
    function showRinsePrompt() {
        // Get the last active beaker (beaker1, beaker2, beaker3, or beaker4)
        let activeBeaker;
        const beaker1 = document.getElementById('beaker1');
        const beaker2 = document.getElementById('beaker2');
        const beaker3 = document.getElementById('beaker3');
        const beaker4 = document.getElementById('beaker4');

        // Check which beaker has content (by looking for a child div)
        if (beaker4 && beaker4.querySelector('div')) {
            activeBeaker = beaker4;
        } else if (beaker3 && beaker3.querySelector('div')) {
            activeBeaker = beaker3;
        } else if (beaker2 && beaker2.querySelector('div')) {
            activeBeaker = beaker2;
        } else {
            activeBeaker = beaker1;
        }

        // Update instruction with clearer text
        updateInstruction("Instruction: Now click on the beaker to pour its contents into the measuring cylinder");

        // Add stronger visual cue - pulsing animation
        gsap.to(activeBeaker, {
            scale: 1.1,
            repeat: 3,
            yoyo: true,
            duration: 0.6,
            ease: "power1.inOut"
        });

        // Add glow effect to make it more noticeable
        activeBeaker.style.boxShadow = '0 0 15px rgba(135, 206, 250, 0.7)';
        gsap.to(activeBeaker, {
            boxShadow: '0 0 25px rgba(135, 206, 250, 0.9)',
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut"
        });

        // Make clickable
        activeBeaker.style.cursor = 'pointer';
        activeBeaker.style.pointerEvents = 'auto';

        // Add a label to make it clearer
        const label = document.createElement('div');
        label.textContent = "Click me!";
        label.style.position = 'absolute';
        label.style.top = '-20px';
        label.style.left = '50%';
        label.style.transform = 'translateX(-50%)';
        label.style.backgroundColor = 'rgba(135, 206, 250, 0.8)';
        label.style.padding = '3px 8px';
        label.style.borderRadius = '5px';
        label.style.fontSize = '12px';
        label.style.fontWeight = 'bold';
        label.style.zIndex = '10';
        activeBeaker.appendChild(label);

        // Add click event to the active beaker
        activeBeaker.addEventListener('click', function() {
            // Remove click event
            activeBeaker.removeEventListener('click', arguments.callee);

            // Remove glow effect and label
            activeBeaker.style.boxShadow = 'none';
            gsap.killTweensOf(activeBeaker, {boxShadow: true});

            // Remove any added label
            const label = activeBeaker.querySelector('div[style*="Click me"]');
            if (label) {
                activeBeaker.removeChild(label);
            }

            // Pour beaker contents into measuring cylinder
            pourBeakerIntoMeasuringCylinder(activeBeaker);
        });
    }

    // Function to pour beaker contents into measuring cylinder
    function pourBeakerIntoMeasuringCylinder(beaker) {
        // Get the measuring cylinder element
        const measuringCylinder = document.querySelector('.measuring-cylinder');

        // Get the positions for accurate animation
        const beakerRect = beaker.getBoundingClientRect();
        const cylinderRect = measuringCylinder.getBoundingClientRect();

        // Get the beaker contents (dispersion)
        const beakerContents = beaker.querySelector('div');

        // Update instruction
        updateInstruction("Instruction: Lifting beaker to pour contents into measuring cylinder...");

        // Create a timeline for the transfer animation
        const transferTl = gsap.timeline({
            onComplete: function() {
                // After transfer animation completes, show the final result
                showFinalResult();
            }
        });

        // First add a slight downward movement to emphasize lifting from the bottom
        transferTl.to(beaker, {
            y: 10, // Slight downward movement
            duration: 0.3,
            ease: "power1.in"
        })
        // Then lift the beaker up from the bottom with a slight bounce effect
        .to(beaker, {
            y: -100, // Move up vertically more
            duration: 1.5,
            ease: "back.out(1.1)" // Add a slight bounce effect
        })

        // Update instruction for moving to measuring cylinder
        .call(() => {
            updateInstruction("Instruction: Moving beaker to pour contents into measuring cylinder...");
        })

        // Move it horizontally to position above the measuring cylinder
        .to(beaker, {
            x: cylinderRect.left - beakerRect.left + (cylinderRect.width/2 - beakerRect.width/2),
            duration: 1.5,
            ease: "power2.inOut"
        })

        // Update instruction for pouring
        .call(() => {
            updateInstruction("Instruction: Pouring contents from beaker into measuring cylinder...");
        })

        // Tilt the beaker to pour the contents
        .to(beaker, {
            rotation: 60, // Tilt for pouring
            transformOrigin: "center bottom",
            duration: 1.2,
            ease: "power2.inOut"
        })

        // Create pouring animation
        .call(() => {
            // Hide the contents in the beaker
            if (beakerContents) {
                gsap.to(beakerContents, {
                    opacity: 0,
                    duration: 0.5
                });
            }

            // Create liquid stream element
            const liquidStream = document.createElement('div');
            liquidStream.className = 'liquid-transfer-animation';
            liquidStream.style.position = 'absolute';

            // Calculate position based on the beaker's rotation (60 degrees)
            const angleInRadians = 60 * Math.PI / 180; // Convert 60 degrees to radians
            const offsetX = Math.cos(angleInRadians) * 30; // X offset based on angle
            const offsetY = Math.sin(angleInRadians) * 30; // Y offset based on angle

            // Position the stream at the edge of the tilted beaker
            liquidStream.style.top = (beakerRect.top - 100 + beakerRect.height/2 + offsetY) + 'px';
            liquidStream.style.left = (beakerRect.left + beakerRect.width - 20 + offsetX) + 'px';
            liquidStream.style.zIndex = '8';
            liquidStream.style.opacity = '0';
            liquidStream.style.backgroundColor = 'rgba(200, 200, 255, 0.8)'; // Match dispersion color
            liquidStream.style.width = '10px'; // Wider for better visibility
            liquidStream.style.borderRadius = '5px';
            document.body.appendChild(liquidStream);

            // Animate liquid stream
            gsap.to(liquidStream, {
                opacity: 0.9,
                height: cylinderRect.top - (beakerRect.top - 100) - 20,
                duration: 0.5
            });

            // Create dispersion in measuring cylinder
            const cylinderContents = document.createElement('div');
            cylinderContents.style.position = 'absolute';
            cylinderContents.style.width = '15px'; // Half width for cylinder (50% of original 30px)
            cylinderContents.style.height = '0px'; // Start with 0 height and animate up
            cylinderContents.style.backgroundColor = 'rgba(200, 200, 255, 0.8)';
            cylinderContents.style.borderRadius = '0 0 5px 5px';
            cylinderContents.style.bottom = '10%';
            cylinderContents.style.left = '50%';
            cylinderContents.style.transform = 'translateX(-50%)';
            cylinderContents.style.opacity = '0.8';
            cylinderContents.style.zIndex = '2';
            measuringCylinder.appendChild(cylinderContents);

            // Gradually increase the height of the dispersion in the measuring cylinder
            gsap.to(cylinderContents, {
                height: '50px', // Half height in the cylinder (50% of original 100px)
                duration: 2,
                ease: "power1.inOut"
            });

            // Fade out liquid stream after a delay
            setTimeout(() => {
                gsap.to(liquidStream, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        if (document.body.contains(liquidStream)) {
                            document.body.removeChild(liquidStream);
                        }
                    }
                });
            }, 2000);
        })

        // Return beaker to original position
        .to(beaker, {
            rotation: 0,
            duration: 0.8,
            ease: "power1.inOut"
        })
        .to(beaker, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power1.inOut",
            onComplete: function() {
                // Remove the contents element from the beaker if it exists
                if (beakerContents && beaker.contains(beakerContents)) {
                    beaker.removeChild(beakerContents);
                }

                // Remove the glow effect from the beaker
                beaker.style.boxShadow = 'none';
                gsap.killTweensOf(beaker, {boxShadow: true});
            }
        });
    }
});
