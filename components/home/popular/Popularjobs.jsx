import React, {useState}from 'react'
import { View, Text, TouchableOpacity, FlatList,ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from './popularjobs.style'

  import {COLO, COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRoute()
  const isLoading = false 
  const error = false 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular job</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ) : error ? (
          <Text>something went wrong</Text>
        ) : (
          <FlatList 
          data={[1,2,3,4]}
          renderItem={({item}) => (
        <PopularJobCard  item={item}/>
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs