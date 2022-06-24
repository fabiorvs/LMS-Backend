import CourseUser from "../models/CoursesUser";
import Course from "../models/Course";
import Term from "../models/Term";

class DashbooardController {
  async show(req, res) {
    CourseUser.belongsTo(Course, { foreignKey: "course_id" });
    Course.belongsTo(Term, { foreignKey: "term_id" });

    const dateNow = new Date();

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
          include: [
            {
              model: Term,
              required: false,
              where: [
                {
                  status: "Y",
                },
              ],
            },
          ],
        },
      ],
    });
    return res.json(courseUser);
  }
}

export default new DashbooardController();
