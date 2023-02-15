import './App.css';
import ShoppingCart from './components/shopping-cart/ShoppingCart';

// localstorage 저장
const data = [
  {
    id: 1,
    bookImage: 'images/book.jpg',
    title: '부의 추월차선',
    quantity: 1,
    inventory: 100,
    price: 5500
  },
  {
    id: 2,
    bookImage: 'images/book2.jpg',
    title: '여름의 문',
    quantity: 1,
    inventory: 100,
    price: 8000
  },
  {
    id: 3,
    bookImage: 'images/book3.jpg',
    title: '예감은 틀리지 않는다.',
    quantity: 1,
    inventory: 100,
    price: 10000
  },
  {
    id: 4,
    bookImage: 'images/book4.jpg',
    title: '아몬드',
    quantity: 1,
    inventory: 100,
    price: 8500
  }
];
localStorage.setItem('test-1', JSON.stringify(data));

function App() {
  return <ShoppingCart />;
}

export default App;
