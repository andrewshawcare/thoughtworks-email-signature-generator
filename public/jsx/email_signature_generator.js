/** @jsx React.DOM */
/* global define */
define([
    "react",
    "jsx!../jsx/select",
    "jsx!../jsx/input",
    "jsx!../jsx/checkbox",
    "jsx!../jsx/signature"
], function (
    React,
    Select,
    Input,
    Checkbox,
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
                shouldAddLegalFooterGermany: true,
                footerFirstLine: this.props.footerFirstLine,
                footerSecondLine: this.props.footerSecondLine,
                theme: this.props.theme
            };
        },
        handleLanguageChange: function (language) {
            this.setState({language: language});
        },
        handleNameChange: function (name) {
            this.setState({name: name});
        },
        handleTitleChange: function (title) {
            this.setState({title: title});
        },
        handleEmailChange: function (email) {
            this.setState({email: email});
        },
        handleTelephoneChange: function (telephone) {
            this.setState({telephone: telephone});
        },
        handleLegalFooterGermanyChange: function (shouldAddLegalFooterGermany) {
            this.setState({shouldAddLegalFooterGermany: !this.state.shouldAddLegalFooterGermany});
            if (this.state.shouldAddLegalFooterGermany) {
                this.setState({footerFirstLine: this.props.properties[this.state.language].legalFooterGermanyAddress});
                this.setState({footerSecondLine: this.props.properties[this.state.language].legalFooterGermanyInfo});
            } else {
                this.setState({footerFirstLine: null});
                this.setState({footerSecondLine: null});
            }
        },
        handleThemeChange: function (theme) {
            this.setState({theme: theme});
        },
        selectSignature: function () {
            /* global window, document */
            var selection = window.getSelection(),
                range = document.createRange(),
                node = this.refs.signature.getDOMNode();

            selection.removeAllRanges();
            range.selectNodeContents(node);
            selection.addRange(range);
        },
        render: function () {
            var properties = this.props.properties[this.state.language],
                theme = this.props.themes[this.state.theme];

            // FIXME: Figure out an elegant solution to updating out-of-scope DOM
            document.title = properties.title;
            document.getElementsByTagName("html")[0].setAttribute("lang", this.state.language);
            
            // jshint -W064
            return <article className="application">
                <header>
                    <div
                        className="languageMenu transition"
                        style={{
                            "color": theme.color,
                            "backgroundColor": theme.backgroundColor
                        }}
                    >
                        <Select
                            className="languageSelect"
                            name="language"
                            label={properties.languageLabel}
                            value={this.state.language}
                            options={this.props.languages.map(function (language) {
                                return {
                                    "label": properties[language],
                                    "value": language,
                                    "selected": this.state.language === language
                                };
                            }.bind(this))}
                            onChange={this.handleLanguageChange}
                        />
                    </div>
                    <a href={properties.thoughtworksUrl}>
                        <img
                            className="logo"
                            src={this.props.themes.black.logoUrl}
                            width="200"
                            height="31"
                            alt={properties.thoughtworksLabel}
                            title={properties.thoughtworksLabel}
                        />
                    </a>
                    <h1 className="title">{properties.title}</h1>
                    <p className="subtitle">{properties.subtitle}</p>
                </header>
                <section className="generator">
                    <div className="details">
                        <Input
                            id="name"
                            type="text"
                            label={properties.nameLabel}
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                        <Input
                            id="title"
                            type="text"
                            label={properties.titleLabel}
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                        <Input
                            id="email"
                            type="email"
                            label={properties.emailLabel}
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                        <Input
                            id="telephone"
                            type="tel"
                            label={properties.telephoneLabel}
                            value={this.state.telephone}
                            onChange={this.handleTelephoneChange}
                        />
                        <Checkbox
                            id="legalFooterGermany"
                            label={properties.legalFooterGermanyLabel}
                            value={this.state.shouldAddLegalFooterGermany}
                            onChange={this.handleLegalFooterGermanyChange}
                        />
                        <p style={{"font-size": "0.8rem"}}>
                            {properties.legalFooterGermanyDescription}
                        </p>
                        <Select
                            className="primary transition"
                            style={{
                                "color": theme.color,
                                "backgroundColor": theme.backgroundColor
                            }}
                            name="theme"
                            label={properties.themeLabel}
                            value={this.state.theme}
                            options={Object.keys(this.props.themes).map(function (theme) {
                                return {
                                    "label": properties[theme],
                                    "value": theme,
                                    "selected": this.state.theme === theme
                                };
                            }.bind(this))}
                            onChange={this.handleThemeChange}
                        />
                    </div>
                    <section className="preview">
                        <label>{properties.previewLabel}</label>
                        <Signature
                            className="signature"
                            ref="signature"
                            logo={{
                                height: "31px",
                                href: properties.thoughtworksUrl +
                                    "?utm_campaign=" + this.state.name.toLowerCase().replace(" ", "-") + "-signature&" +
                                    "utm_medium=email&" +
                                    "utm_source=thoughtworks-email-signature-generator",
                                src: theme.logoUrl,
                                alt: properties.thoughtworksLabel
                            }}
                            color={theme.backgroundColor}
                            backgroundColor={theme.color}
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
                            footerFirstLine={this.state.footerFirstLine}
                            footerSecondLine={this.state.footerSecondLine}
                        />
                        <button
                            className="button primary transition"
                            onClick={this.selectSignature}
                            style={{
                                "color": theme.color,
                                "backgroundColor": theme.backgroundColor
                            }}>
                            {properties.selectSignatureLabel}
                        </button>
                        <p>
                            <strong>{properties.instructionsLead}</strong> {properties.instructions}
                        </p>
                    </section>
                </section>
                <footer className="footer">
                    <small>{properties.footnote}</small>
                </footer>
            </article>;
        }
    });
});
