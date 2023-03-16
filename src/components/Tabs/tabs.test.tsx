import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import Tabs, { TabsProps } from './tabs'
import TabList from './tabList'
import Tab from './tab'
import TabPanels from './tabPanels'
import TabPanel from './tabPanel'

// const defaultProps = {
//   onSelect: jest.fn()
// }

const testProps: TabsProps = {
  mode: 'line',
  defaultIndex: '0',
  className: 'test',
  onSelect: jest.fn()
}

const generateTabs = (props: TabsProps) => {
  return (
    <Tabs {...testProps}>
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
}

const createStyleFile = () => {
  const cssFile: string = `
        .tab-panel {
          display: none;
        }
        .tab-panel.is-active {
          display:block;
        }
      `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}



let wrapper: RenderResult, tabsElement: HTMLElement, defaultActiveTabElement: HTMLElement,defaultActiveTabPanelElement: HTMLElement, disabledElement: HTMLElement
describe('test Tabs、 Tab-list and Tab-panels component in horizontal mode', () => {
  beforeEach(() => {
    wrapper = render(generateTabs(testProps))
    wrapper.container.append(createStyleFile())
    tabsElement = wrapper.getByTestId('test-tabs')
    defaultActiveTabElement = wrapper.getByText('标签一')
    defaultActiveTabPanelElement = wrapper.getByText('111')
    disabledElement = wrapper.getByText('标签二')
  })
  it('should render the correct default Tabs and Tab-list & Tab-panels based on default props', () => {
    expect(tabsElement).toBeInTheDocument()
    expect(tabsElement).toHaveClass('lighting-tabs test')
    expect(tabsElement.querySelectorAll('.tab-list > li').length).toEqual(3)
    expect(defaultActiveTabElement).toHaveClass('tab-list-item is-active')
    expect(defaultActiveTabPanelElement).toHaveClass('tab-panel is-active')
    expect(disabledElement).toHaveClass('tab-list-item is-disabled')

  })
  it('click items should change active and call the right callback', () => {
    const thirdTabListItem = wrapper.getByText('标签三')
    fireEvent.click(thirdTabListItem)
    expect(thirdTabListItem).toHaveClass('is-active')
    expect(defaultActiveTabElement).not.toHaveClass('is-active')
    expect(defaultActiveTabPanelElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    // expect(disabledElement).not.toHaveClass('is-active')
    // expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })

  

})