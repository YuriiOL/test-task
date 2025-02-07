import {defineStore} from "pinia";
import {ref} from "vue";
import {fetchTasksList} from "../services/tasksService.ts";


export const useTasksStore = defineStore('tasks', () => {
	const list = ref([])

	async function fetchList() {
		try {
			list.value = await fetchTasksList();
		} catch (e) {
			list.value = [];
		}
	}

	return {
		list,
		fetchList
	}
})
