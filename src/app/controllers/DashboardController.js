import CourseUser from "../models/CoursesUser";
import Course from "../models/Course";

class DashbooardController {
  async show(req, res) {
    CourseUser.belongsTo(Course, { foreignKey: "course_id" });

    const courseUser = await CourseUser.findAll({
      where: [
        {
          user_id: req.userId,
          status: "Y",
        },
      ],
      include: [
        {
          model: Course,
          where: [
            {
              status: "Y",
            },
          ],
        },
      ],
    });
    return res.json(courseUser);
  }
}

export default new DashbooardController();
