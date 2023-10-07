import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBLha0b8yewra2IEvY4h2xOtGfcU-UKfEY',
  authDomain: 'portfolio-dasboard.firebaseapp.com',
  projectId: 'portfolio-dasboard',
  storageBucket: 'portfolio-dasboard.appspot.com',
  messagingSenderId: '352613397694',
  appId: '1:352613397694:web:dc6fdcf6e96c0eadc69aef',
  measurementId: 'G-8V8J4B5MFW',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
