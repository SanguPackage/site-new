Sangu.be website
================

Building the website
--------------------

```bash
npm install
gulp
```

### Gulp error

```
const { Math, Object } = primordials;
ReferenceError: primordials is not defined
```

Solution: Downgrade node to v10.13.0 ([more info](https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node-js)

Testing the website
-------------------

```bash
npm run serve
```

and visit `http://127.0.0.1:8080/`

Configuration
-------------

Variables are stored in `./site/api/sp-config.json`  
Accessible as: `#{contributors}` in jade.

Deploying the website
---------------------

See `deploy.md`
