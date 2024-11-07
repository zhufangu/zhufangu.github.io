import { Container, Heading, Box } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const Resume = () => {
    return (
        <Layout title="Resume">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Resume
                </Heading>
                <Box display="flex" justifyContent="center"> 
                    <iframe src="/resume.pdf" width="150%" height="800px" style={{ border: "none" }} /> 
                </Box>
            </Container>
        </Layout>
    )
}

export default Resume