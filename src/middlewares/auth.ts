import { createServerPropsClient } from '../../utils/supabase/server-props'
import { User } from '@supabase/supabase-js'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

type Handler<T> = (
    context: GetServerSidePropsContext,
    user?: User,
    profile?: Profile
) => Promise<GetServerSidePropsResult<T>>

export const protectedByAuth = <T>(handler: Handler<T>) => {
    return async (context: GetServerSidePropsContext) => {
        const supabase = createServerPropsClient(context)

        const { data, error } = await supabase.auth.getUser()

        if (error || !data) {
            console.log(data)
            console.log(`🔴 User or session not valid or founded`)
            return {
                redirect: {
                    destination: '/?rr=userOrSessionNotValidOrFounded',
                    permanent: false,
                },
            }
        }

        const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .maybeSingle()

        const user = data.user

        return handler(context, user, profile)
    }
}

export const protectedByAdminAuth = <T>(handler: Handler<T>) => {
    return async (context: GetServerSidePropsContext) => {
        const supabase = createServerPropsClient(context)

        const { data, error } = await supabase.auth.getUser()

        if (error || !data) {
            console.log(`🔴 User or session not valid or founded`)
            return {
                redirect: {
                    destination: '/auth/login',
                    permanent: false,
                },
            }
        }

        console.log(data)

        const profile = await supabase.from('profiles').select('*')

        console.log(profile)

        return handler(context)
    }
}

export const verifyAuth = <T>(handler: Handler<T>) => {
    return async (context: GetServerSidePropsContext) => {
        const supabase = createServerPropsClient(context)

        const { data, error } = await supabase.auth.getUser()

        if (error || !data) {
            console.log(`🔴 User or session not valid or founded`)
            return handler(context, undefined)
        }

        const user = data.user
        return handler(context, user)
    }
}
