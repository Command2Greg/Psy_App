'use client';
import { auth } from '@/firebase';
import { useState, useEffect } from 'react';
import { GoogleAuthProvider, User, signInWithPopup, signOut } from 'firebase/auth';

interface AuthState {
  user: User | null;
}

export const getAuthState = (): AuthState => {
  const [authState, setAuthState] = useState<AuthState>({ user: null });
  console.log(
    auth.onAuthStateChanged((user) => {
      return { user };
    })
  );
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthState({ user });
    });

    return () => unsubscribe();
  }, []);
  console.log(authState);
  return authState;
};

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

export const handleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
