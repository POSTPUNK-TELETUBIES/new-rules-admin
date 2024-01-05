import JsonFileGenerator from "./JsonFileGenerator";
import { DB_MOCK } from "../mocks/database/db";

const options = { path: './public'}
const allRules = new JsonFileGenerator(options, DB_MOCK)
allRules.generateAllJson()
