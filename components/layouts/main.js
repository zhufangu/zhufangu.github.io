import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import IsometricRoom from '../isometric-room'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
    return (
        <Box as ="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Zhufan Gu - Homepage</title>  
            </Head>

            <Navbar path={router.asPath} />
            
            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <IsometricRoom />
                </NoSsr>
                {children}
            </Container>        
        </Box>
    )
}

export default Main