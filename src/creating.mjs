import setText, { appendText } from "./results.mjs";

export function timeout(){

const wait = new Promise((resolve) => {
setTimeout(() => { 
    resolve("Timeout!");
    } ,1500) }  )  

 wait.then((text => setText(text)))

}





export function interval(){
    let counter = 2; 
const wait = new Promise((resolve) => {
  
    setInterval(() => {
        console.log ("interval")
        resolve(`Timeout! ${++counter}`);
        } ,1500); }  );  
    
     wait.then(text => setText(text))
    
    .finally(() =>  appendText(`--Done ${counter}`) ) 

    }




export function clearIntervalChain(){  
    let counter = 2; 
    let interval;
    const wait = new Promise((resolve) => {
      
        interval = setInterval(() => {
            console.log ("interval")
            resolve(`Timeout! ${++counter}`);
            } ,1500); }  );  
        
         wait.then(text => setText(text))
        
        .finally(() =>  appendText(`--Done ${interval}`) ) 
    
        }                         // this is importaant because when you click the button , it logs the 
                             // number it is logged at in the response.  But does not stop function . 




export function xhr(){
 let request = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest(); 
    xhr.open("GET","http://localhost:3000/users/7 "); 
    xhr.onload = () => {
        
        if (xhr.status === 200 ){
        resolve(xhr.responseText); 
        }else { 
            reject(xhr.statusText);
        }  }
      xhr.onerror = () => reject("request failed"); // can control when the reject state is called in a promise 
                                                        // Very important. 
      xhr.send();   
    });

 
 request.then(result => setText(result))
 .catch(reason => setText(reason))

}


/* the all promises 
  function here is extremely important. 
  This is an common example of when or how one could use 
  a function in order to have too fultill multiple promises in order for the
   next promises too execute. 
*/



export function allPromises(){
  let categories = axios.get("http://localhost:3000/itemCategories");
  let statuses =  axios.get("http://localhost:3000/orderStatuses");
  let userTypes = axios .get("http://localhost:3000/userTypes"); 
  let addressTypes = axios.get("http//localhost:3000/addressTypes"); 


  Promise.all([categories, statuses, userTypes, addressTypes ])    // this will que up all three promises and then 
                                                        //wait for the return.
   
  .then(([cat, stat, type, addressTypes])  => { 

    console.log( " This is a proper example of calling or settling  multiple functions inside of a promise ")
    
    console.log("Promises all have three states . Pending , unresolved or failed , and resolved.")
    console.log( "This is an example of fulfilling multple promises in a Promise.all([])") 

    
    console.log("Hello 0") 
    appendText(JSON.stringify(cat.data));
    console.log("Hello 1 ")
    appendText(JSON.stringify(stat.data));
    console.log("hello 2")
    appendText(JSON.stringify(type.data)); 
    console.log("Hello 3 ") 
    console.log(" Now all promises have been settled  ")

    console.log("FLAG = DRGREENTHUMB007")
  }
    )
    .catch(reasons => {   
        setText(reasons);
    })
}
  


export function allSettled(){
    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses =  axios.get("http://localhost:3000/orderStatuses");
    let userTypes = axios .get("http://localhost:3000/userTypes"); 
    let addressTypes = axios.get("http//localhost:3000/addressTypes"); 
  
  
    Promise.allSettled([categories, statuses, userTypes, addressTypes ])    // this will que up all three promises and then 
                                                          //wait for the return.
     
    .then((values)  => { 
        if(v.status === 'fulfilled' ) { 
            return `FULFILLED: ${JSON.stringify(v.value.data[0])}`
        }
        return ` REJECTED: ${v.reason.message}`    
    } ) 


} 
    

export function race(){
}