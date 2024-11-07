import { Container, Link, Box, Button } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { DownloadIcon } from "@chakra-ui/icons"; 

const Resume = () => {
    return (
        <Layout title="Resume">
            <Container>
                <Box mb={4}>
                    <Link href="/resume.pdf" download>
                        <Button leftIcon={<DownloadIcon />} colorScheme="teal">
                            Download Resume
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <iframe src="/resume.pdf" width="150%" height="800px" style={{ border: "none" }} />
                </Box>
            </Container>
        </Layout>
    )
}

export default Resume