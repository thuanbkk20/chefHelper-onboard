import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OnboardFlow } from 'react-native-onboard';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './Home';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(false);
  React.useEffect(()=>{
    const fetchData = async ()=>{
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      console.log(appData);
      if(appData === null){
        setIsAppFirstLaunched(false);
      }else{
        setIsAppFirstLaunched(true);
      }
    }
    fetchData();
  }, [])
  const Onboarding = () => {
    const navigation = useNavigation();
    return (<OnboardFlow
      pages={[
        {
          title: 'Unleash Your Inner Chef',
          subtitle: 'From ingredients to meal - your delicious journey begins here',
          imageUri: Image.resolveAssetSource(require('./app/assets/onboarding1.png')).uri,
        },
        {
          title: 'Scan & Savor',
          subtitle: 'Scan your ingredients and get your recipes effortlessly',
          imageUri: Image.resolveAssetSource(require('./app/assets/onboarding2.png')).uri,
        },
        {
          title: 'Snap, Save, Share',
          subtitle: 'Discover, bookmark and share delicious recipes with ChefHelper',
          imageUri: Image.resolveAssetSource(require('./app/assets/onboarding3.png')).uri
        }
      ]}
      type={'fullscreen'}
      onDone={() => {
        AsyncStorage.setItem('isAppFirstLaunched', 'true');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          })
        )
        }
      }
    />);
  }
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAppFirstLaunched && (<Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />)}
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
