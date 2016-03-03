

Feature: This extension makes emails mailto links and phone numbers microformatted to be clickable on phones on the profile listing view and page view

Test Set Up:
 Create a profile, be sure that in profile settings Used for field the "Standalone Form or Directory" box is checked as is the "Is this CiviCRM Profile active?" box. Additionally in profile fields be sure that there is more than one email (work and home) and phone number (work and home).

Scenario: Viewing on a desktop
  Given A user is viewing a search page or a view page for a profile set up as described above.
    When a contact has an <email1> is clicked a mail window will pop up and when inspected the email will be <a href='mailto:<email1>'><email1></a>.
    When a contact has an <email2> is clicked a mail window will pop up and when inspected the email will be <a href='mailto:<email2>'><email2></a>.
    And if a contact has a <phone1> when inspected it will be with in a div with class vcard and have the span <span class='tel'></span>, it will not appear as a link
    And if a contact has a <phone2> when inspected it will be with in a div with class vcard and have the span <span class='tel'></span>, it will not appear as a link

Scenario: Viewing on a iphone or andrioid phone
  Given A user is viewing a search page or a view page for a profile set up as described above.
    When a contact has an <email1> and it is clicked a mail window will pop up
    When a contact has an <email2> and it is clicked a mail window will pop up
    When a contact has an <phone1> and it is clicked the phone will ask if you want to make a call
    When a contact has an <phone2> and it is clicked the phone will ask if you want to make a call
