import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr('date-string'),
    rating: DS.attr('number'),
    urlPresentation: DS.attr('string'),
    urlVideo: DS.attr('string'),
    review: DS.attr('string'),
    
    speaker: DS.belongsTo('speaker'),
    book: DS.belongsTo('book'),
    meeting: DS.belongsTo('meeting'),
});
