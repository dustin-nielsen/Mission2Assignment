$("#btnCalc").click(function () {
    let percentage = CalcPercentage();
    let letter = CalcLetter(percentage);

    alert("Your grade percentage is: " + percentage + "%\n" +
        "Letter grade: " + letter);
})

function CalcPercentage() {
    let nGrade = $("#txtAssignments").val() * .55 + $("#txtGroupProjects").val() * .05 + $("#txtQuizzes").val() * .1 +
        $("#txtExams").val() * .2 + $("#txtINTEX").val() * .1;
    return nGrade.toFixed(2);
}

function CalcLetter(total) {
    let lGrade = "F";
    if (total >= 94) {
        lGrade = "A"
    } else if (total < 94 && total >= 90) {
        lGrade = "A-"
    } else if (total < 90 && total >= 87) {
        lGrade = "B+"
    } else if (total < 87 && total >= 84) {
        lGrade = "B"
    } else if (total < 84 && total >= 80) {
        lGrade = "B-"
    } else if (total < 80 && total >= 77) {
        lGrade = "C+"
    } else if (total < 77 && total >= 74) {
        lGrade = "C"
    } else if (total < 74 && total >= 70) {
        lGrade = "C-"
    } else if (total < 70 && total >= 67) {
        lGrade = "D+"
    } else if (total < 67 && total >= 64) {
        lGrade = "D"
    } else if (total < 64 && total >= 60) {
        lGrade = "D-"
    } else {
        lGrade = "E"
    }
    return lGrade;
}

