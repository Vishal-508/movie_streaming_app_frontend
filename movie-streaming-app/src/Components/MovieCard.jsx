import React, { useState } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

//   const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

const MovieCard = ({ title, rating, imageURL, category, releaseDate, _id }) => {
  console.log(_id);
  const [id, Setid] = useState(_id);
  return (
    <Box>
      <Link to={`/movieDetails/${id}`}>
        <Box
          w="282.48px"
          //  h="450.84px"

          key={id}
          textAlign="left"
          m={"20px 10px"}
          bg={"rgb(255,255,255,0.5)"}
        >
          <Image src={imageURL} alt={title} />
          <Box p={"10px"}>
            <Text fontSize="12px" fontWeight="bold">
              {title}
            </Text>
            <Box fontSize="10px" color="#737373" mt="4px">
              {releaseDate}
            </Box>
            <Flex fontSize="14px" align="center">
              <Box fontWeight="bold" fontSize="16px">
                {" "}
                <Box as="span" fontSize="12px"></Box> {rating}
              </Box>
              <Box
                textDecorationLine="line-through"
                fontSize="12px"
                pl="5px"
              ></Box>
            </Flex>
            <Flex>
              <Text
                mt={"10px"}
                fontSize="11px"
                fontWeight="bold"
                p="3px 8px"
                bg="#F7F7F7"
              >
                {category}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Box>

    // <Flex>
    //     <Box>{title}</Box>
    //     <Image src={imageURL} w={"28%"} />
    //     <Box>{category}</Box>
    //     <Box>{releaseDate} </Box>
    // </Flex>

    //     <Center py={12}>
    //     <Box
    //       role={'group'}
    //       p={6}
    //       maxW={'330px'}
    //       w={'full'}
    //       bg={useColorModeValue('white', 'gray.800')}
    //       boxShadow={'2xl'}
    //       rounded={'lg'}
    //       pos={'relative'}
    //       zIndex={1}>
    //       <Box
    //         rounded={'lg'}
    //         mt={-12}
    //         pos={'relative'}
    //         height={'230px'}
    //         _after={{
    //           transition: 'all .3s ease',
    //           content: '""',
    //           w: 'full',
    //           h: 'full',
    //           pos: 'absolute',
    //           top: 5,
    //           left: 0,
    //           backgroundImage: `url(${imageURL})`,
    //           filter: 'blur(15px)',
    //           zIndex: -1,
    //         }}
    //         _groupHover={{
    //           _after: {
    //             filter: 'blur(20px)',
    //           },
    //         }}>
    //         <Image
    //           rounded={'lg'}
    //           height={230}
    //           width={282}
    //           objectFit={'cover'}
    //           src={imageURL}
    //         />
    //       </Box>
    //       <Stack pt={10} align={'center'}>
    //         <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
    //           {category}
    //         </Text>
    //         <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
    //           {title}
    //         </Heading>
    //         <Stack direction={'row'} align={'center'}>
    //           <Text fontWeight={800} fontSize={'xl'}>
    //             {rating}
    //           </Text>
    //           {/* <Text textDecoration={'line-through'} color={'gray.600'}>
    //             {description}
    //           </Text> */}
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Center>
  );
};

export default MovieCard;
