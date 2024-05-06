import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { color, font, size } from '../constants/constant'





const Welcome = ({navigation}) => {
  return (
    <View style={{
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <Text style={{
          fontSize: size.xxl*2,
          fontWeight: font.bolder,
          marginVertical: size.base,
      }}>Welcome</Text>
      <TouchableOpacity
          style={{
              backgroundColor: color.blue,
              paddingVertical: size.small,
              paddingHorizontal: size.xxl,
              borderRadius: size.small,
          }}
          onPress={()=>navigation.navigate("Main")}
      >
          <Text style={{
              color: color.white,
              fontSize: size.base,
          }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome