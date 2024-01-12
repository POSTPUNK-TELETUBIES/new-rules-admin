import React, { Suspense, useState } from 'react'
import { Button, LinearProgress } from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'
import CardHistory from './CardHistory'
import { Order } from './historyUtils'
import { ProposalDTO } from '../../types/proposal'
import { getDateDifference } from '../../utils/getDateDifference'

interface TimelineSectionProps {
  sortedHistory: ProposalDTO[]
  order: Order
  handleChangeOrder: () => void
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  sortedHistory,
  order,
  handleChangeOrder,
}) => {
  const itemsPerPage = 20
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedHistory.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(sortedHistory.length / itemsPerPage)

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <Button onClick={handleChangeOrder}>
          {order === Order.Ascending
            ? 'Ordenar de manera descendente'
            : 'Ordenar de manera ascendente'}
        </Button>
        {currentItems?.map((item, index) => (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent>
              <Suspense fallback={<LinearProgress />}>
                {getDateDifference(item.time)}
              </Suspense>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Suspense fallback={<LinearProgress />}>
                <CardHistory
                  id={item.id}
                  avatar={item.avatar}
                  user={item.user}
                  action={item.action}
                  sustain={item.sustain}
                  showEditButton={
                    order === Order.Ascending
                      ? index === sortedHistory.length - 1
                      : index === 0
                  }
                />
              </Suspense>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <div>
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Página anterior
        </Button>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Página siguiente
        </Button>
      </div>
    </>
  )
}
