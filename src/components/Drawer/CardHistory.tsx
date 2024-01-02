import { Avatar, Chip, IconButton, Paper, Typography } from '@mui/material'
import { HistoryAction } from '../../components/data/history'
import EditIcon from '@mui/icons-material/Edit'
import { CurationForm } from '../../stories/examples/Card/CurationForm'
import { useState } from 'react'
import { useUpdateOne } from 'data_providers'
import { AsynProviderNames } from '../../types/providers'

export interface CardHistoryProps {
  user: string
  action: HistoryAction
  sustain: string
  avatar: string
  showEditButton?: boolean
}

const CardHistory = ({
  user,
  action,
  sustain,
  avatar,
  showEditButton,
}: CardHistoryProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)
  const [sustento, setSustento] = useState<string>(sustain)

  const updateHistory = useUpdateOne(AsynProviderNames.HISTORY)

  const handleSave = async (dataform: any) => {
    try {
      const updatedProposal = await updateHistory({
        id: 1,
        newText: dataform.explanation,
      })

      setSustento(updatedProposal?.sustain)
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
        color={action === HistoryAction.ActivateRule ? 'success' : 'error'}
        sx={{ marginTop: 1 }}
      />
      {isEditing ? (
        <CurationForm
          onSubmit={handleSave}
          isEditing={isEditing}
          initialValues={{ explanation: sustento }}
        />
      ) : (
        <>
          <Typography sx={{ marginTop: 1 }}>{sustento}</Typography>
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
