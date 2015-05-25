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

$event = new GoogleAnalytics\Event('Downloads', 'TWTactics-exe', '1.0');

$tracker->trackEvent($event, $session, $visitor);

header("Content-type: application/force-download");
header("Content-Transfer-Encoding: Binary");
header("Content-length: ".filesize("./TWTactics-redirect.exe"));
header('Content-disposition: attachment; filename="TWTactics.exe"');
readfile("TWTactics-redirect.exe");?>