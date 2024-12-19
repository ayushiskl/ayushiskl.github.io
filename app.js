import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from "express";
import bodyParser from "body-parser";
import request from "request";
import https from "https";


const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));             //usually same in all code till here....


app.get("/", function(req,res) {
    res.sendFile(__dirname + "/signup.html" );
});

app.post("/",function(req,res) {

    const firstName= req.body.fName;
    const lastName= req.body.lName;
    const email= req.body.email;

   var data={
    members: [
        {
            email_address: email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstName,
                LNAME:lastName,
            }
        }
    ]
   }

   const jsonData=JSON.stringify(data);

   const url="https://us7.api.mailchimp.com/3.0/lists/a706333709";

   const options={
    method:"POST",
    auth:"ayushi1:347a586d19209da57d74fa531bdf916e-us7"

   }

   const request=https.request(url,options,function(response) {

    if(response.statusCode ===200) {
        res.sendFile(__dirname+"/success.html");
    } else {
        res.sendFile(__dirname+"/failure.html");
    }

    response.on("data",function(data) {
        console.log(JSON.parse(data));
    })
    
   })
   //request.write(jsonData);
   request.end();

});


app.post("/failure",function(req,res) {
    res.redirect("/");
})


app.listen(process.env.PORT || 8000,function(req,res) {
    console.log("Server is running on port 8000...");
});

// //347a586d19209da57d74fa531bdf916e-us7                     API KEY

// //a706333709           Audience ID


// import mailchimp from "@mailchimp/mailchimp_marketing";


// mailchimp.setConfig({
//   apiKey: "347a586d19209da57d74fa531bdf916e",
//   server: "us7",
// });

// async function run() {
//   const response = await mailchimp.ping.get();
//   console.log(response);
// }

// run();