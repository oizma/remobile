var React = require('react');

module.exports = React.createClass({
    toggle: function() {
        app.accordionToggle(this.getDOMNode());
    },
    render: function() {
        var content = (
            <div className="accordion-item-content" onClick={function(e){e.stopPropagation()}}>
                {this.props.content}
            </div>
        );
        if (this.props.list) {
            return (
                <li onClick={this.toggle}>
                    {this.props.children}
                    {content}
                </li>
            );
        } else {
            return (
                <div onClick={this.toggle}>
                    {this.props.children}
                    {content}
                </div>
            );
        }
    }
});

