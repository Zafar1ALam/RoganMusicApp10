import React, { useState, useEffect } from 'react';

import { Image, View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES';
import Svgs from '../utilities/svgs/Svgs';
import SplashScreen from 'react-native-splash-screen'
const Splash = ({ navigation }) => {
    const [stateIsVisible, setStateIsVisible] = useState(true)




    useEffect(() => {
        {
            if (!stateIsVisible) {
                // navigation.navigate("SignIn")
                // getMyObject()
            }
            else {
                setTimeout(() => {
                    setStateIsVisible(false)
                    SplashScreen.hide();
                }
                    , 4000);
            }
        }

    }, [stateIsVisible])

    return (
        <View style={STYLES.withoutpaddingcontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <SvgXml xml={Svgs.splashLogo} />

            </View>

        </View>
    );
};

Splash.propTypes = {

};

export default Splash;