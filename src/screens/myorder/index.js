import React, {Component} from "react";
import {DeviceEventEmitter, View} from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    List,
    ListItem,
    Text,
    Left,
    Right,
    Body, Spinner
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";


import styles from "./styles";
import service from "../../network/Service";
import User from "../../entity/User";
import Order from "../../entity/Order";
//
// const datas = [
//     {
//         orderno: "ORD2018011015414",
//         price: 20,
//         status: "未付款"
//     },
//     {
//         orderno: "ORD2018011029492",
//         price: 230,
//         status: "未付款"
//     },
//
// ];

var order = Object.create(Order);


export default class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [],

            loading: true,
        };

    }

    componentWillMount() {

        console.log("userId  " + service.userId())

        service.getMyOrderList(service.userId(), 0)
            .then((wrapData) => {
                console.log("getMyOrderList" + wrapData.data[0]["0"])

                this.setState({
                    datas: wrapData.data,
                    loading: false

                });


            }).then((items) => {

        }).catch((error) => {
            console.log(error);
            this.setState({
                loading: false

            });

        })

    }

    statusString(status) {

        if (status == 1) {
            return '未付款'
        } else if (status == 2) {
            return '已付款'
        } else if (status == 3) {
            return '已入倉'
        } else if (status == 4) {
            return '退款'
        }
    }


    typeString(type) {

        if (type == 'product') {
            return '迷你箱服務'
        } else if (type == 'plan') {
            return '迷你倉服務'
        } else if (type == 'moving') {
            return '移動倉服務'
        }
    }


    pushDetail(data) {

        Object.assign(order, data);
        order.statusStr = this.statusString(order.status)

        order.service_type = this.typeString(order.service_type)



        this.props.navigation.navigate("OrderDetail", {info: order})

    }

}


/**
    render() {
        if (this.state.loading) {
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Spinner animating={this.state.logining} size="large" color="red"/>
                </View>
            );
        }

        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" style={{color: "#fff"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>我的預約</Title>
                    </Body>
                    <Right></Right>
                </Header>

                <Content>

                    <List
                        dataArray={this.state.datas}
                        renderRow={data =>
                            <ListItem button
                                      onPress={() => this.pushDetail(data)}>
                                <Left>
                                    <Body>
                                    <Text>訂單號:</Text>
                                    <Text numberOfLines={1} note>
                                        {data.order_no}
                                    </Text>
                                    <Text>價錢:
                                    </Text>
                                    <Text numberOfLines={1} note>
                                        {data.service_fee}
                                    </Text>
                                    </Body>
                                </Left>
                                <Body>
                                <Text note>{data.updated_at}</Text>
                                <View
                                );


                                }
                    }

                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                                    <Text style={{marginRight: 10}}>{this.statusString(data.status)}</Text>
                                    <Icon name="arrow-forward"/>
                                </View>
                                </Body>
                            </ListItem>}
                    />


                </Content>
            </Container>

*/