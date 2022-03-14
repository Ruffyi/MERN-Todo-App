import ITodosItem from '../../@types/shared/TodosItem.types';

type ActionStatus = 'all' | 'completed' | 'active';

type State = {
	todos: ITodosItem[];
	filteredTodos: ITodosItem[];
};

export type { ActionStatus, State };
