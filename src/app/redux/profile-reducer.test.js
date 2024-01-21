import { render, screen } from '@testing-library/react';
import profileReducer, { addPost } from './profile-reducer';

it('new post should be added', () => {
  //1.test data
  let action = addPost('hello');
  let state = {
    posts: [
      {
        id: 1,
        message: 'Привіт, хто хоче покататись?',
      },
      {
        id: 2,
        message: 'Починаю нову програму! Поїхали!',
      },
    ],
  };

  //2.action
  let newState = profileReducer(state, action);

  //3.expectation
  expect(newState.posts.length).toBe(3);
});
