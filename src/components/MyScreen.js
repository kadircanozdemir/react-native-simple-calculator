import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export interface Props {
  gecmis: string;
  value: number;
}
export interface State {}
class MyScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.kutu}>
        <Text style={{ fontSize: 15, textAlign: "right", fontStyle: "italic" }}>
          {this.props.gecmis}
        </Text>
        <Text style={{ fontSize: 40, textAlign: "right" }}>
          {this.props.value}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  kutu: {
    flex: 1,
    padding: 30,
    backgroundColor: "#f2f2f2",
    alignItems: "flex-end",
    justifyContent: "center"
  }
});

export default MyScreen;
