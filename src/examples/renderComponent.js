
import ReactDOM from 'react-dom';

export default function renderComponent(elementId, component) {
  ReactDOM.render(
    component,
    document.getElementById(elementId)
  );
}
