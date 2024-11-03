import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
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
                <p>
                    TinDog is a dating app for dogs. Find the love of your dog&apos;s life or your money back.
                </p>
                <List ml={4} my={4}></List>
            </Container>
        </Layout>

    )
}

export default Project
