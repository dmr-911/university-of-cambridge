import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([]);
      useEffect(() => {
        fetch("./subjects.JSON")
          .then((res) => res.json())
          .then((data) => {
            setCourses(data);
          });
      }, []);
    return [courses, setCourses];
}
export default useCourses;