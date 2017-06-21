import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.databaseRef = this.props.database.ref().child('post');
  }
  render() {
    return (
      <div>listtemhgg</div>
    );
  }
}

export default ListItem;
