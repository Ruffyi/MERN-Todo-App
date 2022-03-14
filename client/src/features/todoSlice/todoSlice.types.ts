import ITodosItem from '../../@types/shared/TodosItem.types';

type ActionStatus = 'all' | 'completed' | 'active';

type TChangeTodoStatus = Pick<ITodosItem, '_id' | 'status'>;

type State = {
	todos: ITodosItem[];
	filteredTodos: ITodosItem[];
};

export type { ActionStatus, State, TChangeTodoStatus };
