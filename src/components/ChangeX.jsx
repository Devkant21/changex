import { motion } from 'framer-motion'
import React from 'react'
import { Container, Box , Heading} from '@chakra-ui/react'

const ChangeX = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}>
        <Container maxW="container.xl" p={10}>
          <Box flexDirection='row' maxW="100%">
            <Heading 
              textAlign="center">
              ChangeX - Graduate Software Engineer
            </Heading>
          </Box>
        </Container>
    </motion.div>
  )
}

export default ChangeX