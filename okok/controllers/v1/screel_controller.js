// implementation of all the menthods and functions in here
var axios = require('axios');
require('dotenv').config();

// setting the keys
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

// function to get access_token from github and send to my app
exports.getAccess_token = (req, res) => {
   console.log(req.params.code);
   console.log("Accessing token from github...");
  //  object to be sent to the gihub api
   const dataObject = {
      client_id: client_id,
      client_secret: client_secret,
      code: req.params.code
    }
    axios.post(`https://github.com/login/oauth/access_token`, 
    dataObject,
    {
      headers: {
         "Accept": "application/json"
       }
    }).then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

}