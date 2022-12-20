import http from 'http'
import axios from 'axios'
import cheerio from 'cheerio';
import {parse, stringify}  from 'flatted'

const EBAY_PRODUCT_SEARCH_URL = '/user/product?'

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  
export const searchEbayProducts = async(searchString) => {
 
     
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     accept: 'application/json',
      //   }
        
      //};
    //  try {
        
      
          //const response = await axios.get(this.EBAY_PRODUCT_SEARCH_URL, { params: { "searchString": searchString } })
         // console.log("ebay scraper promise resolved ")
         // var data = '';
          // axios.get(this.EBAY_PRODUCT_SEARCH_URL, { params: { "searchString": searchString } })
          //   .then(response => { 
          //       console.log("ebay scraper promise resolved ")
          //       console.log(response);
          //       return response;
          //   })
          //   .catch(error => {
          //       console.error(error);
          //   })
          // console.log(response)
          // const jsonStringResponse = JSON.stringify(response, getCircularReplacer());
        // console.log(jsonStringResponse);
        // response = JSON.parse(jsonStringResponse)
      //    console.log(jsonStringResponse)
          // const ebayProductsJson = JSON.parse(jsonStringResponse)["devtoLists"]
          //return ebayProductsJson
          
      // } catch (error) {
      //     console.log(error.response);
      // }
      

     
        try {
            console.log("running srcaper")
           // const keyWord = req.query.searchString;
           // const keyWord = searchString
            const productCount =10;
            const minprices = 0;
            const Linklocation = "USA";
          
            const urls = `https://www.ebay.com/sch/i.html?_from=R40&_nkw=${searchString}&_sacat=0&_ipg=${productCount}&rt=nc&_udlo=${minprices}&rt=nc&LH_PrefLoc=${Linklocation}`;
            
            const response = await axios.get(urls)
            console.log("url" + urls)
            console.log("fetching data ********************************")
            let $ = cheerio.load(response.data);

            let devtoList = [];
            var count = 0;
            $('li.s-item ').each(function(i, elem) {
                devtoList[i] = {
                    website: "ebay",
                    title: $(this).find('h3.s-item__title').text(),
                    price: $(this).find('span.s-item__price').text(),
                    location: $(this).find('span.s-item__location').text(),
                    imageLink: $(this).find('img.s-item__image-img').attr('src'),
                    link: $(this).find('a').attr('href'),
                }
                count++;
               
            });

            devtoList.shift();
            console.log("***********************scraper result**************")
            //console.log(devtoList)
            return devtoList.slice(10);

        } catch (error) {
          console.log("errorrrrrr*****************************")
            console.error(error);
        }
    
}
