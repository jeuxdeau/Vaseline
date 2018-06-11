import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Account } from 'components'

storiesOf('Account', module)
  .add('default', () => (
    <Account>Hello</Account>
  ))
  .add('reverse', () => (
    <Account reverse>Hello</Account>
  ))
