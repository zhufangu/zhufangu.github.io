import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({ children, delay= 0}) => (
    <StyledDiv
        initial={{y:10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay}}
        mb={6}
    >
        {/*{children} ensures that any nested elements passed to Section 
        are rendered inside the StyledDiv. 
        W/o {children}, the Section component would not render any nested elements */}
        {children}
    </StyledDiv>
)

export default Section