var firebaseConfig = {
    apiKey: "AIzaSyBg9U3FXNCOkbJHmpzNac7xyEWLjc8kBeI",
    authDomain: "activities18timesheet.firebaseapp.com",
    databaseURL: "https://activities18timesheet.firebaseio.com",
    projectId: "activities18timesheet",
    storageBucket: "activities18timesheet.appspot.com",
    messagingSenderId: "841224217275",
    appId: "1:841224217275:web:8e9ee88cd99e172ac13f9e"
};
firebase.initializeApp(firebaseConfig);


var database = firebase.database();

var employeeName;
var role;
var startDate;
var monthlyRate;

$("#submit-button").on("click", function () {
    employeeName = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-date").val().trim();
    monthlyRate = $("#rate").val().trim();


    database.ref().push({
        name: employeeName,
        role: role,
        start: startDate,
        rate: monthlyRate


    })
});

database.ref().on("child_added", function(snapshot){
    var empName = snapshot.val().name;
    var tabelRow = $("<tr>");
    var tableData = $("<td>");

    tableData.text(empName);
    tabelRow.append()
    console.log (snapshot.val().name);
    })