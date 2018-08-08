
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  StatusDropdown,
  StatusDropdownOptionIcon,
} from '../../../framework/framework';

export default class StatusDropdownExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: undefined,
    };

    this.onSelectOption = this.onSelectOption.bind(this);
    this.onSelectOptionPublished = this.onSelectOptionPublished.bind(this);

    this.options = [
      StatusDropdown.OPTIONS.ACTIVATE,
      StatusDropdown.OPTIONS.DEACTIVATE,
      StatusDropdown.OPTIONS.ARCHIVE,
    ];

    this.optionsPublished = [
      StatusDropdown.OPTIONS.PUBLISHED,
      StatusDropdown.OPTIONS.UNPUBLISHED,
    ];
  }

  onSelectOption(option) {
    this.setState({
      selectedOption: option,
    });
  }

  onSelectOptionPublished(option) {
    this.setState({
      selectedOptionPublished: option,
    });
  }

  render() {
    return (
      <Page title={this.props.route.name}>

        <Example title="With Icons">
          <StatusDropdown
            onSelect={this.onSelectOption}
            options={this.options}
            selectedOption={this.state.selectedOption}
          />
        </Example>

        <Example title="Without Icons">
          <StatusDropdown
            onSelect={this.onSelectOptionPublished}
            options={this.optionsPublished}
            selectedOption={this.state.selectedOptionPublished}
          />
        </Example>

        <Example title="DISABLED">
          <StatusDropdown
            onSelect={this.onSelectOption}
            options={this.options}
            selectedOption={StatusDropdown.OPTIONS.DISABLED}
          />
        </Example>

        <Example title="StatusDropdownOptionIcon ACTIVATE">
          <StatusDropdownOptionIcon
            type={StatusDropdownOptionIcon.TYPE.ACTIVATE}
          />
        </Example>

        <Example title="StatusDropdownOptionIcon ARCHIVE">
          <StatusDropdownOptionIcon
            type={StatusDropdownOptionIcon.TYPE.ARCHIVE}
          />
        </Example>

        <Example title="StatusDropdownOptionIcon DEACTIVATE">
          <StatusDropdownOptionIcon
            type={StatusDropdownOptionIcon.TYPE.DEACTIVATE}
          />
        </Example>

        <Example title="StatusDropdownOptionIcon SELECTED">
          <StatusDropdownOptionIcon
            type={StatusDropdownOptionIcon.TYPE.SELECTED}
          />
        </Example>

      </Page>
    );
  }

}

StatusDropdownExample.propTypes = {
  route: PropTypes.object.isRequired,
};
