import { createHistory } from '../../../mocks/factories/dataHistory'

export default {
    title: 'atoms/HistoryAPI',
};

export const HistoryAPI = () => {
    const historyData = createHistory();

    return (
        <div>
            <h1>Console log de datos de historia:</h1>
            <pre>{JSON.stringify(historyData, null, 2)}</pre>
        </div>
    );
};