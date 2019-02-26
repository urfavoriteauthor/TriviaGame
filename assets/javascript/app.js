$(document).ready(function () {
    // Question one
    $("#redHood").click(function () {
        console.log("Red Hood");
        $("#questionOne").append("Incorrect");
        $("#questionOne").click(function(event){
            $("#redHood").attr("disabled", "true")
        })
    })
    $("#nightWing").click(function () {
        console.log("NightWing");
        $("#questionOne").append("Correct");
        $("#questionOne").click(function(event){
            $("#nightWing").attr("disabled", "true")
        })
    })
    $("#batman").click(function () {
        console.log("Batman");
        $("#questionOne").append("Incorrect");
        $("#questionOne").click(function(event){
            $("#batman").attr("disabled", "true")
        })
    })
    $("#redRobin").click(function () {
        console.log("Red Robin");
        $("#questionOne").append("Incorrect");
        $("#questionOne").click(function(event){
            $("#redRobin").attr("disabled", "true")
        })
        // Question two
    })
    $("#x23").click(function () {
        console.log("X-23");
        $("#questionTwo").append("Incorrect");
        $("#questionTwo").click(function(event){
            $("#wolverine").attr("disabled", "true")
        })
    })
    $("#deadpool").click(function () {
        console.log("Deadpool");
        $("#questionTwo").append("Incorrect");
        $("#questionTwo").click(function(event){
            $("#deadpool").attr("disabled", "true")
        })
    })
    $("#sabertooth").click(function () {
        console.log("SaberTooth");
        $("#questionTwo").append("Incorrect");
        $("#questionTwo").click(function(event){
            $("#sabertooth").attr("disabled", "true")
        })
    })
    $("#beast").click(function () {
        console.log("Beast");
        $("#questionTwo").append("Correct");
        $("#questionTwo").click(function(event){
            $("#beast").attr("disabled", "true")
        })
        // Question three
    })
    $("#asgard").click(function () {
        console.log("Asgard");
        $("#questionThree").append("Incorrect");
        $("#questionThree").click(function(event){
            $("#asgard").attr("disabled", "true")
        })
    })
    $("#wakanda").click(function () {
        console.log("Wakanda");
        $("#questionThree").append("Correct");
        $("#questionThree").click(function(event){
            $("#wakanda").attr("disabled", "true")
        })
    })
    $("#latveria").click(function () {
        console.log("Latveria");
        $("#questionThree").append("Incorrect");
        $("#questionThree").click(function(event){
            $("#latveria").attr("disabled", "true")
        })
    })
    $("#atlantis").click(function () {
        console.log("Atlantis");
        $("#questionThree").append("Incorrect");
        $("#questionThree").click(function(event){
            $("#atlantis").attr("disabled", "true")
        })
        // Question four
    })
    $("#mjolnir").click(function () {
        console.log("Mjolnir");
        $("#questionFour").append("Correct");
        $("#questionFour").click(function(event){
            $("#mjolnir").attr("disabled", "true")
        })
    })
    $("#odin").click(function () {
        console.log("Odin");
        $("#questionFour").append("Incorrect");
        $("#questionFour").click(function(event){
            $("#odin").attr("disabled", "true")
        })
    })
    $("#gauntlet").click(function () {
        console.log("The Infinity Gauntlet");
        $("#questionFour").append("Incorrect");
        $("#questionFour").click(function(event){
            $("#gauntlet").attr("disabled", "true")
        })
    })
    $("#hammerTime").click(function () {
        console.log("MC Hammer");
        $("#questionFour").append("Incorrect");
        $("#questionFour").click(function(event){
            $("#hammerTime").attr("disabled", "true")
        })
        // Question five
    })
    $("#professorX").click(function () {
        console.log("Professor Xavier");
        $("#questionFive").append("Incorrect");
        $("#questionFive").click(function(event){
            $("#professorX").attr("disabled", "true")
        })
    })
    $("#magneto").click(function () {
        console.log("Magneto");
        $("#questionFive").append("Incorrect");
        $("#questionFive").click(function(event){
            $("#magneto").attr("disabled", "true")
        })
    })
    $("#cyclops").click(function () {
        console.log("Cyclops");
        $("#questionFive").append("Incorrect");
        $("#questionFive").click(function(event){
            $("#cyclops").attr("disabled", "true")
        })
    })
    $("#jubilee").click(function () {
        console.log("Jubilee");
        $("#questionFive").append("Correct");
        $("#questionFive").click(function(event){
            $("#jubilee").attr("disabled", "true");
           
        })
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

var questionsRight = 0;
var questionsWrong = 0;
var selectedChoice = $("triviaQuestions").attr("click");

if (selectedChoice === 'Nightwing', 'Beast','Wakanda', 'Mjolnir', 'Jubilee') {
    ++questionsRight;
    
}else {
    ++questionsWrong;
};

console.log(questionsRight);
console.log(questionsWrong);
