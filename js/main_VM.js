import CurrentProject from "./modules/FeaturedProject.js";
import ContactForm from "./modules/ContactForm.js";
import PortfolioComponent from "./modules/PortfolioComponent.js";

const halvasVM = {
    vm: new Vue({
        // el : "#app",

        data: {
            welcomeMessage: "Hello!",
            lightboxContent: {},
            showLightbox: false
        },

        methods: {
            openlightbox(item) {
                // open the lightbox with target info
                this.lightboxContent = item;

                this.showLightbox = true;
            },

            closeLightbox() {
                this.showLightbox = false;
                this.lightboxContent = {};
            }

        },

        components: {
            heroproject: CurrentProject,
            contactform: ContactForm,
            portfolio: PortfolioComponent
        }
    }).$mount("#app") // end vue VM
};