import { useState, useEffect} from "react";
import { createContext } from "react";

import { authStateChangeHandler, setDisplayName, createUserDocFromAuth } from "../utils/firebase/firebase";

export const UserContext = createContext({
    userState: null,
    setUserState: () => null,
});

//normally the provider would be used directly at the desired component as data can be declared using useState within a compnent, 
//however since index is not a component we have to pass the 'useState' data from a component, thus packing the provider and data together in a component as below.
export const UserContextProvider = ({children}) => {
    const [userState, setUserState] = useState(null);
    const userStateObj = { userState, setUserState };

    useEffect(() => {
        const unsubscribe = authStateChangeHandler(async (user) => {
            if (user){
                const userWithDisplayName = await setDisplayName(user);
                createUserDocFromAuth(user, userWithDisplayName.displayName);
                setUserState(userWithDisplayName);
            } else {
                setUserState(user);
            }
        });

        return unsubscribe
    }, [])

    return <UserContext.Provider value={userStateObj}> {children} </UserContext.Provider>;
}