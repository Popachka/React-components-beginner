import { React } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import './Badge.css'

const Badge = ({
    value, className, circle, inline, outer, ...attrs
}) => {

    const text = typeof value === 'string' || value instanceof String;
    const classes = classNames(
        'badge',
        className,
        {text},
        {circle},
        {inline},
        {outer},
        { warning: attrs.warning},
        {info: attrs.info},
        {alert: attrs.alert},
        {success: attrs.success}
    )
    return(
        <span className={classes}>
            {value}
        </span>
    )
}

Badge.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    className: PropTypes.string,
    circle: PropTypes.bool,
    inline: PropTypes.bool,
    outer: PropTypes.bool
}

Badge.defaultProps = {
    className: '',
    circle: false,
    inline: false,
    outer: false

}

export default Badge