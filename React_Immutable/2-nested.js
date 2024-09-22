import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  return fromJS(object).getIn(array);
}
