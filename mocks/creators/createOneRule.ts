import { faker } from '@faker-js/faker'
import { RuleDTO } from '../../src/types/rule'
import {
  ruleLanguageValues,
  ruleSeverityValues,
  ruleTypeValues,
} from '../database/arrayOfEnums'
import { createHistory } from '../factories/dataHistory'

export const createOneRule = (): RuleDTO => {
  const rule: RuleDTO = {
    id: faker.string.uuid(),
    code: `${faker.helpers.arrayElement(ruleLanguageValues)}:${faker.number.int(
      {
        min: 50000,
        max: 60000,
      },
    )}`,
    type: faker.helpers.arrayElement(ruleTypeValues),
    severity: faker.helpers.arrayElement(ruleSeverityValues),
    rule: faker.lorem.sentence({ min: 5, max: 10 }),
    is_active_sonarqube: faker.datatype.boolean(),
    is_active_local: faker.datatype.boolean(),
    date: faker.date.anytime(),
    history: createHistory(20),
  }

  return rule
}
