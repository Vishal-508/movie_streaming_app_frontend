import React from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

 
  

const Navbar = () => {

  const navigate = useNavigate()
  const Links= ["Home","AddMovies",]
  const handleLogout=()=>{
    localStorage.setItem("token","");
    localStorage.setItem("isAuth",false)
    navigate("/login")
  }

    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box color={"whiteAlpha.800"} m={"0"} w={{'lg':"100vw", 'md':"100vw", 'sm':"100vw", "base":"100vw" }} 
    bg={"rgb(3, 0, 0,0.2)"}
    //  bg={useColorModeValue('red.100', 'red.900')}
     px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontWeight={"bold"} >Movie Streaming Point</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                   <NavLink to={"/"}>Home</NavLink>
                   <NavLink to={"/addmovie"}>Add Movies</NavLink>
          
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList bg={"none"} border={"none"}  >
                <MenuItem border={"none"} bg={"rgb(3, 0, 0,0.7)"} _hover={{border:"none"}} onClick={handleLogout} >LogOut</MenuItem>
               
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
  )
}

export default Navbar





