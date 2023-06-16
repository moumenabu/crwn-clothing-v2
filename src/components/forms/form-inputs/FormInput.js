import './form-input.styles.scss' 

function FormInput({label, ...otherprops}){
    return (
            <div className="group">    
                {/* input before label required for the 'shrink' feature due to how the css was written */}
                <input className='form-input' {...otherprops}  /> 
                {label && <label className={`${otherprops.value ? 'shrink' : null} form-input-label`}>{label}</label>}
            </div>
        )
}
 
export default FormInput;