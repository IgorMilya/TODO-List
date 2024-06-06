import { getDocs, collection, addDoc, updateDoc, doc, deleteDoc, orderBy, query } from 'firebase/firestore'
import { api } from 'store/api'
import { db } from 'config/firebase'
import { TodoListResponseType, TodoType, ChangeTodoStatusType, UpdateTodoType } from 'types'

export const todosApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoListResponseType[], string>({
      queryFn: async (uid) => {
        try {
          const todosQuery = query(collection(db, 'todos'), orderBy('createdAt', 'desc'));
          const data = await getDocs(todosQuery)

          const filteredData = data.docs.map(doc => ({ id: doc.id, ...doc.data() } as TodoListResponseType))
          const filteredUserData = filteredData.filter(doc => doc.uid === uid)
          const sortedUserData = filteredUserData.sort((a, b) => Number(a.completed) - Number(b.completed));

          return { data: sortedUserData }
        } catch (error) {
          return { error: error }
        }
      },
      providesTags: ['todos'],
    }),
    addTodo: builder.mutation<void, TodoType>({
      queryFn: async (value) => {
        try {
          await addDoc(collection(db, 'todos'), value)
          return { data: undefined }
        } catch (error) {
          return { error: error }
        }
      },
      invalidatesTags: ['todos'],
    }),
    changeTodoStatus: builder.mutation<void, ChangeTodoStatusType>({
      queryFn: async ({ id, completed }) => {
        try {
          await updateDoc(doc(db, 'todos', id), { completed: !completed })
          return { data: undefined }
        } catch (error) {
          return { error: error }
        }
      },
      invalidatesTags: ['todos'],
    }),
    updateTodo: builder.mutation<void, UpdateTodoType>({
      queryFn: async ({ id, ...rest }) => {
        try {
          await updateDoc(doc(db, 'todos', id), rest)
          return { data: undefined }
        } catch (error) {
          return { error: error }
        }
      },
      invalidatesTags: ['todos'],
    }),
    deleteTodo: builder.mutation<void, string>({
      queryFn: async (id) => {
        try {
          await deleteDoc(doc(db, 'todos', id))
          return { data: undefined }
        } catch (error) {
          return { error: error }
        }
      },
      invalidatesTags: ['todos'],
    }),
  }),
})

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useChangeTodoStatusMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation
} = todosApi