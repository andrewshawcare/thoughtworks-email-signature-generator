/** @jsx React.DOM */
/* global define */
define(["react"], function (React) {
    "use strict";
    return React.createClass({
        handleChange: function (event) {
            this.props.onChange(event.target.value, event);
        },
        handleFocus: function (event) {
            /* global setTimeout */
            // Timeout added to fix flaky selection persistence on Chrome
            setTimeout(function () {
                this.select();
            }.bind(event.target), 1);
        },
        render: function () {
            return <div style={{"clear": "both",
                                "float": "none",
                                "position": "relative"}}>
                <input
                    id={this.props.id}
                    style={{"position": "absolute",
                            "top": "3px",
                            "width": "auto"}}
                    onFocus={this.handleFocus}
                    name={this.props.name}
                    title={this.props.label}
                    type="checkbox"
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                <label style={{"display": "block",
                               "margin-left": "25px"}}
                       htmlFor={this.props.id}>
                            {this.props.label}
                </label>
            </div>;
        }
    });
});