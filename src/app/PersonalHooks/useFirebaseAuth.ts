import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../dataBase/firebase';

export const getCurrentUser = () => {
  return auth.currentUser;
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
