function compute()
{
    var amount = document.getElementById("principal").value;

    if(amount <= 0) {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }
    var rateval = document.getElementById("rate").value; 

    var yr = document.getElementById("years").value;

    var simpleInterest = amount*rateval*yr/100;

    if(amount > 0) {
        document.getElementById("amt").innerHTML = amount;
        document.getElementById("rateOfInterest").innerHTML = rateval;
        document.getElementById("final").innerHTML = simpleInterest;
        document.getElementById("year").innerHTML = new Date().getFullYear()+parseInt(yr);
    }
    
}
        