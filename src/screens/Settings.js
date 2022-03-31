
import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
    TouchableRipple, Text, Appbar, TextInput,
    Modal, Snackbar, ToggleButton
} from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import SplashScreen from 'react-native-splash-screen';

import RBSheet from 'react-native-raw-bottom-sheet';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'

import Fontisto from 'react-native-vector-icons/Fontisto'
import Button1 from '../comp/Button1';
const Settings = ({ navigation }) => {
    SplashScreen.hide()

    const [stateEnableNotificationToggle,
        setStateEnableNotificationToggle] = React.useState('checked');
    const [stateRecommendedMusicToggle,
        setStateRecommendedMusicToggle] = React.useState('checked');
    const funcEnableNotificationToggle = value => {
        setStateEnableNotificationToggle(stateEnableNotificationToggle === 'checked' ? 'unchecked' : 'checked');
    };



    const funcRecommendedMusicToggle = value => {
        setStateRecommendedMusicToggle(stateRecommendedMusicToggle ===
            'checked' ? 'unchecked' : 'checked');
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.black000000
            }}>
            <ScrollView>
                <Appbar.Header style={{
                    backgroundColor: COLORS.black000000,

                    //alignItems: 'center'
                }}>
                    <Appbar.BackAction
                        onPress={() =>
                            navigation.goBack()} />
                    <Appbar.Content title="SETTINGS"
                        titleStyle={[{
                            alignSelf: 'center',
                            marginLeft: '-7%'

                        }, STYLES.fontSize36_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}
                        style={{
                        }} />



                </Appbar.Header>

                <View style={{
                    marginTop: '10%',
                    marginHorizontal: '5%'
                }}>
                    <Text style={STYLES.fontSize36_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Audio Quality</Text>
                </View>

                <View style={{
                    marginTop: '7%',
                    marginHorizontal: '5%',
                    flexDirection: 'row', justifyContent: 'space-between'
                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Streaming Quality</Text>
                    <Text style={STYLES.fontSize16_green0DC1A7_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Adaptive</Text>
                </View>

                <View style={{
                    marginTop: '5%',
                    marginHorizontal: '5%',
                    flexDirection: 'row', justifyContent: 'space-between'
                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Download Quality</Text>
                    <Text style={STYLES.fontSize16_green0DC1A7_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Highest</Text>
                </View>


                <View style={{
                    marginTop: '15%',
                    marginHorizontal: '5%'
                }}>
                    <Text style={STYLES.fontSize36_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Notifications</Text>
                </View>

                <View style={{
                    marginTop: '5%',
                    marginHorizontal: '5%',
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Enable notifications</Text>
                    <ToggleButton
                        style={{ backgroundColor: COLORS.black000000 }}
                        icon={() => <Fontisto name=
                            {stateEnableNotificationToggle === 'checked' ?
                                'toggle-on' : 'toggle-off'}
                            color={COLORS.green0DC1A7}
                            size={30}
                        />}

                        status={stateEnableNotificationToggle}
                        onPress={funcEnableNotificationToggle}
                    />
                </View>

                <View style={{
                    marginTop: '3%',
                    marginHorizontal: '5%',
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Recommended music</Text>
                    <ToggleButton
                        style={{ backgroundColor: COLORS.black000000 }}
                        icon={() => <Fontisto name=
                            {stateRecommendedMusicToggle === 'checked' ?
                                'toggle-on' : 'toggle-off'}
                            color={COLORS.green0DC1A7}
                            size={30}
                        />}

                        status={stateRecommendedMusicToggle}
                        onPress={funcRecommendedMusicToggle}
                    />
                </View>


                <View style={{
                    marginTop: '10%',
                    marginHorizontal: '5%'
                }}>
                    <Text style={STYLES.fontSize36_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>About</Text>
                </View>

                <View style={{
                    marginTop: '5%',
                    marginHorizontal: '5%',

                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Terms and Condition</Text>

                </View>

                <View style={{
                    marginTop: '5%',
                    marginHorizontal: '5%',

                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Privacy Policy</Text>

                </View>
                <View style={{
                    marginTop: '5%',
                    marginHorizontal: '5%',

                }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Support</Text>

                </View>

                <View style={{

                    //  flex: 1, 
                    //  backgroundColor: 'red',

                    marginTop: '15%',
                    //marginVertical: '5%'
                }}>


                    <Button1 text="LOGOUT"
                        onPress={() => { navigation.navigate("Login1") }} />

                </View>




            </ScrollView>
        </SafeAreaView >
    );
};







export default Settings;