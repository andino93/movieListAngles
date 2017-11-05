angular.module('movie-app')
  .component('search', {
    bindings: {
      searchList: '<',
    },

    controller: function() {
      this.input = '';

      this.searchInput = input => {
        this.searchList(input);
        this.input = '';
      }
    },

    template: `
      <div class="search-bar form-inline">
        <input ng-model="$ctrl.input" class="form-control" type="text" />
        <button ng-click="$ctrl.searchInput($ctrl.input)" class="btn">Find</button>
      </div>
    `
  })
