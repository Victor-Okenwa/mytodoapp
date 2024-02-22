import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Search from "./components/Search";

function App() {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState('');
  const [newItem, setNewItem] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const setAndSave = (object) => {
    setItems(object);
    localStorage.setItem('checklist', JSON.stringify(object));
  }

  const addItem = (e) => {
    e.preventDefault();
    const id = items.length ? (parseInt(items[items.length - 1].id) + 1).toString() : 1;
    const newCheck = { id, item: newItem, checked: false };
    const newItems = [...items, newCheck];
    setAndSave(newItems);
    setNewItem('');
  }

  const handleCheck = (id) => {
    const listItem = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSave(listItem);
  }

  const handleDelete = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setAndSave(newList);
  }

  useEffect(() => {
    const fetchItems = () => {
      setIsLoading(true);
      try {
        setItems(JSON.parse(localStorage.getItem("checklist")) || []);
      } catch (err) {
        console.log(err);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    return fetchItems();
  }, [setItems]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddItem newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
        <Search
          searchItems={searchItems}
          setSearchItems={setSearchItems}
        />
        <Items
          items={items.filter((item) => item.item.toLowerCase().includes(searchItems.toLowerCase()))}
          isLoading={isLoading}
          fetchError={fetchError}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer items={items} />
    </div>
  );
}

export default App;
