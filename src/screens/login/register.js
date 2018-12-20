import React, {Component} from "react";
import {DeviceEventEmitter, Image, StatusBar} from "react-native";

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
    Body, Title, Right, Toast, Spinner, Separator
} from "native-base";


import styles from "./styles";
import service from "../../network/Service";


export default class Register extends Component {
    static propTypes = {
        // setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",

            logining: false,

        };

    }

    reg() {

        var name = this.state.name;
        var email = this.state.email;
        var password = this.state.password;
        var confirmPassword = this.state.confirmPassword;
        // name = 'jian2'
        // email = '504822766@qq.com'
        // password = '12345678'
        // confirmPassword = '12345678'

        if (!this.checkName(name)) {
            alert("請輸入2位數以上名稱");
            return;
        }

        if (!this.isEmail(email)) {
            alert("請輸入正確的郵件格式");
            return;
        }

        if (!this.checkPassword(password)) {
            alert("請輸入8位數以上的密碼");
            return;
        }

        if (!this.checkConfirmPassword(password, confirmPassword)) {
            alert("兩次輸入的密碼不同");
            return;
        }


        this.setState({
            logining: true,

        });

        service.regSystem(name, email, password, confirmPassword)
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
                    DeviceEventEmitter.emit('DidLogin', true);
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

    checkName(name) {
        return name && name.length >=2;
    }

    isEmail(str) {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        return reg.test(str);
    }

    checkPassword(password) {
        return password && password.length >= 8;
    }

    checkConfirmPassword(pwd1, pwd2) {

        return pwd1 === pwd2;
    }

    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <View style={styles.container}>
                    <Header>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name="arrow-back" style={{color: "#FFF"}}/>
                            </Button>
                        </Left>
                        <Body>
                        <Title>註冊</Title>
                        </Body>
                        <Right/>

                    </Header>

                    <Content>


                        <Form style={styles.form}>

                            <Item rounded>
                                <Input style={styles.input} placeholder={"姓名"}
                                       onChangeText={(text) => this.setState({name: text})}/>
                            </Item>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>
                            <Item rounded>
                                <Input style={styles.input} placeholder={"電郵地址"} keyboardType='email-address'
                                       onChangeText={(text) => this.setState({email: text})}/>
                            </Item>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>
                            <Item rounded>

                                <Input style={styles.input} placeholder={"密碼"} secureTextEntry={true}
                                       onChangeText={(text) => this.setState({password: text})}/>
                            </Item>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>
                            <Item rounded>

                                <Input style={styles.input} placeholder={"確認密碼"} secureTextEntry={true}
                                       onChangeText={(text) => this.setState({confirmPassword: text})}/>
                            </Item>


                        </Form>
                        <Spinner
                            style={{position: "absolute", alignSelf: 'center'}}
                            animating={this.state.logining} size="large" color="red"/>
                        <Button block rounded
                                style={styles.btn}
                                onPress={() => this.reg()}
                        >
                            <Text>註冊</Text>
                        </Button>


                    </Content>
                </View>
            </Container>
        );
    }


}
