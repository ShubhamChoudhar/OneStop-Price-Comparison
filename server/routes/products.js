import express from 'express';
const router = express.Router();

import {getSearchProducts} from '../controllers/ProductSearchController.js'
import {fetchHistory} from '../controllers/RecentyViewed.js';
import {fetchRecommendedProducts} from '../controllers/recommendedProducts.js'
//router.post('/', createUser)
router.get('/', getSearchProducts )
router.get('/searchHistory', fetchHistory )
router.get('/productRecommendation', fetchRecommendedProducts)
export default router
