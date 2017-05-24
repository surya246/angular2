import { Component, OnInit, ViewChild } from '@angular/core';
// import '../../../assets/js/dragswap/zepto.min.js';
// import '../../../assets/js/dragswap/zepto.dragswap.js';
import { CalendarComponent } from "ap-angular2-fullcalendar";
import "fullcalendar/dist/fullcalendar.min.css";
import * as DragAndSwap from "drag-and-swap/lib/DragAndSwap.js";

declare let $: any;

@Component({
    selector: 'signup',
    templateUrl: 'signup.html',
    styleUrls: ['signup.css']
})

export class SignUpComponent implements OnInit {
    dragAndSwap: any;

    constructor() { }
    
    calendarOptions: Object = {
        height: 'parent',
        fixedWeekCount: false,
        defaultDate: '2016-09-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2016-09-01'
            },
            {
                title: 'Long Event',
                start: '2016-09-07',
                end: '2016-09-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-09-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-09-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-09-11',
                end: '2016-09-13'
            },
            {
                title: 'Meeting',
                start: '2016-09-12T10:30:00',
                end: '2016-09-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-09-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2016-09-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-09-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-09-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-09-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-09-28'
            }
        ]
    };

    @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

    changeCalendarView(view) {
        this.myCalendar.fullCalendar('changeView', view);
    }

    ngOnInit() {
        $('.dd').nestable();

        this.dragAndSwap = new DragAndSwap({
            containers: ['#swappercontainer', '#swappercontainer2'],
            element: '.swapperbox',
            isEnabled: true,
            swapBetweenContainers: true,
            onChange: function (boxes) {
                // console.log(boxes);
            }
        });

        // $('.sortable').dragswap({
        //     element: 'li', // the child element you are targeting
        //     overClass: 'over', // class when element goes over another element
        //     moveClass: 'moving', // class when element is moving
        //     dropClass: 'drop', // the class to add when the element is dropped
        //     dropAnimation: false, // do you want to detect animation end?
        //     exclude: '.disabled',  // excluded elements selector, here we can add array of excluded classes ['.exclude', '.exclude2']
        //     //prefix: getPrefix(), // function to get the prefix of the browser
        //     function() {
        //         alert();
        //     },
        //     dropComplete: function () { } // what to do when the drop is complete
        // });
    }

    enableDrag() {
        this.dragAndSwap.enable();
    }

    disableDrag() {
        this.dragAndSwap.disable();
    }

}