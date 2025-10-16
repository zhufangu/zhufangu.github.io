import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import { Box } from '@chakra-ui/react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
      <Box as="footer" textAlign="center" py={4} mt={8}>
        © 2025 Zhufan Gu. All Rights Reserved.
      </Box>
    </>
  </motion.article>
)

export default Layout
