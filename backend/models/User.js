const {Schema, model} = require('mongoose')
const User = new Schema({
    username: {type: String , unique: true , required: true},
    password: {type: String , required: true},
    roles :  [{type: String, ref: 'Role'}],
    name : {type: String},
    gender : {type: String},
    activity : {type: Number},
    weight : {type: Number},
    height : {type: Number},
    age : {type: Number},
})
module.exports = model('User', User)
