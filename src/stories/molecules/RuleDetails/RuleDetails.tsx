import { useEffect, useRef } from 'react'
import { Box, Chip, Typography } from '@mui/material'

interface RuleDetailsProps {
  type: string
  severity: string
  isActive: boolean
  subtitle: string
  htmlCode: string
}

const RuleDetails: React.FC<RuleDetailsProps> = ({
  type,
  severity,
  isActive,
  subtitle,
  htmlCode,
}) => {
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
            ${htmlCode}
          </body>
        </html>
        `,
      )
      iframeDocument.close()
    }
  }, [htmlCode])

  return (
    <Box display='flex' flexDirection='column' gap={2}>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box display='flex' gap={1}>
          <Chip
            label={severity}
            variant='outlined'
            title='Severidad de la regla'
          />
          <Chip label={type} variant='outlined' title='tipo de regla' />
        </Box>
        <Typography>
          Regla{' '}
          <Typography component='span' color='primary' fontWeight='bold'>
            {isActive ? 'Activa' : 'Inactiva'}
          </Typography>{' '}
          desde:{' '}
          <Typography component='span' color='primary' fontWeight='bold'>
            {new Date().toLocaleDateString()}
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
          {subtitle}
        </Typography>
        <Typography color='primary'>DESCRIPCIÓN DE LA REGLA</Typography>

        <iframe ref={iframeRef} />
      </Box>
    </Box>
  )
}

export default RuleDetails
