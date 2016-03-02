CRM.$(function ($) {
  console.log('linked');

  // for search view
  $('.crm-email').each(function () {
    $(this).wrapInner("<a href='mailto:" + $(this).text() + "' target='_blank'></a>");
  });

  $('.crm-phone').each(function () {
    $(this).wrapInner("<a href='tel://" + $(this).text() + "'></a>");
  });

  // for page view
  $('#row-email_Primary').find('.content').wrapInner("<a href='mailto:" + $('#row-email_Primary').find('.content').html() + "' target='_blank'></a>");

  $('#row-phone_Primary_1').find('.content').wrapInner("<a href='tel:" + $('#row-phone_Primary_1').find('.content').html() + "'></a>");
});
