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
                if (bookId) {
                    query.book = parseInt(bookId);
                }
                if (speakerId) {
                    query.speaker = parseInt(speakerId);
                }
                if (date) {
                    query.date = date;
                }

            }

            const data = await this.store.query('meeting', query);

            const total = Number(data.get('meta.total'));
            if (!(Number.isNaN(total) || total <= 0)) {
                let totalPages = Math.ceil(total / PER_PAGE);
                if (totalPages < query._page) {
                    this.transitionTo('meetings', {queryParams: { page: totalPages }})
                }
            }
            
            this.set('isLoading', false);

            let allData =  RSVP.hash({
                speakers: await this.store.findAll('speaker'),
                books: await this.store.findAll('book'),
            });

            allData._result.meetings = data;
            allData._result.speaker = speakerId ? allData._result.speakers.findBy('id', speakerId) : null;
            allData._result.book = bookId ? allData._result.books.findBy('id', bookId) : null;
            allData._result.selectedDate = date ? new Date(date): null;
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
