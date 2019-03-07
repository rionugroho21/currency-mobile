import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function List(props) {
    return <div>
            {props.datas
            .map((post, index) => <Item key={index} post={post} {...props} index={index}/>)}
        </div>
}

List.propTypes = {
    datas: PropTypes.array.isRequired,
}

export default List;