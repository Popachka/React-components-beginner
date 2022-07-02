import React, { Fragment} from 'react';
import ButtonGroup from './ButtonGroup';
import { useState } from 'react';
import Button from '../Button/Button';


const Sandbox = () => {
    const [toggle,setToggle] = useState(true)
    const handleToggleOn = () => {
        setToggle(true)
    }
    const handleToggleOff = () => {
        setToggle(false)
    }
    return(
        <Fragment>

        <h2><span>1. Horizontal button group:</span></h2>
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <h2><span>2. Vertical button group:</span></h2>
        <ButtonGroup vertical>
          <Button>First</Button>
          <Button active>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <h2><span>3. Switcher button group:</span></h2>
        <ButtonGroup>
          <Button onClick={handleToggleOn} active={toggle}>ON</Button>
          <Button onClick={handleToggleOff} active={!toggle}>OFF</Button>
        </ButtonGroup>

      </Fragment>
    )
}
export default Sandbox