import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Console
} from "react-native";
import MyScreen from "./MyScreen";

export interface Props {}
export interface State {
  sumNumber: string;
  islem: any;
  prevNumber: string;
  gecmis: string;
}
class Numbers extends React.Component<Props, State> {
  parsedPrevNumber: number;
  parsedSumNumber: number;

  constructor() {
    super();

    this.state = {
      sumNumber: "",
      islem: "",
      prevNumber: ""
    };
  }

  _onPressButton(num: string) {
    this.setState({
      sumNumber:
        //(this.state.sumNumber > 0 && this.state.prevNumber > 0)? :
        this.state.sumNumber === "" ? num : `${this.state.sumNumber}${num}`
    });
  }
  _onPressOperator(newislem: string) {
    this.setState({
      prevNumber: this.state.sumNumber,
      islem: newislem,
      sumNumber: ""
    });
    console.log(this.state.islem);
  }
  _onPressCalculate() {
    this.parsedPrevNumber = Number(`${this.state.prevNumber}`);
    this.parsedSumNumber = Number(`${this.state.sumNumber}`);

    switch (this.state.islem) {
      case "+":
        this.setState({
          sumNumber: this.parsedPrevNumber + this.parsedSumNumber
        });
        break;
      case "*":
        this.setState({
          sumNumber: this.parsedPrevNumber * this.parsedSumNumber
        });
        break;
      case "/":
        this.setState({
          sumNumber: this.parsedPrevNumber / this.parsedSumNumber
        });
        break;
      case "-":
        this.setState({
          sumNumber: this.parsedPrevNumber - this.parsedSumNumber
        });
        break;
      case "sil":
        this.setState({
          sumNumber: "",
          prevNumber: "",
          islem: "",
          gecmis: ""
        });
        break;
      default:
        break;
    }
    this.setState({
      gecmis: `${this.state.prevNumber}${this.state.islem}${
        this.state.sumNumber
      }`
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MyScreen gecmis={this.state.gecmis} value={this.state.sumNumber} />
        </View>

        <View style={styles.numbers}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(4);
              }}
            >
              <Text>?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(7);
              }}
            >
              <Text>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(4);
              }}
            >
              <Text>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(1);
              }}
            >
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(4);
              }}
            >
              <Text>,</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(4);
              }}
            >
              <Text>?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(8);
              }}
            >
              <Text>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(5);
              }}
            >
              <Text>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(2);
              }}
            >
              <Text>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(0);
              }}
            >
              <Text>0</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: "column" }}>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(4);
              }}
            >
              <Text>?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(9);
              }}
            >
              <Text>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(6);
              }}
            >
              <Text>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressButton(3);
              }}
            >
              <Text>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons}
              onPress={() => {
                this._onPressOperator("sil");
              }}
            >
              <Text>sil</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: "column" }}>
            <TouchableOpacity
              style={styles.opbuttons2}
              onPress={() => {
                this._onPressOperator("/");
              }}
            >
              <Text>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons2}
              onPress={() => {
                this._onPressOperator("*");
              }}
            >
              <Text>*</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons2}
              onPress={() => {
                this._onPressOperator("-");
              }}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons2}
              onPress={() => {
                this._onPressOperator("+");
              }}
            >
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.opbuttons2}
              onPress={() => {
                this._onPressCalculate();
              }}
            >
              <Text>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numbers: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "space-between"
  },
  opbuttons: {
    margin: 3,
    marginBottom: 5,
    padding: 30,
    backgroundColor: "#e6ffff",
    alignItems: "stretch",
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "#282828"
  },
  opbuttons2: {
    margin: 3,
    marginBottom: 5,
    padding: 30,
    backgroundColor: "#ffff66",
    alignItems: "stretch",
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "#282828"
  }
});

export default Numbers;

/*switch (this.islem) {
      case "+":
        this.setState({ sumNumber: this.state.sumNumber + num });
        break;
      case "*":
        this.setState({ sumNumber: this.state.sumNumber * num });
        break;
      case "/":
        this.setState({ sumNumber: this.state.sumNumber / num });
        break;
      case "-":
        this.setState({ sumNumber: this.state.sumNumber - num });
        break;
      case "sil":
        this.setState({
          sumNumber: 0
        });
        break;

      default:
        break;
    }*/
