import React, { Component } from 'react';

import './List.css';

class List extends Component {
  state = {
    items: [1, 2, 3],
  };

  componentDidMount() {
    // const tagId = 'G-BH3L7FTCWX';

    console.log('page view', this.props.tagId);
    // window.gtag('event', 'page_view', { send_to: this.props.tagId });
    window.gtag('event', 'page_view', { send_to: 'G-BH3L7FTCWX' });
    console.log('gtag',  window.gtag)
  }

  addItemHandler = () => {
    console.log('add item');
    window.gtag('event', 'add_item_event', { send_to: this.props.tagId });
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(prevState.items.length + 1),
      };
    });
  };

  removeItemHandler = (selIndex) => {
    console.log('remove item');
    window.gtag('event', 'remove_item_event', { send_to: this.props.tagId });
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((_, index) => index !== selIndex),
      };
    });
  };


  render() {
    const listItems = this.state.items.map((item, index) => (
      <li
        key={index}
        className="ListItem"
        onClick={() => this.removeItemHandler(index)}
      >
        {item}
      </li>
    ));

    return (
      <div>
        <button className="Button" onClick={() => this.addItemHandler()}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <ul className="List">{listItems}</ul>
      </div>
    );
  }
}

export default List;
