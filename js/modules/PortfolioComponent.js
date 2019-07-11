import PortfolioItem from "./PortfolioItem.js";

export default {
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-12 no-padding ">
                <div class="section-title st-center">
                    <h3>Our Work</h3>
                    <p>Avocent deditum long</p>
                </div>
                <div class="filter mb40">
                    <form id="filter">
                        <fieldset class="group">
                            <label class="btn btn-default btn-main"><input type="radio" name="filter"
                                    value="all" checked="checked">All</label>
                            <label class="btn btn-default"><input type="radio" name="filter" value="print">Print
                                Design</label>
                            <label class="btn btn-default"><input type="radio" name="filter" value="design">Web
                                Design</label>
                            <label class="btn btn-default"><input type="radio" name="filter"
                                    value="development">Development</label>
                        </fieldset>
                    </form><!-- #filter -->
                </div><!-- .filter .mb40 -->

                <!-- portfolio item template -->
                <portitem v-for="item in portfolioItems" :item="item" :key="item.id" @popwindow="loadlightbox"></portitem>

            </div>
        </div>
    </div>
    `,

    data: function () {
        return {
            portfolioItems: [],
            categories: []
        }
    },

    methods: {

        retrievePortfolioImages(queryType, cb) {

            // try a promise here after jquery ajax call is working
            $.ajax({
                url: 'admin/index.php',
                type: 'GET',
                data: {
                    tableName: 'portfolio'
                }
            })

                .done(function (data) {
                    // need to validate the data here to make sure it's a vaild result?
                    data = JSON.parse(data);

                    if (cb) {
                        cb(data);
                    }
                })

                .fail(function (call, status, error) {
                    // flash error messaging should go here
                    console.log(error);
                    console.dir(call);
                });
        },

        renderPortfolioImages(data) {
            this.portfolioItems = data;

            // initShuffle lives in script.js
            //initShuffle();
        },

        loadlightbox(item) {
            console.log('load the lightbox');
            this.$emit('firelightbox', item);
        }
    },

    created: function () {
        this.retrievePortfolioImages('getAll', this.renderPortfolioImages);
    },

    components: {
        portitem: PortfolioItem
    }
}