import { useLoginForm } from '@/features/auth/hooks/useLoginForm';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Container, Heading } from '@chakra-ui/layout';
import { useAuthState } from '../contexts/AuthContext';
import { PageWithHeader } from '../ui/layouts/PageWithHeader';
import { Loading } from '../ui/loading/Loading';
import { Page } from './shared/Page';

/**
 * TODO:
 * - layout
 */
export function LoginPage() {
  const { state } = useAuthState();

  const { email, setEmail, isValid, handleLoginButtonClick, isSending } = useLoginForm();

  if (state.name === 'SIGNED_IN') {
    // TODO: error handling
    location.assign(location.origin);
  }

  return (
    <Page>
      <PageWithHeader>
        {state.name === 'UNKNOWN' && <Loading></Loading>}
        <Container p={8}>
          <Heading>ログイン</Heading>
          <FormControl mt={4} id="email">
            <FormLabel>メールアドレス</FormLabel>
            <Input value={email} onChange={setEmail} type="email" />
          </FormControl>
          <Box mt={2}>
            <Button
              isLoading={isSending}
              onClick={handleLoginButtonClick}
              isDisabled={!isValid}
              colorScheme="teal"
              isFullWidth
            >
              ログイン
            </Button>
          </Box>
        </Container>
      </PageWithHeader>
    </Page>
  );
}
