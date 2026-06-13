import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/projects">
            <Link>Projects</Link>
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const ProjectImage = ({ src, alt, caption }) => (
    <Box as="figure" mb={4}>
        <Image borderRadius="lg" w="full" src={src} alt={alt} />
        {caption && (
            <Text
                as="figcaption"
                fontSize="sm"
                color="gray.500"
                textAlign="center"
                mt={2}
            >
                {caption}
            </Text>
        )}
    </Box>
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)
