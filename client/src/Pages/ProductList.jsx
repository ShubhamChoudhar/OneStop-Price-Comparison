import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcements";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import { mobile } from "../Responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  align-items: center;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Title>Shopping Cart</Title>
      
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;