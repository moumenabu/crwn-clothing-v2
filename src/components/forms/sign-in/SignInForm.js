import { useState} from "react";
import { manualUserSignIn } from "../../utils/firebase/firebase";
//import { useContext } from "react";
//import { getAuth } from "firebase/auth";

import FormInput from "../form-inputs/FormInput";
import GoogleSignIn from "./GoogleSignIn";
import Button from "../../buttons/Button";
/* import { UserContext } from "../../contexts/UserContext";
import { setDisplayName } from '../../utils/firebase/firebase';
 */

function SignInForm(){

    const formDataObj = {
        email: '',
        password: '',
    };

    const [formData, setformData] = useState(formDataObj);

    //const LoggedInUser = useContext(UserContext);

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
            const {user} = await manualUserSignIn(formData.email, formData.password);
           /*  if (user) {
                //set user state with firebase user object (after adding the displayName)
                LoggedInUser.setUserState(await setDisplayName(user));
            } */
            resetformData();
        } catch(error) {
            if(error.code === 'auth/user-not-found') {
                alert('Wrong Email');
            } else {
                console.log(error.code);
            }
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
                </div>
            </form>
            <GoogleSignIn />
        </div>       
    )
}

export default SignInForm;