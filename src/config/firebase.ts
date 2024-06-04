import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebase = {
  apiKey: 'AIzaSyBHDFED6Q4Nz27F2eZbDn0vfsAUl4cAAvk',
  authDomain: 'todolist-40c79.firebaseapp.com',
  projectId: 'todolist-40c79',
  storageBucket: 'todolist-40c79.appspot.com',
  messagingSenderId: '228303774329',
  appId: '1:228303774329:web:965118032c2e50412ceaa8',
  measurementId: 'G-S7FZM4VF89',
}

const app = initializeApp(firebase)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()