'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var moment = require('moment');

var data = moment().subtract(43, 'seconds');
console.log(data);
var Timer = React.createClass({

    getInitialState: function() {
        return {
            time: moment()
        };
    },
    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function () {
    	clearInterval(this.interval);
    },
    tick: function() {
        this.setState({
            time: moment()
        });
    },
    render: function() {
        var show = this.props.time.from(this.state.time);
        return ( 
        	<div> 
        		{show} 
        	</div>
        );
    }
});
ReactDOM.render( < Timer time = {data} / > , document.getElementById('timer'));