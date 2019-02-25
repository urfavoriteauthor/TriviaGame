$(document).ready(function () {
    // Question one
    $("#redHood").click(function () {
        console.log("Red Hood");
        $("#questionOne").append("Incorrect");
        $("questionOne").click(function(event){
            event.preventDefault();
        })
    })
    $("#nightWing").click(function () {
        console.log("NightWing");
        $("#questionOne").append("Correct");
        $("questionOne").click(function(event){
            event.preventDefault();
        })
    })
    $("#batman").click(function () {
        console.log("Batman");
        $("#questionOne").append("Incorrect");
        $("questionOne").click(function(event){
            event.preventDefault();
        })
    })
    $("#redRobin").click(function () {
        console.log("Red Robin");
        $("#questionOne").append("Incorrect");
        $("questionOne").click(function(event){
            event.preventDefault();
        })
        // Question two
    })
    $("#x23").click(function () {
        console.log("X-23");
        $("#questionTwo").append("Incorrect")
    })
    $("#deadpool").click(function () {
        console.log("Deadpool");
        $("#questionTwo").append("Incorrect")
    })
    $("#sabertooth").click(function () {
        console.log("SaberTooth");
        $("#questionTwo").append("Incorrect")
    })
    $("#beast").click(function () {
        console.log("Beast");
        $("#questionTwo").append("Correct")
        // Question three
    })
    $("#asgard").click(function () {
        console.log("Asgard");
        $("#questionThree").append("Incorrect")
    })
    $("#wakanda").click(function () {
        console.log("Wakanda");
        $("#questionThree").append("Correct")
    })
    $("#latveria").click(function () {
        console.log("Latveria");
        $("#questionThree").append("Incorrect")
    })
    $("#atlantis").click(function () {
        console.log("Atlantis");
        $("#questionThree").append("Incorrect")
        // Question four
    })
    $("#mjolnir").click(function () {
        console.log("Mjolnir");
        $("#questionFour").append("Correct")
    })
    $("#odin").click(function () {
        console.log("Odin");
        $("#questionFour").append("Incorrect")
    })
    $("#gauntlet").click(function () {
        console.log("The Infinity Gauntlet");
        $("#questionFour").append("Incorrect")
    })
    $("#hammerTime").click(function () {
        console.log("MC Hammer");
        $("#questionFour").append("Incorrect")
        // Question five
    })
    $("#professorX").click(function () {
        console.log("Professor Xavier");
        $("#questionFive").append("Incorrect")
    })
    $("#magneto").click(function () {
        console.log("Magneto");
        $("#questionFive").append("Incorrect")
    })
    $("#cyclops").click(function () {
        console.log("Cyclops");
        $("#questionFive").append("Incorrect")
    })
    $("#jubilee").click(function () {
        console.log("Jubilee");
        $("#questionFive").append("Correct")
    })
});


// Timer

var countdownTimer = 60;
var intervalId;

$("#gameStart").on("click", run);

function stop() {
    clearInterval(intervalId);
}
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {


    countdownTimer--;

    $("#clockTicking").html("<h2>" + countdownTimer + "</h2>");
    if (countdownTimer === 0) {
        stop();
        alert("Time Up!");
    }
}
run();



// Scoring system

// var questionsRight = 0;
// var questionsWrong = 0;
// var selectedChoice = $("triviaQuestions").attr("click");

// if (selectedChoice === 'Nightwing' 'Beast' 'Wakanda' 'Mjolnir' 'Jubilee') {
//     ++questionsRight;
    
// }else {
//     ++questionsWrong;
// };
