import React, {Component} from 'react';

import {Container, Content, Card, CardItem, Text, View, Body, ListItem, Separator} from 'native-base';
import {Grid, Row, Col} from "react-native-easy-grid";
import styles from '../about/styles';

export default class Faq1 extends Component {
    // eslint-disable-line

    render() {
        // eslint-disable-line
        return (

            <Content padder>



                    {/*<Text style={styles.title}>1 一般須知</Text>*/}
                    <Text style={styles.title}>1.1 有關 HoiTong海棠</Text>
                    <Text style={styles.text}>HoiTong海棠
                        提供合法、可靠、彈性和便利的上門迷你倉/迷你倉服務，我們上門會提取您的存倉物件，並把您的物件儲存在我們配備24小時保安及防火系統的倉庫。您只需透過電腦或手提流動裝置管理您的物件。當需要取回物品時，我們的專業運輸團隊可以立即送回您指定的儲物箱。</Text>

                    <Text style={styles.text}>我們提供以下三種儲存計劃：</Text>

                    <Text style={styles.text}>迷你箱儲存</Text>
                    <Text style={styles.text}>適合較小型物品，例如:季節性衣服，書本，相簿，玩具等</Text>

                    <Text style={styles.text}>移動倉儲存</Text>
                    <Text style={styles.text}>適合中型物品，例如: 小型傢俬，電子產品，運動裝備等</Text>

                    <Text style={styles.text}>迷你倉儲存</Text>
                    <Text style={styles.text}>適合大型物品，例如: 大型傢俬，搬屋，裝修用途，等</Text>

                    <Text style={styles.title}>1.2 為什麼使用 HoiTong海棠?</Text>
                    <Text
                        style={styles.text}>在香港這個寸金尺土的地方，大多家居都缺乏儲存物件的空間。因此HoiTong海棠透過原箱入屋的概念，與香港人的生活接軌，為客人解決儲存物件的困難，致力為香港提供合法、可靠、彈性和便利的存倉服務。</Text>

                    <Text style={styles.title}>1.3 誰在使用 HoiTong海棠?</Text>
                    <Text style={styles.text}>我們的客人主要用HoiTong海棠儲存服務為家居騰出空間、換季、裝修/搬屋需要短期儲存等等。</Text>

                    <Text style={styles.title}>1.4 HoiTong海棠的服務範圍包括哪些地區？</Text>
                    <Text style={styles.text}>我們的服務範圍覆蓋全港九新界。</Text>

                    <Text style={styles.title}>1.5 HoiTong海棠的營業時間為？</Text>
                    <Text style={styles.text}>客戶服務:</Text>
                    <Text style={styles.text}>星期一至日早上9時至下午6時</Text>

                    <Text style={styles.text}>運輸服務:</Text>
                    <Text style={styles.text}>公眾假期休息</Text>

            </Content>


        );
    }
}
