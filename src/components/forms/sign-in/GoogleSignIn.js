import { useEffect } from "react";
import {
    googleSignInPopup,
    googleSignInRedirect,
    getRedirectResultHandler,
    createUserDocFromAuth,
 } from "../../utils/firebase/firebase";
import Button from "../../buttons/Button";


function GoogleSignIn(){

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
            <Button buttonStyle='google' onClick={signInViaGooglePopup}>Sign in with Google popup</Button>
            <Button buttonStyle='google' onClick={googleSignInRedirect}>Sign in with Google redirect</Button> 
            {/* googleSignInRedirect used directly as acquiring the access token must be handled by getRedirectResulst() in useEffect, thus independently - it is not an async func as it takes us to another website*/}
        </div>
    )
}

export default GoogleSignIn;