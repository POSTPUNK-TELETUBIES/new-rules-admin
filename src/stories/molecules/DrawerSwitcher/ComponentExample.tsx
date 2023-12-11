import buildTabSwitcher from '../../examples/drawer/buildTabSwitcher'

const tabsOptions = {
  detail: {
    label: 'Detalles de la regla',
    bodyElement: <div> Soy el cuerpo de los detalles de la regla</div>,
  },
  curation: {
    label: 'Historial de propuestas',
    bodyElement: <div>Soy el cuerpo del Historial de propuestas</div>,
  },
}

const ExampleComponent = buildTabSwitcher(tabsOptions)

export default ExampleComponent
