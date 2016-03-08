 CRM.$(function ($) {
  //on search profile page (list of all matching results)
  //gets all emails (home, primary, work etc. ) and makes them mailto links
  //regardless of whether the field is set as "public pages" or "public pages and listings"
  $("[class^='crm-email']").each(function () {
    var $searchEmail = $(this);
    var searchEmailLink = $('<a/>', {
      href: 'mailto:' + $($searchEmail).html(),
      target: '_blank',
      text: $($searchEmail).html(),
    });
    $($searchEmail).html(searchEmailLink);
  });

  //on view of one contact
  //makes all emails (home, primary, work etc. ) mailto links
  //regardless of whether the field is set as "public pages" or "public pages and listings"
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

  //On view of one contact
  //Unlinks all phone numbers if set to "Public Pages and Listings"
  $("[id^='row-phone']").each(function () {
    var $value = $(this).children('.content');
    $($value).html($value.children().html());
  });

  //If using a mobile phone this code makes phone numbers into links
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    //All phone types (home, primary etc.)
    //on search profile page (list of all matching results)
    //regardless of whether the field is set as "public pages" or "public pages and listings"
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

    //All phone types (home, primary etc.)
    //for views of individual contacts
    //regardless of whether the field is set as "public pages" or "public pages and listings"
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
