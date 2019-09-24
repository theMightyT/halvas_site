import CurrentProject from "./modules/FeaturedProject.js";
import ContactForm from "./modules/ContactForm.js";
import PortfolioComponent from "./modules/PortfolioComponent.js";
import LightboxComponent from "./modules/LightboxComponent.js";

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
                debugger;
                // open the lightbox with target info
                this.lightboxContent = item;

                this.showLightbox = true;
            },

            closeLightbox() {
                this.showLightbox = false;
                this.lightboxContent = {};
            },

            scrollToTarget(event) {
                let scrollTarget = event.currentTarget.getAttribute('href');

                window.scrollTo({
                    top: document.querySelector(`${scrollTarget}`).offsetTop,
                    behavior: 'smooth'
                })
            }

        },

        components: {
            heroproject: CurrentProject,
            contactform: ContactForm,
            portfolio: PortfolioComponent,
            lightbox: LightboxComponent
        }
    }).$mount("#app") // end vue VM
};