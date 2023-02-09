import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './menu'
import SubMenu from './subMenu'
import MenuItem from './menuItem'

export const defaultMenu = () => (
    <Menu defaultIndex='0' onSelect={(index) => { action(`clicked ${index} item`) }}>
        <MenuItem>
            cool link
        </MenuItem>
        <MenuItem disabled>
            disabled
        </MenuItem>
        <MenuItem>
            cool link 2
        </MenuItem>
        <SubMenu title="dropdown">
            <MenuItem>
            drop1
            </MenuItem>
            <MenuItem>
            drop2
            </MenuItem>
            <MenuItem>
            drop3
            </MenuItem>
        </SubMenu>
    </Menu>
)

export const verticalMenu = () => (
    <Menu defaultIndex='3-0' onSelect={(index) => { action(`clicked ${index} item`) }} mode='vertical'>
        <MenuItem>
            cool link
        </MenuItem>
        <MenuItem disabled>
            disabled
        </MenuItem>
        <MenuItem>
            cool link 2
        </MenuItem>
        <SubMenu title="dropdown">
            <MenuItem>
            drop1
            </MenuItem>
            <MenuItem>
            drop2
            </MenuItem>
            <MenuItem>
            drop3
            </MenuItem>
        </SubMenu>
    </Menu>
)


storiesOf('Menu', module)
    .add('水平方向的 Menu', defaultMenu)
    .add('垂直方向的 Menu', verticalMenu)