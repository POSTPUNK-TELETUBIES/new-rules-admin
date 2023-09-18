import { DataProvider } from "@refinedev/core";

const NotImplementedError = new Error("not implemented");

export const mockDataProvider: DataProvider = {
  create(params) {
    throw NotImplementedError;
  },
  deleteOne(params) {
    throw NotImplementedError;
  },
  getApiUrl() {
    throw NotImplementedError;
  },
  getList(params) {
    throw NotImplementedError;
  },
  getOne(params) {
    throw NotImplementedError;
  },
  update(params) {
    throw NotImplementedError;
  },
};
