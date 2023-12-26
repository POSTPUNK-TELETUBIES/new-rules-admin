

import { FactoryAPI } from '@mswjs/data/lib/glossary'
import { RuleDTO } from '../src/types/rule';
import * as fs from 'fs';

type MswDb = FactoryAPI<{ rule: Record<keyof RuleDTO, any> }>

interface Options {
  path: string;
  fileName?: string;
}

interface IJsonFileGenerator {

  generateRules(options?: Options): void;
  generateUsers(options?: Options): void;
  generateAll(options?: Options): void;
}

const defaultOptions: Options = {
  path: './public',
};

class JsonFileGenerator implements IJsonFileGenerator {

  constructor(
    private initialOptions = defaultOptions,
    private mswDb: MswDb

  ) { }

  public generateRules() {


    const allRules = this.mswDb.rule.findMany({ strict: true })
    const parsedRules = JSON.stringify(allRules)
    const pathFileCreate = `${this.initialOptions.path}/${this.initialOptions.fileName}`

    fs.writeFileSync(pathFileCreate, parsedRules)
    console.log('Rules generated Succesfully!')

  }

  async generateUsers() { }

  async generateAll() { }

}

export default JsonFileGenerator
