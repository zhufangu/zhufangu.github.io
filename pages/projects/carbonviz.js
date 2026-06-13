import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="A Year of Carbon Emissions">
      <Container>
        <Title>
          A Year of Carbon Emissions <Badge>2020</Badge>
        </Title>
        <P>
          A hand-drawn, &quot;Dear Data&quot;-inspired visualization that turns a
          year of my personal carbon footprint into a postcard. Rather than
          reaching for a standard bar or pie chart, the project explores how an
          evocative, sketch-based visual can communicate both an overview of my
          emissions and the detail of what drives them, while comparing my data
          against the world, UK, and class averages.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Context</Meta>
            <P>
              CS5044 Information Visualisation, MSc Human-Computer Interaction,
              University of St Andrews.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Brief</Meta>
            <P>
              Get to know the visualization process through sketching personal
              data. Using the WWF Footprint Calculator and an anonymous class
              survey, I gathered my own carbon footprint and that of the cohort,
              then designed a postcard-sized visualization that provides a clear
              overview of where I stand compared to others and zooms in on the
              single lifestyle aspect that affects my footprint the most.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Approach</Meta>
            <UnorderedList my={4}>
              <ListItem>
                <strong>Visual metaphor</strong>: I designed a fireworks-like
                radial pattern, similar in spirit to a pie chart but composed of
                lines of varying length, with colour value encoding the four
                emission categories (home, travel, stuff, food).
              </ListItem>
              <ListItem>
                <strong>Overview</strong>: Four firework patterns, sized and
                positioned from large to small, follow the perceptual ordering
                of our visual system to compare me, the CS5044 average, the UK,
                and the world.
              </ListItem>
              <ListItem>
                <strong>Detail</strong>: Square and circle marks layer in
                specifics about the category contributing most to my footprint,
                adding depth without breaking the overall aesthetic.
              </ListItem>
              <ListItem>
                <strong>Ideation</strong>: I sketched and discarded alternative
                ideas, including a Tetris-inspired bar layout, before settling on
                a form that stayed faithful to the concise, evocative Dear Data
                style.
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem my={4}>
            <Meta>Reflection</Meta>
            <P>
              I evaluated the sketch against Munzner&apos;s principles of
              expressiveness and effectiveness, documenting each attribute, its
              type, and its visual encoding. The fireworks form is beautiful and
              proportionally honest, but its dense lines make precise comparison
              and the addition of further elements difficult. The exercise
              reshaped how I think about presenting data: the same dataset can be
              told in strikingly different ways, each with its own trade-offs
              between aesthetics, readability, and precision.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Reference</Meta>
            <Link href="http://www.dear-data.com/">
              Dear Data &mdash; Giorgia Lupi &amp; Stefanie Posavec
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/carbonviz/carbonviz_02.png"
          alt="Carbon footprint postcard — full sketch"
          caption="The postcard: four firework patterns (front) compare my footprint with the CS5044, UK, and world averages, while the legend (back) explains the color and mark encodings."
        />
      </Container>
    </Layout>
  )
}

export default Project
