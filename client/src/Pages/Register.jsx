import styled from "styled-components";
import { mobile } from "../Responsive";
var axios = require('axios');

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ebayimg.com/thumbs/images/g/mMMAAOSwIo1hN8qD/s-l225.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const createNewUser= event => {
  event.preventDefault();
    console.log("eventData createNewUser")
    // var data = JSON.stringify({
    //   "userName": "MAyu17079",
    //   "name": "Mayuri",
    //   "lastName": "Mahandule",
    //   "password": "Mayuri@123",
    //   "email": "mahandule.mayuri1233444@gmail.com"
    // });
    let data = {
      "userName": "MAyu17079",
      "name": "Mayuri",
      "lastName": "Mahandule",
      "password": "Mayuri@123",
      "email": "mahandule.mayuri1233444@gmail.com"
    };
    console.log('data is this', data);
    var config = {
      method: 'post',
      url: 'http://localhost:5000/users/',
      headers: { 
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
      },
      data : data
    };
    console.log('Config', config);
    axios.post('http://localhost:5000/users/', data, config.headers)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

const Register = () => {
 
  return (
    <Container> 
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form 
        // onSubmit={createNewUser} 
        >
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit" onClick={createNewUser}>CREATE </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;