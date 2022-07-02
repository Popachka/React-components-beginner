import { React } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import './Input.css'


const Input = ({
    className, id,  label, error, ...attrs
}) => {
    const classes = classNames(
        className,
        'input',
        {error}
    )
    return(
        <div className='inputWrapper'>
            { label &&
                <label className='labelWrapper' htmlFor={id}>{label}</label>
            }
            {attrs.required &&
                <span className='inputRequired'>{attrs.required}</span>    
            }
            <input className={classes} name = {id} id = {id} {...attrs}/>
            { error &&
                <span className='inputError'>{error}</span>
            }
        </div>
    )
}

Input.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string
}

Input.defaultProps = {
    className: '',
    id: null,
    label: '',
    error: ''
}

export default Input