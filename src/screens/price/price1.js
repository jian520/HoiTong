import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, Body ,ListItem, Separator} from 'native-base';
import {Grid, Row, Col} from "react-native-easy-grid";
import styles from '../about/styles';

export default class Price1 extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
            <Content padder>

                <Grid>
                    <Col>


                            <ListItem  itemDivider style={{height: 50}}>
                                <Text>   </Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>文件箱</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>標準迷你箱</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>掛衣箱</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>大型物品</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>派送空箱</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>首次入倉</Text>
                            </ListItem>
                            <ListItem style={{height:170}}>
                                <Text style={styles.text}>之後出入倉
                                    (不包括最後出倉)</Text>
                            </ListItem>
                            <ListItem  style={{height: 50}} >
                                <Text style={styles.text}>最後出倉</Text>
                            </ListItem>
                            <ListItem  style={{height:150}}>
                                <Text style={styles.text}>回收空箱</Text>
                            </ListItem>
                            <ListItem  style={{height:70}}>
                                <Text style={styles.text}>預約 HoiTong海棠 到倉開箱服務</Text>
                            </ListItem>


                    </Col>

                    <Col>

                            <ListItem itemDivider   style={{height: 50}} >
                                <Text>1 - 5個月</Text>
                            </ListItem>

                            <ListItem>
                                <Text style={styles.text}>HK$28/月</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>HK$38/月</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>HK$88/月</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>HK$70/月</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>免費</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>免費</Text>
                            </ListItem>

                            <ListItem style={{height:170}}>
                                <Text style={styles.text}>HK$29+每箱$15</Text>
                            </ListItem>
                            <ListItem  style={{height: 50}} >
                                <Text style={styles.text}>HK$29+每箱$15</Text>
                            </ListItem>
                            <ListItem  style={{height:150}}>
                                <Text style={styles.text}>於最後出倉時20分鐘內歸還:
                                    免費

                                    需要另外安排收取:
                                    每件HK$29 + $15/box</Text>
                            </ListItem>
                            <ListItem  style={{height:70}}>
                                <Text style={styles.text}>免費</Text>
                            </ListItem>


                    </Col>
                    <Col>

                            <ListItem itemDivider style={{height: 50}}>
                                <Text>6個月或以上 (限時優惠)</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>HK$26/月</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>HK$35/月</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>HK$80/月</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>HK$63/月</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>免費</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>免費</Text>
                            </ListItem>
                            <ListItem style={{height:170}}>
                                <Text style={styles.text}>每三個月包一次免費來
                                    回運輸 (出倉 + 入倉)
                                    其他出入倉: 每程HK$29+每箱$15</Text>
                            </ListItem>
                            <ListItem  style={{height: 50}} >
                                <Text style={styles.text}>HK$29+每箱$15</Text>
                            </ListItem>
                            <ListItem  style={{height:150}}>
                                <Text style={styles.text}>於最後出倉時20分鐘內歸還:
                                    免費

                                    需要另外安排收取:
                                    每件HK$29 + $15/box</Text>
                            </ListItem>
                            <ListItem  style={{height:70}}>
                                <Text style={styles.text}>免費</Text>
                            </ListItem>

                    </Col>

                </Grid>
                <Separator style={{backgroundColor: "#FFF", height: 20}}/>



                <Text style={styles.title}>運送及手續費</Text>

                <Text style={styles.title}>取回儲物箱的費用</Text>
                <Text style={styles.text}>HK$29 + 每箱$15</Text>

                <Text style={styles.title}>收取已送回的儲物箱（如能在20分鐘內重新整理或再次存倉）</Text>
                <Text style={styles.text}>免費</Text>

                <Text style={styles.title}>隨後收取空箱的費用（如不打算將任何已收取的儲物箱再次存倉及未能於20分鐘內交回儲物箱</Text>
                <Text style={styles.text}>HK$29 + 每件$15</Text>

                <Text style={styles.title}>樓梯費(每層)(空箱或滿箱)[1]</Text>
                <Text style={styles.text}>每箱/物件HK$10</Text>

                <Text style={styles.title}>更改地址費(按照已存箱/物件總數)[2]</Text>


                <Grid>
                    <Col>

                        <Body>
                            <ListItem itemDivider style={{height: 100}}>
                                <Text>新舊地址距離(公里)[3]</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>少於 1.0</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>1.1 - 5.0</Text>
                            </ListItem>

                            <ListItem>
                                <Text style={styles.text}>5.1 - 10.0</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>10.1 -15.0</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>15.1 - 20.0</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>20.1 - 30.0</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>30.1 - 40.0</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>40.1 - 50.0</Text>
                            </ListItem>
                        </Body>

                    </Col>

                    <Col>
                        <Body>

                            <ListItem itemDivider style={{height: 100}}>
                                <Text>三箱/物件以下，最低收費 (港元)</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>60</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>120</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>150</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>195</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>240</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>300</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>375</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>450</Text>
                            </ListItem>
                        </Body>

                    </Col>
                    <Col>
                        <Body>
                            <ListItem itemDivider style={{height: 100}}>
                                <Text>三箱/物件以上，第四件起額外每箱/物件收費 (港元)</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>20</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>40</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>50</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>65</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>80</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>100</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>125</Text>
                            </ListItem>
                            <ListItem>
                                <Text style={styles.text}>150</Text>
                            </ListItem>
                        </Body>
                    </Col>

                </Grid>


                <Body>
                <Separator style={{backgroundColor: "#FFF", height: 20}}/>


                <Text style={styles.text}>[1]
                    如客戶指定地址只可以經樓梯搬運，運送團隊將會即場以現金形式收取每箱（空箱或滿箱）或每件物品每層HK$10的樓梯費，運輸團隊將不會搬運超過5層（從卸貨地面起計）。樓梯包括由卸貨點運送至樓宇大堂間需要經過的梯階*。
                    * 5級樓梯或以下免費，6至15級將視為一層計算，16至30級為另一層，其後15級為一層計算，如此類推。</Text>

                <Text style={styles.text}>[2]
                    如貴方搬到寶易存能送到的地方，本公司會收取更改地址費為客戶更改地址。地址一經更改，所有物件將按照最新地址取送。</Text>

                <Text style={styles.text}>[3] 按Google地圖提供根據完整地址的最短行車距離。</Text>


                </Body>


            </Content>

        );
	}
}
