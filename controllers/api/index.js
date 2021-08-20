const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const articleRoutes = require('./articleRoutes');


router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/articles', articleRoutes);

module.exports = router;
