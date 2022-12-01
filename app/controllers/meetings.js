import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export const PER_PAGE = 2;

export default Controller.extend({
    session: service(),
    queryParams: ['speakerId', 'bookId', 'date', 'page'],
    speakerId: '',
    bookId: '',
    date: '',
    page: 1,

    pages: computed('model.meetings.meta.total', function () {
        const MAX_COUNT_PAGES = 3; 
        const total = Number(this.get('model.meetings.meta.total'));
        if (Number.isNaN(total) || total <= 0) {
            return [];
        }
        const page= this.get('page');
        const totalPages = Math.ceil(total / PER_PAGE);
        const count_pages = MAX_COUNT_PAGES <= totalPages ? MAX_COUNT_PAGES : totalPages; 
        
        let pageInc = page - 1;
        if (page <= 1) {
            pageInc = 1;
        } else {
            if (page >= totalPages) {
                pageInc = totalPages - 2 > 0 ? totalPages - 2 : 1;
            }
        }    
        
        return new Array(count_pages)
            .fill()
            .map((value, index) => index + pageInc);
    }),

    isFisrtPage: computed('page', function () {
        return this.get('page') <= 1;
    }),

    isLastPage: computed('model.meetings.meta.total', function () {
        const total = Number(this.get('model.meetings.meta.total'));
        return this.get('page') >= Math.ceil(total / PER_PAGE) || Number.isNaN(total);
    }),

    nextPage: computed('model.meetings.meta.total', function () {
        const total = Number(this.get('model.meetings.meta.total'));
        return this.get('page') + 1 > total? total : this.get('page') + 1;
    }),

    prevPage: computed('page', function () {
        return this.get('page') - 1 < 1? 1 : this.get('page') - 1;
    }),

    actions: {
        async searchPresentations(meetingId) {
            event.preventDefault();
            let data = await this.store.query('presentation', { meetingId: meetingId });
            return data;
        },

        clearFilter() {
            this.set('speakerId', '');
            this.set('bookId', '');
            this.set('date', '');
        },
        
        async deleteMeeting(meeting) {
            try {
                
                await meeting.destroyRecord();
                meeting.unloadRecord();
                if (this.get('model.meetings.content').length == 0) {
                    this.send('refreshMeetings');                    
                }                
            }
            catch (error) {
                this.send('error', error);
            }            
        },
    },    
});
