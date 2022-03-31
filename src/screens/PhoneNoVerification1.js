// import React, { useState, useEffect, useRef } from 'react';

// import {
//     Image, View, ScrollView, TouchableOpacity,
//     StyleSheet, Alert, SafeAreaView
// } from 'react-native';
// import { TouchableRipple, Text, Appbar, TextInput } from 'react-native-paper';
// import { SvgXml } from 'react-native-svg';
// import Button1 from '../comp/Button1';

// import STYLES from '../STYLES';
// import COLORS from '../utilities/colors/Color';
// import Svgs from '../utilities/svgs/Svgs';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'

// const PhoneNoVerification1 = ({ navigation }) => {
//     const [CountryPickerView, setCountryPickerView] = useState(false);
//     const [countryCode, setCountryCode] = useState('92');
//     const [statePhoneNo, setStatePhoneNo] = useState('');
//     const [stateCombinePhoneNo, setStateCombinePhoneNo] = useState('');
//     const [state_AS_UserId, setState_AS_UserId] = useState('');
//     const [stateIsValidPhoneNo, setStateIsValidPhoneNo] = useState(true);
//     const [stateIsValidCombinePhoneNo, setStateIsValidCombinePhoneNo] = useState(true);

//     useEffect(() => {
//         getMyObject()
//     }, [])

//     const getMyObject = async () => {


//         try {
//             const jsonValue = await AsyncStorage.getItem('asyncUserId')
//             if (jsonValue != null) {
//                 return (
//                     console.log(jsonValue),
//                     setState_AS_UserId(jsonValue)
//                     //  console.log('appname'),

//                 )
//             }
//             else {
//                 return (
//                     null
//                 )
//             }
//         } catch (e) {
//             alert(e)
//         }


//     }

//     const sendCode = () => {
//         if (statePhoneNo == '') {
//             setStateIsValidPhoneNo(false)
//         } console.log(stateCombinePhoneNo)
//         if (statePhoneNo != '') {



//             console.log('https://rogan-music-app.herokuapp.com/api/users/sendOtpCode/' +
//                 state_AS_UserId + "phoneNo:" + stateCombinePhoneNo
//             ),

//                 fetch('https://rogan-music-app.herokuapp.com/api/users/sendOtpCode/' +
//                     state_AS_UserId, {
//                     method: 'PUT',
//                     headers: {
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         //phoneNo: stateCombinePhoneNo
//                         phoneNo: "+923365454564"

//                     })

//                 })
//                     .then((response) => response.json())
//                     .then((json) => {

//                         console.log(json)
//                         // setStateShowAlert(false)
//                         // if (json.success) {

//                         //     navigation.navigate("ManageCashier"
//                         //     )
//                         // }

//                         // else {
//                         //     Alert.alert('plz insert valid data')
//                         // }
//                     })
//                     .catch((error) => {

//                         console.error(error);
//                     });


//         }
//     }
//     return (
//         <ScrollView>
//             <SafeAreaView style={STYLES.withoutpaddingcontainer}>

//                 <View style={{
//                     flex: 0.10, //backgroundColor: 'red',
//                     marginTop: '5%',
//                     flexDirection: 'row',
//                     alignItems: 'flex-start',
//                     marginHorizontal: '5%'
//                     // justifyContent: 'center'
//                 }}>
//                     <SvgXml xml={Svgs.leftArrow} style={{

//                     }}
//                         onPress={() =>
//                             navigation.goBack()} />

//                     <View style={{ flex: 1, alignItems: 'center' }}>
//                         <Text style={[{
//                             textAlign: 'center',
//                             width: '60%',
//                             //backgroundColor: 'green'
//                         }, STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}>PHONE NO VERIFICATION</Text>
//                     </View>
//                 </View>

//                 <View style={{
//                     flex: 0.9,
//                     // backgroundColor: 'red',
//                     marginHorizontal: "5%"
//                 }}>

//                     <View style={{ flex: 0.8, }}>
//                         <View style={{ marginTop: "15%" }}>
//                             <Text>Enter Phone No</Text>
//                             {CountryPickerView == true ? <CountryPicker
//                                 theme={DARK_THEME}
//                                 withFilter={true}
//                                 withCallingCode={true}
//                                 withModal={true}
//                                 withFlag={true}
//                                 withFlagButton={true}

//                                 onSelect={(e) => {
//                                     setCountryPickerView(false)
//                                     //setCountryFlag(JSON.parse(e.flag))
//                                     setCountryCode(JSON.parse(e.callingCode))
//                                 }}
//                                 onClose={(e) => {
//                                     setCountryPickerView(false)
//                                 }}
//                                 visible={CountryPickerView}
//                             /> :
//                                 <View></View>
//                             }
//                             <View style={{
//                                 flexDirection: 'row',
//                                 borderBottomWidth: 1,
//                                 borderBottomColor: COLORS.whiteFFFFFF,

//                                 // , height: 40
//                             }}>
//                                 <TouchableOpacity
//                                     style={{
//                                         flexDirection: 'row',

//                                         alignItems: 'center'
//                                     }}
//                                     onPress={() => {
//                                         setCountryPickerView(true)
//                                     }}>
//                                     <TextInput
//                                         style={style.input}
//                                         editable={false}
//                                         selectTextOnFocus={false}
//                                         keyboardType='number-pad'
//                                         onChangeText={(e) => {
//                                             // setPhoneno(e)
//                                             console.log(e)
//                                             console.log('+' + countryCode + e)
//                                             //console.log('+' + countryFlag + e)
//                                         }}
//                                         value={'+' + countryCode}
//                                         style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}
//                                     //  placeholderTextColor={"black"}
//                                     />
//                                     <SvgXml xml={Svgs.downArrow} style={{ marginRight: '3%' }} />
//                                 </TouchableOpacity>
//                                 <TextInput style={{
//                                     flex: 1,
//                                 }}
//                                     keyboardType='number-pad'
//                                     activeUnderlineColor={COLORS.whiteFFFFFF}
//                                     selectionColor={COLORS.whiteFFFFFF}
//                                     activeOutlineColor={COLORS.whiteFFFFFF}
//                                     onChangeText={(text) => {
//                                         setStateIsValidPhoneNo(true)
//                                         setStatePhoneNo(text)
//                                         setStateCombinePhoneNo("+" + countryCode + text)
//                                     }} />


//                             </View>
//                             {stateIsValidPhoneNo == false ? <Text style={{ color: 'red' }}>Enter Valid PhoneNo</Text> : null}


//                         </View>



//                     </View>
//                     <View style={{ flex: 0.13, }}>
//                         <View style={{
//                             alignItems: 'center',

//                         }}>

//                             <Button1 text="SEND CODE"
//                                 onPress={() => { sendCode() }} />
//                         </View>

//                     </View>
//                 </View>


//             </SafeAreaView>




//         </ScrollView>
//     );
// };

// export default PhoneNoVerification1;


// const style = StyleSheet.create({
//     input: {
//         //width: '89%',

//         backgroundColor: 'red'
//         //backgroundColor: COLORS.black000000,
//         //  height: "100%",
//         // padding: 5
//     },

// })