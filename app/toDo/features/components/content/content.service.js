angular
	.module('toDo.components.content')
	.service('content', ContentService);

function TableService($http) {

	return {

		getContent: function(content) {

			$http({

				method: 'GET',
				url: '/api'

			}).then(function(response){

				response.data.forEach(function(element){
				content.push(element);

			});
		},

		updateContent: function (table) {

			$http({

				method: 'PUT',
				url: '/api',
				data: {
					id: id,
					Completed: completed

				}

			}).then(function(error, response){

				if (error) throw error;

			})
		},

		createContent: function(table) {

			$http({

				method: 'POST',
				url: '/api',
				data: {

					toDO: toDo,
					completedBy: completedBy

				}

			}).then(function(response){

				if (err) throw err;

			})
		}

	}
}