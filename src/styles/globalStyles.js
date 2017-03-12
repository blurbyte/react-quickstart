// GLOBAL STYLES
import { injectGlobal } from 'styled-components';

import OpenSansLight from '../fonts/OpenSans-Light.woff2';
import OpenSansBold from '../fonts/OpenSans-Bold.woff2';

injectGlobal`
  /*woff & woff2 is all needed for modern browsers*/
  @font-face {
    font-family: 'OpenSans Light';
    src:  url('${OpenSansLight}') format('woff2');
  }

  @font-face {
    font-family: 'OpenSans Bold';
    src:  url('${OpenSansBold}') format('woff2');
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  html {
    font-size: 10px;
    font-family: sans-serif;
    box-sizing: border-box;
    line-height: 1.4;
  }

  body {
    background: #fff;
    overflow-y: scroll;
    font-family: Arial, Helvetica, sans-serif;
  }

  input, textarea, button, select, label, a {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1.4rem;
    color: #444;
    line-height: 1.4;
    margin: 0.8rem 0;
  }

  code {
    font-family: 'Consolas', Courier New, Courier, monospace;
    background: rgba(40,40,40,0.1);
    padding: 0 0.4rem;
  }

  /*regular lists*/
  ol, ul, dl {
    font-size: 1.4rem;
    margin: 0.8rem 0;
    line-height: 1.4;
  }

  dl dt {
    font-style: italic;
  }

  li {
    margin: 0.2rem 0;
  }

  /*regular tables*/
  table {
    border-top: 2px solid #908e89;
    border-collapse: collapse;
    color: #444;
    margin-top: 1rem;
    margin-bottom: 6rem;
    width: 100%;
  }

  table th {
    font-family: 'OpenSans Light', Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    text-align: left;
    line-height: 1.4;
  }

  table td {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.4rem;
    text-align: left;
    line-height: 1.4;
  }

  table th, table td {
    padding: 1.4rem;
  }

  table th:first-child, table td:first-child {
    border-right: 1px solid #908e89;
  }

  table thead {
    background: rgba(40,40,40,0.1);
  }

  table tbody tr {
    background: rgba(40,40,40,0.02);
    transition: background 0.2s ease;
  }

  table tbody tr:hover {
    background: rgba(255,67,38,0.1);
  }

  ::-moz-selection {
    background: rgba(255,67,38,0.2);
    color: inherit;
  }

  ::selection {
    background: rgba(255,67,38,0.2);
    color: inherit;
  }
`;
