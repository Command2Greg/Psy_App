import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth, db } from '../dataBase/firebase';
import { addDbUser } from '../dataBase/databaseServices';
import slugify from 'slugify';
import { doc } from 'firebase/firestore';


export const getCurrentUser = () => {
  return auth.currentUser;
};

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((result) => {
      const slug = slugify(`${result.user.displayName!}-${result.user.uid!}`);
      addDbUser((doc(db, 'users', slug)), {
          slug: slug,
          mail: result.user.email!,
          name: result.user.displayName!,
          photo: result.user.photoURL!,
        }
      );
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
