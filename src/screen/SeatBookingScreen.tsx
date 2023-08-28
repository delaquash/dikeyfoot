import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const timeArray: string[] = [
  '10:30',
  '12:30',
  '14:30',
  '15:00',
  '19:30',
  '21:00',
];

const generateDate = () => {
  const date = new Date();
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let weekdays = [];
  /* The line `for(i=0, i<7, i++)` is attempting to create a for loop that iterates from 0 to 6
  (inclusive). However, there is a syntax error in the for loop declaration. The correct syntax for
  a for loop in JavaScript/TypeScript is `for (initialization; condition; increment)`. */
  for(let i=0; i<7; i++){
    let tempDate = {
      /* The code `date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate()` is creating a
      new Date object by adding `i` days to the current date (`date.getTime()` returns the current
      date in milliseconds). The `getDate()` method is then called on the new Date object to get the
      day of the month. */
      date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
    }
    weekdays.push(tempDate);
  }
  return weekdays;
}

const SeatBookingScreen = () => {
  return (
    <View>
      <Text>SeatBookingScreen</Text>
    </View>
  )
}

export default SeatBookingScreen

const styles = StyleSheet.create({})