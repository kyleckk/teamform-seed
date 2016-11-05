import EventDetailCtrl from './eventDetail';

export default class EventEditCtrl extends EventDetailCtrl {
    constructor($location, $state, $stateParams, $timeout, eventService) {
        super($location, $state, $stateParams, $timeout, eventService);
    }
    edit() {
        this.loading = true;
        this.eventService.editEvent(this.event)
            .then((result) => {
                this.$timeout(() => {
                    this.loading = false;
                    this.$state.go('event.detail', {eventId: result.key});
                });
            }).catch((error) => {
                this.$timeout(() => {
                    this.error = error;
                    this.loading = false;
                });
            });
    }
}

EventEditCtrl.$inject = ['$location', '$state', '$stateParams', '$timeout', 'EventService'];