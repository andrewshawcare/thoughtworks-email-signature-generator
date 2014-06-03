/** @jsx React.DOM */
/* global define */
define(["react"], function (React) {
    "use strict";
    return React.createClass({
        handleChange: function (event) {
            this.props.onChange(event.target.value, event);
        },
        render: function () {
            return <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.handleChange}/>
            </div>;
        }
    });
});