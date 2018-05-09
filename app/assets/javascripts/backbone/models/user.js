var UserModel = Backbone.Model.extend({


  url: function(){
    if(typeof this.id == "undefined"){
      return "/users";
    }
    else{
      return "/users/" + this.id ;
    }

  }
})

