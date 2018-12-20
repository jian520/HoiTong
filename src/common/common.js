import color from "color";
import {Platform, Dimensions, PixelRatio} from "react-native";
import {
    Toast,
} from "native-base";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

var API_ADDRESS = 'http://boxtify.com.hk'


function toast(msg) {
    Toast.show({
        text: msg,
    })
    return
}



export default {
    deviceHeight: deviceHeight,
    deviceWidth: deviceWidth,
    colorA: "#2EB5AC",
    colorB: "#949494",
    colorC: "#ff5722",
    appid:   '1q2w3e4r'  ,
    secret:   '1q2w3e4r'  ,
    url: API_ADDRESS ,
    apiurl: API_ADDRESS + '/api/router',
    toast ,
};


