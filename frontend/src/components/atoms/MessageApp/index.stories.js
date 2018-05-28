import React from 'react'
import { storiesOf } from '@kadira/storybook'
import MessageApp from '.'

storiesOf('MessageApp', module)
  .add('default', () => (
    <MessageApp>Hello</MessageApp>
  ))
  .add('reverse', () => (
    <MessageApp reverse>Hello</MessageApp>
  ))
