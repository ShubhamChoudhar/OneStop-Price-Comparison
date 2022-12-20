import {searchEbayProducts} from '../handlers/ebayHandler.js'
import {searchAmazonProducts} from '../handlers/amazonHandler.js'
import {searchBestBuyProducts} from '../handlers/bestBuyHandler.js'
import {execSync} from 'child_process';
import UserSearchHistory from '../models/searchHistory.js'
import RecommendedProducts from '../models/recommendedProducts.js'
// import { execSync } from 'child_process';  // replace ^ if using ES modules

//const {parse, stringify} = require('flatted/cjs');
import {parse, stringify}  from 'flatted'


const categoryToProductSearchKeyMap = {
    "electronics" : "title",
    "books": "name"
}

function findCategory(searchResults) {
    //TODO: check in product results for category
    return "electronics"
}

function getProductComparisonKey(category){
    return categoryToProductSearchKeyMap[category]
}

function createProductResponse(productMap)
{
    console.log(`productMap ${JSON.stringify(productMap)}`)
    const finalResposeObjectArray = []
    for (var[key, value] of productMap.entries())
    {
        //update this logic
       
        finalResposeObjectArray.push({
            "productData" : value[0], 
            "ecommerceOptions" : value
        })   
    }
    return finalResposeObjectArray
}

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }

function compareProucts(productMap, newProduct, comparisionKey)
{
   // console.log(" comparisionKey " + comparisionKey)
     if(comparisionKey === 'title')
     {
        var titleKeywordsArray =  newProduct["title"].split(" ")
        for (var[key, value] of productMap.entries())
        {
            var titleKeywordsOfMap = key.split(" ")
            var arrayDiff = diffArray(titleKeywordsOfMap, titleKeywordsArray)
           // console.log("titleKeywordsOfMap " + arrayDiff)
            if(arrayDiff.length < 7)
            {
                console.log("********** matched***************************")
                console.log( titleKeywordsOfMap + "  " + titleKeywordsOfMap)
                return key
            }
        }
     } else if(productMap[newProduct[comparisionKey]])
     {
        return productMap[newProduct[comparisionKey]]
     }
}
export const getSearchProducts = async (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

    const reqestData = req.query;
    const userId = "61ad3ba79194688cb2597d00"
    const searchString = reqestData["searchString"]
    const productSearchPromiseList = []
    console.log("reqestData " + JSON.stringify(reqestData))
    
   
    productSearchPromiseList.push(searchAmazonProducts(searchString))
    productSearchPromiseList.push(searchEbayProducts(searchString))
  //  productSearchPromiseList.push(searchBestBuyProducts(reqestData["searchString"]))
    
    Promise.all(productSearchPromiseList).then((searchResults) => {
        console.log("Promises resolved")
        JSON.stringify(searchResults)
        //console.log("searchResults " + JSON.stringify(searchResults))
        var command = "amazon-recommanedation.py iphone " +  searchResults
        // const output = execSync( command, { encoding: 'utf-8' }); 
        // console.log('Output was:\n', output);
        var productsArray = []
        for (let index = 0; index < searchResults.length; index++) {
           // console.log("searchResults[index] " + JSON.stringify(searchResults[index]))
            productsArray =  productsArray.concat(searchResults[index])   
        }
        var category = findCategory(searchResults)
        const productComparisonKey =  getProductComparisonKey(category)
       // console.log("productsArray " , productsArray)
        let productMap = new Map()
        for(let i = 0 ; i < productsArray.length; i++)
        {
            var newKey = productsArray[i][productComparisonKey]
            var productMatchKey = compareProucts(productMap, productsArray[i], productComparisonKey)
            if(productMatchKey)
            {
                 //console.log("key in if " + productMap.get(productComparisonKey))
                productMap.get(productMatchKey).push(productsArray[i])
            } else
            {
               // console.log("productsArray[i].productComparisonKey ", JSON.stringify(productsArray[i][productComparisonKey]), productsArray[i])
                
               // console.log("newKey " + newKey)
               const replaceStringsArray = ["Sponsored", "ad","ads","sponsered"]
               if(productsArray[i]["title"]) {
                  // console.log("old title" + newKey)
                   var newTitle = productsArray[i]["title"]
                   for(var j=0 ; j< replaceStringsArray.length ; j++)
                   {
                        newTitle = newTitle.replace("Sponsored Ad -", " ")
                   }
                  // console.log("new title " + newTitle)
                   productsArray[i]["title"] = newTitle
               }
                productMap.set(newKey, [productsArray[i]])
               // console.log("productMap " + productMap.size)
            }
        }
        const finalProductResponse = createProductResponse(productMap)
        var userHistoryData =
        {
            userId: userId,
            searchString: searchString,
            searchResult: finalProductResponse
        }
        const userSearchHistoryObject = new UserSearchHistory(userHistoryData)
        userSearchHistoryObject.save()
        var reccProd = {
            userId: userId,
            productRecommendations : productsArray
        }
        const tempRecomm = new RecommendedProducts(reccProd)
        tempRecomm.save()
        res.status(200).json(finalProductResponse);
    }).catch({
       
    })

}

