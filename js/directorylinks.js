CRM.$(function ($) {
  //for search view emails
  $("[class^='crm-email']").each(function () {
    var $searchEmail = $(this);
    var searchEmailLink = $('<a/>', {
      href: 'mailto:' + $($searchEmail).html(),
      target: '_blank',
      text: $($searchEmail).html(),
    });
    $($searchEmail).html(searchEmailLink);
  });

  //for search view phone numbers
  $('tr').addClass('vcard');
  $("[class^='crm-phone']").each(function () {
    var $searchPhone = $(this);
    var searchPhoneSpan = $('<span/>', {
      class: 'tel',
      text: $($searchPhone).html(),
    });
    $($searchPhone).html(searchPhoneSpan);
  });

  // for page view emails
  $("[id^='row-email']").each(function () {
    var $pageEmail = $(this).find('.content');
    var $pageEmailLink = $('<a/>', {
      href: 'mailto:' + $($pageEmail).html(),
      target: '_blank',
      text: $($pageEmail).html(),
    });
    $($pageEmail).html($pageEmailLink);
  });

  // for page view phone numbers
  $('.crm-profile-view').addClass('vcard');
  $("[id^='row-phone']").each(function () {
    var pagePhone = $(this).find('.content');
    var pagePhoneLink = $('<span/>', {
      class: 'tel',
      text: $(pagePhone).html(),
    });
    $(pagePhone).html(pagePhoneLink);
  });

});
