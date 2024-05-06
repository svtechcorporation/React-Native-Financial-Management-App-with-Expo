

import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { ProfileCard, BalanceCard } from '../components'
import { AllBalance, TransactionRow } from '../components/cards'
import { color, dummyData, font, size } from '../constants/constant'





const Home = ({navigation}) => {
    return (
            <View style={{
                flex: 1,
                paddingTop: size.xxl,
                paddingHorizontal: size.xxl,
            }}>
                <View style={{
                    height:"60%",
                    width: "100%"
                }}>
                    <ProfileCard />
                    <BalanceCard navigation={navigation} />
                    <AllBalance />
                </View>
                <View style={{
                    height:"40%"
                }}>
                    <Text style={{
                        fontSize: size.large,
                        fontWeight: font.bold,
                        color: color.gray,
                        marginVertical: size.base,
                    }}>Recent Transactions</Text>
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

export default Home