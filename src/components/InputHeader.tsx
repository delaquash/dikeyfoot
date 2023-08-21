import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import CustomIcon from './CustomIcon';
import Ionicons from '@expo/vector-icons/Ionicons';

const InputHeader = (props: any) => {
    const [searchText, setSearchText] = useState<string>("")
  return (
    <View style={styles.input}>
      <TextInput 
        style={styles.textInput}
        onChangeText={textInput => setSearchText(textInput)}
        value={searchText}
        placeholder="Search your Movies..."
        placeholderTextColor={COLORS.WhiteRGBA32}
    />
    <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => props.searchFunction(searchText)}>
        <Ionicons
          name="search"
          color={COLORS.Orange}
          size={FONTSIZE.size_20}
        />
      </TouchableOpacity>
    </View>
  )
}

export default InputHeader

const styles = StyleSheet.create({
    input: {
        marginTop: 30,
        display: "flex",
        paddingVertical: SPACING.space_18,
        paddingHorizontal: SPACING.space_24,
        borderWidth: 2,
        borderColor: COLORS.WhiteRGBA15,
        flexDirection: "row",
        borderRadius: BORDERRADIUS.radius_25
    },
    textInput: {
        width: '90%',
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
      },
      searchIcon: {
        
        alignItems: 'center',
        justifyContent: 'center',
        padding: SPACING.space_10,
      },
})