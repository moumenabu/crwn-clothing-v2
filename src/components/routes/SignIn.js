import { useEffect } from "react";
import {
    googleSignInPopup,
    googleSignInRedirect,
    getRedirectResultHandler,
    createUserDocFromAuth,
 } from "../utils/firebase/firebase";
 import SignUpForm from "../forms/sign-up/SignUpForm";


function SignIn(){

    async function signInViaGooglePopup() {
        const { user } = await googleSignInPopup();
        const userDoc = await createUserDocFromAuth(user);
    }

    useEffect(() => {
        async function fetchGoogleRedirectResponse() {
            const response = await getRedirectResultHandler(); 
            //we did not extract {user} from the response via destructuring like above as when the app mounts initially the response 
            //will be null as there is no user record thus throwing an error as null is not an pbject that can be destructured 

            if(response) {
                await createUserDocFromAuth(response.user)
            }
        }
        fetchGoogleRedirectResponse();
    }, [])

    return(
        <div>
            <h1>Teh sign in page</h1>
            <button onClick={signInViaGooglePopup}>Sign in with Google popup</button>
            <button onClick={googleSignInRedirect}>Sign in with Google redirect</button> 
            {/* googleSignInRedirect used directly as acquiring the access token must be handled by getRedirectResulst() in useEffect, thus independently - it is not an async func as it takes us to another website*/}
            <SignUpForm />
        </div>
    )
}

export default SignIn;