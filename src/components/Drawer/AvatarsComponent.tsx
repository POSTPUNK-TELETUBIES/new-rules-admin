import React, { Suspense } from 'react'
import { LinearProgress, Box, Avatar } from '@mui/material'
import { HistoryDTO } from '../../types/history'

interface AvatarsComponentProps {
  sortedHistory: HistoryDTO[]
}

const AvatarsComponent: React.FC<AvatarsComponentProps> = ({
  sortedHistory,
}) => {
    const uniqueAvatarsSet = new Set(sortedHistory.map((item) => item?.user));
    const uniqueAvatars = Array.from(uniqueAvatarsSet);

    const avatarsToShow = uniqueAvatars.map((username) => {
        const item = sortedHistory.find((historyItem) => historyItem?.user === username);
        return (
          <Avatar
            key={item?.user}
            src={item?.avatar}
            alt={item?.user}
            sx={{ ml: 0.5 }}
          />
        );
      });

  return (
    <Suspense fallback={<LinearProgress />}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mb: 3,
          width: '1100px',
          overflowX: 'auto',
        }}
      >
        {avatarsToShow}
      </Box>
    </Suspense>
  )
}

export default AvatarsComponent
