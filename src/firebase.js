import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const EapiKey = process.env.REACT_APP_FIREBASE_API_KEY
const EauthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const EprojectId = process.env.REACT_APP_FIREBASE_PROJECT_ID
const EstorageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
const EmessagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
const EappId = process.env.REACT_APP_FIREBASE_APP_ID
const EmeasurementId = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: EapiKey,
  authDomain: EauthDomain,
  projectId: EprojectId,
  storageBucket: EstorageBucket,
  messagingSenderId: EmessagingSenderId,
  appId: EappId,
  measurementId: EmeasurementId,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth()

export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

//Email 회원가입
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}
