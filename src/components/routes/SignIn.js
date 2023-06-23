import SignUpForm from "../forms/sign-up/SignUpForm";
import SignInForm from "../forms/sign-in/SignInForm";


function SignIn(){
    return (
        <div>
            <h1>The sign in page</h1>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    )
}
export default SignIn;