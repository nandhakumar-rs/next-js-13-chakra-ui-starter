'use client' // DO NOT REMOVE THIS LINE (Chakra UI Works only in client side, so the component should be converted into client side app)

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'

const ChakraUiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}

export default ChakraUiProvider
