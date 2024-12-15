import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native'
import { ScreenStackParamList } from '@types'

type Props = NativeStackScreenProps<ScreenStackParamList, 'Stocks'>

const StocksScreen: React.FC<Props> = ({ navigation }) => {
  const addStockPress = (event : GestureResponderEvent) => {
    
  }

  return (
    <View style={styles.container}>
      <Text>Stocks Here from -broker-</Text>
      <Button onPress={addStockPress} title='Add Stock'/>
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

export default StocksScreen
