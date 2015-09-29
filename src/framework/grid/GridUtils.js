
// TODO: Before & after need this unfortunately, naming could be improved in CSS
let _baseCellClass;

function _wrapCellContent (content, wrap, baseWrapClass) {
  if (!wrap) return content;

  let wrapClass = baseWrapClass;
  let wrapBefore;
  let wrapAfter;

  // Styles

  if (wrap.modifier) {
    // In theory could be many modifiers, right now only one is used
    wrapClass += '--' + wrap.modifier[0];
  }
  if (wrap.appendClass) {
    wrapClass += wrap.appendClass;
  }

  // Content

  // Recursion
  if (wrap.before)
    wrapBefore = _wrapCellContent(wrap.before, wrap.beforeWrap, _baseCellClass);

  if (wrap.after)
    wrapAfter = _wrapCellContent(wrap.after, wrap.afterWrap, _baseCellClass);

  if (wrap.href) {
    content =
      <a href={wrap.href} className={wrapClass}>
        {wrapBefore}
        {content}
        {wrapAfter}
      </a>
  } else {
    content =
      <span className={wrapClass}>
          {wrapBefore}
        {content}
        {wrapAfter}
        </span>
  }

  return content;

}

export default {

  generateCell(props, baseCellClass) {
    let cellContent = props.content;
    let cellClass = _baseCellClass = baseCellClass;

    /*
     * Only for thead
     * */

    if (props.section === 'thead') {

      // Styles

      if (props.sortable) {
        cellClass += ' sortable';
      }
      if (props.selected) {
        cellClass += ' selected';
      }
      if (props.reverse) {
        cellClass += ' reverse';
      }

      // Content

      if (props.sortable) {
        cellContent =
          <a>
            {props.content}
            <span className="arrowUp">
              <span className="arrowUp__centerLine"></span>
            </span>
            <span className="arrowDown">
              <span className="arrowDown__centerLine"></span>
            </span>
          </a>;
      }

    /*
     * Only for tbody & tfoot
     * */

    } else {

      cellContent = _wrapCellContent(
        props.content,
        props.contentWrap,
        baseCellClass + 'Value'
      );

    }

    if (props.appendClass) {
      cellClass += props.appendClass;
    }

    return {
      cellContent,
      cellClass,
    };
  }

};
