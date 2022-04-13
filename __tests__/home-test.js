/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/Home';
import Some from '../src/Some';
import Users from '../src/user';
import renderer from 'react-test-renderer';
import 'isomorphic-fetch';

/*
test('Home snapShot', () => {
  const snap = renderer.create(<Home />).toJSON();
  expect(snap).toMatchSnapshot();
});
*/

/*
it('funtion and state test care', () => {
  let HomeData = renderer.create(<Home />).getInstance();
  expect(HomeData.change(2)).toEqual(20);

  HomeData.change2(10);
  expect(HomeData.state.data).toEqual(10);
});
*/

/*
const findElement = (tree, element) => {
  let result;
  for (let node in tree.children) {
    if (tree.children[node].type === element) {
      result = true;
    }
  }
  return result;
};

it('find Elment', () => {
  let tree = renderer.create(<Home />).toJSON();
  expect(findElement(tree, 'Text')).toBeDefined();
});
*/

/*
it('api test case', async function () {
  // global.fetch = jest.fn().mockImplementation(() => {
  //   let p = new Promise((resolve, reject) => {
  //     resolve({
  //       json: function () {
  //         return {Id: 2};
  //       },
  //     });
  //   });
  //   return p;
  // });
  const resp = await Users.all();
  console.log('resp', resp);
  expect(resp.movies[2].id).toBe('3');
});
*/

test('Home snapShot', () => {
  const snap = renderer.create(<Some title="OK" />).getInstance();
  console.log('snap', snap);
  expect(snap).toMatchSnapshot();
});
