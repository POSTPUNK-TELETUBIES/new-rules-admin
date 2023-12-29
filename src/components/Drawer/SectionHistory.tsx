import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { sortByOrder, Order } from './historyUtils'
import TimelineSection from './TimelineComponent'
import AccordionComponent from './AccordionComponent'
import { axiosInstance } from '../../services/axios'
import { HistoryDTO } from '../../types/history'
import AvatarsComponent from './AvatarsComponent'

interface SectionHistoryProps {
  ruleId: any; 
}
const SectionHistory: React.FC<SectionHistoryProps> = ({ ruleId }) => {
  const { data } = useQuery<HistoryDTO[], string>({
    queryKey: ['history', ruleId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/history/${ruleId}`); 
      return data.history
    },
  })
  const [order, setOrder] = useState(Order.Ascending)
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (data) {
      // Filtrar las historias que tienen el mismo ruleId
      const filteredData = data.filter((item) => item.ruleId === ruleId);

      // Inicializar los usuarios seleccionados basados en las historias filtradas
      const initialSelectedUsers = new Set<string>(
        filteredData.map((item) => item.user),
      );
      setSelectedUsers(initialSelectedUsers);
    }
  }, [data, ruleId]);

  const handleCheckboxChange = (user: string) => {
    setSelectedUsers((prevSelectedUsers) => {
      const newSelectedUsers = new Set(prevSelectedUsers)
      if (newSelectedUsers.has(user)) {
        newSelectedUsers.delete(user)
      } else {
        newSelectedUsers.add(user)
      }
      return newSelectedUsers
    })
  }
  const sortedHistory = data
    ? data
        .filter((item) => selectedUsers.has(item.user))
        .slice()
        .sort(sortByOrder(order))
    : []
  const handleChangeOrder = () => {
    setOrder((prevOrder) =>
      prevOrder === Order.Ascending ? Order.Descending : Order.Ascending,
    )
  }

  return (
    <>
      <AvatarsComponent sortedHistory={sortedHistory} />
      <AccordionComponent
        data={data ?? []}
        selectedUsers={selectedUsers}
        handleCheckboxChange={handleCheckboxChange}
      />
      <TimelineSection
        sortedHistory={sortedHistory}
        order={order}
        handleChangeOrder={handleChangeOrder}
      />
    </>
  )
}

export default SectionHistory
