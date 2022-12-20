// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
import Home from "./Pages/Home";
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import Login from './Pages/Login';
// import Navbar from './Components/Navbar';


// function App() {
//   return (
//     <div className="App">
//       {/* <Home /> */}
//       {/* <ProductList/> */}
//       {/* <Login /> */}
//       {/* <Register/> */}
//       {this.state.inputString == "" ? <Home /> : <ProductCard inputText={this.state.inputString}/>}
//     </div>
//   );
// }

// export default App;


import React from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
// import ActionAreaCard from './components/ActionAreaCard';
import ProductCard from "./Components/ProductCard";
// import LoginComponent from './components/userLogin/userLogin'
// import Homepage from './Components/homepage';
import PrimarySearchAppBar from "./Components/PrimarySearchAppBar";
import Navbar from "./Components/Navbar";
class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            inputString: "",
            isShoppingCartPage: false
        };
        this.changeInputString = this.changeInputString.bind(this);
    }

    changeInputString(inputString){
        console.log("in changeInputString", inputString)
        this.setState({
            inputString: inputString
            

        }); // can pass callback function to setState

        console.log("in changeInputString ", this.state.inputString)
    }

    // render() {
        
    //     return(
    //         <>
    //         {/* <LoginComponent mode="login"/> */}
    //         <Navbar onSearch={this.changeInputString}/>
    //         {/* <ProductCard inputText={this.state.inputString}/> */}
    //         {/* <ActionAreaCard /> */}
    //         {/* <Homepage /> */}
    //         {/* <ProductCard inputText={this.state.inputString}/> */}
    //         if(this.state.inputString == "" )
    //         {
    //           <Home />
    //         }else if(this.state.inputString !== ""){
    //           <ProductCard inputText={this.state.inputString}/>
    //         } else if(){
              
    //         }
    //         <div> {this.state.inputString == "" ? <Home /> : <ProductCard inputText={this.state.inputString}/>}</div>
    //         </>
    //     );
    // }

    render() {
      return(
        <>
            <Navbar onSearch={this.changeInputString}/>
            <div> {this.state.inputString == "" ? <ProductList /> : <ProductCard inputText={this.state.inputString}/>}</div>
        </>
      )
    }
}

export default App