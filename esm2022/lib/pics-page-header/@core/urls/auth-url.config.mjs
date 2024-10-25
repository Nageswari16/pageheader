export class AuthURL {
    static EndPoints = {
        auth: {
            user: {
                conformMail: '/org/auth/forgot-password',
                changePassword: '/org/auth/forgot-password-verification',
                login: '/org/auth/login',
                refreshToken: '/org/auth/refresh-token',
                logout: '/org/auth/logout',
                userInfo: '/org/user/page/list',
                userRole: '/org/user/{id}',
                routeToDynamicPage: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
                authMe: '/org/auth/me',
                resetPassword: '/org/user/reset-password',
                orgList: '/org/management-group/organization/tree',
                notification: '/worker/notification',
                workerAvailability: '/worker/updateAvailablity',
                getWorkerAvailability: '/worker/getByCurrentUser',
                generateLoginUrl: '/org/auth/get-login-url',
                getTokenValidationUrl: '/org/auth/token-validation',
            },
            permission: {
                permissionRoleById: '/access-control/permission/role/{id}',
                pagePermission: '/access-control/permission/page',
                pageLookupPermission: '/access-control/permission/page/lookup'
            },
            microstrategy: {
                login: '/platform/microstrategy/login',
                getLibrary: '/platform/microstrategy/library'
            }
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3BhZ2UtaGVhZGVyL3NyYy9saWIvcGljcy1wYWdlLWhlYWRlci9AY29yZS91cmxzL2F1dGgtdXJsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sT0FBTztJQUNYLE1BQU0sQ0FBQyxTQUFTLEdBQUc7UUFDeEIsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFO2dCQUNKLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLGNBQWMsRUFBRSx3Q0FBd0M7Z0JBQ3hELEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFlBQVksRUFBRSx5QkFBeUI7Z0JBQ3ZDLE1BQU0sRUFBRSxrQkFBa0I7Z0JBQzFCLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGtCQUFrQixFQUNoQix3R0FBd0c7Z0JBQzFHLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixhQUFhLEVBQUUsMEJBQTBCO2dCQUN6QyxPQUFPLEVBQUUseUNBQXlDO2dCQUNsRCxZQUFZLEVBQUUsc0JBQXNCO2dCQUNwQyxrQkFBa0IsRUFBRSwyQkFBMkI7Z0JBQy9DLHFCQUFxQixFQUFFLDBCQUEwQjtnQkFDakQsZ0JBQWdCLEVBQUUseUJBQXlCO2dCQUMzQyxxQkFBcUIsRUFBRSw0QkFBNEI7YUFDcEQ7WUFDRCxVQUFVLEVBQUU7Z0JBQ1Ysa0JBQWtCLEVBQUUsc0NBQXNDO2dCQUMxRCxjQUFjLEVBQUUsaUNBQWlDO2dCQUNqRCxvQkFBb0IsRUFBRSx3Q0FBd0M7YUFDL0Q7WUFDRCxhQUFhLEVBQUU7Z0JBQ2IsS0FBSyxFQUFFLCtCQUErQjtnQkFDdEMsVUFBVSxFQUFFLGlDQUFpQzthQUM5QztTQUNGO0tBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBdXRoVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGNvbmZvcm1NYWlsOiAnL29yZy9hdXRoL2ZvcmdvdC1wYXNzd29yZCcsXHJcbiAgICAgICAgY2hhbmdlUGFzc3dvcmQ6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkLXZlcmlmaWNhdGlvbicsXHJcbiAgICAgICAgbG9naW46ICcvb3JnL2F1dGgvbG9naW4nLFxyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogJy9vcmcvYXV0aC9yZWZyZXNoLXRva2VuJyxcclxuICAgICAgICBsb2dvdXQ6ICcvb3JnL2F1dGgvbG9nb3V0JyxcclxuICAgICAgICB1c2VySW5mbzogJy9vcmcvdXNlci9wYWdlL2xpc3QnLFxyXG4gICAgICAgIHVzZXJSb2xlOiAnL29yZy91c2VyL3tpZH0nLFxyXG4gICAgICAgIHJvdXRlVG9EeW5hbWljUGFnZTpcclxuICAgICAgICAgICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnaWR9P3JldHVyblVzZXJQYWdlPXRydWUmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnLFxyXG4gICAgICAgIGF1dGhNZTogJy9vcmcvYXV0aC9tZScsXHJcbiAgICAgICAgcmVzZXRQYXNzd29yZDogJy9vcmcvdXNlci9yZXNldC1wYXNzd29yZCcsXHJcbiAgICAgICAgb3JnTGlzdDogJy9vcmcvbWFuYWdlbWVudC1ncm91cC9vcmdhbml6YXRpb24vdHJlZScsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uOiAnL3dvcmtlci9ub3RpZmljYXRpb24nLFxyXG4gICAgICAgIHdvcmtlckF2YWlsYWJpbGl0eTogJy93b3JrZXIvdXBkYXRlQXZhaWxhYmxpdHknLFxyXG4gICAgICAgIGdldFdvcmtlckF2YWlsYWJpbGl0eTogJy93b3JrZXIvZ2V0QnlDdXJyZW50VXNlcicsXHJcbiAgICAgICAgZ2VuZXJhdGVMb2dpblVybDogJy9vcmcvYXV0aC9nZXQtbG9naW4tdXJsJyxcclxuICAgICAgICBnZXRUb2tlblZhbGlkYXRpb25Vcmw6ICcvb3JnL2F1dGgvdG9rZW4tdmFsaWRhdGlvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgICBwZXJtaXNzaW9uUm9sZUJ5SWQ6ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9yb2xlL3tpZH0nLFxyXG4gICAgICAgIHBhZ2VQZXJtaXNzaW9uOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcGFnZScsXHJcbiAgICAgICAgcGFnZUxvb2t1cFBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlL2xvb2t1cCdcclxuICAgICAgfSxcclxuICAgICAgbWljcm9zdHJhdGVneToge1xyXG4gICAgICAgIGxvZ2luOiAnL3BsYXRmb3JtL21pY3Jvc3RyYXRlZ3kvbG9naW4nLFxyXG4gICAgICAgIGdldExpYnJhcnk6ICcvcGxhdGZvcm0vbWljcm9zdHJhdGVneS9saWJyYXJ5J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=