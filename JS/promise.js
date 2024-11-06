const promice=new Promise(
    (resolve,reject)=>{
        console.log("first promise");
        // resolve("successfully fetched data");
        reject("network error");
        
    }
);
promice.then(
    (msg)=>console.log(msg)
    
).catch(
    (err)=>console.log("Error:",err)
    
);


