import React,{Component}from 'react';

import {View, Text, Image, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
const dataSources =[
  {name:'1栋 401',tap:'2018-06-07 10:12',time:'8分钟',tagType:'赶房',ty:'待清洁'},
  {name:'1栋 401',tap:'2018-06-07 10:12',time:'50分钟',tagType:'特殊清洁',ty:'待检查'},
  {name:'1栋 402',tap:'2018-06-07 10:12',time:'1小时10分钟',tagType:'住客服务',ty:'处理中',ts:'客人换房'},
  {name:'1栋 403',tap:'2018-06-07 10:12',time:'1小时10分钟',tagType:'住客服务',ty:'处理中',ts:'物品输送'},

];

export default class Index extends Component{

  constructor(props){
    super(props)

    this.state={
      dataSource:[]
    }
  }
  componentDidMount(){
    this.setState({
      dataSource:dataSources
    })
  }

  detailClick(){
    alert('=====')
  }

  listHeaderComponent(){
    return(
      <View style={Style.headerView}>
        <Image style={Style.headerImage} />
        <View>
          <Text style={Style.headerName}>{'艾薇儿'}</Text>
          <View style={Style.headerTimeoutView}>
            <Text style={Style.timeoutTxt}>{'超时未开始工单:'}</Text>
            <Text style={Style.timeoutNumber}>{'11'}</Text>
            <Text style={Style.timeNoFinishTxt}>{'超时未完成工单:'}</Text>
            <Text style={Style.timeoutNumber}>{'11'}</Text>
          </View>
        </View>
      </View>
    )
  }


  renderItem =({item})=> {
    return(<View style={Style.mainView}>
      <TouchableOpacity onPress={()=>this.detailClick()}>
        <View style={Style.titleView}>
          <Text style={Style.titleTxt}>{item.name}</Text>
          {item.ts?<View style={{justifyContent:'center',alignItems:'center',height:18,borderRadius:12,backgroundColor:'#F5F5FA'}}>
              <Text style={{fontSize:12,color:'#333333',fontFamily:'PingFangSC-Regular',marginLeft:10,marginRight:10}}>{item.tagType}</Text>
            </View>
            :null}
        </View>
        <View style={Style.timeView}>
          <Text style={Style.timeTxt}
                numberOfLines={1}>{'下单时间：'+item.tap}</Text>
          <View style={Style.timeSView}>
            <View style={[Style.radiusView,{ backgroundColor:selectColor[item.ty]}]} />
            <Text style={Style.radiusTxt} >{item.ty}</Text>
          </View>
        </View>
        <View style={Style.timeViews}>

          <View style={{justifyContent:'center',alignItems:'center',height:21,borderRadius:3,
            borderWidth:StyleSheet.hairlineWidth,borderColor:'#D7000F',backgroundColor:'rgb(249,236,236)'}}>
            <Text style={{fontSize:12,fontFamily:'PingFangSC-Medium',marginLeft:10,marginRight:10,color:'#D7000F'}}>{'耗时'+ item.time}</Text>
          </View>
        </View>
        <View style={Style.imageView}>
          <Text style={Style.imageTxt}>{item.tagType}</Text>
        </View>

      </TouchableOpacity>

    </View>)

  }

  renderSeparator(){
    return(
      <View style={{height:10}}/>
    );
  }

  render(){
    const {dataSource} = this.state
    return(
        <View style={{flex:1,backgroundColor:'#F5F5FA'}}>
          <View style={{height:64,backgroundColor:'white'}}>
          </View>
          <FlatList
            data={dataSource}
            keyExtractor = {(item, index) => index.toString()}
            renderItem={this.renderItem}
            ListHeaderComponent={this.listHeaderComponent}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
    )
  }
}

const Style = StyleSheet.create({
  mainView: {
    backgroundColor: 'white'
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15
  },
  titleTxt:{
    color: '#333333',
    fontSize:19,
    marginRight: 15,
    fontFamily:'PingFangSC-Medium'
  },
  timeView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15
  },
  timeSView:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  timeTxt:{
    color: '#666666',
    fontSize:15
  },
  radiusView:{
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  radiusTxt:{
    color:'#333333',
    fontSize:15
  },
  timeViews:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15
  },
  imageView:{
    width: 65,
    height:25,
    top: 0,
    right: 0,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
    borderBottomLeftRadius:15,
    backgroundColor:'#FF3B37'

  },
  imageTxt:{
    color: 'white',
    fontSize:12,
    backgroundColor:'#fff0',
    fontFamily:'PingFangSC-Medium'
  },
  headerView:{
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom:10
  },
  headerImage:{
    width: 50,
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 50/2,
    backgroundColor:'red'
  },
  headerName:{
    fontSize:18,
    marginTop:15,
    marginBottom:9,
    fontFamily:'PingFangSC-Medium'
    ,color:'#333333'
  },
  headerTimeoutView:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom:15
  },
  timeoutTxt:{
    fontSize: 12,
    fontFamily: 'PingFangSC-Regular',
    color: '#666666'
  },
  timeoutNumber:{
    fontSize: 12,
    fontFamily: 'PingFangSC-Regular',
    color: '#D7000F'
  },
  timeNoFinishTxt:{
    fontSize: 12,
    fontFamily: 'PingFangSC-Regular',
    color: '#666666',
    marginLeft:25
  },

})
 const selectColor={
  '待清洁':'#1E88F5',
  '待检查':'#1E88F5',
  '处理中':'#FF3B37',
}


