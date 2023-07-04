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
import { Navigate } from 'react-router-dom';


const initialState={
    title:"",
    description:"",
    imageURL:"",
    category:"",
    rating:0,
    releaseDate:""

}

const AddMoviepage = () => {

const [form, SetForm]=useState(initialState || {});

const handleChange = e =>{
    const {name,value}=e.target;
    SetForm({
        ...form, [name]:value
    })
}
const handleSubmit = e =>{
    e.preventDefault()
    fetch("http://127.0.0.1:8080/allproducts/create",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(form)
    })
    .then(res=>res.json()).then(()=>Navigate("/"))
    
}

// useEffect(()=>{
//   let alldata= axios.post("http://127.0.0.1:8080/allproducts/create",form).then((r)=>console.log(r)).catch((err)=>console.log(err));
//   console.log(form)
// },[])

  return (
    <Flex
   

    direction={"column"}
    mt={"0"}
    pt={"0"}
    w="100vw"
    minH={'100vh'}
    align={'center'}
    justify={'space-between'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
        <Navbar/>
    <Stack
    
      spacing={4}
      w={'full'}
      maxW={'md'}
      bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      boxShadow={'lg'}
      p={6}
      my={12}
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
        _placeholder={{ color: 'gray.500' }}
        type="text"
        name='title'
        value={form.title}
        />
      </FormControl>
      <FormControl id="description" isRequired>
        <FormLabel>description</FormLabel>
        <Input name='description' value={form.description} onChange={handleChange} placeholder="Add Description here"
          _placeholder={{ color: 'gray.500' }} type="text" />
      </FormControl>
      <FormControl id="imageURL" isRequired>
        <FormLabel>imageURL</FormLabel>
        <Input name='imageURL' value={form.imageURL} onChange={handleChange} placeholder="Add image URL here"
          _placeholder={{ color: 'gray.500' }} type="text" />
      </FormControl>
      <FormControl id="category" isRequired>
        <FormLabel>category</FormLabel>
        <Input name='category' value={form.category} onChange={handleChange} placeholder="Add category here"
          _placeholder={{ color: 'gray.500' }} type="text" />
      </FormControl>
      <FormControl id="rating" isRequired>
        <FormLabel>rating</FormLabel>
        <Input name='rating' value={form.rating} onChange={handleChange} placeholder="Add rating here"
          _placeholder={{ color: 'gray.500' }} type="number" />
      </FormControl>
      <FormControl id="releaseDate" isRequired>
        <FormLabel>releaseDate</FormLabel>
        <Input name='releaseDate' value={form.releaseDate} onChange={handleChange}
           type="Date"  />
      </FormControl>
      <Stack spacing={6}>
      <FormControl id="releaseDate" isRequired>
        <FormLabel>releaseDate</FormLabel>
        <Input  
           type="submit" _hover={{cursor:"pointer"}}  />
      </FormControl>
      </Stack>
        </form>
    </Stack>
  </Flex>
  )
}

export default AddMoviepage

  
