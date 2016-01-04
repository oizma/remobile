﻿var React = require('react');
var UI = require('UI');

var View = UI.View;
var Content = UI.Content;
var Button = UI.Button.Button;
var IconButton = UI.Button.IconButton;
var FloatingButton = UI.Button.FloatingButton;

module.exports = React.createClass({
	onTap: function() {
		console.log("onTap");
	},
	render: function() {
        return (
            <View.Page title="Chips">
            <View.PageContent>
            		<FloatingButton color="pink" onTap={this.onTap}></FloatingButton>
                <Content.ContentBlock>
                	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae porta enim. Sed ultricies lacinia mauris, non tincidunt sem eleifend eget. Duis convallis quis sem non volutpat. Morbi risus lorem, dapibus et nulla ac, pharetra maximus elit. Etiam vitae lacus a dui hendrerit ornare vitae id est. Pellentesque ut tortor id sem maximus lobortis at egestas nulla. Nulla pretium, nunc et porta ullamcorper, sem lorem elementum massa, rhoncus ullamcorper odio dui vel mauris. Ut lobortis neque congue eros posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. In sem dolor, tempus eu tellus quis, vulputate malesuada felis.</p>
						      <p>In iaculis nisi id ligula condimentum consequat. Fusce a massa lorem. Morbi id nisl ut tellus volutpat pulvinar a vel dolor. Phasellus eu purus tincidunt augue hendrerit posuere. Ut bibendum tincidunt nisi, sed cursus arcu pulvinar sed. Fusce accumsan ante et libero feugiat, congue maximus urna blandit. Nunc a est eu urna auctor congue. Aenean euismod ipsum sed nulla pretium rutrum.</p>
						      <p>Nunc id augue libero. Donec quis metus risus. Donec posuere vulputate purus, a semper justo consectetur at. Cras porta vestibulum pulvinar. Fusce in leo lacinia massa fringilla pellentesque ac sit amet sem. Nullam accumsan ante leo, eu faucibus lorem iaculis in. Duis id gravida libero.</p>
						      <p>Nulla facilisi. Duis tempus egestas eros et venenatis. Maecenas dictum ipsum sem, vitae aliquam diam viverra eget. Curabitur dui turpis, fermentum eleifend ornare id, pellentesque vitae metus. Duis a est faucibus, maximus nunc feugiat, rutrum ipsum. Integer in odio nisl. Quisque tortor sem, sollicitudin eget cursus nec, lobortis quis eros. Integer a sapien semper, vulputate ex at, tempor ante.</p>
						      <p>Donec at est ut quam pharetra fermentum. In auctor quam ut velit porttitor, sit amet convallis sapien interdum. Suspendisse sed magna molestie purus iaculis ultrices. Ut convallis facilisis bibendum. Aenean vitae velit quis felis congue aliquam vitae ac felis. Nulla ipsum augue, elementum quis venenatis ullamcorper, auctor at augue. Vestibulum varius tortor sit amet mauris finibus, at consectetur leo dictum. Duis a odio rutrum, efficitur orci a, congue ipsum. Nulla efficitur, velit non pellentesque pretium, tellus tortor auctor purus, nec mollis mauris felis quis elit. Etiam efficitur eleifend mi, vel sagittis neque auctor ut. </p>
						      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae porta enim. Sed ultricies lacinia mauris, non tincidunt sem eleifend eget. Duis convallis quis sem non volutpat. Morbi risus lorem, dapibus et nulla ac, pharetra maximus elit. Etiam vitae lacus a dui hendrerit ornare vitae id est. Pellentesque ut tortor id sem maximus lobortis at egestas nulla. Nulla pretium, nunc et porta ullamcorper, sem lorem elementum massa, rhoncus ullamcorper odio dui vel mauris. Ut lobortis neque congue eros posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi. In sem dolor, tempus eu tellus quis, vulputate malesuada felis.</p>
						      <p>In iaculis nisi id ligula condimentum consequat. Fusce a massa lorem. Morbi id nisl ut tellus volutpat pulvinar a vel dolor. Phasellus eu purus tincidunt augue hendrerit posuere. Ut bibendum tincidunt nisi, sed cursus arcu pulvinar sed. Fusce accumsan ante et libero feugiat, congue maximus urna blandit. Nunc a est eu urna auctor congue. Aenean euismod ipsum sed nulla pretium rutrum.</p>
						      <p>Nunc id augue libero. Donec quis metus risus. Donec posuere vulputate purus, a semper justo consectetur at. Cras porta vestibulum pulvinar. Fusce in leo lacinia massa fringilla pellentesque ac sit amet sem. Nullam accumsan ante leo, eu faucibus lorem iaculis in. Duis id gravida libero.</p>
						      <p>Nulla facilisi. Duis tempus egestas eros et venenatis. Maecenas dictum ipsum sem, vitae aliquam diam viverra eget. Curabitur dui turpis, fermentum eleifend ornare id, pellentesque vitae metus. Duis a est faucibus, maximus nunc feugiat, rutrum ipsum. Integer in odio nisl. Quisque tortor sem, sollicitudin eget cursus nec, lobortis quis eros. Integer a sapien semper, vulputate ex at, tempor ante.</p>
						      <p>Donec at est ut quam pharetra fermentum. In auctor quam ut velit porttitor, sit amet convallis sapien interdum. Suspendisse sed magna molestie purus iaculis ultrices. Ut convallis facilisis bibendum. Aenean vitae velit quis felis congue aliquam vitae ac felis. Nulla ipsum augue, elementum quis venenatis ullamcorper, auctor at augue. Vestibulum varius tortor sit amet mauris finibus, at consectetur leo dictum. Duis a odio rutrum, efficitur orci a, congue ipsum. Nulla efficitur, velit non pellentesque pretium, tellus tortor auctor purus, nec mollis mauris felis quis elit. Etiam efficitur eleifend mi, vel sagittis neque auctor ut.      </p>
						    </Content.ContentBlock>
            </View.PageContent>
            </View.Page>
        );
    }
});
