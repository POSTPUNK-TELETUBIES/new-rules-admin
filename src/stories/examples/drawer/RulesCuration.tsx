import { Paper } from '@mui/material'
import ButtonChanges from './ButtonChanges'
import { faker } from '@faker-js/faker'

const RulesCuration = () => {
  return (
    <>
      <Paper sx={{ p: 2 }}>
      {
        faker.lorem.lines({min:50, max:50})
      }
      </Paper>
      <ButtonChanges />
    </>
  )
}

export default RulesCuration
