import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native'
import BrokerScreen from './screens/broker'
import StocksScreen from './screens/stocks'

const App: React.FC = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Broker"
          component={BrokerScreen}
          options={{title: 'Main'}}
        />
        <Stack.Screen name="Stocks" component={StocksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App