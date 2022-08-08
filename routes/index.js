const express = require('express');

const router = express.Router();

const categoriesRouter = require('./categories');
const commentsRouter = require('./comments');
const organizationsRouter = require('./organizations');
const newsRouter = require('./news');
const authRouter = require('./auth');
const userRouter = require('./users');
const activitiesRouter = require('./activities');
const contactsRouter = require('./contacts');
const slidesRouter = require('./slides');
const testimonialsRouter = require('./testimonials');
const membersRouter = require('./members');
const backofficeRouter = require('./backoffice');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// Auth
router.use('/auth', authRouter);

// Categories
router.get('/login', (req, res) => {
  res.render('login');
});

router.use('/categories', categoriesRouter);

// Comments
router.use('/comments', commentsRouter);

// Organizations
router.use('/organizations', organizationsRouter);

// Users
router.use('/users', userRouter);

// Activities
router.use('/activities', activitiesRouter);

// News
router.use('/news', newsRouter);

// Contacts
router.use('/contacts', contactsRouter);
router.use('/slides', slidesRouter);

// Testimonials
router.use('/testimonials', testimonialsRouter);

// Members
router.use('/members', membersRouter);

// BackOffice
router.use('/backoffice', backofficeRouter);

module.exports = router;
