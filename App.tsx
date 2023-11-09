import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OnboardFlow } from 'react-native-onboard';
import { Image } from 'react-native';

export default function App() {
  return (
    <OnboardFlow
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
    />
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
