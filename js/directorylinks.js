CRM.$(function ($) {
  //makes all emails (home, primary, work etc. ) mailto links on search profile page
  $("[class^='crm-email']").each(function () {
    var $searchEmail = $(this);
    var searchEmailLink = $('<a/>', {
      href: 'mailto:' + $($searchEmail).html(),
      target: '_blank',
      text: $($searchEmail).html(),
    });
    $($searchEmail).html(searchEmailLink);
  });

  //makes all emails (home, primary, work etc. ) mailto links on view profile page
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

  //only on phones
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    //for the search profile view of phone numberes
    //"public pages" and "public pages and listings"
    $("[class^='crm-phone']").each(function () {
      var $value = $(this);
      console.log($value);
      if ($value.children().length) {
        var valueText = $value.children().html();
      } else {
        var valueText = $value.html();
      }

      $value.html($('<a/>', {
        href: 'tel:' + $.trim(valueText),
        text: $.trim(valueText),
      }));
    });

    //for views of individual contacts
    //for phone numbers Public Pages or Public Pages and Listings
    $("[id^='row-phone']").each(function () {
      var $value = $(this).children('.content');
      if ($value.children().length) {
        var valueText = $value.children().html();
      } else {
        var valueText = $value.html();
      }

      $value.html($('<a/>', {
        href: 'tel:' + $.trim(valueText),
        text: $.trim(valueText),
      }));
    });
  }
});
