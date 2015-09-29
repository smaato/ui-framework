
export default class GridUtils {

  constructor(args) {
    Object.assign(this, args);
  }

  wrapContent(content, wrap, baseWrapClass) {
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
      wrapBefore = this.wrapContent(wrap.before, wrap.beforeWrap, this.baseCellClass);

    if (wrap.after)
      wrapAfter = this.wrapContent(wrap.after, wrap.afterWrap, this.baseCellClass);

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

  generateCell() {
    let cellContent = this.props.content;
    let cellClass = this.baseCellClass;

    /*
     * Only for thead
     * */

    if (this.props.section === 'thead') {

      // Styles

      if (this.props.sortable) {
        cellClass += ' sortable';
      }
      if (this.props.selected) {
        cellClass += ' selected';
      }
      if (this.props.reverse) {
        cellClass += ' reverse';
      }

      // Content

      if (this.props.sortable) {
        cellContent =
          <a>
            {this.props.content}
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

      cellContent = this.wrapContent(
        this.props.content,
        this.props.contentWrap,
        this.baseCellClass + 'Value'
      );

    }

    if (this.props.appendClass) {
      cellClass += this.props.appendClass;
    }

    return {
      cellContent,
      cellClass,
    };
  }

}
