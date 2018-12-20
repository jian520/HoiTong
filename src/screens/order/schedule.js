import React, {Component} from "react";
import {Image, StyleSheet, StatusBar,Keyboard} from "react-native";
import DatePicker from 'react-native-datepicker'
import {
    Container,
    Content,
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body, Text, H2, View, H3, Form, Item, Input, List, ListItem, Thumbnail, CheckBox
} from "native-base";
import {Grid, Row, Col} from "react-native-easy-grid";
import Picker from 'react-native-picker';
import area from '../../data/area';
import {questionData, surveyData, quantityData} from "../../common/data";
import common from "../../common/common";
import styles from "./styles";
import Order from "../../entity/Order";
import serviceType from "../../data/service_type";
var order = Object.create(Order);

export default class Schedule extends Component {

    constructor(props) {
        super(props);

        order.service_type = this.props.navigation.state.params.service_items[0].type
        order.service_items = this.props.navigation.state.params.service_items


        if (order.service_type == 'plan' || order.service_type == 'moving') {

            let serviceItem = this.props.navigation.state.params.service_items[0]
            order.service_type = serviceItem.type
            order.service_code = serviceItem.code
            order.service_name = serviceItem.name
            order.quantity = serviceItem.amount
            order.month = serviceItem.month
            order.service_fee = serviceItem.month * serviceItem.price
        } else {
            let serviceItems = this.props.navigation.state.params.service_items

            var listAmount = []
            var listName = []
            var listCode = []
            var listMonth = []
            var totalPrice = 0
            for (var i in  serviceItems) {
                listCode.push(serviceType[order.service_type][i].code)
                listName.push(serviceType[order.service_type][i].name)

                listAmount.push(serviceItems[i].amount.toString())
                listMonth.push(serviceItems[i].month.toString())

                totalPrice += serviceItems[i].amount * serviceItems[i].price * serviceItems[i].month
            }
            order.service_code = JSON.stringify(listCode)
            order.service_name = JSON.stringify(listName)
            order.quantity = JSON.stringify(listAmount)
            order.month = JSON.stringify(listMonth)

            order.service_fee = totalPrice
        }

        console.log('order ' + order)

        this.state = {

            address1: "",
            address2: "",
            // selectDate: "請選擇日子",
            // selectTime: "請選擇時間",


            contactName: "",
            contactEmail: "",
            contactPhone: "",
            contactRegion: "",
            contactDistrict: "",
            contactAddress: "",
            pickupScheduleTime: "",
            pickupScheduleTimeRange: "",
            scheduleTime: "",
            scheduleTimeRange: "",
            remark: "",
            survey: "",
            articleQuantity:"",

            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false

        };
    }

    createAreaData() {
        let data = [];
        let len = area.length;
        for (let i = 0; i < len; i++) {
            let city = [];
            for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }

    showAreaPicker() {
        Picker.init({
            pickerData: this.createAreaData(),
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇區域",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [46, 181, 172, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue[0] + " " + pickedValue[1]);


                this.setState({
                    contactRegion: pickedValue[0],
                    contactDistrict: pickedValue[1]

                });
                order.contact_region = this.state.contactRegion
                order.contact_district = this.state.contactDistrict

            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }

    createDateData() {
        var cdate=new Date;
        var year=cdate.getFullYear()

         var d = cdate.getDate()


        let date = [];
        for (let i = year; i < year + 30; i++) {
            let month = [];

            var j = 1
            if (i == year ) {
                j =  cdate.getMonth() + 1
            }

            for (j; j < 13; j++) {
                let day = [];


                var k = 1
                if (j == cdate.getMonth() + 1 ) {
                    k = cdate.getDate() + 1
                }

                if (j === 2) {

                    for (  k ; k < 29; k++) {
                        day.push(k + '日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if (i % 4 === 0) {
                        day.push(29 + '日');
                    }
                }
                else if (j in {1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1}) {

                    for (  k ; k < 32; k++) {
                        day.push(k + '日');
                    }
                }
                else {

                    for (k; k < 31; k++) {
                        day.push(k + '日');
                    }
                }

                let _month = {};
                _month[j + '月'] = day;
                month.push(_month);

            }



            let _date = {};
            _date[i + '年'] = month;
            date.push(_date);
        }
        return date;
    }

    showDatePicker(index) {
        Picker.init({
            pickerData: this.createDateData(),
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇日子",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [46, 181, 172, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);


                if (index == 1 ) {
                    this.setState({
                        pickupScheduleTime: pickedValue[0] + pickedValue[1] + pickedValue[2]
                    });
                    var str = pickedValue[0] +'-'+ pickedValue[1]+'-'+ pickedValue[2]
                    str = str.replace('年', '')
                    str = str.replace('月', '')
                    str = str.replace('日', '')

                    order.pick_up_schedule_time = str       // this.state.pickupScheduleTime

                } else  if (index == 0 ) {
                    this.setState({
                        scheduleTime: pickedValue[0] + pickedValue[1] + pickedValue[2]
                    });

                    var str = pickedValue[0] +'-'+ pickedValue[1]+'-'+ pickedValue[2]
                    str = str.replace('年', '')
                    str = str.replace('月', '')
                    str = str.replace('日', '')

                    order.schedule_time = str   // this.state.scheduleTime
                }


            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

    showTimePicker(index) {
        Picker.init({
            pickerData: ["10:00 - 14:00", "14:00 - 17:00"],
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇時間",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [46, 181, 172, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue[0]);

                if (index == 1 ) {
                    this.setState({
                        pickupScheduleTimeRange: pickedValue[0]
                    });
                    order.pick_up_schedule_time_range = this.state.pickupScheduleTimeRange
                } else  if (index == 0 ) {
                    this.setState({
                        scheduleTimeRange: pickedValue[0]
                    });
                    order.schedule_time_range = this.state.scheduleTimeRange
                }

            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }

    showSurveyPicker() {
        Picker.init({
            pickerData: surveyData,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇時間",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [46, 181, 172, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],

            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('area', pickedValue[0]);

                this.setState({
                    survey: pickedValue[0]
                });
                order.survey = pickedIndex[0]

            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }

    showQuantityPicker() {
        Picker.init({
            pickerData:quantityData,
            pickerConfirmBtnText: "確定",
            pickerTitleText: "請選擇數量",
            pickerCancelBtnText: "取消",
            pickerToolBarBg: [46, 181, 172, 1],
            pickerTitleColor: [255, 255, 255, 1],
            pickerCancelBtnColor: [255, 255, 255, 1],
            pickerConfirmBtnColor: [255, 255, 255, 1],

            onPickerConfirm: (pickedValue, pickedIndex) => {
                console.log('area', pickedValue[0]);

                this.setState({
                    articleQuantity: pickedValue[0]
                });
                order.article_quantity = pickedIndex[0]
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }


    next() {

        var name = this.state.contactName
        var email = this.state.contactEmail
        var phone = this.state.contactPhone
        var address1 = this.state.address1
        var address2 = this.state.address2


        if (!this.checkName(name)) {
            alert("姓名不能小於2個字符");
            return;
        }
        order.contact_name = name
        order.remark = this.state.remark

        if (!this.checkPhone(phone)) {
            alert("輸入8位數字電話號碼");
            return;
        }

        var phone = parseInt(phone);
        if (isNaN(phone)) {
            alert("請輸入正確的數字電話號碼");
            return;
        }


        order.contact_phone = phone


        if (!this.isEmail(email)) {
            alert("請輸入正確的郵件格式");
            return;
        }
        order.contact_email = email

        if (address1.length == 0 && address2.length == 0) {
            alert("請輸入地址");
            return;
        }
        order.contact_address = address1 + address2


        if (this.state.contactRegion == "") {
            alert("請選擇區域");
            return;
        }
        if (this.state.contactDistrict == "") {
            alert("請選擇地區");
            return;
        }

        if (this.state.scheduleTime == "") {
            alert("請選擇日子");
            return;
        }
        if (this.state.scheduleTimeRange == "") {
            alert("請選擇時間");
            return;
        }
        Keyboard.dismiss()
        this.props.navigation.navigate("Overview", {"info": order})


    }


    checkName(name) {
        return name && name.length >= 2;
    }

    checkPhone(phone) {
        return phone && phone.length == 8;
    }

    isIntNum(val) {
        var regPos = / ^\d+$/; // 非负整数

        if (regPos.test(val)) {
            return true;
        } else {
            return false;
        }
    }

    checkAddress(address) {
        return address && address.length >= 1;
    }

    isEmail(str) {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        return reg.test(str);
    }

    renderQuantity() {

        if (order.service_type == 'plan' || order.service_type == 'moving') {

            return (

                <View>
                    <ListItem itemDivider>
                        <Text>請告訴我們您預計會儲存的紙皮箱/物件/傢俬的數量，我們將提供適量條碼。</Text>
                    </ListItem>
                    <ListItem icon last onPress={() => this.showQuantityPicker()}>

                        <Body>
                        <Text>數量</Text>
                        </Body>
                        <Right>
                            <Text>{this.state.articleQuantity}</Text>
                            <Icon active name="arrow-forward"/>
                        </Right>

                    </ListItem>
                </View>

            )
        }

    }

    renderQuestion() {
        if (order.service_type == 'plan' || order.service_type == 'moving') {

            const data =  questionData
            return (
                <View>
                    <ListItem itemDivider>
                        <Text> </Text>
                    </ListItem>

                    <ListItem avatar>
                        <Left>
                            <Thumbnail small source={data[0].img}/>
                        </Left>
                        <Body>
                        <Text>
                            {data[0].text}
                        </Text>
                        <Text numberOfLines={1} note>
                            {data.note}
                        </Text>
                        </Body>
                        <Right>
                            <CheckBox style={styles.checkbox}
                                      color={common.colorA}
                                      checked={this.state.checkbox1}
                                      onPress={() => this.toggleSwitch1()}
                            />

                        </Right>
                    </ListItem>

                    <ListItem avatar>
                        <Left>
                            <Thumbnail small source={data[1].img}/>
                        </Left>
                        <Body>
                        <Text>
                            {data[1].text}
                        </Text>
                        <Text numberOfLines={1} note>
                            {data.note}
                        </Text>
                        </Body>
                        <Right>
                            <Body>
                            <CheckBox style={styles.checkbox}
                                      color={common.colorA}
                                      checked={this.state.checkbox2}
                                      onPress={() => this.toggleSwitch2()}
                            />
                            </Body>
                        </Right>
                    </ListItem>

                    <ListItem avatar>
                        <Left>
                            <Thumbnail small source={data[2].img}/>
                        </Left>
                        <Body>
                        <Text>
                            {data[2].text}
                        </Text>
                        <Text numberOfLines={1} note>
                            {data.note}
                        </Text>
                        </Body>
                        <Right>
                            <Body>
                            <CheckBox style={styles.checkbox}
                                      color={common.colorA}
                                      checked={this.state.checkbox3}
                                      onPress={() => this.toggleSwitch3()}
                            />
                            </Body>
                        </Right>
                    </ListItem>

                    <ListItem avatar>
                        <Left>
                            <Thumbnail small source={data[3].img}/>
                        </Left>
                        <Body>
                        <Text>
                            {data[3].text}
                        </Text>
                        <Text numberOfLines={1} note>
                            {data.note}
                        </Text>
                        </Body>
                        <Right>
                            <Body>
                            <CheckBox style={styles.checkbox}
                                      color={common.colorA}
                                      checked={this.state.checkbox4}
                                      onPress={() => this.toggleSwitch4()}
                            />
                            </Body>
                        </Right>
                    </ListItem>

                </View>

            )
        }

    }

    toggleSwitch1() {

        this.setState({checkbox1: !this.state.checkbox1}, function () {
            order.walkup = this.state.checkbox1 ? 1 : 0
        })
    }

    toggleSwitch2() {
        this.setState({checkbox2: !this.state.checkbox2}, function () {
            order.photo = this.state.checkbox2 ? 1 : 0
        })

    }

    toggleSwitch3() {
        this.setState({checkbox3: !this.state.checkbox3}, function () {
            order.furniture = this.state.checkbox3 ? 1 : 0
        })

    }

    toggleSwitch4() {

        this.setState({checkbox4: !this.state.checkbox4}, function () {
            order.disassemble = this.state.checkbox4 ? 1 : 0
        })






    }


    render() {
        return (

            <Container>
                <StatusBar barStyle="light-content"/>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: "#FFF"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>預約時間</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.next()}>
                            <Title>下一步</Title>
                        </Button>
                    </Right>
                </Header>

                <Content>

                    <ListItem itemDivider>
                        <Text>個人資料</Text>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                        <Input style={styles.input} placeholder={"姓名"}
                               onChangeText={(text) => this.setState({contactName: text})}/>
                        </Body>
                    </ListItem>

                    <ListItem icon>
                        <Body>
                        <Input style={styles.input} placeholder={"輸入8位數字電話號碼"}  keyboardType ='numeric'
                               onChangeText={(text) => this.setState({contactPhone: text})}/>
                        </Body>
                    </ListItem>
                    <ListItem icon last>
                        <Body>
                        <Input style={styles.input} placeholder={"電郵地址"} keyboardType ='email-address'
                               onChangeText={(text) => this.setState({contactEmail: text})}/>
                        </Body>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>運送地址</Text>
                    </ListItem>
                    <ListItem icon>
                        <Body>
                        <Input style={styles.input} placeholder={"地址(第一行)"}
                               onChangeText={(text) => this.setState({address1: text})}/>
                        </Body>
                    </ListItem>
                    <ListItem icon last>
                        <Body>
                        <Input style={styles.input} placeholder={"地址(第二行)"}
                               onChangeText={(text) => this.setState({address2: text})}/>
                        </Body>
                    </ListItem>

                    <ListItem icon last onPress={() => this.showAreaPicker()}>
                        <Body>
                        <Text>請選擇區域</Text>
                        </Body>
                        <Right>
                            <Text>{this.state.contactRegion + " " + this.state.contactDistrict} </Text>
                            <Icon active name="arrow-forward"/>
                        </Right>
                    </ListItem>


                    {/*<ListItem>*/}
                    {/*<Button  style={{width: 200, backgroundColor: common.colorA}} onPress={() => this.showAreaPicker()}>*/}
                    {/*<Text >{this.state.contactRegion + " " + this.state.contactDistrict }</Text>*/}
                    {/*</Button>*/}
                    {/*</ListItem>*/}




                    <ListItem itemDivider>
                        <Text>收取迷你箱準備入箱</Text>
                    </ListItem>

                    <ListItem icon onPress={() => this.showDatePicker(0)}>
                        <Body>
                        <Text>請選擇日子</Text>
                        </Body>
                        <Right>
                            <Text>{this.state.scheduleTime}</Text>
                            <Icon active name="arrow-forward"/>
                        </Right>
                    </ListItem>


                    <ListItem icon last onPress={() => this.showTimePicker(0)}>
                        <Body>
                        <Text>請選擇時間</Text>
                        </Body>
                        <Right>
                            <Text>{this.state.scheduleTimeRange}</Text>
                            <Icon active name="arrow-forward"/>
                        </Right>
                    </ListItem>



                    <ListItem itemDivider>
                        <Text>收取物品並存倉</Text>
                    </ListItem>

                    <ListItem icon onPress={() => this.showDatePicker(1)}>
                        <Body>
                        <Text>請選擇日子</Text>
                        </Body>
                        <Right>
                            <Text>{this.state.pickupScheduleTime}</Text>
                            <Icon active name="arrow-forward"/>
                        </Right>
                    </ListItem>


                    <ListItem icon last onPress={() => this.showTimePicker(1)}>
                        <Body>
                        <Text>請選擇時間</Text>
                        </Body>
                        <Right>
                            <Text>{this.state.pickupScheduleTimeRange}</Text>
                            <Icon active name="arrow-forward"/>
                        </Right>
                    </ListItem>


                    <ListItem itemDivider>
                        <Text>特別派送指示</Text>
                    </ListItem>
                    <ListItem last icon style={{height: 100}}>

                        {/*<Body>*/}
                        {/*<Text>特別派送指示</Text>*/}
                        {/*</Body>*/}
                        {/*<Right>*/}
                        {/*<Text>{this.state.remark}</Text>*/}
                        {/*<Icon active name="arrow-forward"/>*/}
                        {/*</Right>*/}

                        <Input multiline={true} style={{marginLeft: -5, height: 100}} placeholder={"例如： '到達時請來電通知'"}
                               onChangeText={(text) => this.setState({remark: text})}/>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>從何途徑認識BOXTIFY？</Text>
                    </ListItem>
                    <ListItem icon last onPress={() => this.showSurveyPicker()}>

                        <Body>
                        <Text>請選擇途徑</Text>
                        </Body>
                        <Right>
                            <Text>{this.state.survey}</Text>
                            <Icon active name="arrow-forward"/>
                        </Right>

                    </ListItem>

                    {this.renderQuantity()}

                    {this.renderQuestion()}


                </Content>


            </Container>
        );
    }
}


