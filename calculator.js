

const displayContent=(data)=>{
    display.value+=data

}
const clearAll=()=>{
    display.value=''
     display.placeholder="0"
}

const back=()=>{
    display.value=display.value.slice(0,-1)
}

const showResult=()=>{
 
   try{
    console.log("try block");
    display.value=eval(display.value)
   }
   catch(err){
    console.log("catch block");
    display.value=""
    display.placeholder="invalid expretion"

   }
   finally{
    console.log("finally block");

   }
}
    