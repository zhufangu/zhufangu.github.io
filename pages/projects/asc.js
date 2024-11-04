import { Container, Badge, Link, List, ListItem, UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/projects";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
    return (
        <Layout title="Algebraic Simplification Cesar">
            <Container>
                <Title>
                    Algebraic Simplification Cesar <Badge>2024</Badge>
                </Title>
                <P>
                    This is an open-source project which I contributed to.
                    I was responsible for unit testing and building bridges between Rust and Python.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Post</Meta>
                        <Link href='https://www.linkedin.com/pulse/building-bridges-between-rust-python-my-role-algebraic-zhufan-gu-avlac/?trackingId=Oj2HMdd0S9S1qtKsOfeJfw%3D%3D'>
                            Building Bridges Between Rust and Python: My Role in Algebraic Simplification Cesar <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem my={4}>
                        <Meta>Features</Meta>
                        <P>
                            This tool focused on simplifying algebraic expressions.
                            The primary goal is to simplify any given formula paired with assumptions directly in the Shell or Terminal using straightforward commands.
                            This eliminates the need to visit websites or use tools like Wolfram.
                        </P>
                        <P>
                            Moreover, the project provides Python bindings, enabling users
                            to call Rust functions from a Python environment,
                            allowing integration with other tools like SymPy for more complex tasks.
                        </P>
                    </ListItem>
                    <ListItem my={4}>
                        <Meta>Technology</Meta>
                        <UnorderedList>
                            <ListItem><strong>Rust</strong>: For core simplification functions, ensuring speed and efficiency.</ListItem>
                            <ListItem><strong>PyO3</strong>: For seamless Python bindings, allowing Rust functions to be called in Python environments.</ListItem>
                            <ListItem><strong>Maturin</strong>: Builds and publishes Rust-based Python packages.</ListItem>
                        </UnorderedList>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/asc/asc_banner.jpeg" alt="asc" />
                <ProjectImage src="/images/projects/asc/asc_01.jpeg" alt="asc" />
                <ProjectImage src="/images/projects/asc/asc_02.png" alt="asc" />
            </Container>
        </Layout>

    )
}

export default Project
