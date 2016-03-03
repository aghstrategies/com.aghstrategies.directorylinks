CRM.$(function ($) {
  console.log('linked');

  // for search view
  $('.crm-email').each(function () {
    $(this).wrapInner("<a href='mailto:" + $(this).text() + "' target='_blank'></a>");
  });

  $('.crm-phone').each(function () {
    $(this).wrapInner("<a href='tel:" + $(this).text() + "'></a>");
  });

  // for page view
  var primaryEmail = $('#row-email_Primary').find('.content');
  var primaryPhone = $('#row-phone_Primary_1').find('.content');

  $(primaryEmail).wrapInner("<a href='mailto:" + $(primaryEmail).html() + "' target='_blank'></a>");
  $(primaryPhone).wrapInner("<a href='tel:" + $(primaryPhone).html() + "'></a>");
});
