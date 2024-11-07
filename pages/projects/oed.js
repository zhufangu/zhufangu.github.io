import { Container, Badge, Link, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/projects";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
    return (
        <Layout title="Open Energy Dashboard">
            <Container>
                <Title>
                    Open Energy Dashboard <Badge>2023</Badge>
                </Title>
                <P>
                    This is an open-source project which I contributed to. I was responsible for unit testing.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Post</Meta>
                        <Link href='https://www.linkedin.com/pulse/ensuring-precision-energy-data-journey-through-oed-testing-zhufan-gu-zehpc/?trackingId=1m%2BK1fsJRoeea7C6JcqtSg%3D%3D'>
                            Ensuring Precision in Energy Data: A Journey Through OED Testing <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem my={4}>
                        <Meta>Features</Meta>
                        <P>
                            Open Energy Dashboard is a user-friendly tool to display energy information
                            from smart energy meters or uploaded via CSV files. It is optimized for non-technical users
                            with a simple interface that provides access to your organization&apos; s energy data.
                        </P>
                        <P>
                            OED handles various energy data types including weight, volume, temperature, and power.
                            This versatility increases code complexity, making thorough testing crucial.
                        </P>
                    </ListItem>
                    <ListItem my={4}>
                        <Meta>Technology</Meta>
                        <UnorderedList>
                            <ListItem my={4}>
                                <UnorderedList>
                                    <ListItem><strong>Docker</strong>: For containerization, ensuring consistent environments across development, testing, and production.</ListItem>
                                    <ListItem><strong>JavaScript</strong>: For scripting.</ListItem>
                                    <ListItem><strong>Mocha</strong>: For comprehensive unit testing, ensuring code reliability and accuracy.</ListItem>
                                </UnorderedList>
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/oed/oed_banner.jpeg" alt="oed" />
                <ProjectImage src="/images/projects/oed/oed_01.jpeg" alt="oed" />
            </Container>
        </Layout>

    )
}

export default Project
