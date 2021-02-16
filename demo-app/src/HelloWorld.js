import React from 'react'
import PropTypes from 'prop-types'

function HelloWorld(props) {
    return(
        <div>
            {props.info} {props.name}
        </div>
    );
}

HelloWorld.propTypes = {
    info: PropTypes.string.isRequired,
    name: PropTypes.string
};

HelloWorld.defaultProps = {
    name: 'User'
};

export default HelloWorld;