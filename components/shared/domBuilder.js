import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container"></div>
  <div id="store"></div>
  <div id="form-container"></div>
  <div id="logo"></div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
