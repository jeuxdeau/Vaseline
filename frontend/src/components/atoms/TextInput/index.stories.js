import React from 'react'
import { storiesOf } from '@kadira/storybook'
import TextInput from '.'

storiesOf('TextInput', module)
  .add('default', () => (
    <TextInput>Hello</TextInput>
  ))
  .add('reverse', () => (
    <TextInput reverse>Hello</TextInput>
  ))
