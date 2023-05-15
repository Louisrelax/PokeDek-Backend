const express = require('express');
const { createUser, blockUser, unblockUser, handleRefreshToken, logout } = require('../controller/User.Ctrl');
const { loginUserCtrl } = require('../controller/User.Ctrl');
const { getallUser } = require('../controller/User.Ctrl');
const { getUser } = require('../controller/User.Ctrl');
const { deleteUser } = require('../controller/User.Ctrl');
const { updateUser } = require('../controller/User.Ctrl');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-user", getallUser);
router.get("/refresh",handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getUser);
router.delete("/:id" , deleteUser);
router.put("/:edit-user",authMiddleware, updateUser);
router.put("/block-user/:id",authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id",authMiddleware, isAdmin, unblockUser);


module.exports = router;   


