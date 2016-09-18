import React from 'react';

const styles = require('./MainPage.css');

const MainPage = () => (
  <section className={styles.content}>
    <h1 className={styles['main-header']}>Welcome to React Quickstart</h1>
    <p className={styles['main-paragraph']}>React Quickstart is starting kit for creating fast and responsive web applications with React. It takes care of initial developement environment setup, boilerplating and puts everything to use in simple example. Notable technologies used are: React, Redux, React Router, Babel, Webpack, ESLint.</p>
    <div className={styles.columns}>
      <div className={styles['main-content']}>
        <section className={styles['content-section']}>
          <h2 className={styles['secondary-header']}>Getting started!</h2>
          <p>Just follow a few easy steps to set up demo project:</p>
          <ol className={styles.list}>
            <li><a className={styles['text-link']} href="https://nodejs.org/download/release/v5.9.1/">Install Node</a>, preferably <b>5.9.1</b> (lastest stable version for Windows and Azure cloud platform, for Mac OS X be free to get more recent version).</li>
            <li>Install <b>Git</b>.</li>
            <li>Clone the repository <code>git clone https://github.com/blurbyte/react-quickstart.git</code></li>
            <li>Install <em>React Developer Tools</em> &ndash; provides insight about virtual DOM and components props.</li>
            <li>Install <em>Redux DevTools</em> &ndash; lets you inspect application state.</li>
            <li>Enter project folder and install all required modules <code>npm install</code>.</li>
            <li>Start demo Redux aplication <code>npm start -s</code>. It will build a project, start webserver up and open app in your browser. It also automaticly lint code and run tests each time you save. Webpack serves all files from memory, no physical files are created.</li>
            <li>Take some time and review <em>example counter</em> application code. All project files are placed under <b>/src</b> folder.</li>
            <li>Build final project <code>npm run build</code>. Bundled application will be found in <b>/dist</b> directory. Files are created on disk.</li>
            <li>You can make a copy of the project for future reference.<br />Remove all test application files <code>npm run remove-demo</code>. It will leave bare bones for your own React, Redux, React Router app 🙂.</li>
          </ol>
        </section>
        <section className={styles['content-section']}>
          <h2 className={styles['secondary-header']}>Comprehensive modules overview</h2>
          <p>Althought most important technologies used are React, Redux, React Router and Webpack there are a lot of other interesting tech choices:</p>
          <table className={styles.table}>
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
                <td><strong>redux-thunk</strong></td>
                <td>Handy middleware to write async Redux action creators</td>
              </tr>
              <tr>
                <td><strong>react-router</strong>, react-router-redux</td>
                <td>Simple declarative router for React apps</td>
              </tr>
              <tr>
                <td><strong>whatwg-fetch</strong>, es6-promise</td>
                <td>Fetch (modern replacement for XMLHttpRequest) polyfill</td>
              </tr>
              <tr>
                <td><strong>babel-cli</strong>, <strong>babel-core</strong>, babel-loader and other babel modules</td>
                <td>Take advantage of the newest JavaScript features, transpiles ES6 to ES5</td>
              </tr>
              <tr>
                <td><strong>eslint</strong>, eslint-watch and eslint plugins</td>
                <td>Reports JavaScript and React syntax errors</td>
              </tr>
              <tr>
                <td><strong>webpack</strong>, webpack-dev-middleware, webpack-hot-middleware and all <em>loaders</em></td>
                <td>Bundles all modules into single file, enables React hot reloading &ndash; tweaking components in real time and css modules &ndash; locally scoped css</td>
              </tr>
              <tr>
                <td><strong>html-webpack-plugin</strong>, webpack-md5-hash</td>
                <td>Creates custom html files for cache busting</td>
              </tr>
              <tr>
                <td><strong>extract-text-webpack-plugin</strong></td>
                <td>Extracts whole CSS to separate file</td>
              </tr>
              <tr>
                <td><strong>express</strong>, compression</td>
                <td>Sets up Node.js development and production webservers</td>
              </tr>
              <tr>
                <td><strong>mocha</strong></td>
                <td>Automated tests framework</td>
              </tr>
              <tr>
                <td><strong>chai</strong></td>
                <td>BDD assertion library for Mocha</td>
              </tr>
              <tr>
                <td><strong>autoprefixer</strong>, postcss-loader</td>
                <td>Automatically handles vendor specific CSS prefixes</td>
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
        </section>
        <section className={styles['content-section']}>
          <h2 className={styles['secondary-header']}>Directories structure explained</h2>
          <p>List of important files and directories:</p>
          <dl className={styles.list}>
            <dt>package.json</dt>
            <dd>list of all installed npm modules</dd>
          </dl>
          <dl className={styles.list}>
            <dt>.npmrc</dt>
            <dd>saves exact version of the module</dd>
          </dl>
          <dl className={styles.list}>
            <dt>.eslintrc</dt>
            <dd>ESLint configuration file</dd>
            <dd>list of installed ESLint plugins and rules</dd>
          </dl>
          <dl className={styles.list}>
            <dt>.babelrc</dt>
            <dd>Babel configuration file</dd>
          </dl>
           <dl className={styles.list}>
            <dt>.editorconfig</dt>
            <dd>Enforces typing rules (via code editor plugin)</dd>
          </dl>
          <dl className={styles.list}>
            <dt>.gitignore</dt>
            <dd>tells Git which files it should ignore</dd>
          </dl>
          <dl className={styles.list}>
            <dt>webpack.config.dev.js</dt>
            <dd>webpack configuration file for development</dd>
            <dd>React hot module replacement enabled</dd>
          </dl>
          <dl className={styles.list}>
            <dt>webpack.config.prod.js</dt>
            <dd>webpack configuration file for production</dd>
            <dd>extracts CSS to separate file</dd>
            <dd>cache busting with hashed names for bundled files</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/routes.js</dt>
            <dd>react-router routes declarations</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/index.js</dt>
            <dd>application starting point</dd>
            <dd>Redux store and provider configuration</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/index.ejs</dt>
            <dd>template html file for html-webpack-plugin</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/webpack-public-path.js</dt>
            <dd>properly sets up webpack public path for development</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>styles</b></dt>
            <dd>global CSS styles</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>fonts</b></dt>
            <dd>custom fonts</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>actions</b></dt>
            <dd>Redux action creators</dd>
            <dd>list of actions which can occur in application</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>actions</b>/actionTypes.js</dt>
            <dd>list of all available action types</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>store</b></dt>
            <dd>Redux store configuration</dd>
            <dd>different middleware configurations for production and development</dd>
            <dd>ReduxDevTools setup</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>reducers</b></dt>
            <dd>Redux reducers</dd>
            <dd>application state is alerted here based on actions received</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>reducers</b>/initialState.js</dt>
            <dd>default state of reducers</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>reducers</b>/index.js</dt>
            <dd>Redux root reducer</dd>
            <dd>combines all reducers into single one</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>components</b></dt>
            <dd>React components</dd>
            <dd>components grouped logically in folders</dd>
            <dd>tests and CSS for each component in the same location</dd>
          </dl>
          <dl className={styles.list}>
            <dt><b>src</b>/<b>components</b>/App.js</dt>
            <dd>React application root/wrapper component</dd>
          </dl>
        </section>
      </div>
      <div className={styles['secondary-content']}>
        <section className={styles['content-section']}>
          <h2 className={styles['secondary-header']}>What will you learn?</h2>
          <p>By inspecting source code of demo counter application you can get a good grasp of:</p>
          <ul className={styles.list}>
            <li>How to set up JavaScript development environment for single page React web app</li>
            <li>How to organize file structure of your project</li>
            <li>How to write Redux action creators, reducers and connect components with store</li>
            <li>How to use Redux application state in combination with container component state</li>
            <li>How to write simple unit tests for actions and integration tests for reducers</li>
            <li>How to take advantage of <em>CSS modules</em></li>
            <li>How to integrate custom fonts</li>
          </ul>
        </section>
        <section className={styles['content-section']}>
          <h2 className={styles['secondary-header']}>Do you really need all this stuff?</h2>
          <p>If you are not sure wheter you need any of these technologies, you probably don't. It's the easiest rule of thumb you should follow.</p>
          <p>In simple real world web app you probably can get away with single style sheet and no Redux or router at all.</p>
          <p>The bigger project gets, the more people are working on it, the greater need for modularization and encapsulation. Fortunately React and Redux are extremely flexible and scalable.</p>
        </section>
        <section className={styles['content-section']}>
          <h2 className={styles['secondary-header']}>Check it out!</h2>
          <ul className={styles['links-list']}>
            <li>Check my other projects on <a className={styles['text-link']} href="https://github.com/blurbyte">Github</a></li>
            <li>Contact me on <a className={styles['text-link']} href="https://twitter.com/blurbyte">Twitter</a></li>
            <li>Visit <a className={styles['text-link']} href="http://blurbyte.com/">blurbyte.com</a></li>
          </ul>
        </section>
      </div>
  </div>
  </section>
);

export default MainPage;
