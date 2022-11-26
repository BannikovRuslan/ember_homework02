import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { PER_PAGE } from '../controllers/meetings';

export default Route.extend({
    queryParams: {
        speakerId: {
            refreshModel: true
        },
        bookId: {
            refreshModel: true
        }
        ,
        date: {
            refreshModel: true
        }
        ,
        page: {
            refreshModel: true
        }
    },

    async model({ speakerId, date, bookId, page }) {
        let query = {
            _page: page,
            _limit: PER_PAGE,
        };


        try {
            this.set('isLoading', true);

            if (speakerId || date || bookId) {
                //this.controller.set('tagsBook', tags);
                //this.controller.set('page', 1);
                //query._page = 1;
                if (bookId) {
                    query.book = parseInt(bookId);
                }
                if (speakerId) {
                    query.speaker = parseInt(speakerId);
                }
                if (date) {
                    query.date = date;
                }
                // const data = this.store.query('meeting', { q: [speaker, book], tags_like: date });
                // this.set('isLoading', false);
                // return data
            }
        
            // if (query._page < 1) {
            //     this.controller.transitionToRote('meetings', {queryParams: { page: 1 }});
            //     this.set('isLoading', false);
            //     return {};
            // }

            const data = await this.store.query('meeting', query);

            const total = Number(data.get('meta.total'));
            if (!(Number.isNaN(total) || total <= 0)) {
                let totalPages = Math.ceil(total / PER_PAGE);
                if (totalPages < query._page) {
                    this.transitionTo('meetings', {queryParams: { page: totalPages }})
                }
            }
            
            this.set('isLoading', false);
            // return data

            let allData =  RSVP.hash({
                speakers: await this.store.findAll('speaker'),
                books: await this.store.findAll('book'),
            });

            allData._result.meetings = data;
            //allData.controller.selectedDate = new Date(date);
            return allData

        }
        catch (error) {
            this.send('error', error);
        }
    },

    actions : {
        refreshMeetings() {
            this.refresh();
        },
        
    }
});
