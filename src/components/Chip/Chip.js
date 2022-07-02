import { React } from 'react';
import classNames from 'classnames'
import PropTypes, { bool } from 'prop-types';
import './Chip.css'
import Img from '../Img/Img';
import Icon from '../Icon/Icon';


const Chip = ({
    withImage, withIcon, withClose, imageSrc, imgAlt, iconName, className, text, onChipClick, onCloseClick, id
}) => {
    const classes = classNames(
        className,
        'chip'
    )
    const onChipClickAction = () => {
        onChipClick(id)
    }
    const onCloseClickAction = e => {
        e.stopPropagation();
        onCloseClick(e,id)
    }
    return(
        <div className={classes} onClick = {onChipClickAction}>
            {withImage 
                && (
                    <span className='chipImage'>
                        <Img src = {imageSrc} alt = {imgAlt} width = {24} height = {24}/>
                    </span>
                ) 
            }
            {withIcon
                && (
                    <span className='chipIcon'>
                        <Icon name = {iconName}/>
                    </span>
                )
            }
            <span className="chipText">{text}</span>
            {withClose
                && (
                    <span className='chipClose' onClick = {onCloseClickAction}>
                        <Icon name = "times"/>
                    </span>
                )

            }
        </div>
    )
}

Chip.propTypes = {
    withImage: PropTypes.bool,
    withIcon: PropTypes.bool,
    withClose: PropTypes.bool,
    imageSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    iconName: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    onChipClick: PropTypes.func,
    onCloseClick: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])

}

Chip.defaultTypes = {
    withImage: false,
    withIcon: false,
    withClose: false,
    imageSrc: '',
    imgAlt: '',
    iconName: 'user-tie',
    className: '',
    text: '',
    onChipClick: () => {},
    onCloseClick: () => {},
    id: null
}

export default Chip