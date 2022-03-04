const router = require('express').Router();
const {
    getAllUser,
    getUseryId,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/users-controller');


// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUseryId)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;