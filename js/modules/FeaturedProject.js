export default {
    props: {
        imgsrc: String,
        description: String,
        link: String
    },

    template: `
    <div class="container">
        <div class="row" v-if="currentProject.heropath">
            <div class="col-md-5">
                <img :src="'photos/' + currentProject.heropath" alt="featured project image" class="img-responsive">
            </div>
            <div class="col-md-7">
                <h3 class="bottom-line">FEATURE PROJECT OF THE MONTH</h3>
                <p>
                    {{ currentProject.description }}
                </p>
                <a href="#" class="btn btn-main btn-lg">Project Details</a>
            </div>
        </div>
    </div>
    `,

    data: function() {
        return {
            msg: "this is the hero template",

            currentProject: {}
        }
    },

    created: function() {
        console.log('sup, yo. I am the featured project component');

        const url = `./admin/index.php?tableName=portfolio&&feature=true`;

        fetch(url)
            .then(res => res.json())
            .then(data => this.currentProject = data)
        .catch(function(error) {
            console.log(error);
        });
    }
}