import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormGroup,
  FormControlLabel,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { HistoryDTO } from '../../types/history'

interface AccordionComponentProps {
  data?: HistoryDTO[]
  selectedUsers: Set<string>
  handleCheckboxChange: (user: string) => void
  ruleId: string
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  data,
  selectedUsers,
  handleCheckboxChange,
  ruleId,
}) => {
  const [open, setOpen] = useState(false)
  const [filteredAuthors, setFilteredAuthors] = useState<string[]>([])

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  useEffect(() => {
    const uniqueAuthors = data
      ? [
          ...new Set(
            data
              .filter((item) => item.ruleId === ruleId)
              .map((item) => item.user),
          ),
        ]
      : []

    setFilteredAuthors(uniqueAuthors)
  }, [data, ruleId])

  return (
    <Accordion expanded={open} onChange={handleClick}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <ListItemButton>
          <ListItemText primary='Autores' />
        </ListItemButton>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {filteredAuthors.map((author) => (
            <FormControlLabel
              key={author}
              control={
                <Checkbox
                  checked={selectedUsers.has(author)}
                  onChange={() => handleCheckboxChange(author)}
                />
              }
              label={author}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionComponent
