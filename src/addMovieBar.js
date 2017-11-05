angular.module('movie-app')
  .component('addMovieBar', {
    bindings: {
      addToList: '<'
    },

    controller: function() {
      this.input = '';

      this.addNewMovie = input => {
        this.addToList(input);
        this.input = '';
      }
    },

    template: `
    <div class="add-movie-bar form-inline">
      <input ng-model="$ctrl.input" class="form-control" type="text" />
      <button ng-click="$ctrl.addNewMovie($ctrl.input)" class="btn">Add</button>
    </div>
    `
  })
