import React from 'react';

import { CourseProgramStudy } from '@/entities/course-program';

const course = {
  children: [],
  title: 'Test',
  description_text: 'test',
  image_absolute: 'test',
  mentors: [],
  program_description: 'Teset',
};

export const CourseProgramContainer = () => {
  const { children, title, mentors } = course;

  return (
    <>
      <CourseProgramStudy
        image=""
        title={title}
        description=""
      />
    </>
  );
};
