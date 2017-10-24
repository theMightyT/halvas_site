var halvas = {
  welcomeMessage : 'welcome to the site',

  retrievePortfolioImages : function() {
    // try a promise here after jquery ajax call is working
    $.ajax({
      url  : 'admin/portfolioContent.php',
      type : 'GET',
      data : { $image : '1', $tableName : 'portfolio' }
    })

    .done(function(data) {
      console.log(data);
    })

    .fail(function(call, status, error) {
      console.log(error);
      console.dir(call);
    });
  },

  init : function() {
    // stub
    console.log('welcome');

    // run script here to grab portfolio images?
    // would have to get them all from the portfolio table and then load the thumbnail images; then grab the larger images and description on a click. is this the best way to go? that way I can maintain and add to the portfolio stuff without having to  manually upate the site...

    halvas.retrievePortfolioImages();
  }
}
