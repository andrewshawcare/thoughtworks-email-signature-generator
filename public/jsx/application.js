/** @jsx React.DOM */
/* global define */
define([
    "react",
    "jsx!../jsx/select",
    "jsx!../jsx/input",
    "jsx!../jsx/signature"
], function (
    React,
    Select,
    Input,
    Signature
) {
    "use strict";
    return React.createClass({
        getInitialState: function () {
            return {
                language: this.props.language,
                name: this.props.name,
                title: this.props.title,
                email: this.props.email,
                telephone: this.props.telephone,
                theme: this.props.theme
            };
        },
        handleLanguageChange: function (language, event) {
            this.setState({language: language});
        },
        handleNameChange: function (name, event) {
            this.setState({name: name});
        },
        handleTitleChange: function (title, event) {
            this.setState({title: title});
        },
        handleEmailChange: function (email, event) {
            this.setState({email: email});
        },
        handleTelephoneChange: function (telephone, event) {
            this.setState({telephone: telephone});
        },
        handleThemeChange: function (theme, event) {
            this.setState({theme: theme});
        },
        selectSignature: function () {
            var selection = window.getSelection(),
                range = document.createRange(),
                node = this.refs.signature.getDOMNode();

            selection.removeAllRanges();
            range.selectNodeContents(node);
            selection.addRange(range);
        },
        render: function () {
            var properties = this.props.properties[this.state.language];
            var theme = this.props.themes[this.state.theme];
            return <article className="application">
                <header>
                    <div className="languageMenu" style={{"background-color": theme.color}}>
                        <Select
                            className="languageSelect"
                            name="language"
                            label={properties.languageLabel}
                            value={this.state.language}
                            options={this.props.languages.map(function (language) {
                                return {
                                    "label": properties[language],
                                    "value": language
                                }
                            }.bind(this))}
                            onChange={this.handleLanguageChange}
                        />
                    </div>
                    <a href={properties.thoughtworksUrl}>
                        <img className="logo" src={this.props.themes.black.logoUrl} width="200" height="31" alt={properties.thoughtworksLabel}/>
                    </a>
                    <h1 className="title">{properties.title}</h1>
                    <p className="subtitle">{properties.subtitle}</p>
                </header>
                <section className="generator">
                    <form className="details">
                        <Input id="name" type="text" label={properties.nameLabel} value={this.state.name} onChange={this.handleNameChange}/>
                        <Input id="title" type="text" label={properties.titleLabel} value={this.state.title} onChange={this.handleTitleChange}/>
                        <Input id="email" type="email" label={properties.emailLabel} value={this.state.email} onChange={this.handleEmailChange}/>
                        <Input id="telephone" type="tel" label={properties.telephoneLabel} value={this.state.telephone} onChange={this.handleTelephoneChange}/>
                        <Select
                            className="primary"
                            style={{"background-color": theme.color}}
                            name="theme"
                            label={properties.themeLabel}
                            value={this.state.theme}
                            options={Object.keys(this.props.themes).map(function (theme) {
                                return {
                                    "label": properties[theme],
                                    "value": theme
                                }
                            }.bind(this))}
                            onChange={this.handleThemeChange}
                        />
                    </form>
                    <section className="preview">
                        <label>{properties.previewLabel}</label>
                        <Signature
                            className="signature"
                            ref="signature"
                            logo={{
                                height: "31px",
                                href: properties.thoughtworksUrl,
                                src: theme.logoUrl,
                                alt: properties.thoughtworksLabel
                            }}
                            color={theme.color}
                            name={this.state.name}
                            title={this.state.title}
                            email={{
                                label: properties.emailLabel,
                                value: this.state.email
                            }}
                            telephone={{
                                label: properties.telephoneLabel,
                                value: this.state.telephone
                            }}
                        />
                        <button className="button primary" onClick={this.selectSignature} style={{"background-color": theme.color}}>{properties.selectSignatureLabel}</button>
                    </section>
                </section>
                <footer className="footer">
                    <small>{properties.footnote}</small>
                </footer>
            </article>;
        }
    });
});