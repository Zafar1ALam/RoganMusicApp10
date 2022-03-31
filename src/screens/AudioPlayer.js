import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView,
    TouchableOpacity, Alert, SafeAreaView, Dimensions
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
import { Badge } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import BaseUrl, { url } from '../route/BaseUrl';
import TextInput2 from '../comp/TextInput2';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SoundPlayer from 'react-native-sound-player'
import Slider from '@react-native-community/slider';
import * as Progress from 'react-native-progress';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button, Snackbar } from 'react-native-paper';
var routeMusic = "";
var routeSongFullObject = "";
const AudioPlayer = ({ route, navigation }) => {
    routeMusic = route.params.routeMusic;
    routeSongFullObject = route.params.routeSongFullObject;
    console.log(routeSongFullObject.music_id)
    // console.log(routeMusic)
    const [stateStartingTime, setStateStartingTime] = useState("0:00");
    const [stateEndingTime, setStateEndingTime] = useState("");
    const [stateAudioPause, setStateAudioPause] = useState(true)
    const [stateVolumePause, setStateVolumePause] = useState(false)
    const [stateHeartLike, setStateHeartLike] = useState()
    const [stateActivityIndicator, setStateActivityIndicator] = useState(true)
    const [stateProgressBarMovingTime, setStateProgressBarMovingTime] = useState(0)
    SplashScreen.hide()

    const [statePlaylistName, setStatePlaylistName] = useState();
    const [stateMusicUrl, setStateMusicUrl] = useState();
    const [stateMusicId, setStateMusicId] = useState();
    const [stateMusicImage, setStateMusicImage] = useState();
    const [stateMusicTitle, setStateMusicTitle] = useState();
    const [stateMusicGenere, setStateMusicGenere] = useState();

    const [stateMusicDescription, setStateMusicDescription] = useState();
    const [stateNextMusicId, setStateNextMusicId] = useState();
    const [stateNextMusicTitle, setStateNextMusicTitle] = useState();
    const [statePreviousMusicId, setStatePreviousMusicId] = useState();
    const [statePreviousMusicTitle, setStatePreviousMusicTitle] = useState();

    const [stateSnackbarText, setStateSnackBarText] = useState("")

    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(true);

    const onDismissSnackBar = () => setVisible(false);


    var b = parseInt(stateEndingTime);


    // setInterval(() => {
    //     getInfo()
    // }, 1000)
    // var a;
    // {
    //     stateAudioPause ?
    //         a = clearInterval() :
    //         a = setInterval(() => {
    //             getInfo()
    //         }, 1000)
    // }
    useEffect(() => {
        // SoundPlayer.loadUrl(url + routeSongFullObject.music_link)
        // SoundPlayer.loadSoundFile("https://mtechub.com/sample/roganmusic/images/musics/85883080.mp3",
        //   "mp3")
        //  getInfo()


        fetch(BaseUrl + 'music/getMusicById.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                music_id: routeSongFullObject.music_id

            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json[0].previous_music_id + ' - ' +
                    json[0].music_id + ' - ' + json[0].next_music_id)
                SoundPlayer.loadUrl(url + json[0].music_link)
                setStateMusicDescription(json[0].description)
                setStateMusicGenere(json[0].genere_name)
                setStateMusicImage(json[0].music_cover_link)
                setStateMusicId(json[0].music_id)
                setStateHeartLike(json[0].music_like_status)
                setStateMusicUrl(json[0].music_link)
                setStatePlaylistName(json[0].playlist_name)

                if (json[0].next_music_id == "") {
                    setStateNextMusicTitle("")
                    setStateNextMusicId("0")

                } else {
                    setStateNextMusicId(json[0].next_music_id)

                    setStateNextMusicTitle(json[0].next_music_title)
                }

                if (json[0].previous_music_id == "") {
                    setStatePreviousMusicTitle("")
                    setStatePreviousMusicId("0")
                }
                else {
                    setStatePreviousMusicTitle(json[0].previous_music_title)
                    setStatePreviousMusicId(json[0].previous_music_id)
                }

                // if (json[0].previous_music_id == json[0].next_music_id
                //     && json[0].music_id > json[0].next_music_id) {
                //     console.log("No Next Music")
                //     setStateSnackBarText("No Next Music")

                //     onToggleSnackBar()
                //     // onDismissSnackBar()
                // }

                // if (json[0].previous_music_id == json[0].next_music_id
                //     && json[0].music_id < json[0].previous_music_id) {
                //     console.log("No Previous Music")
                //     setStateSnackBarText("No Previous Music")

                //     onToggleSnackBar()
                //     // onDismissSnackBar()
                // }

                setStateMusicTitle(json[0].title)
                setStateActivityIndicator(false)

            })
            .catch((error) => {

                console.error(error);
            });
    }, [])


    const previousMusic = (musicId) => {
        console.log('qqqqqqqqqqqqqq')
        console.log(statePreviousMusicId + 'statePreviousMusicId')
        console.log(stateMusicId + "stateMusicId")

        console.log(stateNextMusicId + "stateNextMusicId")

        if (statePreviousMusicId == stateNextMusicId
            && stateMusicId < statePreviousMusicId) {
            console.log("No Previous Music")
            setStateSnackBarText("No Previous Music")

            onToggleSnackBar()
            // onDismissSnackBar()
        }
        else {

            setStateActivityIndicator(true)
            fetch(BaseUrl + 'music/getMusicById.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    music_id: musicId

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json[0].previous_music_id + ' - ' +
                        json[0].music_id + ' - ' + json[0].next_music_id)

                    SoundPlayer.loadUrl(url + json[0].music_link)
                    setStateMusicDescription(json[0].description)
                    setStateMusicGenere(json[0].genere_name)
                    setStateMusicImage(json[0].music_cover_link)
                    setStateHeartLike(json[0].music_like_status)
                    setStateMusicUrl(json[0].music_link)

                    if (json[0].next_music_id == "") {
                        setStateNextMusicTitle("")
                        setStateNextMusicId("0")

                    } else {
                        setStateNextMusicId(json[0].next_music_id)

                        setStateNextMusicTitle(json[0].next_music_title)

                    }

                    if (json[0].previous_music_id == "") {
                        setStatePreviousMusicTitle("")
                        setStatePreviousMusicId("0")
                    }
                    else {
                        setStatePreviousMusicTitle(json[0].previous_music_title)
                        setStatePreviousMusicId(json[0].previous_music_id)
                    }

                    setStatePlaylistName(json[0].playlist_name)
                    setStateMusicId(json[0].music_id)
                    setStateMusicTitle(json[0].title)
                    setStateActivityIndicator(false)

                })
                .catch((error) => {

                    console.error(error);
                });
        }
    }




    const NextMusic = (musicId) => {
        console.log('qqqqqqqqqqqqqq')
        console.log(statePreviousMusicId)
        console.log(stateMusicId)
        console.log(stateNextMusicId)
        if (statePreviousMusicId == stateNextMusicId
            && stateMusicId >= stateNextMusicId) {
            console.log("No Next Music")
            setStateSnackBarText("No Next Music")

            onToggleSnackBar()
            // onDismissSnackBar()
        }

        else {

            setStateActivityIndicator(true)
            fetch(BaseUrl + 'music/getMusicById.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    music_id: musicId

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log(json[0].previous_music_id + ' - ' +
                        json[0].music_id + ' - ' + json[0].next_music_id)

                    SoundPlayer.loadUrl(url + json[0].music_link)
                    setStateMusicDescription(json[0].description)
                    setStateMusicGenere(json[0].genere_name)
                    setStateMusicImage(json[0].music_cover_link)
                    setStateHeartLike(json[0].music_like_status)
                    setStateMusicUrl(json[0].music_link)
                    setStateMusicId(json[0].music_id)
                    if (json[0].next_music_id == "") {
                        setStateNextMusicTitle("")
                        setStateNextMusicId("0")

                    } else {
                        setStateNextMusicId(json[0].next_music_id)

                        setStateNextMusicTitle(json[0].next_music_title)

                    }

                    if (json[0].previous_music_id == "") {
                        setStatePreviousMusicTitle("")
                        setStatePreviousMusicId("0")
                    }
                    else {
                        setStatePreviousMusicTitle(json[0].previous_music_title)
                        setStatePreviousMusicId(json[0].previous_music_id)
                    }

                    setStatePlaylistName(json[0].playlist_name)

                    setStateMusicTitle(json[0].title)

                    setStateActivityIndicator(false)

                })
                .catch((error) => {

                    console.error(error);
                });

        }
    }

    const likeUnlike = (varLikeUnlike) => {
        console.log(`${BaseUrl} + 'music/likeaMusic.php'
        music_id ${stateMusicId}
        music_like_status ${varLikeUnlike}`)
        fetch(BaseUrl + 'music/likeaMusic.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                music_id: stateMusicId,
                music_like_status: varLikeUnlike
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)

            })
            .catch((error) => {

                console.error(error);
            });
    }

    // var abc = await SoundPlayer.getInfo()
    // console.log(abc + "abc")
    // const startingTimeMemo = useMemo(() => {
    //     return (
    //         <Text>{stateStartingTime}</Text>
    //     )}
    const getInfo = async () => { // You need the keyword `async`
        try {
            const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
            console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
            // console.log('duration', info.duration)
            // console.log('duration', typeof (info.duration))
            var timeDuration = info.duration.toString().split('.');
            console.log(timeDuration[0])
            var minutesDuration = Math.floor(timeDuration[0] / 60);
            var secondsDuration = timeDuration[0] - minutesDuration * 60;
            var a = `${minutesDuration}:${secondsDuration}`
            setStateEndingTime(a)
            console.log(a)

        } catch (e) {
            console.log('There is no song playing', e)
        }
    }
    return (
        <SafeAreaView
            style={STYLES.withoutpaddingcontainer}>
            {stateActivityIndicator ?
                <View style={{
                    flex: 1, backgroundColor: COLORS.black000000_20, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator animating={stateActivityIndicator} color={COLORS.green0DC1A7} />
                </View> :

                <View>

                    {routeMusic == "music" ?
                        <View style={{
                            alignItems: 'center', marginTop: '2%',
                            height: '6%'
                        }}>
                        </View> :
                        <View style={{ alignItems: 'center', marginTop: '2%' }}>
                            {console.log('ppppppppp')}
                            <Text style={STYLES.fontSize14_greyD2D2D2_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Playlist</Text>
                            <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{statePlaylistName}</Text>
                        </View>}
                    <Snackbar
                        visible={visible}
                        duration={2000}
                        onDismiss={onDismissSnackBar}
                        style={{
                            backgroundColor: COLORS.red, zIndez: +999,

                            marginBottom: Dimensions.get('window').height / 4.5
                        }}
                    >
                        <Text style={{ color: COLORS.whiteFFFFFF }}>
                            {stateSnackbarText}
                        </Text>
                    </Snackbar>



                    <View style={{
                        height: '40%', marginTop: '10%',
                        paddingHorizontal: '5%', width: '100%', zIndez: -999
                    }}>
                        <Image
                            style={{
                                width: '100%', height: '100%', flex: 1,
                                borderRadius: 25
                            }}
                            source={{ uri: url + stateMusicImage }} />
                    </View>

                    <View style={{ alignItems: 'center', marginTop: '5%' }}>

                        <View style={{ marginBottom: '2%' }}>
                            <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{
                                stateMusicTitle
                            }</Text>
                        </View>
                        <View style={{ marginBottom: '2%' }}>
                            <Text
                                numberOfLines={3}
                                style={STYLES.fontSize14_whiteD5D5D5_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateMusicDescription} </Text>
                        </View>
                        <Badge style={[{
                            backgroundColor: COLORS.green0DC1A7,
                            marginRight: '5%',

                            alignSelf: 'center'

                        }]}>{stateMusicGenere}</Badge>
                    </View>

                    <View style={{
                        marginTop: '20%', paddingHorizontal: '5%',

                    }}>
                        {/* <View style={{ alignItems: 'center' }}>
                   <Progress.Bar //progress={0.9}
                        color={COLORS.green0DC1A7}
                        // animated
                        animationType={'timing'}
                        // animated={false}
                        borderWidth={0}
                        unfilledColor={COLORS.whiteD5D5D5}
                        width={330}
                    /> 

                    {stateEndingTime == "" ? null :
                        <Slider
                            style={{
                                width: "100%", //height: 40, 
                                // backgroundColor: 'red'
                            }}
                            value={stateProgressBarMovingTime}
                            minimumValue={0}
                            maximumValue={b}
                            minimumTrackTintColor={COLORS.green0DC1A7}
                            maximumTrackTintColor={COLORS.whiteD5D5D5}
                        />}

                   </View>
                <View style={{
                    flexDirection: 'row', marginTop: '2%',
                    justifyContent: 'space-between', alignItems: 'center'
                }}>
       
                    <Text>{stateStartingTime}</Text>
                    <Text>{stateEndingTime}</Text>
                </View>
            */}

                        <View style={{
                            flexDirection: 'row',
                            marginTop: '5%', justifyContent: 'space-between',
                            paddingVertical: '5%', alignItems: 'center'
                        }}>
                            {stateVolumePause ?
                                <TouchableRipple
                                    style={{
                                        paddingHorizontal: '4%',

                                    }}
                                    onPress={() => {
                                        SoundPlayer.setVolume(1)
                                        setStateVolumePause(false)
                                    }}>
                                    <SvgXml xml={Svgs.audioPlayerMute} />
                                </TouchableRipple> :
                                <TouchableRipple
                                    style={{
                                        paddingHorizontal: '4%',
                                        // paddingVertical: '4%'
                                    }}
                                    onPress={() => {
                                        SoundPlayer.setVolume(0)
                                        setStateVolumePause(true)
                                        // SoundPlayer.pause()
                                    }}>
                                    <FontAwesome5 name="volume-up" color={COLORS.whiteFFFFFF}
                                        size={30} />
                                </TouchableRipple>
                            }

                            {/* {statePreviousMusicId == stateNextMusicId
                                && stateMusicId >= statePreviousMusicId ?
                                <View style={{ height: 22, width: 22 }}>
                                </View> : */}
                            <TouchableRipple
                                onPress={() => {
                                    previousMusic(statePreviousMusicId)
                                }}>
                                <SvgXml xml={Svgs.audioPlayerLeft} />

                            </TouchableRipple>
                            {/* } */}

                            {stateAudioPause ?
                                <TouchableRipple
                                    style={{
                                        paddingHorizontal: '4%',
                                        // paddingVertical: '4%'
                                    }}
                                    onPress={() => {
                                        SoundPlayer.play()

                                        setStateAudioPause(false)
                                        console.log('q')
                                        // SoundPlayer.pause()
                                    }}>
                                    <FontAwesome name="play" color={COLORS.whiteFFFFFF}
                                        size={30} />
                                </TouchableRipple>
                                :

                                <TouchableRipple
                                    style={{
                                        paddingHorizontal: '4%',
                                        //  paddingVertical: '4%'
                                    }}
                                    onPress={() => {
                                        // SoundPlayer.play()
                                        console.log('w')
                                        setStateAudioPause(true)
                                        SoundPlayer.pause()
                                    }}>
                                    <SvgXml xml={Svgs.audioPlayerPlay} />
                                </TouchableRipple>
                            }

                            {/* {statePreviousMusicId == stateNextMusicId
                                && stateMusicId <= stateNextMusicId ?
                                <View style={{ height: 22, width: 22 }}>
                                </View> :  */}
                            <TouchableRipple
                                onPress={() => {
                                    NextMusic(stateNextMusicId)
                                }}>
                                <SvgXml xml={Svgs.audioPlayerRight} />
                            </TouchableRipple>
                            {/* } */}


                            {stateHeartLike ?
                                <TouchableRipple
                                    style={{
                                        paddingHorizontal: '4%',
                                        //  paddingVertical: '4%'
                                    }}
                                    onPress={() => {
                                        setStateHeartLike(false)

                                        likeUnlike(false)
                                    }} >
                                    <SvgXml xml={Svgs.heartPurple} />
                                </TouchableRipple>
                                :
                                <TouchableRipple
                                    style={{
                                        paddingHorizontal: '4%',
                                        //  paddingVertical: '4%'
                                    }}
                                    onPress={() => {
                                        setStateHeartLike(true)

                                        likeUnlike(true)
                                    }}
                                >
                                    < SvgXml xml={Svgs.whiteHeart} />
                                </TouchableRipple>
                            }

                        </View>
                    </View>

                    <View style={{
                        paddingHorizontal: '5%', zIndez: -999,
                        flexDirection: 'row', marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.audioPlayerNextSongSvg} />
                        <View style={{ marginLeft: '3%' }}>
                            <Text>Next Up: {stateNextMusicTitle}</Text>
                        </View>
                    </View>
                </View>
            }
        </SafeAreaView>
    );
};

AudioPlayer.propTypes = {

};

export default AudioPlayer;