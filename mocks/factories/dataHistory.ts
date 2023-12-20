import { faker } from '@faker-js/faker'
import { HistoryAction } from '../../src/components/data/history'

export const createHistory = (count?: number) => {

    return Array.from({ length: count ?? 3 }, (_, index) => ({
        id: index + 1,
        user: faker.person.fullName(),
        sustain: faker.lorem.sentence({ min: 10, max: 20 }),
        time: faker.date.past(),
        action: index % 2 === 0 ? HistoryAction.ActivateRule : HistoryAction.DeactivateRule,
        avatar: faker.number.int({ min: 1, max: 2 }).toString(),
    }))
}
