import { faker } from '@faker-js/faker'
import { DB_MOCK } from './db'
import {
  ruleLanguageValues,
  ruleSeverityValues,
  ruleTypeValues,
} from './arrayOfEnums'
import { RuleDTO } from '../../src/types/rule'

export const seeds = () => {
  Array.from({ length: 100 }, () => {
    const rule: RuleDTO = {
      id: faker.string.uuid(),
      code: `${faker.helpers.arrayElement(
        ruleLanguageValues,
      )}:${faker.number.int({
        min: 50000,
        max: 60000,
      })}`,
      type: faker.helpers.arrayElement(ruleTypeValues),
      severity: faker.helpers.arrayElement(ruleSeverityValues),
      rule: faker.lorem.sentence({ min: 5, max: 10 }),
      is_active_sonarqube: faker.datatype.boolean(),
      is_active_local: faker.datatype.boolean(),
      date: faker.date.anytime(),
    }

    DB_MOCK.rule.create(rule)
  })
}
