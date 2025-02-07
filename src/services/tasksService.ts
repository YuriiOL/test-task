import axios from "axios";
import type {Task} from "../types/task.ts";

export async function fetchTasksList() {
	try {
		const { data } = await axios.get<Task[]>('https://jsonplaceholder.typicode.com/todos');

		return data;
	} catch (e) {
		console.error('Failed to fetch tasks list', e);
	}
}

export async function fetchTaskDetail(tasksId: number) {
	try {
		const { data } = await axios.get<Task>(`https://jsonplaceholder.typicode.com/todos/${tasksId}`);

		return data;
	} catch (e) {
		console.error('Failed to fetch task detail', e);
	}
}
