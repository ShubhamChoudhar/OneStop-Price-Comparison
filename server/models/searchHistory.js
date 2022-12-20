import mongoose from 'mongoose'

const userSearchHistorySchema = mongoose.Schema({
    userId: String,
    searchString: String,
    searchResult: Object,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const UserSearchHistory = mongoose.model('userSearchHistory', userSearchHistorySchema)

export default UserSearchHistory