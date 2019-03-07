import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
    const post = props.post;
    return <div className="content__list">
            <div className="content__box box">
                <div className="box__wrap">
                    <div className="box__currency clearfix">
                        <p className="box__currency--left">{post.country}</p>
                        <p className="box__currency--right">{post.amount}</p>
                    </div>
                    <div className="box__desc">
                        <strong>{post.country} - currency conversion</strong>
                        <p>1 USD = {post.country} {post.currency}</p>
                    </div>
                </div>
                <button onClick = {() => {
                    props.startRemovingDatas(props.index, post.id);
                    props.history.push('/');
                }}className="box__remove"><span>(-)</span></button>
            </div>
        </div>
}

Item.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Item;