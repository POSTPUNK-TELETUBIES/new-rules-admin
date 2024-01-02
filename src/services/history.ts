import { AxiosInstance } from 'axios'
import { IDataProvider, IGetListParams } from 'data_providers'
import { History } from '../components/data/history'

export class HistoryService implements IDataProvider {
  constructor(private client: AxiosInstance) {}

  async getList(_params: IGetListParams<any, any>): Promise<History[]> {
    const { data } = await this.client.get('/history')
    return data.history
  }

  async createOne(payload: any): Promise<void | Partial<any>> {
    const { data } = await this.client.get('/history/add', payload)
    return data
  }

  async updateOne(payload: Partial<any>): Promise<any> {
    // const { data } = await this.client.get('/history/update', payload)
    console.log('payload', payload)

    const { data } = await this.client.get(
      `/history/update?id=123&proposalText=${encodeURIComponent('Hola mundo')}`,
      payload,
    )

    return data.proposal
  }
}
