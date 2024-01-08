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

    const { data } = await this.client.get(`/history/${ruleId}`, others)
    return data
  }

  async updateOne(payload: Partial<any>): Promise<any> {
    const { id, explanation } = payload

    const url = `/history/?id=${id}&explanation=${encodeURIComponent(
      explanation,
    )}`

    const { data } = await this.client.put(url, payload)

    return data.proposal
  }
}
