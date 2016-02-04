import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {};
  },
  actions: {
    createPost: function(model) {
      if(!model.title || !model.author || !model.text) {
        return alert('Please Enter A Blog Post')
      }
      let post = this.store.createRecord('post', {
        title: model.title,
        author: model.author,
        text: model.text,
        createdDate: new Date()
      });
      post.save();
      this.transitionTo('index');
    }
  }
});
