import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://perp.bbbing.co',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

export const getTokenPrices = () => {
    return instance.get(`/api/token/prices?chain=1`);
};
export const getTokenInfo = () => {
    return instance.get(`/api/config?chain=1`);
};

