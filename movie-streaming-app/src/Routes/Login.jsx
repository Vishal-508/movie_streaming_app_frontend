import React, { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import bg from '../assets/h4.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const iniState={
    email:"",
    password:""
  }
  
  const [loginform, SetLoginform]=useState(iniState);

  const navigate = useNavigate()

  const handleChange = e =>{
    const {name,value}=e.target;
    SetLoginform({
        ...loginform, [name]:value
    })
}

const handleSubmit = e =>{
  e.preventDefault()
  try{
    axios.post("http://127.0.0.1:8080/user/login",loginform).then((res)=> {localStorage.setItem("token",res.data.token);localStorage.setItem("isAuth",true) })
    
    // fetch("http://127.0.0.1:8080/user/login",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify(loginform)
    // })
    // .then(res=>res.json()).then(res=>SetToken(res.body))
    navigate("/")
    
  }
  catch(err){
    console.log("wrong credentials")
  }
  
}








  return (
    <Flex
    minH={'100vh'}
    w={"100vw"}
    align={'center'}
    justify={'center'}
    // bg={useColorModeValue('gray.50', 'gray.800')}
    backgroundImage={`url(${bg})`}
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize={"cover"}
    color={'white'}
    >
      
    <Stack borderRadius={"10px"} bg={"rgb(3, 0, 0,0.2)"} spacing={8}  py={12} px={6}>
      <Stack align={'center'}
      >
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        
      </Stack>
      <Box
        rounded={'lg'}
        // bg={useColorModeValue('white', 'gray.700')}
        
        // boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <form id="form" onSubmit={handleSubmit} >
          <FormControl isRequired id="email">
            <FormLabel>Email address</FormLabel>
            <Input  onChange={handleChange} name='email' _placeholder={{ color: "rgb(255,255,255,.6)" }} value={loginform.email}  placeholder='dx@gmail.com' type="email" />
          </FormControl>
          <FormControl id="password" isRequired >
            <FormLabel>Password</FormLabel>
            <Input value={loginform.password} onChange={handleChange} _placeholder={{ color: "rgb(255,255,255,.6)" }}  name='password' placeholder='dx1234' type="password" />
          </FormControl>
          <FormControl mt={"20px"} >
       
       <Input  bg={"rgb(3, 0, 0,0.7)"}
          type="submit" _hover={{cursor:"pointer", background:"rgb(3, 0, 0,0.9)"}} border={"none"}  />
     </FormControl>
     </form>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Login
