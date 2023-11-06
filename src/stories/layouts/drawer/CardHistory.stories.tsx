import CardHistory from '../../../components/Drawer/CardHistory';

export default {
  title: 'CardHistory',
  component: CardHistory,
};

export const Example1  = () => (
  <CardHistory
    user="Pedro Lopez"
    action="Desactivar regla"
    sustento="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod"
    time="12:25 PM 12/Dic/2022"
  />
  
);

export const Example2  = () => (
  <CardHistory
    user="Luis Lopez"
    action="Activar regla"
    sustento="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod"
    time="12:25 PM 02/May/2023"
  />
  
);