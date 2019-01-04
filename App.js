/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text,TextInput, View,Image,TouchableOpacity} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class App extends Component {

  //首次进入调用
  constructor(props){
    super(props)
    this.state ={
      userName:'',
      password:''
    }
  }

  changeText = (e,t) => {
    const newData = {};
    newData[e] = t;
    this.setState(newData);//拿到输入框值，重新render
  }

  loginClick=()=>{
    alert('点击登录')
  }

  //渲染组件
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image style={styles.imageFrame} />
        </View>
        <Text style={[styles.titleText, { fontSize: 21 }]}>
          {'用户登录'}
        </Text>
        <View style={styles.userView}>
          <TextInput
            placeholder={'请输入用户名字'}
            placeholderTextColor={'#999999'}
            underlineColorAndroid="transparent"
            style={styles.txtInput}
            onChangeText={(t)=>this.changeText('userName', t)}
            value={this.state.userName}
            keyboardType="numeric"
            autoCapitalize="none"
            returnKeyType="done"
          />
        </View>
        <View style={styles.lineUserView}/>
        <View style={styles.passwordView}>
          <TextInput
            placeholder={'请输入密码'}
            placeholderTextColor={'#999999'}
            underlineColorAndroid="transparent"
            style={styles.txtInput}
            onChangeText={(t)=>this.changeText('password', t)}
            value={this.state.password}
            autoCapitalize="none"
            returnKeyType="done"
          />
        </View>
        <View style={styles.lineUserView}/>
        <TouchableOpacity style={styles.bottomView}
                          activeOpacity={0.5}
                          onPress={() => this.loginClick()}>
          <Text>{'登录'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  imageView: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: screenWidth ,
    marginTop:21

  },
  imageFrame: {
    height:60 ,
    width: 60,
    borderRadius:30,
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    marginTop:29,
    fontSize:16,
    marginLeft: 15,
    fontWeight: 'bold',
    color:'black'
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 36,
  },
  passwordView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 15,
  },
  txtInput: {
    height:40,
    marginRight:15,
    marginLeft:15,
    width: screenWidth - 30,
  },
  bottomView: {
    marginTop: 60,
    borderRadius: 20,
    height: 40,
    width: screenWidth - 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    backgroundColor:'#DAC17D'
  },
  lineUserView: {
    marginLeft: 15,
    marginRight: 15,
    height:0.5,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }

});
