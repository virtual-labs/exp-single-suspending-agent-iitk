let experimentState = {
    firstStep: false,
    secondStep: false,
    thirdStep: false,
    fourthStep: false,
    fifthStep: false,
    sixthStep: false,
    seventhStep: false,
    eighthStep: false,
    ninthStep: false,
    tenthStep: false,
    eleventhStep: false,
    twelvethStep: false,
    thirtheenthStep: false,
    fourteenthStep: false,
    fifteenthStep: false,
    sixteenthStep: false,
    seventeenthStep: false,
    eighteenthStep: false,
    nineteenthStep: false,
    twentiethStep: false,
    twentieonethStep: false,
    twentietwothStep: false,
    twentiethreeStep: false,
    twentiefourthStep: false,
    twentiefifthStep: false,
    
};

// Function to animate the water beaker ...............................
function setupWaterBeaker(dec_height) {
        const Waterbeaker = document.getElementById("beaker1");
        const Water = document.getElementsByClassName("water");
        const Waterfall = document.getElementsByClassName("waterfall");

     const timeline = gsap.timeline();
        timeline.to(Waterbeaker, {
            duration: 1,
            bottom: "40%",
            left: "62%",
            ease: "power1.inOut"
        }).to(Waterbeaker, {
            duration: 1,
            rotate: "-30deg",})
            // .to(Water, {
            // duration: .1,
            // height: "92px",
        .to(Waterfall, {
            duration: .1,   
            opacity: .4,
        }).to(Water, {
            duration: 1,
            height: dec_height,
         }).to(Waterfall, {
            duration: .1,   
            opacity: 0,
        }).to(Waterbeaker, {
            duration: 1,
            rotate: "0deg",
            left: "70%",
            bottom: "20%",
            ease: "power1.inOut"
         });
  }

// Function to animate the pestle ...............................
  function pestleMoving(){
    const pestle = document.getElementsByClassName("pestle");

     const timeline = gsap.timeline();
        timeline.to(pestle[0], {
            duration: 2.5,
            top: "58%",
            left: "57%",
            rotate: "-93deg",
            ease: "power1.inOut"
        }).to(pestle[0], {
            duration: .2,
            top: "60.9%",
            repeat: 20,
            yoyo: true,
        }).to(pestle[0], {
            duration: 1,
            top: "75%",
            left: "59%",
            rotate: "-12deg",
            ease: "power1.inOut",
        });
  }







document.addEventListener("DOMContentLoaded", function() {

    function updateInstructions(message) {
        const instructions = document.getElementsByTagName("h1")[0];

        instructions.textContent = message;
    }

//      firststep is pour the powder into the mortar   

       const betonite3 = document.getElementById("sample7");    
       const Img7 = document.getElementById("sample7Img");

        betonite3.addEventListener("click", function() {

        updateInstructions("click on the bentonite powder to put on the mortar");

        if (experimentState.firstStep) {
            console.log("Betonite3 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }
        const timeline = gsap.timeline();
        timeline.to(betonite3, {
            duration: 2.5,
            bottom: "30%",
            left : "60%",
            ease: "power1.inOut"
        }).to(betonite3, {
            duration: 1, 
            rotate: "-130deg",
            ease: "power1.inOut"
        }).to(Img7,{
            duration: -0.5,
            rotate: "119deg",
            ease: "power1.inOut"
        }).to(Img7,{
            duration: 1,
            left: "-10%",
            top: "-37%",
            opacity: .2,
            display: "none",
            ease: "power1.inOut"
        }).to(betonite3, {
            duration: 1,
            rotate: "0deg",
            left: "30%",
            bottom: "14.5%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.firstStep = true;
                updateInstructions("Now, click on the water beaker to pour water into the mortar.");
            }
    });

        console.log("Betonite3 clicked");
    });





  // second step is to click on the water beaker to pour water into the mortar

    const Waterbeaker = document.getElementById("beaker1");
    let beakerClicked = 0;
       Waterbeaker.addEventListener("click", function() {
       
       

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");
            return; // Stop the function if first step is not completed
        }if (experimentState.secondStep) {
            console.log("Beaker already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }

        if (!experimentState.secondStep){
            beakerClicked ++;
        }
        
        
        if (beakerClicked === 1) {
            setupWaterBeaker("88px");
            console.log("Beaker clicked once");

            experimentState.secondStep = true;
        }
            
        if (beakerClicked === 2) {

            if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");    
            return; // Stop the function if first step is not completed
            }  
            if (!experimentState.thirdStep) {
                updateInstructions("Please grind the mixture with the pestle first.");
                return; // Stop the function if third step is not completed
            }
            if (!experimentState.fourthStep) {   
                updateInstructions("Please pour the mixture into the beaker first.");
                return; // stop the function if fourth step is not completed
            }
            if (!experimentState.fifthStep) {   
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                return; 
            }
            if (!experimentState.sixthStep) {   
                updateInstructions("Please empty the measuring cylinder first.");
                return;
            }
            if (!experimentState.seventhStep) {   
                updateInstructions("Please put calamine powder on the mortar first.");
                return; 
            }
            if (!experimentState.eighthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                return; 
            }
            setupWaterBeaker("81px");
            experimentState.ninthStep = true;
            experimentState.thirdStep = false;
            console.log("Eighth step completed and third step reset to false");
            console.log("Beaker clicked twice");
        }else if (beakerClicked === 3) {   
             if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first."); 
            console.log("first step not completed");   
            return; // Stop the function if first step is not completed
            }  
            if (!experimentState.thirdStep) {
                updateInstructions("Please grind the mixture with the pestle first.");
                console.log("third step not completed");
                return; // Stop the function if third step is not completed
            }
            if (!experimentState.fourthStep) {   
                updateInstructions("Please pour the mixture into the beaker first.");
                console.log("fourth step not completed");
                return; // stop the function if fourth step is not completed
            }
            if (!experimentState.fifthStep) {   
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                console.log("fifth step not completed");
                return; 
            }
            if (!experimentState.sixthStep) {   
                updateInstructions("Please empty the measuring cylinder first.");
                console.log("sixth step not completed");
                return;
            }
            if (!experimentState.seventhStep) {   
                updateInstructions("Please put calamine powder on the mortar first.");
                console.log("seventh step not completed");
                return; 
            }
            if (!experimentState.eighthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                console.log("eighth step not completed");
                return; 
            } 
            if (!experimentState.ninthStep){ 
                updateInstructions("Please pour water into the mortar first.");
                console.log("ninth step not completed");
                return;
            }
            if (!experimentState.tenthStep){     
                updateInstructions("Please grind the mixture with the pestle first.");
                console.log("tenth step not completed");
                return;
            }if (!experimentState.eleventhStep){ 
                updateInstructions("Please pour the mixture into the beaker first.");
                console.log("eleventh step not completed");
                return;
            }if (!experimentState.twelvethStep){
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                console.log("twelveth step not completed");
                return;}
            // if (!experimentState.thirtheenthStep){
            //     updateInstructions("Please empty the measuring cylinder first.");
            //     console.log("thirtheenth step not completed");
            //     return;
            // }
             if (experimentState.fourteenthStep){
                console.log("fourteenth step already completed");
            }
            setupWaterBeaker("74px");
            experimentState.sixteenthStep = true;
            experimentState.thirdStep = false;
            console.log("Beaker clicked thrice");
        }else{  
            if(!experimentState.firstStep){
                updateInstructions("Please pour the powder into the mortar first.");
                console.log("first step not completed");
                return;
            }
            if(!experimentState.thirdStep){ 
                updateInstructions("Please grind the mixture with the pestle first.");
                console.log("third step not completed");
                return;
            }
            if(!experimentState.fourthStep){    
                updateInstructions("Please pour the mixture into the beaker first.");
                console.log("fourth step not completed");
                return;
            }
            if(!experimentState.fifthStep){    
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                console.log("fifth step not completed");
                return;
            }
            if(!experimentState.sixthStep){
                updateInstructions("Please empty the measuring cylinder first.");
                console.log("sixth step not completed");
                return;
            }   
            if(!experimentState.seventhStep){   
                updateInstructions("Please put calamine powder on the mortar first.");  
                console.log("seventh step not completed");
                return;
            }
            if(!experimentState.eighthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                console.log("eighth step not completed");
                return;
            }
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return;
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return;
        }
        if (!experimentState.eleventhStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("eleventh step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.twelvethStep) {
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("twelveth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.fourteenthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("fourteenth step not completed");
            return; // Skip the animation if already clicked
        }  
        if (!experimentState.nineteenthStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("nineteenth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.twentiethStep) {
            updateInstructions("Please click betnonite powder put in mortar");
            return; // Skip the animation if already clicked
        }
         if (experimentState.twentieonethStep) {
            console.log("skip the animation step is true");
            return; // Skip the animation if already clicked
        }

        setupWaterBeaker("67px");
            experimentState.twentieonethStep = true;
            experimentState.thirdStep = false;
            console.log("Beaker clicked thrice");
     }

        experimentState.secondStep = true;
        updateInstructions("Now, click on the pestle to grind the mixture.");
        console.log("Beaker clicked");
    });


    
    
  //third step is to click on the pestle to grind the mixture 

    const pestle = document.getElementsByClassName("pestle");
    let pestleClicked = 0;
    pestle[0].addEventListener("click", function() {
       
        updateInstructions("Pestle clicked, grinding the mixture");
     
         if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first."); 
            return; // Stop the function if second step is not completed
        }
        if (experimentState.thirdStep) {
            console.log("Pestle already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }       

        if (!experimentState.thirdStep){
            pestleClicked++;
        }

        if (pestleClicked === 1) {
            pestleMoving();
            console.log("Pestle clicked once");
        }else if (pestleClicked === 2) {
            if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");    
            return; // Stop the function if first step is not completed
            }  
            if (!experimentState.secondStep) {
                updateInstructions("Please pour water into the mortar first.");
                return; // Stop the function if third step is not completed
            }
            if (!experimentState.fourthStep) {   
                updateInstructions("Please pour the mixture into the beaker first.");
                return; // stop the function if fourth step is not completed
            }
            if (!experimentState.fifthStep) {   
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                return; 
            }
            if (!experimentState.sixthStep) {   
                updateInstructions("Please empty the measuring cylinder first.");
                return;
            }
            if (!experimentState.seventhStep) {   
                updateInstructions("Please put calamine powder on the mortar first.");
                return; 
            }
            if (!experimentState.eighthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                return; 
            }
        
            pestleMoving();

            experimentState.tenthStep = true;
            experimentState.fourthStep = false;
            console.log("Ninth step completed and third step reset to false");
            console.log("Pestle clicked twice");

        }else if (pestleClicked === 3) {
            if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first."); 
            console.log("first step not completed");   
            return; // Stop the function if first step is not completed
            }  
            if (!experimentState.secondStep) {
                updateInstructions("Please grind the mixture with the pestle first.");
                console.log("second step not completed");
                return; // Stop the function if second step is not completed
            }
            if (!experimentState.fourthStep) {   
                updateInstructions("Please pour the mixture into the beaker first.");
                console.log("fourth step not completed");
                return; // stop the function if fourth step is not completed
            }
            if (!experimentState.fifthStep) {   
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                console.log("fifth step not completed");
                return; 
            }
            if (!experimentState.sixthStep) {   
                updateInstructions("Please empty the measuring cylinder first.");
                console.log("sixth step not completed");
                return;
            }
            if (!experimentState.seventhStep) {   
                updateInstructions("Please put calamine powder on the mortar first.");
                console.log("seventh step not completed");
                return; 
            }
            if (!experimentState.eighthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                console.log("eighth step not completed");
                return; 
            } 
            if (!experimentState.ninthStep){ 
                updateInstructions("Please pour water into the mortar first.");
                console.log("ninth step not completed");
                return;
            }
            if (!experimentState.tenthStep){     
                updateInstructions("Please grind the mixture with the pestle first.");
                console.log("tenth step not completed");
                return;
            }if (!experimentState.eleventhStep){ 
                updateInstructions("Please pour the mixture into the beaker first.");
                console.log("eleventh step not completed");
                return;
            }if (!experimentState.twelvethStep){
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                console.log("twelveth step not completed");
                return;}
            // if (!experimentState.thirtheenthStep){
            //     updateInstructions("Please empty the measuring cylinder first.");
            //     console.log("thirtheenth step not completed");
            //     return;
            // } 
            if (!experimentState.fourteenthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                console.log("fourteenth step not completed");
                return;
            }
            // if (!experimentState.fifteenthStep){    
            //     updateInstructions("Please put calamine powder on the mortar first.");
            //     console.log("fifteenth step not completed");
            //     return;
            // }

            pestleMoving();

            experimentState.seventeenthStep = true;
            experimentState.fourthStep = false;
            console.log("Pestle clicked thrice");
        }else{

            if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first."); 
            console.log("first step not completed");   
            return; // Stop the function if first step is not completed
            }  
            if (!experimentState.secondStep) {
                updateInstructions("Please grind the mixture with the pestle first.");
                console.log("second step not completed");
                return; // Stop the function if second step is not completed
            }
            if (!experimentState.fourthStep) {   
                updateInstructions("Please pour the mixture into the beaker first.");
                console.log("fourth step not completed");
                return; // stop the function if fourth step is not completed
            }
            if (!experimentState.fifthStep) {   
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                console.log("fifth step not completed");
                return; 
            }
            if (!experimentState.sixthStep) {   
                updateInstructions("Please empty the measuring cylinder first.");
                console.log("sixth step not completed");
                return;
            }
            if (!experimentState.seventhStep) {   
                updateInstructions("Please put calamine powder on the mortar first.");
                console.log("seventh step not completed");
                return; 
            }
            if (!experimentState.eighthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                console.log("eighth step not completed");
                return; 
            } 
            if (!experimentState.ninthStep){ 
                updateInstructions("Please pour water into the mortar first.");
                console.log("ninth step not completed");
                return;
            }
            if (!experimentState.tenthStep){     
                updateInstructions("Please grind the mixture with the pestle first.");
                console.log("tenth step not completed");
                return;
            }if (!experimentState.eleventhStep){ 
                updateInstructions("Please pour the mixture into the beaker first.");
                console.log("eleventh step not completed");
                return;
            }if (!experimentState.twelvethStep){
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                console.log("twelveth step not completed");
                return;}
            // if (!experimentState.thirtheenthStep){
            //     updateInstructions("Please empty the measuring cylinder first.");
            //     console.log("thirtheenth step not completed");
            //     return;
            // } 
            if (!experimentState.fourteenthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                console.log("fourteenth step not completed");
                return;
            }
            experimentState.twentietwothStep = true;
            experimentState.fourthStep = false;
            pestleMoving();
            console.log("Pestle clicked more than thrice");
        }
        experimentState.thirdStep = true;
        updateInstructions("Now, click on the mortar to pour the mixture into the beaker.");
        console.log("Pestle clicked");
    });

  //fourth step is to click on the mortar to pour the mixture into the beaker

  const mortal = document.getElementsByClassName("mortal");
  const solpink = document.getElementsByClassName("solutionpink");
  const solyellow = document.getElementById("solutionyellow");
  const innersol = document.getElementById("beaker3Img");
  const innersoly = document.getElementById("beaker4Img");
  const innersolyb5 = document.getElementById("beaker5Img");
  const innersolyb2 = document.getElementById("beaker2Img");
  const solyellowb5 = document.getElementsByClassName("solutionyellowb5");
  const solyellowb2 = document.getElementsByClassName("solutionyellowb2");



  let mortarClicked = 0;

    mortal[0].addEventListener("click", function() {
        updateInstructions("Mortar clicked, pouring the mixture into the beaker");

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");    
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            return; // Stop the function if second step is not completed
        }   
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            return; // Stop the function if third step is not completed
        }
        if (experimentState.fourthStep) {   
            console.log("Mortar already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }

        if (!experimentState.fourthStep){
            mortarClicked ++;
        }

        if (mortarClicked === 1) {  

        const timeline = gsap.timeline();
        timeline.to(mortal[0], {
            duration: 2.5,
            top: "50%",
            left: "13%",
            ease: "power1.inOut"
        }).to(mortal[0], {
            duration: 2,
            rotate: "-45deg",
            ease: "power1.inOut"
        }).to(solpink,{
            duration: 1, 
            opacity: .7,
            left: "13.55%",
            height: "175px",
            top: "58%",   
        }).to(innersol,{
            duration: 1, 
            height: "30px",
            opacity: .7,
        },"<").to(solpink,{
            duration: .01, 
            opacity: 0,
        }).to(mortal[0], {
            duration: 1,
            rotate: "0deg",
            left: "57%",
            top: "70%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.fourthStep = true;
                updateInstructions("Now, click on the beaker to pour the mixture into it.");
            }
        });
        console.log("Mortal clicked once");

        }else if (mortarClicked === 2) {
        const timeline = gsap.timeline();
        timeline.to(mortal[0], {
            duration: 2.5,
            top: "40%",
            left: "27%",
            ease: "power1.inOut"
        }).to(mortal[0], {
            duration: 2,
            rotate: "-45deg",
            ease: "power1.inOut"
        }).to(solyellow,{
            duration: 1, 
            opacity: .7,
            top: "48%",
            left: "27.5%",
            height: "222px",   
        }).to(innersoly,{
            duration: 1, 
            height: "30px",
            opacity: .5,
        },"<").to(solyellow,{
            duration: .01, 
            opacity: 0,
        }).to(mortal[0], {
            duration: 1,
            rotate: "0deg",
            left: "57%",
            top: "70%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.fourthStep = true;
                updateInstructions("Now, click on the beaker to pour the mixture into measuring cylinder.");
            }
        });
        console.log("Mortal clicked twice");
        }else if (mortarClicked === 3) {
            const timeline = gsap.timeline();
        timeline.to(mortal[0], {
            duration: 2.5,
            top: "40%",
            left: "19.5%",
            ease: "power1.inOut"
        }).to(mortal[0], {
            duration: 2,
            rotate: "-45deg",
            ease: "power1.inOut"
        }).to(solyellowb2,{
            duration: 1, 
            opacity: .7,
            top: "48%",
            left: "20%",
            height: "222px",   
        }).to(innersolyb2,{
            duration: 1, 
            height: "30px",
            opacity: .5,
        },"<").to(solyellowb2,{
            duration: .01, 
            opacity: 0,
        }).to(mortal[0], {
            duration: 1,
            rotate: "0deg",
            left: "57%",
            top: "70%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.fourthStep = true;
                experimentState.seventeenthStep = true;    
                updateInstructions("Now, click on the beaker to pour the mixture into measuring cylinder.");
            } 
        });
        console.log("Mortal clicked thrice");
        }else{
        const timeline = gsap.timeline();
        timeline.to(mortal[0], {
            duration: 2.5,
            top: "50%",
            left: "24.5%",
            ease: "power1.inOut"
        }).to(mortal[0], {
            duration: 2,
            rotate: "-45deg",
            ease: "power1.inOut"
        }).to(solyellowb5,{
            duration: 1, 
            opacity: .7,
            top: "58%",
            left: "25%",
            height: "222px",   
        }).to(innersolyb5,{
            duration: 1, 
            height: "30px",
            opacity: .5,
        },"<").to(solyellowb5,{
            duration: .01, 
            opacity: 0,
        }).to(mortal[0], {
            duration: 1,
            rotate: "0deg",
            left: "57%",
            top: "70%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.fourthStep = true;
                experimentState.twentiethreeStep = true;
                updateInstructions("Now, click on the beaker to pour the mixture into measuring cylinder.");
            } 
        });
        console.log("Mortal clicked more than thrice");
        }
    });

 

// fifthStep is to click on the beaker fill measuringCylinder1

const msol = document.getElementById("solutionm1");
const dropsol = document.getElementById("drop-sol-1");
const beaker3 = document.getElementById("beaker3");

    beaker3.addEventListener("click", function() {

    updateInstructions("Beaker clicked, pouring the mixture into the measuring cylinder");

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");    
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            return; // Stop the function if second step is not completed
        }   
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {   
            console.log("please pour the mixture into the beaker first.");
            return; // stop the function if fourth step is not completed
        }
        if (experimentState.fifthStep) {   
            console.log("Beaker already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }
        const timeline = gsap.timeline();
        timeline.to(beaker3, {
            duration: 1,
            bottom: "60%",
            left: "85%",
            ease: "power1.inOut"
        }).to(beaker3, {
            duration: 1,
            rotate: "-60deg",
            ease: "power1.inOut"
        }).to(dropsol, {
            duration: 0.5,
            opacity: .5,
            left: "84%",
            height: "350px",
            top: "36%",   
            ease: "power1.inOut"
        }).to(innersol,{
            duration: 1, 
            height: "0px",
            opacity: 0.9,
        },">").to(msol,{
           duration: 0.5, 
           opacity: 0.7,
           height: "80px",
        }).to(dropsol, {
            duration: 0.01,
            opacity: 0,
        }).to(beaker3, {
            duration: 1,
            bottom: "17%",
            rotate: "0deg",
            left: "10%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.fifthStep = true;
                updateInstructions("Now, click on the measuring cylinder to bring empty it.");
            }
        });
        console.log("Beaker clicked");
    });

// sixthStep is to click measuringCylinder1 to bring empty it

const measuringCylinder1 = document.getElementById("measuringCylinder1");
const measuringCylinder2 = document.getElementById("measuringCylinder2");
const measuringCylinder3 = document.getElementById("measuringCylinder3");
const measuringCylinder4 = document.getElementById("measuringCylinder4");

   measuringCylinder1.addEventListener("click", function() {
    
    updateInstructions("Beaker clicked, pouring the mixture into the measuring cylinder");

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");    
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            return; // Stop the function if second step is not completed
        }   
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {   
            console.log("Please pour the mixture into the beaker first.");
            return; // stop the function if fourth step is not completed
        }
        if (!experimentState.fifthStep) {   
            console.log("Please pour the mixture into the measuring cylinder first.");
            return; // Skip the animation if already clicked
        }
        if (experimentState.sixthStep) {   
            console.log("MeasuringCylinder1 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }

        const timeline = gsap.timeline();
        timeline.to(measuringCylinder1, {
            duration: 1,
            left: "110%",
            ease: "power1.inOut"
        }).to(measuringCylinder2, {
            duration: 1,
            bottom: "20%",
            left: "80%",
            ease: "power1.inOut",
             onComplete: function() {
                experimentState.sixthStep = true;
                updateInstructions("Now, Nextstep: click on calmine powder to put on the mortar.");
            }
        });

        console.log("MeasuringCylinder1 clicked");
    });

// seventh step is to calmine to put on the mortar

const betonite2 = document.getElementById("sample6");
const Img6 = document.getElementById("sample6Img");
const calmine1 = document.getElementById("sample1");
const Img1 = document.getElementById("sample1Img");

calmine1.addEventListener("click", function() {
      
        updateInstructions("Calamine clicked, adding to the mixture");

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");    
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            return; // Stop the function if second step is not completed
        }   
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {   
            updateInstructions("Please pour the mixture into the beaker first.");
            return; // stop the function if fourth step is not completed
        }
        if (!experimentState.fifthStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.sixthStep) {   
            updateInstructions("Please empty the measuring cylinder first.");
            return; // Skip the animation if already clicked
        }
        if (experimentState.seventhStep) {   
            console.log("Calamine1 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }
        const timeline = gsap.timeline();
        timeline.to(calmine1, {
            duration: 2.5,
            bottom: "30%", 
            left : "60%",
            ease: "power1.inOut"
        }).to(calmine1, {
            duration: 1, 
            rotate: "-130deg",
            ease: "power1.inOut"
        }).to(Img1,{
            duration: -0.5,
            rotate: "119deg",
            ease: "power1.inOut"
        }).to(Img1,{
            duration: 1,
            left: "-10%",
            top: "-37%",
            opacity: .2,
            display: "none",
            ease: "power1.inOut"
        }).to(calmine1, {
            duration: 1,
            rotate: "0deg",
            left: " 34%",
            bottom: "19.5%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.seventhStep = true;
                updateInstructions("Now, click on the bentonite powder to put on the mortar.");
            }
        });
        console.log("Calamine1 clicked");
     });

// seventh step is to click on the bentonite powder to put on the mortar
betonite2.addEventListener("click", function() {
        
    updateInstructions("Betonite clicked, adding to the mixture");

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");    
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            return; // Stop the function if second step is not completed
        }   
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {   
            updateInstructions("Please pour the mixture into the beaker first.");
            return; // stop the function if fourth step is not completed
        }
        if (!experimentState.fifthStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            return; 
        }
        if (!experimentState.sixthStep) {   
            updateInstructions("Please empty the measuring cylinder first.");
            return;
        }
        if (!experimentState.seventhStep) {   
            updateInstructions("Please put calamine powder on the mortar first.");
            return; 
        }
        if (experimentState.eighthStep) {   
            console.log("Betonite2 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }
        const timeline = gsap.timeline();
        timeline.to(betonite2, {
            duration: 2.5,
            bottom: "30%",
            left : "60%",
            ease: "power1.inOut"
        }).to(betonite2, {
            duration: 1, 
            rotate: "-130deg",
            ease: "power1.inOut"
        }).to(Img6,{
            duration: -0.5,
            rotate: "119deg",
            ease: "power1.inOut"
        }).to(Img6,{
            duration: 1,
            left: "-10%",
            top: "-37%",
            opacity: .2,
            display: "none",
            ease: "power1.inOut"
        }).to(betonite2, {
            duration: 1,
            rotate: "0deg",
            left: "37%",
            bottom: "14.5%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.eighthStep = true;
                experimentState.secondStep = false;
                updateInstructions("Now, click on the water beaker to pour water into the mortar.");
            }
        });
        console.log("Betonite2 clicked");
    });


    // eighth step is to click on the water beaker again and next step state true in second water beaker click
    if (experimentState.eighthStep){
        updateInstructions("Now, click on the water beaker to pour water into the mortar.");
    }


    // ninth step is to click on the pestle to grind the mixture again

    if (experimentState.ninthstep){
        updateInstructions("Now, click on the pestle to grind the mixture.");

    }



    // tenth step is to click on the motar to pour the mixture into the beaker again
    if (experimentState.tenthStep){
        updateInstructions("Now, click on the mortar to pour the mixture into the beaker.");
    }



    // eleventh step is to click on beaker to pour the mixture into emtpy measuring cylinder again
    
    const beaker4 = document.getElementById("beaker4");
    const msol2 = document.getElementById("solutionm2");
    const dropsol2 = document.getElementById("drop-sol-2");
   
      beaker4.addEventListener("click", function() {
        updateInstructions("Now, click on the beaker to pour the mixture into measuring cylinder.");
        experimentState.fourthStep = true;
        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");   
            console.log("first step not completed"); 
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("second step not completed"); 
            return; // Stop the function if second step is not completed
        }   
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("third step not completed"); 
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {   
            updateInstructions("Please pour the mixture into the beaker first.");
            console.log("fourth step not completed"); 
            return; // stop the function if fourth step is not completed
        }
        if (!experimentState.fifthStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("fifth step not completed"); 
            return; 
        }
        if (!experimentState.sixthStep) {   
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("sixth step not completed");
            return;
        }
        if (!experimentState.seventhStep) {   
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("seventh step not completed");
            return; 
        }
        if (!experimentState.eighthStep) {   
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("eighth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return; 
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return; 
        }if (experimentState.eleventhStep) {   
            console.log("Beaker already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }

        
        
  const timeline = gsap.timeline();
        timeline.to(beaker4, {
            duration: 2,
            bottom: "60%",
            left: "85%",
            ease: "power1.inOut"
        }).to(beaker4, {
            duration: 1,
            rotate: "-60deg",
            ease: "power1.inOut"
        }).to(dropsol2, {
            duration: 0.5,
            opacity: .5,
            left: "84%",
            height: "350px",
            top: "36%",   
            ease: "power1.inOut"
        },">").to(msol2,{
            duration: 1, 
            height: "80px",
            opacity: 0.7,
            ease: "power1.inOut"
        }).to(innersoly,{
            duration: 1, 
            height: "0px",
            opacity: 0.9,
        },">").to(dropsol2, {
            duration: 0.01,
            opacity: 0,
        }).to(beaker4, {
            duration: 1,
            bottom: "22%",
            rotate: "0deg",
            left: "23%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.eleventhStep = true;
                updateInstructions("Now, click on the measuring cylinder to bring empty it.");
            }   
        });
        console.log("Beaker clicked =============");
    });

// twelveth step is to click measuringCylinder2 to bring empty it

      measuringCylinder2.addEventListener("click", function() {
        updateInstructions("Now, click on the measuring cylinder to bring empty it.");

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");   
            console.log("first step not completed"); 
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("second step not completed"); 
            return; // Stop the function if second step is not completed
        }   
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("third step not completed"); 
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {   
            updateInstructions("Please pour the mixture into the beaker first.");
            console.log("fourth step not completed"); 
            return; // stop the function if fourth step is not completed
        }
        if (!experimentState.fifthStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("fifth step not completed"); 
            return; 
        }
        if (!experimentState.sixthStep) {   
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("sixth step not completed");
            return;
        }
        if (!experimentState.seventhStep) {   
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("seventh step not completed");
            return; 
        }
        if (!experimentState.eighthStep) {   
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("eighth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return; 
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return; 
        }if (!experimentState.eleventhStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            return; // Skip the animation if already clicked
        }if (experimentState.twelvethStep) {    
            console.log("MeasuringCylinder2 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }

             const timeline = gsap.timeline();
             timeline.to(measuringCylinder2, {
                 duration: 1,
                 left: "110%",
                 ease: "power1.inOut"
             }).to(measuringCylinder3, {
                 duration: 1,
                 bottom: "20%",
                 left: "80%",
                 ease: "power1.inOut",
                 onComplete: function() {
                    experimentState.twelvethStep = true;
                updateInstructions("Now, Nextstep: click on calmine powder to put on the mortar.");
            }
             });
             console.log("measuringCylinder2 clicked");
            });


// thriteenth step is to click on the calmine and bentonite powder


    const calmine2 = document.getElementById("sample2");
    const betonite1 = document.getElementById("sample5"); 
    const Img2 = document.getElementById("sample2Img");
    const Img5 = document.getElementById("sample5Img");

    calmine2.addEventListener("click", function() {      

     updateInstructions("Calamine clicked, adding to the mixture");

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");   
            console.log("first step not completed"); 
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("second step not completed"); 
            return; // Stop the function if second step is not completed
        }   
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("third step not completed"); 
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {   
            updateInstructions("Please pour the mixture into the beaker first.");
            console.log("fourth step not completed"); 
            return; // stop the function if fourth step is not completed
        }
        if (!experimentState.fifthStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("fifth step not completed"); 
            return; 
        }
        if (!experimentState.sixthStep) {   
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("sixth step not completed");
            return;
        }
        if (!experimentState.seventhStep) {   
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("seventh step not completed");
            return; 
        }
        if (!experimentState.eighthStep) {   
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("eighth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return; 
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return; 
        }if (!experimentState.eleventhStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("eleventh step not completed");
            return; // Skip the animation if already clicked
        }if (!experimentState.twelvethStep) {    
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("twelveth step not completed"); 
            return; // Skip the animation if already clicked
        }
        if (experimentState.thriteenthStep) {   
            console.log("Calamine2 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }

        const timeline = gsap.timeline();
        timeline.to(calmine2, {
            duration: 2.5,
            bottom: "30%",
            left : "60%",
            ease: "power1.inOut"
        }).to(calmine2, {
            duration: 1, 
            rotate: "-130deg",
            ease: "power1.inOut"
        }).to(Img2,{
            duration: -0.5,
            rotate: "119deg",
            ease: "power1.inOut"
        }).to(Img2,{
            duration: 1,
            left: "-10%",
            top: "-37%",
            opacity: .2,
            display: "none",
            ease: "power1.inOut"
        }).to(calmine2, {
            duration: 1,
            rotate: "0deg",
            left: "41%",
            bottom: "19.5%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.thirteenthStep = true;
                updateInstructions("Now, click on the mortar to pour the water into the beaker.");
            }
        });
        console.log("Calamine2 clicked_______");
    });

// fourteenth step is to click on the bentonite powder to put on the mortar 

    betonite1.addEventListener("click", function() {

        updateInstructions("Betonite clicked, adding to the mixture");

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");   
            console.log("first step not completed"); 
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("second step not completed"); 
            return; // Stop the function if second step is not completed
        }   
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("third step not completed"); 
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {   
            updateInstructions("Please pour the mixture into the beaker first.");
            console.log("fourth step not completed"); 
            return; // stop the function if fourth step is not completed
        }
        if (!experimentState.fifthStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("fifth step not completed"); 
            return; 
        }
        if (!experimentState.sixthStep) {   
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("sixth step not completed");
            return;
        }
        if (!experimentState.seventhStep) {   
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("seventh step not completed");
            return; 
        }
        if (!experimentState.eighthStep) {   
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("eighth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return; 
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return; 
        }if (!experimentState.eleventhStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("eleventh step not completed");
            return; // Skip the animation if already clicked
        }if (!experimentState.twelvethStep) {    
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("twelveth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.thirteenthStep) {   
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("thirteenth step not completed");
            return; // Skip the animation if already clicked
        }
        if (experimentState.fourteenthStep) {
            console.log("Betonite1 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }

        const timeline = gsap.timeline();   
        timeline.to(betonite1, {
            duration: 2.5,
            bottom: "30%",
            left : "60%",
            ease: "power1.inOut"
        }).to(betonite1, {
            duration: 1, 
            rotate: "-130deg",
            ease: "power1.inOut"
        }).to(Img5,{
            duration: -0.5,
            rotate: "119deg",
            ease: "power1.inOut"
        }).to(Img5,{
            duration: 1,
            left: "-10%",
            top: "-37%",
            opacity: .2,
            display: "none",
            ease: "power1.inOut"
        }).to(betonite1, {
            duration: 1,
            rotate: "0deg",
            left: "44%",
            bottom: "14.5%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.fourteenthStep = true;
                experimentState.secondStep = false;
                updateInstructions("Now, click on the mortar to pour the water into the beaker.");
            }
        });
        console.log("Betonite1 clicked--------");
    }); 

// fifteenth step is to click on the mortar to pour the mixture into the beaker again

if (experimentState.fifteenthStep){
    updateInstructions("Now, click on the mortar to pour the mixture into the beaker.");
}

// sixteenth step is to click on the pestle to grind the mixture again

if (experimentState.sixteenthStep){
    updateInstructions("Now, click on the pestle to grind the mixture.");
    console.log("third step reset to false");
}

// seventeenth step is to click on the mortar to pour the mixture into the beaker again

const beaker2 = document.getElementById("beaker2");
const msol3 = document.getElementById("solutionm3");
const dropsol3 = document.getElementById("drop-sol-3");

    

    
    beaker2.addEventListener("click", function() {
        updateInstructions("Now, click on the mortar to pour the mixture into the beaker.");

        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");
            console.log("first step not completed");
            return; // Stop the function if first step is not completed
        }
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("second step not completed");
            return; // Stop the function if second step is not completed
        }
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("third step not completed");
            return; // Stop the function if third step is not completed
        }
        // if (!experimentState.fourthStep) {
        //     updateInstructions("Please pour the mixture into the beaker first.");
        //     console.log("fourth step not completed");
        //     return; // stop the function if fourth step is not completed
        // }
        if (!experimentState.fifthStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("fifth step not completed");
            return;
        }
        if (!experimentState.sixthStep) {
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("sixth step not completed");
            return;
        }
        if (!experimentState.seventhStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("seventh step not completed");
            return;
        }
        if (!experimentState.eighthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("eighth step not completed");
            return; // Skip the animation if already clicked
        }   
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return;
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return;
        }
        if (!experimentState.eleventhStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("eleventh step not completed");
            return; // Skip the animation if already clicked
        }   
        if (!experimentState.twelvethStep) {
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("twelveth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.thirteenthStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("thirteenth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.fourteenthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("fourteenth step not completed");
            return; // Skip the animation if already clicked
        }
        // if (!experimentState.fifteenthStep){
        //     updateInstructions("Please pour the mixture into the beaker first.");
        //     console.log("fifteenth step not completed");
        //     return;
        // }
        if (!experimentState.sixteenthStep){
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("sixteenth step not completed");
            return;
        }
        // if (experimentState.seventeenthStep) {   
        //     console.log("Beaker already clicked, skipping animation.");
        //     return; // Skip the animation if already clicked
        // }

        console.log("beaker clicked");
        const timeline = gsap.timeline();
        timeline.to(beaker2, {
            duration: 1,
            bottom: "60%",
            left: "85%",
            ease: "power1.inOut"
        }).to(beaker2, {
            duration: 1,
            rotate: "-60deg",
            ease: "power1.inOut"
        }).to(dropsol3, {
            duration: 0.5,
            opacity: .5,
            left: "84%",
            height: "350px",
            top: "36%",   
            ease: "power1.inOut"
        }).to(innersolyb2,{
            duration: 1, 
            height: "0px",
            opacity: 0.9,
        },">").to(msol3,{
           duration: 0.5,
           opacity: 0.7,
           height: "80px",
        }).to(dropsol3, {
            duration: 0.01,
            opacity: 0,
        }).to(beaker2, {
            duration: 1,
            bottom: "22%",
            rotate: "0deg",
            left: "15%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.seventeenthStep = true;
                updateInstructions("Now, click on the measuring cylinder to bring empty it.");
            }
        });
        console.log("Beaker clicked");
    });

// eighteenth step is to click measuringCylinder3 to bring empty it

    measuringCylinder3.addEventListener("click", function() {
        updateInstructions("Now, click on the measuring cylinder to bring empty it.");
        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");
            console.log("first step not completed");
            return; // Stop the function if first step is not completed
        }   
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("second step not completed");
            return; // Stop the function if second step is not completed
        }
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("third step not completed");
            return; // Stop the function if third step is not completed
        }  
        // if (!experimentState.fourthStep) {
        //     updateInstructions("Please pour the mixture into the beaker first.");
        //     console.log("fourth step not completed");
        //     return; // stop the function if fourth step is not completed
        // }  
        if (!experimentState.fifthStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("fifth step not completed");
            return;
        }
        if (!experimentState.sixthStep) {
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("sixth step not completed");
            return;
        }
        if (!experimentState.seventhStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("seventh step not completed");
            return;
        }
        if (!experimentState.eighthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("eighth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return;
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return;
        }   
        if (!experimentState.eleventhStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("eleventh step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.twelvethStep) {        
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("twelveth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.thirteenthStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("thirteenth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.fourteenthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("fourteenth step not completed");
            return; // Skip the animation if already clicked
        }
        // if (!experimentState.fifteenthStep){
        //     updateInstructions("Please pour the mixture into the beaker first.");
        //     console.log("fifteenth step not completed");
        //     return;
        // }
        if (!experimentState.sixteenthStep){
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("sixteenth step not completed");
            return;
        }
        if (!experimentState.seventeenthStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("seventeenth step not completed");
            return;
        }
        if (experimentState.eighteenthStep) {   
            console.log("MeasuringCylinder3 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }
        

    const timeline = gsap.timeline();
     timeline.to(measuringCylinder3, {
         duration: 1,
         left: "110%",
         ease: "power1.inOut"
     }).to(measuringCylinder4, {
         duration: 1,
         bottom: "20%",
         left: "80%",
         ease: "power1.inOut",
            onComplete: function() {    
                experimentState.eighteenthStep = true;
                updateInstructions("Now, Nextstep: click on calmine powder to put on the mortar.");
            }   
        });
     console.log("hello")
    });


   // nineteenth step is to click on the calmine and bentonite powder again

    const calmine3 = document.getElementById("sample3");
    const calmine4 = document.getElementById("sample4");
    const Img3 = document.getElementById("sample3Img");
    const Img4 = document.getElementById("sample4Img");
  
    calmine3.addEventListener("click", function() {
        updateInstructions("Calamine clicked, adding to the mixture");

        if (!experimentState.firstStep) {   
            updateInstructions("Please pour the powder into the mortar first.");   
            console.log("first step not completed"); 
            return; // Stop the function if first step is not completed
        }   
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("second step not completed");
            return; // Stop the function if second step is not completed
        }
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("third step not completed");
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {   
            updateInstructions("Please pour the mixture into the beaker first.");
            console.log("fourth step not completed");
            return; // stop the function if fourth step is not completed
        }
        if (!experimentState.fifthStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("fifth step not completed");
            return; 
        }
        if (!experimentState.sixthStep) {   
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("sixth step not completed");
            return;
        }
        if (!experimentState.seventhStep) {   
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("seventh step not completed");
            return; 
        }
        if (!experimentState.eighthStep) {   
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("eighth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return; 
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return; 
        }
        if (!experimentState.eleventhStep) {   
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("eleventh step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.twelvethStep) {        
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("twelveth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.thirteenthStep) {  
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("thirteenth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.fourteenthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("fourteenth step not completed");
            return; // Skip the animation if already clicked
        }
        if (experimentState.nineteenthStep) {   
            console.log("Calamine3 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }
        

       const timeline = gsap.timeline();
        timeline.to(calmine3, {
            duration: 2.5,
            bottom: "30%",
            left : "60%",
            ease: "power1.inOut"
        }).to(calmine3, {
            duration: 1, 
            rotate: "-130deg",
            ease: "power1.inOut"
        }).to(Img3,{
            duration: -0.5,
            rotate: "119deg",
            ease: "power1.inOut"
        }).to(Img3,{
            duration: 1,
            left: "-10%",
            top: "-37%",
            opacity: .2,
            display: "none",
            ease: "power1.inOut"
        }).to(calmine3, {
            duration: 1,
            rotate: "0deg",
            left: "48%",
            bottom: "19.5%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.nineteenthStep = true;
                updateInstructions("Now, click on calmine powder to put on the mortar again.");
            }
        });
        console.log("Calamine3 clicked");
    });

    // twentieth step is to click on the calmine powder to put on the mortar again
    calmine4.addEventListener("click", function() {

        updateInstructions("Calamine clicked, adding to the mixture");

        if (!experimentState.firstStep) {   
            updateInstructions("Please pour the powder into the mortar first.");
            console.log("first step not completed");
            return; // Stop the function if first step is not completed
        }   
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("second step not completed");
            return; // Stop the function if second step is not completed
        }
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("third step not completed");
            return; // Stop the function if third step is not completed
        }
        if (!experimentState.fourthStep) {
            updateInstructions("Please pour the mixture into the beaker first.");
            console.log("fourth step not completed");
            return; // stop the function if fourth step is not completed
        }
        if (!experimentState.fifthStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("fifth step not completed");
            return;
        }
        if (!experimentState.sixthStep) {
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("sixth step not completed");
            return;
        }
        if (!experimentState.seventhStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("seventh step not completed");
            return;
        }
        if (!experimentState.eighthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("eighth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return;
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return;
        }
        if (!experimentState.eleventhStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("eleventh step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.twelvethStep) {
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("twelveth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.thirteenthStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("thirteenth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.fourteenthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("fourteenth step not completed");
            return; // Skip the animation if already clicked
        }  
        if (!experimentState.nineteenthStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("nineteenth step not completed");
            return; // Skip the animation if already clicked
        }
        if (experimentState.twentiethStep) {
            console.log("Calamine4 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }

        const timeline = gsap.timeline();
        timeline.to(calmine4, {
            duration: 2.5,
            bottom: "30%",
            left : "60%",
            ease: "power1.inOut"
        }).to(calmine4, {
            duration: 1, 
            rotate: "-130deg",
            ease: "power1.inOut"
        }).to(Img4,{
            duration: -0.5,
            rotate: "119deg",
            ease: "power1.inOut"
        }).to(Img4,{
            duration: 1,
            left: "-10%",
            top: "-37%",
            opacity: .2,
            display: "none",
            ease: "power1.inOut"
        }).to(calmine4, {
            duration: 1,
            rotate: "0deg",
            left: "51%",
            bottom: "14.5%",
            ease: "power1.inOut",
            onComplete: function() {
                experimentState.twentiethStep = true;
                experimentState.secondStep = false;
                updateInstructions("Now, click on beaker to pour the mixture into emtpy measuring cylinder again.");
            }
        });
        console.log("Calamine4 clicked");
    });
    
    // twentyoneth step is to click on beaker to pour the water 

    if (experimentState.twentiethStep){
        updateInstructions("Now, click on beaker to pour the mixture into emtpy measuring cylinder again.");
    }

    if (experimentState.twentieonethStep){
        updateInstructions("Now, click on the pestle to grind the mixture.")
    }


    if (experimentState.twentietwothStep){
        updateInstructions("Now, click on the pestle to grind the mixture.")
    }

    const beaker5 = document.getElementById("beaker5");
    const msol4 = document.getElementById("solutionm4");
    const dropsol4 = document.getElementById("drop-sol-4");

    beaker5.addEventListener("click", function() {
        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first."); 
            console.log("first step not completed");   
            return; // Stop the function if first step is not completed
            }  
            if (!experimentState.secondStep) {
                updateInstructions("Please grind the mixture with the pestle first.");
                console.log("second step not completed");
                return; // Stop the function if second step is not completed
            }
            if (!experimentState.fourthStep) {   
                updateInstructions("Please pour the mixture into the beaker first.");
                console.log("fourth step not completed");
                return; // stop the function if fourth step is not completed
            }
            if (!experimentState.fifthStep) {   
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                console.log("fifth step not completed");
                return; 
            }
            if (!experimentState.sixthStep) {   
                updateInstructions("Please empty the measuring cylinder first.");
                console.log("sixth step not completed");
                return;
            }
            if (!experimentState.seventhStep) {   
                updateInstructions("Please put calamine powder on the mortar first.");
                console.log("seventh step not completed");
                return; 
            }
            if (!experimentState.eighthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                console.log("eighth step not completed");
                return; 
            } 
            if (!experimentState.ninthStep){ 
                updateInstructions("Please pour water into the mortar first.");
                console.log("ninth step not completed");
                return;
            }
            if (!experimentState.tenthStep){     
                updateInstructions("Please grind the mixture with the pestle first.");
                console.log("tenth step not completed");
                return;
            }if (!experimentState.eleventhStep){ 
                updateInstructions("Please pour the mixture into the beaker first.");
                console.log("eleventh step not completed");
                return;
            }if (!experimentState.twelvethStep){
                updateInstructions("Please pour the mixture into the measuring cylinder first.");
                console.log("twelveth step not completed");
                return;}
            // if (!experimentState.thirtheenthStep){
            //     updateInstructions("Please empty the measuring cylinder first.");
            //     console.log("thirtheenth step not completed");
            //     return;
            // } 
            if (!experimentState.fourteenthStep){
                updateInstructions("Please put bentonite powder on the mortar first.");
                console.log("fourteenth step not completed");
                return;
            }
        const timeline = gsap.timeline();
        timeline.to(beaker5, {
            duration: 1,
            bottom: "60%",
            left: "85%",
            ease: "power1.inOut"
        }).to(beaker5, {
            duration: 1,
            rotate: "-80deg",
            ease: "power1.inOut"
        }).to(dropsol4, {
            duration: 0.5,
            opacity: .5,
            left: "84%",
            height: "350px",
            top: "36%",   
            ease: "power1.inOut"
        }).to(innersolyb5,{
            duration: 1, 
            height: "0px",
            opacity: 0.9,
        },">").to(msol4,{
           duration: 0.5,
           opacity: 0.7,
           height: "80px",
        }).to(dropsol4,{
            duration: 0.01,
            opacity: 0,
        }).to(beaker5, {
            duration: 1,
            bottom: "17%",
            rotate: "0deg",
            left: "20%",
            ease: "power1.inOut"
        });
        console.log("Beaker clicked");
        // timeline.to(beaker2, {
        //     duration: 1,
        //     bottom: "60%",
        //     left: "85%",
        //     ease: "power1.inOut"
        // }).to(beaker2, {
        //     duration: 1,
        //     rotate: "-60deg",
        //     ease: "power1.inOut"
        // }).to(dropsol3, {
        //     duration: 0.5,
        //     opacity: .5,
        //     left: "84%",
        //     height: "350px",
        //     top: "36%",   
        //     ease: "power1.inOut"
        // }).to(innersolyb2,{
        //     duration: 1, 
        //     height: "0px",
        //     opacity: 0.9,
        // },">").to(msol3,{
        //    duration: 0.5,
        //    opacity: 0.7,
        //    height: "80px",
        // }).to(dropsol3, {
        //     duration: 0.01,
        //     opacity: 0,
        // }).to(beaker2, {
        //     duration: 1,
        //     bottom: "22%",
        //     rotate: "0deg",
        //     left: "15%",
        //     ease: "power1.inOut",
        //     onComplete: function() {
        //         experimentState.seventeenthStep = true;
        //         updateInstructions("Now, click on the measuring cylinder to bring empty it.");
        //     }
        // });
    });


    measuringCylinder3.addEventListener("click", function() {
        updateInstructions("Now, click on the measuring cylinder to bring empty it.");
        if (!experimentState.firstStep) {
            updateInstructions("Please pour the powder into the mortar first.");
            console.log("first step not completed");
            return; // Stop the function if first step is not completed
        }   
        if (!experimentState.secondStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("second step not completed");
            return; // Stop the function if second step is not completed
        }
        if (!experimentState.thirdStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("third step not completed");
            return; // Stop the function if third step is not completed
        }  
        // if (!experimentState.fourthStep) {
        //     updateInstructions("Please pour the mixture into the beaker first.");
        //     console.log("fourth step not completed");
        //     return; // stop the function if fourth step is not completed
        // }  
        if (!experimentState.fifthStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("fifth step not completed");
            return;
        }
        if (!experimentState.sixthStep) {
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("sixth step not completed");
            return;
        }
        if (!experimentState.seventhStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("seventh step not completed");
            return;
        }
        if (!experimentState.eighthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("eighth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.ninthStep) {
            updateInstructions("Please pour water into the mortar first.");
            console.log("ninth step not completed");
            return;
        }
        if (!experimentState.tenthStep) {
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("tenth step not completed");
            return;
        }   
        if (!experimentState.eleventhStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("eleventh step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.twelvethStep) {        
            updateInstructions("Please empty the measuring cylinder first.");
            console.log("twelveth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.thirteenthStep) {
            updateInstructions("Please put calamine powder on the mortar first.");
            console.log("thirteenth step not completed");
            return; // Skip the animation if already clicked
        }
        if (!experimentState.fourteenthStep) {
            updateInstructions("Please put bentonite powder on the mortar first.");
            console.log("fourteenth step not completed");
            return; // Skip the animation if already clicked
        }
        // if (!experimentState.fifteenthStep){
        //     updateInstructions("Please pour the mixture into the beaker first.");
        //     console.log("fifteenth step not completed");
        //     return;
        // }
        if (!experimentState.sixteenthStep){
            updateInstructions("Please grind the mixture with the pestle first.");
            console.log("sixteenth step not completed");
            return;
        }
        if (!experimentState.seventeenthStep) {
            updateInstructions("Please pour the mixture into the measuring cylinder first.");
            console.log("seventeenth step not completed");
            return;
        }
        if (experimentState.eighteenthStep) {   
            console.log("MeasuringCylinder3 already clicked, skipping animation.");
            return; // Skip the animation if already clicked
        }
        
    measuringCylinder4.addEventListener()
    const timeline = gsap.timeline();
     timeline.to(measuringCylinder4, {
         duration: 1,
         left: "110%",
         ease: "power1.inOut"
     }).to(measuringCylinder4, {
         duration: 1,
         bottom: "20%",
         left: "80%",
         ease: "power1.inOut",
            onComplete: function() {    
                experimentState.eighteenthStep = true;
                updateInstructions("Now, Nextstep: click on calmine powder to put on the mortar.");
            }   
        });
     console.log("hello")
    });
    
 });


