import { AxiosInstance } from 'axios'
import { IDataProvider, IGetListParams } from 'data_providers'
import { RuleDTO } from '../types/rule'

export class Rules implements IDataProvider {
  constructor(private client: AxiosInstance) {}

  async getList(_params: IGetListParams<any, any>): Promise<RuleDTO[]> {
    try {
      const { data } = await this.client.get('/rules')
      return data.rules ?? []
    } catch (error) {
      throw new Error(error as string)
    }
  }
}
