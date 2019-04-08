import React from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const LeftAction = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  background-color: #388e3c;
  justify-content: flex-start;
`;

const LeftActionText = styled.Text`
  align-self: center;
  font-size: 35px;
  font-family: Avenir Next;
  color: white;
  margin-left: 40px;
`;

export class CompleteHabitButton extends React.Component {
    render() {
        const { scale } = this.props;

        return (
            <LeftAction onPress={this.close}>
                <AnimatedIcon
                    name="archive"
                    size={30}
                    color="#fff"
                    style={{ 
                        transform: [{ scale }],
                        width: 30,
                        marginHorizontal: 10,
                        alignSelf: 'center',
                        marginLeft: 20,
                    }}
                />
                <LeftActionText>complete habit</LeftActionText>
            </LeftAction>
        );
    }
}

export default CompleteHabitButton;