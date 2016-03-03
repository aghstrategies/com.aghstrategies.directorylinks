CRM.$(function ($) {
  console.log('linked');

  // for search view
  $('.crm-email').each(function () {
    $(this).wrapInner("<a href='mailto:" + $(this).text() + "' target='_blank'></a>");
  });

  $('tr').addClass('vcard');
  $('.crm-phone').each(function () {
    $(this).wrapInner("<span class='tel'></span>");
  });

  // for page view email
  var primaryEmail = $('#row-email_Primary').find('.content');
  var emailLink = $('<a/>', {
    href: 'mailto:' + $(primaryEmail).html(),
    target: '_blank',
    text: $(primaryEmail).html(),
  });
  $(primaryEmail).html(emailLink);

  // for page view phone
  $('.crm-profile-view').addClass('vcard');
  var primaryPhone = $('#row-phone_Primary_1').find('.content');
  var phoneLink = $('<span/>', {
    class: 'tel',
    text: $(primaryPhone).html(),
  });
  $(primaryPhone).html(phoneLink);
});
