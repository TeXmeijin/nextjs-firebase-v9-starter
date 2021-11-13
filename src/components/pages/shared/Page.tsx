import { useLoggedIn, useLoggedOut } from '@/components/contexts/AuthContext';
import { onAuthStateChanged } from '@firebase/auth';
import { ReactNode, useEffect } from 'react';
import { getAuth } from '@/lib/firebase';
import { useOnceCall } from '@/hooks/useOnceCall';

export const Page = ({ children }: { children: ReactNode }) => {
  const { handleLoggedIn } = useLoggedIn();
  const { handleLoggedOut } = useLoggedOut();

  useOnceCall(() => {
    const auth = getAuth();

    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        handleLoggedIn(user);
      } else {
        handleLoggedOut();
      }
    });
  });

  return <div>{children}</div>;
};
