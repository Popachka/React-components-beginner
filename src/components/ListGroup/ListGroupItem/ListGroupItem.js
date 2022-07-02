import { React } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import './ListGroupItem.css'
const ListGroupItem = ({
    children, tag: Tag, className,disabled, active, ...attrs
}) =>{

    const classes = classNames(
        className,
        'list-group-item',
        {disabled},
        {active}
    )
    if (attrs.href && Tag === 'li') {
        Tag = 'a'
    }
    return(
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    )
}

ListGroupItem.propTypes = {
    children: PropTypes.node,
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool

}

ListGroupItem.defaultProps = {
    children: null,
    tag: 'li',
    className: '',
    disabled: false,
    active: false
}

export default ListGroupItem