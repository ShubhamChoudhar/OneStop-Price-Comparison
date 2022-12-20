import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from "@material-ui/core";

const Container = styled.div
`
    height: 60px;
    background-color: #333;
    padding: 5px;
`;

const Wrapper = styled.div
`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div
`
    flex: 1;
    color: #fff;
    margin: 2px auto;
`;

const Logo = styled.span
`
    font-size: 30px;
    cursor: pointer;
`;

const Center = styled.div
`
    flex: 1;
    color: #fff;
`;

const SearchContainer = styled.div
`
    
    display: flex;
    align-items: center;
    padding: 2px;
    margin: 3px auto;
`;

const Input = styled.input
`
    border: none;
    width: 95%;
`;

const Button = styled.button
`
    cursor: pointer;
`;

const Right = styled.div
`
    flex: 1;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div
`
    font-size: 14px;
    cursor: pointer;
    padding: 5px;

`;

function Navbar(props)
{
    const handleSearchBar = (event) => {
   
        console.log('In here handle search bar');
        console.log(event);
        props.onSearch(event.target.value)
      };

    return(
        <Container>
            <Wrapper>

                <Left>
                    <Logo>
                        OneStopPrice
                    </Logo>
                </Left>

                <Center>
                    <SearchContainer>
                        <Input placeholder = "Search..." onClick = {handleSearchBar} ></Input>
                        <Button onClick = {handleSearchBar}><Search ></Search></Button>
                    </SearchContainer>
                </Center>

                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;