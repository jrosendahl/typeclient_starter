import React from 'react';
import { render } from 'react-dom';


export default class Main extends React.Component {
  render() {
    return <div>hello world</div>
  }
}

if(!document.getElementById('root')) {
  const root = document.createElement('div')
  root.setAttribute('id', 'root')
  document.body.appendChild(root)
}
render(<Main/>, document.getElementById('root'))
