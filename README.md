
# Smaato UI Framework

> Smaato UI Framework (React, SCSS)

## Usage

Install this repo as an NPM dependency to gain access to its UI components.

#### As a React library

In your JS:

```javascript
import {
  AccountNav,
  AccountPicture,
  AddOnControl,
  AppHeader,
  AppHeaderDivider,
  AppLogo,
  AppNav,
  AppTitle,
  AppTitleContainer,
  BasicButton,
  Body,
  BodyPanel,
  BodyPanelItem,
  Button,
  CallOutButton,
  Chart,
  CheckBox,
  DateRange,
  FieldMessage,
  FiltersControl,
  Grid,
  GridBodyEditableCell,
  GridControls,
  GridEmptyRow,
  GridHeader,
  GridHeaderSortableCell,
  GridIcon,
  GridIconEdit,
  GridIconOptions,
  GridLoadingRow,
  GridRow,
  GridSearch,
  HollowButton,
  Icon,
  IconAsterisk,
  IconCheck,
  IconCog,
  IconEllipsis,
  Kpi,
  KpiNegative,
  KpiPositive,
  Label,
  LabeledControl,
  LabeledField,
  Modal,
  ModalBody,
  ModalConfirmationBody,
  ModalConfirmationFooter,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrganizationSwitcher,
  OrganizationSwitcherItem,
  PrimaryButton,
  SearchBox,
  Spinner,
  StickyGrid,
  SummaryControl,
  SummaryControlIcon,
  SummaryControlIconCheck,
  SummaryControlIconPaperclip,
  TextInput,
  TitleBar,
  VerticalLayout,
  ViewHeader,
  ViewHeaderNav,
} from 'ui-framework';

import {
  ComparisonTypes,
  ConditionChecker,
  Entity,
  FilterableItems,
  FilterOption,
  GridRowRecycler,
  GridStencil,
  polyfillCustomEvent,
  Sorter,
  ThrottledEventDispatcher,
} from 'ui-framework/services';
```

#### As a SCSS library

In your SCSS:

```javascript
@import 'path/to/node_modules/ui-framework/src/framework/index';
// Now you can use the SCSS styles, mixins, functions, and variables.
```

Keep in mind that you will be expected to use PostCSS and Autoprefixer to
add vendor-prefixed properties to your compiled CSS.

#### As a CSS library

This is not yet supported but we can add the compiled CSS file to the repo, so
that simpler projects will have access to the CSS, if such a use case arises.

## Getting Started

Work on examples in the `src/examples` directory.

Work on framework components in the `src/framework` directory.

#### Setup & Run

```bash
npm install
npm install -g gulp
gulp
```

#### View

```bash
open http://localhost:8000/
```

#### Production

```bash
gulp production
```

_Generates minified distribution with sourcemaps in ./dist/_

#### Deployment

To manually deploy the working copy the following command can be used:
```bash
gulp deploy --accessKeyId=XXX --bucket=XXX --secretAccessKey=XXX
```

The arguments can be provided via the command line as in this example where
- accessKeyId is the AWS access key id,
- bucket is the AWS S3 bucket and
- secretAccessKey is the AWS secret access key.

If the arguments are not provided via the command line they will be read from the environment variables
- AWS_ACCESS_KEY_ID
- AWS_BUCKET_UI_FRAMEWORK
- AWS_SECRET_ACCESS_KEY

## Maintenance

#### Getting started

* `gem install scss_lint` Install the Ruby gem for SCSS linting.

#### Folder structure

Here is a simplified view of the folder structure of the framework source.

```bash
src
├── assets
│   └── icons
├── examples
│   ├── _partials
│   │   ├── _componentLayout.jade
│   │   ├── _head.jade
│   │   ├── _integrationLayout.jade
│   │   └── _nav.jade
│   ├── components
│   │   └── titleBar.jade
│   ├── index.js
│   ├── index.scss
│   └── integrations
│       └── tableView.jade
└── framework
    ├── _index.scss
    ├── index.js
    └── titleBar
        ├── TitleBar.jsx
        ├── TitleBar.spec.jsx
        ├── TitleBarButton.jsx
        ├── _index.scss
        ├── _titleBar.scss
        └── _titleBarButton.scss
```

`examples`

Contains the files the demo the different components in the framework.
Documents their use from a UX/UI point of view, as well as how to use their
interfaces as React components.

`framework`

Contains the SCSS and JSX files that form the core of the framework.

### Adding new components

#### Checklist

Make sure each component has the following:

- [ ] A component .jsx file (obviously)
- [ ] A corresponding .spec.jsx test file and adequate tests
- [ ] An example .jsx file that demonstrates component use cases and states
- [ ] The component is exported in framework.js
- [ ] The component export is tested in framework.spec.js
- [ ] The README is updated to demonstrate how the component can be imported
- [ ] Test the component in Chrome, Firefox, Safari, and IE

Use the [Yeoman UI Generator](https://github.com/SmaatoUI/generator-ui) to
automatically create the component and test files.

#### Concepts

##### A component should have, at minimum, a JSX file, a SCSS file, and a test.

In the TitleBar example above, this would be the TitleBar.jsx file, the TitleBar.spec.jsx file,
and the _titleBar.scss file.  (The _index.scss file doesn't count since it isn't
supposed to contain any styles; instead it just imports the component SCSS files.)

If additional components live inside the same folder (e.g. TitleBarButton above),
they should also consist of an additional set of these 3 files.

##### Each component should be documented.

This means that each component (and its associated components, such as TitleBarButton)
should be documented in a file in the `examples/components` directory.

##### Component integrations should also be documented.

Composing components together into common UI patterns should be documented in
the `examples/integrations` directory.
