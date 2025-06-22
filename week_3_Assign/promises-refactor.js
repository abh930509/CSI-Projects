const fs = require("fs");

function getUserCourses(userId) {
  return new Promise((resolve, reject) => {
    fs.readFile("enrollments.json", "utf8", (err, data) => {
      if (err) return reject(err);

      try {
        const parsed = JSON.parse(data);
        resolve(parsed[userId] || []);
      } catch (parseErr) {
        reject(parseErr);
      }
    });
  });
}

// Run
getUserCourses("user101")
  .then((courses) => console.log("Courses (Promise):", courses))
  .catch((err) => console.error("Promise Error:", err.message));
