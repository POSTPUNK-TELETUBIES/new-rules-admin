import React, { Suspense } from 'react'
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
  return (
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
      {sortedHistory?.map((item, index) => (
        <TimelineItem key={item.id}>
          <TimelineOppositeContent>
            <Suspense fallback={<LinearProgress />}>
              {item.time.toLocaleString()}
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
                showEditButton={index === 0}
              />
            </Suspense>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
