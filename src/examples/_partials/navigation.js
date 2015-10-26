// On DOM ready
$(() => {
  const menu = $('#examplesNavMenu');

  const integrations = [
    'tableView',
  ];

  const components = [
    'CheckBox',
    'Grid',
    'Spinner',
    'titleBar',
  ];

  function addNavItems(source, rootDir) {
    let value;
    let markup;
    let button;
    for (let i = 0; i < source.length; i++) {
      value = source[i];
      markup =
        `<a
          class="examplesNavButton"
          href="/${rootDir}/${value}/${value}.html"
        >
          ${value}
        </a>`;
      button = $(markup);
      menu.append(button);
    }
  }

  function addTitle(name) {
    menu.append($(`<div class="examplesNavMenuTitle">${name}</div>`));
  }

  addTitle('Integrations');
  addNavItems(integrations, 'integrations');

  addTitle('Components');
  addNavItems(components, 'components');

  $('#examplesNavMenuButton')
    .on('click', () => menu.toggleClass('is-examples-nav-menu-visible'));
});
