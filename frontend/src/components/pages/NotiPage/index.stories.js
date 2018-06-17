import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { NotiPage } from 'components'

storiesOf('NotiPage', module)
  .add('default', () => (
    <NotiPage />
  ))
