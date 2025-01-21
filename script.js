


function calculate(){
    // let result;
    let dobinput = document.getElementById("input").value;
    // let input2 = document.getElementById("input2").value;
    // console.log(dobinput)

     dob= new Date(dobinput);
    let cdate = new Date();

    let year1 = parseInt(dob.getFullYear());       //birth year
    let year2 = parseInt(cdate.getFullYear());     // current  year

    let birthMonth = parseInt(dob.getMonth() + 1);     // birth month
    let currentMonth = parseInt(cdate.getMonth() + 1); // current  month

    let birthday = parseInt(dob.getDate());       // birth day
    let currentday = parseInt(cdate.getDate());  // current day

    let age= year2 - year1 ;
   let month = 12-(Math.abs(currentMonth - birthMonth));
   let day = Math.abs(currentday - birthday);

   if(!dobinput){
    result="please enter birth date";
    document.getElementById("result").innerHTML = result;
    return;
   }
   


    if(currentMonth< birthMonth ){
      age--;
    //   console.log(age);
    // document.write(age)
    }
    if(currentMonth == birthMonth){
        month=0;
    }
    

  

    
    
   result = `you are ${age} years ${month} months ${day} days old `;

//    console.log(result);

   document.getElementById("result").innerText = result;

// document.write(`you are ${age} years ${month} months ${day} days `)

    

  



    




}





















 
 

