import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        presentations: {
            serialize: false,
            deserialize: 'record'
        }
    },
    normalize(model, hash) {
        hash = this._super(...arguments);
        return hash;
    },
});
