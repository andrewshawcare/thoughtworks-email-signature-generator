/** @jsx React.DOM */
/* global define */
define(["react"], function (React) {
    "use strict";
    return React.createClass({
        render: function () {
            return <div className={this.props.className} style={{"float": "left"}}>
                <div style={{
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
                    <em style={{
                        "display": "block",
                        "font-family": "'OpenSansLight-Italic'," +
                            "'Open Sans Light Italic'," +
                            "'Open Sans'," +
                            "'Helvetica Neue'," +
                            "Arial," +
                            "sans-serif",
                        "font-style": "italic"
                    }}>{this.props.title}</em>
                    <dl style={{}}>
                        <div>
                            <dt style={{
                                "display": "inline-block",
                                "min-width": "6em"
                            }}>{this.props.email.label}</dt>
                            <dd style={{
                                "display": "inline-block",
                                "margin": "0"
                            }}>
                                <a href={"mailto:" + this.props.email.value} style={{
                                    "text-decoration": "none",
                                    "color": this.props.color
                                }}>{this.props.email.value}</a>
                            </dd>
                        </div>
                        <div>
                            <dt style={{
                                "display": "inline-block",
                                "min-width": "6em"
                            }}>{this.props.telephone.label}</dt>
                            <dd style={{
                                "display": "inline-block",
                                "margin": "0"
                            }}>
                                <a href={"tel:" + this.props.telephone.value} style={{
                                    "text-decoration": "none",
                                    "color": this.props.color
                                }}>{this.props.telephone.value}</a>
                            </dd>
                        </div>
                    </dl>
                </div>
                <a href={this.props.logo.href} style={{
                    "display": "block",
                    "margin-top": "1em"
                }}>
                    <img
                        src={this.props.logo.src}
                        width="200"
                        height="31"
                        alt={this.props.logo.alt}
                        title={this.props.logo.alt}
                        style={{
                            "border-style": "none",
                            "display": "block"
                        }}
                    />
                </a>
            </div>;
        }
    });
});
