import { auth } from "@src/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export interface AuthUtils {
  signInWithGoogle: () => Promise<void>;
  handleSignOut: () => Promise<void>;
}

export const getAuthUtils = (): AuthUtils => {
  const signInWithGoogle = async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return { signInWithGoogle, handleSignOut };
};
