import setText, {appendText, showWaiting, hideWaiting} from "./results.mjs";

export function get() { 
    axios.get("http://localhost:3000/orders/1") 
       .then(( {data} ) => { 
        setText(JSON.stringify(data) + console.log("Look  sucessful HTTP request on my own server. ") )
       } 
       ).catch(err => setText(err)  );
}

export function getCatch() {
    axios.get("http://localhost:3000/orders/123")
     .then(({data}) => {
      setText(JSON.stringify(data));
})
.catch(err => setText(err +=
     console.log("Look I made a 404 not found. ")  ))

}

export function chain() {
    axios.get("http://localhost:3000/orders/1") 
       .then(( {data} ) => { 
       return axios.get(`http://localhost3000/addresses/${data.shippingAddress}`);
       })
       .then(({data}) => { 
        setText(`City: ${data.city}`);
              } )
    .catch(err => setText(err)  );
}
export function chainCatch() {
    axios.get("http://localhost:3000/orders/1") 
    
    .then(( {data} ) => { 
    return axios.get(`http://localhost3000/addresses/${data.shippingAddress}`);
    }
    )
    .then(({data}) => { 
     setText(`City: ${data.my.city}`);
           } )
           .catch(err => setText(err += console.log("Jeremy Is Kicking that metroid ass ! " + "Jeremy Is Kicking that metroid ass ! " + "Jeremy Is Kicking that metroid ass ! "+ "Jeremy Is Kicking that metroid ass ! ")
            + console.log("This is an important example of how to chain functions within them selves. "))
           );
           
           

}

export function final() {

    showWaiting();

    axios.get("http://localhost:3000/orders/1") 
    .then(( {data} ) => { 
    return axios.get(`http://localhost3000/addresses/${data.shippingAddress}`);
    })
    .then(({data}) => { 
     setText(`City: ${data.city}`)
    })
 .catch(err => setText(err) )
        
 .finally (() => { 
    setTimeout(() => { 
        hideWaiting(); 
    }, 1500)
   
    appendText("   FINALLY after this loads you will see the text. - Finally. ")

} )


}