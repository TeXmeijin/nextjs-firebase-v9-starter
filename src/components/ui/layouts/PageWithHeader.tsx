import { useAuthState } from '@/components/contexts/AuthContext';
import { Page } from '@/components/pages/shared/Page';
import { logout } from '@/features/auth/api/logout';
import { Button } from '@chakra-ui/button';
import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { memo, ReactNode, useCallback } from 'react';

export const PageWithHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Page>
      <Header></Header>
      {children}
    </Page>
  );
};

const Header = memo(() => {
  const { state } = useAuthState();

  return (
    <Flex alignItems="center" as="header" height="48px" color="white" bg="teal" p={2}>
      <span>ServiceName</span>
      <Spacer></Spacer>
      {state.name === 'SIGNED_IN' && <LogOutButton></LogOutButton>}
    </Flex>
  );
});

Header.displayName = 'Header';

const LogOutButton = memo(() => {
  const handleClickLogout = useCallback(() => {
    logout();
  }, []);

  return (
    <Button onClick={handleClickLogout} variant="outline">
      Log Out
    </Button>
  );
});

LogOutButton.displayName = 'LogOutButton';
