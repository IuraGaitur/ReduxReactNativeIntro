import React, { Component } from "react";
import { TabHeading, Tab, Tabs } from "native-base";
import { StyleSheet } from "react-native";
import PollsTabBarItem from "./PollsTabBarItem";

export default class PollsBottomNavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    changeActiveTab = position => {
        this.setState({ activeTab: position });
    };

    render() {
        const { activeTab } = this.state;
        return (
            <Tabs tabBarPosition="bottom" onChangeTab={data => this.changeActiveTab(data.i)} tabBarUnderlineStyle={styles.tabBar}>
                <Tab heading={
                    <TabHeading>
                        <PollsTabBarItem title="My Polls" index={0} isActive={activeTab == 0} />
                    </TabHeading>}>
                    {this.props.myPollsPage}
                </Tab>
                <Tab heading={
                    <TabHeading>
                        <PollsTabBarItem title="Favorite Polls" index={1} isActive={activeTab == 1} />
                    </TabHeading>}>
                    {this.props.favPollsPage}
                </Tab>
            </Tabs>
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "transparent",
        borderTopColor: "transparent"
    }
});