import { rest } from "msw";
import { createRules } from './../factories/createRules'
import createHistoryResponse from './historyHandler';

export const handlers = [
  rest.get('/api/rules', (req, res, ctx) => {
    const limit = Number(req.url.searchParams.get('limit')) || 20
    const offset = Number(req.url.searchParams.get('offset')) || 0

    const shouldUseCustomLimit = limit && offset
    const rules = shouldUseCustomLimit ? createRules(limit) : createRules(20)

    return res(ctx.status(200), ctx.json({ rules }))
  }),
  rest.get('/api/history', (req, res, ctx) => {
    const limit = Number(req.url.searchParams.get('limit'))
    const response = createHistoryResponse(limit);
    return res(ctx.status(200), ctx.json({ response }));
  }),
];



