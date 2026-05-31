import { Provider } from 'react-redux'
import './App.css'
import { store } from './app/redux/store'
import ThemeProvider from './app/providers/theme/ThemeProvider'
import AntdProvider from './app/providers/antd/AntdProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/routes'

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider>
          <AntdProvider>
            <RouterProvider router={router}/>
          </AntdProvider>
        </ThemeProvider>
      </Provider>
      
    </div>
  )
}

export default App;
