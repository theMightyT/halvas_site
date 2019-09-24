export default {
    props: ["content"],

    template: `
    <section class="row">
        <h1 class="hidden">About the Project</h1>
        <div class="lightbox-close" @click="closeLightbox">x</div>

        <figure class="col-sm-6">
            <img class="lightbox-img" :src="'images/portThumbs/' + content.path + '.jpg'" alt="" />
            <figcaption>
                <!-- maybe put the app icons here? vue, flash, photoshop etc 
                <h4>app icons here (built with)</h4> -->
            </figcaption>
        </figure>

        <article class="col-sm-6">
            <h2 class="hidden">Project Details</h2>
            <h1>{{ content.shortdesc }}</h1>
            <hr class="hr-truncate">
            <p class="lightbox-desc">{{ content.description }}</p>

            <hr class="hr-truncate">
            <h3>Tools Used</h3>
            <ul class="dev-tools">
                <li v-for="tools in content">
                    <img :src="'images/' + tool.path" alt="{tool.toolname"}
                </li>
            </ul>

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