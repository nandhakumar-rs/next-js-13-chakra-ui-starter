import ChakraUiProvider from '@/providers/chakra-ui.provider'


 const RootLayout = ({
  children,
}: {
  children: React.ReactNode
})  => {
  return (
    <html lang="en">
      <body>
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  )
}



export default RootLayout;