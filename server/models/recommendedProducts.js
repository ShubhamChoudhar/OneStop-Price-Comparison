import mongoose from 'mongoose'

const recommendedProductsSchema = mongoose.Schema({
    userId: String,
    productRecommendations: Object,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const RecommendedProducts = mongoose.model('recommendedProducts', recommendedProductsSchema)

export default RecommendedProducts