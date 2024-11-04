import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbTindog from "../public/images/projects/tindog/tindog_banner.jpg"
import thumbAsc from "../public/images/projects/asc/asc_banner.jpeg"
import thumbDrumKit from "../public/images/projects/drumkit/drumkit_banner.jpg"

const Projects = () => {
    return (
        <Layout title="Projects">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Software Development
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem id="tindog" title="Tindog" thumbnail={thumbTindog}>
                            Find the love of your dog&apos;s life or your money back.
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="asc" title="Algebraic Simplification Cesar" thumbnail={thumbAsc}>
                            Unit testing and build bridges between Rust and Python.
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="drumkit" title="Drum Kit" thumbnail={thumbDrumKit}>
                            A simple online drum kit.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        User Experience
                    </Heading>
                </Section>

            </Container>
        </Layout>
    )
}

export default Projects