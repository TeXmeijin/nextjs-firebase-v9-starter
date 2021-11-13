import { Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';

export const Loading = () => {
  // use Chakra Spinner
  return (
    <Center height="100vh" width="100vw">
      <Spinner />
    </Center>
  );
};
