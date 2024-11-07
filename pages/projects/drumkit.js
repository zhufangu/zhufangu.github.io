import { Container, Badge, Link, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/projects";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
    return (
        <Layout title="Drum Kit">
            <Container>
                <Title>
                Drum Kit <Badge>2020</Badge>
                </Title>
                <P>
                    This is a simple online drum kit that allows users to 
                    play various drum sounds by pressing corresponding keys 
                    on their keyboard. Users can also click on the drum images to 
                    play the sounds.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://zhufangu.github.io/drumkit/'>
                        https://zhufangu.github.io/drumkit/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem my={4}>
                        <Meta>Technology</Meta>
                        <UnorderedList>
                        <ListItem><strong>JavaScript</strong>: For handling user interactions and updating the UI in real-time.</ListItem> 
                        <ListItem><strong>HTML</strong>: Provides the structure and layout for the drumkit interface.</ListItem> 
                        <ListItem><strong>CSS</strong>: Styles the drumkit interface, ensuring a visually appealing and responsive design.</ListItem> 
                         <ListItem><strong>Web Audio API</strong>: Enables audio playback and manipulation directly in the browser.</ListItem>    
                        </UnorderedList>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/drumkit/drumkit_banner.jpg" alt="drumkit" />
            </Container>
        </Layout>

    )
}

export default Project