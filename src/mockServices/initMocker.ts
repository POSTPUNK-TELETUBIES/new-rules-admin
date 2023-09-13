import { server } from "./index";

export const initMockService = (isActive = false) => {
  if (process.env.NODE_ENV === "development" && isActive) {
    server.listen();
  }
};
