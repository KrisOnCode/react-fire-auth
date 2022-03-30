
   
import { useAuthContext } from '../hooks/useAuthContext'

export default function Home() {
    const { user } = useAuthContext()
    return (
        <div className="flex items-center justify-center">
            <card className="w-80 rounded-2xl border shadow py-12 px-8 hover:-translate-y-1 hover:shadow-2xl delay-75 duration-100">
                <p className="text-xl text-black dark:text-white font-body">Welcome {user.email}!</p>
            </card>
        </div>
    )
}