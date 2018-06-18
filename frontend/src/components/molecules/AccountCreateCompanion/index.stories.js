import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AccountCreateCompanion } from 'components'

storiesOf('AccountCreateCompanion', module)
  .add('default', () => (
    <Account>Hello</AccountCreateCompanion>
  ))
  .add('reverse', () => (
    <Account reverse>Hello</AccountCreateCompanion>
  ))
