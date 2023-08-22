import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS, SPACING } from '../../theme/theme';
// import { baseImagePath, nowPlayingMovies, popularMovies, upcomingMovies } from '../api/apicalls';
import axios from 'axios';
import { Dimensions, ScrollView, StatusBar } from 'react-native';
import { nowPlayingMovies, popularMovies, upcomingMovies } from '../api/apicalls';
import CategoryHeader from '../components/Categoryheader';
import InputHeader from '../components/InputHeader';
import SubMovieCard from '../components/SubMovieCard';

const { height, width } = Dimensions.get("window")
const getNowPlayingList = async () => {
    try {
      let res = await axios.get(nowPlayingMovies);
      let data = await res.data;
      return data;
    } catch (error) {
      console.error("Something went wrong in getNowPlayingList Function", error)
    }
}

const getUpcomingPlayingList = async () => {
  try {
    let res = await axios.get(upcomingMovies);
    let data = await res.data;
    return data;
  } catch (error) {
    console.error("Something went wrong in getUpcomingPlayingList Function", error)
  }
}

const getPopularMoviesList = async () => {
  try {
    let response = await axios.get(popularMovies);
    let json = await response.data
    return json;
    // return data;
  } catch (error) {
    console.error("Something went wrong in getPopularMoviesList Function", error)
  }
}

const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMovieList, setNowPlayingMovieList] = useState<any>(undefined);
  const [popularMovies, setPopularMovies] = useState<any>(undefined);
  const [upComingMoviesList, setUpComingMoviesList] = useState<any>(undefined)

  useEffect(() => {
    (async()=> {
      let tempNowPlaying = await getNowPlayingList();
      setNowPlayingMovieList(tempNowPlaying.results);

      let tempPopular = await getPopularMoviesList();
      setPopularMovies(tempPopular.results);

      let tempUpcoming = await getUpcomingPlayingList();
      setUpComingMoviesList(tempUpcoming.results)
    })()
  }, [])

  // console.log(nowPlayingMovieList, getUpcomingPlayingList, getPopularMoviesList)
  
  const searchMoviesFuction =()=> {
    navigation.navigate("Search")
  }
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
        <CategoryHeader title={'Now Playing'} />
        <CategoryHeader title={'Upcoming'} />
        <CategoryHeader title={'Popular'} />
        <FlatList
          keyExtractor={(item:any)=>item.id}
          contentContainerStyle={styles.containerGap}
          data={upComingMoviesList}
          renderItem={({item, index})=>
            <SubMovieCard 
              title={item.original_title}
            /> 
          }
          horizontal
        />
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
  },
  containerGap: {
    gap: SPACING.space_36,
    color: "white"
  }
})