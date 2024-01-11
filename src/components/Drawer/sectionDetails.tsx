import { useQuery } from '@tanstack/react-query'
import RuleDetails from '../../stories/molecules/RuleDetails/RuleDetails'
import { RuleDTO } from '../../types/rule'
import { useContext } from 'react'
import { DrawerContext } from '../../stories/examples/drawer/Drawercontext'
import { useGetOne } from 'data_providers'
import { AsynProviderNames } from '../../types/providers'

const SectionDetails = () => {
  const { itemActive } = useContext(DrawerContext)
  const getRule = useGetOne(AsynProviderNames.RULE)

  const { data } = useQuery<RuleDTO, string>({
    queryFn: async () => {
      const data = await getRule({
        id: itemActive,
      })

      return data.rule
    },
    queryKey: ['rule'],
  })

  return (
    <div>
      {data ? <RuleDetails rule={data} /> : 'Ups, no se encontró resultados'}
    </div>
  )
}

export default SectionDetails
