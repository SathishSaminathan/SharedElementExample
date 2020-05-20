import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {SceneProgress} from './SceneProgress';

export default class UserDetail extends Component {
  render() {
    const {
      navigation: {
        state: {
          params: {item},
        },
      },
    } = this.props;
    console.log(`${item.login.sha1}`);
    return (
      <View style={{flex: 1}}>
        <SharedElement
          id={`${item.login.sha1}`}
          style={[StyleSheet.absoluteFill, {alignItems: 'center'}]}>
          <Image
            style={{
              width: 300,
              height: 300,
              borderRadius: 150,
              //   elevation: 5,
              marginTop: 10,
              overflow: 'hidden',
            }}
            resizeMode="contain"
            source={{
              uri: item.picture.large,
            }}
          />
        </SharedElement>
        <SceneProgress />
      </View>
    );
  }
}

// UserDetail.sharedElements = (navigation, otherNavigation, showing) => [
//   {id: 'image1'},
//   {id: 'text', animation: 'fade'},
// ];

UserDetail.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item');
  return [
    {
      id: `${item.login.sha1}`,
      animation: 'fade',
      // resize: 'clip'
      //   align: 'left-top'
    },
  ];
};
