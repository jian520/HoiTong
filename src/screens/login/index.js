import React, {Component} from "react";
import {AsyncStorage, DeviceEventEmitter, Image, StatusBar} from "react-native";

import {
    Container,
    Content,
    Item,
    Input,
    Button,
    Icon,
    View,
    Text,
    Form,
    Header,
    Left,
    Body, Title, Right, Toast, Spinner,Separator
} from "native-base";


import styles from "./styles";
import service from "../../network/Service";

// var Spinner = require('react-native-spinkit');
import common from "../../common/common";


export default class Login extends Component {
    static propTypes = {
        // setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            logining: false,

        };

    }

    componentWillMount() {

        AsyncStorage.getItem("email")
            .then((result) => {
                if (result) {
                    this.setState({
                        email: result,
                    });
                }
            }).catch(err => {
            console.log('email err is: ' + err);
        });

        AsyncStorage.getItem("password")
            .then((result) => {
                if (result) {
                    this.setState({
                        password: result,
                    });
                }
            }).catch(err => {
            console.log('email err is: ' + err);
        });

    }


    login() {





        var email = this.state.email;
        var password = this.state.password;
        // email = '504822765@qq.com'
        // password = '123456'
        if (!this.isEmail(email)) {
            alert("請輸入正確的郵件格式");
            return;
        }

        if (!this.checkPassword(password)) {
            alert("密碼不能小於8個字符");
            return;
        }

        this.setState({
            logining: true,

        });

        service.loginSystem(email, password)
            .then((wrapData) => {

                this.setState({
                    logining: false,

                });
                if (!wrapData.status) {
                    Toast.show({
                        text: wrapData.msg
                    })
                } else {
                    this.props.navigation.goBack()
                    // this.props.navigation.navigate("DrawerOpen")
                    DeviceEventEmitter.emit('DidLogin',  true);
                }


            }).then((items) => {

        }).catch((error) => {
            console.log(error);
            //
            this.setState({
                logining: false,

            });

        })


    }

    isEmail(str) {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        return reg.test(str);
    }


    checkPassword(code) {
        return code && code.length >=6;
    }

    leftButton() {

        let entry = this.props.navigation.state.params.entry

        if (entry == 'entry') {
            return(
                <Button
                    transparent
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Icon name="arrow-back" style={{color:"#FFF"}}/>
                </Button>
            )
        } else {


            return(
                <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" style={{color: "#fff"}}/>
                </Button>
            )
        }

    }

    render() {

        if (this.state.isLoading) {
            return ( <Container><View></View>  </Container>);

        }
        return (
            <Container>
                <StatusBar barStyle={'light-content'}/>
                <View style={styles.container}>
                    <Header>
                        <Left>
                            {this.leftButton()}
                        </Left>
                        <Body>
                        <Title>登錄</Title>
                        </Body>
                        <Right>

                            <Button transparent onPress={() =>this.props.navigation.navigate("Register")}>
                                <Title>註冊</Title>
                            </Button>


                        </Right>

                    </Header>

                    <Content padder>

                        {/*<Image source={require("../../../assets/boxtify_box.png")} style={{width:100}}/>*/}
                    <View style={{  alignSelf: 'center',}}>
                        {/*<Image style={{ width: 210,   height: 75, marginTop:20,   resizeMode: "cover"}} square source={require("../../../assets/logo.png")}  />*/}
                        </View>
                        <Form
                            style={styles.form}
                        >

                                <Item rounded>

                                    <Input  placeholder={"電郵地址"} value={this.state.email}  keyboardType ='email-address'
                                           onChangeText={(text) => this.setState({email: text})}/>

                                </Item>
                                 <Separator style={{backgroundColor: "#FFF", height: 20}}/>


                                <Item rounded>

                                    <Input   placeholder={"密碼"}  value={this.state.password}   secureTextEntry={true}
                                           onChangeText={(text) => this.setState({password: text})}/>
                                </Item>


                        </Form>
                        <Spinner
                            style={{position: "absolute",alignSelf: 'center'}}
                            animating={this.state.logining} size="large" color="red"/>

                        <Button block rounded
                                style={styles.btn}
                                onPress={() => this.login()}
                        >
                            <Text>登錄</Text>
                        </Button>
                        {/*<Button  block rounded*/}
                                 {/*style={styles.btnReg}*/}
                                {/*onPress={() => this.props.navigation.navigate("Register")}*/}
                        {/*>*/}
                            {/*<Text style={styles.txt}>註冊</Text>*/}
                        {/*</Button>*/}

                    </Content>
                </View>
            </Container>
        );
    }


}

