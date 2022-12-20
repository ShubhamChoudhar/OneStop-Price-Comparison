import * as amazonScraper from 'amazon-buddy'

export const searchAmazonProducts = async(searchString) => {
    console.log("searchString " + JSON.stringify(searchString))
    const product = await amazonScraper.products({ keyword: searchString, number: 15 });
    const finalProductArray = []

    for(var i = 0; i< product.result.length; i++)
    {
      var currProduct = product.result[i]
      console.log(" currProduct" + JSON.stringify(currProduct))
      var newProdObject = {
          website: "amazon",
          price: "$" + currProduct.price.current_price,
          discount: currProduct.price.savings_percent,
          savingAmount :  currProduct.price.savings_amount,
          total_reviews : currProduct.reviews.total_reviews,
          rating: currProduct.reviews.rating,
          imageLink: currProduct.thumbnail,
          title : currProduct.title,
          link: currProduct.url
      }
      finalProductArray.push(newProdObject)
    }
    return finalProductArray
  
}