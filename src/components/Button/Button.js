import { React } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import './Button.css' 
const Button = ({
    children, onClick, className, active, disabled, ...attrs 
}) =>{
    const classes = classNames(
        'btn',
        className,
        {active}
    )
    
    const Tag = attrs.href ? 'a' : 'button';
    const onClickAction = e => {
        if (disabled){
            e.preventDefault()
        }  else {
            return onClick(e)
        }
    }
    return(
        <Tag
          {...attrs} 
          onClick={onClickAction}
          className = {classes}
          disabled = {disabled}
        >{children}</Tag>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    children: "Default button",
    onClick: () => {},
    className: '',
    active: false,
    disabled: false
}
export default Button