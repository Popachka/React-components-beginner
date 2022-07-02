import { React } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import './TabNav.css'

const TabNav = ({
    navLabel, className, onChangeActive
}) => {
    const classes = classNames(
        'nav-item',
        className

    )
    return( 
        <button
            type='button'
            className={classes}
            onClick = {() => { onChangeActive(navLabel)}}
        >
            {navLabel}
        </button>
    )
}

TabNav.propTypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActive: PropTypes.func
}
TabNav.defaultProps = {
    navLabel: 'Tab',
    className: '',
    onChangeActive: () => {}
}

export default TabNav