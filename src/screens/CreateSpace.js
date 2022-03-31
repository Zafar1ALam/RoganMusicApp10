
import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableRipple, Text, Modal, Appbar, TextInput, } from 'react-native-paper';
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
import AntDesign from 'react-native-vector-icons/AntDesign'
const CreateSpace = ({ navigation }) => {
    SplashScreen.hide()

    const refRBSheetAddMembersFollowing = useRef()



    const [stateIsValidUploadMusic, setStateIsValidUploadMusic] = useState(true);
    const [stateIsValidUploadCover, setStateIsValidUploadCover] = useState(true);
    const [stateIsValidAddTitle, setStateIsValidAddTitle] = useState(true);

    const [stateIsValidSelectDescription, setStateIsValidSelectDescription] = useState(true);
    const [stateIsValidAddMembers, setStateIsValidAddMembers] = useState(true)
    const [stateSongPause, setStateSongPause] = useState("play")
    const [stateData, setStataData] = useState({
        uploadMusic: '',
        uploadCover: '',
        addTitle: '',
        description: '',
        addMembers: []
    }
    )
    const [stateDummy, setStateDummy] = useState(false)

    const [stateListAddMembersFollowing, setStateListAddMambersFollowing] = useState([
        {
            id: 1,
            name: "Rebel Rebel - David Bowie",
            checked: false
        },
        {
            id: 2,
            name: "Rebel Rebel - David Bowie",
            checked: false
        },
        {
            id: 3,
            name: "Rebel Rebel - David Bowie",

            checked: false
        },
        {
            id: 4,
            name: "Rebel Rebel - David Bowie",

            checked: false
        },
        {
            id: 5,
            name: "Rebel Rebel - David Bowie",

            checked: false
        },
        {
            id: 6,
            name: "Rebel Rebel - David Bowie",
            checked: false
        },
        {
            id: 7,
            name: "Rebel Rebel - David Bowie",
            checked: false
        },
        {
            id: 8,
            name: "Rebel Rebel - David Bowie",

            checked: false
        },
        {
            id: 9,
            name: "Rebel Rebel - David Bowie",

            checked: false
        },
        {
            id: 10,
            name: "Rebel Rebel - David Bowie",

            checked: false
        }

    ]);

    const imageTakeFromGallery = () => {

        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateIsValidUploadCover(true)
            setStataData({ ...stateData, uploadCover: image.path })
        });
    }


    const uploadMusic = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.audio],
                //There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
            });
            //Printing the log realted to the file
            console.log('res : ' + JSON.stringify(res[0].uri));

            setStataData({
                ...stateData,
                uploadMusic: JSON.stringify(res[0].uri)
            })
            //Setting the state to show single file attributes
            //  setSingleFile(res);
        } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                alert('Canceled from single doc picker');
            } else {
                //For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    }
    const create = () => {



        if (stateData.uploadMusic == '') {
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
            setStateIsValidSelectDescription(false)
        }
        if (stateData.addMembers.length == 0) {

            //  console.log(stateData.password + 'password')
            setStateIsValidAddMembers(false)
        }
        if (stateData.addTitle != '' && stateData.uploadCover != ''
            && stateData.description != ''
            && stateData.uploadMusic != '') {
            Alert.alert("All Valid Data")
        }


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
                        onPress={() => navigation.goBack()} />
                    <Appbar.Content title="CREATE SPACE "
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
                            DocumentPicker.types.audio
                        }}>
                            <>
                                <SvgXml xml={Svgs.uploadIcon} style={{ marginRight: "5%" }} />
                                <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Upload Music</Text>
                            </>
                        </TouchableRipple>

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





                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Description</Text>
                    <TextInput style={{
                        //height: 140,
                        textAlignVertical: 'top',
                        //backgroundColor: "red"

                    }} multiline={true}
                        numberOfLines={3}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidSelectDescription(true)
                            setStataData({
                                ...stateData, description: text
                            })
                        }} />
                    {stateIsValidSelectDescription == false ? <Text style={{ color: 'red' }}>Enter Valid Description</Text> : null}
                </View>


                <View style={{ marginHorizontal: '5%', marginTop: '10%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Add Members from Following</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.whiteFFFFFF,
                        paddingVertical: '2%'
                    }}>
                        <Text style={{
                            // height: 40,
                            flex: 1
                        }}

                        >{stateData.addMembers}</Text>
                        <SvgXml xml={Svgs.circlePlusPurple}
                            onPress={() => {
                                setStataData({
                                    ...stateData,
                                    addMembers: []
                                })
                                refRBSheetAddMembersFollowing.current.open()

                            }} />
                    </View>
                    {stateIsValidAddMembers == false ? <Text style={{ color: 'red' }}>Enter Valid Members</Text> : null}
                </View>

                <View style={{
                    marginHorizontal: '5%', marginTop: '15%',
                    marginBottom: '15%', //backgroundColor: 'red',


                }}>
                    <Button1 text="CREATE"
                        onPress={() => { create() }}
                    />
                </View>

                {/* Bottom sheet My Following */}
                <RBSheet
                    closeOnPressMask={false}
                    //  closeOnDragDown={false}
                    //  closeOnDragDown={true}
                    dragFromTopOnly={false}
                    height={520}
                    animationType="slide"
                    ref={refRBSheetAddMembersFollowing}
                    closeOnDragDown={true}
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
                                MY FOLLOWING</Text>

                            <TouchableRipple
                                onPress={() => refRBSheetAddMembersFollowing.current.close()}

                                style={{


                                }}>
                                <SvgXml xml={Svgs.cross} />
                            </TouchableRipple>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={{
                                flex: 1, //backgroundColor: 'green',
                                marginVertical: '3%',
                                paddingHorizontal: '2%',
                                justifyContent: 'space-between'
                            }}>
                                {stateListAddMembersFollowing.map((item, index) => {
                                    return (
                                        <View key={index}
                                            style={{
                                                // backgroundColor: COLORS.whiteFFFFFF,
                                                // paddingVertical: '4%',
                                                backgroundColor: COLORS.black000000,
                                                paddingVertical: '2%',

                                                borderBottomWidth: 1,
                                                borderBottomColor: COLORS.whiteFFFFFF_21
                                                // borderBottomWidth: 1,
                                                // borderBottomColor: COLORS.black000000_20

                                            }}>
                                            <TouchableRipple

                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginBottom: '3%'
                                                }}
                                                onPress={() => {
                                                    if (item.checked == false) {
                                                        item.checked = true
                                                            , setStateDummy(!stateDummy)
                                                    }
                                                    else if (item) {
                                                        item.checked = false
                                                            , setStateDummy(!stateDummy)
                                                    }
                                                    // setStataData({
                                                    //     ...stateData,
                                                    // })
                                                    // stateData.addMembers.push(item.name)
                                                }
                                                }>
                                                <>
                                                    <SvgXml xml={item.checked ? Svgs.checkCheckBox
                                                        : Svgs.uncheckCheckBox}
                                                        style={{ marginRight: '5%' }} />
                                                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.name}</Text>
                                                </>
                                            </TouchableRipple>

                                        </View>
                                    )
                                })}
                                <View style={{ marginVertical: "3%" }}>
                                    <Button1 text="SELECT"
                                        onPress={() => {

                                            stateListAddMembersFollowing.forEach((item) => {
                                                if (item.checked) {
                                                    stateData.addMembers.push(item.name + ", ")
                                                }
                                            })
                                            setStateIsValidAddMembers(true)
                                            setStateDummy(!stateDummy)
                                            console.log(stateData.addMembers)

                                            refRBSheetAddMembersFollowing.current.close()
                                        }} />
                                </View>

                            </View>
                        </ScrollView>

                    </View>
                </RBSheet>



            </ScrollView>
        </SafeAreaView >
    );
};


export default CreateSpace;