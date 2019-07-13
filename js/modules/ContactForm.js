export default {
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title st-center">
                    <h3>Contact Us</h3>
                    <p>let's build something amazing</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <form class="contact-form" role="form">
                    <input type="text" class="form-control" id="fname" name="fname" placeholder="Your Full Name">
                    <input type="email" class="form-control" id="email" name="email" placeholder="Your E-mail">
                    <input type="text" class="form-control" id="subj" name="subj" placeholder="Your Subject">
                    <textarea id="mssg" name="mssg" placeholder="Your Message" class="form-control contact-message" rows="10"></textarea>
                    <button @click.prevent="submitMail" class="btn btn-main btn-lg" type="submit" id="send" data-loading-text="<i class='fa fa-spinner fa-spin'></i> Sending..."><i class="fa fa-paper-plane "></i> Send</button>
                </form>
                <div id="result-message" role="alert"></div>
            </div>
            <div class="col-md-4">
                <p>Drop us a line and let us know how we can help! Please provide a bit of background information on what you'd like to work on together and we'll get back to you shortly.</p>
            </div>
        </div>
    </div>
    `,

    data: function () {
        return {
            msg: `This is a message`
        };
    },

    methods: {
        // email validation script
        checkEmpty(selector) {
            if (
                selector.val() == "" ||
                selector.val() == selector.prop("placeholder")
            ) {
                selector.addClass("formFieldError", 500);
                return false;
            } else {
                selector.removeClass("formFieldError", 500);
                return true;
            }
        },

        validateEmail(email) {
            let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

            if (!regex.test(email.val())) {
                email.addClass("formFieldError", 500);
                return false;
            } else {
                email.removeClass("formFieldError", 500);
                return true;
            }
        },

        submitMail() {
            debugger;
            let $this = $(event.target.parentElement),
                result = true;

            if (!this.checkEmpty($this.find("#fname"))) {
                result = false;
            }

            if (!this.validateEmail($this.find("#email"))) {
                result = false;
            }
            if (!this.checkEmpty($this.find("#mssg"))) {
                result = false;
            }

            if (result == false) {
                return false;

                let $btn = $("#send").button("loading");

                let data = $this.serialize();

                $.ajax({
                    url: "../utils/sender.php",
                    type: "POST",
                    data: data,
                    cache: false,
                    success: function (html) {
                        console.log(html);
                        if (html == 1) {
                            $("#result-message")
                                .addClass("alert alert-success")
                                .html(
                                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Success!</strong> Message Sent. We will contact you shortly.'
                                )
                                .delay(500)
                                .slideDown(500)
                                .delay(5000)
                                .slideUp("slow");
                            $("#fname, #email, #mssg, #subj").val(null);

                            $btn.button("reset");
                        } else {
                            $("#result-message")
                                .addClass("alert alert-danger")
                                .html(
                                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong>Error Sending Message! Please try again'
                                )
                                .delay(500)
                                .slideDown(500)
                                .delay(5000)
                                .slideUp("slow");
                            $btn.button("reset");
                        }
                    },
                    error: function (a, b) {
                        if (b == "error") {
                            $("#result-message")
                                .addClass("alert alert-danger")
                                .html(
                                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong> Error Sending Message! Please try again.'
                                )
                                .delay(500)
                                .slideDown(500)
                                .delay(5000)
                                .slideUp("slow");
                        }
                        $btn.button("reset");
                    }
                });

                return false;
            }
        }
    }
};