import React, { useState, useEffect, useRef, useCallback } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableRipple, Text, Modal, Appbar, TextInput, ActivityIndicator } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import { createMaterialTopTabNavigator } from
    '@react-navigation/material-top-tabs';
import BaseUrl from '../route/BaseUrl';
import SplashScreen from 'react-native-splash-screen';
import RNFetchBlob from 'rn-fetch-blob'
import VideoPlayer from "react-native-video";
import RBSheet from 'react-native-raw-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo'
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import DocumentPicker from 'react-native-document-picker'
import Button1 from '../comp/Button1';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Video from 'react-native-video';
import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player'
const AddMusic = ({ navigation }) => {
    SplashScreen.hide()
    const refRBSheetSelectGenere = useRef()

    const [listSelectGenere, setListSelectGenere] = useState([


    ]);

    const [stateActivityIndicatorMusic, setStateActivityIndicatorMusic] = useState(false)

    const [stateSelectGenere, setStateSelectGenere] = useState('');
    const [stateSelectGenereId, setStateSelectGenereId] = useState('');


    const [stateIsValidUploadMusic, setStateIsValidUploadMusic] = useState(true);
    const [stateIsValidUploadCover, setStateIsValidUploadCover] = useState(true);
    const [stateIsValidAddTitle, setStateIsValidAddTitle] = useState(true);
    const [stateIsValidSelectGenere, setStateIsValidSelectGenere] = useState(true);

    const [stateIsValidDescription, setStateIsValidDescription] = useState(true);
    const [stateFileRespnse, setStateFileResponse] = useState([]);
    const [stateSongPause, setStateSongPause] = useState("play")
    const [stateData, setStataData] = useState({
        musicUpload: '',
        musicName: '',
        uploadCover: '',
        addTitle: '',
        description: '',
    }
    )
    useEffect(() => {
        fetch(BaseUrl + 'genere/viewAll.php')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)

                setListSelectGenere(json)


            })
            .catch((error) => console.error(error))

    }, [])

    var val = Math.floor(10000000 + Math.random() * 90000000);
    // console.log(val);
    // var val1 = Integer.toString(val);
    // console.log(typeof (val1));
    // const playSound = () => {
    //     console.log('ooooo')
    //     Sound.setCategory('Playback', true);
    //     sound1 = new Sound(stateData.uploadMusic, (error, _sound) => {
    //         if (error) {
    //             alert('error' + error.message);
    //             return;
    //         }
    //         sound1.play(() => {
    //             sound1.release();
    //         });
    //     }
    //     )
    // }

    // SoundPlayer.loadUrl('https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav')

    const playSong = () => {
        console.log('PPPPPPP')
        // console.log(stateData.uploadMusic)
        try {
            // SoundPlayer.playUrl('https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav')

            //   SoundPlayer.loadUrl(stateData.uploadMusic)
            //

        } catch (e) {
            alert('Cannot play the file')
            console.log('cannot play the song file', e)
        }


    }

    const imageTakeFromGallery = () => {
        try {
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
            }).then(image => {


                {
                    console.log(image.path);
                    setStateIsValidUploadCover(true)
                    setStataData({ ...stateData, uploadCover: image.path })
                }
            });
        }
        catch (error) {
            console.log(error)
        }
    }



    const uploadMusic = useCallback(async () => {
        //   setStateActivityIndicatorMusic(true)
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                mode: 'import',
                copyTo: 'documentDirectory',
            });
            console.log(response[0].fileCopyUri)
            setStataData({
                ...stateData,
                musicName: response[0].name,
                musicUpload: response[0].fileCopyUri,
            })
            setStateIsValidUploadMusic(true)
            setStateFileResponse(response)
            //  console.log(BaseUrl + 'music/addMusic.php/')
            // await RNFetchBlob.fetch(

            //     'POST', 'https://mtechub.com/sample/roganmusic/apis/music/addMusic.php', //BaseUrl + 'music/addMusic.php/',
            //     {
            //         Authorization: 'Bearer access-token',
            //         'Content-Type': 'multipart/form-data',
            //     },
            //     [
            //         {
            //             name: 'music',
            //             filename: val + 'new.mp3',
            //             type: 'audio/mpeg',
            //             data: RNFetchBlob.wrap(response[0].fileCopyUri),
            //         },

            //     ],
            // )

            //     .then(response => response.json())
            //     .then(response => {


            //     })
            //     .catch(error => {
            //         alert('error' + error);
            //     });
        } catch (err) {
            console.warn(err);
        }
    }, []);






    const post = async () => {


        if (stateData.musicUpload == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUploadMusic(false)



        }
        if (stateData.uploadCover == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUploadCover(false)

        }

        if (stateData.addTitle == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidAddTitle(false)
        }
        if (stateData.description == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidDescription(false)
        }

        if (stateSelectGenere == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidSelectGenere(false)
        }

        if (stateData.uploadMusic != "" &&
            stateData.addTitle != '' && stateData.uploadCover != ''
            && stateData.description
            != '' && stateSelectGenere != '') {

            console.log(stateData.musicUpload)
            console.log(stateData.uploadCover)
            console.log(val + '.jpg')
            setStateActivityIndicatorMusic(true)
            await RNFetchBlob.fetch(

                'POST', BaseUrl + 'music/addMusic.php/',
                {
                    Authorization: 'Bearer access-token',
                    'Content-Type': 'multipart/form-data',
                },
                [
                    {
                        name: 'music',
                        filename: val + '.mp3',
                        type: 'audio/mpeg',
                        data: RNFetchBlob.wrap(stateData.musicUpload),
                    },
                    {
                        name: 'musicsCover',
                        filename: val + '.jpg', type: 'image/jpg',
                        data: RNFetchBlob.wrap(stateData.uploadCover),
                    },

                ],
            )

                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    console.log(`music_id: ${response[0].music_id},
                    "title": ${stateData.addTitle},
                    "genere_id": ${stateSelectGenereId},
                    "description": ${stateData.description}`)
                    if (response[0].message == "Music Uploaded for zafaralam.za24@gmail.com") {
                        fetch(BaseUrl + 'music/addMusicData.php', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                "music_id": response[0].music_id,
                                "title": stateData.addTitle,
                                "genere_id": stateSelectGenereId,
                                "description": stateData.description
                            })
                        })
                            .then((response) => response.json())
                            .then((json) => {
                                setStateActivityIndicatorMusic(false)
                                if (json[0].message == "Record Updated Successfully") {


                                    Alert.alert("Add Music Successfully")

                                    navigation.navigate("CircleUsernameHere")
                                }


                            })
                            .catch((error) => {

                                console.error(error);
                            });
                    }
                    else {
                        console.log("error in uploaded music and uploaded cover")
                    }
                })
                .catch(error => {
                    alert('error' + error);
                });

        }

        // if (
        //     // stateData.addTitle != '' && stateData.uploadCover != ''
        //     // && stateData.description != '' && stateSelectPlaylist
        //     // != '' && stateSelectGenere != ''
        //     // && 
        //     stateFileRespnse.length != 0) {

        //             let data = {sale_id:1,
        //                 note_type_id:4,
        //                 description:"test",
        //                 note_content_item:" hi from broker hub"            
        //                 }
        // const formData = new FormData();
        // formData.append('data', JSON.stringify(data));
        // formData.append('Note', {
        //                      uri: "file://" //Your Image File Path
        //                     type: 'image/jpeg', 
        //                     name: "imagename.jpg",
        //                   });
        // axios({
        //        url    : api,
        //        method : 'POST',
        //        data   : formData,
        //        headers: {
        //                     Accept: 'application/json',
        //                     'Content-Type': 'multipart/form-data',
        //                     'Authorization':'Basic YnJva2VyOmJyb2tlcl8xMjM='
        //                 }
        //             })
        //             .then(function (response) {
        //                     console.log("response :", response);
        //            })
        //            .catch(function (error) {
        //                     console.log("error from image :");
        //            })


        // let dirs = RNFetchBlob.fs.dirs;
        // let path_to_a_file = dirs.DownloadDir; //+ '/header_logo.png';
        // console.log(path_to_a_file + 'oo')

        //     RNFetchBlob.fetch('POST',
        //         BaseUrl + 'myProfile/updateProfileImage.php/'
        //         ,
        //         {
        //             Authorization: "Bearer access-token",
        //             otherHeader: "foo",
        //             'Content-Type': 'multipart/form-data',
        //         }, [

        //         // part file from storage
        //         {
        //             name: 'image',
        //             filename: 'dirilis-ertugrul-theme-song.mp3',
        //             // use custom MIME type
        //             type: 'audio/mpeg',
        //             // upload a file from asset is also possible in version >= 0.6.2
        //             data: RNFetchBlob.wrap(stateData.uploadMusic)
        //         },

        //         // elements without property `filename` will be sent as plain text

        //     ]).then((resp) => {
        //         console.log(resp)
        //         // ...
        //         // setStateActivityIndicator(false)
        //         // console.log(resp)

        //         //     // let obj = JSON.parse(resp.data)
        //         //     // console.log(obj[0].message)

        //         //     // if (obj[0].message == "Uploading Image Done") {
        //         //     //     navigation.navigate("Login1")
        //         //     // }



        //     }).catch((err) => {
        //         // ...
        //         Alert.alert(err)
        //     })

        // await RNFetchBlob.fetch(
        //     'POST', BaseUrl + 'myProfile/updateProfileImage.php/',
        //     {
        //         Authorization: 'Bearer access-token',
        //         'Content-Type': 'multipart/form-data',
        //     },
        //     [
        //         {
        //             name: 'image',
        //             filename: val + 'new.mp3',
        //             type: 'audio/mpeg',
        //             data: RNFetchBlob.wrap(stateFileRespnse[0].fileCopyUri),
        //         },
        //     ],
        // )
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response)
        //         console.log(response[0].img_link)
        //         // SoundPlayer.loadUrl('https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav')
        //         SoundPlayer.loadUrl('https://mtechub.com/sample/roganmusic/' + response[0].img_link)
        //     })
        //     .catch(error => {
        //         alert('error' + error);
        //     });
        //}
    }



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
                    <Appbar.Content title="ADD MUSIC"
                        titleStyle={{
                            alignSelf: 'center',
                            marginLeft: "-7%"

                        }}
                        style={{
                        }} />


                </Appbar.Header>

                <View style={{
                    marginTop: '2%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: '5%'
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.green0DC1A7,
                        height: 100,
                        //backgroundColor: 'red',
                        borderStyle: 'dashed',
                        borderRadius: 13,
                        width: "46%",
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}>


                        {stateData.musicUpload == ''

                            ?

                            <TouchableRipple style={{
                                flexDirection: 'row',
                                backgroundColor: COLORS.green0DC1A7,
                                paddingHorizontal: "5%",
                                paddingVertical: '4%',
                                borderRadius: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => {
                                uploadMusic()
                                // DocumentPicker.types.audio
                            }}>

                                <>
                                    <SvgXml xml={Svgs.uploadIcon} style={{ marginRight: "5%" }} />
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Upload Music</Text>
                                </>
                            </TouchableRipple>

                            :

                            <View style={{
                                flexDirection: 'row',
                                backgroundColor: COLORS.green0DC1A7,
                                paddingHorizontal: "5%",
                                paddingVertical: '4%',
                                borderRadius: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => {
                                // uploadMusic()
                                // DocumentPicker.types.audio
                            }}>

                                <>
                                    <Entypo name="check" color={COLORS.whiteFFFFFF}
                                        size={20} style={{ marginLeft: "1%" }} />
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Uploaded Music</Text>


                                </>
                            </View>


                        }


                    </View>



                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.purple6D47F4,
                        height: 100,
                        //backgroundColor: 'red',
                        borderRadius: 13,
                        borderStyle: 'dashed',
                        width: "46%",
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}>
                        {stateData.uploadCover == '' ?
                            <TouchableRipple style={{
                                flexDirection: 'row',
                                backgroundColor: COLORS.purple6D47F4,
                                paddingHorizontal: "5%",
                                paddingVertical: '4%',
                                borderRadius: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => { imageTakeFromGallery() }}>
                                <>
                                    <SvgXml xml={Svgs.uploadIcon} style={{ marginRight: "5%" }} />

                                    <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Upload Cover</Text>
                                </>
                            </TouchableRipple>
                            :
                            <>
                                <Image style={{
                                    flex: 1, width: "100%"
                                }}
                                    source={{ uri: stateData.uploadCover }} />

                                <TouchableRipple style={{
                                    flexDirection: 'row',
                                    backgroundColor: COLORS.purple6D47F4,
                                    paddingHorizontal: "5%",
                                    paddingVertical: '4%',
                                    borderRadius: 40,
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    alignItems: 'center'
                                }} onPress={() => { imageTakeFromGallery() }}>
                                    <>
                                        <SvgXml xml={Svgs.uploadIcon} style={{ marginRight: "5%" }} />

                                        <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Upload Cover</Text>
                                    </>
                                </TouchableRipple>
                            </>
                        }


                    </View>


                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                    <View style={{ width: '55%' }}>
                        {stateIsValidUploadMusic == false ? <Text style={{ color: 'red' }}>Upload Music</Text> : null}
                    </View>
                    {stateIsValidUploadCover == false ? <Text style={{ color: 'red' }}>Upload Cover</Text> : null}
                </View>


                {stateData.musicName == '' ?
                    null


                    :
                    <View style={{
                        flexDirection: 'row', marginHorizontal: '5%',
                        justifyContent: 'space-between', alignItems: 'center',
                        marginTop: '5%',
                        backgroundColor: COLORS.black303033,
                        borderRadius: 6,
                        paddingLeft: '4%',
                        paddingVertical: '5%'
                    }}>
                        {/* <View style={{
        flexDirection: 'row',
        alignItems: 'center'
    }}> */}
                        {/* <Image source={{ uri: 'https://baconmockup.com/300/200/' }}

            style={{ width: 42, height: 42, marginRight: '4%' }} /> */}
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateData.musicName}</Text>
                        {/* </View> */}

                        {/* {stateSongPause == "pause" ?
        <AntDesign name='pause' color={COLORS.red}
            size={30} onPress={() => {
                setStateSongPause("play")
                SoundPlayer.pause()
            }} /> :
        <AntDesign name='play' color={COLORS.whiteFFFFFF}
            size={30}
            onPress={() => {
                setStateSongPause("pause")

                SoundPlayer.play()
            }} />} */}
                        <TouchableRipple
                            onPress={() => {
                                setStataData(
                                    {
                                        ...stateData,
                                        musicUpload: '',
                                        musicName: ''
                                    }
                                )

                            }}>
                            <Entypo name="cross" color={COLORS.whiteFFFFFF}
                                size={20} style={{ marginLeft: "1%" }} />
                        </TouchableRipple>

                    </View>}


                <View style={{ marginHorizontal: '5%', marginTop: '10%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Add Title</Text>
                    <TextInput style={{ height: 40 }}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidAddTitle(true)
                            setStataData({
                                ...stateData, addTitle: text
                            })
                        }} />
                    {stateIsValidAddTitle == false ? <Text style={{ color: 'red' }}>Enter Valid Title</Text> : null}
                </View>


                {/* <View style={{ marginTop: '5%', marginHorizontal: '5%', }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Select Playlist</Text>
                    <TouchableRipple style={{
                        flexDirection: 'row',
                        //backgroundColor: 'red',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.whiteFFFFFF
                    }} onPress={() => refRBSheetSelectPlaylist.current.open()}
                    >
                        <>
                            <View style={{
                                flex: 1,
                                height: 40,
                                justifyContent: 'center'

                            }}>
                                <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateSelectPlaylist}</Text>
 

                            </View>
                            <SvgXml xml={Svgs.downArrow} style={{ marginRight: '3%' }} />

                        </>
                    </TouchableRipple>
                    {stateIsValidSelectPlaylist == false ? <Text style={{ color: 'red' }}>Select Valid Playlist</Text> : null}
                </View> */}
                <View style={{ marginTop: '5%', marginHorizontal: '5%', }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Select Genere</Text>
                    <TouchableRipple style={{
                        flexDirection: 'row',
                        //backgroundColor: 'red',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.whiteFFFFFF
                    }} onPress={() => refRBSheetSelectGenere.current.open()}
                    >
                        <>
                            <View style={{
                                flex: 1,
                                height: 40,
                                justifyContent: 'center'

                            }}>
                                <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateSelectGenere}</Text>
                                {/* <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateSelectGenere}</Text> */}

                            </View>
                            <SvgXml xml={Svgs.downArrow} style={{ marginRight: '3%' }} />

                        </>
                    </TouchableRipple>
                    {stateIsValidSelectGenere == false ? <Text style={{ color: 'red' }}>Select Valid Genere</Text> : null}
                </View>


                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Description</Text>
                    <TextInput style={{
                        //height: 140,
                        textAlignVertical: 'top',
                        //backgroundColor: "red"

                    }} multiline={true}
                        numberOfLines={6}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidDescription(true)
                            setStataData({
                                ...stateData, description: text
                            })
                        }} />
                    {stateIsValidDescription == false ? <Text style={{ color: 'red' }}>Enter Valid Description</Text> : null}
                </View>

                <View style={{
                    marginHorizontal: '5%', marginTop: '15%', marginBottom: '15%',
                }}>
                    {
                        stateActivityIndicatorMusic ?
                            <ActivityIndicator animating={stateActivityIndicatorMusic} color={COLORS.green0DC1A7} /> :
                            <Button1 text="POST"
                                onPress={() => {
                                    post()
                                }}
                            />
                    }

                </View>

                {/* Bottom sheet Playlist */}
                {/* <RBSheet
                    // closeOnDragDown={true}
                    closeOnPressMask={false}
                    dragFromTopOnly={true}
                    height={400}
                    animationType="slide"
                    ref={refRBSheetSelectPlaylist}


                    // closeOnPressBack={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'rgba(0,0,0,0.84)',
                            //backgroundColor: "transparent"

                        },
                        container: {
                            //justifyContent: "center",
                            //  alignItems: "center"
                            backgroundColor: COLORS.black000000,
                            marginHorizontal: '5%',
                            paddingTop: '5%',
                            borderWidth: 1,
                            width: "95%",
                            alignSelf: "center",
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            borderColor: COLORS.green0DC1A7
                        },
                        // draggableIcon: {
                        //     backgroundColor: "#000"
                        // }
                    }}


                >

                    <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                        <View style={{
                            flexDirection: 'row', justifyContent:
                                'space-between',
                            marginBottom: '5%'
                        }}>
                            <Text style={STYLES.fontSize20_whiteFFFFFF_MADE_TOMMY_Bold_PERSONAL_USE}>
                                SELECT PLAYLIST</Text>

                            <TouchableRipple
                                onPress={() => refRBSheetSelectPlaylist.current.close()}

                                style={{


                                }}>
                                <SvgXml xml={Svgs.cross} />
                            </TouchableRipple>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={{
                                flex: 1, //backgroundColor: 'green',
                                marginTop: '3%',
                                paddingHorizontal: '2%',
                                justifyContent: 'space-between'
                            }}>
                                {listSelectPlaylist.map((list, index) => {
                                    return (
                                        <View key={index}
                                            style={{
                                                // backgroundColor: COLORS.whiteFFFFFF,
                                                // paddingVertical: '4%',
                                                backgroundColor: COLORS.black000000,
                                                paddingVertical: '4%',

                                                borderBottomWidth: 1,
                                                borderBottomColor: COLORS.whiteFFFFFF
                                                // borderBottomWidth: 1,
                                                // borderBottomColor: COLORS.black000000_20

                                            }}>
                                            <TouchableOpacity style={{
                                                //height: 40,
                                                //flex: 1,
                                                // backgroundColor: 'red',
                                                justifyContent: 'center'
                                            }} onPress={() => {
                                                refRBSheetSelectPlaylist.current.close()
                                                setStateSelectPlaylist(list.value)
                                                setStateIsValidSelectPlaylist(true)
                                                //isValidSetStatesleep(true)
                                            }}>
                                                <Text style={[{
                                                    alignSelf: 'center',
                                                }, STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}>{list.value}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}

                            </View>
                        </ScrollView>

                    </View>


                </RBSheet> */}


                {/* Bottom sheet Genere */}
                <RBSheet
                    // closeOnDragDown={true}
                    closeOnPressMask={false}
                    dragFromTopOnly={true}
                    height={400}
                    animationType="slide"
                    ref={refRBSheetSelectGenere}


                    // closeOnPressBack={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: 'rgba(0,0,0,0.84)',
                            //backgroundColor: "transparent"

                        },
                        container: {
                            //justifyContent: "center",
                            //  alignItems: "center"
                            backgroundColor: COLORS.black000000,
                            marginHorizontal: '5%',
                            paddingTop: '5%',
                            borderWidth: 1,
                            width: "95%",
                            alignSelf: "center",
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            borderColor: COLORS.green0DC1A7
                        },
                        // draggableIcon: {
                        //     backgroundColor: "#000"
                        // }
                    }}


                >

                    <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                        <View style={{
                            flexDirection: 'row', justifyContent:
                                'space-between',
                            marginBottom: '5%'
                        }}>
                            <Text style={STYLES.fontSize20_whiteFFFFFF_MADE_TOMMY_Bold_PERSONAL_USE}>
                                SELECT GENERE</Text>

                            <TouchableRipple
                                onPress={() => refRBSheetSelectGenere.current.close()}

                                style={{


                                }}>
                                <SvgXml xml={Svgs.cross} />
                            </TouchableRipple>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={{
                                flex: 1, //backgroundColor: 'green',
                                marginTop: '3%',
                                paddingHorizontal: '2%',
                                justifyContent: 'space-between'
                            }}>
                                {listSelectGenere.map((list, index) => {
                                    return (
                                        <View key={index}
                                            style={{
                                                // backgroundColor: COLORS.whiteFFFFFF,
                                                // paddingVertical: '4%',
                                                backgroundColor: COLORS.black000000,
                                                paddingVertical: '4%',

                                                borderBottomWidth: 1,
                                                borderBottomColor: COLORS.whiteFFFFFF
                                                // borderBottomWidth: 1,
                                                // borderBottomColor: COLORS.black000000_20

                                            }}>
                                            <TouchableOpacity style={{
                                                //height: 40,
                                                //flex: 1,
                                                // backgroundColor: 'red',
                                                justifyContent: 'center'
                                            }} onPress={() => {
                                                refRBSheetSelectGenere.current.close()
                                                setStateSelectGenere(list.name)
                                                setStateIsValidSelectGenere(true)
                                                setStateSelectGenereId(list.id)
                                                //isValidSetStatesleep(true)
                                            }}>
                                                <Text style={[{
                                                    alignSelf: 'center',
                                                }, STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}>{list.name}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}

                            </View>
                        </ScrollView>

                    </View>


                </RBSheet>
            </ScrollView>

            {/* <Video
                source={{ uri: stateData.uploadMusic }}
                //style={styles.backgroundVideo}
                audioOnly={true}
                //   muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}

            /> */}
        </SafeAreaView >
    );
};

export default AddMusic;