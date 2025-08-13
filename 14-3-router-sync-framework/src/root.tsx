import { Outlet, Scripts } from "react-router";



export function Layout({ children } : { children:React.ReactNode }){
  return (
    <html lang="ko-KR">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Dark.svg" type="image/x-icon" />
        <title>Router-framework</title>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}


export default function Root(){
  return (
    <>
      <h1>Single Page Application</h1>
      <main>
        <Outlet />
      </main>
    </>
  )
}






















