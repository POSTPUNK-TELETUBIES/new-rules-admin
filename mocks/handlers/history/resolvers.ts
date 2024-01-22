import { HttpResponse, HttpResponseResolver } from 'msw';
import { createHistory } from '../../factories/dataHistory'
import { getPaginationParams } from '../utils/params';

export const handleHistoryRequest: HttpResponseResolver = ({params}) => {
    const { limit, offset } = getPaginationParams(params)
 
    const shouldUseCustomLimit = limit && offset
    const history = shouldUseCustomLimit ? createHistory(limit) : createHistory(20)

    return HttpResponse.json({ history })
}


