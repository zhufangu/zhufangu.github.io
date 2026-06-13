import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Displays Across Campus">
      <Container>
        <Title>
          Displays Across Campus <Badge>2020</Badge>
        </Title>
        <P>
          A full user-centred design project for &quot;St Andrews Exhibits&quot;
          &mdash; a concept website that makes it easy to discover what&apos;s on
          display across the University of St Andrews and to navigate the often
          confusing process of proposing a new display. The work runs the
          complete design lifecycle, from contextual inquiry through to three
          distinct high-fidelity prototypes.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Context</Meta>
            <P>
              User Centered Design, MSc Human-Computer Interaction &middot; a
              three-person team project.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Brief</Meta>
            <P>
              The university hosts displays in dozens of scattered spaces, each
              with its own opaque proposal process. It is hard for people to know
              what&apos;s on where, and just as hard for someone with an idea to
              work out which space is available and who to contact. The challenge
              was to design a single interface serving three stakeholders &mdash;
              viewers, proposers, and management &mdash; that surfaces displays,
              streamlines proposals, and declutters space administration.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Approach</Meta>
            <UnorderedList my={4}>
              <ListItem>
                <strong>Contextual inquiry</strong>: a survey of students plus
                interviews with management teams and a past proposer grounded the
                design in real frustrations &mdash; e.g. 1 in 5 respondents
                didn&apos;t even know displays existed.
              </ListItem>
              <ListItem>
                <strong>Modelling &amp; requirements</strong>: findings were
                synthesised into a Work Activity Affinity Diagram, flow and task
                models for each stakeholder, and a traceable table of system
                requirements.
              </ListItem>
              <ListItem>
                <strong>Sketch to wireframe to hi-fi</strong>: each screen
                progressed from low-fidelity hand sketches through wireframes to
                interactive high-fidelity prototypes, with client feedback
                reshaping the sitemap along the way.
              </ListItem>
              <ListItem>
                <strong>Three design directions</strong>: a clear, image-led{' '}
                <em>Conservative</em> design; a teaser-driven{' '}
                <em>Black &amp; White</em> concept that reveals displays through
                a roving torch beam; and an <em>Art Gallery</em> design that
                frames the whole site as a museum to explore.
              </ListItem>
              <ListItem>
                <strong>Management tooling</strong>: an admin dashboard with a
                Gantt overview of displays across spaces, drag-to-book resource
                management, and at-a-glance analytics.
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem my={4}>
            <Meta>Reflection</Meta>
            <P>
              Comparing the three designs made it clear there is no single best
              answer &mdash; each trades clarity, novelty, and loading cost
              differently, so the right choice depends on context. Presenting
              back to the original interviewees produced unanimous agreement that
              the system would address their pain points. The project also
              spanned the onset of COVID-19, so the team adapted to running
              critiques and client reviews entirely remotely &mdash; a lesson in
              collaboration as much as in interaction design.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Tools</Meta>
            <P>
              Axure RP (interactive prototyping), contextual inquiry, affinity
              diagramming, flow &amp; task modelling, wireframing.
            </P>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/displays/displays_banner.png"
          alt="Conservative design landing page — an image grid titled Exhibitions at St Andrews"
          caption="Fig. 1 — The Conservative design's landing page: an image-led grid that invites viewers to browse past, ongoing, and upcoming displays, with quick shortcuts for proposers and admins."
        />
        <ProjectImage
          src="/images/projects/displays/displays_01.png"
          alt="Three-stage user-centred design process diagram"
          caption="Fig. 2 — The user-centred design process, from contextual inquiry and analysis through sketching and wireframing to high-fidelity prototyping, and the artefacts produced at each stage."
        />
        <ProjectImage
          src="/images/projects/displays/displays_02.png"
          alt="Admin dashboard with proposals, a Gantt of displays across spaces, and resource booking"
          caption="Fig. 3 — The management-facing admin dashboard: current proposals, a Gantt overview of displays across spaces, and bookable resources in one view."
        />
        <ProjectImage
          src="/images/projects/displays/displays_03.png"
          alt="Black and White design — landing, today, map, and list pages"
          caption="Fig. 4 — The Black &amp; White concept evokes mystery: a torch beam reveals glimpses of displays, and spaces stay unnamed until you hover, nudging users to explore."
        />
        <ProjectImage
          src="/images/projects/displays/displays_04.png"
          alt="Art Gallery design — displays shown as framed exhibits on paneled walls"
          caption="Fig. 5 — The Art Gallery concept frames the site itself as a museum, with golden frames, name plaques, and signage-style navigation arrows."
        />
      </Container>
    </Layout>
  )
}

export default Project
