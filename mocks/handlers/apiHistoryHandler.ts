// import { DefaultBodyType, PathParams, ResponseComposition, RestContext, RestRequest } from 'msw';
// import { createHistory } from '../factories/dataHistory'

// type HistoryRequest = RestRequest<never, PathParams<string>>
// type HistoryResponse = ResponseComposition<DefaultBodyType>

// const handleHistoryRequest = (req: HistoryRequest, res: HistoryResponse, ctx: RestContext) => {
//     const limit = Number(req.url.searchParams.get('limit')) || 20
//     const offset = Number(req.url.searchParams.get('offset')) || 0
//     const shouldUseCustomLimit = limit && offset
//     const history = shouldUseCustomLimit ? createHistory(limit) : createHistory(20)

//     return res(ctx.status(200), ctx.json({ history }))
// }

// export default handleHistoryRequest;
