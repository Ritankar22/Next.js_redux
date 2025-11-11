export const endPoints = {
    auth:{
        login:'/auth/login',
        profile:'/auth/profile',
        register:'/auth/register',
        updatePassword:`/auth/update-password`,
        reset:'/auth/reset-password-link',
        resetPassword:`/auth/reset-password`,
        otp:'/auth/verify-otp',

    },
    crud:{
        create:'/api/post/create',
        list:'/api/post/list',
        update:'/api/post/update',
        detail:'/api/post',
        delete:'/api/delete',
    }
}