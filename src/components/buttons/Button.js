import './button.styles.scss';

function Button({children, buttonStyle, ...otherProps}) {
    const buttonStyles = {
        google: 'google-sign-in',
        inverted: 'inverted'
    }
    
    return (
        <button className={`button-container ${buttonStyles[buttonStyle]}`} {...otherProps} >{children}</button>
    )
}

export default Button;