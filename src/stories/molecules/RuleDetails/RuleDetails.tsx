import { useEffect, useRef } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import { RuleDTO } from '../../../types/rule'

interface RuleDetailsProps {
  rule: RuleDTO
}

const RuleDetails: React.FC<RuleDetailsProps> = ({ rule }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const iframeDocument = iframeRef.current?.contentDocument
    if (iframeDocument) {
      iframeDocument.open()
      iframeDocument.write(
        `
        <html>
          <head>
            <meta charset="UTF-8" />
          </head>
          <body>
            ${rule.description}
          </body>
        </html>
        `,
      )
      iframeDocument.close()
    }
  }, [rule.description])

  return (
    <Box display='flex' flexDirection='column' gap={3}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display='flex' gap={1}>
          <Chip label={rule.type} variant='outlined' title='tipo de regla' />
          <Chip
            label={rule.severity}
            variant='outlined'
            title='Severidad de la regla'
          />
        </Box>
        <Typography>
          Regla{' '}
          <Typography component='span' color='primary' fontWeight='bold'>
            {rule.is_active_sonarqube ? 'Activa' : 'Inactiva'}
          </Typography>{' '}
          desde:{' '}
          <Typography component='span' color='primary' fontWeight='bold'>
            {new Date(rule.date).toLocaleDateString()}
          </Typography>
        </Typography>
      </Box>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <Typography
          variant='subtitle2'
          sx={{
            background: 'purple',
            color: 'white',
            fontWeight: 'bold',
            padding: 1,
            borderRadius: 2,
          }}
        >
          {rule.rule}
        </Typography>
        <Typography color='primary' mt={1}>
          DESCRIPCIÓN DE LA REGLA
        </Typography>

        <iframe ref={iframeRef} title='Descripción de la regla' />
      </Box>
    </Box>
  )
}

export default RuleDetails
