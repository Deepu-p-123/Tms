function validate() {

    var d3 = new Date();
    d3 = d3.setHours(0, 0, 0, 0);


    var d1 = document.getElementById("d1").value;
    var d1 = new Date(d1);
    d1 = d1.setHours(0, 0, 0, 0);
    var d2 = document.getElementById("d2").value;
    var d2 = new Date(d2);
    d2 = d2.setHours(0, 0, 0, 0);
    if (d1 == d3) {
        var p = document.getElementById("date1");
        p.style.color = "red";
        p.innerHTML = "* it is today  please choose another date";


    } else if (d1 < d3 || d2 < d3) {
        var p = document.getElementById("message");
        p.style.color = "red";
        p.innerHTML = "*  please choose a valid date";
    } else if (d1 == d2) {
        var p = document.getElementById("date2");
        p.style.color = "red";
        p.innerHTML = "* start date and end date cannot be same";

    } else if (d1 > d2) {
        var p = document.getElementById("date2");
        p.style.color = "red";
        p.innerHTML = "* start date is greater than end date ";
    } else {

        alert("submitted");
    }

}