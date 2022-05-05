import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex h="75px" bgGradient='linear(to-l, #7928CA, #FF0080)' px={600} justifyItems="center">
        {/* <Box w='100%' h='70px' bgGradient='linear(to-l, #7928CA, #FF0080)' > */}
        <Image
            borderRadius='full'
            boxSize='50px'
            src='https://angel.co/cdn-cgi/image/width=400,height=400,format=auto,fit=cover/https://photos.angel.co/users/14588839-original?1650981037'
            alt='Laura Murphy-Clarkin'
        />
    
        <Image
            borderRadius='full'
            boxSize='50px'
            src='https://photos.angel.co/users/6976103-medium_jpg?1554460749'
            alt='Devkant Swargiary'
        />
        {/* </Box>  */}
    </Flex>
  )
}

export default Navbar