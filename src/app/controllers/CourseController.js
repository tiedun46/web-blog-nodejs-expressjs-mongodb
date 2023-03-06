const Course = require('../models/Course')
const {mgToObject} = require('../../ultil/mongoose')

class CourseController{

    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course: mgToObject(course)})
            })
            .catch(next);
    }

    //[GET] /course/create
    create(req,res,next){
        res.render('courses/create')
    }

    //[GET] /course/:id/edit
    edit(req,res,next){
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit',{
            course: mgToObject(course),
        }))
        .catch(next);
    }

    //[POST] /course/store
    store(req,res,next){
        // res.json(req.body)
        const course = new Course(req.body)
        course.save()
        .then(()=>res.redirect('/'))
        .catch(err =>{
            next(err)
        })
    }

    //[PUT] /course/:id
    update(req,res,next){
        Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
        }
    
    //[Delete] /course/:id
    delete(req,res,next){
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
        }

}

module.exports = new CourseController;
