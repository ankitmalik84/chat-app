import {createContext,useContext, useEffect, useState} from "react";

const UserContext = createContext();

import { onAuthStateChanged ,signOut as authSignOut } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";



export const UserProvider =({children})=>{
    const [currentUser,setCurrentUser] = useState(null);

    const [isLoading,setIsLoading] = useState(true);

    const clear=()=>{
        setCurrentUser(null);
        setIsLoading(false);
    }
    // yaha pr ye check karta h ki user login h toh login rahe varna user logout ho aur sari state clear ho
    const authStateChanged =async (user)=>{
        setIsLoading(true);
        if(!user){
            clear();
            // setIsLoading(false);
            return;
        }
        const userDoc=await getDoc(doc(db,"users",user.uid));
        setCurrentUser(userDoc.data());
        setIsLoading(false);
        console.log(user);
    }

    const signOut = ()=>{
        authSignOut(auth).then(()=>{
            clear();
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,authStateChanged);
        return ()=> unsubscribe();
    },[]);
    return (
        <UserContext.Provider value={{
            currentUser,
            setCurrentUser,
            isLoading,
            setIsLoading,
            signOut,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => useContext(UserContext);