import React from 'react';
import {
  Button,
  Input,
  ThemeProvider
} from 'react-native-elements';

const theme = {
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
};

export default class App extends React.Component {
  render() {
    return (
    <ThemeProvider theme={theme}>

        <Input placeholder='Username' />
        <Button title = "Hey!" />

      </ThemeProvider>
    );
  }
}
