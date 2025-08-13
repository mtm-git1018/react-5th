import { Outlet, redirect } from "react-router"


export async function clientLoader() {
  if (!localStorage.getItem('token')) {
    throw redirect('/aut/login')
  }
  return null
}

clientLoader.hydrate = true // 하이드레이션 중에 실행

function Component() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}
export default Component