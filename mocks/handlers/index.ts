import { rest } from "msw";
import { getRules } from './../resolvers/index'
import { getHistory } from './getHistory';

export const handlers = [
  rest.get('/api/rules', getRules),
  rest.get('/api/history',getHistory),
];



