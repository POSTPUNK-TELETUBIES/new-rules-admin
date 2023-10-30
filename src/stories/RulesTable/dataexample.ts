import { faker, simpleFaker } from '@faker-js/faker'

const generateRule = () => {
  const id = simpleFaker.string.uuid()
  const technology = faker.helpers.arrayElement([
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
  ])
  const code = `${technology}:${faker.number.int({ min: 50000, max: 60000 })}`
  const rule = faker.lorem.sentence({ min: 10, max: 15 })
  const type = faker.helpers.arrayElement([
    'BUG',
    'VULNERABILITY',
    'CODE_SMELL',
    'SECURITY_HOTSPOT',
  ])
  const severity = faker.helpers.arrayElement([
    'INFO',
    'MINOR',
    'MAJOR',
    'CRITICAL',
    'BLOCKER',
  ])
  const state = faker.helpers.arrayElement(['ACTIVE', 'DESACTIVE'])
  const date = faker.date.anytime()

  return { id, code, rule, type, severity, state, date }
}

export const dataExample = Array.from({ length: 10 }, () => generateRule())
