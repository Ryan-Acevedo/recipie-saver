import { Schema, model } from "mongoose";
import mongooseModelValidator from "mongoose-unique-validator";
import validator from "validator";
import bcrypt from "bcrypt";

const {isEmail} = validator
const UserSchema = new Schema({
    firstName: {
        type:String,
        required: [true, 'First Name is required.']
    },
    lastName: {
        type:String,
        required: [true, 'Last Name is required.']
    },
    email: {
        type:String,
        required: [true, 'Email is required.'],
        unique: true,
        validate: [isEmail, 'Invalid Email.']
    },
    password : {
        type:String,
        required: [true, 'Password is required.'],
        minLength: [8, 'Password must be at least 8 characters.']
    }
}, {timestamps: true})


UserSchema.plugin(mongooseModelValidator, {message:'A user with this {PATH} already exists.'});


UserSchema.virtual('confirmPassword')
    .get(function() {
        return this._confirmPassword
    })
    .set(function(value) {
        this._confirmPassword = value
    })
// Confirm password validation
UserSchema.pre('validate', function(next) {
    if(this.confirmPassword === ''){
        this.invalidate('confirmPassword', 'Confirm Password is required.')
    }
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Passwords do not match.')
    }
    next()
})

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 8)
        .then(hash => {
            this.password = hash
            next()
        })
})


const User = model('User', UserSchema)
export default User;