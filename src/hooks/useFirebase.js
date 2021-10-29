import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()

const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  //google authentication
  const singInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
  //facebook authentication
  const singInUsingFacebook = () => {
    return signInWithPopup(auth, facebookProvider)
  }

  //getting current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unSubscribe
  }, [])

  //sing out user
  const singOutUser = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => setError(error.message))
      .finally(setIsLoading(false))
  }

  return {
    user,
    setUser,
    singInUsingGoogle,
    singInUsingFacebook,
    singOutUser,
    error,
    setError,
    isLoading,
    setIsLoading
  }
}



export default useFirebase;