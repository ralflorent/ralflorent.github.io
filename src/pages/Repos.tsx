import * as React from "react";
// import { observer } from "mobx-react";

import REPOS from "./repos";

interface Props {}
interface State {
    items: any[]
}

export default class ReposPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.setState({
      items: [...REPOS]
    });
  }

  handleChange = (event: any) => {
    const searchTerm = event.currentTarget.value;
    const results = REPOS.filter(
      item =>
        item.name.includes(searchTerm) || item.description.includes(searchTerm)
    );
    this.setState({ items: results });
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <h1>Repos</h1>
        <div className="repos">
          <input
            placeholder="Filter by name or description"
            onChange={this.handleChange}
          />
          <ul>
            {items.map((item: any, index: number) => (
              <li key={"item" + index}>
                <p className="title">{item.name}</p>
                <p className="description">{item.description}</p>
              </li>
            ))}
          </ul>
          {items.length === 0 && <span>No results found!</span>}
        </div>
      </>
    );
  }
}
