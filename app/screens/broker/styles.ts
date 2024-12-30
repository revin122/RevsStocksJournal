import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    flatListContainer: {
        flexGrow: 1,
    },
    flatListItem: {
        fontSize: 18,
        padding: 14,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    resetBtn: {
        padding: 10,
    },
    addBtn: {
        padding: 10
    },
    btnText: {
        color: 'blue',
        textAlign: 'center'
    }
})