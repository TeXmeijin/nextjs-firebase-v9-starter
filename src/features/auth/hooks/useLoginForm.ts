import { completeEmailSignIn, signInLinkToEmail } from './../api/login';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useOnceCall } from '@/hooks/useOnceCall';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  useOnceCall(() => {
    completeEmailSignIn();
  });

  const isValid = useMemo(() => {
    return !!email;
  }, [email]);

  const handleLoginButtonClick = useCallback(async () => {
    if (!isValid) return;

    setIsSending(true);
    await signInLinkToEmail(email);
    setIsSending(false);
  }, [email, isValid]);

  return {
    email,
    setEmail: useCallback((event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value), []),
    isValid,
    handleLoginButtonClick,
    isSending,
  };
};
