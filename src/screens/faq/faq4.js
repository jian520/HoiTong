import React, {Component} from 'react';

import {Container, Content, Card, CardItem, Text, View, Body, ListItem, Separator} from 'native-base';
import {Grid, Row, Col} from "react-native-easy-grid";
import styles from '../about/styles';

export default class Faq4 extends Component {
    // eslint-disable-line

    render() {
        // eslint-disable-line
        return (

            <Content padder>
                <Text style={styles.title}>4.1 使用指南</Text>
                <Text style={styles.title}>HoiTong海棠迷你倉如何運作？</Text>
                <Text style={styles.text}>HoiTong海棠上門迷你倉提供方便的一站式儲存服務，我們提供上門搬運及取送服務，適合大型物件，如傢私、電器等。</Text>
                <Text
                    style={styles.text}>當您需要取回物件時，只需登入賬戶，選擇您想取回的物件，我們會在您選定的日子送還您的物件。另外，您可選擇免費預約到HoiTong海棠開倉提取，本公司會為顧客提供一個舒適的休閒區域原箱提取物件</Text>
                <Text style={styles.text}>標準迷你倉空間由12平方呎起，我們亦會根據你需要儲存的物件，建議所需儲存空間及提供免費報價。</Text>

                <Text style={styles.title}>4.1.2 如何下單及開始使用服務？</Text>
                <Text style={styles.text}>請致電21750222給我們，告訴我們你的存倉要求，或透過Whatsapp 98409999或按此發送需要存倉物件的照片給我們。</Text>
                <Text style={styles.text}>我們的團隊會為你即日報價。當你同意報價後，我們會立即安排入倉時間，就是這麼簡單！</Text>
                <Text style={styles.title}>4.2 儲存計劃 / 收費</Text>
                <Text style={styles.title}>4.2.1 我需要付多少錢？</Text>
                <Text style={styles.text}>以下收費表僅供參巧，所有收費以報價單為準。</Text>


                <ListItem itemDivider>
                    <Text>小型迷你倉 (12平方尺)</Text>
                </ListItem>

                <Grid>
                    <Col>
                        <ListItem>
                            <Text>普通月費計劃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$720/月</Text>
                        </ListItem>

                        <ListItem style={{height: 60}}>
                            <Text>6個月費計劃+
                                2個月按金</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$684/月</Text>
                        </ListItem>
                    </Col>
                    <Col>
                        <ListItem>
                            <Text>半年預繳計劃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$648/月</Text>
                        </ListItem>

                        <ListItem style={{height: 60}}>
                            <Text>全年預繳計劃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$576/月</Text>
                        </ListItem></Col>
                </Grid>

                <ListItem itemDivider>
                    <Text>中型迷你倉 (24平方尺)</Text>
                </ListItem>

                <Grid>
                    <Col>
                        <ListItem>
                            <Text>普通月費計劃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$1440/月</Text>
                        </ListItem>

                        <ListItem style={{height: 60}}>
                            <Text>6個月費計劃+
                                2個月按金</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$1368/月</Text>
                        </ListItem>
                    </Col>
                    <Col>
                        <ListItem>
                            <Text>半年預繳計劃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$1296/月</Text>
                        </ListItem>

                        <ListItem style={{height: 60}}>
                            <Text>全年預繳計劃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$1152/月</Text>
                        </ListItem></Col>
                </Grid>


                <ListItem itemDivider>
                    <Text>大型迷你倉 (48平方尺)</Text>
                </ListItem>

                <Grid>
                    <Col>
                        <ListItem>
                            <Text>普通月費計劃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$2160/月</Text>
                        </ListItem>

                        <ListItem style={{height: 60}}>
                            <Text>6個月費計劃+
                                2個月按金</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$2052/月</Text>
                        </ListItem>
                    </Col>
                    <Col>
                        <ListItem>
                            <Text>半年預繳計劃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$1944/月</Text>
                        </ListItem>

                        <ListItem style={{height: 60}}>
                            <Text>全年預繳計劃</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>HK$1728/月</Text>
                        </ListItem></Col>
                </Grid>


                <ListItem itemDivider>
                    <Text>運輸費用</Text>
                </ListItem>
                <ListItem>
                    <Text>首次入倉*</Text>
                </ListItem>
                <ListItem>
                    <Text style={styles.text2}>免費 (30分鐘, 1 名搬運人員)</Text>
                </ListItem>

                <ListItem>
                    <Text>之後每次出入*倉 (單程)*</Text>
                </ListItem>
                <ListItem>
                    <Text style={styles.text2}>送回物件的費用為每程HK$300，當中包括30分鐘卸貨時間。額外搬運時間將收取每30分鐘每人HK$150。</Text>
                </ListItem>

                <ListItem>
                    <Text>預先運送包裝物料*</Text>
                </ListItem>
                <ListItem>
                    <Text style={styles.text2}>每程HK$80</Text>
                </ListItem>

                <ListItem>
                    <Text>預約Boxtify到倉開箱服務(按此)</Text>
                </ListItem>
                <ListItem>
                    <Text style={styles.text2}>免費</Text>
                </ListItem>


                <ListItem>
                    <Text style={styles.text2}>* 大型物件及重量大於25KG的物件需要1名額外搬運人員</Text>
                </ListItem>

                <ListItem>
                    <Text style={styles.text2}>* 每名額外搬運人員 - 每30分鐘 HK$150</Text>
                </ListItem>
                <ListItem last>
                    <Text style={styles.text2}>
                        * 大型物件 - 任何物件重於25KG 或 任何物件的總呎吋大於200cm / 78吋</Text>
                </ListItem>


                <Text style={styles.title}>4.2.2 有沒有其他服務費用？</Text>
                <Text style={styles.text}>運送及手續費</Text>

                <Text style={styles.text}>免費提供紙皮箱</Text>
                <Text style={styles.text}>每個計劃都免費提供10個紙皮箱。如需要額外紙皮箱，將收取每個HK$25的費用</Text>

                <Text style={styles.text}>其他紙箱</Text>
                <Text style={styles.text}>文件箱 - 每個HK$10</Text>
                <Text style={styles.text}>掛衣箱 - 每個HK$100</Text>

                <Text style={styles.text}>包裝物料（封箱膠紙、氣泡紙及透明包裝膜）</Text>
                <Text style={styles.text}>免費 – 於收取物件時提供</Text>

                <Text style={styles.text}>首次收取儲物箱或物件到倉庫*</Text>
                <Text style={styles.text}>免費 – 每個計劃於首次收取物件時都享有30分鐘免費搬運服務</Text>
                <Text style={styles.text}>額外搬運時間將收取每30分鐘每人HK$150。</Text>

                <Text style={styles.text}>送回部份或全部物件*</Text>
                <Text style={styles.text}>送回物件的費用為每程HK$300，當中包括30分鐘卸貨時間。</Text>
                <Text style={styles.text}>額外搬運時間將收取每30分鐘每人HK$150。</Text>

                <Text style={styles.text}>收取已送回的物件並重新儲存*</Text>
                <Text style={styles.text}>再次收取物件的費用為每程HK$300，當中包括30分鐘卸貨時間。</Text>
                <Text style={styles.text}>額外搬運時間將收取每30分鐘每人HK$150。</Text>

                <Text style={styles.text}>儲存物品拍照服務</Text>
                <Text style={styles.text}>免費 – 如在預約或收取物品時提出要求</Text>
                <Text style={styles.text}>如在物品已儲存在倉庫後提出要求，價格如下：</Text>
                <Text style={styles.text}>每件物品HK$20（每次最低收費為$300）</Text>

                <Text style={styles.text}>組裝及拆卸費</Text>
                <Text style={styles.text}>如有任何物品需要組裝或拆卸，我們將收取每件$250組裝 / 拆卸費用。</Text>

                <Text style={styles.text}>停車場收費</Text>
                <Text style={styles.text}>個別送貨地址如需額外停車場收費，有關費用須由顧客繳付。</Text>

                <Text style={styles.text}>樓梯費（每層）[1]</Text>
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
                <Text style={styles.title}>4.2.3 我不知道需要多少存倉空間，我應該如何做？</Text>
                <Text style={styles.text}>請致電21750222給我們，告訴我們你的存倉要求，或透過Whatsapp 98409999 或按此發送需要存倉物件的照片給我們。</Text>
                <Text style={styles.text}>我們的團隊會為你即日報價。當你同意報價後，我們會立即安排入倉時間，就是這麼簡單！</Text>
                <Text style={styles.title}>4.2.4 我可以只使用數星期的HoiTong海棠上門迷你倉服務嗎？</Text>
                <Text style={styles.text}>我們最少存倉時間是1個月。如果你只想使用我們服務數星期，你仍然需要支付1個月的存倉費用。</Text>

                <Text style={styles.title}>4.3 收拾物品</Text>
                <Text style={styles.title}>4.3.1 我可以存放什麼東西在HoiTong海棠?</Text>
                <Text
                    style={styles.text}>除了危險品（爆炸品、化學品等）、違禁品、動／植物、液體、易碎物件／玻璃、貴重物品、食物、易腐壞物品及鋰電池，大部份物件都可以存放到我們的倉庫。詳細違禁品清單請參閱我們的條款及細則。</Text>

                <Text style={styles.text}>另外，只要能放進我們運輸車輛的傢俬或大型物件（鋼琴除外），我們都樂意為您儲存，詳情請致電21750222聯絡我們。</Text>

                <Text style={styles.title}>4.3.2 你們會提供包裝物料嗎？</Text>
                <Text style={styles.text}>如有需要，我們可於首次入倉時，向客人提供適量基本包裝材料。</Text>

                <Text style={styles.text}>如需我們另外安排預先送遞包裝材料，將額外收取運送費用。</Text>

                <Text style={styles.title}>4.3.3 我可以用你們的標準迷你箱 /
                    文件箱 / 掛衣箱嗎？</Text>
                <Text style={styles.text}>你可以購買我們的文件箱和掛衣箱，分別為每個$9
                    及$49。你亦可以租用我們的標準迷你箱，租金為每箱每月$10。所有箱子會於首次入倉時送遞上門。</Text>

                <Text
                    style={styles.text}>如需我們另外安排預先送箱，將額外收取運送費用。</Text>

                <Text
                    style={styles.title}>4.3.4 我需要事先收拾/包裝好存倉物件嗎？</Text>
                <Text
                    style={styles.text}>需要。我們的運輸團隊會盡所能幫助客人，迅速替客人完成收取物件的過程。每個計劃首次收取物件時均附有30分鐘免費搬運服務*。而取回或再次收取物件的費用為每程$300，當中包括30分鐘卸貨時間。</Text>

                <Text
                    style={styles.text}>額外搬運時間將收取每30分鐘每人HK$150。</Text>

                <Text
                    style={styles.text}>請注意，在以下情況中您很可能需要更長的搬運時間。</Text>
                <Text style={styles.text}>- 需要包裝傢俬</Text>
                <Text style={styles.text}>-
                    停泊運輸車輛的位置與指定地址有一段距離</Text>
                <Text style={styles.text}>-
                    指定地址沒有升降機</Text>
                <Text style={styles.text}>- 只能經由樓梯運送</Text>

                <Text style={styles.title}>4.3.5 你們提供傢私拆除 /
                    組裝服務嗎？</Text>
                <Text style={styles.text}>有的。你只需提供需要拆除 /
                    組裝的傢私的資料，我們會提供報價。</Text>

                <Text style={styles.title}>4.4 物品提取及遞送</Text>
                <Text
                    style={styles.title}>4.4.1 什麼才是'大型物品'?</Text>
                <Text style={styles.text}>任何物品符合以下條件</Text>
                <Text style={styles.text}>- 總尺寸(長+闊+高)大過 200cm / 78吋</Text>
                <Text style={styles.text}>- 重量超過25kg</Text>

                <Text
                    style={styles.title}>4.4.2 如何安排上門收取物品(首次入倉)？</Text>
                <Text style={styles.text}>只要你準備所有存倉物品，就可以致電給我們 21750222或whatsapp我們 98409999，我們便會立即安排。</Text>

                <Text
                    style={styles.title}>4.4.3 我可以如何追蹤自己存倉的物品？</Text>
                <Text
                    style={styles.text}>當你的首次入倉確認之後，你可以登入你的帳戶，到'迷你倉儲存'分頁的'在家中'部分見到你的所有物件，並已註明為'已安排入倉'，你可以加入相片及備註方便管理。</Text>

                <Text
                    style={styles.text}>你可以在'在倉庫'部分見到所有已入倉物件。</Text>

                <Text
                    style={styles.title}>4.4.4 如果我需要存入更多東西，應該如何做？</Text>
                <Text
                    style={styles.text}>只要登入你的帳戶，再到'迷你倉儲存'的分頁。只要在'在家中'部分新增你需要存倉的物件，加入相片及備註，然後選取你需要入倉的日期和時間。</Text>

                <Text
                    style={styles.text}>我們團隊會盡快聯絡你確認新入倉物件。如果新物件所需空間多於你現有的儲存計劃，我們會告訴你所需迷你倉面積及價錢。</Text>

                <Text
                    style={styles.title}>4.4.5 我需要取回部分物品(出倉)，我下一步應該做什麼？</Text>
                <Text
                    style={styles.text}>只要登入你的帳戶，再到'迷你倉儲存'的分頁。只要在'在倉庫'部分選取你需要出倉的物件，並按下'出倉'。選取你需要出倉的日期和時間。</Text>

                <Text
                    style={styles.text}>我們團隊會盡快聯絡你確認出倉時間，並把物品送到府上。</Text>

                <Text
                    style={styles.text}>另外，您可選擇免費預約到Boxtify開箱，本公司會為顧客提供一個舒適的休閒區域原箱提取物件。(按此)</Text>

                <Text
                    style={styles.title}>4.4.6 當物品出倉後，我想把它們再次入倉。應該如何做？</Text>
                <Text
                    style={styles.text}>只要登入你的帳戶，再到'迷你倉儲存'的分頁。只要在'在家中'部分選取你需要入倉的物件，並按下'入倉'。選取你需要入倉的日期和時間。</Text>
                <Text
                    style={styles.text}>我們團隊會盡快聯絡你確認入倉時間，並把上門收取物件。</Text>
                <Text
                    style={styles.text}>另外，您可選擇免費預約到HoiTong海棠開箱，本公司會為顧客提供一個舒適的休閒區域存放物件。(按此)</Text>
                <Text style={styles.title}>4.4.7 運送時間確認後可否更改或取消？</Text>
                <Text
                    style={styles.text}>如果您能夠於預定收取日三天前下午3時前成功更改或取消收取物件的預約，我們將不收取任何費用，否則會收取HK$300的罰款。</Text>
                <Text
                    style={styles.title}>4.4.8 我想更改地址，會有任何額外收費嗎？</Text>
                <Text
                    style={styles.text}>更改地址費(按照已存箱/物件總數)[2]</Text>


                <Grid>
                    <Col>


                        <ListItem itemDivider style={{height: 100}}>
                            <Text>新舊地址距離(公里)[1]</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>少於 1.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>1.1-5.0</Text>
                        </ListItem>

                        <ListItem>
                            <Text style={styles.text2}>5.1-10.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>10.1-15.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>15.1-20.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>20.1-30.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>30.1-40.0</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text2}>40.1-50.0</Text>
                        </ListItem>


                    </Col>

                    <Col>


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


                    </Col>
                    <Col>

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

                    </Col>

                </Grid>

                <Text style={styles.text}>[1] 按Google地圖提供根據完整地址的最短行車距離。</Text>

                <Text style={styles.title}>4.4.9 我可以自己安排運輸到你的倉庫安排出入倉嗎？</Text>
                <Text style={styles.text}>我們的客人大都選用我們的上門運輸服務，但如果你希望自己送上/提取存倉物件，我們亦可安排，但需收取少量手續費。詳情請致電
                    21750222了解。</Text>

                <Text style={styles.title}>4.4.10 遇上惡劣天氣時會有何安排？</Text>
                <Text style={styles.text}>若遇上惡劣天氣時，本公司將努力儘快與貴方取得聯繫，並將採取所有合理措施減少對服務的影響。你亦可以致電21750222確認預約。</Text>


            </Content>


        );
    }
}
