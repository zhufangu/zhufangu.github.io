import {
  Container,
  Link,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Wrap,
  WrapItem,
  Tag,
  useColorModeValue
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { DownloadIcon } from '@chakra-ui/icons'

const formatStars = count => {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k stars`
  return `${count} stars`
}

const useGitHubStars = (repo, fallback) => {
  const [stars, setStars] = useState(fallback)
  useEffect(() => {
    let active = true
    fetch(`https://api.github.com/repos/${repo}`)
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        if (active && data && typeof data.stargazers_count === 'number') {
          setStars(formatStars(data.stargazers_count))
        }
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [repo])
  return stars
}

const Entry = ({ role, org, orgUrl, date, location, children }) => {
  const dateColor = useColorModeValue('gray.600', 'gray.400')
  return (
    <Box mb={5}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'baseline' }}
      >
        <Heading as="h4" fontSize={18} fontWeight="bold" mb={1}>
          {role}
          {org && (
            <>
              {' '}
              <Text as="span" fontWeight="normal" color={dateColor}>
                @{' '}
                {orgUrl ? (
                  <Link href={orgUrl} isExternal>
                    {org}
                  </Link>
                ) : (
                  org
                )}
              </Text>
            </>
          )}
        </Heading>
        <Text
          fontSize={14}
          color={dateColor}
          whiteSpace="nowrap"
          flexShrink={0}
          ml={{ md: 4 }}
        >
          {date}
          {location ? ` · ${location}` : ''}
        </Text>
      </Flex>
      {children && (
        <List spacing={1} mt={1} styleType="disc" pl={5}>
          {children}
        </List>
      )}
    </Box>
  )
}

const Bullet = ({ children }) => (
  <ListItem fontSize={15} lineHeight="1.6">
    {children}
  </ListItem>
)

const Resume = () => {
  const reactPdfStars = useGitHubStars('wojtekmaj/react-pdf', '10.7k stars')
  const oedStars = useGitHubStars('OpenEnergyDashboard/OED', '100 stars')
  return (
    <Layout title="Resume">
      <Container>
        <Box mb={6}>
          <Link href="/resume.pdf" download>
            <Button leftIcon={<DownloadIcon />} colorScheme="teal">
              Download Resume (PDF)
            </Button>
          </Link>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <Entry
            // role="Software Engineer Intern"
            org="CodeDay Labs"
            date="Jun 2024 – Aug 2024"
          >
            <Bullet>
              Developed a test framework in <b>Rust</b> to validate the
              correctness of algorithms in an algebraic simplification solver.
            </Bullet>
            <Bullet>
              Exposed the Rust-based solver as a high-performance <b>Python</b>{' '}
              library using <b>PyO3</b> and <b>Maturin</b>.
            </Bullet>
          </Entry>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Open Source
          </Heading>
          <Entry
            role="React-PDF"
            org={reactPdfStars}
            orgUrl="https://github.com/wojtekmaj/react-pdf"
            date="Contributor"
          >
            <Bullet>
              Optimized accessibility of PDF links to reach a 96/100 Lighthouse
              score and WCAG compliance by generating ARIA labels parsed from
              PDF annotation metadata.
            </Bullet>
          </Entry>
          <Entry
            role="Open Energy Dashboard"
            org={oedStars}
            orgUrl="https://github.com/OpenEnergyDashboard/OED"
            date="Jun 2023 – Aug 2023"
          >
            <Bullet>
              Built a unit conversion engine in <b>JavaScript</b> to enable
              dual-unit reporting for federal compliance standards.
            </Bullet>
            <Bullet>
              Validated numerical accuracy against CSV datasets within strict
              precision thresholds using <b>Mocha.js</b>.
            </Bullet>
            <Bullet>
              Standardized the development environment with <b>Docker</b>,
              reducing setup time and ensuring consistent builds.
            </Bullet>
          </Entry>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <Entry role="Pantry AI" org="Full-Stack Web Development">
            <Bullet>
              Architected a multimodal AI application using{' '}
              <b>Next.js / FastAPI</b>, featuring ingredient recognition and
              recipe generation.
            </Bullet>
            <Bullet>
              Deployed a serverless backend on <b>AWS Lambda</b>, using{' '}
              <b>Docker</b> to ensure binary compatibility between local ARM
              development and the x86 cloud runtime.
            </Bullet>
          </Entry>
          <Entry role="AppliTrack" org="Full-Stack Web Development">
            <Bullet>
              Engineered a <b>MERN</b> stack job-tracking platform, securing
              APIs with <b>JWT</b> authentication, Role-Based Access Control (
              <b>RBAC</b>), and validation middleware.
            </Bullet>
            <Bullet>
              Optimized frontend data synchronization and caching using{' '}
              <b>TanStack Query</b>, reducing redundant network requests.
            </Bullet>
          </Entry>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <Entry
            role="MSc in Information Studies"
            org="Trine University"
            date="May 2025 – May 2027"
          />
          <Entry
            role="MSc in Computer Science and Engineering"
            org="Santa Clara University"
            date="Sep 2022 – Dec 2025"
          />
          <Entry
            role="MSc in Human Computer Interaction"
            org="University of St. Andrews"
            date="Sep 2019 – Dec 2020"
          />
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Wrap spacing={2}>
            {[
              'Python',
              'Rust',
              'C++',
              'Java',
              'JavaScript/TypeScript',
              'FastAPI',
              'Node.js',
              'Express.js',
              'Next.js',
              'React',
              'PyO3',
              'Maturin',
              'PostgreSQL',
              'MongoDB',
              'Oracle',
              'AWS',
              'Docker',
              'GitHub Actions',
              'Pytest',
              'Jest',
              'Playwright',
              'Postman'
            ].map(skill => (
              <WrapItem key={skill}>
                <Tag colorScheme="teal" variant="subtle">
                  {skill}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            Honors & Awards
          </Heading>
          <List spacing={1} styleType="disc" pl={5}>
            <Bullet>Zhejiang Government Scholarship (Top 3%)</Bullet>
            <Bullet>Excellent Graduates of Zhejiang Province</Bullet>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Resume
