const s = require('http').Server((req, res) => {
   let url = req.url;
   if (url.slice(0, 5) == "/deg/") {
      let str = url.slice(5); 
      let arr = str.split("/");
      let x1 = arr[0];
      let x2 = arr[1];
      let ans = Math.pow(x1, x2);
      res.end(ans);
   }
   else if (url == "/login" || url == "/login/")
      res.end("grenkingv");
});
s.listen(4321);
