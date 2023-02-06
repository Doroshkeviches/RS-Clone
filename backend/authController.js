const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require('./config')

function generateAccessToken(id,roles) {
    const payload = {
            id,
            roles,
    }
    return jwt.sign(payload,secret,{expiresIn: '24h'})

}

class authController{
    
    async registration(req,res){
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Registration error',errors})

            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({message: 'A user with the same name already exists'})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: 'USER'})
            const user = new User({username,password: hashPassword, roles: [userRole.value]})
            await user.save()
            return res.json({message: `The user has been successfully registered`})
        } catch (e) {
            res.status(400).json({message: 'Registration error'})
        }
    }
    async changeValue(req,res){
        try {
            const {username,name,gender,activity,weight,height,age} = req.body
            const userRole = await User.findOne({username})
            console.log(userRole)
           
            userRole.name = name || userRole.name
            userRole.gender = gender || userRole.gender
            userRole.activity = activity || userRole.activity
            userRole.weight = weight || userRole.weight
            userRole.height = height || userRole.height
            userRole.age = age || userRole.age

            await userRole.save()
            return res.json({message: `The user has been successfully updated`,userRole})
        } catch (e) {
            res.status(400).json({message: 'User update error'})
        }
    }
    async login(req,res){
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if (!user) {
                return res.status(404).json({message: `User ${username} not found`})
            }
            const validPassword = bcrypt.compareSync(password,user.password)
            if(!validPassword) {
                return res.status(400).json({message: `Incorrect password`})
            }
            const token = generateAccessToken(user._id,user.roles)
            return res.json({token})
        } catch (e) {
            res.status(400).json({message: 'Login failed'})
        }
    }
    async getUsers(req,res){
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.error
        }
    }
}
module.exports = new authController()
