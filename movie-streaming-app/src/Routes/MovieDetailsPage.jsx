import React from 'react'
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
  } from '@chakra-ui/react';

const MovieDetailsPage = ({imageURL, title, rating, description, category, releaseDate}) => {
  return (
    <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {category}
            </Text>
            <Heading>{title}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              {rating}
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
              {releaseDate}
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
              {description}
            </Text>
        
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
               imageURL
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
  )
}

export default MovieDetailsPage

