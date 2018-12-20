import React, {Component} from "react";
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
    Body
} from "native-base";
import styles from "./styles";
import Order from "../../entity/Order";

const data =
    {
        orderno: "ORD2018011015414",
        name: "anson",
        status: "未付款"
    }

var order = Object.create(Order);


export default class OrderDetail extends Component {

    constructor(props) {
        super(props);
        order = this.props.navigation.state.params.info
       

        console.log(order)
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: "#FFF"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>訂單詳細</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>

                    <ListItem>
                        <Left>
                            <Text>訂單號:</Text>

                        </Left>

                        <Text note>
                            {order.order_no}
                        </Text>

                    </ListItem>

                    {/*<ListItem>*/}
                        {/*<Left>*/}
                            {/*<Text>服務代碼:</Text>*/}
                        {/*</Left>*/}
                    
                        {/*<Text numberOfLines={1} note>*/}
                            {/*{order.service_code}*/}
                        {/*</Text>*/}
                    
                    {/*</ListItem>*/}
                    <ListItem>
                        <Left>
                            <Text>服務類型:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.service_type}
                        </Text>

                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>服務名:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.service_name}
                        </Text>

                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>貨幣:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.service_currency}
                        </Text>

                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>價錢:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.service_fee}
                        </Text>

                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>聯絡人:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.contact_name}
                        </Text>

                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>聯絡電郵:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.contact_email}
                        </Text>

                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>聯絡電話:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.contact_phone}
                        </Text>

                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>聯絡地址:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.contact_address}
                        </Text>

                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>聯絡地區:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.contact_district}
                        </Text>

                    </ListItem>
                    <ListItem>
                        <Left>
                            <Text>聯絡區域:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.contact_region}
                        </Text>


                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text>訂單狀態:</Text>
                        </Left>

                        <Text numberOfLines={1} note>
                            {order.statusStr}
                        </Text>

                    </ListItem>

                </Content>
            </Container>
        );
    }
}

//訂單號	顧客姓名	服務代碼	服務類型	股務姓名	貨幣	價錢	聯絡人	聯絡電郵	聯絡電話	聯絡地址	訂單狀態	備註	推廣代碼	創建日期	最後修改	查看
