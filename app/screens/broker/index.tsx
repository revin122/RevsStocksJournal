import * as React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FlatList, GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native'
import { BrokerParam, ScreenStackParamList } from '@types'
import { styles } from './styles'
import AddBrokerModal from './AddBrokerModal'

type Props = NativeStackScreenProps<ScreenStackParamList, 'Broker'>

const BrokerScreen: React.FC<Props> = ({ navigation }) => {
  const [brokerData, setBrokerData] = React.useState<BrokerParam[]>([{name: 'WeBull', id: 0}, {name:  'Robinhood', id: 1}])
  const [isOpenAddBrokerModal, setIsOpenAddBrokerModal] = React.useState<boolean>(false)

  const openAddBrokerModal = () => {
    setIsOpenAddBrokerModal(true)
  }

  const closeAddBrokerModal = () => {
    setIsOpenAddBrokerModal(false)
  }

  const itemButtonPress = (event : GestureResponderEvent) => {
    navigation.navigate('Stocks')
  }

  const addBrokerButtonPress = (event : GestureResponderEvent) => {
    openAddBrokerModal()
  }

  const resetBrokerButtonPress = (event: GestureResponderEvent) => {
    navigation.navigate('Stocks')
  }

  const addBroker = (newItem: BrokerParam) => {
    setBrokerData([...brokerData, newItem])
  }

  const renderItem = React.useCallback(
    (({ item }: { item: BrokerParam })  => 
      <TouchableOpacity onPress={itemButtonPress} onLongPress={itemButtonPress}>
        <Text style={styles.flatListItem}>{item.name}</Text>
      </TouchableOpacity>
    ),
    [],
  )

  return (
    <View style={styles.container}>
      <AddBrokerModal 
        openModal={isOpenAddBrokerModal}
        closeModal={closeAddBrokerModal}
        addItem={addBroker}
      />

      <Text style={styles.title}>Broker List</Text>
      
      <FlatList
        data={brokerData}
        keyExtractor={(item, index) => item.id + index.toString()}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderItem}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.resetBtn} onPress={resetBrokerButtonPress}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtn} onPress={addBrokerButtonPress}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  )
}

export default BrokerScreen
