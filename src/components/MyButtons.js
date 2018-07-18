import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class MyButtons extends React.Component{
    constructor(probs){
        super(probs)
    }
    render(){
        return(
            <TouchableOpacity style={styles.opbuttons} onPress={this._onPressButton}>
                <Text>{probs.text}</Text>
            </TouchableOpacity> 
        );
    }
    
}

const styles = StyleSheet.create({
      opbuttons: {
      padding: 10,
      backgroundColor: '#ffff', 
      width:95,
      height:100,
      alignItems: 'stretch',
    }
  });

export default MyButtons