import React, { Component } from "react";
import { TabHeading, Tab, Tabs } from "native-base";
import { StyleSheet } from "react-native";
import TabBarItem from "./TabBarItem";

export default class BottomNavigationBar extends Component {
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
                        <TabBarItem title="NFL News" index={0} isActive={activeTab == 0} />
                    </TabHeading>}>
                </Tab>
                <Tab heading={
                    <TabHeading>
                        <TabBarItem title="MLB News" index={1} isActive={activeTab == 1} />
                    </TabHeading>}>
                </Tab>
                <Tab heading={
                    <TabHeading>
                        <TabBarItem title="My News" index={2} isActive={activeTab == 2} />
                    </TabHeading>}>
                </Tab>
                <Tab heading={
                        <TabHeading>
                            <TabBarItem title="Polls" index={3} isActive={activeTab == 3} />
                        </TabHeading>}>
                </Tab>
            </Tabs>
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#66B2FF",
        borderTopColor: "#66B2FF"
    }
});