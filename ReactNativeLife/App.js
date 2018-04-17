/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  
  constructor(props) {

    console.log("constructor",props);
    super(props);
    this.state = {
         value:'123'
    };
  }
    componentWillMount(){
       console.log("componentWillMount");
    }
    componentDidMount(){
       console.log("componentDidMount");
    }
    componentWillReceiveProps(nextProps){
         console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(nextProps, nextState){
       console.log("shouldComponentUpdate");
      return true;
    }
    componentWillUpdate(){
         console.log("componentWillUpdate");
    }
    componentDidUpdate(){
         console.log("componentDidUpdate");
    }
    componentWillUnmount(){
         console.log("componentWillUnmount");
    }
  render() {
    console.log("render");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={ ()=>{
          this.setState({value:'哈哈哈'})    
        }}>
          <Text>{'普通方法的调用'}</Text>>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
