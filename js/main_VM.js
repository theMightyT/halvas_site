import CurrentProject from "./modules/FeaturedProject.js";

const halvasVM = {
    vm : new Vue({
       // el : "#app",

        data : {
            welcomeMessage : "Hello!",

            portfolioItems : []
        },

        mounted: function() {
            this.retrievePortfolioImages('getAll', this.renderPortfolioImages);
        },

        methods : {

            retrievePortfolioImages(queryType, cb) {
                // set some variables and make this modular - if it's a lightbox call, then get one. if it's the initial load, get everything and populate the portfolio thumbs and add event handling
                // if (queryType === 'getOne') {
                //   let data = { $tableName : 'portfolio' , $image : }
                // }
            
                // try a promise here after jquery ajax call is working
                $.ajax({
                  url  : 'admin/index.php',
                  type : 'GET',
                  data : { $tableName : 'portfolio' }
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

            renderPortfolioImages(data) {            
                // push the ajax result into the portfolio VM data object
                data.forEach(function(item, index) {
                    halvasVM.vm.portfolioItems.push(item);
                });
                // initShuffle lives in script.js
                //initShuffle();
            }
        },

        components: {
            heroproject: CurrentProject
        }
    }).$mount("#app") // end vue VM
};