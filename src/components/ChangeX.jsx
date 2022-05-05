import { Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { Flex, VStack } from '@chakra-ui/react'

const ChangeX = () => {
  return (
    <motion.div
        initial={{ x: -500 }}
        animate={{ x: 500 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        >
        <Container maxW="full">
            <Flex h="10vh" alignItems="center">
            <VStack
            bg="purple.200"
            textColor="Black"
            fontSize="sm"
            fontFamily={'heading'}
            alignItems="center"
            // w="full"
            // h="sm"
            p={2}
            align='flex-center'>
                <h1>ChangeX - Graduate Software Engineer</h1>
            </VStack>
            </Flex>
        
            
        </Container>

        
    </motion.div>
  )
}

export default ChangeX