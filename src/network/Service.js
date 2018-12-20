'use strict';

import {
    AsyncStorage,
    Alert,
    DeviceEventEmitter
} from 'react-native';

import md5 from 'md5'
import User from '../entity/User'
import common from '../common/common'

var GLOBAL_USER = Object.create(User);

class Service {

    constructor() {

    }

    fetchNet(param, method) {

        let url = common.apiurl

        return new Promise((resolve, reject) => {

            fetch(url, {
                method: method,
                headers: {

                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Accept' : 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;',
                    // 'Content-Type' : 'application/json,text/plain;charset=UTF-8',
                    // 'User-Agent' : 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.89 Safari/537.36',
                    // 'Host' : API.URL,


                },
                body: JSON.stringify(param)

            })
                .then((response) => response.json())
                .catch((error) => {
                    reject(error);
                }).then((responseData) => {

                console.log("responseData ", responseData);


                if (!responseData) {
                    reject(new Error('responseData is null'));
                    return;
                }
                resolve(responseData);
                //   this.saveData(url,responseData.result)
            }).done();

        })
    }


    /**
     * 获取我的所有订单
     */
    getMyOrderList(userid, status) {

        let param = {
            'app_id': common.appid,
            'method': 'myorder',
            'format': 'json',
            'sign_method': 'md5',
            'nonce': 'nonce',
            'sign': md5(common.secret + common.secret).toUpperCase(),


            'userid': userid,
            'status': status
        };
        console.log("准备请求 param: ", param);

        return new Promise((resolve, reject) => {

            this.fetchNet(param, 'POST').then((wrapData) => {

                resolve(wrapData);
            }).catch((error) => {
                reject(error);
            })
        })
    }


    loginSystem(email, pwd) {


        let param = {
            'app_id': common.appid,
            'method': 'login',
            'format': 'json',
            'sign_method': 'md5',
            'nonce': 'nonce',
            'sign': md5(common.secret + common.secret).toUpperCase(),


            'email': email,
            'password': pwd
        };
        console.log("准备请求 param: ", param);


        return new Promise((resolve, reject) => {

            this.fetchNet(param, 'POST').then((wrapData) => {
                if (wrapData.status) {
                    Object.assign(GLOBAL_USER, wrapData.data);

                    AsyncStorage.setItem("user", JSON.stringify(GLOBAL_USER));
                    AsyncStorage.setItem("email", email);
                    AsyncStorage.setItem("password", pwd);
                }

                resolve(wrapData);
            }).catch((error) => {
                reject(error);
            })
        })
    }


    regSystem(name, email, pwd, confirmPwd) {

        let param = {
            'app_id': common.appid,
            'method': 'register',
            'format': 'json',
            'sign_method': 'md5',
            'nonce': 'nonce',
            'sign': md5(common.secret + common.secret).toUpperCase(),

            'name': name,
            'email': email,
            'password': pwd,
        };


        console.log("准备请求 param: ", param);

        return new Promise((resolve, reject) => {

            this.fetchNet(param, 'POST').then((wrapData) => {

                Object.assign(GLOBAL_USER, wrapData.data);
                AsyncStorage.setItem("user", JSON.stringify(GLOBAL_USER));

                resolve(wrapData);
            }).catch((error) => {
                reject(error);
            })
        })
    }

    submitOrder(order, token) {

        let param = {
            'app_id': common.appid,
            'method': 'submitorder',
            'format': 'json',
            'sign_method': 'md5',
            'nonce': 'nonce',
            'sign': md5(common.secret + common.secret).toUpperCase(),


            'user_id': order.user_id ,
            'contact_email': order.contact_email,
            'contact_name': order.contact_name,
            'contact_phone': order.contact_phone,
            'contact_address': order.contact_address,
            'contact_region': order.contact_region,
            'contact_district': order.contact_district,

            'pick_up_schedule_time': order.pick_up_schedule_time,
            'pick_up_schedule_time_range': order.pick_up_schedule_time_range,
            'schedule_time': order.schedule_time,
            'schedule_time_range': order.schedule_time_range,



            'remark': order.remark,
            'service_type': order.service_type,
            'service_name': order.service_name,
            'service_code': order.service_code,
            'service_fee':  order.service_fee ,
            'quantity': order.quantity,
            'month': order.month ,
            'survey': order.survey,
            'article_quantity': order.article_quantity,
            'walkup': order.walkup,
            'photo': order.photo,
            'furniture': order.furniture,
            'disassemble': order.disassemble,
            'status': 2,
            'stripe_token': token,


        };

        console.log("准备请求 param: ", param);

        return new Promise((resolve, reject) => {

            this.fetchNet(param, 'POST').then((wrapData) => {
                resolve(wrapData);
            }).catch((error) => {
                reject(error);
            })
        })
    }


    getUserFromCache() {
        //AsyncStorage.removeItem("_osc_user_");
        return AsyncStorage.getItem("user")
            .then((result) => {
                if (result) {

                    Object.assign(GLOBAL_USER, JSON.parse(result));
                }
                return GLOBAL_USER;
            }).catch(err => {
                console.log('getUserFromCache err is: ' + err);
            });
    }

    logout() {
        GLOBAL_USER = Object.create(User);
        AsyncStorage.removeItem("user");
        // DeviceEventEmitter.emit('DidLogin', 'ok');

    }

    isLogined() {
        return GLOBAL_USER
            && GLOBAL_USER.id
            && GLOBAL_USER.id.length > 0;
    }

    userId() {
        return GLOBAL_USER.id


    }

}

const service = new Service();
module.exports = service;
module.exports.GLOBAL_USER = GLOBAL_USER;
