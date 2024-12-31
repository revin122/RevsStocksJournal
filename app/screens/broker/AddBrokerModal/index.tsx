import * as React from 'react'
import { Modal, View, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
import { BrokerParam } from '@types'


interface AddBrokerModalProps {
    openModal: boolean
    addItem: (item: BrokerParam) => void
    closeModal: () => void
  }

const AddBrokerModal: React.FC<AddBrokerModalProps> = ({ openModal, closeModal, addItem }) => {
    
    const verifyAdd = () => {
        addItem({id: 3, name: 'Added'})
    }

    return (
      <Modal animationType='slide' visible={openModal} onRequestClose={closeModal}>
        <View style={styles.container}>
            <Text style={styles.title}>Add Broker</Text>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.resetBtn} onPress={closeModal}>
                    <Text style={styles.btnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addBtn} onPress={verifyAdd}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>
    )
  }
  
  export default React.memo(AddBrokerModal)