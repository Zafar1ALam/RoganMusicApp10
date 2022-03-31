import React from 'react';

import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MySpace from '../screens/MySpace';
import Chat from '../screens/Chat';
import Account from '../screens/Account';
import { Text } from 'react-native-paper';
import STYLES from '../STYLES';
import { View } from 'react-native';
import COLORS from '../utilities/colors/Color';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import TabProfile from '../screens/TabProfile';
import CircleUsernameHere from '../screens/CircleUsernameHere';
import Podcast from '../screens/Podcast';
import Feather from 'react-native-vector-icons/Feather'
const Tab = createBottomTabNavigator();
const TabNavigation1 = ({ route }) => {
    SplashScreen.hide()
    // const { routeImage,
    //     routeUserName,
    //     routeBio } = route.params;
    return (
        <View style={{
            flex: 1,// backgroundColor: COLORS.black000000
        }}>

            <Tab.Navigator
                //    initialRouteName='HomeHomeSearch'
                screenOptions={{
                    headerShown: false,
                    // tabBarBackground: COLORS.black000000
                    tabBarStyle: {
                        backgroundColor: COLORS.black171717,
                        //backgroundColor: 'red'
                        //     height: 60,
                        //backgroundColor: 'red',
                        //     // paddingVertical: 25
                        paddingBottom: 5,
                        //     paddingHorizontal: '3%',
                        //     paddingTop: 10,
                        //     //    borderColor: COLORS.cylindricalFA4248,
                        //     borderTopWidth: 2,
                        //     borderTopColor: COLORS.cylindricalFA4248,
                        //     borderRightWidth: 2,
                        //     borderRightColor: COLORS.cylindricalFA4248,
                        //     borderLeftWidth: 2,
                        //     borderLeftColor: COLORS.cylindricalFA4248,
                        //     marginTop: 20

                    },

                }}>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarLabel: ({ focused }) => {
                            if (focused) {
                                return (
                                    <Text style={STYLES.fontSize12_green0DC1A7_Nunito_Bold}>Home</Text>
                                )
                            } else {
                                return (
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_Nunito_Bold}>Home</Text>
                                )
                            }
                        },

                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <SvgXml xml={Svgs.greenHome} />
                                )
                            }
                            else {
                                return (
                                    <SvgXml xml={Svgs.home}
                                    />
                                )
                            }

                        }
                    }} />
                <Tab.Screen name="MySpace" component={MySpace}
                    options={{
                        tabBarLabel: ({ focused }) => {
                            if (focused) {
                                return (
                                    <Text style={STYLES.fontSize12_green0DC1A7_Nunito_Bold}>My Space</Text>
                                )
                            } else {
                                return (
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_Nunito_Bold}>My Space</Text>
                                )
                            }
                        },
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <SvgXml xml={Svgs.greenMySpace} />
                                )
                            }
                            else {
                                return (
                                    <SvgXml xml={Svgs.mySpace}
                                    />
                                )
                            }

                        }
                    }} />


                <Tab.Screen name="Podcast" component={Podcast}
                    options={{
                        tabBarLabel: ({ focused }) => {
                            if (focused) {
                                return (
                                    <Text style={STYLES.fontSize12_green0DC1A7_Nunito_Bold}>PodCast</Text>
                                )
                            } else {
                                return (
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_Nunito_Bold}>PodCast</Text>
                                )
                            }
                        },
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <Feather name="radio" color={COLORS.green0DC1A7} size={25} />
                                )
                            }
                            else {
                                return (
                                    <Feather name="radio" color={COLORS.whiteFFFFFF} size={25} />

                                )
                            }

                        }
                    }} />

                <Tab.Screen name="Chat" component={Chat}
                    options={{
                        tabBarLabel: ({ focused }) => {
                            if (focused) {
                                return (
                                    <Text style={STYLES.fontSize12_green0DC1A7_Nunito_Bold}>Chat</Text>
                                )
                            } else {
                                return (
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_Nunito_Bold}>Chat</Text>
                                )
                            }
                        },
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <SvgXml xml={Svgs.greenChat} />
                                )
                            }
                            else {
                                return (
                                    <SvgXml xml={Svgs.chat}
                                    />
                                )
                            }

                        }
                    }} />
                <Tab.Screen name="CircleUsernameHere" component={CircleUsernameHere}
                    // initialParams={{
                    //     routeImage,
                    //     routeUserName,
                    //     routeBio
                    // }}
                    options={{
                        tabBarLabel: ({ focused }) => {
                            if (focused) {
                                return (
                                    <Text style={STYLES.fontSize12_green0DC1A7_Nunito_Bold}>Profile</Text>
                                )
                            } else {
                                return (
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_Nunito_Bold}>Profile</Text>
                                )
                            }
                        },
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <SvgXml xml={Svgs.greenProfile} />
                                )
                            }
                            else {
                                return (
                                    <SvgXml xml={Svgs.profile}
                                    />
                                )
                            }

                        }
                    }} />



            </Tab.Navigator>
        </View>

    );
};

export default TabNavigation1;