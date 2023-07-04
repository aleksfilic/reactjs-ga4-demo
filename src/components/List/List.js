import React, { Component } from "react";
import { getRandomAccount, getRandomUser } from "../../utils";
import "./List.css";

class List extends Component {
  state = {
    items: [1, 2, 3,1 , 1],
  };

  propsForDimensions = {
    account_id: "1234",
    account_created_at: "2014-06-30T09:17:44.000Z",
    account_package: "premier",
    user_id: "12345",
    user_role_name: "Administrator",
    controller: "incidents",
    action: "index",
    request_source: "client",
  };

  setDimensionsConfig(tagId) {
    const config = {
      custom_map: {},
    };

    this.gaDimensions.forEach((dim, index) => {
      config.custom_map[`dimension${index}`] = dim;
    });

    // console.log({ config }); // eslint-disable-line
    window.gtag("config", tagId, config);
  }

  getDimensionValues() {
    const dimensions = {};
    this.gaDimensions.forEach((dim, index) => {
      const propsName = this.gaDimensions[index];

      dimensions[propsName] = this.propsForDimensions[dim];
    });

    dimensions.user_id = getRandomUser();
    dimensions.account_id = getRandomAccount();
    // console.log({ dimensions }); // eslint-disable-line

    return dimensions;
  }

  componentDidMount() {
    this.gaDimensions = Object.keys(this.propsForDimensions);

    console.log("page_view_test", this.props.tagId);
    window.gtag("event", "page_view_test", { send_to: this.props.tagId });
  }

  addEventWithDimensions = () => {
    console.log("add EventWithDimensions", this.props.tagId);

    this.setDimensionsConfig(this.props.tagId);

    const dimensions = this.getDimensionValues();

    console.log({ dimensions });

    window.gtag("event", "custom_event_with_dimensions", {
      send_to: this.props.tagId,
      ...dimensions,
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
            className="DimensionsButton"
            onClick={() => this.addEventWithDimensions()}
          >
            Add Event With Dimensions
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

// old

// const config = {
//   custom_map: {
//     // dimension0: 'dimension_name0',
//     // dimension1: 'dimension_name1',
//     // 'dimension2': 'dimension_name2'
//   },

