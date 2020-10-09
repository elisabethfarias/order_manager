import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  DrawerItem,
  createDrawerNavigator, 
  DrawerContentScrollView 
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Feather';

import Loading from '../components/Loader';

import About from '../pages/About';
import Account from '../pages/Account';
import Home from '../pages/Home';
import MyOrders from '../pages/MyOrders';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Pages = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      setLoading(false);
    }, 5000)
  }, []);

  return (
    <Loading loading={loading}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerRight: () => (
            <TouchableOpacity 
              onPress={() => navigation.openDrawer()} 
            >
              <Icon name="menu" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}} />
            </TouchableOpacity>
          )
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="About" component={About} />
        
      </Stack.Navigator>
    </Loading>
  )
  
}


const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="MyOrders"
        onPress={() => props.navigation.navigate('MyOrders')}
      />
      <DrawerItem
        label="Account"
        onPress={() => props.navigation.navigate('Account')}
      />
      <DrawerItem
        label="About"
        onPress={() => props.navigation.navigate('About')}
      />
    </DrawerContentScrollView>
  );
};

const Routes: React.FC = () => (
  <Drawer.Navigator 
    drawerContentOptions={{
      activeTintColor: '#781ba6',
      itemStyle: { marginVertical: 5 },
      labelStyle: {
        fontSize: 16
      }
    }}
    initialRouteName="Home"
    drawerContent={props => <DrawerContent {...props} />}
  > 
    <Drawer.Screen name="Pages" component={Pages} />
  </Drawer.Navigator>
);

export default Routes;