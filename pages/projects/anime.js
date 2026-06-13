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
    <Layout title="Anime Trends Explorer">
      <Container>
        <Title>
          Anime Trends Explorer <Badge>2020</Badge>
        </Title>
        <P>
          An interactive, D3.js web visualization of the Anime Recommendations
          Database &mdash; 73,516 users&apos; ratings across 12,000+ anime.
          Three linked views (a scatterplot, a bar chart, and a genre word
          cloud) work together to answer two questions: how has anime changed
          over the past two decades, and what do the very best-rated titles have
          in common?
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Context</Meta>
            <P>
              Information Visualisation, MSc Human-Computer Interaction
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Brief</Meta>
            <P>
              Take a large, unfamiliar dataset, derive meaningful questions from
              it, and build an interactive visualization that lets a reader
              explore the answers. The dataset had no explicit time field, so a
              key early insight was that the chronologically-assigned anime_id
              could stand in as a timeline.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Approach</Meta>
            <UnorderedList my={4}>
              <ListItem>
                <strong>Scatterplot</strong>: anime_id on the x-axis (as a proxy
                for time) against rating on the y-axis, coloured by type
                (TV/Movie/OVA/ONA). Hovering a point highlights every anime of
                that type and greys out the rest, with a tooltip naming the type.
              </ListItem>
              <ListItem>
                <strong>Bar chart</strong>: the top anime rated above 9.0,
                grouped by type. Hovering a bar reveals a rich tooltip &mdash;
                name, rating, genres &mdash; plus a &quot;Take me to&quot; link
                out to the title&apos;s page.
              </ListItem>
              <ListItem>
                <strong>Word cloud</strong>: the genres that recur most among
                top-rated anime, sized by frequency, giving an at-a-glance sense
                of what defines a hit.
              </ListItem>
              <ListItem>
                <strong>Encoding</strong>: categorical types use D3&apos;s
                Tableau-10 ordinal palette, chosen over diverging or sequential
                scales to keep the categories easy to tell apart and read.
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem my={4}>
            <Meta>Reflection</Meta>
            <P>
              The visualizations surfaced patterns invisible in the raw table:
              OVA &mdash; a physical-media format &mdash; steadily faded as
              streaming rose, while ratings grew more polarised as the industry
              matured and turned commercial. On the coding side, my original plan
              to split the comma-separated genre column into a new dataset proved
              beyond my skill at the time, so I pivoted to a hand-seeded word
              cloud that reshuffles on each refresh &mdash; a pragmatic
              compromise that still added variety. The main limitation was
              overplotting: even highlighted points get buried in dense regions,
              which a year-range slider would relieve.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Data Source</Meta>
            <Link href="https://www.kaggle.com/CooperUnion/anime-recommendations-database">
              Anime Recommendations Database &mdash; Kaggle (Cooper Union)
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/anime/anime_banner.png"
          alt="Scatterplot of anime rating against anime_id, coloured by type"
          caption="Fig. 1 — Anime rating tendency over time: each point is an anime, positioned by id (a proxy for release order) and rating, coloured by type."
        />
        <ProjectImage
          src="/images/projects/anime/anime_01.png"
          alt="Bar chart of top anime rated above 9.0 with a hover tooltip"
          caption="Fig. 2 — Top anime rated above 9.0, grouped by type. Hovering a bar shows the title's details and a link out to its page."
        />
        <ProjectImage
          src="/images/projects/anime/anime_02.png"
          alt="Word cloud of the most common genres among top-rated anime"
          caption="Fig. 3 — The genres that recur most among top-rated anime, sized by frequency."
        />
        <ProjectImage
          src="/images/projects/anime/anime_03.png"
          alt="Scatterplot with OVA-type anime highlighted in green and the rest greyed out"
          caption="Fig. 4 — The highlight interaction: hovering isolates one type (here OVA), greying out the others to reveal its distribution."
        />
      </Container>
    </Layout>
  )
}

export default Project
