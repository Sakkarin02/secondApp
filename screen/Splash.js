import React from 'react';
import { StyleSheet,View, Image, Text } from 'react-native';

const flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image style={styles.image} source={require('../assets/lru.png')} />
        </View>
      
      <View style={[styles.section]}>
        <Text style={styles.text}>สมุนไพรท้องถิ่นเลย</Text>
      </View>

      <View style={styles.section}>
        <Image style={styles.coverScreenImage} source={require('../assets/ccc.jpg')} />
      </View>

      <View style={styles.screeSection}>
      <Image style={styles.image} source={require('../assets/sss.jpg')} />
      <Image style={styles.image} source={require('../assets/xxx.jpg')} />
      <Image style={styles.image} source={require('../assets/zzz.jpg')} />
      </View>

      <View style={[styles.section]}>
      <Text style={styles.text}>มหาวิทยาลัยราชภัฏเลย</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:'black',
    flexDirection:'column',
  },
  section:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
  },
  coverScreenImage:{
    width:'100%',
    height:200,//ปรับความสูงตามที่ต้องการ
    resizeMode:'cover',
    marginTop:100,//เลื่อนลงข้างล่างเพิ่มเติม
  },
  screeSection:{
    flex:3,//ให้ส่วนนี้ใช้พื้นที่มากขึ้น
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    flexDirection:'row',
    marginTop:100,//เลื่อนลงข้างลางเพิ่มเติม
  },
  image:{
    width:110,
    height:145,
    marginHorizontal:10,//เพิ่ม margin แนวนอนระหว่างรูปภาพ
  },
  text:{
    textAlign:'center',
    fontSize:32,
    color:'white'
  },
});

export default flex;