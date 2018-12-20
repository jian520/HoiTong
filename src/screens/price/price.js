import React, {Component} from "react";
import {Image, StatusBar} from "react-native";

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
    Body, Title, Right, Tabs, Tab, Card, CardItem, H3, ListItem, Separator
} from "native-base";
import styles from "../about/styles";

import Price1 from "./price1";
import Price2 from "./price2";
import Price3 from "./price3";
export default class Price extends Component {
    static propTypes = {
        // setUser: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };

    }


    render() {
        return (
            <Container>


                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" style={{color: "#fff"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>收費表</Title>
                    </Body>
                    <Right/>

                </Header>


                <Tabs>
                    <Tab heading="迷你箱">
                        <Price1/>
                    </Tab>
                    <Tab heading="移動倉">
                        <Price2/>
                    </Tab>
                    <Tab heading="迷你倉">
                        <Price3/>
                    </Tab>
                </Tabs>


            </Container>
        );
    }


}

