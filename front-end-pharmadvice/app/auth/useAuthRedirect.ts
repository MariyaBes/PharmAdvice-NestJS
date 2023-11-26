import { useAuth } from '@/app/hooks/useAuth'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'


export const useAuthRedirect = () => {
	const { user } = useAuth()

	const  router  = useRouter()

	useEffect(() => {
		 if (user) {
			 router.push('/')
		 }
	}, [user, router])
}