import React from 'react';
import { Svg } from 'expo';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';

// Skeleton loading
const Loading = () => (
    <SvgAnimatedLinearGradient height={ 300 }>
      <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
      <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
      <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
    </SvgAnimatedLinearGradient>
)

export default Loading;