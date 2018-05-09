var UserShowView = Backbone.View.extend({

  template: JST['backbone/templates/users/show'],

  initialize: function(object) {
    console.log("1 nhaaa")
    console.log(this)
    var self = this;


    this.userModel = new UserModel({
      id: object.id
    });
    this.userModel.fetch({
      success: function(){
          self.render();
        },
      // error: function(){
      //   console.log("Fail");
      //     self.render();
      //   },

    });

    },
  events: {


  },

  render: function() {
    this.$el.html(this.template({user:this.userModel.toJSON()}));
    return this;
  },

});
