
![Cyclops](http://static.srcdn.com/wp-content/uploads/cyclops-x-man.jpg)

Cyclops
=======

A super simple CMS built in a weekend using a weird tech stack. Really just to see if I could and to try to something new for my personal site (http://devjana.net) as a lab space.

JQuery/W3CSS-PHP-MySQL (don'y ask why)

Originally this project was generically named "SiteManager". Then abbreviated to "SiteMan". Finally tangentially re-named after the usual leader of the superhero team with which I grew up.

About Cyclops
-------------
The purpose of Cyclops was to make something super lightweight that would work anywhere (the whole thing is a teeny 22kb right now). It also is to be super clean and simple with a focus on config files for styling and some static content as well as data from SQL for more dynamic data.

Setup
=====
config.php
----------
this should be set up for your database:

``` php
define (DB_USER, "user");
define (DB_PASSWORD, "PASSWORD");
define (DB_DATABASE, "DATABASE");
define (DB_HOST, "HOST");
```

database table
--------------
You'll really only need one table with the following columns:
* title
* img_url
* body
* link_url
* youtube_embed
* link_text
* tag0
* tag1
* tag2

visor.js
--------
You can think of 'visor.js' as the config file for Cyclops. If you are familiar with javascript you'll have no problem editing this file to work for you.

headerLinks
------------
these are the link icons at the top of the page. For each you'll need a URL for the icon image and the link URL. These are listed in a JS array of objects as such.

```javascript
var headerLinks = [
    {
        iconUrl:  'ICONURL1',
        iconLink: 'LINKURL1'
    },
    {
        iconUrl:  'ICONURL2',
        iconLink: 'LINKURL2'
    }
];
```

pageInfo
--------
This object is your basic page info. Of note is the iconSize, which dictates the size of the visor icons.

```javascript
var pageInfo = {
    title: 'devjana.net',
    author: '@devjana',
    authorLink: 'http://twitter.com/devjana',
    iconSize: 64
};
```

verbose
-------
if ```verbose``` is set to true you'll see client side console logs for almost all actions. This is mostly for me while debugging. Likely, you'll want this set to ```false``` before you put anything out there for public consumption.

```javascript
var verbose = true;
```

database
--------
![coming soon](http://i0.kym-cdn.com/photos/images/facebook/000/117/012/tumblr_lj57goZvBh1qdjdp1o1_500.jpg)

Known issues and limitations
=============================
* images must be hosted off-site and linked via url
* article detail screen doesn't show direct linked
* no admin/edit functionality (done directly through database atm)

Todos
=====
* add display for article direct link in article detail
* require at least 128 characters in body text
* check for valid url for image url (string includes: http, png, gif, jpg, etc)

Sites using cyclops
===================
![coming soon](http://i0.kym-cdn.com/photos/images/facebook/000/117/012/tumblr_lj57goZvBh1qdjdp1o1_500.jpg)
