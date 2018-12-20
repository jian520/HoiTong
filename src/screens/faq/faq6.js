import React, {Component} from 'react';

import {Container, Content, Card, CardItem, Text, View, Body, ListItem, Separator} from 'native-base';
import {Grid, Row, Col} from "react-native-easy-grid";
import styles from '../about/styles';

export default class Faq6 extends Component {
    // eslint-disable-line

    render() {
        // eslint-disable-line
        return (

            <Content padder>



                    {/*<Text style={styles.title}>6 賬單 / 付款</Text>*/}
                    <Text style={styles.title}>6.1 我需要甚麼時候開始向Boxtify繳費？</Text>
                    <Text style={styles.title}>普通月費計劃:</Text>

                    <Text style={styles.text}>你的帳單由我們上門收取你的存倉物品送入倉庫當天，或送上空箱後14天開始。(以較早的為準)</Text>

                    <Text style={styles.title}>6個月費計劃+ 2個月按金</Text>

                    <Text
                        style={styles.text}>按金由我們上門收取你的存倉物品送入倉庫當天之前繳付，而月費由我們上門收取你的存倉物品送入倉庫當天，或送上空箱後14天開始。(以較早的為準)</Text>

                    <Text style={styles.title}>半年預繳計劃</Text>
                    <Text style={styles.text}>按金及費用由我們上門收取你的存倉物品送入倉庫當天之前繳付。</Text>
                    <Text style={styles.title}>全年預繳計劃</Text>
                    <Text style={styles.text}>按金及費用由我們上門收取你的存倉物品送入倉庫當天之前繳付。</Text>
                    <Text style={styles.title}>6.2 如何向Boxtify繳費(月費)？</Text>
                    <Text
                        style={styles.text}>您的物件被送入倉庫後，閣下便會收到發票。您只需按照發票上的指示，便可透過信用卡按月自動繳費。若您想以銀行轉賬付款，只需通知我們便可。</Text>

                    <Text style={styles.text}>請注意: 如果您在發票發出後的14內仍未付款，我們將會收取逾期付款費。</Text>

                    <Text style={styles.title}>6.3 我可以怎樣終止使用儲存服務？</Text>
                    <Text
                        style={styles.text}>在停止使用你的儲存服務之前，請確保你已經取回你所有物品。在Boxtify收回儲存箱當天，即表示你已停止使用Boxtify，你只需為當月服務付費。如果你有任何未還清的欠款，你需要在最後出倉前解決欠款。</Text>



            </Content>


        );
    }
}
