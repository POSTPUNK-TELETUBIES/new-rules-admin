import { useState, Suspense, useEffect, useContext } from 'react'
import Avatar from '@mui/material/Avatar'
import { Box, LinearProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { sortByOrder, Order } from './historyUtils'
import { TimelineSection } from './TimelineComponent'
import { AccordionComponent } from './AccordionComponent'
import { AsynProviderNames } from '../../types/providers'
import { useGetOne } from 'data_providers'
import { DrawerContext } from '../../stories/examples/drawer/Drawercontext'
import { ProposalDTO } from '../../types/proposal'

const SectionHistory = () => {
  const { itemActive } = useContext(DrawerContext)
  const getHistory = useGetOne(AsynProviderNames.HISTORY)

  const { data } = useQuery<ProposalDTO[], string>({
    queryFn: async () => {
      const data = await getHistory({
        filter: {
          id: itemActive,
        },
      })
      return data
    },
    queryKey: ['history'],
  })

  const [order, setOrder] = useState(Order.Ascending)
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (data) {
      const initialSelectedUsers = new Set<string>(
        data.map((item) => item.user),
      )
      setSelectedUsers(initialSelectedUsers)
    }
  }, [data])

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
      <Suspense fallback={<LinearProgress />}>
        <Box sx={{ display: 'flex', flexDirection: 'row', mb: 3 }}>
          {data?.map((item) => (
            <Avatar
              key={item.id}
              alt={item.user}
              src={`/static/images/avatar/${'item.avatar'}.jpg`}
              sx={{ ml: 0.5 }}
            />
          ))}
        </Box>
      </Suspense>
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
