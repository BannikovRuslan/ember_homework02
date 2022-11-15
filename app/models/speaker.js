import DS from 'ember-data';

export default DS.Model.extend({
    lastName: DS.attr("string"),
    firstName: DS.attr("string"),
    middleName: DS.attr("string"),
    foto: DS.attr("string"),

    presentations: DS.hasMany('presentation'),
});
