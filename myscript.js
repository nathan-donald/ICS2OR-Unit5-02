document.getElementById("guess").onclick = function() {
    let x = document.getElementById("numbersubmit").value;
    if(x == 0) 
    {
        alert("Your guess is neutral!");
    }
    
    else if(x > 0)
    {
        alert("Your guess is positive!");
    }
    
    else 
    {
        alert("Your guess is negative");
    }
};