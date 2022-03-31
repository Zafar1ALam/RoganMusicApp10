import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import { TouchableRipple, Text, Modal, ActivityIndicator } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { createMaterialTopTabNavigator } from
    '@react-navigation/material-top-tabs';
import SplashScreen from 'react-native-splash-screen';
import VideoPlayer from "react-native-video";
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import BaseUrl, { url } from '../route/BaseUrl';
import { reportLogBoxError } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const Tab = createMaterialTopTabNavigator();



const Music = ({ route, navigation }) => {

    const [stateMusicActivityIndicator, setStateMusicActivityIndicator] = useState(true)
    const [musicFlatlist, setMusicFlatlist] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },])

    useEffect(() => {

        fetch(BaseUrl + 'music/getAllMusics.php')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setMusicFlatlist(json)
                setStateMusicActivityIndicator(false)



            })
            .catch((error) => console.error(error))
    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black000000
        }}>
            {stateMusicActivityIndicator ?
                <View style={{
                    flex: 1, backgroundColor: COLORS.black000000_20, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator animating={stateMusicActivityIndicator} color={COLORS.green0DC1A7} />
                </View> :

                <FlatList style={{
                    marginTop: '5%', //backgroundColor: 'red' 
                }}
                    horizontal={false}
                    numColumns={3}
                    data={musicFlatlist}
                    renderItem={({ item }) => {
                        return (


                            <TouchableOpacity style={{
                                backgroundColor: 'grey',

                                height: 90,

                                marginRight: '10%',

                                width: 85,
                                marginBottom: '4%',
                                borderRadius: 20,


                            }} onPress={() => {
                                navigation.navigate("AudioPlayer",
                                    {
                                        routeSongFullObject: item,
                                        routeMusic: "music"
                                    }
                                )
                            }}
                            >

                                <Image
                                    source={{ uri: url + item.music_cover_link }} style={{
                                        flex: 1, borderRadius: 16, height: '100%', width: '100%',
                                        borderWidth: 1,
                                    }} />

                                <SvgXml xml={Svgs.vedipPauseButton}
                                    style={{
                                        position: 'absolute',
                                        top: '25%', left: '25%', height: 50,
                                        width: 50
                                    }} />



                            </TouchableOpacity>
                            // <VideoPlayer
                            //     source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                            //     audioOnly={true}
                            //     //muted={stateAudioPlay}
                            //     // paused={stateAudioPlay}
                            //     thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                            //     repeat={true}
                            // />

                        )
                    }}
                    keyExtractor={(item) => item.id}

                />
            }


        </SafeAreaView>
    )
}

const MyPlayList = ({ route, navigation }) => {
    const [myPlaylistFlatlist, setmyPlaylistFlatlist] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },])
    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black000000
        }}>


            <FlatList style={{
                marginTop: '5%', //backgroundColor: 'red' 
            }}
                horizontal={false}
                numColumns={3}
                data={myPlaylistFlatlist}
                renderItem={({ item }) => {
                    return (


                        <TouchableOpacity style={{
                            backgroundColor: 'grey',

                            height: 90,

                            marginRight: '10%',

                            width: 85,
                            marginBottom: '4%',
                            borderRadius: 20,


                        }} onPress={() => { navigation.navigate("MyPlaylist") }}
                        >

                            <Image
                                source={{ uri: item.thumbnail }} style={{
                                    flex: 1, borderRadius: 16,
                                    borderWidth: 1,
                                }} />

                            <SvgXml xml={Svgs.vedipPauseButton}
                                style={{
                                    position: 'absolute',
                                    top: '25%', left: '25%', height: 50,
                                    width: 50
                                }} />



                        </TouchableOpacity>
                        // <VideoPlayer
                        //     source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        //     audioOnly={true}
                        //     //muted={stateAudioPlay}
                        //     // paused={stateAudioPlay}
                        //     thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                        //     repeat={true}
                        // />

                    )
                }}
                keyExtractor={(item) => item.id}

            />


        </SafeAreaView>

    )
}
const CircleUsernameHere = ({ route, navigation }) => {
    // const { routeImage,
    //     routeUserName,
    //     routeBio } = route.params;

    const refRBSheetCreate = useRef();
    const [stateAsyncEmail, setStateAsyncEmail] = useState('')
    const [stateAsyncBio, setStateAsyncBio] = useState('')
    const [stateAsyncImage, setStateAsyncImage] = useState('')
    const [stateAsyncUserName, setStateAsyncUserName] = useState('')


    useEffect(() => {
        getMultiple()

    }, [])

    const getMultiple = async () => {

        let values
        try {
            values = await AsyncStorage.multiGet(['asyncEmail', 'asyncBio',
                'asyncImage', 'asyncUserName'])
        } catch (e) {
            // read error
        }
        console.log(values[0][1])
        console.log(values[1][1])
        console.log(values[2][1])
        console.log(values[3][1])
        setStateAsyncEmail(values[0][1])
        setStateAsyncBio(values[1][1])
        setStateAsyncImage(values[2][1])
        setStateAsyncUserName(values[3][1])


    }

    SplashScreen.hide()
    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black000000,
            paddingHorizontal: '5%',
            paddingVertical: '4%'

        }}>




            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableRipple onPress={() => refRBSheetCreate.current.open()}>
                    <SvgXml xml={Svgs.circlePlus} />
                </TouchableRipple>
                <TouchableRipple onPress={() => navigation.navigate("Account",
                    {
                        routeEmail: stateAsyncEmail
                    })}>
                    {/* <SvgXml xml={Svgs.circleChat} /> */}
                    <Feather name="edit" color={COLORS.whiteFFFFFF}
                        size={20} />
                </TouchableRipple>
            </View>



            <View style={{ //position: 'absolute', 
                top: -10,
                alignItems: 'center',
                height: '10%',
                width: '20%',
                // backgroundColor: 'green',
                alignSelf: 'center'
            }}>
                <Image

                    // source={require('../utilities/images/humanBeing.png')}
                    source={{ uri: 'https://mtechub.com/sample/roganmusic/' + stateAsyncImage }}
                    style={{
                        borderRadius: 50,
                        borderColor: COLORS.green074B08,
                        borderWidth: 5,
                        height: '100%', width: '100%'
                    }} />
            </View>

            <View style={{ marginTop: '2%', alignItems: 'center' }}>
                <Text style={STYLES.fontSize25_whiteFFFFFF_Archivo_Bold}>{stateAsyncUserName}</Text>
            </View>
            <View style={{ marginTop: '2%', alignItems: 'center' }}>
                <Text style={STYLES.fontSize10_whiteFFFFFF_Archivo_Regular}>{stateAsyncBio}</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: '7%' }}>
                <View style={{
                    flexDirection: 'row'
                    , justifyContent: "space-between",
                    width: '85%',
                }}>
                    <View style={{}}>
                        <Text style={[STYLES.fontSize20_whiteFFFFFF_Archivo_Bold,
                        { textAlign: 'center' }]}>
                            735
                        </Text>
                        <Text style={STYLES.fontSize10_greyA3A3A3_Archivo_Regular}>Music Posted</Text>
                    </View>
                    <View style={{}}>
                        <Text style={[STYLES.fontSize20_whiteFFFFFF_Archivo_Bold,
                        { textAlign: 'center' }]}>
                            735
                        </Text>
                        <Text style={STYLES.fontSize10_greyA3A3A3_Archivo_Regular}>Follower</Text>
                    </View>
                    <View style={{}}>
                        <Text style={[STYLES.fontSize20_whiteFFFFFF_Archivo_Bold,
                        { textAlign: 'center' }]}>
                            735
                        </Text>
                        <Text style={STYLES.fontSize10_greyA3A3A3_Archivo_Regular}>Following</Text>
                    </View>
                </View>
            </View>





            <Tab.Navigator style={{
                marginTop: "5%",

            }} screenOptions={{
                tabBarLabelStyle: { color: COLORS.whiteFFFFFF },
                tabBarItemStyle: {},
                tabBarStyle: { backgroundColor: COLORS.black000000 },
            }}>
                <Tab.Screen name="music" component={Music}

                    options={{

                        tabBarLabel: ({ focused }) => (

                            <Text style={[STYLES.fontSize14_0093F5_Roboto_Bold//, { color: colors.text }
                            ]}>Musics</Text>

                        )
                    }}
                />
                <Tab.Screen name="myPlayList" component={MyPlayList}
                    options={{
                        tabBarLabel: ({ focused }) => (

                            <Text style={[STYLES.fontSize14_0093F5_Roboto_Bold//, { color: colors.text }
                            ]}>My Playlist</Text>

                        )
                    }} />
            </Tab.Navigator>



            {/* Bottom sheet Create        */}
            <RBSheet
                closeOnPressMask={false}
                closeOnDragDown={false}
                height={220}
                animationType="slide"
                ref={refRBSheetCreate}

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
                        paddingVertical: '7%',
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
                <View style={{
                    // justifyContent: 'space-evenly', 
                    flex: 1,
                    paddingHorizontal: '5%', //backgroundColor: COLORS.black000000,
                    //  backgroundColor: 'red',

                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={[{

                            // alignSelf: 'center'
                        }, STYLES.fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}>CREATE</Text>

                        <TouchableRipple onPress={() => {
                            refRBSheetCreate.current.close()
                        }}>
                            <Entypo name="cross" size={20} color={COLORS.whiteFFFFFF} />
                        </TouchableRipple>
                    </View>

                    <View style={{
                        borderBottomColor: COLORS.whiteFFFFFF_50,
                        borderBottomWidth: 1,

                        marginTop: "7%"

                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("AddMusic")
                                refRBSheetCreate.current.close()
                            }
                            }
                            style={{
                                flexDirection: 'row', marginBottom: '3%'
                            }}  >
                            <SvgXml xml={Svgs.music} style={{ marginRight: '7%' }} />
                            <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                                Music </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        borderBottomColor: COLORS.whiteFFFFFF_50,
                        borderBottomWidth: 1,

                        marginTop: "7%"

                    }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("CreateSpace")
                            refRBSheetCreate.current.close()
                        }}
                            style={{
                                flexDirection: 'row', marginBottom: '3%'
                            }}  >
                            <SvgXml xml={Svgs.space} style={{ marginRight: '7%' }} />
                            <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                                Space </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{


                        marginTop: "7%"

                    }}>
                        <TouchableOpacity
                            onPress={() => {

                                navigation.navigate("CreatePlaylist")
                                refRBSheetCreate.current.close()
                            }}
                            style={{
                                flexDirection: 'row', marginBottom: '3%'
                            }}  >
                            <SvgXml xml={Svgs.playList} style={{ marginRight: '7%' }} />
                            <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>
                                Playlist </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RBSheet>

        </SafeAreaView >

    );
};

export default CircleUsernameHere;