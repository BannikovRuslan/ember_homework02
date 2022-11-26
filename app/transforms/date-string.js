import DS from 'ember-data';
import { inject as service } from '@ember/service';
import moment from 'moment';

export default DS.Transform.extend({
  // moment: service(),
  deserialize(serialized) {
    let date = serialized ? moment(serialized).toDate() : null;
    if (date instanceof Date && !isNaN(date)) {
      //let formattedDate = moment(date).format('DD.MM.YYYY');
      return date;
    }

    return null;
  },

  serialize(deserialized) {
    let deserializedDate = deserialized ? moment(deserialized).toDate() : "";
    //let deserializedDate = deserialized ? moment(deserialized).toString() : "";
    //return this._super(deserializedDate);
    return deserializedDate;
  }
});
