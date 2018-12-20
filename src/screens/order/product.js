import React, {Component} from "react";
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
    Body,
    Text,
    H1,
    H2,
    View,
    H3,
    Card,
    CardItem,
    Thumbnail,
    Footer, Toast, Item, Input
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import Stepper from "./stepper";
import common from "../../common/common";
import styles from "./styles";
import ServiceItem from "../../entity/ServiceItem";
import serviceType from "../../data/service_type";
var serviceItem = Object.create(ServiceItem);

const img = require("../../../assets/WechatIMG457.png");
const img2 = require("../../../assets/boxtify_box.png");
const img3 = require("../../../assets/WechatIMG464.png");
const img4 = require("../../../assets/boxtify_move.png");

export default class Product extends Component {


    constructor(props) {
        super(props);

        serviceItem.type = this.props.navigation.state.params.info

        this.state = {
            // selectProduct: [],


            price1: 0,
            price2: 0,
            price3: 0,
            price4: 0,

            amt1: 0,
            amt2: 0,
            amt3: 0,
            amt4: 0,

            month1: 0,
            month2: 0,
            month3: 0,
            month4: 0,
            totlePrice: 0,
        };
    }

    // //默认属性
    // static defaultProps = {
    //     selectType: '',
    //     selectProduct: []
    // }

    cal(month, index) {
        var reg = new RegExp("^[0-9]*$");
        if (!reg.test(month)) {
            common.toast("請輸入有效月數")
            return
        }

        var totalPrice = 0
        if (index == 0) {

            this.setState({
                month1: month
            });
            totalPrice =  this.state.amt1 * this.uPrice(0) * month +
                          this.state.amt2 * this.uPrice(1) * this.state.month2  +
                          this.state.amt3 * this.uPrice(2) * this.state.month3  +
                          this.state.amt4 * this.uPrice(3) * this.state.month4

        } else if (index == 1) {

            this.setState({
                month2: month
            });
            totalPrice =  this.state.amt1 * this.uPrice(0) * this.state.month1 +
                          this.state.amt2 * this.uPrice(1) * month  +
                          this.state.amt3 * this.uPrice(2) * this.state.month3  +
                          this.state.amt4 * this.uPrice(3) * this.state.month4


        } else if (index == 2) {

            this.setState({
                month3: month
            });
            totalPrice =  this.state.amt1 * this.uPrice(0) * this.state.month1 +
                          this.state.amt2 * this.uPrice(1) * this.state.month2  +
                          this.state.amt3 * this.uPrice(2) * month  +
                          this.state.amt4 * this.uPrice(3) * this.state.month4

        } else if (index == 3) {

            this.setState({
                month4: month
            });
            totalPrice =  this.state.amt1 * this.uPrice(0) * this.state.month1 +
                          this.state.amt2 * this.uPrice(1) * this.state.month2  +
                          this.state.amt3 * this.uPrice(2) * this.state.month3  +
                          this.state.amt4 * this.uPrice(3) * month
        }


        console.log('month' + month)

        console.log('price1 ' + this.state.price1)
        console.log('price2 ' + this.state.price2)
        console.log('price3 ' + this.state.price3)
        console.log('price4 ' + this.state.price4)

        this.setState({
            totlePrice:totalPrice,

        });
    }

    cal1(month) {
        this.cal(month, 0)
    }

    cal2(month) {
        this.cal(month, 1)
    }

    cal3(month) {
        this.cal(month, 2)
    }

    cal4(month) {
        this.cal(month, 3)
    }

    //单价
    uPrice(index) {

        return  serviceType[ serviceItem.type][index].price
    }

    setServiceItemValue(index, amount, month) {

        let serviceitem = Object.create(ServiceItem);
        serviceitem.type = serviceItem.type
        serviceitem.code  = serviceType[serviceItem.type][index].code
        serviceitem.name  = serviceType[serviceItem.type][index].name
        serviceitem.price = serviceType[serviceItem.type][index].price
        serviceitem.amount = amount
        serviceitem.month = month

        return serviceitem
    }

    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('DidChange', (value) => {
            let price1 = this.state.price1
            let price2 = this.state.price2
            let price3 = this.state.price3
            let price4 = this.state.price4
            let amt1 = this.state.amt1
            let amt2 = this.state.amt2
            let amt3 = this.state.amt3
            let amt4 = this.state.amt4



            let index = value[1] - 1
            if (index == 0) {
                amt1 = value[0]
                price1 = amt1 * this.uPrice(index)
                if ( this.state.month1 >0 ) {
                    price1 = price1 * this.state.month1
                }

            }
            if (index == 1) {
                amt2 = value[0]
                price2 = amt2 * this.uPrice(index)
                if ( this.state.month2 >0 ) {
                    price2 = price2 * this.state.month2
                }



            }
            if (index == 2) {
                amt3 = value[0]
                price3 = amt3 * this.uPrice(index)
                if ( this.state.month3 >0 ) {
                    price3 = price3 * this.state.month3
                }


            }
            if (index == 3) {
                amt4 = value[0]
                price4 = amt4 * this.uPrice(index)
                if ( this.state.month4 >0 ) {
                    price4 = price4 * this.state.month4
                }


            }


            this.setState({


                price1: price1,
                price2: price2,
                price3: price3,
                price4: price4,
                amt1: amt1,
                amt2: amt2,
                amt3: amt3,
                amt4: amt4,

                totlePrice: price1 + price2 + price3 + price4
            });


        })


    }

    componentWillUnmount() {
        // 移除
        this.subscription.remove();
    }


    next() {

        if (this.state.month1 == 0 && this.state.month2 == 0 && this.state.month3 == 0 && this.state.month4 == 0 ) {
            common.toast("請輸入月數")
            return
        }

        var reg = new RegExp("^[0-9]*$");
        if (!reg.test(this.state.month1) ||  !reg.test(this.state.month2)  ||  !reg.test(this.state.month3) ||  !reg.test(this.state.month4)  ) {
            common.toast("請輸入有效月數")
            return
        }
        var list= []

        if (this.state.month1 != 0)
            list.push(this.setServiceItemValue(0, this.state.amt1, this.state.month1 ))

        if (this.state.month2 != 0)
            list.push(this.setServiceItemValue(1, this.state.amt2, this.state.month2 ))

        if (this.state.month3 != 0)
            list.push(this.setServiceItemValue(2, this.state.amt3, this.state.month3 ))

        if (this.state.month4 != 0)
            list.push(this.setServiceItemValue(3, this.state.amt4, this.state.month4 ))

        console.log("list" + list)


        if (this.state.totlePrice == 0) {
            common.toast("請選擇計劃")

            return
        } else {

            this.props.navigation.navigate("Schedule", {  service_items: list })
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
                    <Title>選擇服務</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.next()}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>

                <Content padder>

                    <Text style={styles.headTitle}>若不清楚需要多少個儲物箱，無須擔心！我們會按照您實際使用的數量計算。</Text>

                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{marginBottom: 10, color: common.colorB}}>文件箱</Text>
                                    <Text numberOfLines={1} note>$25 每箱/每月</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',

                                }}>
                                <Stepper

                                    onChange={(val) => {
                                        Console.log(val)
                                    }}
                                    type={1}
                                    defaultValue={0}
                                    min={0}
                                    max={100}
                                    step={1}/>
                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                        <CardItem>
                            <Body>
                            </Body>
                            <Right>
                                <Item regular style={{width: 100}}>
                                    <Input placeholder={"輸入月數"} keyboardType='numeric'
                                           onChangeText={(e) => this.cal1(e)}/>
                                </Item>
                            </Right>
                        </CardItem>


                    </Card>
                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img2}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{marginBottom: 10, color: common.colorB}}>標準儲物箱</Text>
                                    <Text numberOfLines={1} note>$40每箱/每月</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',
                                }}>
                                <Stepper
                                    onChange={(val) => {
                                        Console.log(val)
                                    }}
                                    type={2}
                                    defaultValue={0}
                                    min={0}
                                    max={100}
                                    step={1}/>
                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                        <CardItem>
                            <Body>
                            </Body>
                            <Right>
                                <Item regular style={{width: 100}}>
                                    <Input placeholder={"輸入月數"} keyboardType='numeric'
                                           onChangeText={(e) => this.cal2(e)}/>
                                </Item>
                            </Right>
                        </CardItem>

                    </Card>
                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img3}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{marginBottom: 10, color: common.colorB}}>大型物品</Text>
                                    <Text numberOfLines={1} note>$69每箱/每月</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',
                                }}>
                                <Stepper
                                    onChange={(val) => {
                                        Console.log(val)
                                    }}
                                    type={3}
                                    defaultValue={0}
                                    min={0}
                                    max={100}
                                    step={1}/>
                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                        <CardItem>
                            <Body>
                            </Body>
                            <Right>
                                <Item regular style={{width: 100}}>
                                    <Input placeholder={"輸入月數"} keyboardType='numeric'
                                           onChangeText={(e) => this.cal3(e)}/>
                                </Item>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={styles.mb}>
                        <CardItem>

                            <Grid>
                                <Col size={1}>
                                    <Thumbnail square size={60} source={img4}/>
                                </Col>
                                <Col size={2}>
                                    <Body
                                        style={{
                                            justifyContent: 'center',
                                        }}>
                                    <Text style={{marginBottom: 10, color: common.colorB}}>掛衣箱</Text>
                                    <Text numberOfLines={1} note>$89每箱/每月</Text>
                                    </Body>
                                </Col>
                                <Col size={2}><Body style={{
                                    justifyContent: 'center',
                                }}>
                                <Stepper
                                    onChange={(val) => {
                                        Console.log(val)
                                    }}
                                    type={4}
                                    defaultValue={0}
                                    min={0}
                                    max={100}
                                    step={1}/>
                                </Body>
                                </Col>
                            </Grid>
                        </CardItem>
                        <CardItem>
                            <Body>
                            </Body>
                            <Right>
                                <Item regular style={{width: 100}}>
                                    <Input placeholder={"輸入月數"} keyboardType='numeric'
                                           onChangeText={(e) => this.cal4(e)}/>
                                </Item>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={{backgroundColor: common.colorA}}>
                    <Left>
                        <Text style={{color: "#fff", marginLeft: 10}}>儲存月費預算</Text>
                    </Left>
                    <Right>
                        <H1 style={{color: "#fff", marginRight: 10}}>${this.state.totlePrice.toString()}</H1>
                    </Right>
                </Footer>
            </Container>
        );
    }
}
