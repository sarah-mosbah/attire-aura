import {createContext, useState, useEffect} from 'react';
import { onAuthStateChangedListener, createUserDocFromAuth } from '../utils/firebase/firbase.utils';

export const UsersContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


export const UsersProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener( async (user) => {
           if(user) {
            setCurrentUser(user);
             await createUserDocFromAuth(user);
           }
        });

        return unsubscribe;
    });

    return <UsersContext.Provider value={value}>
        {children}
    </UsersContext.Provider>
}



