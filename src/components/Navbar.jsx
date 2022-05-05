import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: -5 }}
      transition={{ delay: 0.4, type: 'spring', stiffness: 80 }}
      >
      <Flex h="70px" w="full" bgGradient='linear(to-l, #7928CA, #FF0080)' px={600} py={2} justifyItems="center">
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
    </motion.div>
    
  )
}

export default Navbar