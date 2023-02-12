
import { useEffect, useState } from 'react';
import './App.css';
import { Accounts } from './components/Accounts';
import { getAccounts } from './Actions/AccountActions';
import {useSelector, useDispatch} from 'react-redux'
import { Account } from './components/Account';
import "semantic-ui-css/semantic.min.css";
function App(props) {
  // const accounts = useSelector((state) => state.accounts);

  // accounts is store for accounts related activities so accounts is store name and then accounts is key from story.
  const accounts = useSelector((state) => state.accounts.accounts)
  const dispatch = useDispatch()


  useEffect( () => {
    dispatch(getAccounts())
  }, [])


  return (
    <div className="App">
      <Account/>
    <Accounts accounts ={accounts}/>

    </div>
  );
}

export default App;
