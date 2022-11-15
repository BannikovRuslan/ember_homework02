import Component from '@ember/component';

export default Component.extend({

    actions: {
        dataSelected(data) {
            this.set('dataItem', data);
        },
        dataMatched(data, term) {
            let objectFields = this.get('objectFields').split(',').map(function(objectField) {
                return objectField.trim();
            });
            let showStr = data.get(objectFields[0]);
            for (let i = 1; i < objectFields.length; i++) {
                showStr += " " + data.get(objectFields[i]);
            }
            const machedResult = showStr.toLowerCase().indexOf(term.toLowerCase());
            return machedResult;
        }
    },
});
