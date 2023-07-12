import React, { useEffect, useState } from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import add_bg from '../assets/add_bg2.jpg'


const initialState={
    title:"",
    description:"",
    imageURL:"",
    category:"",
    rating:0 || "",
    releaseDate:""

}

const AddMoviepage = () => {

const [form, SetForm]=useState(initialState || {});
const token= localStorage.getItem("token");
const navigate = useNavigate()

const handleChange = e =>{
    const {name,value}=e.target;
    SetForm({
        ...form, [name]:value
    })
}
const handleSubmit = e =>{
  const headers = {
    Authorization: `Bearer ${token}`,
  };
    e.preventDefault()
  axios.post("http://127.0.0.1:8080/allproducts/create",form,{
    headers
  })
  navigate("/")

    // fetch("http://127.0.0.1:8080/allproducts/create",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify(form)
    // })
    // .then(res=>res.json())
    
}

// useEffect(()=>{
//   let alldata= axios.post("http://127.0.0.1:8080/allproducts/create",form).then((r)=>console.log(r)).catch((err)=>console.log(err));
//   console.log(form)
// },[])

  return (
    <Flex
   

    direction={"column"}
    // filter='auto' blur='2px'
    // filter='grayscale(80%)'
    mt={"0"}
    pt={"0"}
    w="100vw"
    minH={'100vh'}
    align={'center'}
    justify={'space-between'}
    backgroundImage={`url(${add_bg})`}
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize={"cover"}
    // bg={useColorModeValue('gray.50', 'gray.800')}
    >
        <Navbar/>
    <Stack
    // backdropFilter='auto' backdropBlur='8px'
    filter='grayscale(80%)'
      spacing={4}
      w={'full'}
      color={"white"}
      maxW={'md'}
      bg={"rgb(3, 0, 0,0.2)"}
      // bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      boxShadow={'lg'}
      p={6}
      mb={"8%"}
      >
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
        Add New Movie 
      </Heading>
      <form onSubmit={handleSubmit}>
      <FormControl id="title"  isRequired>
        <FormLabel>Title </FormLabel>
        <Input
        onChange={handleChange}
        placeholder="Add title here"
        _placeholder={{ color: "rgb(255,255,255,.6)" }}
        type="text"
        name='title'
        value={form.title}
        />
      </FormControl>
      <FormControl id="description" isRequired>
        <FormLabel>description</FormLabel>
        <Input name='description' value={form.description} onChange={handleChange} placeholder="Add Description here"
          _placeholder={{ color: "rgb(255,255,255,.6)" }} type="text" />
      </FormControl>
      <FormControl id="imageURL" isRequired>
        <FormLabel>imageURL</FormLabel>
        <Input name='imageURL' value={form.imageURL} onChange={handleChange} placeholder="Add image URL here"
          _placeholder={{ color: "rgb(255,255,255,.6)" }} type="text" />
      </FormControl>
      <FormControl id="category" isRequired>
        <FormLabel>category</FormLabel>
        <Input name='category' value={form.category} onChange={handleChange} placeholder="Add category here"
          _placeholder={{ color: "rgb(255,255,255,.6)" }} type="text" />
      </FormControl>
      <FormControl id="rating" isRequired>
        <FormLabel>rating</FormLabel>
        <Input name='rating' value={form.rating} onChange={handleChange} placeholder="Add rating here (1-10)"
          _placeholder={{ color: "rgb(255,255,255,.6)" }} type="number" />
      </FormControl>
      <FormControl id="releaseDate" isRequired>
        <FormLabel>releaseDate</FormLabel>
        <Input name='releaseDate' value={form.releaseDate} onChange={handleChange}
           type="Date"  />
      </FormControl>
      <Stack spacing={6} mt={"20px"} >
      <FormControl   >
       
        <Input  bg={"rgb(3, 0, 0,0.7)"}
           type="submit" _hover={{cursor:"pointer", background:"rgb(3, 0, 0,0.9)"}} border={"none"}  />
      </FormControl>
      </Stack>
        </form>
    </Stack>
  </Flex>
  )
}

export default AddMoviepage

  
