/** @jsx React.DOM */
/* global define */
define(["react"], function (React) {
    "use strict";
    return React.createClass({
        render: function () {
            return <div className={this.props.className} style={{"float": "left"}}>
                <table cellSpacing="0" cellPadding="0" border="0" style={{
                    "fontSize": "12px",
                    "lineHeight": "12px",
                     "fontFamily": "OpenSans-Light," +
                        "'Open Sans Light'," +
                        "OpenSans," +
                        "'Open Sans'," +
                        "'Helvetica Neue'," +
                        "Helvetica," +
                        "Arial," +
                        "sans-serif",
                        "fontWeight": "300"
                }}>
                    <tr>
                        <td width="300" colSpan="2" style={{"paddingBottom": "4px",
                        "fontFamily": "OpenSans-SemiBold," +
                        "'Open Sans Semi Bold'," +
                        "OpenSans," +
                        "'Open Sans'," +
                        "'Helvetica Neue'," +
                        "Helvetica," +
                        "Arial," +
                        "sans-serif",
                        "fontWeight": "600"
                    }}>{this.props.name}</td>
                    </tr>
                    <tr>
                        <td width="300" colSpan="2" style={{ "fontFamily": "OpenSans-LightItalic," +
                        "'Open Sans Light Italic'," +
                        "OpenSans," +
                        "'Open Sans'," +
                        "'Helvetica Neue'," +
                        "Helvetica," +
                        "Arial," +
                        "sans-serif",
                        "fontStyle": "italic",
                    }}>{this.props.title}</td>
                    </tr>
                    <tr>
                        <td width="75" style={{"paddingTop": "12px", "paddingBottom": "4px"}}>{this.props.email.label}</td>
                        <td width="225" style={{"paddingTop": "12px", "paddingBottom": "4px"}}>
                            <a className="transition" href={"mailto:" + this.props.email.value} style={{
                                "color": this.props.color,
                                "backgroundColor": this.props.backgroundColor,
                                "textDecoration": "none"
                            }}>
                                <span style={{
                                    "color": this.props.color,
                                    "backgroundColor": this.props.backgroundColor
                                }}>{this.props.email.value}</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td width="75" style={{"paddingBottom": "12px"}}>{this.props.telephone.label}</td>
                        <td width="225" style={{"paddingBottom": "12px"}}>
                            <a className="transition" href={"tel:" + this.props.telephone.value} style={{
                                "color": this.props.color,
                                "backgroundColor": this.props.backgroundColor,
                                "textDecoration": "none"
                            }}>
                                <span style={{
                                    "color": this.props.color,
                                    "backgroundColor": this.props.backgroundColor
                                }}>{this.props.telephone.value}</span>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td width="300" colSpan="2"><a href={this.props.logo.href}><img
                        src={this.props.logo.src}
                        width="200"
                        height="31"
                        alt={this.props.logo.alt}
                        title={this.props.logo.alt}
                        style={{
                            "borderStyle": "none",
                            "display": "block"
                        }}
                    /></a></td>
                    </tr>
                </table>
            </div>;
        }
    });
});
