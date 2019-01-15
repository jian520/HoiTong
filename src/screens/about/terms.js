import React, {Component} from "react";
import {Image, StyleSheet, StatusBar} from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    H1,
    H2,
    H3,
    Text,
    Left,
    Right,
    Body,
    Card,
    CardItem,
    Thumbnail, Separator
} from "native-base";
import styles from "./styles";

const img = require("../../../assets/box_close.png");

export default class Terms extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" style={{color: "#fff"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>條款及細則</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>
                    <Card style={styles.mb}>


                        <CardItem>
                            <Body>

                            <Text style={styles.title}>1. 貨品儲存 </Text>

                            <Text
                                style={styles.text}>1.1在本協議整個有效期內，存放於甲方的所有貨品仍然屬於乙方的財產，或貨品擁有人明確允許並授權乙方根據本協議使用甲方服務。 </Text>
                            <Text style={styles.text}>1.2乙方特此承認並同意本協議任何規定不應被解釋為對甲方有任何法律上的所有權益。 </Text>
                            <Text style={styles.text}>1.3乙方確認已查看過及檢查過其存放倉並對有關其面積、大小、適合性和情況等各方面 (尤其是對其安全和保安方面)
                                表示滿意，並且放棄以有關上述各項或有關本協議任何其他事項的錯誤陳述、保證或聲明 (口頭或書面) 為依據的所有申索 (如有的話) 。 </Text>
                            <Text style={styles.text}>1.4儲存的貨物不得包括：違禁、非法、贓物或易腐或易燃物件。違禁貨物包括但不限於： </Text>
                            <Text style={styles.text}>A.化學品、毒品、任何類型的危險或有毒材料； </Text>
                            <Text style={styles.text}>B.食物或任何類型的易碎物件； </Text>
                            <Text style={styles.text}>C.易燃物、槍械、武器或任何類型的易爆物件； </Text>
                            <Text style={styles.text}>D.釋放任何臭味或煙氣的物件； </Text>
                            <Text style={styles.text}>E.植物、生物 (無論是活物還是死物)； </Text>
                            <Text style={styles.text}>F.液體或壓縮氣體； </Text>
                            <Text style={styles.text}>G.火柴、木炭、磷等容易燃點的物件； </Text>
                            <Text style={styles.text}>H.油漆、天拿水 (稀釋液) 及液體黏合劑； </Text>
                            <Text style={styles.text}>I.非法藥物、走私物品或仿制品、贓物或任何類型的非法物件； </Text>
                            <Text style={styles.text}>J.任何貨幣、債劵或證劵； </Text>
                            <Text style={styles.text}>K.珠寶、古董、精細工藝品、精裝酒、貴重金屬或任何高價值物件； </Text>
                            <Text style={styles.text}>L.任何裝置電池的器材； </Text>
                            <Text style={styles.text}>M.個人財物會導致違反任何法律或任何政府機構的規章制度； </Text>
                            <Text style={styles.text}>N.任何物件甲方認為會危害人的安全和健康以及環境。 </Text>

                            <Text style={styles.text}>1.5此外，甲方不建議任何正本個人文件 (包括但不限於護照、駕駛執照、身份證等) 或任何含有個人資料
                                (包括但不限於出生日期或銀行戶口號碼)
                                及任何可被他人竊取身份或有急切需要的文件作儲存。在執行本協議時，乙方明白並同意如儲存任何含有個人資料的文件或物件，乙方將放棄所有因儲存以上文件或物件所追究引起甲方的權利。 </Text>
                            <Text
                                style={styles.text}>1.6甲方採用商業上合理的方法防止霉菌在乙方的物件上生長。不過甲方不能保證乙方的財產不會滋生霉菌，在執行本協議時，乙方明白並同意甲方不會承擔一切因霉菌或其他類似情況在乙方的物件上自然生長而衍生的責任。 </Text>
                            <Text style={styles.text}>1.7在以下情況下，甲方有權在試圖通知乙方後開鎖，進入該單位檢查，清理，移動，搬離乙方的一切儲存的財物/物品： </Text>
                            <Text style={styles.text}>A.甲方發現有可疑、異味、怪聲或在甲方認為合理的危急或緊急的情況下； </Text>
                            <Text style={styles.text}>B.警務署、消防處、政府各部門或法院判令要求甲方進行檢查或開鎖； </Text>
                            <Text style={styles.text}>C.甲方認為存在人身傷害或財產損害的風險；或 </Text>
                            <Text style={styles.text}>D.得到甲方管理層商確後處理。 </Text>
                            <Text style={styles.text}>1.8甲方在1.7條所述的任何過程中產生的任何相關成本或損失應由乙方承擔，乙方不得反對或作無理要求索償。 </Text>
                            <Text
                                style={styles.text}>1.9對存放於該單位的所有貨品的任何損失、損毀、磨損、丟失或毀壞，不論各項是否因甲方及其僱員或代理人或其他單位使用人的任何行為或行為疏忽或故意或非故意失責所造成，甲方概不負責，甲方亦不對乙方因所述貨品的任何損失、損毀而承擔任何責任。 </Text>
                            <Text
                                style={styles.text}>1.10若甲方合理認為儲存或繼續儲存相關貨品會對任何人士、儲存設施或儲存設施中的任何其他貨物構成安全風險、甲方可有權拒絕及終止協議，費用由乙方承擔。 </Text>
                            <Text style={styles.text}>1.11基於安全理由，非甲方及其僱員或非代理人或非授權人士嚴禁進入儲存設施區域內。 </Text>
                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>2. 存取時段</Text>
                            <Text style={styles.text}>2.1乙方必須於最少一個工作天前提早預約甲方安排其存放倉給乙方進行存取。</Text>
                            <Text style={styles.text}>2.2每日的提存時段是以先到先得制，乙方需向甲方查詢所提供的提存時段。</Text>
                            <Text style={styles.text}>2.3在符合本協議之條款下，甲方保留權利不時對關於提存時段及提存區域的一般管理和保安作出的規定進行修訂及更改。</Text>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>3. 權利和義務</Text>
                            <Text style={styles.text}>3.1乙方不得以任何違法或欺詐性方式使用服務，或將服務用於任何違法或欺詐性目的，或產生違法或欺詐性效果；</Text>
                            <Text style={styles.text}>3.2乙方不得將任何服務再許可或轉售至第三方，或以任何方式、因任何原因代表甲方；</Text>
                            <Text
                                style={styles.text}>3.3乙方不得對場所的任何通道、樓梯、提存區域或任何其他部份造成任何妨礙或不適當的阻礙，乙方在任何時候於使用該地區時給予別人體恤。</Text>
                            <Text style={styles.text}>3.4除獲甲方授權，否則乙方不得進行存取貨品以外的任何事情。</Text>
                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>4. 按金及服務費</Text>
                            <Text
                                style={styles.text}>4.1乙方簽署本協議時，須付甲方提供的最短儲存期相關服務費及等同兩個月原服務費金額之按金，之後乙方須在到期日前向甲方支付下次服務費。乙方付款後須向甲方提供入數紀錄單據，並與甲方會計部確認，否則如沒單據為憑，甲方將作未交款處理。若服務費按照本協議第4.6條有任何增加，乙方須向甲方支付一筆款項，此筆款項相等於我方當時持有的原按金額服務費增加後應持有按金額的差額，此筆款項應在是項增加後於下一個到期日(如適用)一同支付。。</Text>
                            <Text
                                style={styles.text}>4.2乙方如在協議期內要求終止本協議，乙方必須在遷出前十天以書面通知形式通知甲方，否則甲方有權於按金中扣除十天代通知金，餘款於十四個工作天後發還給乙方，但甲方有權從按金中扣除與下述項目有關的任何款項：。</Text>
                            <Text style={styles.text}>A.就乙方、其代理人或被邀請人或由於其存放倉內的貨品，對存放倉及場所造成的任何損毀進行修理；。</Text>
                            <Text style={styles.text}>B.任何未付的服務費或其他費用；。</Text>
                            <Text style={styles.text}>C.乙方對甲方應負有而尚未全部履行的任何其他責任。。</Text>
                            <Text style={styles.text}>4.3若雙方未有依據本條款4.2或4.6的情況下終止，此協議則按月延續一個月及其他條款維持不變。。</Text>
                            <Text style={styles.text}>4.4如在到期日五天內甲方尚未確認收到服務費，甲方有權每月收取行政補償金七十元正港幣及拒絕乙方進入該單位內。</Text>
                            <Text style={styles.text}>4.5若乙方在到期日後九十日內未能安排向甲方支付任何應付的相關金額，甲方有權將該單位內的貨物棄置或捐贈至慈善機構，一切費用由乙方承擔。如在該單位的貨物被清理後，才收到乙方服務費，
                                該服務費將會退回乙方，且乙方無任何追究權。如已進入清倉程序及登報後，乙方想重新使用該單位，除要付清所欠費用外，甲方將額外收取一百元正港幣行政費用。</Text>
                            <Text
                                style={styles.text}>4.6甲方有權在協議期完滿後調整服務費，並於三十日前書面通知乙方，如乙方在調整前預交任何費用，亦必須補回差額，乙方不能以繼續交舊服務費或已繳交服務費作為協議仍然生效或繼續使用論。如果乙方不同意，可以終止協議。甲方亦有權終止協議，並要求乙方於到期日搬離佔用單位，否則甲方有權將單位內的貨物搬離，一切費用由乙方承擔。甲方將不負責搬運時貨物之任何損失或毀壞。。</Text>
                            <Text style={styles.text}>4.7若乙方於協議期前取消服務，仍需要付整段協議之服務費，而已預繳之服務費在任何情況下將不獲退還。</Text>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>5. 搬遷場地</Text>
                            <Text style={styles.text}>5.1甲方可隨時向乙方發出七日書面通知把乙方的存放倉搬遷到甲方指定的其他場地。在這情況下，運輸費則由甲方承擔。</Text>
                            <Text
                                style={styles.text}>5.2若乙方的存放倉被搬遷到甲方指定的其他場地，本協議將繼續有十足效力，其服務費亦將繼續適用直至另行通知或依據本條款4.6作出調整。</Text>
                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>6.不轉讓</Text>
                            <Text style={styles.text}>本協議的利益純粹是乙方個人的並不可以轉讓。</Text>


                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>7. 責任限制</Text>
                            <Text
                                style={styles.text}>7.1對存放於該單位的所有貨品的任何損失、損毀、磨損、丟失或毀壞，不論各項是否因甲方及僱員或代理人或其他單位使用人的任何行為或行為疏忽或故意失責所造成，甲方概不負責，甲方亦不對乙方因所述貨品的任何損失、損毀而承擔任何責任。</Text>
                            <Text style={styles.text}>7.2甲方在所述貨品存放在該單位期間不會就所述貨品投保，其風險全部由乙方承擔。乙方有責任為自己的貨物合理投保。</Text>
                            <Text
                                style={styles.text}>7.3乙方確認並同意使用甲方網站及任何服務時完全由乙方承擔風險。甲方不以任何方式就使用甲方網站或誤解網站內容而產生的任何直接或間接損害或承擔責任。</Text>
                            <Text
                                style={styles.text}>7.4乙方應負責確保對貨品進行仔細妥善包裝及採用儲存時合理所需充分的保護措施。對於包裝或保護措施不充分或不妥當、貨品隨著時間的推移可能出現的變質、乙方決定存儲的物件的易碎性、任何貨物缺陷或出於法律原因進行的任何貨物沒收或扣押而產生的物件損失，甲方一概不負責。</Text>
                            <Text style={styles.text}>7.5因本協議項下的失實陳述或任何默示保證或條件或明示規定等所有情況，甲方及其僱員或代理人均不就根據本協議產生的或本協議有關的任何損失或損害費用、開支或其他申索(不論是否因甲方及其僱員或代理人或其他人的疏忽所造成)
                                對乙方負責。</Text>
                            <Text
                                style={styles.text}>7.6甲方以當前可用的狀態提供網站，包括其中的所有錯誤。甲方不保證使用網站時將不含任何錯誤或不中斷或任何缺陷將得以糾正。</Text>
                            <Text style={styles.text}>7.7甲方將基本根據本協議規定，採用合理謹慎態度和技能提供服務。甲方不就服務作出任何其他承諾或擔保。</Text>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>8. 終止協議</Text>
                            <Text style={styles.text}>8.1甲方如在協議期內要求終止本協議，甲方有權於三十天前預先以書面或電郵形式通知乙方終止協議。而餘下之預繳款項亦發還給乙方，故此，
                                乙方必須給予正確通訊地址，聯絡電郵及電話予甲方及按時與甲方更新其資料。若乙方未能於通知期內搬離，則甲方有權在其高級職員見證下將乙方貨物搬離至其他區分。甲方將不負責搬運時貨物之任何損失或毀壞。</Text>
                            <Text style={styles.text}>8.2若乙方尚未支付根據本協議應付的任何服務費或其他費用或乙方違反本協議，乙方不得終止協議。</Text>
                            <Text style={styles.text}>8.3若乙方違反本協議，甲方可向乙方發出書面通知終止本協議，儘管可能有任何通知期，但該終止應立即生效。</Text>
                            <Text
                                style={styles.text}>8.4本協議終止時，乙方應將所述貨品移離存放倉並使倉內處於整潔完整如同開始日相同的狀態，乙方應就還原存放倉或處置留在倉內任何所述貨品和廢棄物所招致的任何費用負責。</Text>
                            <Text
                                style={styles.text}>8.5發出通知終止協議時，不論任何理由，乙方必須無條件將該單位交還予甲方，並不能向甲方提出任何索償，若餘下預繳款項或按金扣除應付的任何服務費或其他費用後須歸還乙方。</Text>
                            <Text
                                style={styles.text}>8.6若乙方沒有在本協議終止後將全部所述貨品移離存放倉，甲方保留權利將所述貨品視為被棄置，並在之後出售、銷毀或處置所述貨品和運用任何出售的收入。若經過處置所述貨品的收入不足以支付根據本協議到期的金額及處置所述貨品所招致的任何費用，甲方保留權利再向乙方追收全部費用。</Text>


                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>


                            <Text style={styles.title}>9. 規章制度</Text>
                            <Text style={styles.text}>甲方應自由地不時修訂有關服務使用的規章制度，乙方應遵守和履行該等規章制度，就如該等規章是本協議的條款一樣。</Text>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>10. 不可抗力及惡劣天氣</Text>
                            <Text style={styles.text}>10.1若因不可抗力導致甲方未能提供或延遲提供服務，甲方將不對此負責或承擔責任。</Text>
                            <Text
                                style={styles.text}>10.2不可抗力指甲方合理控制範圍之外的任何不可預見的情況，包括但不限於戰爭、戰爭威脅、恐怖活動、罷工或其他勞工行動、暴動、火災、暴風或任何其他自然災害、電信網路故障、停電、交通環境、道路封閉、意外或任何其他不可預見的情況。</Text>
                            <Text
                                style={styles.text}>10.3若發生不可抗力，甲方將盡快聯繫乙方，並將採取所有合理措施減少對服務的影響。如因發生不可抗力而對服務的影響或停止運作，乙方亦不能追究任何責任。</Text>
                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>


                            <Text style={styles.title}>11. 對甲方作出彌償</Text>
                            <Text
                                style={styles.text}>11.1對於因乙方的任何違反本協議的行為產生的所有索賠、責任、損害、成本、費用、損失及法律費用，乙方同意根據要求向甲方、其僱員、代理、供應商及董事進行彌償，為其進行抗辯並使其不致因此而遭受損害。本條款同樣適用於因乙方使用甲方網站或服務、或乙方的賬戶下任何其他主體使用甲方網站或服務而產生的任何其他責任。</Text>
                            <Text
                                style={styles.text}>11.2若在本協議終止時乙方沒有將全部所述貨品移離存放倉或未按照本協議第8.4條將處於整潔完整狀態和處於與開始日相同狀態的存放倉交還。乙方應就甲方因此受到的任何損失或損害、招致的所有費用和開支對甲方作出彌償，並使甲方獲得上述各項的彌償。</Text>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>12. 通知</Text>
                            <Text style={styles.text}>12.1乙方發送給甲方的任何通知必須以書面形式併由甲方確認後作實。</Text>
                            <Text style={styles.text}>12.2乙方有責任確保其資料及聯絡方式的真確性，資料若有變動，須於七天內以書面形式通知甲方更新。</Text>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>13. 隱私</Text>
                            <Text style={styles.text}>乙方提供的個人資料主要用於甲方日常運作及資料貯存。甲方會對乙方的資料保密，在甲方認為有需要或適當時可將乙方提供的個人資料提供及披露給任何對甲方有保密責任的人或公司，包括已承諾保持該資料保密的集團內的公司或商戶或商業夥伴。甲方亦在甲方認為有需要時可將乙方提供的個人資料提供及披露給香港政府特別行政區其轄下之任何機構及部門等。乙方提供的個人資料只可於乙方同意及准許下才向有關方面披露，而甲方作出有關方面披露是在
                                [ 個人資料(私隱)條例 ] 所允許的情況下，才向有關方面提供及披露。</Text>

                            <Separator style={{backgroundColor: "#FFF", height: 20}}/>

                            <Text style={styles.title}>14. 其他約定及適用法律</Text>
                            <Text
                                style={styles.text}>14.1本協議不應對乙方設定而構成任何租約，亦不賦予乙方任何租貸權利，甲方與乙方之間亦不應構成業主和租戶的關係。</Text>
                            <Text style={styles.text}>14.2若乙方為兩個或以上的人士，其在本協議項下的義務應是共同和個別的。</Text>
                            <Text style={styles.text}>14.3本公司保留權利拒絕接受任何貨品而不提供任何理由。</Text>
                            <Text style={styles.text}>14.4本協議及因本協議或本協議標的或形式構成而產生的或與其相關的任何爭議應受香港法律管轄並據其解釋。</Text>
                            <Text style={styles.text}>14.5若中文版本與英文版本之間存在任何不一致之處，應以中文版本為準。</Text>
                            <Text
                                style={styles.text}>14.6本協議及本協議任何書面修正案構成雙方就標的所達成的完整協定，並取代和排除雙方先前達成的任何口頭或書面的協定、諒解或安排。除本協議中指出的隱私政策外，不存在雙方已達成一致但未在本協議中全面規定的聲明、擔保或約定，且除本協議的明確規定外，未授權甲方代表或其代理作出任何聲明、擔保或約定。除非本協議中另有規定，否則所有修正必須以書面形式作出並經雙方簽署。</Text>
                            <Text style={styles.text}>14.7甲方保留不時對本協議條款和條件進行修正的權利，且在每次購買甲方服務時，乙方應有責任查看本協議條款及條件的最新版本,本協議的最新版本可於
                                HoiTong海棠 上查看，乙方持續使用甲方服務將視為代表乙方持續接受本協議的最新版本。</Text>
                            <Text style={styles.text}>14.8如有任何爭議，甲方將保留最終決定權。</Text>
                            <Text style={styles.text}>14.9雙方未能行使或強制執行本協議的任何權利或條款不得構成放棄相關權利或條款。</Text>
                            <Text style={styles.text}>14.10本協議所有條款應平等適用於甲方、其子公司、甲方的任何控股公司、甲方(或前述各個主體)
                                的關聯方及甲方(和前述各個主體)的第三方資訊提供商及許可方，並應符合其利益，且前述每個主體均應有權直接或代表其自身主張並強制執行相關條款(但是，本協議可在未獲得前述各方同意的情況下進行變更或撤銷)，在遵守前一句規定的前提下，本協議任何條款不可由本協議簽訂者之外的任何主體強制執行。若具有管轄權的任何法院、仲裁機構或行政管理機構確認本協議任何條款無效或可執行，則相關無效性或不可執行性不得影響本協議其他條款，其他條款應繼續全面有效並具有效力。若本協議任何條款如前所述被認定為無效或不可執行，但在刪除部分內容後可具有效力或可以執行，則應對相關條款進行合理必要的修正，以便使其有效且同時反映雙方意圖。</Text>
                            <Text
                                style={styles.text}>14.11在任何情況下，本協議中從其本身性質而言可在終止後合理存續的所有條款應在終止後存續有效，包括但不限於所有權條款、擔保免責條款及責任限制條款。若乙方再次使用網站或服務，則乙方對網站或服務的再次使用將受届時適用的條款和條件管轄。若乙方使用在本協議項下購買的服務，則適用於相關服務的相關條款將在本協議終止後存續有效。</Text>
                            <Text style={styles.text}>14.12各方均應對本協議雙方之間披露的任何及所有資訊進行嚴格保密。本條規定應在本協議終止後仍存續有效。</Text>

                            <Text style={styles.text}>14.13本協議應受香港法律管轄，本協議雙方將依香港特別行政區法院的專屬管轄權。</Text>


                            </Body>
                        </CardItem>

                    </Card>
                </Content>

                {/*<Content padder>*/}


                {/*</Content>*/}
            </Container>
        );
    }
}
