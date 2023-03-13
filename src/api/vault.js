import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://perp.bbbing.co',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

export const getPositions = (address) => {
    return instance.get(`/api/user/positions?chain=1&address=${address}`);
};
export const getProfit = (address,start,limit) => {
    return instance.get(`/api/user/profit?chain=1&address=${address}&start=${start}&limit=${limit}`);
};

export const getRecord = (address,start,limit) => {
    return instance.get(`/api/user/record?chain=1&address=${address}&start=${start}&limit=${limit}`);
};
export const getFundingFee = (address,start,limit) => {
    return instance.get(`/api/user/funding-fee?chain=1&address=${address}&start=${start}&limit=${limit}`);
};
