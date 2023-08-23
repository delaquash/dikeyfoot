import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS, SPACING } from '../../theme/theme';
// import { baseImagePath, nowPlayingMovies, popularMovies, upcomingMovies } from '../api/apicalls';
import axios from 'axios';
import { Dimensions, ScrollView, StatusBar } from 'react-native';
import { baseImagePath, nowPlayingMovies, popularMovies, upcomingMovies } from '../api/apicalls';
import CategoryHeader from '../components/Categoryheader';
import InputHeader from '../components/InputHeader';
import SubMovieCard from '../components/SubMovieCard';
import MovieCard from '../components/MovieCard';

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
      setNowPlayingMovieList(
        {id: 'dummy1'},
        ...tempNowPlaying.results,
        {id: 'dummy2'},
      );

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
        <CategoryHeader 
          title={'Now Playing'} 
        />
        <FlatList
          horizontal
          keyExtractor={(item:any)=>item.id}
          contentContainerStyle={styles.containerGap}
          data={nowPlayingMovieList}
          renderItem={({item, index})=>
            <MovieCard
              shouldMarginatedAtEnd={true}
              cardFunction={()=> (
                navigation.push("Movie Details", {movieid: item.id})
              )}
              cardWidth= {width * 0.7 }
              isFirst= {index == 0 ? true : false}
              isLast ={index == upcomingMovies?.length - 1 ? true : false }
              title={item.original_title}
              imagePath={baseImagePath("w", item.poster_path)}
              genre={item.genre_ids.slice(1, 4)}
              vote_average={item.vote_average}
              vote_count={item.vote_count}
            /> 
          }
        />
        <CategoryHeader 
          title={'Upcoming'} 
        />
        <FlatList
          horizontal
          keyExtractor={(item:any)=>item.id}
          contentContainerStyle={styles.containerGap}
          data={popularMovies}
          renderItem={({item, index})=>
            <SubMovieCard
              shouldMarginatedAtEnd={true}
              cardFunction={()=> (
                navigation.push("Movie Details", {movieid: item.id})
              )}
              cardWidth= {width / 3 }
              isFirst= {index == 0 ? true : false}
              isLast ={index == upcomingMovies?.length - 1 ? true : false }
              title={item.original_title}
              imagePath={baseImagePath("w342", item.poster_path)}
            /> 
          }
          
        />
        <CategoryHeader title={'Popular'} />
        <FlatList
          horizontal
          keyExtractor={(item:any)=>item.id}
          contentContainerStyle={styles.containerGap}
          data={upComingMoviesList}
          renderItem={({item, index})=>
          <SubMovieCard
              shouldMarginatedAtEnd={true}
              cardFunction={()=> (
                navigation.push("Movie Details", {movieid: item.id})
              )}
              cardWidth= {width / 3 }
              isFirst= {index == 0 ? true : false}
              isLast ={index == upcomingMovies?.length - 1 ? true : false }
              title={item.original_title}
              imagePath={baseImagePath("w342", item.poster_path)}
          /> 
          }
          
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