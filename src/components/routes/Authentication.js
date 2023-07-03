import SignUpForm from "../forms/sign-up/SignUpForm";
import SignInForm from "../forms/sign-in/SignInForm";

import './Authentication.styles.scss';

function Authentication(){
    return (
        <div className="centering-container">
            <div className="middleman-container">
                <div className="authentication-container">
                    <SignInForm></SignInForm>
                    <SignUpForm></SignUpForm>
                </div>
            </div>
        </div>
    )
}
export default Authentication;