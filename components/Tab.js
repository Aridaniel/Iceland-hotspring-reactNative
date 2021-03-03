import React   from 'react'
import { StyleSheet, TouchableOpacity,Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = ({color, tab, onPress, icon}) => {
    console.log(tab.name)


    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon &&  <AntDesign name={icon} size={20} color={color} />}
            <Text style={{color:color}}>{tab.name}</Text>
        </TouchableOpacity>
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

export default Tab

