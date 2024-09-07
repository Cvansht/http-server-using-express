const express =require("express");
const app =  express();




const users =[{
    name :"shivansh",
    kidneys :[{
        health :false
    }]
}];

app.use(express.json());

app.get ("/" , function (req ,res )
{
    const  johnKidneys =users[0].kidneys ;
    const numberOfKidneys =johnKidneys.length;
    let numberOfHealthyKidneys =0;
    for (let i=0; i < johnKidneys.length ; i++){
        if (johnKidneys[i].health)
            numberOfHealthyKidneys = numberOfHealthyKidneys +1 ;
    }
    const numberOfUnhealthyKidneys = numberOfKidneys -numberOfHealthyKidneys ;
    res.json ({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

    
    
})

app.post ("/" , function( req ,res){
    const isHealthy  =req.body.isHealthy;
    users[0].kidneys.push({
        healthy :isHealthy
    })
    res.json({
        msg:"done"
    })
})

app.post("/" ,function (req ,res){
    const isHealthy = req.body.isHealthy ;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done!"
    })

})

app.put("/" ,function(req ,res){
    for (let i =0 ; i <users[0].kidneys.length ; i++){
users[0].kidneys[i].health =true ;
    } 
})


app.listen(3000) ;




