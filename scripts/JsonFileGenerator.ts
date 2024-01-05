

import { FactoryAPI } from '@mswjs/data/lib/glossary'
import { RuleDTO } from '../src/types/rule';
import * as fs from 'fs';

type MswDb = FactoryAPI<{ rule: Record<keyof RuleDTO, any> }>

interface Options {
  path: string;
  fileName?: string;
}

interface IJsonFileGenerator {
  //Todo: Change to private methods and create a public method to generate the json files
  generateAllJson(): void;
}

const defaultOptions: Options = {
  path: './public',
};

class JsonFileGenerator implements IJsonFileGenerator {

  constructor(
    private initialOptions = defaultOptions,
    private mswDb: MswDb

  ) { }

  private generateRules() {

    const allRules = this.mswDb.rule.findMany({ strict: true })
    const parsedRules = JSON.stringify(allRules)
    const pathFileCreate = `${this.initialOptions.path}/${this.initialOptions.fileName}`

    fs.writeFileSync(pathFileCreate, parsedRules)
    console.log('Rules generated Succesfully!')

  }

  public generateAllJson(){
    this.generateRules()
  }

}

export default JsonFileGenerator
