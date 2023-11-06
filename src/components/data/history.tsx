type History = {
    id: number
    user: string
    sustento: string
    time: string
    action: string
  }
  
  export const HISTORY: History[] = [
    {
      id: 1,
      user: 'Jose Ramirez',
      sustento:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod',
      time: '12:25 PM 12/Dic/2025',
      action: 'Activar regla',
    },
    {
      id: 2,
      user: 'Rosa Mendez',
      sustento:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod',
      time: '12:25 PM 12/Dic/2022',
      action: 'Desactivar regla',
    },
    {
      id: 3,
      user: 'Jose Ramirez',
      sustento:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod',
      time: '12:25 PM 12/Dic/2023',
      action: 'Activar regla',
    }
  ]