const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@sarathfiles.1yent.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
const Schema = mongoose.Schema;
const AuthorSchema=new Schema({
    name:String,
    country:String,
    genre:String,
    image:String
});
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;