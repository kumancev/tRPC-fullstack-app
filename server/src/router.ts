import { router } from './trpc.js'
import userRouter from './users/router.js'

const appRouter = router({
  user: userRouter,
})

export default appRouter
