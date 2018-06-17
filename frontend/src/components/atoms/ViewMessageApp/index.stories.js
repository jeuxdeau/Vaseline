import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ViewMessageApp from '.'

storiesOf('ViewMessageApp', module)
  .add('default', () => (
    <ViewMessageApp>Hello</ViewMessageApp>
  ))
  .add('reverse', () => (
    <ViewMessageApp reverse>Hello</ViewMessageApp>
  ))
