import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),
    pages: DS.attr('number'),
    cover: DS.attr('string'),
    tags: DS.attr(''),
    description: DS.attr('string'),
    rating: DS.attr('number'),

    presentations: DS.hasMany('presentation'),
});
