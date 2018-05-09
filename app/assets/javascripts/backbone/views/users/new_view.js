var UserNewView = Backbone.View.extend({

  template: JST['backbone/templates/users/new'],
  templateThanku: JST['backbone/templates/users/thankyou'],
  initialize: function() {
    this.model = new UserModel();
    },

  events: {
    "submit #formNewUser": 'createUser'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },
  createUser: function(event){
    var self = this
    alert("create User")
    event.preventDefault()
    firstName = $('#first_name').val()
    lastName = $('#last_name').val()
    email = $('#email').val()
    content = $('#content').val()
    this.model.set("first_name",firstName)
    this.model.set("last_name",lastName)
    this.model.set("email",email)
    this.model.set("content",content)
    this.model.save({},{
      success: function(){
        console.log(self.model.id);
        self.$el.html(self.templateThanku({id: self.model.id}));
      },
    });
  },


});
