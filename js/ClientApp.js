var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great!'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!'})

  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
