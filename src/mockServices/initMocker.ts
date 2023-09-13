import { server } from "./index";

interface InitMockService {
  (isActive?: boolean): void;
}

export const initMockService: InitMockService = (isActive = false) => {
  if (process.env.NODE_ENV === "development" && isActive) {
    server.listen();
  }
};
