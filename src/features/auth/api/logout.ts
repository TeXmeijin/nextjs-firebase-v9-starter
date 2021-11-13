import { getAuth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

export const logout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
