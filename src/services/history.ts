import { AxiosInstance } from 'axios'
import { IDataProvider, IGetOneParams } from 'data_providers'

export class HistoryService implements IDataProvider {
  constructor(private client: AxiosInstance) {}

  async getOne(params: IGetOneParams<any>): Promise<any> {
    const { filter } = params

    try {
      const { data } = await this.client.get('/history/?id=' + filter.id)

      return data.history ?? []
    } catch (error) {
      throw new Error(error as string)
    }
  }

  async createOne(payload: any): Promise<void | Partial<any>> {
    const { ruleId, ...others } = payload
    const url = `/history/${ruleId}`

    const { data } = await this.client.get(url, others)
    return data
  }

  async updateOne(payload: Partial<any>): Promise<any> {
    const { id, ...others } = payload

    const { data } = await this.client.put(`/history/${id}`, others)

    return data.proposal
  }
}
