import { api } from 'store/api/api'
import { TodoListResponseType } from 'types'

export const todoListsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoListResponseType[], void>({
      query: () => ({
        url: '/todos',
      }),
      // onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
      //   const data = await queryFulfilled
      //
      //   if (data.data.length !== 0) {
      //     dispatch(addTodos(data))
      //   }
      // },
      providesTags: ['TODOList'],
    }),
  }),
})

export const {
  useGetTodosQuery,
} = todoListsApi