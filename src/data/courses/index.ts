import type { CourseDefinition, JLPTLevel } from '../../types/course'
import { n4Course } from './n4'
import { n5Course } from './n5'

/** 所有已建立的課程 */
export const allCourses: CourseDefinition[] = [
  n5Course,
  n4Course,
]

/** 依 ID 取得課程 */
export function getCourseById(id: string): CourseDefinition | undefined {
  return allCourses.find(c => c.id === id)
}

/** 依 JLPT 等級取得課程 */
export function getCourseByLevel(level: JLPTLevel): CourseDefinition | undefined {
  return allCourses.find(c => c.level === level)
}

/** 取得所有可用等級 */
export function getAvailableLevels(): JLPTLevel[] {
  return allCourses.map(c => c.level)
}
