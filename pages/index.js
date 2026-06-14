import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { EduProgram, EduSection, EduYear } from '../components/edu'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack &amp; AI engineer based in the United States.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Zhufan Gu
            </Heading>

            <p>Full-stack &amp; AI engineer building LLM-powered products</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden" // hide the image that goes beyond the border
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
          <Paragraph>
            Zhufan is a full-stack software engineer based in the United States,
            focused on AI-powered product development. She builds end to end —
            from Prisma/Postgres schemas and data pipelines to LLM agents on the
            Vercel AI SDK and streaming React frontends. With a graduate
            background in Human–Computer Interaction, she cares as much about how
            a feature feels as how it ships. 
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
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <EduSection>
            <EduYear>2025 - Current Trine University</EduYear>
            <EduProgram>MSc in Information Studies</EduProgram>
          </EduSection>
          <EduSection>
            <EduYear>2022 - 2025 Santa Clara University</EduYear>
            <EduProgram>MSc in Computer Science and Engineering</EduProgram>
          </EduSection>
          <EduSection>
            <EduYear>2019 - 2020 University of St. Andrews</EduYear>
            <EduProgram>MSc in Human Computer Interaction</EduProgram>
          </EduSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Rhythm games, Music, Photography,{' '}
            {/* <Link href="https://www.imdb.com/title/tt26591147/" isExternal>
              Matlock
            </Link>{' '}
            , */}
            <Link href="https://www.imdb.com/title/tt4680444/" isExternal>
              Forged in Fire
            </Link>
            , The Sims 4
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
