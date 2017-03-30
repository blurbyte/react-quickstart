/* eslint-disable no-console */
import rimraf from 'rimraf';
import fs from 'fs';
import chalk from 'chalk';

const pathsToRemove = [
  './src/actions/*',
  './src/components/*',
  './src/containers/*',
  './src/reducers/*',
  './src/sagas/*',
  './src/fonts',
  './src/styles/globalStyles.js',
  './src/index.ejs',
  './tools/removeDemo.js'
];

const filesToCreate = [
  {
    path: './src/actions/actionTypes.js',
    content: '// Action types constants'
  },
  {
    path: './src/reducers/initialState.js',
    content: '// Reducers\' default state'
  },
  {
    path: './src/reducers/index.js',
    content: '// Root reducer setup\nimport { combineReducers } from \'redux\';\nimport { routerReducer } from \'react-router-redux\';\n\nconst rootReducer = combineReducers({ routing: routerReducer });\n\nexport default rootReducer;'
  },
  {
    path: './src/styles/globalStyles.js',
    content: 'import { injectGlobal } from \'styled-components\';\n\ninjectGlobal\`\n\`;'
  },
  {
    path: './src/index.ejs',
    content: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"><title>Custom React App</title></head><body><div id="app"></div></body></html>'
  },
  {
    path: './src/containers/App.js',
    content: 'import React from \'react\';\n\n// import components from react-router-dom if needed\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div>React Quickstart</div>\n    );\n  }\n}\n\nexport default App;'
  },
  {
    path: './src/containers/Root.js',
    content: '// such root component is required react-hot-loader to work properly\nimport React, { PropTypes } from \'react\';\nimport { Provider } from \'react-redux\';\n\n// router\nimport { ConnectedRouter } from \'react-router-redux\';\n\n// main app container \nimport App from \'./App\';\n\nexport default class Root extends React.Component {\n  render() {\n    const { store, history } = this.props;\n    return (\n      <Provider store={store}>\n        <ConnectedRouter history={history}>\n          <App />\n        </ConnectedRouter>\n      </Provider>\n    );\n  }\n}\n\nRoot.propTypes = {\n  store: PropTypes.object.isRequired,\n  history: PropTypes.object.isRequired\n};'
  },
  {
    path: './src/sagas/defaultSaga.js',
    content: '// Default redux saga\nimport { fork } from \'redux-saga/effects\';\n\nexport function* dummySaga() {\n  yield;\n}\n\nexport default function* defaultSagas() {\n  yield [\n    fork(dummySaga)\n  ];\n}'
  },
  {
    path: './src/sagas/index.js',
    content: '// Root saga\nimport { fork } from \'redux-saga/effects\';\n\nimport defaultSaga from \'./defaultSaga\';\n\nexport default function* rootSaga() {\n  yield [\n    fork(defaultSaga)\n  ];\n}'
  }
];

function removePath(path, callback) {
  rimraf(path, error => {
    if (error) throw new Error(error);
    callback();
  });
}

function createFile(file) {
  fs.writeFile(file.path, file.content, error => {
    if (error) throw new Error(error);
  });
}

let numPathsRemoved = 0;
pathsToRemove.map(path => {
  removePath(path, () => {
    numPathsRemoved++;
    if (numPathsRemoved === pathsToRemove.length) {
      filesToCreate.map(file => createFile(file));
    }
  });
});

console.log(chalk.bgGreen('Demo app has been successfully removed.'));
