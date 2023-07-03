import { useState} from "react";
import { manualUserSignIn, manualUserSignOut } from "../../utils/firebase/firebase";

import FormInput from "../form-inputs/FormInput";
import GoogleSignIn from "./GoogleSignIn";
import Button from "../../buttons/Button";


function SignInForm(){

    const formDataObj = {
        email: '',
        password: '',
    };

    const [formData, setformData] = useState(formDataObj);

    function formChangeHandler(event) {
        const {name, value} = event.target;
        setformData({...formData, [name]: value})
    }

    function resetformData() {
        setformData(formDataObj);
    }

    async function submitHandler(event) {
        event.preventDefault();

        try {
            const {user} = await manualUserSignIn(formData.email, formData.password)
            resetformData();
        } catch(error) {
            if(error.code === 'auth/user-not-found') {
                alert('Wrong Email');
            } else {
                alert('Wrong Password');
            }
        }
    }

    async function signOutHandler(event) {
        event.preventDefault();

        try {
            const reply = await manualUserSignOut()
            console.log(reply);
        } catch(error) {
            console.log(error.code);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput label='Email' type='email' name='email' value={formData.email} onChange={formChangeHandler} required/>
                <FormInput label='Password' type='password' name='password' value={formData.password} onChange={formChangeHandler} required/>
                <div className="buttons-container">
                    <Button type='submit' buttonStyle=''>Sign In</Button>
                    <Button buttonStyle='inverted' onClick={signOutHandler}>Sign Out</Button>
                </div>
            </form>
            <GoogleSignIn />
        </div>       
    )
}

export default SignInForm;