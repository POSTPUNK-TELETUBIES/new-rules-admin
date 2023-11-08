import { faker, simpleFaker } from '@faker-js/faker'

export const createRules = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: simpleFaker.string.uuid(),
    code: `${faker.helpers.arrayElement([
      'html',
      'css',
      'javascript',
      'php',
      'python',
      'java',
      'ruby',
      'go',
      'swift',
      'kotlin',
    ])}:${faker.number.int({ min: 50000, max: 60000 })}`,
    rule: faker.lorem.sentence({ min: 10, max: 15 }),
    type: faker.helpers.arrayElement([
      'BUG',
      'VULNERABILITY',
      'CODE_SMELL',
      'SECURITY_HOTSPOT',
    ]),
    severity: faker.helpers.arrayElement([
      'INFO',
      'MINOR',
      'MAJOR',
      'CRITICAL',
      'BLOCKER',
    ]),
    isActive: faker.datatype.boolean(),
    date: faker.date.anytime(),
  }))
}
