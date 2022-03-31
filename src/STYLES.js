import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Dimensions } from "react-native";
import COLORS from './utilities/colors/Color';



const STYLES = StyleSheet.create({


    container: {
        flex: 1,

        width: Dimensions.get('window').width,

        height: Dimensions.get('window').height,
        paddingHorizontal: '5%',
        //  height: '100%',
        backgroundColor: COLORS.black000000
        // backgroundColor: 'red'
    },
    withoutpaddingcontainer: {
        flex: 1, width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS.black000000
    },
    // fontSize25_000000_Roboto_Regular_38: {
    //     fontSize: 30,
    //     fontFamily: 'Roboto-Regular',
    //     //color: '#1C1A1A'
    //     // color: COLORS.black000000_38
    // },//
    fontSize36_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 36,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize27_whiteFFFFFF_Arial_Bold: {
        fontSize: 27,
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: COLORS.whiteFFFFFF,

    },
    fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 26,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize25_whiteFFFFFF_Archivo_Bold: {
        fontSize: 25,
        fontFamily: 'Archivo-Bold',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 21,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize21_whiteFFFFFF_Archivo_Bold: {
        fontSize: 21,
        fontFamily: 'Archivo-Bold',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize20_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 20,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },

    fontSize20_whiteFFFFFF_Archivo_Bold: {
        fontSize: 20,
        fontFamily: 'Archivo-Bold',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize20_whiteFFFFFF_MADE_TOMMY_Bold_PERSONAL_USE: {
        fontSize: 20,
        fontFamily: 'MADE TOMMY Bold_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize18_green18D287_MADE_TOMMY_Medium_PERSONAL_USE_Medium: {
        fontSize: 18,
        fontFamily: 'MADE TOMMY Medium_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.green18D287,

    },
    fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 18,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize18_whiteFFFFFF_Nunito_Bold: {
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 16,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize16_green0DC1A7_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 16,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.green0DC1A7,

    },//

    fontSize15_whiteFFFFFF_Archivo_Bold: {
        fontSize: 15,
        fontFamily: 'Archivo-Bold',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize14_whiteD5D5D5_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 14,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteD5D5D5,

    },
    fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 12,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },

    fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 14,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        //color: COLORS.whiteFFFFFF,

    },
    fontSize14_greyD2D2D2_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 14,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.greyD2D2D2,

    },
    fontSize12_whiteFFFFFF_55_Nunito_Bold: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF_55,

    },
    fontSize12_whiteFFFFFF_Nunito_Bold: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize12_green0DC1A7_Nunito_Bold: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',
        //fontWeight: "4",
        color: COLORS.green0DC1A7,

    },
    fontSize12_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 12,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.grey99999F,

    },
    fontSize10_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 10,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize10_whiteFFFFFF_Archivo_Regular: {
        fontSize: 10,
        fontFamily: 'Archivo-Regular',
        //fontWeight: "4",
        color: COLORS.whiteFFFFFF,

    },
    fontSize10_whiteFFFFFF_Archivo_Regular: {
        fontSize: 10,
        fontFamily: 'Arial',
        //fontWeight: "4",
        fontWeight: "400",
        color: COLORS.whiteFFFFFF,

    },
    fontSize10_greyA3A3A3_Archivo_Regular: {
        fontSize: 10,
        fontFamily: 'Archivo-Regular',
        //fontWeight: "4",
        color: COLORS.greyA3A3A3,

    },



});

export default STYLES;