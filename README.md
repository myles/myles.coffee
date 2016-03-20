# myles.coffee

The source code for one of my personal websites.

## Development

### Requirements

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

### Usage

Run the development server:

```
$ grunt develop
```

Run a lint validator on the stylesheets and JavaScript files (also used for Travis):

```
$ grunt test
```

## Deploy

