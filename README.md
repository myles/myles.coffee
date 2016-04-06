# myles.coffee [![Build Status](https://travis-ci.org/myles/myles.coffee.svg?branch=master)](https://travis-ci.org/myles/myles.coffee) [![devDependency Status](https://david-dm.org/myles/myles.coffee/dev-status.svg)](https://david-dm.org/myles/myles.coffee#info=devDependencies)

![Screenshot of Myles.Coffee](/designs/screenshot.png?raw=true "Screenshot of Myles.Coffee")

The source code for one of [my personal websites](https://myles.coffee "Myles.Coffee").

## Requirements

* Node.js
* Bower


Install Grunt and Bower:

```
$ npm install -g grunt-cli bower
```

Install the Node.js and Bower dependencies:

```
$ npm install
$ bower install
```

## Usage

Run the development server:

```
$ grunt develop
```

Run a lint validator on the stylesheets and JavaScript files (also used for Travis):

```
$ grunt test
```

Deploy the web sites to the server with:

```
$ grunt deploy
```

## Hidden Service

You can access the web site though Tor though the address [kqfrcfjyom54yuks.onion](http://kqfrcfjyom54yuks.onion).

