CRM.$(function ($) {
  //for search view emails (all)
  $("[class^='crm-email']").each(function () {
    var $searchEmail = $(this);
    var searchEmailLink = $('<a/>', {
      href: 'mailto:' + $($searchEmail).html(),
      target: '_blank',
      text: $($searchEmail).html(),
    });
    $($searchEmail).html(searchEmailLink);
  });

  //for search view phone numbers for public pages and public pages and listings
  $("[id^='row']").addClass('hcard');
  $("[class^='crm-phone']").each(function () {
    var $value = $(this);
    console.log($value);
    if ($value.children().length) {
      var valueText = $value.children().html();
    } else {
      var valueText = $value.html();
    }

    $value.html($('<span/>', {
      class: 'value tel',
      text: $.trim(valueText),
    }));
  });

  //for views of individual contacts
  //for emails PuBlic Pages or Public Pages and Listings
  $("[id^='row-email']").each(function () {
    var $value = $(this).children('.content');
    if ($value.children().length) {
      var valueText = $value.children().html();
    } else {
      var valueText = $value.html();
    }

    $value.html($('<a/>', {
      href: 'mailto:' + $.trim(valueText),
      target: '_blank',
      text: $.trim(valueText),
    }));
  });

  //for views of individual contacts
  //for phone numbers Public Pages or Public Pages and Listings
  $('.crm-profile-view').addClass('hcard');
  $("[id^='row-phone']").each(function () {
    var $value = $(this).children('.content');
    if ($value.children().length) {
      var valueText = $value.children().html();
    } else {
      var valueText = $value.html();
    }

    $value.html($('<span/>', {
      class: 'value tel',
      text: $.trim(valueText),
    }));
  });
});
