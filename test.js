
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert')
		, async 		= require('ee-async')
		, ORM 			= require('./')
		, project 		= require('ee-project');


	var orm = new ORM(project.config.db);

	orm.on('load', function(err) {	
		var   db = orm.ee_orm_test
		 	, start
		 	, count = 0
		 	, failed = 0
		 	, completed = 0;

		log('orm loaded');

		var cb = function(err, item){
			if (err) log(err);
			if (item) item.dir();
		}


		db.event(['*']).findOne().then(function(event){ log(event);
			
			return event.delete();
		}).then(function(event) { log(event);
			
			return db.event(['*']).findOne();
		}).then(function(evt) {
			log(evt);
		}).catch(function(err){
			log(err);
		});

	});