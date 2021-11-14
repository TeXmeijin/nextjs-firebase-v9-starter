import { Button, ButtonProps } from '@chakra-ui/button';
import { Box, Container, Heading } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { PageWithHeader } from '../ui/layouts/PageWithHeader';

const MotionButton = motion<ButtonProps>(Button);

export const TopPage = () => {
  return (
    <PageWithHeader>
      <Container>
        <Heading as="h1">Top Page</Heading>
        <Box mt={4}>
          <Button colorScheme="teal">Normal Button</Button>
        </Box>
        <Box mt={4}>
          <Button isLoading loadingText="Sending" colorScheme="teal">
            Push Here
          </Button>
        </Box>
        <Box mt={4}>
          <MotionButton whileTap={{ scale: 0.8 }} colorScheme="teal">
            Tap and Scaling
          </MotionButton>
        </Box>
      </Container>
    </PageWithHeader>
  );
};
