import React from 'react'
import { Row, Column } from './components/Layout'
import Visor from './components/Visor'
import Button from './components/Button'

import './App.css'

const App = () => {
  return (
    <Column className='container'>
      <Row>
        <Visor />
      </Row>
      <Row>
        <Button digit='7' />
        <Button digit='8' />
        <Button digit='9' />
        <Button digit='÷' />
      </Row>
      <Row>
        <Button digit='4' />
        <Button digit='5' />
        <Button digit='6' />
        <Button digit='x' />
      </Row>
      <Row>
        <Button digit='1' />
        <Button digit='2' />
        <Button digit='3' />
        <Button digit='-' />
      </Row>
      <Row>
        <Button digit='0' />
        <Button digit=',' />
        <Button digit='=' />
        <Button digit='+' />
      </Row>
    </Column>
  )
}

export default App
