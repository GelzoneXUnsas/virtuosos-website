import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from "firebase/auth";
import {auth} from "./firebase"
import { GoogleAuthProvider } from "firebase/auth";


export const doCreateUserWithEmailAndPassword = async (email, password) =>  {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    // // to save user information
    // result.user
    return result;
};

export const doSignOut = () => {
    return auth.signOut();
};

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`
    });
};

export const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-credential':
        return 'The credential is invalid or expired. Please try again.';
      case 'auth/user-disabled':
        return 'This user account has been disabled. Please contact support.';
      case 'auth/user-not-found':
        return 'No user found with this email. Please check your email or sign up.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/email-already-in-use':
        return 'The email address is already in use by another account.';
      case 'auth/weak-password':
        return 'The password is too weak. Please choose a stronger password.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please try again later.';
      default:
        return 'An error occurred. Please try again.';
    }
  };
