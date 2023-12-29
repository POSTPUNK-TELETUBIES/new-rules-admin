import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../../services/axios'
import RuleDetails from '../../stories/molecules/RuleDetails/RuleDetails'
import { RuleDTO } from '../../types/rule'
import { useContext } from 'react'
import { DrawerContext } from '../../stories/examples/drawer/Drawercontext'

const SectionDetails = () => {
  const { itemActiveId } = useContext(DrawerContext)

  const { data } = useQuery<RuleDTO, string>({
    queryKey: ['details'],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/details/?id=${itemActiveId}`)
      return data.details
    },
  })

  return (
    <div>
      {data ? (
        <RuleDetails
          type={data.type}
          severity={data.severity}
          isActive={data.is_active_sonarqube}
          subtitle={data.rule}
          htmlCode={data.description}
          date={data.date}
        />
      ) : (
        'Ups, no se encontró resultados'
      )}
    </div>
  )
}

export default SectionDetails
