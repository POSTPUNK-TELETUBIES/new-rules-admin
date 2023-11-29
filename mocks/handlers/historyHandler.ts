import { createHistory } from './../factories/dataHistory'

const createHistoryResponse = (limit: number) => {
    const history = createHistory(limit);
    return { history };
};

export default createHistoryResponse;