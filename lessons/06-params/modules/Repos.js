import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <div>
      <h2>Repos</h2>
      <ul>
        <li><Link to="/repos/reactjs/react-router">Ahahaha</Link></li>
        <li><Link to="/repos/minvedacat/react-router-tutorial">Heyheyhey</Link></li>
      </ul>
    </div>
  }
})
