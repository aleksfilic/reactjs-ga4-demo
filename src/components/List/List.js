import React, { Component } from "react";
import { getRandomAccount, getRandomUser } from "../../utils";
import "./List.css";

class List extends Component {
  state = {
    items: [1, 2, 3],
  };

  propsForDimentions = {
    account_id: "1234",
    account_created_at: "2014-06-30T09:17:44.000Z",
    account_package: "premier",
    user_id: "12345",
    user_role_name: "Administrator",
    controller: "incidents",
    action: "index",
    request_source: "client",
  };

  setDimentionsConfig(tagId) {
    const config = {
      custom_map: {
        // dimension0: 'dimension_name0',
        // dimension1: 'dimension_name1',
        // 'dimension2': 'dimension_name2'
      },
    };

    this.gaDimensions.forEach((dim, index) => {
      config.custom_map[`dimention${index}`] = dim;
    });

    console.log({ config }); // eslint-disable-line
    window.gtag("config", tagId, config);
  }

  // gtag('config', 'TAG_ID', {
  //   'custom_map': {'metric<Index>': 'metric_name'}
  // });
  // gtag('event', 'any_event_name', {'metric_name': 'metric_value'});

  getDimentionValues() {
    // let counter = 0
    const dimentions = {};
    this.gaDimensions.forEach((dim, index) => {
      // console.log({ dim, index }) // eslint-disable-line
      const propsName = this.gaDimensions[index];
      // const dimentionIndex = `dimention${index}`;
      const value = this.propsForDimentions[dim];
      // console.log({ propsName, value }) // eslint-disable-line
      dimentions[propsName] = value;
      // return {
      //   // [dimentionIndex]: value,
      //   [propsName]: value,
      // };
    });

    dimentions.user_id = getRandomUser();
    dimentions.account_id = getRandomAccount();
    console.log({ dimentions }); // eslint-disable-line

    return dimentions;
  }

  componentDidMount() {
    this.gaDimensions = Object.keys(this.propsForDimentions);

    // const tagId = 'G-BH3L7FTCWX';

    console.log("page_view_test", this.props.tagId);
    window.gtag("event", "page_view_test", { send_to: this.props.tagId });
    // window.gtag('event', 'page_view', { send_to: 'G-GVNHZ8W57J' });
    // console.log('gtag',  window.gtag)
  }

  addEventWithDimentions = () => {
    console.log("add EventWithDimentions", this.props.tagId);
    this.setDimentionsConfig(this.props.tagId);

    const dimentions = this.getDimentionValues();
    console.log({ dimentions });
    window.gtag("event", "custom_event_with_dimentions", {
      send_to: this.props.tagId,
      ...dimentions,
    });
  };

  addItemHandler = () => {
    console.log("add item", this.props.tagId);
    window.gtag("event", "add_item_event", { send_to: this.props.tagId });
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(prevState.items.length + 1),
      };
    });
  };

  removeItemHandler = (selIndex) => {
    console.log("remove item", this.props.tagId);
    window.gtag("event", "remove_item_event", { send_to: this.props.tagId });
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
        <div>
          <button
            className="DimationsButton"
            onClick={() => this.addEventWithDimentions()}
          >
            Add Event With Dimentions
          </button>
        </div>
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
