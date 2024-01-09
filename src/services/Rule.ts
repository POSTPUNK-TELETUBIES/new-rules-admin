import { AxiosInstance } from 'axios'
import { IDataProvider, IGetListParams, IGetOneParams } from 'data_providers'
import { RuleDTO } from '../types/rule'

export class RuleService implements IDataProvider {
  constructor(private client: AxiosInstance) {}

  async getOne(params: IGetOneParams<any>): Promise<RuleDTO> {
    try {
      const { data } = await this.client.get(`/rule/${params.id}`)
      return data
    } catch (error) {
      throw new Error(error as string)
    }
  }

  async getList(_params: IGetListParams<any, any>): Promise<RuleDTO[]> {
    try {
      const { data } = await this.client.get('/rule')
      return data.rules ?? []
    } catch (error) {
      throw new Error(error as string)
    }
  }
}
