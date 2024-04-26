import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";
import {  createContext, useEffect, useState } from "react";
import auth from "./FireBase.Config";


export const AuthContext = createContext(null)

// google Provider
const googleProvider = new GoogleAuthProvider();
//github Provider 
const githubProvider = new GithubAuthProvider(); 

const FirebaseProvider = ({children}) =>{
    const [ user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] =useState(true);


     // create user
     const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

     // signIn User
     const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

     // google login
     const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider )
    }
    const githubLogin = () =>{
      setLoading(true)
      return signInWithPopup(auth, githubProvider)
  }

     // logout
     const logout =()=>{
        setUser(null)
        signOut(auth)
    }

      // observer 
      useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
              if (user) {
                 setUser(user)
                 setLoading(false)
                 
                
              } 
            });
            return () => unsubscribe();
      },[])

      const allValues ={
        user, createUser, signInUser,githubLogin, googleLogin,
        logout, loading
      }

      return (
        <div>
            
           <AuthContext.Provider value={allValues}>
           {children}
           </AuthContext.Provider>
        </div>
    );
};

export default FirebaseProvider;