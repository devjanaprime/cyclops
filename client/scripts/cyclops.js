// cyclops
// by @devjana
// putsing around with a JQuery, PHP, MYSQL stack to try and make a decent, light CMS in a weekend
// last updated 9-9-2016
/********************************************************************************
        . .   :` . :   .  .'.' '....xxxxx...,'. '   ' ."""YWMWMWMWMWMWMWMWMWMW+
     ; . ` .  . : . .' :  . ..XXXXXXXXXXXXXXXXXXXXx.    `     . "YWMWMWMWMWMWMW
.    .  .  .    . .   .  ..XXXXXXXXWWWWWWWWWWWWWWWWXXXX.  .     .     """""""
        ' :  : . : .  ...XXXXXWWW"   W88N88@888888WWWWWXX.   .   .       . .
   . ' .    . :   ...XXXXXXWWW"    M88N88GGGGGG888^8M "WMBX.          .   ..  :
         :     ..XXXXXXXXWWW"     M88888WWRWWWMW8oo88M   WWMX.     .    :    .
           "XXXXXXXXXXXXWW"       WN8888WWWWW  W8@@@8M    BMBRX.         .  : :
  .       XXXXXXXX=MMWW":  .      W8N888WWWWWWWW88888W      XRBRXX.  .       .
     ....  ""XXXXXMM::::. .        W8@889WWWWWM8@8N8W      . . :RRXx.    .
         ``...'''  MMM::.:.  .      W888N89999888@8W      . . ::::"RXV    .  :
 .       ..'''''      MMMm::.  .      WW888N88888WW     .  . mmMMMMMRXx
      ..' .            ""MMmm .  .       WWWWWWW   . :. :,miMM"""  : ""`    .
   .                .       ""MMMMmm . .  .  .   ._,mMMMM"""  :  ' .  :
               .                  ""MMMMMMMMMMMMM""" .  : . '   .        .
ascii art from http://www.chris.com/ascii/index.php?art=people/body%20parts/eyes
*********************************************************************************/
if ( verbose ) console.log( 'siteMan.js sourced' );
var articleMode = false;
var displayArticleId = -1;
var displayCount=0;
var displayScaler = 1;

$( document ).ready( function(){
	if( verbose ) console.log( 'doc ready' );
	getPageInfo();
	displayTopper();
	displayBottomer();
	displayAdminBar();

	$( window ).on( 'resize', function() {
		setImgHeight();
	});

	$( 'body' ).on( 'click', '.w3-closebtn', function(){
		if ( verbose ) console.log( 'w3-closebtn on click ');
		articleMode = false;
	});
	// article click
	$( 'body' ).on( 'click', '#articleOpener', function(){
    if ( verbose ) console.log( 'article clicked', $( this ).attr( 'data-index' ) );
    displayArticle( $( this ).attr( 'data-index' ) );
	});
	// logOut button
	$( 'body' ).on( 'click', '#logOut', function(){
		if ( verbose ) console.log( 'logOut clicked' );
		sessionStorage.loggedIn = false;
		displayAdminBar();
	}); // end logInButton on click
	// showMore button
	$( 'body' ).on( 'click', '#showMore', function(){
		if ( verbose ) console.log( 'showMore clicked' );
		displayScaler++;
		displayArticleList();
	}); // end logInButton on click
	// tag click
	$( 'body' ).on( 'click', '.tagButton', function(){
    if ( verbose ) console.log( 'tag clicked', $( this ).attr( 'data-tag' ) );
    displayArticlesWithTag( $( this ).attr( 'data-tag' ) );
	});
	// tag search close click
	$( 'body' ).on( 'click', '#tagSearchClose', function(){
    if ( verbose ) console.log( 'tagSearchClose clicked' );
    displayArticleList();
	});


}); // end document ready

var assembleCard = function( article, clickTags ){
	var index = articles.indexOf( article );
	// assemble card text
	cardText = '';
	cardText += '<div class="col-sm-6">';
	cardText += '<div class="w3-col m4 l3">';
	cardText += '<div class="w3-hover-shadow">';
	cardText += '<div class="w3-container w3-center" id="articleOpener" data-index=' + index + '>';
	cardText += '<center><h3 class="w3-hover-opacity">' + article.title + '</h3></center>';
	cardText += '</div>'; // close title div
	if( article.youtube_embed != '' && article.youtube_embed != undefined && article.img_url == '' ){
		cardText += '<iframe width=100% src="https://www.youtube.com/embed/' + article.youtube_embed + '" frameborder="0" allowfullscreen class="cardImg"></iframe>'; // youtube preview
	}else{
		cardText += '<img id="articleOpener" data-index=' + index + ' src="' + article.img_url + '" alt="' + article.title + ' image" class="cardImg" style="width:100%">'; // article image
	}
	cardText += '<div class="w3-container w3-center">';
	/// - not showing body - ///
	// var tempBody = article.body.slice( 0, 61 ) + '...';
	// cardText += '<p id="articleOpener" data-index=' + index + '>' + tempBody + '</p>';
	if( clickTags ){
	// clickable tags?
	 cardText += '<h6>[ <a href="#" class="tagButton" data-tag=' + article.tag0 + '>' + article.tag0 + '</a>, <a  href="#" class="tagButton" data-tag=' + article.tag1 + '>' + article.tag1 + '</a>, <a href="#" class="tagButton" data-tag=' + article.tag2 + '>' + article.tag2 + '</a> ]</h6>';
	} // end cickable Tags
	else{
	 // not clickable tags
	 cardText += '<h5>[ ' + article.tag0 + ', ' + article.tag1 + ', ' + article.tag2 + ' ]</h5>';
	} // end no clickable tags
	cardText += '</div>'; // close card text div
	cardText += '</div>'; // close w3-card-12
	cardText += '</div>'; // close w3-col w3-container m4
	return cardText;
} // end assembleCard

var displayArticleFirst = function ( index ){
	if( verbose ) console.log( 'in displayArticleFirst:', index );
	displayArticleId = index;
	if( verbose ) console.log( 'in displayArticleFirst:', displayArticleId );
} // end displayArticleFirst

var displayAdminBar = function(){
	if( sessionStorage.loggedIn == 'true' ){
		$( '#adminBar' ).append( '<p align="right"><label class="w3-hover-opacity" id="logOut"><u>Log Out</u></label> - <a class="w3-hover-opacity" id="images" href="imageUpload.html">Images</a> - <a class="w3-hover-opacity" id="newArticle" href="create.html">New Article</a></p>' );
	}
	else{
		$( '#adminBar' ).empty();
	}
}

var displayArticle = function ( index ){
	if( displayArticleId > 0 ){
		displayArticleId = -1;
	} // end clear displayArticleId
	if( verbose ) console.log( 'in displayArticle', index );
    if ( articleMode ) {
      if ( verbose ) console.log( 'exiting article mode' );
      displayArticleList();
      articleMode = false;
    }
    else {
	    articleMode = true;
	    if ( verbose ) console.log( 'displayArticle', articles[index] );
			var article = articles[index];
	    var articleText = '';
			// assemble the article modal
			articleText += '<div id="articleModal" class="w3-modal" style="display:block">';
			articleText += '<div class="w3-modal-content w3-animate-top">';
			articleText += '<div class="w3-container">';
			articleText += '<span onclick="document.getElementById(\'articleModal\').style.display=\'none\'" class="w3-closebtn">&times;</span>';
			articleText += '<center><h2>' + article.title + '</h2></center>';
			if( article.img_url != '' ){
				articleText += '<img src="' + article.img_url + '" width=100%>';
			} // end img check
			articleText += '<p>' + article.body + '</p>';
			// youtube embed?
			if( article.youtube_embed != '' && article.youtube_embed != undefined){
				articleText += '<center><iframe width=100% height=86% src="https://www.youtube.com/embed/' + article.youtube_embed + '" frameborder="0" allowfullscreen></iframe></center>';
			} // end youtube check
			// link?
			if( article.link_url != '' && article.link_url != undefined ){
				articleText += '<center><p><b><a href="' + article.link_url + '">' + article.link_text + '</a></b></p></center>';
			} // end link check
			articleText += '<center><h6>[ ' + article.tag0 +', ' + article.tag1 + ', ' + article.tag2 + ' ]</h6><p>Direct Link: ' + pageInfo.url + '?id=' + index + '</p></center>'
			articleText += '</div>'; // end articleModal
			articleText += '</div>'; // end w3-modal-content
			articleText += '</div>'; // end w3-container
			// show article modal
	    $( '#articleDiv' ).html( articleText );
    }
} // end displayArticle

var displayArticleList = function(){
    if ( verbose ) console.log( 'displayArticleList', articles.length, 'articles:', articles );
		emptyMiddles();
		var middlerText = '<div class="w3-row">';
		// for article in array
		// display up to articles.length if < max )
		if( articles.length < pageInfo.maxDisplay ){
			displayCount = articles.length;
		}else{
			displayCount = pageInfo.maxDisplay * displayScaler;
		}
		for( var i = 0; i < displayCount; i++ ){
		// display each article
			middlerText += assembleCard( articles[ i ], true );
		}	// end rows
		middlerText += '</div>'; // close w3-row
		$( '#middler' ).html( middlerText );
		if( articles.length > displayCount ){
			$( '#middler' ).append( '<h2 id="showMore" class="w3-hover-opacity"><u>More</u></h2>' );
		}
		setImgHeight();
} // end display middler

var displayArticlesWithTag = function( tag ){
		if ( verbose ) console.log( 'in displayArticlesWithTag:', tag );
		var middlerText = '<center><h3 id="tagSearchClose">Tag Search: ' + tag + ' [ clear ]</h3></center><div class="w3-row">';
		// find matches
		for( var i=0; i < articles.length ; i++ ){
			if( articles[ i ].tag0 == tag || articles[ i ].tag1 == tag || articles[ i ].tag2 == tag ){
				if( verbose ) console.log( 'tag match:', articles[ i ] );
				middlerText += assembleCard( articles[ i ], false );
			} // end articles
		} // end match
		// end stuff
		middlerText += '</div>'; // close w3-row
		$( '#middler' ).html( middlerText );
} // end displayArticlesWithTag

var displayBottomer = function(){
	 if( verbose ) console.log( 'displayBottomer' );
	 document.title = pageInfo.title;
	 $( '#bottomer' ).empty();
	 $('#bottomer').append( '<center><p>' + pageInfo.title + '</p>' );
	 var attributionText = '<center><p>Made by <a href="' + pageInfo.authorLink + '">' + pageInfo.author + '</a>' + ' with <a href="https://github.com/devjanaprime/cyclops.git">Cyclops</a></p>';
	 $( '#bottomer' ).append( attributionText );
} // end display bottomer

var displayTopper = function(){
	 if( verbose ) console.log( 'displayTopper' );
	 // set page title
	 document.title = pageInfo.title;
	 $( '#topper' ).empty();
	 // headline
	 var topperText = '<center><h1>' + pageInfo.title + '</h1></center><center>';
	 // link icons
	 for ( var i = 0; i < headerLinks.length; i++ ) {
     topperText += '<a href="' + headerLinks[i].iconLink + '"><img src="' + headerLinks[i].iconUrl + '" style="margin:16px" width=' + pageInfo.iconSize + ' height=' + pageInfo.iconSize + ' class="w3-hover-opacity"></a>';
	 } // end header links loop
	 topperText += '</center>';
	 $( '#topper' ).html( topperText );
} // end display bottomer

var emptyMiddles = function (){
    if ( verbose ) console.log( 'emptyMiddles' );
    // hide article
    $( '#articleDiv' ).empty();
    // middler
    $( '#middler' ).empty();
} // end empty middles

var getPageInfo = function (){
  if ( verbose ) console.log( 'getPageInfo' );
    // ajax call to get articles
    $.ajax({
        url: getArticlesURL,
        dataType: 'JSON',
      success: function ( data ) {
        if ( verbose ) console.log( 'in ajax success, received:', data );
        for ( var i = 0 ; i < data.articles.length; i++ ) {
            articles.push( data.articles[i] );
        };
      } // end ajax
  }).done( function(){
      displayArticleList();
			// check if auto-opening an article
			if( displayArticleId >= 0 ){
				displayArticle( displayArticleId );
			} //end displayArticleId check
  });
} // end get page info

var setImgHeight = function(){
	var imgHeight = window.innerWidth * 0.27;
	$( '.cardImg' ).attr( 'height', imgHeight+'px')
}
