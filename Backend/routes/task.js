const express = require("express")
const router = express.Router()
const {handle_all_user,find_user,delete_user,create_user,update_user} = require("../controller/task_controller")

router.route("/")
.get(handle_all_user)
.post(create_user)

router.route("/:id")
.get(find_user)
.delete(delete_user)
.put(update_user)

module.exports = router