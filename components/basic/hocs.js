import React from "react";
import { Text } from "react-native";
import { branch, renderComponent } from 'recompose';
import { Loading } from '../';

const ErrorComponent = props => (
  <Text> Something went wrong, try refetching. {console.log(props)}</Text>
)

export const renderForError = (component = ErrorComponent, propName = 'data') =>
  branch(
    props => props[propName] && props[propName].error,
    renderComponent(component)
  );

export const renderWhileLoading = (component = Loading, propName = 'data') =>
  branch(
    props => props[propName] && props[propName].loading,
    renderComponent(component)
  );