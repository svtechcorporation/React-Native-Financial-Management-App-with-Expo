


import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import {UserIcon } from "../assets"
import { color, CONST, font, shadow, size } from '../constants/constant'
import { HomeContext } from '../context/HomeContext'
import { addCommasToNumber, NairaSign } from './reuseable'
import { MaterialCommunityIcons, AntDesign , Entypo } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';



export const ProfileCard = () => {
    const {user} = useContext(HomeContext);
    return (
        <View style={{
            marginVertical: size.base,
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <View>
                <Text style={{
                    fontSize: size.xxl,
                    fontWeight: font.bolder,
                }}>Hi, {user.name} </Text>
                <Text style={{
                    fontSize: size.medium
                }}>Welcome</Text>
            </View>
            <Image 
                source={UserIcon}
                style={{
                    width: 60,
                    height: 60
                }}
                contentFit="cover"
            />
        </View>
    )
}

export const BalanceCard = ({navigation}) => {
    const press = () =>{
        navigation.navigate("AddTransactions");
    }
    return (
        <View style={{
            backgroundColor: color.lightgray,
            borderRadius: size.small,
            paddingVertical: size.xl,
            paddingHorizontal: size.base,
            ...shadow.dark,
        }}>
            <Text style={{
                color: color.gray,
                fontWeight: font.bold,
            }}>Balance</Text>
            <Text style={{
                fontWeight: font.bolder,
                fontSize: size.xxl*2,
            }}>{<NairaSign size={30} />}45,000</Text>
            <View style={{
                alignItems: 'flex-end',
                width: "100%"
            }}>
                <TouchableOpacity 
                    style={{
                        backgroundColor: color.white,
                        ...shadow.dark,
                        padding: size.base,
                        borderRadius: size.base,
                    }}
                    onPress={press}
                >
                    <Text style={{
                        fontWeight: font.bold,
                    }}>+Add Transactions</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const TransactionRow = ({data, navigation}) => {
    const onPress=()=>{
        navigation.navigate("TransactionDetails",{data});
    }
    return(
        <TouchableOpacity 
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 5,
            }}
            onPress={onPress}
        >
            <View style={{
               flexDirection: 'row',
               alignItems: 'center',
            }}>
                <View style={{
                    backgroundColor: color.lightgray,
                    borderRadius: 50,
                    padding: 10,
                }}>
                    { data.type==1?
                            <MaterialCommunityIcons name="bank-plus" size={24} color={color.green} />:
                            <MaterialCommunityIcons name="bank-remove" size={24} color={color.red} />    }
                </View>
                <View style={{
                    marginLeft: size.large,
                }}>
                    <Text style={{
                        color: color.gray,
                        fontWeight: font.bold,
                    }}>{data.type==0?"Expenses":"Revenue"}</Text>
                    <View>
                        <Text style={{
                            fontSize: size.small,
                            color: color.gray,
                        }}>
                            11:30am - 11th May, 2023
                        </Text>
                    </View>
                </View>
            </View>
            <Text style={{
                fontWeight: font.bold,
                fontSize: size.large,
            }}>{data.type==1?"+":"-"}<NairaSign size={13}/>{ addCommasToNumber(data.price)}</Text>
        </TouchableOpacity>
    )
}


const SeperateBalance = ({title, index, percentage}) => {
    const extract = percentage<50?50:percentage;
    const percent = extract+"%";
    return (
        <View style={{
            flexDirection: 'column',
            marginVertical: 5,
        }}>
            <View>
                <Text>{title}</Text>
            </View>
            <View style={{
                width: percent,
                backgroundColor: index==0?color.green:color.red,
                borderRadius: size.base,
                padding: size.base,
                paddingVertical: size.xxl,
                ...shadow.dark,
            }}>
                <Text style={{
                    color: color.white,
                    fontWeight: font.bold,
                }}><NairaSign size={10} color={color.white}/>15,000</Text>
            </View>
        </View>   
    )
}

export const AllBalance = () => {
  return (
    <View style={{
        marginTop: size.base,
        width: "100%"
    }}>
        <SeperateBalance title={"Revenue"} index={0} percentage={100}/>
        <SeperateBalance title={"Expenses"} index={1} percentage={10}/>
    </View>
  )
}



export const BackButton = ({onPress, title}) => {
    return (
        <View style={{
            paddingVertical: size.large,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <TouchableOpacity
                onPress={onPress}
            >
                <Entypo name="chevron-small-left" size={40} color={color.gray} />
            </TouchableOpacity>
            <Text style={{
                fontWeight: font.bold,
                fontSize: size.xl,
                color: color.gray,
            }}>{title}</Text>
            <View>
                <Entypo name="chevron-left" size={40} color="transparent" />
            </View>
        </View>
    )
}

const data = [
    {key:'2', value:CONST.expenses},
    {key:'1', value:CONST.revenue},
]


export const Selectlist = ({onSelect, defaultSelect}) => {
    console.log(defaultSelect);
    return(
        <View>
            <Text style={{
                marginVertical: size.large,
                textAlign: 'center',
            }}>Select Transactions Type</Text>
            <SelectList 
                setSelected={(val) =>onSelect(val)} 
                data={data} 
                save="value"
                defaultOption={data[defaultSelect]}
            />
        </View>
    )
}


export const MySelectList = ({onSelectOption, defaultOption})=>{

    const SelectRow =({data, onClick})=>{
        const pressFunc=()=>{
            onClick(data.value);
        }
        return(
            <TouchableOpacity style={{
                paddingVertical: size.small,
            }}
            onPress={pressFunc}>
                <Text>{data.value}</Text>
            </TouchableOpacity>
        )
    }

    const [showOption, setShowOption] = useState(false);
    const [selected, setSelected] = useState(defaultOption==1?CONST.revenue:defaultOption==0?CONST.expenses:"Select option");

    const mainPress = ()=>{
        setShowOption(!showOption);
    }

    const onSelect =(val)=>{
        setShowOption(!showOption);
        setSelected(val);
        onSelectOption(val);
    }

    return(
        <View>
            <TouchableOpacity
                onPress={()=>mainPress()}
                style={{
                    fontSize: size.small,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 50,
                    paddingHorizontal: size.base,
                    borderColor: color.gray,
                    borderWidth: 1,
                    borderRadius: size.small,
                }}
                >
                <Text style={{
                    fontSize: size.base,
                }}>{selected}</Text>
                {showOption?<AntDesign name="close" size={16} color="black" />:
                <Entypo name="chevron-small-down" size={24} color="black" />
                }
            </TouchableOpacity>
            {showOption?
            <FlatList 
                data={data}
                renderItem={({item})=><SelectRow data={item} onClick={onSelect} />}
                keyExtractor={item=>item.key}
                showsVerticalScrollIndicator={false}
                style={{
                    paddingVertical: size.small,
                    paddingHorizontal: size.base,
                    borderColor: color.gray,
                    borderWidth: 1,
                    borderRadius: size.small,
                    marginTop: size.base,
                }}
            />:""}
        </View>
    )
}