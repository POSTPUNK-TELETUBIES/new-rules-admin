import { useQuery } from '@tanstack/react-query'
import RuleDetails from '../../stories/molecules/RuleDetails/RuleDetails'
import { RuleDTO } from '../../types/rule'
import { useContext } from 'react'
import { DrawerContext } from '../../stories/examples/drawer/Drawercontext'
import { useGetOne } from 'data_providers'
import { AsynProviderNames } from '../../types/providers'

const SectionDetails = () => {
  const { itemActive } = useContext(DrawerContext)
  const getDetails = useGetOne(AsynProviderNames.DETAILS)

  const { data } = useQuery<RuleDTO, string>({
    queryFn: async () => {
      const data = await getDetails({
        filter: {
          id: itemActive,
        },
      })
      return data
    },
    queryKey: ['details'],
  })

  return (
    <div>
      {data ? <RuleDetails rule={data} /> : 'Ups, no se encontró resultados'}
    </div>
  )
}

export default SectionDetails
