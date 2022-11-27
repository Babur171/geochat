import React, { useState } from 'react'
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { styles } from './styles'
import { Button } from '@/Components/Button'


const ChooseWallpaper = ({ navigation }) => {
//   const [dataa, setDataa] = useState([])
  const data = [
    require('../../Assets/profile.png'),
  ]
  const renderItem = item => {
    return (<View style={{ width: 200, height: 200 }}>{item.data}</View>)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { flexDirection: 'row' }]}>
        <TouchableOpacity>
          <Image
            // @ts-ignore
            source={require('../../Assets/back.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.description}>Choose a wallpaper</Text>
      </View>
      <View>
        <FlatList data={data} renderItem={renderItem} />
        {/* {data.map((item, index)=>{
            return(
<View style={{width:200,height:200, flex:1}}>{item.data}</View>
            )
        })} */}
      </View>
    </View>
  )
}

export default ChooseWallpaper
