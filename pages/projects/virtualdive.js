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
    <Layout title="Virtual Dive Experience">
      <Container>
        <Title>
          Virtual Dive Experience <Badge>2020</Badge>
        </Title>
        <P>
          My MSc dissertation: an exploration of how 3D modelling can make a
          virtual diving experience more realistic and immersive. Diving demands
          professional skill, equipment, and carries real risk &mdash; and, in a
          year shaped by COVID-19 and geography, is out of reach for many. The
          project asks how virtual reality and 3D content can open that
          experience up to anyone.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Context</Meta>
            <P>
              MSc Human-Computer Interaction dissertation, supervised by Dr Alan
              Miller.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Brief</Meta>
            <P>
              Use 3D modelling to enhance the immersion and realism of a virtual
              dive. Beyond building the models themselves, the work investigates
              supporting techniques &mdash; render engines, Blender-to-game-engine
              workflows, and photogrammetry &mdash; that are broadly useful for
              any immersive 3D project.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Approach</Meta>
            <UnorderedList my={4}>
              <ListItem>
                <strong>3D modelling</strong>: built seven marine models in
                Blender &mdash; including a textured Ballan Wrasse, a lighthouse,
                a sea urchin, bubbles, and rock &mdash; some static and some
                animated, such as the urchin and the swimming-fish motion.
              </ListItem>
              <ListItem>
                <strong>Lighting &amp; atmosphere</strong>: studied spot, sun,
                and point lighting and used fog volumes to recreate the murky,
                light-scattered feel of being underwater.
              </ListItem>
              <ListItem>
                <strong>Render engines</strong>: compared Blender&apos;s Eevee
                and Cycles engines across the models, weighing realism against
                render time.
              </ListItem>
              <ListItem>
                <strong>Workflow &amp; environment</strong>: explored a
                &quot;Send to Unreal Engine&quot; addon to speed up the
                Blender&ndash;UE4 pipeline, and used BlenderGIS to reconstruct
                real terrain by combining Google Maps satellite imagery with NASA
                SRTM elevation data.
              </ListItem>
              <ListItem>
                <strong>Photogrammetry</strong>: surveyed photogrammetry tools
                (e.g. Reality Capture) as an alternative route to high-fidelity
                3D capture.
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem my={4}>
            <Meta>Reflection</Meta>
            <P>
              All primary, secondary, and tertiary objectives were met. Testing
              was continuous &mdash; modelling and rendering revealed issues to
              fix along the way (a single 4-second urchin animation took 18 hours
              to render on a MacBook Pro). Hardware limits forced pragmatic
              pivots: an original plan to model a full ocean was replaced by the
              BlenderGIS terrain approach. The honest critical appraisal &mdash;
              on device constraints, model fidelity, and the limits of studying
              photogrammetry without the hardware to run it &mdash; was as
              valuable as the artefacts themselves.
            </P>
          </ListItem>

          <ListItem my={4}>
            <Meta>Tools</Meta>
            <P>
              Blender (Eevee &amp; Cycles), Unreal Engine 4, BlenderGIS, Reality
              Capture, NASA SRTM &amp; Google Maps data.
            </P>
          </ListItem>
        </List>

        <ProjectImage
          src="/images/projects/virtualdive/virtualdive_01.png"
          alt="Rendered 3D model of a Ballan Wrasse fish"
          caption="Fig. 1 — A textured, rendered Ballan Wrasse: the project's signature marine model, built and animated in Blender."
        />
        <ProjectImage
          src="/images/projects/virtualdive/virtualdive_02.png"
          alt="Rendered 3D model of a lighthouse on a rocky base"
          caption="Fig. 2 — A rendered lighthouse, usable as a self-luminous landmark above water or scaled down as an underwater marker."
        />
        <ProjectImage
          src="/images/projects/virtualdive/virtualdive_03.png"
          alt="Rendered 3D sea urchin inside an underwater fog volume"
          caption="Fig. 3 — The animated sea urchin inside a fog volume, recreating the murky, light-scattered atmosphere of the deep."
        />
        <ProjectImage
          src="/images/projects/virtualdive/virtualdive_banner.png"
          alt="Rendered 3D terrain reconstructed from satellite and elevation data"
          caption="Fig. 4 — Real terrain reconstructed in Blender with BlenderGIS, merging Google Maps satellite imagery with NASA SRTM elevation data."
        />
      </Container>
    </Layout>
  )
}

export default Project
