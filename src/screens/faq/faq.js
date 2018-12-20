import React, {PureComponent} from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    ListItem,
    Text,
    Left,
    Right,
    Body, H3, Card,
    CardItem, Separator,ScrollableTab,Tabs, Tab,
} from "native-base";
import styles from "../about/styles";
import {Grid, Row, Col} from "react-native-easy-grid";

import Faq1 from "./faq1";
import Faq2 from "./faq2";
import Faq3 from "./faq3";
import Faq4 from "./faq4";
import Faq5 from "./faq5";
import Faq6 from "./faq6";

export default class Faq extends PureComponent {

    //默认属性
    static defaultProps = {
        str: "           ",

    }

    render() {
        return (
            <Container  >
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>


                            <Icon name="menu" style={{color: "#fff"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>常見問題</Title>
                    </Body>
                    <Right/>
                </Header>


                <Tabs  renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="1 一般須知">
                        <Faq1/>
                    </Tab>
                    <Tab heading="2 迷你箱儲存">
                        <Faq2/>
                    </Tab>
                    <Tab heading="3 移動倉儲存">
                        <Faq3/>
                    </Tab>
                    <Tab heading="4 迷你倉儲存">
                        <Faq4/>
                    </Tab>
                    <Tab heading="5 倉庫 / 保障">
                        <Faq5/>
                    </Tab>
                    <Tab heading="6 賬單 / 付款">
                        <Faq6/>
                    </Tab>
                </Tabs>





                {/*<Content>*/}
                    {/*<Card style={styles.mb}>*/}

                        {/*<CardItem>*/}

                            {/*<Body>*/}



                            {/*/!*<Separator style={{backgroundColor: "#FFF", height: 20}}/>*!/*/}




                            {/*<Separator style={{backgroundColor: "#FFF", height: 20}}/>*/}





                            {/*<Separator style={{backgroundColor: "#FFF", height: 20}}/>*/}




                            {/*<Separator style={{backgroundColor: "#FFF", height: 20}}/>*/}


                            {/*</Body>*/}
                        {/*</CardItem>*/}

                    {/*</Card>*/}


                {/*</Content>*/}



            </Container>
        );
    }
}


