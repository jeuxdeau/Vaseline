import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AccountCompanion } from 'components'

storiesOf('AccountCompanion', module)
  .add('default', () => (
    <Account>Hello</AccountCompanion>
  ))
  .add('reverse', () => (
    <Account reverse>Hello</AccountCompanion>
  ))
