import DS from 'ember-data';
import { inject as service } from '@ember/service';

export default DS.Transform.extend({
  moment: service(),
  deserialize(serialized) {
    let date = this._super(serialized);
    if (date instanceof Date && !isNaN(date)) {
      let formattedDate = this.get('moment').moment(date).format('DD-MM-YYYY');
      return formattedDate;
    }

    return null;
  },

  serialize(deserialized) {
    let deserializedDate = deserialized ? this.get('moment').moment(deserialized).toDate() : null;
    return this._super(deserializedDate);
  }
});
