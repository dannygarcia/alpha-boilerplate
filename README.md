Alpha Boilerplate
==========================

The Alpha Boilerplate is based on [RED Interactive's custom Robyn boilerplate](https://github.com/ff0000/red-boilerplate).

[![Build Status](https://secure.travis-ci.org/dannygarcia/alpha-boilerplate.png?branch=master,develop)](http://travis-ci.org/dannygarcia/alpha-boilerplate)


Installing Robyn
================

### Requirements

- [`robyn`](http://github.com/ff0000/robyn) `>= 1.0.0`

### Install the Robyn CLI

```bash
npm install robyn -g
robyn add alpha git://github.com/dannygarcia/alpha-boilerplate.git
```

How to use
==========

### Creating a project

```bash
robyn init alpha path/to/folder
```

### Custom parameters

You can add custom parameters along with your bootstrap definition. For example, the following stores a version of the Alpha Boilerplate that only includes the `red-start` plugin:

```bash
robyn add alpha-backend git://github.com/dannygarcia/alpha-boilerplate.git --include-plugins red-start
robyn init alpha-backend path/to/folder
```

This command includes all plugins:

```bash
robyn add alpha-all git://github.com/dannygarcia/alpha-boilerplate.git --all
robyn init alpha-all path/to/folder
```

While this command includes no plugins:

```bash
robyn add alpha-bare git://github.com/dannygarcia/alpha-boilerplate.git --bare
robyn init alpha-bare path/to/folder
```
