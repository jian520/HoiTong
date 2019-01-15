import React, {Component} from "react";
import {Image, StyleSheet, StatusBar, TouchableOpacity} from "react-native";

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
    Thumbnail, Footer, Toast, Input, Item, Radio, ListItem

} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import common from "../../common/common";


const img = require("../../../assets/WechatIMG531.png");
const img2 = require("../../../assets/WechatIMG534.png");
import ServiceItem from "../../entity/ServiceItem";
import serviceType from "../../data/service_type";
var serviceItem = Object.create(ServiceItem);

export default class Plan extends Component {


    constructor(props) {
        super(props);
        serviceItem.type = this.props.navigation.state.params.info

        this.state = {
            totalPrice: 0,
            month: 0,

            radio1: true,
            radio2: false,

        };
    }

    toggleRadio1() {
        this.setState({
            radio1: true,
            radio2: false,

        });
        console.log(this.state.month)

        let price = serviceType[ serviceItem.type][0].price * this.state.month
        this.setState({
            totalPrice: price
        });
    }

    toggleRadio2() {
        this.setState({
            radio1: false,
            radio2: true,
        });
        let price = serviceType[ serviceItem.type][1].price * this.state.month
        this.setState({
            totalPrice: price
        });
    }


    //默认属性
    static defaultProps = {}

    // selectValue(code, name, price) {
    //
    //
    //     let serviceItem = [{
    //         code: code,
    //         name: name,
    //         price: price,//单价
    //         amount: 1,
    //         totalPrice: price,//总价
    //     }];
    //
    //     this.setState({
    //         totalPrice: price,
    //     });
    //
    //     let type = this.props.navigation.state.params.info
    //     this.props.navigation.navigate("Schedule", {service_type: type, service_item: serviceItem})
    //
    // }

    cal(month) {




        var reg = new RegExp("^[0-9]*$");

        if (!reg.test(month)) {
            alert("請輸入有效月數");
            return
        }

        this.setState({
            month: month
        });

        var index = 0

        if (this.state.radio1 ) {
            index = 0
        } else  if (this.state.radio2 ) {
            index = 1
        }
        let price = serviceType[ serviceItem.type][index].price * month

        this.setState({
            totalPrice: price
        });
    }

    next() {
        //
        // if (!this.state.radio1  && !this.state.radio2 ) {
        //     alert("請先選擇計劃");
        //     return
        // }


        if ( this.state.month == 0){
            common.toast("請輸入有效月數")
            return
        }

        var reg = new RegExp("^[0-9]*$");

        if (!reg.test(this.state.month)) {
            common.toast("請輸入有效月數");
            return
        }
        var index = 0
        if (this.state.radio1 ) {
            index = 0
        } else  if (this.state.radio2 ) {
            index = 1
        }

        serviceItem.code = serviceType[serviceItem.type][index].code
        serviceItem.name = serviceType[serviceItem.type][index].name
        serviceItem.price = serviceType[serviceItem.type][index].price
        serviceItem.month = this.state.month
        serviceItem.amount = 1

            // this.setState({
            //     totalPrice: price,
            // });
        console.log(serviceItem)
        this.props.navigation.navigate("Schedule", {service_items: [serviceItem] })
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
                    <Title>選擇計劃</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.next()}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>

                <Content padder>

                    {/*<Text style={{*/}
                    {/*marginTop: 10,*/}
                    {/*marginBottom: 10,*/}

                    {/*alignSelf: 'center',*/}
                    {/*color: "#8F9294"*/}
                    {/*}}>若不清楚哪個計劃最適合您，請向客戶服務主任查詢：info@Boxtify.com.hk 或 Whatsapp*/}
                    {/*93224993</Text>*/}


                    <ListItem itemHeader first>
                        <Text>若不清楚哪個計劃最適合您，請向客戶服務主任查詢：info@HoiTong.hk 或 Whatsapp
                            93224993</Text>
                    </ListItem>


                    <ListItem thumbnail
                              selected={this.state.radio1}
                              onPress={() => this.toggleRadio1()}
                    >
                        <Left>
                            <Thumbnail square size={55} source={img}/>
                        </Left>
                        <Body>
                        <Text>
                            36平方呎(實用)
                        </Text>
                        <Text numberOfLines={1} note>
                            每月$1299
                        </Text>
                        </Body>
                        <Right>
                            <Radio
                                selected={this.state.radio1}
                                onPress={() => this.toggleRadio1()}
                            />
                        </Right>
                    </ListItem>
                    <ListItem thumbnail
                        selected={this.state.radio2}
                        onPress={() => this.toggleRadio2()}
                    >
                        <Left>
                            <Thumbnail square size={55} source={img2}/>
                        </Left>
                        <Body>
                        <Text>
                            48平方呎(實用)
                        </Text>
                        <Text numberOfLines={1} note>
                            每月$1699
                        </Text>
                        </Body>
                        <Right>
                            <Radio
                                selected={this.state.radio2}
                                onPress={() => this.toggleRadio2()}
                            />
                        </Right>
                    </ListItem>

                    <ListItem  >

                        <Body>
<Text></Text>
                        </Body>
                        <Right  >

                            <Item regular style={{width: 100}}>
                                <Input placeholder={"輸入月數"}   keyboardType ='numeric'
                                       onChangeText={(e) => this.cal(e)}/>
                            </Item>
                        </Right>
                    </ListItem>






                    {/*<TouchableOpacity onPress={() => this.selectValue('xl-36', '36平方呎計劃', 1299)}>*/}

                    {/*<Card style={styles.mb}>*/}
                        {/*<CardItem>*/}

                            {/*<Grid>*/}
                                {/*<Col size={1}>*/}
                                    {/*<Thumbnail square size={60} source={img}/>*/}
                                {/*</Col>*/}
                                {/*/!*<Col size={2}>*!/*/}
                                {/*/!*<Body*!/*/}
                                {/*/!*style={{*!/*/}
                                {/*/!*justifyContent: 'center',*!/*/}
                                {/*/!*}}>*!/*/}
                                {/*/!*<Text style={{marginBottom: 10, color: common.colorB}}>36平方呎(實用)</Text>*!/*/}
                                {/*/!*<Text numberOfLines={1} note>每月$1299</Text>*!/*/}
                                {/*/!*</Body>*!/*/}
                                {/*/!*</Col>*!/*/}
                                {/*<Col size={1}>*/}


                                    {/*/!*<Button transparent*!/*/}
                                    {/*/!*onPress={() => this.selectValue('xl-36', '36平方呎計劃', 1299)}>*!/*/}
                                    {/*/!*<Title style={{color: common.colorC}}>選擇</Title>*!/*/}
                                    {/*/!*</Button>*!/*/}


                                {/*</Col>*/}
                            {/*</Grid>*/}
                        {/*</CardItem>*/}
                    {/*</Card>*/}
                    {/*</TouchableOpacity>*/}


                    {/*<TouchableOpacity onPress={() => this.selectValue('xl-48', '48平方呎計劃', 1699)}>*/}


                    {/*<Card style={styles.mb}>*/}
                        {/*<CardItem>*/}

                            {/*<Grid>*/}
                                {/*<Col size={1}>*/}
                                    {/*<Thumbnail square size={60} source={img2}/>*/}
                                {/*</Col>*/}
                                {/*<Col size={2}>*/}
                                    {/*<Body*/}
                                        {/*style={{*/}
                                            {/*justifyContent: 'center',*/}
                                        {/*}}>*/}
                                    {/*<Text style={{marginBottom: 10, color: common.colorB}}>48平方呎(實用)</Text>*/}
                                    {/*<Text numberOfLines={1} note>每月$1699</Text>*/}
                                    {/*</Body>*/}
                                {/*</Col>*/}
                                {/*<Col size={1}>*/}
                                    {/*<Right>*/}
                                        {/*<Body>*/}
                                        {/*<Item regular>*/}
                                            {/*<Input style={{}} placeholder={"輸入月數"}*/}
                                                   {/*onChangeText={(e) => this.cal(e)}/>*/}
                                        {/*</Item>*/}
                                        {/*</Body>*/}
                                        {/*/!*<Button transparent*!/*/}
                                        {/*/!*onPress={() => this.selectValue('xl-48', '48平方呎計劃', 1699)}>*!/*/}
                                        {/*/!*<Title style={{color: common.colorC}}>選擇</Title>*!/*/}
                                        {/*/!*</Button>*!/*/}


                                    {/*</Right>*/}
                                {/*</Col>*/}
                            {/*</Grid>*/}
                        {/*</CardItem>*/}
                    {/*</Card>*/}
                    {/*</TouchableOpacity>*/}


                </Content>

                <Footer style={{backgroundColor: "#00c4b4",}}>
                    <Left>
                        <Text style={{color: "#fff", marginLeft: 10}}>儲存費預算</Text>
                    </Left>

                    <Right>
                        <H1 style={{color: "#fff", marginRight: 10}}>${this.state.totalPrice.toString()}</H1>
                    </Right>
                </Footer>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    img: {
        alignSelf: 'center',

    },
    h2: {
        alignSelf: 'center',
        color: "#2EB5AC"
    },
    txt: {
        alignSelf: 'center',

    },

})
