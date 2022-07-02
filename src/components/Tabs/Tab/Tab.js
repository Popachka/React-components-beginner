import { React } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import './Tab.css'

const Tab = ({
    children, label, activeTab,  ...attrs
}) => {
    const classes = classNames(
        'tab-bar-item',
        {active: activeTab === label}

    )
    return( 
        <div className={classes} {...attrs}>
            {children}
        </div>
    )
}

Tab.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
    activeTab: PropTypes.string
}
Tab.defaultProps = {
    children: null,
    activeTab: ''
}

export default Tab