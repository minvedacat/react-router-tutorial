import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return <div>
      <h2>Repos</h2>
      <ul>
        <li><NavLink to="/repos/reactjs/react-router">Ahahaha</NavLink></li>
        <li><NavLink to="/repos/minvedacat/react-router-tutorial">Heyheyhey</NavLink></li>
      </ul>
      {this.props.children}
    </div>
  }
})
