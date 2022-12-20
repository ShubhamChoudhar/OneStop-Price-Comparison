import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
function fetchRecommendedProducts()
{
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'http://localhost:5000/products/searchHistory',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });

}

const Products = () => {
  var recommendedProduct = fetchRecommendedProducts()["searchResult"];
  dataObject = 
  for(var i = 0 ; i< recommendedProduct.length; i++)
  {

  }
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

// import React from "react";
// import styled from "styled-components";
// import { popularProducts } from "../Data";
// import Product from "./Product";

// const Container = styled.div
// `
//     padding: 20px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
// `;

// function Products()
// {
//     return(
//         <Container>
//             {popularProducts.map((item) =>(
//                 <Product item = {item} />
//             ))}
//         </Container>
//     );
// }

// export default Products;