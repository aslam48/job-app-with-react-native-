import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'

import styles from './welcome.style'
import {useRouter} from 'expo-router'
import {icons, SIZES} from '../../../constants'

const Welcome = () => {
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Aslam</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput}/>
      </View>
    </View>
    </View>
  )
}

export default Welcome