const mongoose = require("mongoose");
const uri = "mongodb+srv://gamerguy:E7BEYywWAvgdWaJu@cluster0.6yohk.mongodb.net/invoice?retryWrites=true&w=majority&appName=Cluster0"

function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };