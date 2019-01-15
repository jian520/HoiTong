import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, Body ,ListItem, Separator} from 'native-base';
import {Grid, Row, Col} from "react-native-easy-grid";
import styles from '../about/styles';

export default class Price3 extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
            <Content padder>
                <Text style={styles.text}>以下收費表僅供參巧，所有收費以報價單為準。</Text>


                <Text style={styles.title}>運送及手續費</Text>

                <Text style={styles.title}>免費提供紙皮箱</Text>
                <Text style={styles.text}>每個計劃都免費提供10個紙皮箱。如需要額外紙皮箱，將收取每個HK$25的費用</Text>

                <Text style={styles.title}>其他紙箱</Text>
                <Text style={styles.text}>文件箱 - 每個HK$10</Text>
                <Text style={styles.text}>掛衣箱 - 每個HK$100</Text>

                <Text style={styles.title}>包裝物料（封箱膠紙、氣泡紙及透明包裝膜）</Text>
                <Text style={styles.text}>免費 – 於收取物件時提供</Text>

                <Text style={styles.title}>首次收取儲物箱或物件到倉庫*</Text>
                <Text style={styles.text}>免費 – 每個計劃於首次收取物件時都享有30分鐘免費搬運服務</Text>
                <Text style={styles.text}>額外搬運時間將收取每30分鐘每人HK$150。</Text>

                <Text style={styles.title}>送回部份或全部物件*</Text>
                <Text style={styles.text}>送回物件的費用為每程HK$300，當中包括30分鐘卸貨時間。</Text>
                <Text style={styles.text}>額外搬運時間將收取每30分鐘每人HK$150。</Text>

                <Text style={styles.title}>收取已送回的物件並重新儲存*</Text>
                <Text style={styles.text}>再次收取物件的費用為每程HK$300，當中包括30分鐘卸貨時間。</Text>
                <Text style={styles.text}>額外搬運時間將收取每30分鐘每人HK$150。</Text>

                <Text style={styles.title}>儲存物品拍照服務</Text>
                <Text style={styles.text}>免費 – 如在預約或收取物品時提出要求</Text>
                <Text style={styles.text}>如在物品已儲存在倉庫後提出要求，價格如下：</Text>
                <Text style={styles.text}>每件物品HK$20（每次最低收費為$300）</Text>

                <Text style={styles.title}>組裝及拆卸費</Text>
                <Text style={styles.text}>如有任何物品需要組裝或拆卸，我們將收取每件$250組裝 / 拆卸費用。</Text>

                <Text style={styles.title}>停車場收費</Text>
                <Text style={styles.text}>個別送貨地址如需額外停車場收費，有關費用須由顧客繳付。</Text>

                <Text style={styles.title}>樓梯費（每層）[1]</Text>
                <Text style={styles.text}>每件少於25公斤的物件 每層HK$20</Text>
                <Text style={styles.text}>每件多於25公斤的物件或任何大型傢俬 每層HK$60</Text>
                <Text style={styles.text}>請參考以下詳細物品清單以了解相關收費：</Text>


                <Grid>
                    <Col>

                        <Body>
                        <ListItem itemDivider style={{height: 60}}>
                            <Text>(少於25公斤) 每件每層$20</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>滑浪板</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>滑雪板</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>摺凳</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={[styles.text2, {height: 40}]}>抽濕機 / 空氣清新機</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>風扇</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>紅白藍膠袋</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>小型水機</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>微波爐</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>家用打印機</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>熨衫板</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>紙皮或儲物箱</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>花瓶</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>籃子</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>嬰兒車</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>鞋架 / 鞋櫃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>衣帽架</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>花盆</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>單車</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>行李箱</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>茶几</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>摺檯</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>暖爐</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>小型焗爐</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>電腦</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={[styles.text2, {height: 40}]}>電視機 / 螢幕(46吋以下)</Text>
                        </ListItem>

                        <ListItem>
                            <Text style={styles.text2}>麻雀檯</Text>
                        </ListItem>


                        </Body>

                    </Col>

                    <Col>


                        <ListItem itemDivider style={{height: 60}}>
                            <Text>大型物件 每件每層$60</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>床架</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>床褥</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>梳化</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={[styles.text2, {height: 40}]}>長椅</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>桌子</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>書檯</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>洗衣機</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>櫃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>衣櫃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>雪櫃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>吊扇</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>書架 / 書櫃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>座地燈</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>鏡</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>掛畫</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>油畫</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>玻璃窗</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>床頭櫃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>大型寵物籠</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>圍床 / 遊戲床</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>冷氣機</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>餐椅</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>燒烤爐</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>太陽傘</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={[styles.text2, {height: 40}]}>嬰兒床</Text>
                        </ListItem>

                        <ListItem>
                            <Text style={styles.text2}>梳妝檯</Text>
                        </ListItem>

                        <ListItem>
                            <Text style={styles.text2}>夾萬</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>抽油煙機</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>鋅盆</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>洗手盆櫃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>乾衣機</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>按摩椅</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>酒櫃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>熱水爐</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>大型音響</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>梳化床</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>組合櫃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>餐檯</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>健身儀器</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>大型地氈</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>屏風</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>窗簾</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>電視機 / 螢幕(46吋以上)</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>洗碗碟機</Text>
                        </ListItem>


                    </Col>


                </Grid>


                <Text style={styles.text}>註：不接受儲存酸枝木製傢俬及鋼琴</Text>
                <Text style={styles.text}>[1]
                    如客戶的指定地址只可以經樓梯作搬運，樓梯費會在下期帳單收取。運輸團隊將不會搬運超過5層（從卸貨地面起計）。樓梯包括由卸貨點運送至樓宇大堂間需要經過的梯階*。</Text>
                <Text style={styles.text}>*5級樓梯或以下免費，6至15級將視為一層計算，16至30級為另一層，其後15級為一層計算，如此類推。</Text>



            </Content>

        );
	}
}
