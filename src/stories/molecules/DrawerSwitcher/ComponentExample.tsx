import buildTabSwitcher from '../../../components/Drawer/buildTabSwitcher'

const tabsOptions = {
  detail: {
    label: 'Detalles de la regla',
    bodyElement: <div> Soy el cuerpo de los detalles de la regla</div>,
  },
  curation: {
    label: 'Curacion de reglas',
    bodyElement: <div>Soy el cuerpo de la curacion</div>,
  },
}

const ExampleComponent = buildTabSwitcher(tabsOptions)

export default ExampleComponent
