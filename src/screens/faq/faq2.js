import React, {Component} from 'react';

import {Container, Content, Card, CardItem, Text, View, Body, ListItem, Separator} from 'native-base';
import {Grid, Row, Col} from "react-native-easy-grid";
import styles from '../about/styles';

export default class Faq2 extends Component {
    // eslint-disable-line

    render() {
        // eslint-disable-line
        return (

            <Content padder>



                {/*<Text style={styles.title}>2 迷你箱儲存</Text>*/}
                <Text style={styles.title}>2.1 使用指南</Text>
                <Text style={styles.title}>2.1.1 Boxtify上門迷你箱如何運作？</Text>


                <Text style={styles.text}>您只需網上登記賬戶，預約免費的Boxtify儲物箱運送，我們的運送團隊會在預定的日子運送耐用的儲物膠箱及防啟封條到指定地址。您可以選擇即刻收拾物件入箱（我們的司機可以等候20分鐘），或預約運送團隊在其他日子前來收取您的物件。我們的運送團隊將確保您的物件安全儲存在我們的倉庫。

                    當您需要取回物件時，只需登入賬戶，選擇您想取回的儲物箱，我們會在您選定的日子送還您的物件。另外，您可選擇免費預約到Boxtify開箱，本公司會為顧客提供一個舒適的休閒區域原箱提取物件。

                    如有需要儲存大型或重過25公斤物件，可按此選擇Boxtify的移動倉或迷你倉服務。</Text>

                <Text style={styles.title}>2.1.2如何下單及開始使用服務？</Text>
                <Text style={styles.text}>只要跟以下簡單步驟網上下單或致電給我們 21750222:</Text>

                <Text style={styles.text}>1. 按此建立帳戶</Text>
                <Text style={styles.text}>2. 在預訂空間頁面選取你需要的箱子和數量</Text>
                <Text style={styles.text}>3. 提供你的地址和聯絡資料</Text>
                <Text style={styles.text}>4. 選擇你最方便的時間去收取我們的箱子</Text>
                <Text style={styles.text}>我們的團隊會聯絡你確認預訂及運輸時間。</Text>

                <Text style={styles.title}>2.2 儲存計劃 / 收費</Text>
                <Text style={styles.title}>2.2.1收費如何？</Text>

                <Grid>
                    <Col>


                        <ListItem itemDivider style={{height: 60}}>
                            <Text> {this.str}  </Text>
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
                        <ListItem style={{height: 170}}>
                            <Text style={styles.text}>之後出入倉
                                (不包括最後出倉)</Text>
                        </ListItem>
                        <ListItem style={{height: 50}}>
                            <Text style={styles.text}>最後出倉</Text>
                        </ListItem>
                        <ListItem style={{height: 150}}>
                            <Text style={styles.text}>回收空箱</Text>
                        </ListItem>
                        <ListItem style={{height: 70}}>
                            <Text style={styles.text}>預約 Boxtify 到倉開箱服務</Text>
                        </ListItem>


                    </Col>

                    <Col>


                        <ListItem itemDivider style={{height: 60}}>
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

                        <ListItem style={{height: 170}}>
                            <Text style={styles.text}>HK$29+每箱$15</Text>
                        </ListItem>
                        <ListItem style={{height: 50}}>
                            <Text style={styles.text}>HK$29+每箱$15</Text>
                        </ListItem>
                        <ListItem style={{height: 150}}>
                            <Text style={styles.text}>於最後出倉時20分鐘內歸還:
                                免費

                                需要另外安排收取:
                                每件HK$29 + $15/box</Text>
                        </ListItem>
                        <ListItem style={{height: 70}}>
                            <Text style={styles.text}>免費</Text>
                        </ListItem>


                    </Col>
                    <Col>

                        <ListItem itemDivider style={{height: 60}}>
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
                        <ListItem style={{height: 170}}>
                            <Text style={styles.text}>每三個月包一次免費來
                                回運輸 (出倉 + 入倉)
                                其他出入倉: 每程HK$29+每箱$15</Text>
                        </ListItem>
                        <ListItem style={{height: 50}}>
                            <Text style={styles.text}>HK$29+每箱$15</Text>
                        </ListItem>
                        <ListItem style={{height: 150}}>
                            <Text style={styles.text}>於最後出倉時20分鐘內歸還:
                                免費

                                需要另外安排收取:
                                每件HK$29 + $15/box</Text>
                        </ListItem>
                        <ListItem style={{height: 70}}>
                            <Text style={styles.text}>免費</Text>
                        </ListItem>

                    </Col>

                </Grid>

                <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                <Text style={styles.title}>有沒有其他服務費用？</Text>
                <Text style={styles.text}>運送及手續費</Text>

                <Text style={styles.text}>取回儲物箱的費用</Text>
                <Text style={styles.text}>HK$29 + 每箱$15</Text>

                <Text style={styles.text}>收取已送回的儲物箱（如能在20分鐘內重新整理或再次存倉）</Text>
                <Text style={styles.text}>免費</Text>

                <Text style={styles.text}>隨後收取空箱的費用（如不打算將任何已收取的儲物箱再次存倉及未能於20分鐘內交回儲物箱）</Text>
                <Text style={styles.text}>HK$29 + 每件$15</Text>

                <Text style={styles.text}>樓梯費(每層)(空箱或滿箱)[1]</Text>
                <Text style={styles.text}>每箱/物件HK$10</Text>

                <Text style={styles.text}>更改地址費(按照已存箱/物件總數)[2]</Text>


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

                <Text style={styles.text}>[1]
                    如客戶指定地址只可以經樓梯搬運，運送團隊將會即場以現金形式收取每箱（空箱或滿箱）或每件物品每層HK$10的樓梯費，運輸團隊將不會搬運超過5層（從卸貨地面起計）。樓梯包括由卸貨點運送至樓宇大堂間需要經過的梯階*。
                    * 5級樓梯或以下免費，6至15級將視為一層計算，16至30級為另一層，其後15級為一層計算，如此類推。</Text>

                <Text style={styles.text}>[2] 如貴方搬到寶易存能送到的地方，本公司會收取更改地址費為客戶更改地址。地址一經更改，所有物件將按照最新地址取送。</Text>

                <Text style={styles.text}>[3] 按Google地圖提供根據完整地址的最短行車距離。</Text>

                <Text style={styles.title}>2.2.3 我不肯定我需要多少個儲存箱，我可以如何做？</Text>
                <Text
                    style={styles.text}>你可以隨時致電XXXXXXX，我們的同事會提供協助。另外，你其實只需為你最終使用的儲存箱付費，所以我們建議你預訂額外的儲存箱，以防你在整理物品時出現儲存箱不足的情況。</Text>


                <Text style={styles.title}>2.2.4 如何使用推廣編號？</Text>
                <Text style={styles.text}>選擇儲存箱數量後，將推廣編號填寫於「推廣編號」輸入欄內。</Text>


                <Text style={styles.title}>2.3 收拾物品</Text>
                <Text style={styles.text}>2.3.1 一個箱可以容納多少東西？</Text>
                <Text style={styles.text}>文件箱：</Text>
                <Text style={styles.text}>- 42cm(長) x 34cm(闊) x 27cm(高)</Text>
                <Text style={styles.text}>- 可以存放6個文件夾 or 3000 張A4 紙</Text>

                <Text style={styles.text}>標準迷你箱</Text>
                <Text style={styles.text}>- 60cm(長) x 42cm(闊) x 33cm(高)</Text>
                <Text style={styles.text}>- 可以存放20對鞋 或 100件恤衫 或 180隻DVDs</Text>

                <Text style={styles.text}>掛衣箱:</Text>
                <Text style={styles.text}>- 50cm(長) x 50cm(闊) x 105cm(高)</Text>
                <Text style={styles.text}>- 可以存放 35 條裙 OR 35件恤衫 OR 10 件外套</Text>


                <Text style={styles.title}>2.3.2 有沒有重量限制？</Text>
                <Text style={styles.text}>文件箱 / 掛衣箱 - 15kg</Text>
                <Text style={styles.text}>標準迷你箱 - 23kg</Text>
                <Text style={styles.text}>大型物品 - 25kg</Text>

                <Text
                    style={styles.text}>我們訂立重量限制是為了保障我們員工搬運時的安全，所以如果我們員工發現你的箱子太重，我們會要求你把存倉物品分成2個箱子，或收取附加費。</Text>


                <Text style={styles.title}>2.3.3 Boxtify 儲存箱可以放些甚麼？不可以存放些甚麼？</Text>
                <Text style={styles.text}>無論是衣物、書籍、DVD、戶外用品、或任何季節性用品，只要不超過重量限制（標準儲物箱：23kg /大型物品 - 25kg /
                    文件箱或掛衣箱：15kg），都可以交給我們儲存！</Text>

                <Text style={styles.text}>但我們不接受易腐爛物件、易碎物件（除非您確保包裝完善）、任何非法物件、爆炸性物件、易燃材料、有害物質或高價值的物件。</Text>

                <Text style={styles.text}>請勿存放任何動植物，任何引起懷疑或散發有害氣味的物件。我們接受任何合法、無害和不易腐爛的物件。</Text>


                <Text style={styles.title}>2.3.4 我可以用自己的箱子嗎？</Text>
                <Text
                    style={styles.text}>我們建議你使用Boxtify箱子，因為我們提供的箱子很耐用、安全和適合封存。若你選擇選用自己的箱子，我們會將其視為大型物件。</Text>

                <Text style={styles.title}>2.3.5 我要如何密封儲存箱？</Text>
                <Text style={styles.text}>我們把儲存箱運送給你的時候會為你附上封條，讓你密封儲存箱。</Text>

                <Text style={styles.title}>2.4 物品提取及遞送</Text>
                <Text style={styles.title}>2.4.1 我最快可以什麼時候收到儲存箱？</Text>
                <Text style={styles.text}>大概24至48小時內。如果你急需儲存箱，我們會盡力於即日內送到。</Text>

                <Text style={styles.title}>2.4.2 在收到Boxtify儲存箱後，我可以用多少時間收拾我的物品？</Text>
                <Text
                    style={styles.text}>最多14日。如果你需要多於14日的時間收拾物品，我們仍會於你收到箱子後第15日開始收費。如你能在派送空箱時20分鐘內完成收拾，我們的員工可以即場收取物品入倉，該程入倉費用全免。</Text>

                <Text style={styles.title}>2.4.3 我已經收拾好了，你們可以在什麼時候來收取我的儲存箱？</Text>
                <Text style={styles.text}>當你收拾好物件，你便可以按此到 '我的物件'' 頁面。於 '在家' 部分，選擇你想安排入倉的物件，並按
                    '入倉'。輸入/選擇地址及入倉日期和時間。</Text>

                <Text style={styles.title}>2.4.4 我可以怎樣取回我的物品？</Text>
                <Text
                    style={styles.text}>十分簡單！當你需要取回你的物品，你只需要登入你的帳號並選取你需要的儲存箱，然後預約時間讓我們上門送回。我們可於24至48小時內（或任何方便你的時間）將儲存箱送到你的地址。若果你急需要你的物品，我們會盡力配合你的需要。</Text>

                <Text style={styles.title}>2.4.5 運送時間確認後可否更改或取消？</Text>
                <Text
                    style={styles.text}>如需要更改或取消運送服務，請最少於預定運送前一個工作天下午六時前登入您的賬戶，在右上方"選項"按“預約”，然後按"取消"，即可取消預約。否則我們將收取HK$150的費用。</Text>

                <Text style={styles.title}>2.4.6 我搬到了新地方，會更改出入倉地址，你們會有額外收費嗎？</Text>
                <Text style={styles.text}>更改地址費(按照已存箱/物件總數)[2]</Text>


                <Grid>
                    <Col>

                        <Body>
                        <ListItem itemDivider style={{height: 100}}>
                            <Text>新舊地址距離(公里)[3]</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>少於 1.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>1.1 - 5.0</Text>
                        </ListItem>

                        <ListItem>
                            <Text style={styles.text2}>5.1 - 10.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>10.1 -15.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>15.1 - 20.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>20.1 - 30.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>30.1 - 40.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>40.1 - 50.0</Text>
                        </ListItem>
                        </Body>

                    </Col>

                    <Col>
                        <Body>

                        <ListItem itemDivider style={{height: 100}}>
                            <Text>三箱/物件以下，最低收費 (港元)</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>60</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>120</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>150</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>195</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>240</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>300</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>375</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>450</Text>
                        </ListItem>
                        </Body>

                    </Col>
                    <Col>
                        <Body>
                        <ListItem itemDivider style={{height: 100}}>
                            <Text>三箱/物件以上，第四件起額外每箱/物件收費 (港元)</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>20</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>40</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>50</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>65</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>80</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>100</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>125</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>150</Text>
                        </ListItem>
                        </Body>
                    </Col>

                </Grid>

                <Text style={styles.text}>[1] 按Google地圖提供根據完整地址的最短行車距離。</Text>

                <Text style={styles.title}>2.4.7 遇上惡劣天氣時會有何安排？</Text>
                <Text
                    style={styles.text}>若遇上惡劣天氣時，本公司將努力儘快與貴方取得聯繫，並將採取所有合理措施減少對服務的影響。你亦可以致電21750222確認預約。</Text>


            </Content>


        );
    }
}
