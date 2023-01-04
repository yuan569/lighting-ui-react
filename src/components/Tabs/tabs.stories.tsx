import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Tabs from './tabs'
import TabList from './tabList'
import Tab from './tab'
import TabPanels from './tabPanels'
import TabPanel from './tabPanel'

const defaultTabs = () => (
    <Tabs onSelect={action('selected')} defaultIndex='' mode='line'>
        <TabList>
            <Tab>标签一</Tab>
            <Tab disabled>标签二</Tab>
            <Tab>标签三</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>111</TabPanel>
            <TabPanel>222</TabPanel>
            <TabPanel>333</TabPanel>
        </TabPanels>
    </Tabs>
)

const cardTabs = () => (
    <Tabs onSelect={action('selected')} defaultIndex='' mode='card'>
        <TabList>
            <Tab>标签一</Tab>
            <Tab disabled>标签二</Tab>
            <Tab>标签三</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>111</TabPanel>
            <TabPanel>222</TabPanel>
            <TabPanel>333</TabPanel>
        </TabPanels>
    </Tabs>
)

storiesOf('Tabs', module)
    .add('不带线框的 Tabs', defaultTabs)
    .add('带线框的 Tabs', cardTabs)