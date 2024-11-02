import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, useColorModeValue, Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { EduProgram, EduSection, EduYear } from '../components/edu'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a software engineer based in United States.
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title"> 
            Zhufan Gu
          </Heading>

          <p>A software developer and UX researcher</p>
        </Box>
        <Box 
          flexShrink={0} 
          mt={{base: 4, md: 0}} 
          ml={{md: 6}} 
          align="center"
        >
            <Box 
              borderColor="whiteAlpha.800" 
              borderWidth={2} 
              borderStyle="solid" 
              maxWidth="100px" 
              display="inline-block" 
              borderRadius="full"
            >
              <Image 
                src="/images/pita.jpeg" 
                alt="Profile image"
                width={100} 
                height={100} 
              />
            </Box>
        </Box>
      </Box>

      <Section delay={0.1}>  
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>Zhufan is a full-stack developer and cat lover based in Cat Land with 
          a passion for cat experience research. When not online, she loves hanging out with 
          her cat. Currently, she is living off her own product called {' '}
          <NextLink href="/projects/tindog"><Link>TinDog</Link> </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" >
          Education
        </Heading>
        <EduSection>
          <EduYear>2022 - 2024 Santa Clara University</EduYear>
          <EduProgram>
            MSc in Computer Science and Engineering
            
          </EduProgram>
        </EduSection>
        <EduSection>
          <EduYear>2019 - 2020 University of St. Andrews</EduYear>
          <EduProgram>
            MSc in Human Computer Interaction
            
          </EduProgram>
        </EduSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Rhythm games, Music, Photography, { ' ' } 
          <NextLink href="https://www.imdb.com/title/tt26591147/"><Link>Matlock</Link> </NextLink>
          , The Sims 4
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page