import React, { useState, useEffect } from 'react';

import { Image, View, TextInput, Text } from 'react-native';


import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

const TextInput1 = (props) => {
    return (
        <>
            <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{props.text1}</Text>
            <View style={{
                borderBottomWidth: 1, borderBottomColor: COLORS.whiteFFFFFF,
                flexDirection: 'row', alignItems: 'center'
            }} >
                <SvgXml xml={props.xml} style={{ marginRight: '7%' }} />
                <TextInput //placeholder={props.text2}
                //    placeholderTextColor={COLORS.whiteFFFFFF}
                    secureTextEntry={props.secureTextEntry}
                    onChangeText={props.onChangeText}
                    style={[STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]} />
            </View>
        </>
    );
};

export default TextInput1;