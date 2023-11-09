import React from 'react';
import { View,Text } from 'react-native';
const MainScreen= ()=>{
    return (
        <View
          style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            paddingTop:180,
          }}>
          <Text style={{fontSize:20,color:'#e47b06'}}>Welcome to home page!</Text>
        </View>
      );
    
}
export default MainScreen;