angular.module('movie-app', [])
  .component('app', {
    controller: function() {
      this.movies = window.sampleMovieData;
      this.currentView = this.movies;
      this.showNoMatches = false;

      this.searchList = (input, field) => {
        field = field || 'title'

        this.currentView = _.filter(this.movies, movieObj => {
          if(movieObj[field].toLowerCase().includes(input.toLowerCase())) {
            return movieObj;
          }
        });

        this.showNoMatches = this.currentView.length === 0;
      };

      this.addToList = (input) => {
        if (input) {
          this.movies.push({title: input, toWatch: true});
        }
      };

      this.watchListToggle = (boolean) => {
        this.currentView = _.filter(this.movies, movieObj => {
          if(movieObj.toWatch === boolean) {
            return movieObj;
          };
        });
      };

      this.toggleWatch = (title) => {
        _.each(this.movies, movie => {
          if (movie.title === title) {
            movie.toWatch = !movie.toWatch
          }
        });
      }
    },

    template: `
    <div>
      <h1>Movie List</h1>
      <div>
        <add-movie-bar add-to-list="$ctrl.addToList"></add-movie-bar>
      </div>
      <div>
        <search search-list="$ctrl.searchList"></search>
      </div>
      <div>
        <button ng-click="$ctrl.watchListToggle(true)" class="btn">Watched</button>
        <button ng-click="$ctrl.watchListToggle(false)" class="btn">To Watch</button>
      </div>
      <div>
      <ul>
        <movie-list
          movies="$ctrl.currentView"
          show="$ctrl.showNoMatches"
          toggle="$ctrl.toggleWatch"
        >
      </movie-list>
      </ul>
      </div>
    </div>
    `
  })
