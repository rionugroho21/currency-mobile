import React from 'react';
import {startDownloadRates} from '../service/service';

export class Add extends React.Component {
    constructor(){
        super();
        this.state = {
            country: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({target}) {
        this.setState({
          [target.name]: target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const country = this.state.country.toUpperCase();
        this.startAddingRates(country);
        event.target.elements.country.value = "";
    }

    startAddingRates(post) {
        startDownloadRates()
        .then(res => {
            const data = res.data.rates;
            const total = data[post] * 10;
            const curr = data[post];
            const dataCount = {
                id: Number(new Date()),
                amount: total,
                currency: curr,
                country: post
            };
            this.props.startPostingRates(dataCount);
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        return <div className="content__add add">
                <div className="add__wrap">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="country" className="add__input" placeholder="" onChange={this.handleChange}/>
                        <button type="submit" className="add__submit">Submit</button>
                    </form>
                </div>
            </div>
    }
}