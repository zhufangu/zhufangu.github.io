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
    <Layout title="Pantry AI">
      <Container>
        <Title>
          Pantry AI <Badge>2025</Badge>
        </Title>
        <P>
          A multimodal full-stack web application that leverages AI to create
          and customize recipes. It allows users to generate personalized
          recipes by either describing their needs in natural language or by
          uploading a picture of their ingredients. The project features a
          sleek, user-friendly interface with modern and classic layouts to
          provide a seamless user experience across different devices.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://pantryai.zhufangu.com">
              https://pantryai.zhufangu.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <UnorderedList my={4}>
              <ListItem>
                Dual Input Modes: The application offers two primary ways to
                generate a recipe: a text-based chat interface and an image
                recognition tab.
              </ListItem>
              <ListItem>
                AI-Powered Ingredient Recognition: Users can upload a photo of
                their ingredients, and the system automatically identifies them
                using a vision model, offering a list of identified ingredients
                that can be edited.
              </ListItem>
              <ListItem>
                Conversational Recipe Optimization: The app acts as an &quot;AI
                chef,&quot; allowing users to refine and optimize a generated
                recipe by chatting with the system. It can handle requests such
                as &quot;simplify the steps,&quot; &quot;reduce calories,&quot;
                or &quot;add more vegetables&quot;.
              </ListItem>
              <ListItem>
                AI Image Generation: Once a recipe is finalized, the application
                can generate a high-quality visual representation of the dish,
                creating a more engaging user experience.
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            <Meta>Technology</Meta>
            <UnorderedList my={4}>
              <ListItem>
                <strong>Frontend</strong>: Next.js, React, Tailwind CSS,
                TypeScript.
              </ListItem>
              <ListItem>
                <strong>Backend</strong>: FastAPI, Rest API.
              </ListItem>
              <ListItem>
                <strong>Models</strong>: GPT-4o-mini, Qwen-image.
              </ListItem>
            </UnorderedList>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/pantryai/pantryai_banner.jpg"
          alt="Pantry AI"
        />
        <ProjectImage
          src="/images/projects/pantryai/pantryai_01.jpg"
          alt="Pantry AI"
        />
        <ProjectImage
          src="/images/projects/pantryai/pantryai_02.jpg"
          alt="Pantry AI"
        />
        <ProjectImage
          src="/images/projects/pantryai/pantryai_03.jpg"
          alt="Pantry AI"
        />
        <ProjectImage
          src="/images/projects/pantryai/pantryai_04.jpg"
          alt="Pantry AI"
        />
      </Container>
    </Layout>
  )
}

export default Project
