import { Box, Chip, Typography } from '@mui/material'

interface RuleDetailsProps {
  severity: string
  status: string
  description: string
  htmlContent: string
}

const RuleDetails = ({}: RuleDetailsProps) => (
  <Box display={'flex'} flexDirection={'column'} gap={2}>
    <Box
      border='1px solid blue'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box display='flex' gap={1}>
        <Chip label='BUG' variant='outlined' />
        <Chip label='MAJOR' variant='outlined' />
      </Box>
      <Box>Regla activo/inactivo desde: {new Date().toLocaleDateString()}</Box>
    </Box>

    <Box
      border='1px solid red'
      display={'flex'}
      flexDirection={'column'}
      gap={2}
    >
      <Typography
        variant='subtitle2'
        sx={{
          background: 'purple',
          color: 'white',
          fontWeight: 'bold',
          padding: 1,
          borderRadius: 0.5,
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum alias
      </Typography>
      <Typography color={'primary'}>DESCRIPCIÓN DE LA REGLA</Typography>
      <Box>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nisi
        blanditiis, facilis laborum iure totam minus unde fuga cupiditate
        repellendus porro voluptatibus molestiae, provident eos et voluptatum
        molestias id a eius odit quis! Minus illo possimus iure voluptatem odio
        sunt eligendi qui saepe et delectus, ducimus quia aliquid cumque maxime
        rem sit! Amet debitis, earum a assumenda quam quae. Quis dicta illo
        ullam eveniet voluptatibus, veritatis fugiat sit, accusamus eos numquam
        corporis cupiditate odio iusto possimus nihil voluptas praesentium
        quidem! Aliquam et iure ex autem soluta aperiam suscipit reprehenderit
        laborum exercitationem excepturi reiciendis deserunt voluptate modi qui,
        tempore libero ut, ad dolorum. Explicabo quos ullam culpa voluptates
        incidunt nobis hic, corporis, eum ratione ipsam dignissimos esse omnis.
        Doloremque corrupti accusamus provident ratione, iure et pariatur fuga
        at voluptas? Vel, labore maiores nobis reprehenderit quae sint modi
        veritatis dignissimos iste quia hic quidem vitae repellendus minima
        fugiat! Vel aliquid qui rerum quo similique, in, maxime cumque quaerat
        quas doloremque perferendis a, praesentium vitae illo voluptatum
        consequatur ab ut accusantium esse possimus optio! Eligendi porro
        architecto fugiat, et nam cum maiores assumenda voluptatum obcaecati
        ipsa vitae provident! Quidem officiis sit aut nemo quos culpa, debitis
        veniam assumenda porro numquam amet consequatur alias!
      </Box>
    </Box>
  </Box>
)

export default RuleDetails
