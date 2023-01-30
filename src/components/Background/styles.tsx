import { Dimensions, StyleSheet } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
  }
})