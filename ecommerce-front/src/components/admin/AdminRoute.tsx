// 有身份验证的路由页面
import React, { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

const AdminRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        const auth = isAuth()
        if (auth) {
          const { user: { role } } = auth as Jwt
          if (role === 1) {
            return <Component {...props} />
          }
        }
        // 跳转回登录
        return <Redirect to='/signin' />
      }}
    />
  )
}

export default AdminRoute
