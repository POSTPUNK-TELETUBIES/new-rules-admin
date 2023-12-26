import JsonFileGenerator from "./JsonFileGenerator";
import { DB_MOCK } from "../mocks/database/db";

const options = { path: './public', fileName: 'rules.json' }
const allRules = new JsonFileGenerator(options, DB_MOCK)
allRules.generateRules()
