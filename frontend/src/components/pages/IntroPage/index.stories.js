import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { IntroPage } from 'components'

storiesOf('IntroPage', module)
  .add('default', () => (
    <IntroPage />
  ))
