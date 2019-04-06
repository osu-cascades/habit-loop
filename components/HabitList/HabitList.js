import React from 'react';
import DailyHabitsList from './Lists/DailyHabitsList';


class HabitList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habits: props.habits,
            error: false,
        }

        this.renderProps = this.renderProps.bind(this);
    }

    renderProps() {
      return Object.assign({
        error: this.state.error,
        navigate: this.props.navigate,
        refetch: this.props.refetch,
        data: this.props.data 
      })
    }

    render() {
        return (
            <DailyHabitsList 
              habits={this.state.habits}
              {...this.renderProps()}
            />
        )
    }
}

export default HabitList;
