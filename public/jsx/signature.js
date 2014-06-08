/** @jsx React.DOM */
/* global define */
define(["react"], function (React) {
    "use strict";
    return React.createClass({
        render: function () {
            return <div className={this.props.className} style={{"float": "left"}}>
                <div style={{
                    "float": "left",
                    "font-family": "'OpenSans-Light'," +
                        "'Open Sans Light'," +
                        "'Open Sans'," +
                        "'Helvetica Neue'," +
                        "Arial," +
                        "sans-serif",
                    "font-size": "12px", 
                    "color":"#000"
                }}>
                    <strong style={{"display": "block"}}>{this.props.name}</strong>
                    <small style={{
                        "display": "block",
                        "font-family": "'OpenSansLight-Italic'," +
                            "'Open Sans Light Italic'," +
                            "'Open Sans'," +
                            "'Helvetica Neue'," +
                            "Arial," +
                            "sans-serif",
                        "font-style": "italic"
                    }}>{this.props.title}</small>
                    <dl style={{"float": "left"}}>
                        <dt style={{
                            "float": "left",
                            "width": "6em"
                        }}>{this.props.email.label}</dt>
                        <dd style={{
                            "float": "left",
                            "margin": "0"
                        }}>
                            <a href={"mailto:" + this.props.email.value} style={{
                                "text-decoration": "none",
                                "color": this.props.color
                            }}>{this.props.email.value}</a>
                        </dd>
                        <dt style={{
                            "float": "left",
                            "clear": "left",
                            "width": "6em"
                        }}>{this.props.telephone.label}</dt>
                        <dd style={{
                            "float": "left",
                            "margin": "0"
                        }}>
                            <a href={"tel:" + this.props.telephone.value} style={{
                                "text-decoration": "none",
                                "color": this.props.color
                            }}>{this.props.telephone.value}</a>
                        </dd>
                    </dl>
                </div>
                <a href={this.props.logo.href} style={{
                    "float": "left",
                    "clear": "left",
                    "margin": "1em 0"
                }}>
                    <img
                        src={this.props.logo.src}
                        width="200"
                        height="31"
                        alt={this.props.logo.alt}
                        style={{
                            "display": "block",
                            "float": "left"
                        }}
                    />
                </a>
            </div>;
        }
    });
});
