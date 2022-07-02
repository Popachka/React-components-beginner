import { React } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import './Img.css'


const Img = ({
    src, alt, className, circle, width, height, ...attrs
}) =>{
    if (!src){
        src = `https://via.placeholder.com/${width}x${height}`
    }
    const classes = classNames(
        className,
        {circle}
    )
    return(
        <img src = {src}
            alt = {alt}
            className = {classes}
            {...attrs}
         />
    )
}

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    circle: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number

}

Img.defaultProps = {
    src: '',
    alt: 'image',
    className: '',
    circle: false,
    width: 100,
    height: 100
}
export default Img