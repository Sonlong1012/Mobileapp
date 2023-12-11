import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Home' React component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default AppNavigation;
