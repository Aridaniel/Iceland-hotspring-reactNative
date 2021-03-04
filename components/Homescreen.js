import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Image, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

const RetroMap = 
[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]

export default function Homescreen() {
/* const [location , setLocation] = useState(initialState)  
 */  
return (
    <View style={styles.container}>
      <Text style={styles.title}>Iceland Hot Springs</Text>
     <StatusBar style="auto" />
      <MapView
        initialRegion={{
          latitude: 65,
          longitude: -19,
          latitudeDelta: 1,
          longitudeDelta: 12,
        }}   
        
        customMapStyle={RetroMap}
        showUsersLocation={true}   
        showsCompass={true}
        rotateEnabled={false}
        style={{width:'100%' , flex:0.7}}
      >
        <Marker
          coordinate={{
          latitude:63.881487,
          longitude:-22.454883,
        }}
         icon={require('../images/pin.png')}
         title='Blue Lagoon'
         description='Most touristic hotspring in Iceland'
        >
          <Callout tooltip> 
            <View>
              <View style={styles.bubble} >
                  <Text style={styles.hotspringname}>Blue Lagoon</Text>
                  <Image style={styles.image} source={require('../images/bluelagoon1.jpeg')}/>
              </View>
              <View style={styles.arrowborder}/>
              <View  style={styles.arrow}/>
            </View>
          </Callout>
        </Marker>  


    </MapView>
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
    fontSize: 28,
    alignItems:'center',
    color:'white',
    
    

  },

  map: {
    justifyContent: 'center',
   
    
   }, 

   bubble:{
     flexDirection:'column',
     alignSelf:'flex-start',
     backgroundColor:'#fff',
     borderRadius:9,
     borderColor:'#ccc',
     borderWidth:0.5,
     padding:15,
     width:180,
   },
  
  arrow:{
    backgroundColor:'yellow',
    borderColor:'transparent',
    borderColor:'#fff', 
    alignSelf:'center',
    borderWidth:16,
    marginTop:-32,
  
  },
  arrowBorder:{
    backgroundColor:'green',
    borderColor:'transparent',
    borderColor:'#007a87',
    borderWidth:16,
    alignSelf:'center',
    marginTop:-0.5,
    marginBottom:-15


     
  
  },
  hotspringname:{
    fontSize:16,
    marginBottom:5,
  },
  image:{
    width:150,
    height:100,
  }



});