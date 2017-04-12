
import React, {
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

const HtmlElementsExample = props => (
  <Page title={props.route.name}>
    <Example>
      <form id="dummy" action="" method="post">
        <fieldset>
          <legend>Simple sample form</legend>
          <p>
            <label htmlFor="dummy0">Text input</label><br />
            <input
              type="text"
              name="dummy0"
              id="dummy0"
              defaultValue="Text field"
            />
          </p>
          <p>
            <label htmlFor="dummy2">Textarea</label><br />
            <textarea name="dummy2" id="dummy2" />
          </p>
          <p>
            <label htmlFor="dummy3">A password field</label><br />
            <input
              type="password"
              id="dummy3"
              name="dummy3"
              defaultValue="Password field"
            />
          </p>
          <p>
            <button value="Button">&lt;button&gt;</button>
            <input type="button" defaultValue="Button" />
            <input type="submit" defaultValue="Submit" />
            <input type="reset" defaultValue="Reset" />
          </p>
        </fieldset>
      </form>
      <hr />
      <fieldset>
        <legend>Select, checkboxes, lists</legend>
        <p>
          <label htmlFor="dummy4">Select field</label><br />
          <select id="dummy4" name="dummy4">
            <option value="1">Ottawa</option>
            <option value="2">Calgary</option>
            <option value="3">Moosejaw</option>
          </select>
        </p>
        <p>
          <label htmlFor="dummy5">Select with groups</label><br />
          <select id="dummy5" name="dummy5">
            <option>Favorite pet</option>
            <optgroup label="mammals">
              <option>dog</option>
              <option>cat</option>
              <option>rabbit</option>
              <option>horse</option>
            </optgroup>
            <optgroup label="reptiles">
              <option>iguana</option>
              <option>snake</option>
            </optgroup>
          </select>
        </p>
        <p><label htmlFor="dummy5">Radio buttons</label><br />
          <input type="radio" name="example" /> Radio one<br />
          <input type="radio" name="example" /> Radio two<br />
          <input type="radio" name="example" /> Radio three<br />
        </p>
        <p><label htmlFor="dummy5">Checkboxes</label><br />
          <input type="checkbox" /> Check one<br />
          <input type="checkbox" /> Check two<br />
          <input type="checkbox" /> Check three<br />
        </p>
      </fieldset>
      <hr />
      <h1>H1: Lorem ipsum dolor sit amet</h1>
      <h2>H2: Lorem ipsum dolor sit amet, consectetur elit</h2>
      <h3>H3: Lorem ipsum dolor sit amet, consectetur adipisicing
        elit</h3>
      <h4>H4: Lorem ipsum dolor sit amet, consectetur adipisicing
        elit adipis</h4>
      <h5>H5: Lorem ipsum dolor sit amet, consectetur adipisicing
        elit adipisicing elit adipisicing elit</h5>
      <h6>H6: Lorem ipsum dolor sit amet, consectetur adipisicing
        elit adipisicing elit adipisicing elit</h6>
      <hr />
      <ul>
        <li>Unordered list test</li>
        <li>Another list element. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.</li>
        <li>Yet another element in the list</li>
        <li>Some long text. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.</li>
      </ul>
      <hr />
      <ol>
        <li>Ordered list test</li>
        <li>Another list element</li>
        <li>Yet another element in the list</li>
      </ol>
      <hr />
      <ol>
        <li>Ordered list</li>
        <li>Here&apos;s a nested unordered list
          <ul>
            <li>Nested Unordered list</li>
            <li>Nested ordered list
              <ol>
                <li>The first</li>
                <li>And the second</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>Ordered List item</li>
        <li>Nested Ordered list
          <ol>
            <li>Some point</li>
            <li>Nested Unordered list
              <ul>
                <li>The first</li>
                <li>And the second</li>
              </ul>
            </li>
          </ol>
        </li>
      </ol>
      <hr />
      <dl>
        <dt>definition list dt</dt>
        <dd>definition list dd</dd>
      </dl>
      <hr />
      <p>
        <strong>&lt;strong&gt;</strong><br />
        <del>&lt;del&gt; deleted</del><br />
        <em>&lt;em&gt; emphasis</em>
      </p>
      <p>
        <a>&lt;a&gt; anchor</a><br />
        <a href="http://www.google.com">&lt;a&gt; a + href</a>
      </p>
      <hr />
      <table summary="This is the summary text for this table.">
        <caption>
          <em>A test table with a thead, tfoot, and tbody elements</em>
        </caption>
        <thead>
          <tr>
            <th>Table Header One</th>
            <th>Table Header Two</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan="2">tfoot footer</td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>TD One</td>
            <td>TD Two</td>
          </tr>
          <tr>
            <td>TD One</td>
            <td>TD Two</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>TD One</td>
            <td>TD Two</td>
          </tr>
          <tr>
            <td>TD One</td>
            <td>TD Two</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <pre>
      &lt;pre&gt;
      pre  space1
      pre  space1
      pre    space2
      pre    space2
      pre tab
      pre tab</pre>
      <code>
        &lt;code&gt;
        Not indented
        indent1
        indent1
        indent2
        indent3
      </code>
    </Example>
  </Page>
);

HtmlElementsExample.propTypes = {
  route: PropTypes.object,
};

export default HtmlElementsExample;
