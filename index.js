const { createReadStream } = require('fs');

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept, Access-Control-Allow-Headers'
};

require ('http')
.Server((req, res) => {
   let url = req.url;
   if (url.slice(0, 5) == "/deg/") {
      let str = url.slice(5); 
      let arr = str.split("/");
      let x1 = arr[0];
      let x2 = arr[1];
      let ans = Math.pow(x1, x2);
      res.writeHead(200, '', CORS);
      return res.end(ans.toString());
   }


  if (req.url === '/login/') {
    res.writeHead(200, '', CORS);
    return res.end(process.env.login);
  }  

 
})
.listen(process.env.PORT);
