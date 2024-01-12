import { Avatar, AvatarGroup } from '@mui/material'
import { ProposalDTO } from '../../types/proposal'

interface AvatarListProps {
  sortedHistory: ProposalDTO[]
}

const AvatarList = ({ sortedHistory }: AvatarListProps) => {
  return (
    <AvatarGroup
      max={18}
      sx={{ mb: 3, justifyContent: 'start' }}
      total={sortedHistory?.length}
    >
      {sortedHistory?.map((item) => (
        <Avatar
          key={item.id}
          alt={item.user}
          src={item.avatar}
          sx={{ ml: 0.5 }}
        />
      ))}
    </AvatarGroup>
  )
}

export default AvatarList
