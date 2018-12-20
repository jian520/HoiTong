import React, {PureComponent} from "react";
import {Image, StyleSheet, StatusBar, DeviceEventEmitter} from "react-native";
import {
    Container,
    Content,
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body, Text, H2, View, H3, Form, Item, Input, CheckBox, ListItem,
    Card,
    CardItem, List, Toast, Spinner,Separator
} from "native-base";
import common from "../../common/common";

import styles from "./styles";
import Order from "../../entity/Order";
import service from "../../network/Service";
import stripe from 'tipsi-stripe'
import style from "../sidebar/style";

var order = Object.create(Order);


// stripe.init({
//     publishableKey:   'pk_live_Mp8wfNZkg83jPVj8Ty3hogdV',//'pk_test_IFKMUQNgAHHU0uUoPCq47Ip4', //,
//     merchantId: '<MERCHANT_ID>',
//     androidPayMode: 'test',
// })

// stripe.setOptions({
//     publishableKey: 'pk_live_Mp8wfNZkg83jPVj8Ty3hogdV',
//     merchantId: 'MERCHANT_ID', // Optional
//     androidPayMode: 'test', // Android only
// })



export default class Overview extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // checkbox1: false,
            // checkbox2: false,
            loading: false,
            userid: 0,
        };


        order = this.props.navigation.state.params.info
        console.log(order)
    }

    handleCardPayPress = async () => {
        if (this.state.userid == 0) {
            this.props.navigation.navigate("Login2", {entry: 'overview'})

        } else {

            try {
                this.setState({loading: true})
                const token = await stripe.paymentRequestWithCardForm({
                    // Only iOS support this options
                    smsAutofillDisabled: true,
                    // requiredBillingAddressFields: 'zip',
                    // prefilledInformation: {
                    //     billingAddress: {
                    //         name: 'zhang jian',
                    //         line1: 'china ',
                    //         line2: 'hubei',
                    //         city: 'whan',
                    //         state: 'Georgia',
                    //         country: 'CH',
                    //         postalCode: '31217',
                    //         email: '504822765@qq.com',
                    //     },
                    // },
                })
                console.log('token   ' + token.tokenId)
                this.submitOrder(token.tokenId)
                // this.setState({loading: false})


            } catch (error) {
                this.setState({loading: false})
            }

        }
    }


    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('DidLogin', (value) => {
            console.log("overview login")

            service.getUserFromCache()
                .then((user) => {
                    if (user) {
                        console.log("getUserFromCache" + user.name)
                        order.user_id = user.id
                        this.setState({userid: user.id})
                    }


                });

        })

    }

    componentWillUnmount() {
        // 移除
        this.subscription.remove();
    }


    //
    // toggleSwitch1() {
    //     this.setState({
    //         checkbox1: !this.state.checkbox1
    //     });
    // }
    //
    // toggleSwitch2() {
    //     this.setState({
    //         checkbox2: !this.state.checkbox2
    //     });
    // }


    componentWillMount() {
        service.getUserFromCache()
            .then((user) => {
                console.log("getUserFromCache" + user.name)
                order.user_id = user.id
                this.setState({userid: user.id})


            });
    }

    submitOrder(token) {
        this.setState({loading: true})

        service.submitOrder(order, token)
            .then((wrapData) => {

                console.log(wrapData)

                common.toast(wrapData.msg)
                if (wrapData.status) {
                    this.props.navigation.popToTop()
                }

                this.setState({loading: false})
            }).then((items) => {

        }).catch((error) => {
            console.log(error);
            this.setState({loading: false})
        })


    }

    buttonStatus() {

        if (!this.state.loading) {
            return (
                <Right>
                    <Button transparent
                        // onPress={() => this.submitOrder('123')}
                            onPress={this.handleCardPayPress}
                    >
                        <Title>提交</Title>
                    </Button>
                </Right>
            )
        }
        else {
            return (
                <Right>
                    <Button transparent>
                        <Title>提交</Title>
                    </Button>
                </Right>
            )
        }
    }

    render() {
        return (

            <Container>
                <StatusBar barStyle="light-content"/>
                <Header>
                    <Left>

                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: "#FFF"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>預約概覽</Title>
                    </Body>
                    {this.buttonStatus()}
                </Header>

                <Content padder>
                    <Spinner
                        style={{position: "absolute", alignSelf: 'center'}}
                        animating={this.state.loading} size="large" color={common.colorA}/>

                    <Title style={styles.headTitle}>請覆核預約資料</Title>


                    <Card style={[styles.mb,  { marginTop:20 }]}>
                        <CardItem>
                            <Left>
                                <Title style={{color: common.colorB}}>運送地址</Title>
                            </Left>
                            <Right>

                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text style={{color: common.colorB}}>{order.contact_name}</Text>
                            <Text style={{color: common.colorB}}>{order.contact_address}</Text>
                            <Text style={{color: common.colorB}}>{order.contact_region + order.contact_district}</Text>
                            <Text style={{color: common.colorB, marginTop: 10}}>聯絡電話: {order.contact_phone}</Text>
                            </Body>
                        </CardItem>
                    </Card>


                    <Card style={styles.mb}>
                        <CardItem>
                            <Left>
                                <Title style={{color: common.colorB}}>收取迷你箱準備入箱</Title>
                            </Left>
                            <Right>


                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>

                            <Text style={{color: common.colorB}}>{order.schedule_time}</Text>
                            <Text style={{color: common.colorB}}>{order.schedule_time_range}</Text>

                            </Body>
                        </CardItem>
                    </Card>


                    <Card style={styles.mb}>
                        <CardItem>
                            <Left>
                                <Title style={{color: common.colorB}}>收取物品並存倉</Title>
                            </Left>
                            <Right>


                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>

                            <Text style={{color: common.colorB}}>{order.pick_up_schedule_time}</Text>
                            <Text style={{color: common.colorB}}>{order.pick_up_schedule_time_range}</Text>

                            </Body>
                        </CardItem>
                    </Card>


                    <Card style={styles.mb}>
                        <CardItem>
                            <Title style={{color: common.colorB}}>儲存計劃</Title>
                        </CardItem>

                        <List
                            dataArray={order.service_items}
                            renderRow={data =>
                                <ListItem>
                                    <Left>
                                        <Text style={{color: common.colorB}}>
                                            {data.amount + '個 ' + data.name + ' ' + data.month + '個月 '}
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text style={{color: common.colorB}}>
                                            ${data.amount * data.price * data.month}
                                        </Text>
                                    </Right>
                                </ListItem>}
                        />

                        <CardItem>
                            <Body>
                            <Title style={{color: common.colorB}}>儲存月費預算</Title>
                            <Text style={{color: common.colorB}}>(不包括任何折扣)</Text>
                            </Body>
                            <Right>
                                <Text style={{color: common.colorB}}>
                                    ${order.service_fee}
                                </Text>
                            </Right>

                        </CardItem>

                    </Card>


                    {/*<ListItem  onPress={() => this.toggleSwitch1()}>*/}

                    {/*<CheckBox*/}
                    {/*// color="red"*/}
                    {/*checked={this.state.checkbox1}*/}
                    {/*onPress={() => this.toggleSwitch1()}*/}
                    {/*/>*/}
                    {/*<Body>*/}
                    {/*<Text style={{color: common.colorB}}>我已閱讀並同意條款及細則</Text>*/}
                    {/*</Body>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem button onPress={() => this.toggleSwitch2()}>*/}
                    {/*<CheckBox*/}
                    {/*// color="green"*/}
                    {/*checked={this.state.checkbox2}*/}
                    {/*onPress={() => this.toggleSwitch2()}*/}
                    {/*/>*/}
                    {/*<Body>*/}
                    {/*<Text style={{color: common.colorB}}>我同意不會儲存違禁品</Text>*/}
                    {/*</Body>*/}
                    {/*</ListItem>*/}


                </Content>


            </Container>
        );
    }
}

