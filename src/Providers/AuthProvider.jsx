import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firbase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const SignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user', currentUser);
            setLoading(false);
            if (currentUser && currentUser.email) {
                const loggedUser = {
                    email: currentUser.email
                }

                fetch('https://car-doctor-server-chi-rose.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt response', data);
                        // warning: Local storage is not good and secure
                        localStorage.setItem('car-access-token', data.token)
                    })
            }else{
                localStorage.removeItem('car-access-token');
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        SignOut,
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;