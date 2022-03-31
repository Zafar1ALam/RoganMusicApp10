import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView,
    TouchableOpacity, Alert, SafeAreaView
} from 'react-native';
import { TouchableRipple, Text, ActivityIndicator } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Button1 from '../comp/Button1';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Appbar } from 'react-native-paper';

import TextInput2 from '../comp/TextInput2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BaseUrl from '../route/BaseUrl';
const ForgetPassword = ({ navigation }) => {



    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);


    const [stateData, setStataData] = useState({
        email: '',


    }
    )
    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            console.log('true')
            return true;

        }
        else {
            console.log('false')
            return false;
        }
    }


    const login = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }



        if (stateData.emailAddress != ''

            && handleValidEmail(stateData.email)) {

            console.log(`${BaseUrl}+'user/forgetPassword.php'
            email: ${stateData.email}            
   
          ', `)
            setStateActivityIndicator(true)
            fetch(BaseUrl + 'user/forgetPassword.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: stateData.email,


                })
            })
                .then((response) => response.json())
                .then((json) => {
                    //setStateShowAlert(false)
                    console.log(json)
                    setStateActivityIndicator(false)
                    if (json[0].length != 0) {
                        console.log(json)
                        navigation.navigate("Verification",
                            {
                                routeEmail: stateData.email,
                                routeOtp: json[0].code
                            })

                    }

                    else {
                        Alert.alert('plz insert valid data')
                    }
                })
                .catch((error) => {

                    console.error(error);
                });


        }


    }

    return (
        <ScrollView>
            <SafeAreaView style={STYLES.withoutpaddingcontainer}>

                <Appbar.Header style={{
                    backgroundColor: COLORS.black000000,
                    // backgroundColor: 'red'
                    alignItems: 'center'
                }}>
                    <Appbar.BackAction
                        onPress={() =>
                            navigation.goBack()} />
                    <Appbar.Content title="Forget Password"
                        titleStyle={{
                            alignSelf: 'center',
                            // marginRight: '10%'
                            marginLeft: '-15%',


                        }}
                        style={{


                        }} />


                </Appbar.Header>

                <View style={{
                    flex: 1,
                    // backgroundColor: 'red',
                    marginHorizontal: "5%"
                }}>

                    <View style={{ flex: 0.7 }}>
                        <View style={{ marginTop: '15%' }}>
                            <TextInput2
                                text
                                text1="Email"
                                placeholder="Email"
                                name="email"
                                onChangeText={(text) => {
                                    setStateIsValidEmail(true)
                                    setStataData({
                                        ...stateData, email: text
                                    })
                                }} />
                            {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}
                        </View>




                    </View>
                    <View style={{ flex: 0.23 }}>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            {stateActivitityIndicator ?
                                <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> :
                                <Button1 text="SEND CODE"
                                    onPress={() => { login() }} />
                            }
                        </View>

                    </View>
                </View>


            </SafeAreaView>
            {/* Bottom sheet Genere        */}



        </ScrollView>
    );
};

export default ForgetPassword;