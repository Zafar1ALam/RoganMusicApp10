// import React, { useState, useEffect, useRef } from 'react';

// import { Image, View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
// import { TouchableRipple } from 'react-native-paper';
// import { SvgXml } from 'react-native-svg';
// import Button1 from '../comp/Button1';
// import TextInput1 from '../comp/TextInput1';
// import STYLES from '../STYLES';
// import COLORS from '../utilities/colors/Color';
// import Svgs from '../utilities/svgs/Svgs';
// import RBSheet from 'react-native-raw-bottom-sheet';
// const Login = () => {





//     const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
//     const [stateIsValidPassword, setStateIsValidPassword] = useState(true);

//     const [stateData, setStataData] = useState({
//         email: '',
//         password: '',

//     }
//     )
//     const handleValidEmail = (val) => {
//         let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
//         if (reg.test(val)) {
//             console.log('true')
//             return true;

//         }
//         else {
//             console.log('false')
//             return false;
//         }
//     }



//     const Login = () => {
//         if (!handleValidEmail(stateData.email)) {
//             setStateIsValidEmail(false)
//         }


//         if (stateData.email == '') {
//             //   console.log(stateData.email + 'emailaddress')
//             setStateIsValidEmail(false)



//         }
//         if (stateData.password == '') {
//             //   console.log(stateData.email + 'emailaddress')
//             setStateIsValidPassword(false)

//         }

//         if (stateData.confirmPassword == '') {
//             //  console.log(stateData.password + 'password')
//             setStateIsValidConfirmPassword(false)
//         }

//         if (stateData.emailAddress != '' && stateData.password != ''

//             && handleValidEmail(stateData.email)) {
//             Alert.alert("All Valid Data")
//         }


//     }

//     return (
//         <ScrollView>
//             <View style={STYLES.container}>
//                 <View style={{
//                     flex: 0.07, //backgroundColor: 'red',
//                     flexDirection: 'row', alignItems: 'center',
//                     //  justifyContent: 'center'
//                 }}>
//                     <SvgXml xml={Svgs.leftArrow} style={{

//                     }} />
//                     <Text style={[{
//                         textAlign: 'center',
//                         flex: 1,
//                         //  backgroundColor: 'green'
//                     }, STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}>Login</Text>

//                 </View>
//                 <View style={{
//                     flex: 0.7, //backgroundColor: 'green'
//                 }}>
//                     <View style={{ marginTop: '15%' }}>
//                         <TextInput1 xml={Svgs.letter} text1="Email" text2="email"
//                             onChangeText={(text) => {
//                                 setStateIsValidEmail(true)
//                                 setStataData({
//                                     ...stateData, email: text
//                                 })
//                             }} />
//                         {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}
//                     </View>
//                     <View style={{ marginTop: '5%' }}>
//                         <TextInput1 xml={Svgs.lock} text1="Password" text2="password"
//                             secureTextEntry={true}
//                             onChangeText={(text) => {
//                                 setStateIsValidPassword(true)
//                                 setStataData({
//                                     ...stateData, password: text
//                                 })
//                             }} />
//                         {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
//                     </View>



//                 </View>

//                 <View style={{ flex: 0.23 }}>
//                     <View style={{
//                         alignItems: 'center',

//                     }}>

//                         <Button1 text="LOG IN"
//                             onPress={() => { Login() }} />
//                     </View>
//                     <Text style={[STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
//                     { marginTop: '7%', alignSelf: 'center' }]}>OR</Text>
//                     <View style={{
//                         flexDirection: 'row', marginTop: '7%',
//                         alignSelf: 'center'
//                     }}>
//                         <Text style={[STYLES.fontSize16_green0DC1A7_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
//                         { marginRight: '5%' }]}>Already hava an account?</Text>

//                         <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Signup</Text>
//                     </View>
//                 </View>



//             </View>


//         </ScrollView>
//     );
// };

// export default Login;