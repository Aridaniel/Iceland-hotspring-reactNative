import React, {useState} from 'react'
import { StyleSheet, Text, View , Dimensions} from 'react-native'
import Tab from './Tab'

const {width} = Dimensions.get('screen')

const TabBar = ({ state, navigation }) => {
const[selected,setSelected] = useState('Home')

    
    const {routes} = state;

    const renderColor = (currentTab) => currentTab === selected ? 'red' :'black'

    const handlePress = (activeTab,index) => {
        //Goes to new tab otherwise does nothing if you push the same tab
        if(state.index !==index) {
        setSelected(activeTab)
        navigation.navigate(activeTab)
        }
    }


console.log(state.routes)
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map((route, index) => (
                    <Tab 
                        tab={route}
                        icon={route.params.icon}
                        onPress={()=> handlePress(route.name, index)}
                        color={renderColor(route.name)}
                        key={route.key} 
                        />)

                    )}
            </View>
        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        bottom:25,
        width,
        height:70,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flexDirection: 'row',
        backgroundColor:'white',
        width:320,
        borderRadius:30,
        elevation:2,

        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    }
})
