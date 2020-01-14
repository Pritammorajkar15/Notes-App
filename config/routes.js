const express=require('express')
const router=express.Router()
const notesController=require('../app/controllers/notescontroller.js')
const categoriesController=require('../app/controllers/categoriescontroller.js')
const usersController=require('../app/controllers/userscontroller')
const {authenticateUser} =require('../app/middleware/authentication')

router.get('/notes',authenticateUser,
notesController.list)

router.post('/notes',authenticateUser,
notesController.create)

router.get('/notes/count',authenticateUser,
notesController.count)

router.get('/notes/:id',authenticateUser,
notesController.show)

router.put('/notes/:id',authenticateUser,
notesController.update)

router.delete('/notes/:id',authenticateUser,
notesController.destroy)

router.get('/categories',authenticateUser,
categoriesController.list)

router.post('/categories',authenticateUser,
categoriesController.create)

router.get('/categories/:id',authenticateUser,
categoriesController.show)

router.put('/categories/:id',authenticateUser,
categoriesController.update)

router.delete('/categories/:id',authenticateUser,
categoriesController.destroy)


router.post('/users/register',
usersController.register)

router.post('/users/login',
usersController.login)

router.get('/users/account',authenticateUser,
usersController.account)

router.delete('/users/logout',authenticateUser,
usersController.logout)
module.exports=router