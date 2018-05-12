import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ListPage } from 'components'

storiesOf('ListPage', module)
  .add('default', () => (
    <ListPage />
  ))
