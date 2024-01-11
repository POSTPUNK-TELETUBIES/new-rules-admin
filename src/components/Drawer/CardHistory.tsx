import { Avatar, Chip, IconButton, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { CurationForm } from '../../stories/examples/Card/CurationForm'
import { useEffect, useState } from 'react'
import { useUpdateOne } from 'data_providers'
import { AsynProviderNames } from '../../types/providers'
import { ProposalAction } from '../../types/proposal'
import { useMutation } from '@tanstack/react-query'

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

  const { mutate, data } = useMutation({
    mutationFn: async (mutateData: { id: string; explanation: string }) => {
      return await updateHistory(mutateData)
    },
  })

  useEffect(() => {
    setJustification(data?.sustain || justification)
  }, [data])

  const handleSave = async (dataform: { explanation: string }) => {
    try {
      mutate({ ...dataform, id: id })
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
          setIsEditing={setIsEditing}
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
