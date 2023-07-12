import React, { useEffect, useState } from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetailsPage = ({}) => {
  const { id } = useParams();
  console.log(id);
  const [data, SetData] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/allproducts/singleProduct/${id}`)
      .then((res) => SetData(res.data));
    // getData().then((res)=>SetData(res))
    // console.log(data)
    console.log(data);
  }, []);

  return (
    <Flex h={"100vh"} w={"100%"} dir="row" align={"center"} justify={"center"}>
      <Box p={"50px"} w={"50%"}>
        <Text
          fontSize={"18px"}
          p={"20px"}
          color={"gold"}
          bg={"rgb(255,215,0, 0.3)"}
        >
          {/* {category} */}
          {data.category}
        </Text>
        <Heading textShadow={"1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue"}>
          {data.title}
        </Heading>
        <Text color={"white"} fontSize={"26px"} fontWeight={"bold"}>
          {/* {rating} */}
          {data.rating}
        </Text>
        <Text color={"yellow"} fontSize={"lg"}>
          {data.releaseDate}
        </Text>
        <Text
          fontSize="22px"
          lineHeight={"2"}
          color={"white"}
          // fontSize={"lg"}
        >
          {data.description}
        </Text>
      </Box>

      <Flex align={"center"} justify={"center"} w={"50%"}>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={data.imageURL}
          w={"500px"}
          // objectFit={"cover"}
        />
      </Flex>
    </Flex>
  );
};

export default MovieDetailsPage;
