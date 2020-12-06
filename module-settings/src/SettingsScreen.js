import {View, Button, Text} from 'react-native';
import React from 'react';
import broadcasts, {BROADCASTS} from './broadcastManager';

class SettingsScreen extends React.Component {
  static options = {
    topBar: {
      title: {
        text: 'App Settings',
      },
    },
  };

  render() {
      if (engine.moduleRegistry.hasComponent('blog.PostsCountBanner')){
          let PostsCountBanner = engine.moduleRegistry.component('blog.PostsCountBanner');
          return (
              <View
                  style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'color',
                  }}>
                  <Button
                      title="Clear App"
                      onPress={() => broadcasts.broadcast(BROADCASTS.RESET_APP)}
                  />
                  <PostsCountBanner></PostsCountBanner>
              </View>
          );
      } else {
          return (
              <View>
                  <Text>Blog Module is no found</Text>
              </View>
          );
      }


  }
}

export default SettingsScreen;
