onmessage=(e)=>{
    console.log(e)
  let result =0;
    for (let i = 1; i < 10890837453; i++) {
       result+=i;  
    }
    postMessage(result);
}