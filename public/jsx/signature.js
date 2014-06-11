/** @jsx React.DOM */
/* global define */
define(["react"], function (React) {
    "use strict";
    return React.createClass({
        render: function () {
            return <div className={this.props.className} style={{"float": "left"}}>
                <div style={{
                    "fontFamily": "'OpenSans-Light'," +
                        "'Open Sans Light'," +
                        "'Open Sans'," +
                        "'Helvetica Neue'," +
                        "Arial," +
                        "sans-serif",
                    "fontSize": "12px", 
                    "color":"#333",
                    "lineHeight": "1.6em"
                }}>
                    <strong style={{"display": "block"}}>{this.props.name}</strong>
                    <em style={{
                        "display": "block",
                        "fontFamily": "'OpenSansLight-Italic'," +
                            "'Open Sans Light Italic'," +
                            "'Open Sans'," +
                            "'Helvetica Neue'," +
                            "Arial," +
                            "sans-serif",
                        "fontStyle": "italic"
                    }}>{this.props.title}</em>
                    <dl style={{}}>
                        <div>
                            <dt style={{
                                "display": "inline-block",
                                "minWidth": "6em"
                            }}>{this.props.email.label}</dt>
                            <dd style={{
                                "display": "inline-block",
                                "margin": "0"
                            }}>
                                <a href={"mailto:" + this.props.email.value} style={{
                                    "textDecoration": "none",
                                    "color": this.props.color
                                }}>{this.props.email.value}</a>
                            </dd>
                        </div>
                        <div>
                            <dt style={{
                                "display": "inline-block",
                                "minWidth": "6em"
                            }}>{this.props.telephone.label}</dt>
                            <dd style={{
                                "display": "inline-block",
                                "margin": "0"
                            }}>
                                <a href={"tel:" + this.props.telephone.value} style={{
                                    "textDecoration": "none",
                                    "color": this.props.color
                                }}>{this.props.telephone.value}</a>
                            </dd>
                        </div>
                    </dl>
                </div>
                <a href={this.props.logo.href} style={{
                    "display": "block",
                    "marginTop": "1.5em"
                }}>
                    <img
                        src={this.props.logo.src}
                        width="200"
                        height="31"
                        alt={this.props.logo.alt}
                        title={this.props.logo.alt}
                        style={{
                            "borderStyle": "none",
                            "display": "block"
                        }}
                    />
                </a>
            </div>;
        }
    });
});
