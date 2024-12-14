import { Task } from "../task/task.model";

export interface Project {
    id: number;
    name: string;
    description: string;
    tasks: Array<Task>;  // or Task[]
}
