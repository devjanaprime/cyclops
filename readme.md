
![alt text](http://static.srcdn.com/wp-content/uploads/cyclops-x-man.jpg)

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
* define (DB_USER, "user");
* define (DB_PASSWORD, "PASSWORD");
* define (DB_DATABASE, "DATABASE");
* define (DB_HOST, "HOST");

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
![alt text](http://i0.kym-cdn.com/photos/images/facebook/000/117/012/tumblr_lj57goZvBh1qdjdp1o1_500.jpg)

database
--------
![alt text](http://i0.kym-cdn.com/photos/images/facebook/000/117/012/tumblr_lj57goZvBh1qdjdp1o1_500.jpg)

Known issues and limitations
=============================
![alt text](http://i0.kym-cdn.com/photos/images/facebook/000/117/012/tumblr_lj57goZvBh1qdjdp1o1_500.jpg)

So yeah, there's stuff to be done still...
