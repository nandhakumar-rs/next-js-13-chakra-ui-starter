'use client'

import { HStack, Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <main>
      <HStack bg="primary.600" h="100vh" w="full" justifyContent="center" alignItems="center">
        <Heading textAlign="center" color="text.900">
          Welcome to Next.js 13 + Chakra UI Starter Code!
        </Heading>
      </HStack>
    </main>
  )
}

export default Home
