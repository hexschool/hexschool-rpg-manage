import{Y as s}from"./index.b171e68b.js";const t=()=>s.get("/v1/video-courses/list"),i=e=>s.get(`/v1/video-courses/${e}`),r=(e,o)=>s.put(`/v1/video-courses/${e}`,o),u=(e,o)=>s.put(`/v1/video-courses/${e}/review`,o),v=e=>s.delete(`/v1/video-courses/${e}/review`),a=e=>s.post("/v1/video-courses/",e),p={apiGetCourseList:t,apiGetCourseDetail:i,apiPutCourseDetail:r,apiPutCourseSurveys:u,apiDeleteCourseSurveys:v,apiPostCreateCourse:a};export{p as a};
