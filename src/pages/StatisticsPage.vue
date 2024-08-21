<template>
    <div class="bitcoin-data">
        <div class="data-item">
            <h3>Bitcoin Conversion Rate</h3>
            <p>1 USD = {{ conversionRate }} BTC</p>
        </div>
        <div class="data-item">
            <h3>Market Price History</h3>
            <!-- <Bar :data="marketPriceHistory"></Bar> -->
        </div>
        <div class="data-item">
            <h3>Average Block Size</h3>
            <!-- <Bar :data="avgBlockSizeHistory"></Bar> -->
        </div>
    </div>
</template>

<script>
import { bitcoinService } from '../services/bitcoinService';
import { Line as LineChart, Bar as BarChart } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale
);

export default {
    data() {
        return {
            conversionRate: null,
            marketPriceHistory: [],
            avgBlockSizeHistory: [],
        };
    },
    async created() {
        this.conversionRate = await bitcoinService.getRate();
        this.marketPriceHistory = await this.formatMarketPriceHistory(
            await bitcoinService.getMarketPriceHistory()
        );
        this.avgBlockSizeHistory = await this.formatAvgBlockSizeHistory(
            await bitcoinService.getAvgBlockSize()
        );
    },
    methods: {
        formatMarketPriceHistory(data) {
            const labels = data.values.map((item) => new Date(item.x * 1000).toLocaleDateString());
            const prices = data.values.map((item) => item.y);

            return {
                labels,
                datasets: [
                    {
                        label: 'Market Price',
                        data: prices,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            };
        },

        formatAvgBlockSizeHistory(data) {
            const labels = data.values.map((item) => new Date(item.x * 1000).toLocaleDateString());
            const sizes = data.values.map((item) => item.y);

            return {
                labels,
                datasets: [
                    {
                        label: 'Average Block Size',
                        data: sizes,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    },
                ],
            };
        },
    },
    components: {
        LineChart,
        BarChart,
    },
};
</script>

<style scoped>
.bitcoin-data {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.data-item {
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
}
</style>