const fs = require("fs");

function getUserCourses(userId, callback) {
  fs.readFile("enrollments.json", "utf8", (err, rawData) => {
    if (err) return callback(err, null);

    try {
      const records = JSON.parse(rawData);
      callback(null, records[userId] || []);
    } catch (parseErr) {
      callback(parseErr, null);
    }
  });
}

// Run
getUserCourses("user101", (err, courses) => {
  if (err) {
    console.error("Callback Error:", err.message);
  } else {
    console.log("Courses (Callback):", courses);
  }
});
