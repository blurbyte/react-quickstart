import React from 'react';
import Helmet from 'react-helmet';

// components
import ContentWrapper from 'components/ContentWrapper';
import MainHeadline from 'components/MainHeadline';
import SecondaryHeadline from 'components/SecondaryHeadline';
import MainParagraph from 'components/MainParagraph';
import TextLink from 'components/TextLink';
import LayoutWrapper from './LayoutWrapper';
import LayoutMainColumn from './LayoutMainColumn';
import LayoutSecondaryColumn from './LayoutSecondaryColumn';
import Section from './Section';
import LinksList from './LinksList';

class HomePage extends React.Component {

  // page is static, no need to re-render it
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ContentWrapper>
        <Helmet>
          <title>Overview</title>
        </Helmet>
        <MainHeadline>Welcome to React Quickstart</MainHeadline>
        <MainParagraph>React Quickstart is starting kit for creating fast and responsive web applications with React. It takes care of initial developement environment setup, boilerplating and puts everything to use in simple example. Notable technologies used are: React, Redux, React Router, Babel, Webpack2, ESLint.</MainParagraph>
        <LayoutWrapper>
          <LayoutMainColumn>
            <Section>
              <SecondaryHeadline>Getting started!</SecondaryHeadline>
              <p>Just follow a few easy steps to set up demo project:</p>
              <ol>
                <li>Install <b>Node</b>, preferably > <b>6.9.1</b>.</li>
                <li>Install <b>Git</b>.</li>
                <li>Clone the repository <code>git clone https://github.com/blurbyte/react-quickstart.git</code></li>
                <li>Install <em>React Developer Tools</em> &ndash; provides insight about virtual DOM and components props.</li>
                <li>Install <em>Redux DevTools</em> &ndash; lets you inspect application state.</li>
                <li>Install <TextLink href="https://yarnpkg.com/">Yarn</TextLink> &ndash; installing modules super fast</li>
                <li>Enter project folder and install all required modules with simple <code>yarn</code> command.</li>
                <li>Start demo Redux aplication <code>npm start -s</code>. It will build a project, start webserver up and open app in your browser. It also automaticly lint code and run tests each time you save. Webpack serves all files from memory, no physical files are created.</li>
                <li>Take some time and review <em>example counter</em> application code. All project files are placed under <b>/src</b> folder.</li>
                <li>Build final project <code>npm run build</code>. Bundled application will be found in <b>/dist</b> directory. Files are created on disk.</li>
                <li>You can make a copy of the project for future reference.<br />Remove all test application files <code>npm run remove-demo</code>. It will leave bare bones for your own React, Redux, React Router app 🙂.</li>
              </ol>
            </Section>
            <Section>
              <SecondaryHeadline>Comprehensive modules overview</SecondaryHeadline>
              <p>Althought most important technologies used are React, Redux, React Router and Webpack there are a lot of other interesting tech choices:</p>
              <table>
                <thead>
                  <tr>
                    <th>Related Modules</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>react</strong>, react-dom</td>
                    <td>Reusable components for web applications in JavaScript</td>
                  </tr>
                  <tr>
                    <td><strong>redux</strong>, react-redux</td>
                    <td>Holds state of application in single place, solves data flow between components</td>
                  </tr>
                  <tr>
                    <td><strong>redux-saga</strong></td>
                    <td>Library for managing side effects, such as asynchronous data fetching, in redux</td>
                  </tr>
                  <tr>
                    <td><strong>react-router</strong>, react-router-redux, react-router-scroll</td>
                    <td>Simple declarative router for React apps</td>
                  </tr>
                  <tr>
                    <td><strong>react-helmet</strong></td>
                    <td>Document head management &ndash; change title and meta tags of the page</td>
                  </tr>
                  <tr>
                    <td><strong>whatwg-fetch</strong>, promise-polyfill</td>
                    <td>Fetch (modern replacement for XMLHttpRequest) polyfill</td>
                  </tr>
                  <tr>
                    <td><strong>babel-cli</strong>, <strong>babel-core</strong>, babel-loader and other babel modules</td>
                    <td>Take advantage of the newest JavaScript features, transpiles ES2015+ to ES5</td>
                  </tr>
                  <tr>
                    <td><strong>eslint</strong>, eslint-watch and eslint plugins</td>
                    <td>Reports JavaScript and React syntax errors</td>
                  </tr>
                  <tr>
                    <td><strong>webpack2</strong>, webpack-dev-middleware, webpack-hot-middleware and all <em>loaders</em></td>
                    <td>Bundles all modules into single file, enables React hot reloading &ndash; tweaking components in real time</td>
                  </tr>
                  <tr>
                    <td><strong>html-webpack-plugin</strong>, webpack-md5-hash</td>
                    <td>Creates custom html files for cache busting</td>
                  </tr>
                  <tr>
                    <td><strong>styled-components</strong></td>
                    <td>Write localized components styles in JavaScript</td>
                  </tr>
                  <tr>
                    <td><strong>sanitize.css</strong></td>
                    <td>Modern css reset stylesheet</td>
                  </tr>
                  <tr>
                    <td><strong>express</strong>, compression</td>
                    <td>Sets up Node.js development and production webservers</td>
                  </tr>
                  <tr>
                    <td><strong>jest</strong></td>
                    <td>Automated tests framework</td>
                  </tr>
                  <tr>
                    <td><strong>chalk</strong></td>
                    <td>Cool text colors and backgrounds for Terminal</td>
                  </tr>
                  <tr>
                    <td><strong>npm-run-all</strong></td>
                    <td>Allows to run multiple npm scripts in parallel</td>
                  </tr>
                  <tr>
                    <td><strong>rimraf</strong></td>
                    <td>Small files/direcories removal utility</td>
                  </tr>
                  <tr>
                    <td><strong>open</strong></td>
                    <td>Opens application in web browser automatically</td>
                  </tr>
                </tbody>
              </table>
            </Section>
            <Section>
              <SecondaryHeadline>Directories structure explained</SecondaryHeadline>
              <p>List of important files and directories:</p>
              <dl>
                <dt>package.json</dt>
                <dd>list of all installed npm modules</dd>
              </dl>
              <dl>
                <dt>.npmrc</dt>
                <dd>saves exact version of the module</dd>
              </dl>
              <dl>
                <dt>.eslintrc.json</dt>
                <dd>ESLint configuration file</dd>
                <dd>list of installed ESLint plugins and rules</dd>
              </dl>
              <dl>
                <dt>.babelrc</dt>
                <dd>Babel configuration file</dd>
              </dl>
              <dl>
                <dt>.editorconfig</dt>
                <dd>Enforces typing rules (via code editor plugin)</dd>
              </dl>
              <dl>
                <dt>.gitignore</dt>
                <dd>tells Git which files it should ignore</dd>
              </dl>
              <dl>
                <dt>webpack.config.dev.js</dt>
                <dd>webpack configuration file for development</dd>
                <dd>React hot module replacement enabled</dd>
              </dl>
              <dl>
                <dt>webpack.config.prod.js</dt>
                <dd>webpack configuration file for production</dd>
                <dd>cache busting with hashed names for bundled files</dd>
              </dl>
              <dl>
                <dt><b>src</b>/index.js</dt>
                <dd>application starting point</dd>
                <dd>Redux store and provider configuration</dd>
              </dl>
              <dl>
                <dt><b>src</b>/index.ejs</dt>
                <dd>template html file for html-webpack-plugin</dd>
              </dl>
              <dl>
                <dt><b>src</b>/webpack-public-path.js</dt>
                <dd>properly sets up webpack public path for development</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>styles</b></dt>
                <dd>global CSS styles and media queries setup</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>fonts</b></dt>
                <dd>custom fonts</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>actions</b></dt>
                <dd>Redux action creators</dd>
                <dd>list of actions which can occur in application</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>actions</b>/actionTypes.js</dt>
                <dd>list of all available action types</dd>
              </dl>
              <dl>
                <dt><b>src</b>/store.js</dt>
                <dd>Redux store configuration</dd>
                <dd>different middleware configurations for production and development</dd>
                <dd>ReduxDevTools setup</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>reducers</b></dt>
                <dd>Redux reducers</dd>
                <dd>application state is alerted here based on actions received</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>reducers</b>/initialState.js</dt>
                <dd>default state of reducers</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>reducers</b>/index.js</dt>
                <dd>Redux root reducer</dd>
                <dd>combines all reducers into single one</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>sagas</b></dt>
                <dd>managing side effects with redux-saga</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>components</b></dt>
                <dd>React presentational components</dd>
                <dd>tests and styles for each component in the same location</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>containers</b></dt>
                <dd>React container components</dd>
                <dd>application's logic and root page views</dd>
              </dl>
              <dl>
                <dt><b>src</b>/<b>containers</b>/<b>App</b></dt>
                <dd>React application root/wrapper component</dd>
                <dd>contains react-router routes declarations</dd>
              </dl>
            </Section>
          </LayoutMainColumn>
          <LayoutSecondaryColumn>
            <Section>
              <SecondaryHeadline>What will you learn?</SecondaryHeadline>
              <p>By inspecting source code of demo counter application you can get a good grasp of:</p>
              <ul>
                <li>How to set up JavaScript development environment for single page React web app</li>
                <li>How to organize file structure of your project</li>
                <li>How to write Redux action creators, reducers and connect components with store</li>
                <li>How to manage side effects with <em>redux-saga</em></li>
                <li>How to use Redux application state in combination with container component state</li>
                <li>How to write simple unit tests for actions and integration tests for reducers</li>
                <li>How to take advantage of <em>styled-components</em></li>
                <li>How to integrate custom fonts</li>
              </ul>
            </Section>
            <Section>
              <SecondaryHeadline>Do you really need all this stuff?</SecondaryHeadline>
              <p>If you are not sure wheter you need any of these technologies, you probably don't. It's the easiest rule of thumb you should follow.</p>
              <p>In simple real world web app you probably can get away with single style sheet and no Redux or router at all.</p>
              <p>The bigger project gets, the more people are working on it, the greater need for modularization and encapsulation. Fortunately React and Redux are extremely flexible and scalable.</p>
            </Section>
            <Section>
              <SecondaryHeadline>Check it out!</SecondaryHeadline>
              <LinksList>
                <li>Check my other projects on <TextLink href="https://github.com/blurbyte">GitHub</TextLink></li>
                <li>Contact me on <TextLink href="https://twitter.com/blurbyte">Twitter</TextLink></li>
                <li>Visit <TextLink href="http://blurbyte.com/">blurbyte.com</TextLink></li>
              </LinksList>
            </Section>
          </LayoutSecondaryColumn>
        </LayoutWrapper>
      </ContentWrapper>
    );
  }
}

export default HomePage;
