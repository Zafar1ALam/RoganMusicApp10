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
const Login1 = ({ navigation }) => {



    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);

    const [stateData, setStataData] = useState({
        email: '',
        password: '',

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



    const multiSet3 = async (email, id, password) => {


        const firstPair = ["asyncEmail", email]
        const secondPair = ["asyncUserId", id]
        const thirdPair = ["asyncPassword", password]
        console.log(password)

        console.log(stateData.password)

        try {
            await AsyncStorage.multiSet([firstPair, secondPair, thirdPair])
        } catch (e) {
            Alert.alert(e)
        }


    }

    const multiSet4 = async (email, id, password, image, bio, userName) => {


        const firstPair = ["asyncEmail", email]
        const secondPair = ["asyncUserId", id]
        const thirdPair = ["asyncPassword", password]
        const forthPair = ["asyncImage", image]
        const fifthPair = ["asyncBio", bio]
        const sixthPair = ["asyncUserName", userName]
        console.log(password)

        console.log(stateData.password)

        try {
            await AsyncStorage.multiSet([firstPair, secondPair, thirdPair, forthPair,
                fifthPair, sixthPair])
        } catch (e) {
            Alert.alert(e)
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
        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)

        }

        if (stateData.confirmPassword == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidConfirmPassword(false)
        }


        if (stateData.emailAddress != '' && stateData.password != ''

            && handleValidEmail(stateData.email)) {

            console.log(BaseUrl + `user/login.php
            email: ${stateData.email},                  
            password: ${stateData.password},
          ', `)
            setStateActivityIndicator(true)
            fetch(BaseUrl + 'user/login.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: stateData.email,
                    password: stateData.password,

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    //setStateShowAlert(false)
                    console.log(json)

                    // navigation.navigate("Account"
                    //     ,
                    //     {
                    //         routeEmail: stateData.email
                    //     }
                    // )
                    // navigation.navigate("Account"
                    //     ,
                    //     {
                    //         routeEmail: stateData.email
                    //     }
                    // )

                    setStateActivityIndicator(false)
                    if (json[0].message == "User exsist" && json[0].bio == ""
                        && json[0].gender == "" && json[0].username == ""
                        && json[0].dateOfBirth == ""
                        && json[0].country == ""
                        && json[0].image == "") {

                        multiSet3(stateData.email, json[0].id, stateData.password)

                        navigation.navigate("Account"
                            ,
                            {
                                routeEmail: stateData.email,
                                routeLogin: "login"
                            }
                        )
                    }
                    else if (json[0].message == "User exsist" && json[0].bio != ""
                        && json[0].gender != "" && json[0].username != ""
                        && json[0].dateOfBirth != ""
                        && json[0].country != ""
                        && json[0].image != "") {
                        multiSet4(stateData.email, json[0].id, stateData.password,
                            json[0].image, json[0].bio, json[0].username)
                        // multiSet(stateData.email, json[0].id, stateData.password,
                        //     json[0].bio, json[0].image, json[0].username)
                        navigation.navigate("TabNavigation1"
                            , {
                                routeImage: json[0].image,
                                routeUserName: json[0].username,
                                routeBio: json[0].bio

                            }
                        )
                    }
                    else {
                        Alert.alert('Enter Invalid Record')
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
                    <Appbar.Content title="Login"
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
                        <TouchableRipple
                            style={{ marginTop: '15%', alignSelf: "flex-end" }}
                            onPress={() => {
                                navigation.navigate("ForgetPassword")
                            }}>
                            <Text>Forget Password</Text>
                        </TouchableRipple>

                    </View>
                    <View style={{ flex: 0.23 }}>
                        <View style={{
                            alignItems: 'center',

                        }}>
                            {stateActivitityIndicator ?
                                <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> :
                                <Button1 text="LOG IN"
                                    onPress={() => { login() }} />
                            }
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
                                navigation.navigate("CreateAccount1")
                            }}>
                                <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Signup</Text>
                            </TouchableRipple>
                        </View>
                    </View>
                </View>


            </SafeAreaView>
            {/* Bottom sheet Genere        */}



        </ScrollView>
    );
};

export default Login1;