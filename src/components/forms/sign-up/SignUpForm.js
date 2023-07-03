import { useState } from "react";
import { createUserViaEmailPassword, createUserDocFromAuth } from "../../utils/firebase/firebase";
import FormInput from "../form-inputs/FormInput";

import './SignUpForm.scss';
import Button from '../../buttons/Button.js';

function SignUpForm() {

    const formDataObj = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    
    const [formData, setFormData] = useState(formDataObj);
    const {displayName, email, password, confirmPassword} = formData;       //for more concise code we can extract tha values from the object

    function resetFormData (){ 
        setFormData(formDataObj) 
    }

    async function formSubmitHandler(event){
        event.preventDefault();
        
        if(password !== confirmPassword) {
            alert('password & password confirmation do not match');
            return;
        }

        try{
            const {user} = await createUserViaEmailPassword(email, password);
            await createUserDocFromAuth(user, {displayName});       //optional displayName added unlike google provider which supplies the displayName of the user account by default in access token
            resetFormData();
        } catch(error) {
            console.log(error);
            if(error.code === 'auth/email-already-in-use'){
                alert('Account with this email already exists :/');
            }
        }
    }

    function changeHandler(event){
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>I do not have an account?</h2>
            <span>Sign in with your email and password:</span>
            <form onSubmit={formSubmitHandler}>
                <FormInput label='Display Name' type="text" name='displayName' value={displayName} onChange={changeHandler} required/>
                <FormInput label='Email' type="email" name='email' value={email} onChange={changeHandler} required/>
                <FormInput label='Password' type="password" name='password' value={password} onChange={changeHandler} required/>
                <FormInput label='Confirm password' type="password" name='confirmPassword' value={confirmPassword} onChange={changeHandler} required/>
                <Button type="submit" buttonStyle=''>Submit</Button>                
            </form>
        </div>
    )
}

export default SignUpForm;