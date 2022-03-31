// import React from 'react';
// import PropTypes from 'prop-types';
// import { SafeAreaView } from 'react-native';
// import { Text, TouchableRipple } from 'react-native-paper';
// import SplashScreen from 'react-native-splash-screen';
// import SoundPlayer from 'react-native-sound-player'
// import AudioRecord from 'react-native-audio-record';
// const Abc2 = props => {
//     SplashScreen.hide()
//     const options = {
//         sampleRate: 44100, //16000,  // default 44100
//         channels: 1,        // 1 or 2, default 1
//         bitsPerSample: 16,  // 8 or 16, default 16
//         audioSource: 6,     // android only (see below)
//         wavFile: 'test.wav' // default 'audio.wav'
//     };

//     const checkMicrophone = async () => {
//         const result = await PermissionsAndroid.check(
//             PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         );
//         console.log(result)
//         return result;
//     };

//     return (
//         <SafeAreaView>
//             <TouchableRipple style={{ marginBottom: '5%' }}

//                 onPress={async () => {
//                     // setStateVoice(false)
//                     console.log('a')
//                     let audioFile = await AudioRecord.stop();


//                 }}>
//                 <Text>sound record</Text>
//             </TouchableRipple>
//             <TouchableRipple onPress={async () => {
//                 checkMicrophone()
//                 AudioRecord.init(options);

//                 // const res = await checkMicrophonePermissions();
//                 // AudioRecord.start()
//                 AudioRecord.start();
//                 // let        recorder = new AudioRecord(MediaRecorder.AudioSource.VOICE_CALL,
//                 //             44100, AudioFormat.CHANNEL_IN_MONO,
//                 //             AudioFormat.ENCODING_PCM_16BIT, AudioRecord.getMinBufferSize(44100, AudioFormat.CHANNEL_IN_MONO, AudioFormat.ENCODING_PCM_16BIT));
//                 //         recorder.startRecording();
//                 //         console.log('b')
//                 // setStateVoice(true)
//             }}>
//                 <Text>sound record</Text>
//             </TouchableRipple>
//         </SafeAreaView>
//     );
// };

// Abc2.propTypes = {

// };

// export default Abc2;