import { AxiosInstance } from 'axios'
import { IDataProvider, IGetOneParams } from 'data_providers'

export class DetailsService implements IDataProvider {
  constructor(private client: AxiosInstance) {}

  async getOne(params: IGetOneParams<any>): Promise<any> {
    const { filter } = params
    const url = `/details/?id=${filter.id}`

    const { data } = await this.client.get(url)
    return data.details
  }
}
