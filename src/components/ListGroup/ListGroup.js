import { React } from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import './ListGroup.css'

const ListGroup = ({
    children, tag: Tag, className, ...attrs
}) =>{

    const classes = classNames(
        className,
        'list-group'
    )
    return(
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    )
}

ListGroup.propTypes = {
    children: PropTypes.node,
    tag: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]),
    className: PropTypes.string
}

ListGroup.defaultProps = {
    children: null,
    tag: 'ul',
    className: ''
}

export default ListGroup