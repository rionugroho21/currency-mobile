import React from 'react';
import {startDownloadRates} from '../service/service';

export class Add extends React.Component {
    constructor(){
        super();
        this.state = {
            country: '',
            countryCode: []
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
        const listCountry = this.props.rates;
        const listItems = listCountry.map((index) => 
            <option key={index} data-value={index} value={index}>
                {index}
            </option>
        );
        return <div className="content__add add">
                <div className="add__wrap">
                    <form onSubmit={this.handleSubmit}>
                        <select className="add__select" name="country" value={this.state.country} onChange={this.handleChange}>{listItems}</select>
                        <button type="submit" className="add__submit">Submit</button>
                    </form>
                </div>
            </div>
    }
}