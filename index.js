/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorldApp from "./src/Basics/HelloWorldApp";
import Bananas from "./src/Props/Bananas";
import LotsOfGreetings from "./src/Props/LotsOfGreetings";
import BlinkApp from "./src/State/BlinkApp";

/**
 * 修改此处可以定义App启动时候首次加载的组件
 */
//AppRegistry.registerComponent(appName, () => App);
//Hello World
// AppRegistry.registerComponent(appName, () => HelloWorldApp);
//Props
// AppRegistry.registerComponent(appName, () => Bananas);
// AppRegistry.registerComponent(appName, () => LotsOfGreetings);
//State
AppRegistry.registerComponent(appName, () => BlinkApp);

