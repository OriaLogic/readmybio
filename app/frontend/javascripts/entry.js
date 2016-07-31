require('expose?$!expose?jQuery!jquery');

import {render} from 'react-dom';
var App = require('./components/App.react');

render(<App/>, document.getElementById('app'))
