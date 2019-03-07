import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Header from './Header';
import List from './List';
import {Add} from './Add';

class Main extends Component {

    componentDidMount(){
        this.props.startLoadingRates();
    }

    render() {
        return (
            <div class="">
                <Header />
                <div className="content">
                    <List {...this.props} />
                    <Route exact path="/" render={() => (
                        <div className="content__add add">
                            <Link className="add__info" to={`/Add`}>(-) Add More Currencies</Link>
                        </div>
                    )}/>
                    <Route path="/Add" render={({history}) => (
                        <Add {...this.props} onHistory={history}/>
                    )}/>
                </div>
            </div>
        );
    }
}

export default Main;