import React from 'react'
import { Flex, Img } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -150 }}
      animate={{ y: -5 }}
      transition={{ delay: 0.4, type: 'spring', stiffness: 80 }}
      maxW='container.xl' padding={20}
      >
      <Flex grow h="70%"  bgGradient='linear(to-l, #7928CA, #FF0080)' px={600} py={4} alignItems="center" justify="space-between">
        {/* <Box w='100%' h='70px' bgGradient='linear(to-l, #7928CA, #FF0080)' > */}
        <Img
            borderRadius='full'
            boxSize='50px'
            src='https://angel.co/cdn-cgi/image/width=400,height=400,format=auto,fit=cover/https://photos.angel.co/users/14588839-original?1650981037'
            alt='Laura Murphy-Clarkin'
        />
        <Img
            borderRadius='full'
            boxSize='50px'
            src='https://photos.angel.co/users/6976103-medium_jpg?1554460749'
            alt='Devkant Swargiary'
        />
      </Flex>
    </motion.div>
  )
}

export default Navbar