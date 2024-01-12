import { rest } from "msw";
import { getRules } from './../resolvers/index'
import handleHistoryRequest from './apiHistoryHandler';

export const handlers = [
  rest.get('/api/rules', getRules),
  rest.get('/api/history',handleHistoryRequest),
];



