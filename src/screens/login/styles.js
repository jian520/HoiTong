

import common from '../../common/common'
export default {
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
    },
    shadow: {
        alignSelf: 'center',
        top: 20,

        resizeMode: "cover"
    },
    bg: {
        flex: 1,
        marginTop:common.deviceHeight / 5,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        bottom: 0,
    },
    input: {
        // marginBottom: 20,
        height: 40,
    },
    form: {
        paddingTop: 20,
        width: common.deviceWidth - 120,
        marginTop: 20,
        alignSelf: 'center',


    },

    item: {
        borderColor: "#8F9294",
        borderWidth: 1,
        borderRadius: 5,

        paddingLeft: 10,
        marginBottom: 10,
    },
    btn: {

        width: common.deviceWidth - 120,
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: "#2EB5AC",
    },
    btnReg: {
        borderColor: "#2EB5AC",
        backgroundColor: "#FFF",
        width: common.deviceWidth - 120,
        marginTop: 20,
        alignSelf: 'center',


    },

    txt: {
        width: common.deviceWidth - 120,
        textAlign: "center",
        color: "#2EB5AC",

    },
};
