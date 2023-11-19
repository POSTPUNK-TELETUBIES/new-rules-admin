import { createHistory } from '../../../mocks/factories/dataHistory';

const fetchHistoryData = async () => {
    const historyData = createHistory(14);
    return historyData;
};

export default {
    fetchHistoryData,
};  