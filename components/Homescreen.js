import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';


export default function Homescreen() {
/* const [location , setLocation] = useState(initialState)  
 */  
return (
    <View style={styles.container}>
      <Text style={styles.title}>Iceland Hot Springs</Text>
     <StatusBar style="auto" />
      <MapView style={styles.iceMap}
        initialRegion={{
          latitude: 65,
          longitude: -19,
          latitudeDelta: 1,
          longitudeDelta: 12,
        }}   
        showUsersLocation={true}   
        showsCompass={true}
        rotateEnabled={false}
        style={{width:'100%' , flex:0.7}}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1687a7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    position:'absolute',
    top:70,
    fontFamily: "ProximaNova",
    fontSize: 28,
    alignItems:'center',
    color:'#323633'
    

  },

  iceMap: {
    justifyContent: 'center',
   
    
   }

});