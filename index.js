const express = require('express');

const app = express(); 

// serves files from the static directory
app.use(express.static('./static/'));

app.listen(8080, function () {    
  console.log('Listening at port 8080');  
});
