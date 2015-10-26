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

  // Borrowed from here http://stackoverflow.com/a/2970667
  function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  function addNavItems(source, rootDir) {
    let pageName;
    let pageNameCamelCase;
    let markup;
    let button;
    for (let i = 0; i < source.length; i++) {
      pageName = source[i];
      pageNameCamelCase = toCamelCase(pageName);
      markup =
        `<a
          class="examplesNavButton"
          href="/${rootDir}/${pageNameCamelCase}/${pageNameCamelCase}.html"
        >
          ${pageName}
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
