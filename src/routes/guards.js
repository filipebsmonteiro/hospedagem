import APIService from '@/api/APIService'

/**
 * You can register route guards here and use them on your routes
 */

export const isAuthenticated = ($to, $from, $next) => {
    if (APIService._isAuthenticated()) {
        return $next()
    }
    $next({name: 'login'})
}

export const redirectLogin = () => {
    if (window.location.href !== `${window.location.origin}/login`) {
        window.location.href = `${window.location.origin}/login`
    }
}
