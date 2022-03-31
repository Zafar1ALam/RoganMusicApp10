// import React, { useState, useEffect, useRef } from 'react';

// import {
//     Image, View, Text, TextInput, ScrollView, TouchableOpacity,
//     StyleSheet, Alert
// } from 'react-native';
// import { TouchableRipple } from 'react-native-paper';
// import { SvgXml } from 'react-native-svg';
// import Button1 from '../comp/Button1';
// import TextInput1 from '../comp/TextInput1';
// import STYLES from '../STYLES';
// import COLORS from '../utilities/colors/Color';
// import Svgs from '../utilities/svgs/Svgs';
// import PhoneInput from 'react-native-phone-number-input';
// import CountryPicker from 'react-native-country-picker-modal'
// const PhoneNoVerification = () => {

//     const [countryCode, setCountryCode] = useState()
//     const [country, setCountry] = useState('')
//     const [withCountryNameButton, setWithCountryNameButton] =
//         useState(
//             true
//         )
//     const [withFlagButton, setWithFlagButton] = useState(true)
//     const [withCallingCodeButton, setWithCallingCodeButton] = useState(
//         true
//     )
//     const [withFlag, setWithFlag] = useState(true)
//     // const [withEmoji, setWithEmoji] = useState(true)
//     const [withFilter, setWithFilter] = useState(true)
//     const [withAlphaFilter, setWithAlphaFilter] = useState(true)
//     const [withCallingCode, setWithCallingCode] = useState(true)
//     const [withModal, setWithModal] = useState(true)
//     ////
//     const [visible, setVisible] = useState(false)
//     const [dark, setDark] = useState(true)
//     const [fontScaling, setFontScaling] = useState(true)
//     const [disableNativeModal, setDisableNativeModal] = useState(false)

//     const onSelect = (country) => {
//         // setCountryCode(country.cca2)
//         // console.log(country.cca2)
//         // console.log(country.name)
//         funcCountryNameSelect(country.name)
//         setCountry(country.name)
//     }
//     const switchVisible = () => setVisible(!visible)

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
//                     flex: 0.10, //backgroundColor: 'red',
//                     marginTop: '5%',
//                     flexDirection: 'row',
//                     alignItems: 'flex-start',
//                     // justifyContent: 'center'
//                 }}>
//                     <SvgXml xml={Svgs.leftArrow} style={{

//                     }} />

//                     <View style={{ flex: 1, alignItems: 'center' }}>
//                         <Text style={[{
//                             textAlign: 'center',
//                             width: '60%',
//                             // backgroundColor: 'green'
//                         }, STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}>PHONE NO VERIFICATION</Text>
//                     </View>
//                 </View>
//                 <View style={{
//                     flex: 0.67, //backgroundColor: 'green'
//                 }}>
//                     <Text style={[STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
//                     { marginTop: '15%' }]}>Enter Phone No</Text>


//                     <CountryPicker
//                         // containerButtonStyle={STYLES1.viewcountrynamepicker}
//                         {...{
//                             countryCode,
//                             withFilter,
//                             withFlag,
//                             withFlagButton,
//                             withCallingCodeButton,
//                             withCountryNameButton,
//                             withAlphaFilter,
//                             withCallingCode,
//                             withModal,
//                             withFlagButton,
//                             onSelect,
//                             dark,
//                             //visible: true,
//                             onClose: () => setVisible(false),
//                             onOpen: () => setVisible(true),
//                         }}
//                     />
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

// export default PhoneNoVerification;


// const style = StyleSheet.create({
//     containerstylephoneinput: {
//         //width: '89%',

//         //backgroundColor: COLORS.black000000,
//         //  height: "100%",
//         paddingLeft: 0,
//         // borderRadius: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: COLORS.whiteFFFFFF,
//         marginTop: '7%'
//     },
//     textinputstylephoneno: {
//         height: '100%',

//     },
//     textcontainerstylephoneno: {
//         width: "100%", height: "100%", justifyContent: 'center',
//         paddingTop: '1%', borderRadius: 10, marginLeft: 0,
//         paddingBottom: '1%',
//         // backgroundColor: COLORS.black000000
//         //backgroundColor: 'green',
//     },
// })