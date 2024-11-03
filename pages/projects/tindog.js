import { Container, Badge, Link, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/projects";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
    return (
        <Layout title="TinDog">
            <Container>
                <Title>
                    TinDog <Badge>2020</Badge>
                </Title>
                <P>
                    TinDog is a modern and responsive web application designed to help dog owners
                    find the perfect match for their pets. Built with Bootstrap, it features a sleek
                    and user-friendly interface that ensures a seamless experience across all devices.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://zhufangu.github.io/tindog/'>
                            https://zhufangu.github.io/tindog/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Features</Meta>
                        <UnorderedList my={4}>
                            <ListItem>Easy Navigation: A responsive navbar that collapses on smaller screens for better usability.</ListItem>
                            <ListItem>Smooth Scrolling: Smooth scrolling effects for a better user experience when navigating through sections.</ListItem>
                            <ListItem>Pricing Plans: Various subscription plans tailored to different needs, from free to premium options.</ListItem>
                            <ListItem>Testimonials: Real user testimonials to build trust and credibility.</ListItem>
                            <ListItem>Call to Action: Clear and compelling call-to-action buttons to encourage downloads.</ListItem>
                            <ListItem>Social Media Integration: Links to social media profiles for broader reach and engagement.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem>
                        <Meta>Technology</Meta>
                        <UnorderedList my={4}>
                            <ListItem><strong>HTML5 & CSS3</strong>: For structuring and styling the web pages.</ListItem>
                            <ListItem><strong>Bootstrap 4</strong>: For responsive design and pre-built components.</ListItem>
                            <ListItem><strong>JavaScript</strong>: For interactive features and smooth scrolling effects.</ListItem>
                            <ListItem><strong>Font Awesome</strong>: For scalable vector icons.</ListItem>
                            <ListItem><strong>Google Fonts</strong>: For custom typography.</ListItem>
                        </UnorderedList>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/tindog/tindog_banner.jpg" alt="TinDog" />
                <ProjectImage src="/images/projects/tindog/tindog_01.jpg" alt="TinDog" />
                <ProjectImage src="/images/projects/tindog/tindog_02.jpg" alt="TinDog" />
            </Container>
        </Layout>

    )
}

export default Project
