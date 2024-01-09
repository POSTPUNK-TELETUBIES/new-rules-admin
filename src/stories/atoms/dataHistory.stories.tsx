import { createManyProposals } from '../../../mocks/factories/createManyProposals'

export default {
  title: 'atoms/HistoryAPI',
}

export const HistoryAPI = () => {
  const historyData = createManyProposals()

  return (
    <div>
      <h1>Console log de datos de historia:</h1>
      <pre>{JSON.stringify(historyData, null, 2)}</pre>
    </div>
  )
}
