var UserIndexView = Backbone.View.extend({

 template: JST['backbone/templates/users/index'],

  initialize: function() {
    // new Collection
    var self = this;
    this.UserCollection = new UserListCollection();
    // fetch data
    this.UserCollection.fetch({
      success: function(){
          self.render();
        },
      });

    },
  render: function() {
    this.$el.html(this.template({userList: this.UserCollection.toJSON()}));
    return this;
  },
});
