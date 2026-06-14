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
    <Layout title="Journalists Under Threat">
      <Container>
        <Title>
          Journalists Under Threat <Badge>2020</Badge>
        </Title>
        <P>
          An interactive Tableau dashboard built on the Committee to Protect
          Journalists database (1992&ndash;2020), exploring a single open-ended
          question: are journalists in some countries more likely to be killed
          than imprisoned, and what type of death is most common there? Linked
          views let a reader move from a global overview down to the story of a
          single country.
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
              Design and implement an interactive visualisation of a large,
              unfamiliar dataset in Tableau Desktop. The visualisation had to
              target an open-ended question across at least four attributes,
              combine at least two linked views into a dashboard, and go beyond
              default tooltips with custom interactive elements &mdash; all
              justified through a documented sketching and ideation process.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Approach</Meta>
            <UnorderedList my={4}>
              <ListItem>
                <strong>Question &amp; attributes</strong>: I framed the
                analysis around five attributes &mdash; Country, Status (killed
                vs. imprisoned), Type of Death, Employed As, and Year &mdash;
                enough to compare regions while keeping the story focused.
              </ListItem>
              <ListItem>
                <strong>Multiple views</strong>: A world map encodes each
                country with circle size and colour, two bar charts break down
                Status and Employment over time, and a floating table surfaces
                the Type of Death counts for the selected country.
              </ListItem>
              <ListItem>
                <strong>Visual encoding</strong>: Year sits on an ordered x-axis;
                categorical attributes use hue and the map&apos;s position and
                size channels &mdash; choices I evaluated against Munzner&apos;s
                expressiveness and effectiveness principles.
              </ListItem>
              <ListItem>
                <strong>Interaction</strong>: Hovering a country updates the bar
                charts and table together; clicking greys out other countries
                for emphasis; and a year-range slider is linked across every
                view for coordinated, time-scoped exploration.
              </ListItem>
              <ListItem>
                <strong>Ideation</strong>: I worked through several fundamentally
                different concepts using the Five Design Sheet method, weighing
                each layout&apos;s advantages and crowding before committing to
                the map-plus-linked-charts dashboard.
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem my={4}>
            <Meta>Reflection</Meta>
            <P>
              The dashboard surfaced clear contrasts: journalists in Iraq were
              overwhelmingly killed (223 vs. 21 imprisoned, peaking around the
              2003&ndash;2011 war), whereas in China they were far more likely to
              be imprisoned. Pairing overview and detail made these insights
              discoverable rather than asserted. The main limitation was the
              fixed bar-chart axis range: small counts became hard to read beside
              large ones, a reminder that no single encoding is perfect and that
              the same data invites many valid readings.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Data Source</Meta>
            <Link href="https://cpj.org/data/">
              Committee to Protect Journalists &mdash; Journalists Killed &amp;
              Imprisoned Database
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/journalists/journalists_banner.png"
          alt="Tableau dashboard — map, year slider, and bar charts of journalists killed and imprisoned"
          caption="Fig. 1 — The final dashboard. Hovering Iraq reveals 223 killed against 21 imprisoned, with the map, Type of Death table, and bar charts updating together."
        />
        <ProjectImage
          src="/images/projects/journalists/journalists_01.png"
          alt="Five Design Sheet — ideation sketches of the map, layout, focus view, and slider"
          caption="Fig. 2 — Narrowing the year-range slider to 2003–2010 filters every linked view at once, isolating the Iraq War period."
        />
        <ProjectImage
          src="/images/projects/journalists/journalists_02.png"
          alt="Year-range slider narrowed to 2003–2010, filtering the map, tooltip, and bar charts together"
          caption="Fig. 3 — Ideation with the Five Design Sheet method, exploring different layouts, focus views, and interactions before settling on the final concept."
        />
        <ProjectImage
          src="/images/projects/journalists/journalists_03.png"
          alt="Contrasting case — journalists in China were far more often imprisoned (952) than killed (5)"
          caption="Fig. 4 — The contrasting case: in China, journalists were overwhelmingly imprisoned (952) rather than killed (5)."
        />
      </Container>
    </Layout>
  )
}

export default Project
