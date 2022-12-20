import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
    userName: String,
    name: String,
    lastname: String,
    password: String,
    email: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Users = mongoose.model('Users', usersSchema)

export default Users