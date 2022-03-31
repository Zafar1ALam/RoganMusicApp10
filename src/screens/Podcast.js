
import PropTypes from 'prop-types';
import { SafeAreaView, View, Image } from 'react-native';
import { TouchableRipple, Text, Modal, ActivityIndicator } from 'react-native-paper';
import React, { useState } from 'react';

import Svgs from '../utilities/svgs/Svgs';
import { SvgXml } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import SoundPlayer from 'react-native-sound-player'
import BaseUrl, { url } from '../route/BaseUrl';
import RNFetchBlob from 'rn-fetch-blob';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

var whoosh;
const Podcast = props => {

    const [videoCall, setVideoCall] = useState(true);
    const [stateSound, setStateSound] = useState()
    const [stateVoice, setStateVoice] = useState(false)
    const [stateAudioPause, setStateAudioPause] = useState(true)
    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    const [stateHideButtonText, setStateHideButtonText] = useState(true)


    const onStartRecord = async () => {
        const result = await audioRecorderPlayer.startRecorder();

        console.log(result);
    };

    const onStopRecord = async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        setStateHideButtonText(false)
        console.log(result);
    };
    const onStartPlay = async () => {
        console.log('onStartPlay');
        const msg = await audioRecorderPlayer.startPlayer();
        console.log(msg);

    };
    const onPausePlay = async () => {
        await audioRecorderPlayer.pausePlayer();
    };

    // const options = {
    //     sampleRate: 16000,  // default 44100
    //     channels: 1,        // 1 or 2, default 1
    //     bitsPerSample: 16,  // 8 or 16, default 16
    //     audioSource: 6,     // android only (see below)
    //     wavFile: 'test.wav' // default 'audio.wav'
    // };



    // AudioRecord.init(options);
    // AudioRecord.on('data', data => {
    //     const chunk = Buffer.from(data, 'base64');
    //     console.log('chunk size', chunk.byteLength);
    //     // do something with audio chunk
    // })
    // const rtcProps = {
    //     appId: '246e5ffff71740ae9b4046bccbc3b4ef',
    //     channel: 'mtechub',

    //     token: '0069ac38503fdd34513996b24e5f9c28905IABA8Ne5qLvTJM+0PvYiRHIUxOT/Ygz/icRq5YKjeA1sagMKzygAAAAAEACvrbVs4go7YgEAAQDhCjti'
    // };
    // const callbacks = {
    //     EndCall: () => setVideoCall(false),
    //     videocam: () => { false }
    // };

    // var val = Math.floor(10000000 + Math.random() * 90000000);
    // const recordingSendServer = async (audioFile) => {
    //     console.log(audioFile)
    //     console.log('qqqqqqqqqqqqqqqqq')

    //     await RNFetchBlob.fetch(

    //         'POST', BaseUrl + 'music/demo.php',
    //         {
    //             Authorization: 'Bearer access-token',
    //             'Content-Type': 'multipart/form-data',
    //         },
    //         [
    //             {
    //                 name: 'music',
    //                 filename: val + '.mp3',
    //                 type: 'audio/mpeg',
    //                 data: RNFetchBlob.wrap(audioFile),
    //             }


    //         ]
    //     )

    //         .then(response => response.json())
    //         .then(response => {
    //             if (response[0].message) {
    //                 console.log(response)
    //                 console.log(response[0].message)
    //                 SoundPlayer.loadUrl(url + response[0].message)
    //                 setStateHideButtonText(false)
    //                 setStateActivityIndicator(false)
    //             }
    //         })
    // }
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <View style={{
                marginTop: '30%', alignSelf: 'center',
                height: '21%',// backgroundColor: 'red',
                width: '40%'
            }}>
                <Image
                    style={{ height: '100%', width: '100%', flex: 1 }}
                    source={require('../utilities/images/humanbeing1.png')} />
            </View>
            <View style={{
                //  backgroundColor: 'green',
                alignSelf: 'center',
                marginTop: '15%'
            }}>
                {stateVoice ?
                    <TouchableRipple onPress={async () => {
                        setStateVoice(false)
                        setStateHideButtonText(false)

                        onStopRecord()
                        console.log('a')
                        // let audioFile = await AudioRecord.stop();
                        // console.log(audioFile)
                        // console.log(typeof (audioFile))
                        // setStateActivityIndicator(true)
                        // recordingSendServer(audioFile)
                        // setStateSound(audioFile)
                        // AudioRecord.on('data', data => {
                        //   // base64-encoded audio data chunks
                        // });
                    }}>
                        <SvgXml xml={Svgs.microPhoneRed} />
                    </TouchableRipple> :
                    <TouchableRipple
                        onPress={() => {
                            onStartRecord()
                            // AudioRecord.start()
                            //   AudioRecord.start();
                            console.log('b')
                            setStateVoice(true)
                            setStateHideButtonText(true)
                            setStateAudioPause(true)
                        }}>
                        <FontAwesome5 name="microphone-alt-slash"
                            color={COLORS.red} size={70} />
                    </TouchableRipple>
                }

            </View>

            <View style={{ marginTop: '5%' }}>
                {/* {
                    stateActivitityIndicator ?
                        <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> :
                        <View>

                        </View>
                } */}
            </View>


            {stateHideButtonText ? null :
                <>

                    <View style={{ marginTop: '15%', alignItems: 'center' }}>
                        {stateAudioPause ?
                            <TouchableRipple
                                style={{
                                    paddingHorizontal: '4%',
                                    // paddingVertical: '4%'
                                }}
                                onPress={() => {
                                    onStartPlay()
                                    //  SoundPlayer.play()
                                    setStateAudioPause(false)

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
                                    //     SoundPlayer.pause()
                                    onPausePlay()
                                    setStateAudioPause(true)

                                }}>
                                <SvgXml xml={Svgs.audioPlayerPlay} />
                            </TouchableRipple>
                        }

                    </View>

                    <View style={{ marginTop: '10%', alignItems: 'center' }}>
                        <Text>Your Streaming will be generated </Text>
                    </View>
                </>}




            {/* <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks}>



            </AgoraUIKit> */}


            {/* <Text onPress={() => setVideoCall(true)}>Start Call</Text> */}
        </SafeAreaView>

    );
};

Podcast.propTypes = {

};

export default Podcast;