import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://perp.bbbing.co',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

export const getTranStatus = (hash) => {
    return instance.get(`/api/tran-status?trans_hash=${hash}`);
};


