import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AccountUser } from 'components'

storiesOf('AccountUser', module)
  .add('default', () => (
    <Account>Hello</AccountUser>
  ))
  .add('reverse', () => (
    <Account reverse>Hello</AccountUser>
  ))
