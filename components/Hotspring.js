import React   from 'react'
import { StyleSheet,Text, View } from 'react-native'

const Hotspring = () => {
   


    return (
        <View style={styles.container} >
            
            <Text >HotSpring list</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        padding:10
    }
})

export default Hotspring