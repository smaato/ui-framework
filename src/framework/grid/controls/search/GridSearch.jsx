
import React, {
  Component,
} from 'react';

export default class GridSearch extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid__search">
        <label className="grid__search__input">
          <input type="text"/>
          <span className="icon glyphicons-search"/>
        </label>
      </div>
    );
  }
}
