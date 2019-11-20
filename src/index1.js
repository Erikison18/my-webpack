import _ from 'lodash';
// var name = require('./name')
// require('style-loader!css-loader!../style.css')

import name from './name'
import '../style.css'

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack', name], ' ');
  
    return element;
  }

  function componentInput() {
    var element = document.createElement('input');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  
    return element;
  }
  
  document.body.appendChild(component());
  document.body.appendChild(componentInput());