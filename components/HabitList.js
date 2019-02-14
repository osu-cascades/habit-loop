import React, { Fragment } from "react";
import { Svg } from 'expo';
import { FlatList } from 'react-native';
import {  Card, CardItem, Text, SwipeRow, Button, Icon } from "native-base";
import _ from 'lodash';
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient';
import { compose } from 'react-apollo';
import { GetHabits } from '../data';
import { withNavigation } from 'react-navigation';
import CreateHabitFAB from '../components/CreateHabitFAB';
import DeleteButton from '../components/DeleteButton';

// Skeleton loading
const Loading = () => (
  <SvgAnimatedLinearGradient height={ 300 }>
    <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
    <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
    <Svg.Rect x="80" y="70" rx="5" ry="5" width="400" height="50" />
  </SvgAnimatedLinearGradient>
)


const HabitCard = ({ habit, navigate }) => {
  return (
        <Card style={{ width: '100%' }}>
          <CardItem header button
            onPress={() => navigate('UserHabit', {
              habit,
            })}
          >
            <Text>{habit.name}</Text>
          </CardItem>
          <CardItem button
            onPress={() => navigate('UserHabit', {
              habit,
            })}
          >
          </CardItem>
        </Card>
  ) 
}

class HabitList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }
 

  render() {
    if (this.props.data.loading){
      return <Loading/>
    } else if (this.props.data.error) {
      console.log(this.props.data)
      return <Text>Error Loading Data!!</Text>
    }
    
    const habits = this.props.data.getHabits.map(item => {
      return { 
        name: item.name,
        created_at: item.created_at,
        habit_id: item.habit_id,
        key: item.habit_id,
      }
    });

    return (
        <Fragment>
            <FlatList 
              data={habits}
              renderItem={({ item }) => (
                <SwipeRow
                  leftOpenValue={75}
                  rightOpenValue={-75}
                  left={
                    <Button success onPress={() => alert('Add')}>
                      <Icon active name="add" />
                    </Button>
                  }
                  body={
                    <HabitCard 
                      habit={item} 
                      navigate={this.props.navigation.navigate} 
                    />
                  }
                  right={<DeleteButton />}
                />
              )}

              onRefresh={() => this.props.data.refetch()}
              refreshing={this.props.data.networkStatus === 4}
            />
          <CreateHabitFAB refetch={() => this.props.data.refetch()}/>
        </Fragment>
    );
  }
}

export default compose(
  withNavigation,
  GetHabits,
)(HabitList);