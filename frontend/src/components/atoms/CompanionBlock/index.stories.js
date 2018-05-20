import React from 'react'
import { storiesOf } from '@kadira/storybook'
import CompanionBlock from '.'

storiesOf('CompanionBlock', module)
  .add('default', () => (
    <CompanionBlock>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</CompanionBlock>
  ))
  .add('reverse', () => (
    <CompanionBlock reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</CompanionBlock>
  ))
  .add('palette', () => (
    <CompanionBlock palette="primary">Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</CompanionBlock>
  ))
  .add('palette reverse', () => (
    <CompanionBlock palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </CompanionBlock>
  ))
  .add('palette opaque', () => (
    <CompanionBlock palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </CompanionBlock>
  ))
  .add('palette opaque reverse', () => (
    <CompanionBlock palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </CompanionBlock>
  ))
