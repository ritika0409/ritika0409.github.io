$(document).keyup(function(event) {
    if (event.which === 13) {
        alert('Click on the submit button to check your answer');
    }
});
function input1(){
    var ans=document.getElementById("num1").value;
        if(ans=="")
        document.getElementById("result1").innerHTML="No number entered";
        else 
        {
            if(ans==7)
            document.getElementById("result1").innerHTML ="Correct";
            else
            document.getElementById("result1").innerHTML ="Incorrect. The number pictured above is actually 7. Most color blind people won't see this number clearly.";
        }
    }
function input2(){
var ans=document.getElementById("num2").value;
    if(ans=="")
    document.getElementById("result2").innerHTML="No number entered";
    else 
    {
        if(ans==26)
        document.getElementById("result2").innerHTML ="Correct";
        
        else
        document.getElementById("result2").innerHTML ="Incorrect. The number pictured above is actually 26. People that are red color blind see only a 6, green color blind people may see only a 2.";
    }
}
function input3(){
var ans=document.getElementById("num3").value;
    if(ans=="")
    document.getElementById("result3").innerHTML="No number entered";
    else 
    {
        if(ans==15)
        document.getElementById("result3").innerHTML ="Correct";
        
        else
        document.getElementById("result3").innerHTML ="Incorrect. The number pictured above is actually 15. People with red green color blindness see the number 17.";
    }
}
function input4(){
var ans=document.getElementById("num4").value;
    if(ans=="")
    document.getElementById("result4").innerHTML="No number entered";
    else 
    {
        if(ans==73)
        document.getElementById("result4").innerHTML ="Correct";
        
        else
        document.getElementById("result4").innerHTML ="Incorrect. The number pictured above is actually 73. Most color blind people won't see this number clearly.";
    }
}
function input5(){
var ans=document.getElementById("num5").value;
    if(ans=="")
    document.getElementById("result5").innerHTML="No number entered";
    else 
    {
        if(ans==12)
        document.getElementById("result5").innerHTML ="Correct. Everyone should see the number 12 including people that are color blind.";
        
        else
        document.getElementById("result5").innerHTML ="Incorrect. Everyone should see the number 12 including people that are color blind.";
    }
}
function input6(){
var ans=document.getElementById("num6").value;
    if(ans=="")
    document.getElementById("result6").innerHTML="No number entered";
    else 
    {
        if(ans==8)
        document.getElementById("result6").innerHTML ="Correct";
        
        else
        document.getElementById("result6").innerHTML ="Incorrect. The number pictured above is actually 8. If you see a 3, you are most likely red green color blind. People that are total color blind will see nothing.";
    }
}
