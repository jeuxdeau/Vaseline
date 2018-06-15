import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Fileupload } from 'components'

storiesOf('Fileupload', module)
  .add('default', () => (
    <Fileupload>Hello</Fileupload>
  ))
  .add('reverse', () => (
    <Fileupload reverse>Hello</Fileupload>
  ))
