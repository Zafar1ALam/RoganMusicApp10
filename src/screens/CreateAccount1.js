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
import SplashScreen from 'react-native-splash-screen';
import BaseUrl from '../route/BaseUrl';
import TextInput2 from '../comp/TextInput2';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CreateAccount1 = ({ navigation }) => {
    SplashScreen.hide()




    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);
    const [stateIsValidPasswordConfirmPassword, setStateIsValidPasswordConfirmPassword] = useState(true)


    const [stateData, setStataData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
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

    const passwordCheck = () => {
        if (stateData.password === stateData.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }

    const signUp = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }
        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)

        }

        if (stateData.confirmPassword == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidConfirmPassword(false)
        }

        if (!passwordCheck()) {
            //Alert.alert("Password and Confirm Password are not same")
            setStateIsValidPasswordConfirmPassword(false)
        }
        if (passwordCheck()) {
            //Alert.alert("Password and Confirm Password are not same")
            setStateIsValidPasswordConfirmPassword(true)
        }
        if (stateData.emailAddress != '' && stateData.password != ''

            && stateData.confirmPassword != '' && passwordCheck()
            && handleValidEmail(stateData.email)) {
            console.log(BaseUrl + `user/register.php
          email: ${stateData.email},
          password: ${stateData.password},
          
          confirmPassword:${stateData.confirmPassword}', `)
            setStateActivityIndicator(true)
            fetch(BaseUrl + 'user/register.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: stateData.email,
                    password: stateData.password,
                    // genre: stateSelectGenereId,
                    confirmpassword: stateData.confirmPassword

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    setStateActivityIndicator(false)
                    if (json[0].message == "Signup Successful") {
                        console.log(json)
                        multiSet(stateData.email, json[0].id, stateData.password)

                        navigation.navigate("Login1")



                    }

                    else {
                        Alert.alert('Email Already Exist')
                    }
                })
                .catch((error) => {

                    console.error(error);
                });


        }


    }

    const multiSet = async (email, id, password) => {


        const firstPair = ["asyncEmail", email]
        const secondPair = ["asyncUserId", id]
        const thirdPair = ["asyncPassword", password]

        try {
            await AsyncStorage.multiSet([firstPair, secondPair, thirdPair])
        } catch (e) {
            Alert.alert(e)
        }


    }


    return (
        <ScrollView>
            <SafeAreaView style={STYLES.withoutpaddingcontainer}>

                <Appbar.Header style={{
                    backgroundColor: COLORS.black000000,

                    //alignItems: 'center'
                }}>

                    <Appbar.Content title="Create Account"
                        titleStyle={{
                            alignSelf: 'center',
                            marginLeft: '-5%'

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

                        <View style={{ marginTop: '5%' }}>
                            <TextInput2
                                text
                                text1="Password"
                                placeholder="********"
                                name="lock"
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    setStateIsValidPassword(true)
                                    setStataData({
                                        ...stateData, password: text
                                    })
                                }} />
                            {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <TextInput2
                                text
                                text1="Confirm Password"
                                placeholder="********"
                                name="lock"
                                secureTextEntry={true}
                                onChangeText={(text) => {
                                    setStateIsValidConfirmPassword(true)
                                    setStataData({
                                        ...stateData, confirmPassword: text
                                    })
                                }} />
                            {stateIsValidConfirmPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Confirm Password</Text> : null}
                            {stateIsValidPasswordConfirmPassword == false ? <Text style={{ color: 'red' }}>Password and  Confirm Password
                                are not same</Text> : null}
                        </View>


                    </View>
                    <View style={{ flex: 0.23 }}>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            {stateActivitityIndicator ?
                                <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> :
                                <Button1 text="SIGNUP"
                                    onPress={() => { signUp() }} />}

                        </View>
                        <Text style={[STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                        { marginTop: '7%', alignSelf: 'center' }]}>OR</Text>
                        <View style={{
                            flexDirection: 'row', marginTop: '7%',
                            alignSelf: 'center'
                        }}>
                            <Text style={[STYLES.fontSize16_green0DC1A7_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                            { marginRight: '5%' }]}>Already hava an account?</Text>
                            <TouchableRipple onPress={() => {
                                navigation.navigate("Login1")
                                //navigation.navigate("abc")
                            }}>
                                <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Log In</Text>
                            </TouchableRipple>
                        </View>
                    </View>
                </View>


            </SafeAreaView>


        </ScrollView>
    );
};

export default CreateAccount1;