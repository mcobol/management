import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'오치남',
  'birthday':'961222',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any',
  'name':'이순신',
  'birthday':'961333',
  'gender':'남자',
  'job':'군인'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'961444',
  'gender':'남자',
  'job':'프로그래머'
}];

class App extends Component {
  render() {
    return ( 
      < >
        {
          customers.map(c => {
            return (
              <HTMLDivElement>
                {
                <Customer
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
          }
              </HTMLDivElement>
            )
          })
        }
      </>  
    )
  }
}


export default App;
