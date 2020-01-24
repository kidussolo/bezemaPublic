import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Newpost from "../home/Newpost";
import Posts from "../post/Posts";

class Main extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Posts</Tab>
          <Tab>Add New</Tab>
        </TabList>
        <TabPanel>
          <Posts />
        </TabPanel>
        <TabPanel>
          <Newpost />
        </TabPanel>
      </Tabs>
    );
  }
}

export default Main;
