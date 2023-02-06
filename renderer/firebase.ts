// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { updateProfile, signOut } from 'firebase/auth';

// import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyASV7h2w2K0KPz-6JX0fDdirkV1XFAy51E',
  authDomain: 'maumlab-assignment-184f0.firebaseapp.com',
  projectId: 'maumlab-assignment-184f0',
  storageBucket: 'maumlab-assignment-184f0.appspot.com',
  messagingSenderId: '599166359803',
  appId: '1:599166359803:web:937a3edfc2183032c8b85e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const registerEmail = async (
  email: string,
  password: string,
  nickname: string
) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (user: any) => {
      updateProfile(user.user, { displayName: nickname });
    }
  );
};

const signinEmail = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signoutEmail = async () => {
  return auth.signOut();
};
// const db = getFirestore(app);

export { registerEmail, signinEmail, signoutEmail };
