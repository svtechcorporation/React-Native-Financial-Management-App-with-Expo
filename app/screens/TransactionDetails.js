import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { color, CONST, font, shadow, size } from '../constants/constant'
import { BackButton } from '../components/cards'
import { NairaSign } from '../components'
import { addCommasToNumber } from '../components/reuseable'



export default TransactionDetails = ({navigation, route}) => {
    const returnHome = () => {
        navigation.goBack();
    }
    const {data} = route.params;


    return (
        <View style={{
            margin: size.xxl,
        }}>
            <BackButton onPress={returnHome} title={"Details"} />
            <View style={{
                width: "100%",
                alignItems: 'center',
                marginVertical: size.xxl,
            }}>
                <Text style={{
                    color: color.gray,
                }}>Transactions Amount</Text>
                <Text style={{
                    fontSize: size.xxl*2,
                    fontWeight: font.bolder,
                    color: data.type==1?color.green:color.red,
                }}>{data.type==1?"+":"-"}<NairaSign size={35} color={data.type==1?color.green:color.red}/>
                        {addCommasToNumber(data.price)}</Text>
            </View>
            <Row title={"Type of Transaction"} subtitle={data.type==1?CONST.revenue: CONST.expenses} />
            <Row title={"Date and Time of Transaction"} subtitle={"12:00pm - 25th May, 2023"} />
            <View style={{
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    backgroundColor: color.green,
                    paddingHorizontal: size.xxl*3,
                    paddingVertical: size.base,
                    ...shadow.dark,
                    borderRadius: size.small,
                    marginVertical: size.xxl,
                }}
                onPress={()=>navigation.navigate("AddTransactions", {data})}>
                    <Text style={{
                        color: color.white,
                    }}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Row = (props)=>{
    return(
        <View style={{
            marginVertical: size.small,
        }}>
            <Text style={{
                color: color.gray,
                fontSize: size.medium,
            }}>{props.title}</Text>
            <Text style={{
                backgroundColor: color.lightgray,
                padding: size.large,
                borderRadius: size.small,
                color: color.black,
                marginVertical: 5,
                fontWeight: font.bolder,
            }}>{props.subtitle}</Text>
        </View>
    )
}
