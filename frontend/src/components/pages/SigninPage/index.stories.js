import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SigninPage } from 'components'

storiesOf('SigninPage', module)
  .add('default', () => (
    <SigninPage />
  ))
