<?php
include "ga/autoload.php";

use UnitedPrototype\GoogleAnalytics;

// Initilize GA Tracker
$tracker = new GoogleAnalytics\Tracker('UA-30075487-3', 'sangu.be');

// Assemble information
$session = new GoogleAnalytics\Session();
$visitor = new GoogleAnalytics\Visitor();
$visitor->setIpAddress($_SERVER['REMOTE_ADDR']);
$visitor->setUserAgent($_SERVER['HTTP_USER_AGENT']);
$visitor->setScreenResolution('1024x768');

if (!isset($_GET['id'])) {
	$_GET['id'] = 1;
}
switch ($_GET['id']) {
	case 2:
		$sets = array(
			"gaKey" => "KPHS-twsimulator-exe",
			"version" => "1.5",
			"prettyFileName" => "TW Simulator+ by KPHS.rar",
			"actualFileName" => "TW-Simulator-KPHS-v1.5.rar",
		);
		break;

	default:
		$sets = array(
			"gaKey" => "TWTactics-exe",
			"version" => "1.3",
			"prettyFileName" => "TWTactics v1.3.exe",
			"actualFileName" => "./TWTactics1.3.exe",
		);
		break;
}

$event = new GoogleAnalytics\Event('Downloads', $sets['gaKey'], $sets['version']);
$tracker->trackEvent($event, $session, $visitor);

header("Content-type: application/force-download");
header("Content-Transfer-Encoding: Binary");
header("Content-length: ".filesize($sets['actualFileName']));
header('Content-disposition: attachment; filename="'.$sets['prettyFileName'].'"');
readfile($sets['actualFileName']);?>
