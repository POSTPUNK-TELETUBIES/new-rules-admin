export enum Order {
    Ascending = 'asc',
    Descending = 'desc',
}
export const sortByOrder = (order: Order) => (
    { time: prevTime }: { time: Date },
    { time: nextTime }: { time: Date }
) => {
    const factor = order === Order.Ascending ? 1 : -1;
    return factor * (new Date(prevTime).getTime() - new Date(nextTime).getTime());
};