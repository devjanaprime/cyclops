// cyclops visor
// by @devjana
// config file for cyclops CMS
/***********************************************
                _.-'     .' .' .' '-.
              .'  .'  .' .'  .'_ --. '.
            .'    .'  .'   .'   -.  \  \
          .'  _.' _.'   _...'.-.  `. `. \
        .' -'      _.-'    .'   \   \  \ \
       / .' _.-' .'   _.--'  \_  `.  \  `.|
     .'         /_.--'         `.  \  '.   \
    .'    )\  .'    _.-''''.     \  /(  \  |
    | .' |  \/    .' _.---. '.    \/  | /  `.
    |    \ ( `.  (  (  (O) )  )  .' ) | '.  |
   / `.   \   |   `. `-...' .'   |    /  |  \
  |   /    `.  `.   `-....-'    .'  .'  /   |
  \   |  .'  `   `-.         .-'   '   /  '. \
  | .' \      \   /   )   (   \   /    |      |
  |    | .'    \.'    `---'    './| '. \      |
  /    \      / \    .--.--.    / |     | '.  \
  | .'  '.  .'   '.  `._-_.'  .'\ |     \     |
  |     .'\.'    | `.       .'  | \ '.  |     \
  \    /   |  .' |   `._ _.'    | /     |   '.|
   | .'   /      |               \'.    |     \
   |/    / .'  './               /  \    \    /
    \    |      .'.             .'   |   |   /
     \   '.  './   '.         .'      \  ' .'
      \  \ \ .'      '.     .'       /  .'
      `. | .'          '(@)'        | .'
        \/LGB                       \'
ascii art from http://ascii.co.uk/art/cyclops
*****************************************************/
// articles array
var articles = [];
// php URL for getArticles.php
var getArticlesURL = '../server/getArticles.php';
// header icon links
var headerLinks = [
    {
        iconUrl: 'https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300',
        iconLink: 'https://linkedin.com/in/devjana'
    },
    {
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png',
        iconLink: 'https://github.com/devjanaprime'
    },
    {
        iconUrl: 'https://www.facebook.com/images/fb_icon_325x325.png',
        iconLink: 'https://www.facebook.com/devnari'
    },
    {
        iconUrl: 'https://opensource.org/files/twitterlogo.png',
        iconLink: 'https://twitter.com/devjana'
    },
    {
        iconUrl: 'http://seeklogo.com/images/Y/youtube-square-logo-3F9D037665-seeklogo.com.gif',
        iconLink: 'https://www.youtube.com/user/devjana'
    },
    {
        iconUrl: 'http://www.gamasutra.com/db_area/images/news/2012/Dec/183984/gamasutra.jpg',
        iconLink: 'http://www.gamasutra.com/blogs/DevJana/896049/'
    },
    {
        iconUrl: 'http://www.steverichey.com/wp-content/uploads/2013/11/ItchIO_Gradients.png',
        iconLink: 'https://devjana.itch.io'
    },
    {
        iconUrl: 'http://static.wixstatic.com/media/fb09f8_7160157bb09b4493851780f5ba042bb6.png',
        iconLink: 'https://tinynormous.bandcamp.com/'
    },
    {
        iconUrl: 'https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_soundCloud-128.png',
        iconLink: 'https://soundcloud.com/tinynormo-us'
    },
    {
        iconUrl: 'https://s3.amazonaws.com/patreon/c41761c6b0f6602802c2112247d933bd.jpg',
        iconLink: 'http://www.mobygames.com/developer/sheet/view/developerId,426845/'
    }

];
// basic page info
var pageInfo = {
    author: '@devjana',
    authorLink: 'http://twitter.com/devjana',
    iconSize: 64,
    maxDisplay: 20,
    title: 'devjana.net',
    url: 'http://devjana.net/cyclops/client/',
    upArrow: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-128.png',
    downArrow: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png',
    trashcan: 'http://findicons.com/files/icons/1580/devine_icons_part_2/128/trash_recyclebin_empty_closed.png'
};
// verbose mode for client side console logs?
var verbose = false;
