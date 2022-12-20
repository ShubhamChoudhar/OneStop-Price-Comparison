import React from "react";
import styled from "styled-components";

const Container = styled.div
`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img
`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div
`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1
`
    color: red;
    margin-bottom: 20px;
`;

const Button = styled.button
`
    cursor: pointer;
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    font-weight: 600;
`;

function CategoryItem({item})
{
    return(

        <Container>
            <Image src = {item.img}></Image>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
}

export default CategoryItem;