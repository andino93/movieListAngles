angular.module('movie-app')
  .component('movieList', {
    bindings: {
      movies: '<',
      show: '<',
      toggle: '<'
    },

    template: `
      <div ng-if="$ctrl.show" class="movie-list">No Matches Found</div>
        <movie-list-entry
          movie="movie"
          toggle="$ctrl.toggle"
          ng-repeat="movie in $ctrl.movies"
        />
    `
  })
