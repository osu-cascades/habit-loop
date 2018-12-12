import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  LayoutAnimation,
} from 'react-native'
import { Container } from 'native-base';

import SectionedMultiSelect from 'react-native-sectioned-multi-select'

const types = [
    {
        id: 0,
        title: 'Front-end',
        children: [
            {
                id: 10,
                title: 'React.js',
            },
            {
                id: 11,
                title: 'Apollo'
            },
            {
                id: 12,
                title: 'GraphQL',
            },
            {
                id: 13,
                title: 'React Native'
            }
        ]
    },
    {
        id: 1,
        title: 'Back-end',
        children: [
            {
                id: 14,
                title: 'Flask (Python)',
            },
            {
                id: 15,
                title: 'DynamoDB'
            },
            {
                id: 16,
                title: 'Node.js',
            },
            {
                id: 17,
                title: 'Postgres'
            }
        ]
    }
]

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      items: null,
      loading: false,
      selectedItems: [],
      selectedItemObjects: [],
      currentItems: [],
      showDropDowns: false,
      readOnlyHeadings: false,
      highlightChildren: true,
      selectChildren: false,
      hasErrored: false,
    }
    this.termId = 100;
  }

  onCancel = () => {
    this.SectionedMultiSelect._removeAllItems()

    this.setState({
      selectedItems: this.state.currentItems,
    })
  }

  onExpandDropDownsToggle = (expandDropDowns) => {
    this.setState({ expandDropDowns })
  }

  onShowDropDownsToggle = (showDropDowns) => {
    this.setState({ showDropDowns })
  }

  onReadOnlyHeadingsToggle = (readOnlyHeadings) => {
    this.setState({ readOnlyHeadings })
  }

  onSelectChildrenToggle = (selectChildren) => {
    this.setState({ selectChildren })
  }

  onToggleSelector = (toggled) => {

}

  customChipsRenderer = (props) => {
    return (
      <View style={{backgroundColor: 'yellow', padding: 15,}}>
      <Text>Selected:</Text>
        {props.selectedItems.map((singleSelectedItem) => {
          const item = this.SectionedMultiSelect._findItem(singleSelectedItem)

          if (!item || !item[props.displayKey]) return null

          return (
            <View key={item[props.uniqueKey]} style={{ flex: 0,marginRight: 5, padding: 10, backgroundColor: 'orange' }}>
              <TouchableOpacity onPress={() => { this.SectionedMultiSelect._removeItem(item) }}>
                  <Text>{item[props.displayKey]}</Text>
              </TouchableOpacity>
            </View>
            )
        })} 
      </View>
    )
  }

  onSelectedItemsChange = (selectedItems) => {
    const filteredItems = selectedItems.filter(val => !this.state.selectedItems.includes(val))
    this.setState({ selectedItems: filteredItems })
  }

  render() {
    return (
        <ScrollView>
            <SectionedMultiSelect
                items={types}
                ref={SectionedMultiSelect => this.SectionedMultiSelect = SectionedMultiSelect}
                uniqueKey="id"
                subKey="children"
                displayKey="title"
                selectedItems={this.state.selectedItems}
                onSelectedItemsChange={this.onSelectedItemsChange}
                onSelectedItemObjectsChange={(selectedItemObjects) => this.setState({ selectedItemObjects })}
                onCancel={this.onCancel}
                onConfirm={() => this.setState({ currentItems: this.state.selectedItems })}
                onToggleSelector={this.onToggleSelector}
                selectChildren={this.state.selectChildren}
                itemNumberOfLines={3}
                selectLabelNumberOfLines={3}
                colors={{ primary: this.state.selectedItems.length ? 'forestgreen' : 'crimson',}}

                selectText={this.state.selectedItems.length ? 'Select Types' : 'Types'}
                showDropDowns={this.state.showDropDowns}
                expandDropDowns={this.state.expandDropDowns}
                customLayoutAnimation={LayoutAnimation.Presets.spring}
                readOnlyHeadings={this.state.readOnlyHeadings}
                        
            styles={{
                chipText: {
                    maxWidth: Dimensions.get('screen').width - 90,
                },
                itemText: {
                    color: 'black'
                },
                subItemText: {
                    color: 'black'
                },
            }}
            />
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    container: {
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#333',
    },
    border: {
      borderBottomWidth: 1,
      borderBottomColor: '#dadada',
      marginBottom: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 20,
    },
    label: {
      fontWeight: 'bold',
    },
    switch: {
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
  })
  
  const tintColor = '#174A87'