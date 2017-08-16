$(document).on('click', '.ga-event:not(.remote-form-submit)', function(e) {
  var eventCategory = $(this).data('event-category');
  var eventAction = $(this).data('event-action');
  var eventLabel = $(this).data('event-label');
  // var eventValue = $(this).data('event-value');

  if (eventCategory && eventAction && typeof ga === 'function') {
    ga('send', {
      hitType: 'event',
      eventCategory: eventCategory, // required
      eventAction: eventAction, // required
      eventLabel: eventLabel,
      transport: 'beacon',
      // eventValue: eventValue,
      // hitCallback: function() {
      //   console.log('ga Event, category: "' + eventCategory + '", action: "' + eventAction + '", label: "' + eventLabel + '"');
      // }
    });
  }
});

$(document).ready(function() {
  $('.remote-contact-form-event').bind('ajax:success', function(evt, data, status, xhr) {
    if (typeof ga === 'function') {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Form Submission', // required
        eventAction: 'Submit', // required
        eventLabel: 'Contact Us'
      });
      console.log('Landing page form submission successful');
    }
  });
});
