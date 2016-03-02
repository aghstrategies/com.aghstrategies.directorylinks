CRM.$(function ($) {
  console.log('linked');
  $('.crm-email').each(function () {
    $(this).wrap("<a href='mailto:" + $(this).text() + "' target='_blank'></a>");
  });

  $('.crm-phone').each(function () {
    $(this).wrap("<a href='tel:" + $(this).text() + "'></a>");
  });
});
