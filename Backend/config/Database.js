const mongoose = require('mongoose');
require('dotenv').config();
const Dbconnect = () => {
    mongoose.connect("mongodb://localhost:27017/Data" , {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(() => { 
        console.log("Database Connection Established");
    }
    )
    .catch((err) => {
        console.log(err); 
        process.exit(1);
    }
    )
}
module.exports = Dbconnect;