const mongoose = require('mongoose');

// const database = 'tripPartner';

mongoose.connect("mongodb://127.0.0.1:27017/tripPartner",{
   useNewUrlParser:true,
   useUnifiedTopology:true,
   
}).then(()=>{
    console.log(`connnection established`);

    
}).catch((error)=>{
    console.log(error);
});

// mongoose.connection.once("open",()=>{
//     console.log("shubham");
// }).on("error",(error)=>{
//     console.log("error");
// })

// module.exports
