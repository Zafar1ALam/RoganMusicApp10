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
import TextInput2 from '../comp/TextInput2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../route/BaseUrl';
const ResetPassword = ({ route, navigation }) => {


    const { routeEmail } = route.params;


    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);
    const [stateIsValidPasswordConfirmPassword, setStateIsValidPasswordConfirmPassword] = useState(true)


    const [stateData, setStataData] = useState({
        email: routeEmail,
        password: '',
        confirmPassword: ''
    }
    )


    const passwordCheck = () => {
        if (stateData.password === stateData.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }

    const signUp = () => {




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
        ) {
            console.log(`${BaseUrl} user/updatePassword.php/+
email: ${stateData.email},
password: ${stateData.password},
`)
            setStateActivityIndicator(true)
            fetch(BaseUrl + 'user/updatePassword.php/', {
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
                    setStateActivityIndicator(false)
                    console.log(json)
                    if (json[0].message == "Password Updated successfully") {


                        navigation.navigate("Login1")
                    }

                    else {
                        Alert.alert('')
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

                    //alignItems: 'center'
                }}>
                    <Appbar.BackAction
                        onPress={() =>
                            navigation.goBack()} />
                    <Appbar.Content title="Reset Password"
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

                    </View>
                </View>


            </SafeAreaView>


        </ScrollView>
    );
};

export default ResetPassword;