Sangu.be website
================
Building the website:
---------------------

```
npm install
gulp
```

Testing the website:
--------------------

```
http-server ./site -o
```

and visit `http://127.0.0.1:8080/`

Configuration
-------------
Variables are stored in `./site/api/sp-config.json`  
Accessible as: `#{contributors}` in jade.

Deploying the website:
----------------------
See `deploy.md`