
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

//replace global fetch with the mock
global.fetch = require('jest-fetch-mock')