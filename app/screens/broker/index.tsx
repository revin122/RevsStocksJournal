import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import { ScreenStackParamList } from '@types'

type Props = NativeStackScreenProps<ScreenStackParamList, 'Broker'>

const BrokerScreen: React.FC<Props> = ({ navigation }) => {
  const selectBrokerButtonPress = (event : GestureResponderEvent) => {
    navigation.navigate('Stocks')
  }

  const addBrokerButtonPress = (event : GestureResponderEvent) => {
    navigation.navigate('Stocks')
  }

  return (
    <View style={styles.container}>
      <Text>Select Stock Broker</Text>
      <Button onPress={selectBrokerButtonPress} title='I am broker 1'/>
      <Button onPress={addBrokerButtonPress} title='Add Broker'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default BrokerScreen
