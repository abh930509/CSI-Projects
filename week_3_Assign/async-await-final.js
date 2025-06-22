const fs = require("fs").promises;

async function displayUserCourses(userId) {
  try {
    const content = await fs.readFile("enrollments.json", "utf8");
    const data = JSON.parse(content);
    const courses = data[userId] || [];
    console.log("Courses (Async/Await):", courses);
  } catch (error) {
    console.error("Async/Await Error:", error.message);
  }
}

// Run
displayUserCourses("user101");
