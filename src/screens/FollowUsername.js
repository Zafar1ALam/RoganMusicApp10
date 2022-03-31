import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import { TouchableRipple, Text, Modal, Button } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { createMaterialTopTabNavigator } from
    '@react-navigation/material-top-tabs';
import SplashScreen from 'react-native-splash-screen';
import VideoPlayer from "react-native-video";
import RBSheet from 'react-native-raw-bottom-sheet';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import Entypo from 'react-native-vector-icons/Entypo'

const Tab = createMaterialTopTabNavigator();



const Music = ({ navigation }) => {
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


                        }}// onPress={() => { modalOpen(item) }}
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

const MyPlayList = ({ navigation }) => {
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


                        }} onPress={() => {
                            navigation.navigate("MyPlaylist")
                        }}
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
const FollowUsername = () => {

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
                justifyContent: 'flex-end'
            }}>

                <SvgXml xml={Svgs.circleChat} />
            </View>



            <View style={{ //position: 'absolute', 
                top: -10,
                alignItems: 'center'
            }}>
                <Image
                    source={require('../utilities/images/humanBeing.png')}
                    style={{
                        borderRadius: 50,
                        borderColor: COLORS.green074B08,
                        borderWidth: 5
                    }} />
            </View>

            <View style={{ marginTop: '2%', alignItems: 'center' }}>
                <Text style={STYLES.fontSize25_whiteFFFFFF_Archivo_Bold}>Username Here</Text>
            </View>
            <View style={{ marginTop: '2%', alignItems: 'center' }}>
                <Text style={STYLES.fontSize10_whiteFFFFFF_Archivo_Regular}>🖱 Design ui/ux and Photography 📷 Zihuatanejo, Mexico</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: '7%' }}>
                <View style={{
                    flexDirection: 'row'
                    , justifyContent: "space-between",
                    width: '90%',
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
                        <Button icon="plus" style={{
                            borderRadius: 40,
                            backgroundColor: COLORS.green0DC1A7,
                            width: "100%"
                        }}
                            labelStyle={[STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                            { color: COLORS.whiteFFFFFF }]}
                            mode="contained"
                            onPress={() => console.log('Pressed')}>
                            Follow
                        </Button>
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



        </SafeAreaView >

    );
};

export default FollowUsername;