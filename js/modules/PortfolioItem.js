export default {
    props: ["item"],

    template: `    
        <figure class="portfolio-item"
            :data-groups="'[' + item.category + ']'">
            <img :src="'images/portThumbs/' + item.path + '.jpg'" alt="" />
            <figcaption>
                <!-- <h2><span>View More</span></h2> -->
                <!-- need a short description here -->
                <h2>{{item.shortdesc}}</h2>
                <a @click.prevent="popLightbox" href="#" class="btn btn-main"><i class="fa fa-link"></i> View more</a>
            </figcaption>
        </figure>
    `,

    methods: {
        popLightbox(e) {
            console.log('click blocker');
            e.preventDefault();
            this.$emit('popwindow', this.item);
        }
    }
}