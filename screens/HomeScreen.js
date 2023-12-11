import { StyleSheet, Text, View,SafeAreaView,Alert } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location"
import { set } from "date-fns";
import { MaterialIcons } from '@expo/vector-icons';
const HomeScreen = () => {
    const [displayCurrentAddress, setdisplayCurrentAddress] = useState("we are loading your location");
    const [locationServicesEnabled,setlocationServicesEnabled] = useState(false);
    useEffect(() => {
        checkIfLocationEnabled();
        getCurrentLocation();
    },[]);
    const checkIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if(!enabled) {
            Alert.alert(
                'Location services not enabled',
                'Please enanble the location services',
                [
                  {
                    text: 'Cancel',
                    onPress: () => Alert.alert('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text:"OK",onPress: () => console.log("OK Pressed")}
                ],
                {cancelable: true,onDismiss: () =>  Alert.alert( 'This alert was dismissed by tapping outside of the alert dialog.', ),},
              );
            }else{
                setlocationServicesEnabled(enabled)
            }  
    }     
    const getCurrentLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();

        if(status !== "granted"){
            Alert.alert(
                'Permission denied',
                'allow the app to use the location services',
                [
                  {
                    text: 'Cancel',
                    onPress: () => Alert.alert('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text:"OK",onPress: () => console.log("OK Pressed")}
                ],
                {cancelable: true,onDismiss: () =>  Alert.alert( 'This alert was dismissed by tapping outside of the alert dialog.', ),},
              );
        };

        const {coords} = await Location.getCurrentPositionAsync();
        // console.log(coords)
        if(coords){
            const {latitude,longitude} = coords;
            
            let respone = await Location.reverseGeocodeAsync({
              latitude,
              longitude
            });

            // console.log(respone)

            for (let item of response) {
              let address = `${item.name} ${item.city} ${item.postalCode}`;
              setDisplayCurrentAddress(address)
            }
        }
    }     
    return (
        <SafeAreaView>
          <View>
          <MaterialIcons name="location-on" size={24} color="black" />
            <Text>(displayCurrentAddress)</Text>
          </View>
           
        </SafeAreaView>
    )

}
export default HomeScreen
const appStyles = StyleSheet.create({})