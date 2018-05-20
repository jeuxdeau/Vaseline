import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SignUp } from 'components'

storiesOf('SignUp', module)
  .add('default', () => (
    <SignUp>Hello</SignUp>
  ))
  .add('reverse', () => (
    <SignUp reverse>Hello</SignUp>
  ))
