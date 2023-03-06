const { mutipleMongooseToObject } = require('../../ultil/mongoose');
const Course = require('../models/Course')

class MeController{

    //[GET] /me/stored/courses
    storedCourses(req,res, next){
        Course.find({})
            .then(courses => res.render('me/stored-courses',{
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController;
