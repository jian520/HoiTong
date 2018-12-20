import React from "react";
import {

    InteractionManager,


} from 'react-native'
import {NavigationActions} from 'react-navigation'
import Setup from "./src/boot/setup";
//import SplashScreen from "rn-splash-screen";

export default class App extends React.Component {

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen

        // this.timer = setTimeout(() => {
        //     InteractionManager.runAfterInteractions(() => {
        //         SplashScreen.hide()
        //
        //     });
        // }, 2000);

    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return <Setup/>;


    }
}
