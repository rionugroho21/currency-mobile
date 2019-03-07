import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return <div className="header">
            <Link to={`/`}>
                <div className="header__label">
                    <span>USD - United States Dollars</span>
                </div>
                <div className="header__amount clearfix">
                    <span className="header__amount--left">USD</span>
                    <span className="header__amount--right">10.0000</span>
                </div>
            </Link>
        </div>
}

export default Header;