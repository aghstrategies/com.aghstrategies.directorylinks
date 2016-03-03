CRM.$(function ($) {
  //for search view email
  $("[class^='crm-email']").each(function () {
    var $searchEmail = $(this);
    var searchEmailLink = $('<a/>', {
      href: 'mailto:' + $($searchEmail).html(),
      target: '_blank',
      text: $($searchEmail).html(),
    });
    $($searchEmail).html(searchEmailLink);
  });

  //for search view phone
  $('tr').addClass('vcard');
  $("[class^='crm-phone']").each(function () {
    var $searchPhone = $(this);
    var searchPhoneSpan = $('<span/>', {
      class: 'tel',
      text: $($searchPhone).html(),
    });
    $($searchPhone).html(searchPhoneSpan);
  });

  // for page view email with each
  $("[id^='row-email']").each(function () {
    var $primaryEmail = $(this).find('.content').html();
    var $pageEmail = $(this).find('.content');
    var $emailLink = $('<a/>', {
      href: 'mailto:' + $primaryEmail,
      target: '_blank',
      text: $primaryEmail,
    });
    $($pageEmail).html($emailLink);
  });

  // for page view phone with each
  $('.crm-profile-view').addClass('vcard');
  $("[id^='row-phone']").each(function () {
    var phone = $(this).find('.content');
    var phoneLink = $('<span/>', {
      class: 'tel',
      text: $(phone).html(),
    });
    $(phone).html(phoneLink);
  });

});
