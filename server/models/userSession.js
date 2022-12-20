import mongoose from 'mongoose'

const userSessionSchema = mongoose.Schema({
    userId: String,
    isDeleted: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const UserSession = mongoose.model('UserSession', userSessionSchema)

export default UserSession