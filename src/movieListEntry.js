angular.module('movie-app')
  .component('movieListEntry', {
    bindings: {
      movie: '<',
      toggle: '<'
    },

    controller: function() {
      // this.watchLabel = this.movie.toWatch ? 'watch' : 'to watch'
    },

    template: `
      <div class="movie-list-entry">
        <li class="movie-list-entry data">
          <div class="movie container">
              {{$ctrl.movie.title}}
              <button
                ng-class="$ctrl.movie.toWatch ? 'watch click' : 'watch'"
                ng-click="$ctrl.toggle($ctrl.movie.title)"
                >watch
              </button>
          </div>
        </li>
      </div>
    `
  })
