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
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },
    { image: require('../../Assets/profile.png') },

  ]
  const renderItem = ({ item }) => {
    return (
    <View style={{ flex: 1, }}>
      <View style={{marginVertical:10}}>
      <Image source={item.image} style={{ width: 101, height: 107, }}/>
      </View>
    </View>)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            // @ts-ignore
            source={require('../../Assets/backIcon.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.description}>Choose a wallpaper</Text>
        <View></View>
      </View>
      <View style={{marginHorizontal:32}}>
        <FlatList data={data} renderItem={renderItem} numColumns={3} />
        
      </View>
    </View>
  )
}

export default ChooseWallpaper
