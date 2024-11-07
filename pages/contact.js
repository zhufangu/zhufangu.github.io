import { IoLogoInstagram, IoLogoGithub, IoLogo, IoLogoLinkedin } from 'react-icons/io';
import { MdOutlineEmail } from "react-icons/md";
import { List, ListItem, Container, Button, Link, Icon, Heading } from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const Contact = () => {
    return (
        <Layout title="Contact Me">
            <Container>
                <Heading as="h3" variant="section-title">
                    Contact Me
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://www.instagram.com/zh.u3u.fannn/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoInstagram} />}
                            >
                                @zh.u3u.fannn
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/zhufangu/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                @zhufangu
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="mailto:" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={MdOutlineEmail} />}
                            >
                                guzhufan@gmail.com
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/zhufan-gu/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoLinkedin} />}
                            >
                                @Zhufan Gu
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Contact