import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost: function(post) {
      this.sendAction('createPost', post)

      this.set('newPost.title', null);
      this.set('newPost.author', null);
      this.set('newPost.text', null);
    }
  }
});
