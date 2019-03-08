import {database} from '../database/config';
import {startDonwloadCountry} from '../service/service';

export function startLoadingRates(){
    return (dispatch) => {
        return database.ref('rates').once('value').then((snapshot) => {
            let datas = [];
            snapshot.forEach((childSnapshot) => {
                datas.push(childSnapshot.val());
            });
            dispatch(loadRates(datas));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function loadRates(datas) {
    return {
        type: 'LOAD_RATES',
        datas
    }
}

export function startPostingRates(post) {
    return (dispatch) => {
        return database.ref('rates').update({[post.id]: post}).then(() => {
            dispatch(addPost(post));
        }).catch((error) => {
            console.log(error);
        });
    } 
}

export function addPost(post) {
    return {
        type: 'ADD_RATES',
        post
    }
}

export function startRemovingDatas(index, id) {
    return (dispatch) => {
        return database.ref(`rates/${id}`).remove().then(() => {
            dispatch(removePost(index));
        }).catch((error) => {
            console.log(error);
        });
    }
}

export function removePost(index) {
    return {
        type: 'REMOVE_RATES',
        index
    }
}

export function startLoadingCountry(){
    return (dispatch) => {
        return startDonwloadCountry().then(res => {
            const country = res.data;
            let rates = '';
            let list = [];
            for(rates in country.rates) {
                list = list.concat(rates);
            }
            dispatch(loadCountry(list));
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export function loadCountry(data) {
    return {
        type: 'LOAD_COUNTRY',
        data
    }
}