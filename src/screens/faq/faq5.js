import React, {Component} from 'react';

import {Container, Content, Card, CardItem, Text, View, Body, ListItem, Separator} from 'native-base';
import {Grid, Row, Col} from "react-native-easy-grid";
import styles from '../about/styles';

export default class Faq3 extends Component {
    // eslint-disable-line

    render() {
        // eslint-disable-line
        return (

            <Content padder>



                {/*<Text style={styles.title}>5 倉庫 / 保障</Text>*/}
                <Text style={styles.title}>5.1 倉庫 / 保安M</Text>
                <Text style={styles.title}>5.1.1 我的物件是否存放在安全的位置？在哪裡？</Text>
                <Text
                    style={styles.text}>請放心，我們的倉庫在柴灣。基於安全理由，倉庫不向公眾開放，但設有開倉區域，您可預約親身到倉庫提取物件。另外我們設有全天候攝錄監控，確保儲物箱和移動迷你倉不被他人開啟、亦確保防火、防濕、防水及防塵措施妥善。</Text>

                <Text style={styles.title}>5.1.2 倉庫有什麼安全管理系統？</Text>
                <Text
                    style={styles.text}>我們的倉庫不向公眾開放，設有全天候攝錄監控。倉庫有完善溫度與濕度控制系統。我們的倉庫亦已安裝及配備消防火警鐘、自動灑水系統及消防喉轆，並且運作正常。</Text>

                <Text style={styles.title}>5.1.3 倉庫中有否任何自動灑水系統或其他消防設備？</Text>
                <Text style={styles.text}>我們所有的倉庫均配備防火警鐘、自動灑水系統、消防喉轆及滅火筒。</Text>

                <Text style={styles.title}>5.1.4 消防安全設備是否正常運作？</Text>
                <Text style={styles.text}>大廈每年會聘請消防處認可的消防系統承辦商進行年度消防檢查並且合格通過，消防安全設備都絕對運作正常。</Text>

                <Text style={styles.title}>5.1.5 你的倉庫中內有否室內間隔？</Text>
                <Text style={styles.text}>我們的倉庫不設任何室內間隔，客人物品則會存放到倉庫中的不同的位置。</Text>

                <Text style={styles.title}>5.1.6 你們會打開我的儲存箱嗎？</Text>
                <Text style={styles.text}>除了以下情況，我們絕對不會打開你的箱子:</Text>
                <Text style={styles.text}>(1) 我們得到你的同意</Text>
                <Text style={styles.text}>(2) 我們有法律責任去打開</Text>
                <Text style={styles.text}>(3) 對人命財產安全帶來風險</Text>

                <Text style={styles.text}>在任何情況下，你也會事先被通知。</Text>

                <Text style={styles.title}>5.1.7 我要如何密封儲存箱？</Text>
                <Text style={styles.text}>我們把儲存箱運送給你的時候會為你附上封條，讓你密封儲存箱。</Text>

                <Text style={styles.title}>5.2 保障</Text>
                <Text style={styles.title}>5.2.1 HoiTong海棠會為我的物品購買保險嗎？</Text>
                <Text
                    style={styles.text}>我們會為客人的物件提供保險，而且採取了嚴密的保安措施，使物件得以安全存放。若您需要儲存易碎物件，請確保已將其包裝好。如儲存的物件因包裝不妥等問題而損毀，我們將不會負責。詳情請參閱我們的條款及細則。</Text>

                <Text style={styles.text}>我們已為顧客的每件物件向保險公司投保，所有物件由運送、存倉及送回時都獲得免費的額外保障，保險範圍亦包括由失火造成的損害。
                    以下為各類儲存計劃的最高保險賠償金額：</Text>
                <Text style={styles.text}>迷你箱計劃： 每個儲物箱或物件高達HK$1,000</Text>
                <Text style={styles.text}>移動倉計劃： 每個儲物箱或物件高達HK$1,000，整個計劃最高保險賠償金額為HK$10,000</Text>
                <Text style={styles.text}>迷你倉計劃： 每個儲物箱或物件高達HK$1,000，整個計劃最高保險賠償金額為HK$10,000</Text>

                <Text style={styles.title}>5.2.2 如有需要，我應如何提出保險索償？</Text>
                <Text style={styles.text}>為你妥善保管財物是我們的首要任務。然而，若有需要提出保險索償，請電郵至
                    support@HoiTong.hk，我們將會儘快協助處理索償。 提出索償時，請確保你已備妥下列資料：</Text>

                <Text style={styles.text}>1. 標題：[你的全名] 的保險索償</Text>
                <Text style={styles.text}>2. 儲存箱歸還給你的日期</Text>
                <Text style={styles.text}>3. 於盛載受損或遺失物件的儲存箱Barcode ID</Text>
                <Text style={styles.text}>4. 儲存清單及每項物件的重置價值</Text>
                <Text style={styles.text}>5. 有關每項受損或遺失物件的詳細描述</Text>
                <Text style={styles.text}> 6. 你的聯絡資料 [電話號碼、電郵及郵寄地址]</Text>


            </Content>


        );
    }
}
