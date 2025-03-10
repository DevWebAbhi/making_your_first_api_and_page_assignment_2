// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

app.get("/status-info",(req,res)=>{
  try {
    const {code} = req.query;
    if(!code){
      res.status(400).send({message:"code is not present"});
    }
    if(code == 200){
      res.status(200).send(
        {
          status: 200,
          message: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
        }
      )
    }else if(code == 400){
      res.status(400).send(
        {
          status: 400,
          message: "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
        }
      )
    }else if(code == 404){
      res.status(404).send(
        {
          status: 404,
          message: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
        }
      )
    }else if(code == 500){
      res.status(500).send(
        {
          status: 500,
          message: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
        }
      )
    }else{
      res.status(200).send({message:"status code was not mentioned in question to complete"});
    }
  } catch (error) {
    res.status(500).send({message:"something went wrong"});
  }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
