import React, { PropTypes } from "react";

export default React.createClass({

    propTypes: {
        state: PropTypes.string.isRequired,
        markup: PropTypes.string.isRequired,
        script: PropTypes.arrayOf(PropTypes.string),
        css: PropTypes.arrayOf(PropTypes.string)
    },

    defaultProps: {
        state: "",
        markup: "",
        script: [],
        css: []
    },

    render() {
        const { markup, script, css } = this.props;
        return (
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

                    <title>QF</title>
                    { css.map((href, k) =>
                        <link key={k} rel="stylesheet" type="text/css" href={href} />)
                    }
                </head>

                <body>
                    <div id="root" dangerouslySetInnerHTML={{__html: markup}} />

                    <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
                    { script.map((src, k) => <script key={k} src={src} />) }
                </body>
            </html>
        );
    }
});
