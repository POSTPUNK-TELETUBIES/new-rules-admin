import { Avatar, Chip, IconButton, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { CurationForm } from '../../stories/examples/Card/CurationForm'
import { useState } from 'react'
import { useUpdateOne } from 'data_providers'
import { AsynProviderNames } from '../../types/providers'
import { ProposalAction } from '../../types/proposal'

export interface CardHistoryProps {
  id: string
  user: string
  action: ProposalAction
  sustain: string
  avatar: string
  showEditButton?: boolean
}

const CardHistory = ({
  id,
  user,
  action,
  sustain,
  avatar,
  showEditButton,
}: CardHistoryProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [justification, setJustification] = useState<string>(sustain)

  const updateHistory = useUpdateOne(AsynProviderNames.HISTORY)

  const handleSave = async (dataform: any) => {
    try {
      const updatedProposal = await updateHistory({
        id: id,
        newText: dataform.explanation,
      })

      setJustification(updatedProposal?.sustain)
      setIsEditing(false)
    } catch (error) {
      throw new Error(error as string)
    }
  }

  const handleEditClick = () => setIsEditing(true)

  return (
    <Paper sx={{ p: 2, position: 'relative' }}>
      <Avatar src={avatar} alt={user} />
      <Typography variant='subtitle1' fontWeight={'bold'}>
        {user}
      </Typography>
      <Chip
        label={action}
        color={action === ProposalAction.ActivateRule ? 'success' : 'error'}
        sx={{ marginTop: 1 }}
      />
      {isEditing ? (
        <CurationForm
          onSubmit={handleSave}
          isEditing={isEditing}
          initialValues={{ explanation: justification }}
        />
      ) : (
        <>
          <Typography sx={{ marginTop: 1 }}>{justification}</Typography>
          {showEditButton && (
            <IconButton
              aria-label='edit'
              size='large'
              sx={{ position: 'absolute', top: 8, right: 8 }}
              onClick={handleEditClick}
            >
              <EditIcon fontSize='inherit' />
            </IconButton>
          )}
        </>
      )}
    </Paper>
  )
}

export default CardHistory
