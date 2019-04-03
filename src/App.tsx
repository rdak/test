import React, { Component } from "react";

import { Header, Footer, Container } from "./layout";
import { List } from "./components/List";
import { getArrayFromString, removeFromArray, pushToArray } from "./libs/helper";
import { BrowserRouter as Router, Route } from "react-router-dom";

interface IAppState {
  list: string[];
}

/**
 * Main Component
 */
export class App extends Component<{}, IAppState> {

  constructor(props) {
    super(props);

    const list = getArrayFromString(window.location.hash, "#tags=");

    this.state = {
      list
    };

    window.addEventListener("hashchange", () => {
      const list = getArrayFromString(window.location.hash, "#tags=");
      this.setState({
        list
      });
    });

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  /**
   * Adds new tag to the hash
   * @param tag - new tag
   */
  public add(tag: string) {
    const list = pushToArray(this.state.list, tag);
    this.pushHistory(list);
  }

  /**
   * Removes new tag to the hash
   * @param tag - removed tag
   */
  public remove(tag: string) {
    const list = removeFromArray(this.state.list, tag);
    this.pushHistory(list);
  }

  /**
   * Updates the window history
   * @param list - list of tags
   */
  public pushHistory(list: string[]) {
    window.location.hash = list.length ? `#tags=${list.join(",")}` : "";
  }

  public render() {
    const { list } = this.state;
    return (
      <>
        <Header />
        <Container>
          <List
            list={list}
            add={this.add}
            remove={this.remove}
          />
        </Container>
        <Footer />
      </>
    );
  }

}