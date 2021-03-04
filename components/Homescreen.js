import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Image, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

//Setting the different style of map in , its not working at the momemt but I will fix it when i find the bug
const RetroMap = [
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
 
return (
    <View style={styles.container}>
      <Text style={styles.title}>Iceland Hot Springs</Text>
     <StatusBar style="auto" />
     {/* Googlemaps library */}
      <MapView
        initialRegion={{
          latitude: 65,
          longitude: -19,
          latitudeDelta: 1,
          longitudeDelta: 12,
        }}   
        
        showsUserLocation={true}   
        showsCompass={true}
        rotateEnabled={false}
        style={{width:'100%' , flex:0.7}}
        customMapStyle={RetroMap}
        
      >
         {/* All the pins for the Hotsprings */}
        <Marker
          // Coordinates of the pin this case bluelagoon
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
        <Marker
          //Coordinate of the pin
          coordinate={{
          latitude:65.625,
          longitude:-16.842,
          
        }}
         icon={require('../images/pin.png')}
         title='Myvatn nature baths'
         description='Most popular baths in the north'
        >
          <Callout tooltip> 
            <View>
              <View style={styles.bubble} >
                  <Text style={styles.hotspringname}>Mývatn nature baths</Text>
                  <Image style={styles.image} source={require('../images/myvatn.jpeg')}/>
              </View>
              <View style={styles.arrowborder}/>
              <View  style={styles.arrow}/>
            </View>
          </Callout>
        </Marker>  
        <Marker
          coordinate={{
          latitude:65.30348,
          longitude:-14.44451,
          
        }}
         icon={require('../images/pin.png')}
         title='Vök Baths'
         description='Finest baths in the east'
        >
          <Callout tooltip> 
            <View>
              <View style={styles.bubble} >
                  <Text style={styles.hotspringname}>Vök Baths</Text>
                  <Image style={styles.image} source={require('../images/vokbaths.jpeg')}/>
              </View>
              <View style={styles.arrowborder}/>
              <View style={styles.arrow}/>
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
     borderColor:'grey',
     borderWidth:0.5,
     padding:15,
     width:230,
   },
  
  
  arrowborder:{
    backgroundColor:'transparent',
    borderColor:'red',
    borderWidth:10,
   
    alignSelf:'center',
    
  
  },
  arrow:{
    backgroundColor:'yellow',
    borderColor:'yellow',
    borderColor:'#fff', 
    alignSelf:'center',
    borderTopWidth:4,
    borderWidth:20,
    
  
  },
  hotspringname:{
    fontSize:16,
    marginBottom:5,
  },
  image:{
    width:200,
    height:160,
  }



});