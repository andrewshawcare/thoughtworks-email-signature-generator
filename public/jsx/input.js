/** @jsx React.DOM */
/* global define */
define(["react"], function (React) {
    "use strict";
    return React.createClass({
        handleChange: function (event) {
            this.props.onChange(event.target.value, event);
        },
        handleFocus: function (event) {
            // Timeout added to fix flaky selection persistence on Chrome
            setTimeout(function () {
                this.select();
            }.bind(event.target), 1);
        },
        render: function () {
            return <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input id={this.props.id} onFocus={this.handleFocus} name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.handleChange}/>
            </div>;
        }
    });
});