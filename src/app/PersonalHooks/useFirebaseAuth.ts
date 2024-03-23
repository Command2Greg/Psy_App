import { auth } from "@/firebase";
import { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "/firebase";
import { User } from "/firebase";

interface AuthState {
  user: User | null;
}

const useFirebaseAuth = (): { signInWithGoogle: () => void; handleSignOut: () => void } => {
  const [authState, setAuthState] = useState<AuthState>({ user: null });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthState({ user });
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider).then((result) => {
        console.log(result);
      });
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return { ...authState, signInWithGoogle, handleSignOut };
};

export default useFirebaseAuth;