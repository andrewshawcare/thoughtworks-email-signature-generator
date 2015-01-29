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
                <label>{this.props.label}</label>
                <select
                    name={this.props.name}
                    title={this.props.label}
                    value={this.props.value}
                    onChange={this.handleChange}
                    className={this.props.className}
                    style={this.props.style}>
                    {this.props.options.map(function (option) {
                        return <option
                            key={option.value}
                            value={option.value}
                            label={option.label}
                            selected={option.selected}>
                            {option.label}
                        </option>;
                    })}
                </select>
            </div>;
        }
    });
});