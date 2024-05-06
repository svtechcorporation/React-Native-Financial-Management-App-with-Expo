import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { TransactionRow } from '../components/cards'
import { color, dummyData, font, size } from '../constants/constant'

const Transactions = ({navigation}) => {
  return (
    <View style={{
        padding: size.xxl,
        marginVertical: size.large,
        height: "100%"
    }}>
      <Text style={{
          fontSize: size.xxl,
          fontWeight: font.bolder,
          color: color.gray,
          height: "10%",
          paddingVertical: size.large,
      }}>Transactions</Text>
      <View style={{
          height: "90%",
      }}>
          <FlatList 
                data={dummyData}
                renderItem={({item})=> <TransactionRow data={item} navigation={navigation} />}
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={()=>
                    <View style={{
                        padding: 50,
                    }}>
                        <Text style={{textAlign:'center'}}>Most Recent Transactions will display here</Text>
                    </View>
                }
            />
      </View>
    </View>
  )
}

export default Transactions