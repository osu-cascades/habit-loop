import React from 'react';
import { StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native'
import LoadingAnimation from '../assets/loading.json';

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