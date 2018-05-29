import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Sidebar } from 'components'

storiesOf('Sidebar', module)
  .add('default', () => (
    <Sidebar>Hello</Sidebar>
  ))
  .add('reverse', () => (
    <Sidebar reverse>Hello</Sidebar>
  ))
