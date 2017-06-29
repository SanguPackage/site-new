How to deploy
=============
TW Tactics
----------
- Tag TW Tactics
- Update AssymblyInfo
- Build in release mode
- Create zip of relevent files
- use NSIS: "installer based on zip file"
- in site-new:
	- add exe to api/
	- update `send-ga-and-download.php`
	- update twtactics.jade and index.jade


Sangu Package
-------------
sangupackage-source:
- Update version.txt to match TW `game_data.majorVersion`

sangupackage-release:
- Run releaseIt.ps1


Website
-------
- gulp
- ftp
