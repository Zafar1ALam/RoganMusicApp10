
import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableRipple, Text, Modal, Appbar, TextInput, ActivityIndicator } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { createMaterialTopTabNavigator } from
    '@react-navigation/material-top-tabs';
import SplashScreen from 'react-native-splash-screen';
import VideoPlayer from "react-native-video";
import RBSheet from 'react-native-raw-bottom-sheet';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import DocumentPicker from 'react-native-document-picker'
import Button1 from '../comp/Button1';
import Entypo from 'react-native-vector-icons/Entypo'
import BaseUrl from '../route/BaseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreatePlaylistMusic = ({ route, navigation }) => {
    const { routePlaylistTitle, routePlaylistId } = route.params
    const [stateDummy, setStateDummy] = useState(false)
    const [stateFullActivityIndicator, setStateFullActivityIndicator] = useState(true)
    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)

    const [stateSelectMusicId, setStateSelectMusicId] = useState([]);
    const [stateAsynsUserId, setStateAsyncUserId] = useState('');
    const [stateIsValidSelectMusic, setStateIsValidSelectMusic] = useState(true);
    const [stateListSelectMusic, setStateListSelectMusic] = useState([


    ]);
    console.log(stateSelectMusicId)
    useEffect(() => {
        getSingleValue()
        fetch(BaseUrl + 'music/getAllMusics.php')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setStateListSelectMusic(json)
                setStateFullActivityIndicator(false)



            })
            .catch((error) => console.error(error))

    }, [])
    const getSingleValue = async () => {
        const value = await AsyncStorage.getItem('asyncUserId');
        try {
            if (value !== null) {
                // We have data!!
                console.log(value);
                setStateAsyncUserId(value)

            }
        } catch (error) {
            // Error retrieving data
        }
    }
    SplashScreen.hide()

    const AddMusics = () => {
        if (stateSelectMusicId.length == 0) {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidSelectMusic(false)

            Alert.alert("plz add musics")

        }
        if (stateSelectMusicId.length != 0) {
            console.log(` ${BaseUrl}playlist/addPlaylistMusics.php
            musics_id: ${stateSelectMusicId},                  
            playlist_id: ${routePlaylistId},
            user_id:${stateAsynsUserId} `)
            setStateActivityIndicator(true)
            fetch(BaseUrl + 'playlist/addPlaylistMusics.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    musics_id: stateSelectMusicId,
                    playlist_id: routePlaylistId,
                    user_id: stateAsynsUserId,


                })
            })
                .then((response) => response.json())
                .then((json) => {
                    //setStateShowAlert(false)
                    console.log(json)
                    setStateActivityIndicator(false)
                    if (json[0].message == "data inserted") {


                        Alert.alert("Add Music In Playlist sucessfully")
                        navigation.navigate("CircleUsernameHere")
                    }


                })
                .catch((error) => {

                    console.error(error);
                });



        }
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.black000000
            }}>
            <ScrollView>
                {stateFullActivityIndicator ?
                    <View style={{
                        flex: 1, backgroundColor: COLORS.black000000_20, justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator animating={stateFullActivityIndicator} color={COLORS.green0DC1A7} />
                    </View>

                    :
                    <>
                        <Appbar.Header style={{
                            backgroundColor: COLORS.black000000,

                            //alignItems: 'center'
                        }}>
                            <Appbar.BackAction
                                onPress={() =>
                                    navigation.goBack()} />
                            <Appbar.Content title={routePlaylistTitle}
                                titleStyle={{
                                    alignSelf: 'center',
                                    marginLeft: "-7%"
                                }}
                                style={{
                                }} />


                        </Appbar.Header>
                        <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                            <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Select Music</Text>

                            <View style={{ marginTop: "7%" }}></View>


                            {stateListSelectMusic.map((item, music_id) => {
                                return (

                                    <TouchableRipple
                                        key={music_id}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginBottom: '5%',
                                            // height: "10%",
                                            paddingVertical: '5%',

                                            borderBottomWidth: 1,
                                            borderBottomColor: COLORS.whiteFFFFFF_21

                                        }}
                                        onPress={() => {
                                            if (!stateSelectMusicId.includes(item.music_id)) {
                                                console.log('qqqqqqqqqq')
                                                setStateSelectMusicId([
                                                    ...stateSelectMusicId,
                                                    item.music_id
                                                ])



                                            }
                                            else {
                                                console.log('pppppp')
                                                let indexOfId = stateSelectMusicId.indexOf(item.music_id)
                                                stateSelectMusicId.splice(indexOfId, 1)

                                                setStateDummy(!stateDummy)
                                            }
                                        }
                                        }>


                                        <>
                                            <SvgXml

                                                xml={stateSelectMusicId.includes(item.music_id)

                                                    ? Svgs.checkCheckBox
                                                    :
                                                    Svgs.uncheckCheckBox}
                                                style={{ marginRight: '5%' }} />
                                            <View>
                                                <View style={{}}>
                                                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.title}</Text>
                                                </View>
                                                <View style={{ marginLeft: '10%' }}>
                                                    <Text
                                                        numberOfLines={2}
                                                        style={STYLES.fontSize10_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.description}</Text>
                                                </View>
                                            </View>
                                        </>

                                    </TouchableRipple>

                                )
                            }
                            )
                            }


                        </View>
                        <View style={{
                            marginHorizontal: '5%',
                            marginTop: '15%', marginBottom: '15%', //flex: 1,
                            //justifyContent: 'flex-end'
                        }}>
                            {stateActivityIndicator ?
                                <ActivityIndicator animating={stateActivityIndicator} color={COLORS.green0DC1A7} /> :
                                <Button1 text="Add Musics"
                                    onPress={() => { AddMusics() }}
                                />
                            }
                        </View>
                    </>
                }
            </ScrollView>


        </SafeAreaView >
    );
};

CreatePlaylistMusic.propTypes = {

};

export default CreatePlaylistMusic;