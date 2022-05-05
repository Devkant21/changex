import { motion } from 'framer-motion'
import React from 'react'
import { Text } from '@chakra-ui/react'

const ChangeX = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}>
      <Text 
        fontSize="md"
        textAlign={[ 'center' ]}>
        ChangeX - Graduate Software Engineer
      </Text>
    </motion.div>
  )
}

export default ChangeX