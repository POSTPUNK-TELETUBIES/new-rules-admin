import { rest } from "msw";
import { example } from "../routes";
import { fakeDataExample } from "./dataExample";

export const exampleHandle = rest.get(example, (_req, res, ctx) => {
  return res(ctx.json(fakeDataExample));
});
