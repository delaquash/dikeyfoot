import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {baseImagePath, movieCastDetails, movieDetails} from '../api/apicalls';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';

const MovieDetailsScreen = () => {
  return (
    <View>
      <Text>MovieDetailsScreen</Text>
    </View>
  )
}

export default MovieDetailsScreen

const styles = StyleSheet.create({})