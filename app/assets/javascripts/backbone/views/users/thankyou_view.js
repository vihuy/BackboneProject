var ThanksView = Backbone.View.extend({
  template: JST['backbone/templates/users/thankyou'],

  render: function() {
    this.$el.html(this.template());
    return this;

  },
});
