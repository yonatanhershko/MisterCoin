import axios from 'axios';

const BASE_URL = 'https://blockchain.info/';
const API_BASE_URL = 'https://api.blockchain.info/';

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
};

// Convert 1 USD to Bitcoin
async function getRate() {
    try {
        const response = await axios.get(`${BASE_URL}tobtc`, {
            params: {
                currency: 'USD',
                value: 1
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Bitcoin conversion rate:', error);
        throw error;
    }
}

// Fetch the market price history over the last 5 months
async function getMarketPriceHistory() {
    try {
        const response = await axios.get(`${API_BASE_URL}charts/market-price`, {
            params: {
                timespan: '5months',
                format: 'json',
                cors: true,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching market price history:', error);
        throw error;
    }
}

// Fetch the average block size over the last 5 months
async function getAvgBlockSize() {
    try {
        const response = await axios.get(`${API_BASE_URL}charts/avg-block-size`, {
            params: {
                timespan: '5months',
                format: 'json',
                cors: true,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching average block size:', error);
        throw error;
    }
}
