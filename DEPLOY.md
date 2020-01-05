How to deploy
=============

TW Tactics
----------

- Update AssymblyInfo
- Tag TW Tactics
- Build in release mode
- Create zip of relevent files
- use NSIS: "installer based on zip file"
	- Fault folder: $DESKTOP\TWTactics
- in site-new:
	- add exe to site-new/site/api/
	- update `send-ga-and-download.php`
	- update twtactics.jade and index.jade


Sangu Package
-------------

sangupackage-source:
- Update version.txt to match TW `game_data.majorVersion`
- Run mergeIt.ahk

sangupackage-release:
- Run releaseIt.ps1 (requires node v10.13.0)


Website
-------

- gulp
- ftp (yes, manually)
