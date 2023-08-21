import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { COLORS, SPACING } from '../../theme/theme';
// import { baseImagePath, nowPlayingMovies, popularMovies, upcomingMovies } from '../api/apicalls';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import InputHeader from '../components/InputHeader';

const { height, width } = Dimensions.get("window")
const getNowPlayingList = async () => {
  const res = 
}

const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMovieList, setNowPlayingMovieList] = useState<any>(undefined);
  const [popularMovies, setPopularMovies] = useState<any>(undefined);
  const [upComingMoviesList, setUpComingMoviesList] = useState<any>(undefined)

  const searchMoviesFuction ={}
  if(nowPlayingMovieList == undefined &&
    nowPlayingMovieList == null &&
    popularMovies == undefined &&
    popularMovies == null &&
    upComingMoviesList == undefined && 
    upComingMoviesList == null
    ){
      return (
        <ScrollView 
          bounces={false}
          style={styles.container}
          contentContainerStyle={styles.scrollView}
        >
        <StatusBar hidden/>
          <View style={styles.inputContainerHeader}>
            <InputHeader searchFunction={searchMoviesFuction} />
          </View>
          
      </ScrollView>
      )
    }
  return (
    <ScrollView 
      bounces={false}
      style={styles.container}
      contentContainerStyle={styles.scrollView}
    >
      <StatusBar hidden/>
        <View style={styles.inputContainerHeader}>
          <InputHeader />
        </View>
        {/* <View style={styles.activityIndicator}>
          <ActivityIndicator size={"large"} color={COLORS.Orange} />
        </View> */}
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: COLORS.Black
  }, 
  scrollView: {
    flex: 1
  }, 
  activityIndicator:{
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  inputContainerHeader: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28
  }
})