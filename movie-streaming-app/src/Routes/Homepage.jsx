import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Box, Flex } from '@chakra-ui/react'
import axios from 'axios'
import MovieCard from '../Components/MovieCard'

// const getData=()=>{
//     return fetch("http://127.0.0.1:8080/allproducts/")
//     .then(res=>
//         res.json().then(res=>console.log(res))
//     )
//   }
  

const Homepage = () => {
    const [data,SetData]=useState([]);
    

useEffect(()=>{
   axios.get("http://127.0.0.1:8080/allproducts?sort=asc").then(res=>SetData(res.data))
    // getData().then((res)=>SetData(res))
    // console.log(data)
console.log(data)
},[])

  return (
    <>
    <Navbar/>
    <Flex  justify={"center"} align={"center"}  w={"100vw"} >
 {  data?.map((item)=><MovieCard key={item.id} {...item} />  ) }
    </Flex>
    </>
  )
}

export default Homepage