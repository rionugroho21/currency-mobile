import axios from 'axios';

export function startDownloadRates() {
    return axios.get('https://api.exchangeratesapi.io/latest?base=USD');
}