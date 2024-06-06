import { getDocs, collection, doc, setDoc } from 'firebase/firestore'
import { api } from 'store/api'
import { db } from 'config/firebase'
import { NewUserType, UserResponseType } from 'types'

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOneUser: builder.query<UserResponseType[], string>({
      queryFn: async (uid) => {
        try {
          const data = await getDocs(collection(db, 'users'))

          const filteredData = data.docs.map(doc => ({ id: doc.id, ...doc.data() } as UserResponseType))
          const filteredUser = filteredData.filter(doc => doc.id === uid)

          return { data: filteredUser }
        } catch (error) {
          return { error: error }
        }
      },
      providesTags: ['users'],
    }),
    addUser: builder.mutation<void, NewUserType>({
      queryFn: async (user) => {
        try {
          await setDoc(doc(db, 'users', user.uid), user);
          return { data: undefined }
        } catch (error) {
          return { error: error }
        }
      },
      invalidatesTags: ['users'],
    }),
  }),
})

export const {
  useGetOneUserQuery,
  useLazyGetOneUserQuery,
  useAddUserMutation,
} = usersApi