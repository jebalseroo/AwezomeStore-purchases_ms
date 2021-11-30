const mongoose = require("mongoose");

mongoose.connect('mongodb://bd/Mydatabase', {
    
})
    .then(db => console.log('Db is coneted to', db.Connection.host))
    .catch(err => console.error(err));