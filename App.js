import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Numbers from "./src/components/Numbers";
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Numbers />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#282828"
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
