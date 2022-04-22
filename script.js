//1___ for the alert message when we select the city I run the alert inside html by : onclick for each city 
//onclick=alert("loading..")


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2___ remove the cookie part from web page   <button class="accept" onclick="removeCookie()">I Accept</button>//

var acceptCookie=document.querySelector(".cookie"); //select the entire cookie div which has message and I accept button//

// let the cookie displays after 2000ms
function removeHidden(){ //I set the hidden class inside Css to: display:none so the cookie div will disappear once I refresh the page and after 2000 ms I will remove this hidden class again to display the cookie div//
    acceptCookie.classList.remove("hidden");
}
//this function will make the div dissapeard untill 2000ms //
setTimeout(removeHidden, 2000);

//remove the cookie message once I accept button clicked // I added the hidden class again to cookie div to remove it once I click the button
function removeCookie(){
   acceptCookie.classList.add("hidden");
}


///////////////////////////we have finished removing the cookie from the webpage /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//3__ we will work on changing the tempreture from c to f and vice versa/////////
//I have created 2 arrays one for maximum tempreture and one array for minumim tempreure


//A-create two arrays (for max degree and min degree) that insert all the max and min tempreture degrees and save them in an array to use them later on.

var maxDegree=[];// now they are empty but will fill them soon:)
var minDegree=[];


for(var x=0;x<4;x++){ // I set this loop to go to each degree in max and min and convert it to number
    var maxTempPick=Number(document.querySelectorAll(".max-temp")[x].innerHTML);// I took what inside each max and min temp and converted to number//
    maxDegree.push(maxTempPick);//push this number which already has converted to the empty array  
    var minTempPick=Number(document.querySelectorAll(".min-temp")[x].innerHTML);// do same thing for min array
    minDegree.push(minTempPick);
}
// console.log(maxDegree);// if we set the console we will get an array MaxDegree=[27,24,21,26];//now no more empty array: )
// console.log(minDegree);// do same set the console for min and will get MinDegree=[19,18,16,21];

//now we have to arrays with number so forget about the messy document and index ...... 
//I will focus just on MaxDegree=[27,24,21,26];    AND  MinDegree=[19,18,16,21]; will make our conversion equation on them

var newArrayForMax=[];// these to arrays are empty to store the fahranhiet value that come from fahrenhiete equation  inside them so then when I will change the f to c I use these two empty array instead of the first 2 empty arrays
// because the first one hold the original degrees that we wrote inside html.
var newArrayForMin=[];
function changeUnits(){
    var chooseOption=document.getElementById("tempreture-unit").value;//go to id for option tag 
    for(var i=0;i<4;i++){

        if(chooseOption=="fahranheite"){//if the option tag value is fahranheit?
            var fahrenhietMax=Math.floor((1.8*maxDegree[i])+32); //write this equation and set tempreture to the value of this equation
            var fahrenhietMin=Math.floor((1.8*minDegree[i])+32);//same with min so max and min will change at the same time//
            document.querySelectorAll(".max-temp")[i].innerText=fahrenhietMax;
            document.querySelectorAll(".min-temp")[i].innerText=fahrenhietMin;
            newArrayForMax.push(fahrenhietMax);//push fahrenheite value into new min and max array to use them in c now the var newArrayForMax=[80,75,69,78];
            newArrayForMin.push(fahrenhietMin);//push fahrenheite value to min new arr now ,var newArrayForMin=[66,64,60,69];


            //var newArrayForMax=[80,75,69,78]; we will play with this new array and forget the orignal one because this one hold the fahreinhiet value that we will conver it in else section.
            // var newArrayForMin=[66,64,60,69];

        }
        else{
            document.querySelectorAll(".max-temp")[i].innerText=Math.floor((newArrayForMax[i]-32)/1.8)+1;//math.floor for rounding the number to integer whole number  
            document.querySelectorAll(".min-temp")[i].innerText=Math.floor((newArrayForMin[i]-32)/1.8)+1; 

        }
      
    }
  
}
// I can use one array for max temp and min so in this case the length of array will be 8 instead of 4
























//     var x=document.getElementById("tempreture-unit").value;
//     // document.querySelector(".show-temp-in").innerText=x;
//     if(x==="celceuis"){
//         console.log("celsuius");
//         var f=Number(document.querySelector(".max-temp").innerHTML)+10;
//         document.querySelector(".max-temp").innerText=f;

       
//         console.log(f)
//     }
//     else{
//         console.log("fahrinhiet")
//     }

// }



