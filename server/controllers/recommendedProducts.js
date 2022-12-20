import RecommendedProducts from '../models/recommendedProducts.js'

export const fetchRecommendedProducts = async (req, res) => {
    const userId = "61ad3ba79194688cb2597d00"
    try{
        const searchHistory = await RecommendedProducts.find({userId: userId}).sort({createdAt: -1}).limit(20)
        console.log("searchHistory :: " + searchHistory)
        res.status(200).json(searchHistory)
    } catch {
        res.status(404).json("Somethimg went wrong")
    }
}