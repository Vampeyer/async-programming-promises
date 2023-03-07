

Good evening everyone. 

hey john , 
- Capture the flag.  

03/06/2023-3:37pm 
@john1234brown , I have left specific notes for you on 
creating.mjs     - ( which is just a js file  thats a module by default , )
lines 
88 - 114
is what I covered earlier and is a easy and proper means 
of  using multiple promises to be fulfilled at one time. 

its a Promise.All or Promise.all . 
------
To run the file again , use npm run dev in a console once 
you open in vs code ( or whatever else that has a console that may run it. )

 , may have to install axios using nom install axios , however , 
 there is a local file in here that supports is. 

 Half of all the stuff is exported so the code is super duper short , 
-----------------------
Once you get the file up and running locally - ( its set to port :3000 now ,  
 you can go there and go too localhost:3000 and localhost:3000/home respestively.)


----- To find out how the demonstration works , 
- run npm run dev , host the site locally. 
 - visit the site at localhost:3000/home , 
     navigate to the , 
      localhost:3000/creating page. and examine the console code when you hit the 

      ALL button.   If your server is running properly 
        you will see the multiple promises create and execute
        and you will have this in your console  , 


 if you need help just ask , 
          capture the flag , and ,  
             - good luck.  



























=========================================================================
extra notes i decided to leave ........... 


// This funtion exports a function that calls the counter until two and then , 
when the function is sert to an onclick buttton , 
the interval is increased every time , plus the 
regulaar interval , making the count faster and faster. ---------------------------

export function clearIntervalChain(){
/    let counter = 2; 
const wait = new Promise((resolve) => {
  
    setInterval(() => {
        let interval; 
        console.log ("interval")
        resolve(`Timeout! ${++interval}`);
        } ,1500); }  );  
    
     wait.then(text => setText(text))
    
    .finally(() =>  appendText(`--Done ${interval}`) ) 

    }  
/