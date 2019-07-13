var halvas = {
  welcomeMessage : 'welcome to the site',

  retrievePortfolioImages : function(queryType, cb) {
    // set some variables and make this modular - if it's a lightbox call, then get one. if it's the initial load, get everything and populate the portfolio thumbs and add event handling
    // if (queryType === 'getOne') {
    //   let data = { $tableName : 'portfolio' , $image : }
    // }

    // try a promise here after jquery ajax call is working
    $.ajax({
      url  : 'admin/portfolioContent.php',
      type : 'GET',
      data : { tableName : 'portfolio' }
    })

    .done(function(data) {
      // need to validate the data here to make sure it's a vaild result?
      data = JSON.parse(data);

      if (cb) { cb(data); }
    })

    .fail(function(call, status, error) {
      // flash error messaging should go here
      console.log(error);
      console.dir(call);
    });
  },

  getLightboxContent : function() {
    // stub
    debugger;
  },

  popLightbox : function(data) {
    // open a lightbox here
    debugger;
  },

  renderPortfolioImages : function(data) {
   
    let portfolioContainer = document.querySelector('.portfolio-container'),
        portfolioTemplate = document.querySelector('#portTemplate').content;

    // grab the contents of the template and render the data for each one
    data.forEach(function(item, index) {

       // temp push into vue vm to see if things populate
      //halvasVM.vm.portfolioItems.push(item);
      
      // show the content
      //console.log(item, index); data-groups='["print"]'
      //<figcaption>
      //   <h2>Nice <span>Lily</span></h2>
      //   <p>Lily likes to play with crayons and pencils</p>
      //   <a href="#" class="btn btn-main"><i class="fa fa-link"></i> View more</a>
      // </figcaption>
      portfolioTemplate.querySelector('figure').dataset.groups = '[\"' + item.category + '\"]';
      portfolioTemplate.querySelector('img').src = "images/portThumbs/" + item.path + ".jpg";
      portfolioTemplate.querySelector('h2').firstChild.nodeValue = item.heading;
      portfolioTemplate.querySelector('p').innerHTML = item.shortdesc;
      portfolioTemplate.querySelector('a').href = item.path;
      portfolioTemplate.querySelector('a').addEventListener('click', halvas.getLightboxContent, false);

      let newPortfolioThumb = document.importNode(portfolioTemplate, true);

      portfolioContainer.appendChild(newPortfolioThumb);
    });
  },

  init : function() {
    // stub
    console.log('welcome');

    // run script here to grab portfolio images?
    // would have to get them all from the portfolio table and then load the thumbnail images; then grab the larger images and description on a click. is this the best way to go? that way I can maintain and add to the portfolio stuff without having to  manually upate the site...

    halvas.retrievePortfolioImages('getAll', halvas.renderPortfolioImages);
  }
}
