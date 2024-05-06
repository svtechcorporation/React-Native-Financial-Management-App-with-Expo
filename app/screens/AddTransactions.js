import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React,  {useState} from 'react'
import { color, CONST, font, shadow, size } from '../constants/constant'
import { BackButton, MySelectList, Selectlist } from '../components/cards'
import { NairaSign } from '../components'
import { useEffect } from 'react'



const AddTransactions = ({navigation, route}) => {
    const data = route.params;
    
    const [amount, setAmount] = useState("");
    const [type, setType] = useState(50);
    const [errmsg, setErrmsg] = useState("");

    const returnHome = () => {
        navigation.navigate("Main");
    }
    
    const reuse=({val})=>{   
    }

    const onSelectOption = (val)=>{
        setType(val==CONST.revenue?1:0);
        setErrmsg("");
    }

 
    
    const saveData =()=>{
        setErrmsg("");
        if(amount==0){
            setErrmsg("Please input amount");
        } else if(type==50){
            setErrmsg("Please select transaction type");
        }

        console.log(amount);
        console.log(type);
    }
    
    return (
        <View style={{
            margin: size.xxl,
            height: "100%",
        }}>
            <BackButton onPress={returnHome} title={"Add Transactions"} />
            <View style={{
            }}>
                <Text style={{
                    textAlign: 'center',
                    padding: size.xxl,
                    fontWeight: font.bolder,
                    fontSize: size.large,
                }}>{data!=null?"Edit":""} Amount</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent: 'center',
                    padding: size.base,
                    paddingVertical: size.xxl,
                    backgroundColor: color.lightgray,
                    borderRadius: size.small,
                    ...shadow.dark,
                }}>
                    <Text style={{
                        fontSize: size.xxl,
                        fontWeight: font.bold,
                        color: type==1?color.green:type==0?color.red:color.black,
                    }}>{type===1?"+":type===0?"-":""}</Text>
                    <NairaSign size={30} color={type==1?color.green:type==0?color.red:color.black}/>
                    <TextInput 
                        placeholder='0.00'
                        style={{
                            fontSize: size.xxl*2,
                            color: type==1?color.green:type==0?color.red:color.black,
                        }}
                        onChangeText={(val)=>{
                            setAmount(val);
                            setErrmsg("");
                        }}
                        placeholderTextColor={color.gray}
                        keyboardType='numeric'
                        defaultValue={String(amount)}
                    />
                </View>
                <View style={{
                    marginTop: size.xxl,
                }}>
                    <Text style={{
                        marginVertical: size.small,
                        textAlign:'center',
                    }}>Select transaction type</Text>
                    <MySelectList onSelectOption={onSelectOption} defaultOption={1} />
                </View>
                <View style={{
                    justifyContent: 'center',
                    width: "100%",
                    alignItems: 'center',
                }}>
                    {
                        errmsg==""?"":
                        <Text style={{
                            backgroundColor: color.red,
                            marginTop: size.large,
                            width: "100%",
                            textAlign: 'center',
                            color: color.white,
                            padding: 5,
                            borderRadius: size.small,
                        }}>{errmsg}</Text>
                    }
                    <TouchableOpacity
                        style={{
                            backgroundColor: color.green,
                            paddingHorizontal: size.xxl*3,
                            paddingVertical: size.base,
                            marginTop: size.large*2,
                            borderRadius: size.base,
                        }}
                        onPress={saveData}
                    >
                        <Text style={{
                            color: color.white,
                            fontSize: size.large,
                            fontWeight: font.bold,
                        }}>{data!=null?"Save":"Add"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AddTransactions