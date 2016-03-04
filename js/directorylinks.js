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
  $("[id^='row']").addClass('vcard');
  $("[class^='crm-phone']").each(function () {
    var $searchPhone = $(this);
    var searchPhoneSpan = $('<span/>', {
      class: 'tel',
      text: $($searchPhone).html(),
    });
    $($searchPhone).html(searchPhoneSpan);
  });

  //for page listing emails
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

  //for page view phone numbers
  $('.crm-profile-view').addClass('vcard');
  $("[id^='row-phone']").each(function () {
    var pagePhoneHtml = $(this).find('.content').html();
    var phoneDiv = $(this).find('.content');
    if ($(pagePhoneHtml).is('a')) {
      var pageListingPhone = $(this).find('.content').text();
      var $pagePhoneListingLink = $('<span/>', {
        class: 'tel',
        text: pageListingPhone,
      });
      $(phoneDiv).html($pagePhoneListingLink);
    } else {
      var pagePhone = $(this).find('.content');
      var pagePhoneLink = $('<span/>', {
        class: 'tel',
        text: $(pagePhone).html(),
      });
      $(pagePhone).html(pagePhoneLink);
    }
  });
});
