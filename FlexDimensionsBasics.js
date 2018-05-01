import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, ScrollView, Image, ViewPagerAndroid } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.pageStyle} key="1">
          <Text>First page</Text>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text>Second page</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
  
}
var styles = {
 
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
}
