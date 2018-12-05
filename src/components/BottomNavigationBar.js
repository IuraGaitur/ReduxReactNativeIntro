import React, { Component } from "react";
import { TabHeading, Tab, Tabs } from "native-base";
import { StyleSheet } from "react-native";
import TabBarItem from "./TabBarItem";
import { Actions } from 'react-native-router-flux';

export default class BottomNavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    changeActiveTab = position => {
        this.setState({ activeTab: position });
        if (position === 3) {
            Actions.polls();
        }
    };

    render() {
        const { activeTab } = this.state;

        return (
            <Tabs tabBarPosition="bottom" onChangeTab={data => this.changeActiveTab(data.i)} tabBarUnderlineStyle={styles.tabBar}>
                <Tab heading={
                    <TabHeading>
                        <TabBarItem title="NFL News" index={0} isActive={activeTab == 0} />
                    </TabHeading>}>
                    {this.props.nflPage}
                </Tab>
                <Tab heading={
                    <TabHeading>
                        <TabBarItem title="MLB News" index={1} isActive={activeTab == 1} />
                    </TabHeading>}>
                    {this.props.mblPage}
                </Tab>
                <Tab heading={
                    <TabHeading>
                        <TabBarItem title="My News" index={2} isActive={activeTab == 2} />
                    </TabHeading>}>
                    {this.props.myNewsPage}

                </Tab>
                <Tab heading={
                    <TabHeading>
                        <TabBarItem title="Polls" index={3} isActive={activeTab == 3} />
                    </TabHeading>}>
                    {this.props.pollsPage}
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