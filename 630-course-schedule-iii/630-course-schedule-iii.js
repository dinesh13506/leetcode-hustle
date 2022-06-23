var scheduleCourse = function(courses) {
    const validCourses = courses.filter(([duration, endTime]) => duration <= endTime);
    validCourses.sort(([,endA],[,endB]) => endA - endB);

    const n = validCourses.length;
	// Leetcode provides PQ for javascript users to match offerings from other languages
    const pq = new MaxPriorityQueue();
    let coursesTaken = 0;
    let daysSpent = 0;

    for(let i = 0; i < n; i += 1) {
        const [duration, endTime] = validCourses[i];

		// We assume that we're going to take this course
        daysSpent += duration;
        coursesTaken += 1;
        pq.enqueue(duration);

        if(daysSpent > endTime) {
			// We don't have enough days left to complete the course that we just enrolled into
			// In hindsight, we decide not to take the course that took the longest to complete and get back the days we spent on it
			// Note, this can also mean the course we just assumed that we'll take and complete
            const maxDuration = pq.dequeue().element;
            daysSpent -= maxDuration;
            coursesTaken -= 1;
        }
    }

    return coursesTaken;
};