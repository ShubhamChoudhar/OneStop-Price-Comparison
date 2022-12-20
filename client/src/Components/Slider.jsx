import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../Data";

const Container = styled.div
`
    width: 100%;
    height: 85vh;
    display: flex;
    background-color: lightblue;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div
`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify content: center;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div
`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div
`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div
`
    height: 50%;
    flex: 1;
`;

const Image = styled.img
`
    height: 100%;
    align-items: center;
`;

const InfoContainer = styled.div
`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1
`
    font-size: 70px;

`;

const Description = styled.p
`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500px;
`;

const Button = styled.button
`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

function Slider()
{
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction => {
        if(direction === "left")
        {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else
        {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    })
    return(
        <Container>

            <Arrow direction ="left" onClick = {() => handleClick("left")}>
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </Arrow>

            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg = {item.bg} key = {item.id}>
                    <ImgContainer>
                        <Image src = {item.img}/>
                    </ImgContainer>

                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>

                </Slide>
            ))}
            </Wrapper>

            <Arrow direction = "right" onClick = {() => handleClick("right")}>
                <ArrowRightOutlined></ArrowRightOutlined>
            </Arrow>

        </Container>
    );
}

export default Slider;