const {Schema, model} = require('mongoose')
const User = new Schema({
    username: {type: String , unique: true , required: true},
    password: {type: String , required: true},
    roles :  [{type: String, ref: 'Role'}],
    name : {type: String},
    gender : {type: String},
    activity : {type: String},
    weight : {type: String},
    height : {type: String},
    age : {type: String},
})
module.exports = model('User', User)
