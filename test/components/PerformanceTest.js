/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Main from 'components/Main';
import {given} from 'mocha-testdata';
import _ from 'lodash';

describe('MainComponent', () => {

  given([
    {
      values: ['david']
    },
    {
      range: [0, 2000]
    }
  ])
    .it('should render the component', (arg1) => {

      if (arg1.range) {
        arg1.values = _.range(arg1.range[0], arg1.range[1]).map((index) => index)
      }

      const cells = arg1.values.map((value) => <Main name={value}/>);

      console.time('renderIntoDocument');
      const component = TestUtils.renderIntoDocument(
        <div>
          {cells}
        </div>
      );
      console.timeEnd('renderIntoDocument');
      const domComponent = ReactDom.findDOMNode(component);
      expect(domComponent).to.not.be.a('undefined');
    });
});
