import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Box, Flex, Select } from "@chakra-ui/react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";

// const getData=()=>{
//     return fetch("http://127.0.0.1:8080/allproducts/")
//     .then(res=>
//         res.json().then(res=>console.log(res))
//     )
//   }

const Homepage = () => {
  const [data, SetData] = useState([]);
  const [sort, SetSort] = useState("asc");
  const [filter, SetFilter] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/allproducts?sort=${sort}&${filter}`)
      .then((res) => SetData(res.data));
    // getData().then((res)=>SetData(res))
    // console.log(data)
    console.log(data);
  }, [sort, filter]);

  return (
    <>
      <Box>
        <Navbar />
        <Flex
          bg={"rgb(255,0,0,0.2)"}
          direction={"row"}
          align={"center"}
          justify={"space-between"}
        >
          {/* <Box color={"red"}>
            <Select
              onChange={(e) => SetFilter(e.target.value)}
              border={"none"}
              placeholder="Filter By Category"
            >
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
            </Select>
          </Box> */}
          <Box color={"red"}>
            <Select
              // p="1px 6px 12px"
              // w="147px"
              // h="26px"
              // fontSize="12px"
              // variant="unstyled"
              border={"none"}
              value={sort}
              onChange={(e) => SetSort(e.target.value)}
            >
              <option style={{ background: "rgb(3,0,0,o.5)" }} value="">
                --Sort by--
              </option>
              {/* <option value="new">New</option> */}
              <option style={{ background: "#rgb(3,0,0,o.5)" }} value="desc">
                {" "}
                Low to High
              </option>
              <option style={{ background: "#rgb(3,0,0,o.5)" }} value="asc">
                {" "}
                High to Low
              </option>
            </Select>
          </Box>
        </Flex>
      </Box>

      <Flex wrap={"wrap"} justify={"center"} align={"center"} w={"100vw"}>
        {data?.map((e, i) => (
          <MovieCard key={Date.now() + i} {...e} />
        ))}
      </Flex>
    </>
  );
};

export default Homepage;
