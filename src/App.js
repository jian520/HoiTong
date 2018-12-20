import React from "react";
import {Root} from "native-base";
import {StackNavigator, DrawerNavigator} from "react-navigation";

import SideBar from "./screens/sidebar";
import Home from "./screens/home";
import Login from "./screens/login/";
import Register from "./screens/login/register";
import OrderList from "./screens/myorder";
import OrderDetail from "./screens/myorder/orderDetail";

import About from "./screens/about/";
import Price from "./screens/price/price"
import FAQ from "./screens/faq/faq";
import Terms from "./screens/about/terms";
import ServiceStepOne from "./screens/order/index";
import Product from "./screens/order/product";
import Plan from "./screens/order/plan";
import Moving from "./screens/order/moving";
import Schedule from "./screens/order/schedule";
import Overview from "./screens/order/overview";


const Drawer = DrawerNavigator(
    {
        Home: {screen: Home},
        Login: {screen: Login},

        ServiceStepOne: {screen: ServiceStepOne},
        OrderList: {screen: OrderList},

        About: {screen: About},
        Price: {screen: Price},
        FAQ: {screen: FAQ},
        Terms: {screen: Terms},


        Overview: {screen: Overview},
    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

const AppNavigator = StackNavigator(
    {
        Drawer: {screen: Drawer},

        Register: {screen: Register},
        Product: {screen: Product},
        Plan: {screen: Plan},
        Moving: {screen: Moving},

        Schedule: {screen: Schedule},
        Overview: {screen: Overview},
        Login2: {screen: Login},
        OrderDetail: {screen: OrderDetail},

    },
    {
        initialRouteName: "Drawer",
        headerMode: "none"
    }
);

export default () =>
    <Root>
        <AppNavigator/>
    </Root>;
