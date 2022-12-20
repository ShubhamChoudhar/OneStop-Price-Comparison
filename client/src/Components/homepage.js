import * as React from 'react';
import {Button , Carousel}from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ActionAreaCard from './ActionAreaCard';
import axios from 'axios';
import styles from '../Home.module.css';
import { style } from '@mui/system';

class Homepage extends React.Component {
    render(){
        return (
        <div className = {styles.div}>
           <font className = {styles.font} className = {styles.color}> Recommended Products </font> 
            <Carousel>
                <Carousel.Item>
                    <img
                    className = {styles.img}
                    src="https://i.ebayimg.com/thumbs/images/g/mMMAAOSwIo1hN8qD/s-l225.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className = {styles.color} className = {styles.text}>First slide label</h3>
                    <p className = {styles.color} className = {styles.text}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className={styles.img}
                    src="https://i.ebayimg.com/thumbs/images/g/z2wAAOSwZDFcyeM2/s-l225.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 className = {styles.color} className = {styles.text}>Second slide label</h3>
                    <p className = {styles.color} className = {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className={styles.img}
                    src="https://i.ebayimg.com/thumbs/images/g/kJAAAOSwc-tY5NFx/s-l225.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 className = {styles.color} className = {styles.text}>Third slide label</h3>
                    <p className = {styles.color} className = {styles.text}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
        );
    }
  }

export default Homepage;