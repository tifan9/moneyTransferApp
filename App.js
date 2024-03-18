import LoginIn from './src/screens/Login';
import Register from './src/screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewRecipient from './src/screens/NewRecipient';
import SenderScreen from './src/screens/SenderScreen';
import ThemeChangeModeIntoWhite from './src/components/ContextContainer';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    // <>

    
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={LoginIn} options={{headerShown:false}} />
          <Stack.Screen name="SenderScreen" component={SenderScreen} options={{headerShown:false}} />
          <Stack.Screen name="NewRecipient" component={NewRecipient} options={{headerShown:false}} />
          <Stack.Screen name="Register" component={Register}  options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
 
   
// </>
  )
}

