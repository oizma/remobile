var React = require('react');
var UI = require('UI');

var View = UI.View;
var Content = UI.Content;
var Button = UI.Button.Button;

var navbar = React.createClass({
    render() {
        return (
            <div className='navbar-inner'>
                <div className="left sliding"><a href="#" className="back link"><i className="icon icon-back"></i><span>Back</span></a></div>
                <div className="center sliding">page5</div>
                <div className="right"><a href="#" className="open-panel link icon-only"><i className="icon icon-bars"></i></a></div>
            </div>
        )
    }
});

var toolbar = React.createClass({
    render() {
        return (
            <div className="toolbar-inner">
                <a href="#" className="link">Dummy Link</a>
                <a href="#" data-popover=".popover-menu" className="open-popover link">Menu</a>
            </div>
        )
    }
});

var page = React.createClass({
    gotoNextPage() {
        app.showView('page6', {text:'Are you page 6'}, {text:'I am page 5'});
    },
    goBack() {
        app.goBack(1, {text:'I am back 5'});
    },
	render() {
		return (
			<View.PageContent>
                <Content.ContentBlockTitle>Page 5</Content.ContentBlockTitle>
              <Content.ContentBlock>
                  <p>come from: {this.props.params.from}</p>
                  <p>params: {this.props.params.text}</p>
                  <p>saved: {this.props.saved.text}</p>
              </Content.ContentBlock>

              <Content.ContentBlock>
                  <Button onTap={this.gotoNextPage}>go to page 6</Button>
              </Content.ContentBlock>
              <Content.ContentBlock>
                  <Button onTap={this.goBack}>back to page 4</Button>
              </Content.ContentBlock>
          </View.PageContent>
		);
	}
});

module.exports = {navbar, toolbar, page};
