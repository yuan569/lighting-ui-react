import React from 'react'
import { config } from 'react-transition-group'
import { render, RenderResult, fireEvent, wait } from '@testing-library/react'
import { Select, SelectProps } from './select'


config.disabled = true

const testArray = [
    { value: 'bradley', label: 11 },
    { value: 'pope', label: 1 },
    { value: 'caruso', label: 4 },
    { value: 'cook', label: 2 },
    { value: 'cousins', label: 15 },
    { value: 'james', label: 23 },
    { value: 'AD', label: 3 },
    { value: 'green', label: 14 },
    { value: 'howard', label: 39 },
    { value: 'kuzma', label: 0 },
]
const testProps: SelectProps = {
  passedSuggestions: testArray,
  onSelect: jest.fn(),
  value: '请选择',
}

let wrapper: RenderResult, inputNode: HTMLInputElement, liNode: HTMLDivElement, firstResult: HTMLDivElement, secondResult: HTMLDivElement
describe('test Select component', () => {
  beforeEach(() => {
    wrapper = render(<Select {...testProps}/>)
    inputNode = wrapper.getByDisplayValue('请选择') as HTMLInputElement
  })
  it('test basic Select behavior', async () => {
    // input click
    fireEvent.click(inputNode)
    expect(wrapper.container.querySelector('.lighting-select-list')).toBeInTheDocument()
    // should have ten select items
    expect(wrapper.container.querySelectorAll('.select-item').length).toEqual(10)

    
    liNode = wrapper.getByText('bradley') as HTMLDivElement
    fireEvent.click(liNode)
    expect(testProps.onSelect).toHaveBeenCalledWith({value: 'bradley', label: 11})
    expect(inputNode.value).toBe('bradley')
    expect(wrapper.container.querySelector('.lighting-select-list')).not.toBeInTheDocument()
    
    // //click the first item
    // fireEvent.click(wrapper.getByText('ab'))
    
    // expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
    // //fill the input
    // expect(inputNode.value).toBe('bradley')
  })
  it('test click input again will close the select', async () => {
    fireEvent.click(inputNode)
    expect(wrapper.container.querySelector('.lighting-select-list')).toBeInTheDocument()
    fireEvent.click(inputNode)
    expect(wrapper.container.querySelector('.lighting-select-list')).not.toBeInTheDocument()
  })
  it('should provide keyboard support', async () => {
    // input click
    fireEvent.click(inputNode)
    // fireEvent.change(inputNode, {target: { value: 'a'}})
    // await wait(() => {
    //   expect(wrapper.queryByText('ab')).toBeInTheDocument()
    // })
    const firstResult = wrapper.getByText('bradley') as HTMLDivElement
    const secondResult = wrapper.getByText('pope') as HTMLDivElement

    // arrow down
    fireEvent.keyDown(inputNode, { keyCode: 40 })
    expect(firstResult).toHaveClass('is-active')
    //arrow down 
    fireEvent.keyDown(inputNode, { keyCode: 40 })
    expect(secondResult).toHaveClass('is-active')
    //arrow up
    fireEvent.keyDown(inputNode, { keyCode: 38 })
    expect(firstResult).toHaveClass('is-active')
    // press enter
    fireEvent.keyDown(inputNode, { keyCode: 13 })
    expect(inputNode.value).toBe('bradley')
    expect(testProps.onSelect).toHaveBeenCalledWith({value: 'bradley', label: 11})
    expect(wrapper.container.querySelector('.lighting-select-list')).not.toBeInTheDocument()
  })
  it('click outside should hide the select-list', async () => {
    // input click
    fireEvent.click(inputNode)
    expect(wrapper.container.querySelector('.lighting-select-list')).toBeInTheDocument()
    
    fireEvent.click(document)
    expect(wrapper.container.querySelector('.lighting-select-list')).not.toBeInTheDocument()
  })
  it('renderOption should generate the right template', () => {

  })
  
})