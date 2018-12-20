import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('HoiTong', () => App);
//react-native bundle --entry-file index.js --platform ios --dev false --bundle-output release_ios/main.jsbundle --assets-dest release_ios/
//cd android && ./gradlew assembleRelease
