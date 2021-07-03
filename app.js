
let button = document.getElementById("button")



button.onclick=()=>{
    var checkedcount = 0;
    const types =document.getElementById("types");
    const why =document.getElementById("why");
    const how =document.getElementById("How");
    const whatbox =document.getElementById("whatbox");
    var endcntnt = document.getElementById("endtxt");
    
    if(types.checked)
    {
        checkedcount = checkedcount+ 1; 
    }

    if(why.checked)
    {
        checkedcount = checkedcount+ 1;
    }

    if(how.checked)
    {
        checkedcount = checkedcount+ 1;
    }
    if(whatbox.checked)
    {
        checkedcount = checkedcount+ 1;
    }
   console.log(checkedcount)
    if (checkedcount < 4)
    {
        endcntnt.innerHTML= "You still have content to review!!";
    }
    else
    {
        endcntnt.innerHTML = "Good Job! You're done!";
    }
}

