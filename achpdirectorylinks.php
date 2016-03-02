<?php

require_once 'achpdirectorylinks.civix.php';

/**
 * Implements hook_civicrm_buildForm().
 *
 *
 *
 */
function achpdirectorylinks_civicrm_buildForm($formName, &$form) {
  //print ($formName);
  //die();

  if ($formName == 'CRM_Profile_Form_Search') {
    CRM_Core_Resources::singleton()->addScriptFile('com.aghstrategies.achpdirectorylinks', 'js/directorylinks.js');
  }
}

function achpdirectorylinks_civicrm_pageRun(&$page) {
  CRM_Core_Resources::singleton()->addScriptFile('com.aghstrategies.achpdirectorylinks', 'js/directorylinks.js');
}

/**
 * Implements hook_civicrm_config().
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_config
 */
function achpdirectorylinks_civicrm_config(&$config) {
  _achpdirectorylinks_civix_civicrm_config($config);
}

/**
 * Implements hook_civicrm_xmlMenu().
 *
 * @param array $files
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_xmlMenu
 */
function achpdirectorylinks_civicrm_xmlMenu(&$files) {
  _achpdirectorylinks_civix_civicrm_xmlMenu($files);
}

/**
 * Implements hook_civicrm_install().
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_install
 */
function achpdirectorylinks_civicrm_install() {
  _achpdirectorylinks_civix_civicrm_install();
}

/**
 * Implements hook_civicrm_uninstall().
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_uninstall
 */
function achpdirectorylinks_civicrm_uninstall() {
  _achpdirectorylinks_civix_civicrm_uninstall();
}

/**
 * Implements hook_civicrm_enable().
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_enable
 */
function achpdirectorylinks_civicrm_enable() {
  _achpdirectorylinks_civix_civicrm_enable();
}

/**
 * Implements hook_civicrm_disable().
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_disable
 */
function achpdirectorylinks_civicrm_disable() {
  _achpdirectorylinks_civix_civicrm_disable();
}

/**
 * Implements hook_civicrm_upgrade().
 *
 * @param $op string, the type of operation being performed; 'check' or 'enqueue'
 * @param $queue CRM_Queue_Queue, (for 'enqueue') the modifiable list of pending up upgrade tasks
 *
 * @return mixed
 *   Based on op. for 'check', returns array(boolean) (TRUE if upgrades are pending)
 *                for 'enqueue', returns void
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_upgrade
 */
function achpdirectorylinks_civicrm_upgrade($op, CRM_Queue_Queue $queue = NULL) {
  return _achpdirectorylinks_civix_civicrm_upgrade($op, $queue);
}

/**
 * Implements hook_civicrm_managed().
 *
 * Generate a list of entities to create/deactivate/delete when this module
 * is installed, disabled, uninstalled.
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_managed
 */
function achpdirectorylinks_civicrm_managed(&$entities) {
  _achpdirectorylinks_civix_civicrm_managed($entities);
}

/**
 * Implements hook_civicrm_caseTypes().
 *
 * Generate a list of case-types.
 *
 * @param array $caseTypes
 *
 * Note: This hook only runs in CiviCRM 4.4+.
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_caseTypes
 */
function achpdirectorylinks_civicrm_caseTypes(&$caseTypes) {
  _achpdirectorylinks_civix_civicrm_caseTypes($caseTypes);
}

/**
 * Implements hook_civicrm_angularModules().
 *
 * Generate a list of Angular modules.
 *
 * Note: This hook only runs in CiviCRM 4.5+. It may
 * use features only available in v4.6+.
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_caseTypes
 */
function achpdirectorylinks_civicrm_angularModules(&$angularModules) {
_achpdirectorylinks_civix_civicrm_angularModules($angularModules);
}

/**
 * Implements hook_civicrm_alterSettingsFolders().
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_alterSettingsFolders
 */
function achpdirectorylinks_civicrm_alterSettingsFolders(&$metaDataFolders = NULL) {
  _achpdirectorylinks_civix_civicrm_alterSettingsFolders($metaDataFolders);
}

/**
 * Functions below this ship commented out. Uncomment as required.
 *

/**
 * Implements hook_civicrm_preProcess().
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_preProcess
 *
function achpdirectorylinks_civicrm_preProcess($formName, &$form) {

} // */

/**
 * Implements hook_civicrm_navigationMenu().
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_navigationMenu
 *
function achpdirectorylinks_civicrm_navigationMenu(&$menu) {
  _achpdirectorylinks_civix_insert_navigation_menu($menu, NULL, array(
    'label' => ts('The Page', array('domain' => 'com.aghstrategies.achpdirectorylinks')),
    'name' => 'the_page',
    'url' => 'civicrm/the-page',
    'permission' => 'access CiviReport,access CiviContribute',
    'operator' => 'OR',
    'separator' => 0,
  ));
  _achpdirectorylinks_civix_navigationMenu($menu);
} // */
