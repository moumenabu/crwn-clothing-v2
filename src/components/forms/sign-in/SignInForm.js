import { useEffect } from "react";
import {
    googleSignInPopup,
    googleSignInRedirect,
    getRedirectResultHandler,
    createUserDocFromAuth,
 } from "../../utils/firebase/firebase";

import GoogleSignIn from "./GoogleSignIn";


function SignInForm(){
    return (
        <div>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <GoogleSignIn />
        </div>       
    )
}

export default SignInForm;