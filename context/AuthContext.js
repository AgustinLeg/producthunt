import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Router from 'next/router';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [currentUser]);

  const createUser = (email, password, nombre) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: nombre,
        })
          .then(() => {
            console.log('nombre agregado !');
            setCurrentUser({
              currentUser,
              displayName: name,
            });
            Router.push('/');
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log('error nombre', error);
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al crear la cuenta', errorCode, errorMessage);
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Router.push('/');
        console.log('logged', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('logged out');
        Router.push('/');
      })
      .catch((error) => {
        console.log('error logout', error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        createUser,
        login,
        logout,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
