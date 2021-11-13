import type { User as UserAccount } from 'firebase/state';
import { createContext, ReactNode, useContext, useMemo, useReducer } from 'react';

export type UserProfile = {
  avatar: string;
  description: string;
};

type AuthActions =
  | { type: 'SET_USER_ACCOUNT'; payload: { user: UserAccount } }
  | { type: 'SET_USER_PROFILE'; payload: { profile: UserProfile } }
  | { type: 'SIGN_OUT' };

type AuthState =
  | {
      name: 'SIGNED_IN';
      userAccount: UserAccount;
      userProfile?: UserProfile;
    }
  | {
      name: 'GUEST';
    }
  | {
      name: 'UNKNOWN';
    };

const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'SET_USER_ACCOUNT':
      return {
        ...state,
        name: 'SIGNED_IN',
        userAccount: action.payload.user,
      };
    case 'SIGN_OUT':
      return {
        name: 'GUEST',
      };
    case 'SET_USER_PROFILE':
      if (state.name !== 'SIGNED_IN') {
        return state;
      }

      return {
        ...state,
        name: 'SIGNED_IN',
        userProfile: action.payload.profile,
      };
  }
};

type AuthContextProps = {
  state: AuthState;
  dispatch: (value: AuthActions) => void;
};

export const AuthContext = createContext<AuthContextProps>({ state: { name: 'UNKNOWN' }, dispatch: (val) => {} });

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, { name: 'UNKNOWN' });

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

const useAuthState = () => {
  const { state } = useContext(AuthContext);
  return {
    state,
  };
};

const useLoggedIn = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    handleLoggedIn: (user: UserAccount) => {
      dispatch({ type: 'SET_USER_ACCOUNT', payload: { user } });
    },
  };
};

const useLoggedOut = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    handleLoggedOut: () => {
      dispatch({ type: 'SIGN_OUT' });
    },
  };
};

export { useAuthState, useLoggedIn, useLoggedOut, AuthProvider };
