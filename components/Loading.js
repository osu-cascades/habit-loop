import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { DangerZone } from 'expo';
import LoadingAnimation from './loading.json';
const { Lottie } = DangerZone;

export default class Loading extends React.Component {
  state = {
    animation: undefined,
  };

  componentWillMount() {
    this._playAnimation();
  }

  render() {
    return (
      <>
        {this.state.animation &&
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 400,
              height: 400,
            }}
            source={this.state.animation}
          />}
      </>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = async () => {
    this.setState({ animation: LoadingAnimation }, this._playAnimation);
  };
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});