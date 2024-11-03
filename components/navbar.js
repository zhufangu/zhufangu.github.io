import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorModeValue,
    IconButton 
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
            {...props}
            >
                <Container
                    display="flex"
                    p={2}
                    maxW="container.md"
                    wrap="wrap"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo />    
                        </Heading>
                    </Flex>
                    <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={ 1}
                    mt={{ base: 4, md: 0 }}
                    >
                        <LinkItem href="/aboutme" path={path}>
                            About Me
                        </LinkItem>
                        <LinkItem href="/projects" path={path}>
                            Projects
                        </LinkItem>
                        <LinkItem href="/resume" path={path}>
                            Resume
                        </LinkItem>
                        <LinkItem href="/contact" path={path}>
                            Contact
                        </LinkItem>
                    </Stack>
                    <Box flex={1} align="right">
                        <ThemeToggleButton />
                        <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                            <Menu>
                                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options"/>
                                <MenuList>
                                    <NextLink href="/aboutme" passHref>
                                        <MenuItem as={Link}>About Me</MenuItem>
                                    </NextLink>
                                    <NextLink href="/projects" passHref>
                                        <MenuItem as={Link}>Projects</MenuItem>
                                    </NextLink>
                                    <NextLink href="/resume" passHref>
                                        <MenuItem as={Link}>Resume</MenuItem>
                                    </NextLink>                             
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Container>
        </Box>
    )
}

export default Navbar