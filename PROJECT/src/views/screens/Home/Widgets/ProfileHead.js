import { Image, Text, View, HomeStyleheet } from 'react-native'
import Avatar from '../../../../assets/avatar.jpeg'
import account from '../../../../consts/account';
import HomeStyle from '../HomeStyle';

const ProfileHead = () =>{
    let usernameArr = account.fullname.split(' ');
    let username = usernameArr[0];
    return (
      <View style={HomeStyle.header}>
        <View style={{flexDirection:'row'}}>
          <View style={{ flexDirection: 'column',flex:3 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 24 }} >Hi,</Text>
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >{username}</Text>
            </View>
            <Text style={{ fontSize: 18, marginTop: 5, color: "black" }} >{account.studentid}</Text>
          </View>
          <View style={{flex:1,justifyContent:'flex-start', alignItems:'flex-end'}}>
            <Image source={Avatar} style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'purple', borderColor: 'purple'}} />
          </View>
        </View>
      </View>
        
    )
}

export default ProfileHead;