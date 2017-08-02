/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import Tester from './Tester';

const tester = new Tester();

export const post = (...args) => tester.post(...args);