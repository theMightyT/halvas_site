export default {
    props: ["content"],

    template: `
    <section class="row">
        <div class="lightbox-close" @click="closeLightbox">x</div>

        <figure class="col-sm-6">
            <img class="lightbox-img" :src="'images/portThumbs/' + content.path + '.jpg'" alt="" />
            <figcaption>
                <!-- maybe put the app icons here? vue, flash, photoshop etc -->
                <h4>app icons here (built with)</h4>
            </figcaption>
        </figure>

        <article class="col-sm-6">
            <h2>{{ content.shortdesc }}</h2>
            <hr class="hr-truncate">
            <p>{{ content.description }}</p>
        </article>
    </section>
    `,

    data: function () {
        return {
            // stub
        }
    },

    methods: {
        closeLightbox() {
            this.$emit('lightboxclose')
        }
    }
}