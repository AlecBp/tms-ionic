interface Subject {
  name: string;
  level: string;
}
interface Attendance {
  isPresent: boolean;
  student: any;
}

export interface Session {
  id: string;
  date: string;
  time: string;
  tutor: any;
  subjects: Subject[];
  location: string;
  attendance: Attendance[];
  notes: string;
}
