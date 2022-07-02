import React, { Fragment } from 'react';
import Tabs from './Tabs';
import Tab from './Tab/Tab';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Img from './../Img/Img';
import TabNav from './TabNav/TabNav';


const TabsSandbox = () => (
  <Fragment>

    {/*
      Example of Usage Syntax
      <TabBar>
        <TabBarItem label='tab1'>Content</TabBarItem>
        <TabBarItem label='tab2'>Content</TabBarItem>
        <TabBarItem label='tab3'>Content</TabBarItem>
      </TabBar>
    */}

    <h2><span>1. Horizontal Tabbar:</span></h2>
    <TabNav>
      <Tab label="Simple text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Tab>
      <Tab label="Image">
        <Img
          src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
          width={150}
          height={150}
        />
      </Tab>
      <Tab label="Component">
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>
      </Tab>
      <Tab label="Just empty tab" />
    </TabNav>

   
  </Fragment>
);

export default TabsSandbox;