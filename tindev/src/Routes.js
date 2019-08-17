import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
  createStackNavigator({ //Cria uma navegação entre duas telas sem qualquer tipo de feedback visual
    Login,
    Main,
  })
);

//createStackNavigator faz a navegação com feedback visual e efeitos bem legais
//createBottomTabNavigator navegação com botoes na parte inferior
//createDrawerNavigator cria uma navegação arrastando para os lados