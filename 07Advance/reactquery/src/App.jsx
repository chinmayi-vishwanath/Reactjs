import './App.css'
import Toys from './ReactQuery/Reactquery'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
        <QueryClientProvider client={queryClient}>
               <Toys />
        </QueryClientProvider>
    </>
  )
}

export default App
