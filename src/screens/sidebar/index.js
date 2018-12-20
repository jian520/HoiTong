import React, {Component} from "react";
import {Image, Alert, DeviceEventEmitter, Linking} from "react-native";

import {

    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge,
    Button,
    View,
    StyleProvider,
    getTheme,
    variables,Body

} from "native-base";
import {Grid, Col} from "react-native-easy-grid";
import service from "../../network/Service";
import common from '../../common/common'


import styles from "./style";
// import RNRestart from 'react-native-restart';
const datas = [
    {
        name: "預約服務",
        route: "ServiceStepOne",

    },
    {
        name: "我的預約",
        route: "OrderList",

    },
    {
        name: "關於我們",
        route: "About",

    },
    {
        name: "收費表",
        route: "Price",

    },
    {
        name: "常見問題",
        route: "FAQ",

    },
    {
        name: "條款及細則",
        route: "Terms",

    },

    //
    // {
    //     name: "分享給朋友",
    //     route: "Footer",
    //
    // },

];

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isLogin: false,
            user: {}
        };
    }


    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('DidLogin', (value) => {
            console.log("DidLogin")

            this.setState({
                isLogin: value
            });


        })

    }

    componentWillUnmount() {
        // 移除
        this.subscription.remove();
    }


    componentWillMount() {
        service.getUserFromCache()
            .then((user) => {
                console.log("getUserFromCache" + user.name)
                this.setState({
                    user: user
                });

                if (user.name.length > 0) {
                    this.setState({
                        isLogin: true
                    });

                } else {
                    this.setState({
                        isLogin: false
                    });

                }
            });
    }

    logout() {
        this.setState({
            isLogin: false
        });

        service.logout()

        console.log("logout")

    }

    callMe() {

        function callMe() {
            return Linking.openURL('tel:21750222')
        }

    }

    //拨打电话
    linking = (url) => {

        console.log(url);

        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));

    }


    renderLogined() {

        if (this.state.isLogin) {


            return (<Grid style={styles.grid}>

                    <Col size={1.5}>
                        <Button transparent onPress={() => Alert.alert(
                            '',
                            '您確定要退出?',
                            [
                                {text: '取消', onPress: () => console.log('Cancel Pressed!')},
                                {text: '確定', onPress: () => this.logout()},
                            ]
                        )}>
                            <Text>您好：{this.state.user.name} 登出</Text>
                        </Button>
                    </Col>
                    <Col>

                        <Button iconLeft transparent onPress={() => this.linking('tel:21750222')}>
                            {/*<Icon active name="beer"/>*/}
                            <Text>21750222</Text>
                        </Button>

                    </Col>
                </Grid>
            );

        } else {
            return (<Grid style={styles.grid}>

                    <Col size={1}>
                        <Button transparent onPress={() => this.props.navigation.navigate("Login", {entry: 'side'})}>
                            <Text>登入</Text>
                        </Button>
                    </Col>
                    <Col size={1}>
                        <Button transparent onPress={() => this.props.navigation.navigate("Register")}>
                            <Text>註冊</Text>
                        </Button>
                    </Col>
                    <Col size={2}>

                        <Button iconLeft transparent onPress={() => this.linking('tel:21750222')}>
                            {/*<Icon active name="beer"/>*/}
                            <Text>21750222</Text>
                        </Button>

                    </Col>

                </Grid>
            );


        }

    }

    pushTo(route) {
        if (route == 'OrderList') {

            service.getUserFromCache()
                .then((user) => {

                    if (user.name.length > 0) {
                        this.props.navigation.navigate(route)

                    } else {
                        this.props.navigation.navigate("Login", {entry: 'side'})

                    }
                });

        } else {
            this.props.navigation.navigate(route)
        }

    }


    render() {
        return (

            <Container>
                <Content  style={{flex: 1, backgroundColor: "#fff"}}>
                    <View style={styles.drawerCover}>
                        <Image square style={styles.drawerImage} source={require("../../../assets/logo.png")}/>
                        {this.renderLogined()}

                    </View>
                    <List style={styles.list}
                          dataArray={datas}
                          renderRow={data =>
                              <ListItem style={{backgroundColor: common.colorA}}
                                        noBorder onPress={() => this.pushTo(data.route)}>

                                  <Text style={styles.text}>
                                      {data.name}
                                  </Text>

                              </ListItem>}
                    />


                    <ListItem itemDivider noBorder style={{backgroundColor: common.colorA}}>
                        <Text style={{  color: "#fff"}}>公司地址:</Text>
                    </ListItem>

                    <ListItem itemDivider style={{backgroundColor: common.colorA}}>
                        <Body>
                        <Text style={styles.text2}>Block A, 2/F </Text>
                        <Text style={styles.text2}>Well Town Industrial Building </Text>
                        <Text style={styles.text2}>No 13, Ko Fai Road </Text>
                        <Text style={styles.text2}>Yau Tong </Text>
                        </Body>

                    </ListItem>


                    <ListItem itemDivider   style={{backgroundColor: common.colorA}}>
                        <Text  style={{  color: "#fff"}}>客戶服務:</Text>
                    </ListItem>

                    <ListItem itemDivider style={{backgroundColor: common.colorA}}>
                        <Body>
                        <Text style={styles.text2}>星期一至六，上午九時至晚上六時</Text>
                        <Text style={styles.text2}>送貨及收件時間:</Text>
                        <Text style={styles.text2}>星期一至六 上午九時至下午五時</Text>
                        <Text style={styles.text2}>*星期日及公眾假期休息</Text>
                        </Body>

                    </ListItem>




                </Content>
            </Container>
        );
    }
}

export default SideBar;
