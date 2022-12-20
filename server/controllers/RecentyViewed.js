import UserSearchHistory from '../models/searchHistory.js'

export const fetchHistory = async (req, res) => {
    const userId = "61ad3ba79194688cb2597d00"
    try{
        const searchHistory = await UserSearchHistory.find({userId: userId}).sort({createdAt: -1}).limit(5)
        console.log("searchHistory :: " + searchHistory)
        res.status(200).json(searchHistory)
    } catch {
        res.status(404).json("Somethimg went wrong")
    }
}