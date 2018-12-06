import React, { Component } from "react";
import { ActionSheetCustom as ActionSheet } from "react-native-custom-actionsheet";
import Buttons from "./DialogButtons";
import CancelButtons from "./DialogCancelButton";
import FirstButtons from "./DialogFirstButtons";
import {Actions} from 'react-native-router-flux';

export default class BottomDialog extends Component {
  getActionSheetRef = ref => (this.actionSheet = ref);

  handlePress = (index) => {
      if (index == 3) {
          Actions.webSearch();
      }
      this.setState({ selected: index });
  }

  componentDidMount() {
    this.actionSheet.show();
  }

  render() {
    return (
      <ActionSheet
        ref={this.getActionSheetRef}
        options={[
          {
            component: <FirstButtons name="Yes or No Question?" />,
            height: 80
          },
          {
            component: <Buttons name="Take Photo" />,
            height: 80
          },
          {
            component: <Buttons name="Photo Library" />,
            height: 80
          },
          {
            component: <Buttons name="Web Search" />,
            height: 80
          },
          {
            component: <CancelButtons name="Cancel" />,
            height: 80
          }
        ]}
        onPress={this.handlePress}
      />
    );
  }
}
