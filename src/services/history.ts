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

  // async createOne(payload: any): Promise<void | Partial<any>> {
  //   const { data } = await this.client.get('/history/add', payload)
  //   return data
  // }

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
