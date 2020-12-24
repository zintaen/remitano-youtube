import _ from 'lodash';

function hasJsonStructure(str) {
  if (typeof str !== 'string') return false;
  try {
    const result = JSON.parse(str);
    const type = Object.prototype.toString.call(result);
    return type === '[object Object]' || type === '[object Array]';
  } catch (err) {
    return false;
  }
}

// eslint-disable-next-line import/prefer-default-export
export const localS = {
  get(key) {
    const found = localStorage.getItem(key);
    return hasJsonStructure(found) ? JSON.parse(found) : found;
  },
  set(key, value) {
    localStorage.setItem(
      key,
      _.isObject(value) ? JSON.stringify(value) : value,
    );
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
