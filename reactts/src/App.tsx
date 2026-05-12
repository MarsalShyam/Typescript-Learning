import './App.css'
import { Card } from './component/Card.tsx'
import { ChaiCard } from './component/ChaiCard.tsx'
import ChaiList from './component/ChaiList.tsx'
import { Counter } from './component/Counter.tsx'
import { OrderForm } from './component/OrderForm.tsx'

import type { Chai } from './types.ts'

const menu:Chai[]=[
  {id:1, name:"Masala", price:25},
  {id:2, name:"Ginger", price:50},
  {id:3, name:"Lemon", price:60}
];

function App() {
 

  return (
    <>
      <div>
        <h1>Get Start</h1>
        
        {/* importing ChaiCart */}
        <ChaiCard
        name="Headphones" 
        price={5000}
        />
        <ChaiCard
        name="IPhone" 
        price={1000000}
        />
      </div>

      {/* importing Counter component */}
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderForm
        onSubmit={(order)=>{
          console.log("Placed", order.name, order.cups);
        }}
        />
      </div>

      <div>
        <Card
        title="Chai aur Typescrpit"
        footer={<button>Order Now</button>}
        
        // ReactNode
        />
        <h2>Ram is a good boy.</h2>
      </div>
    </>
  )
}

export default App
