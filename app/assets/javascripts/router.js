var myRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'home': 'index',
      'users': 'heo',
      'new': 'new_user',
      '/new': 'new_user',
      'contact/:id': 'show',
      '/contact/:id': 'show',
      '/contact': 'index',
      'users/new': 'create_user',
      '/users/new': 'create_user'

    },
    index: function(){
      this.view = new UserIndexView({
        el: $("#users"),
      });

      // return $("#users").html(this.view.render().el);
    },
    heo: function(){
      console.log('heo');
    },
    new_user: function(){
      console.log("New");
      this.view = new UserNewView();
      return $("#users").html(this.view.render().el);

    },
    show: function(id){
      console.log(id);
       this.view = new UserShowView({
        el: $("#contact-detail"),id: id});
      // return this.view.render();
    },

    create_user: function()
    {
      console.log("Create User Router")


    }
  });



