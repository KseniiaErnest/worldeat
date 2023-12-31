import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CitiesList from "./components/CitiesList";
import City from "./components/City";
import CountriesList from "./components/CountriesList";
import { useEffect, useState } from "react";

const BASE_URL = 'http://localhost:8000';

export default function App() {
 const [cities, setCities] = useState([]);
 const [isLoading, setIsLoading] = useState(false);

 useEffect(function() {
  async function fetchCities() {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();
      setCities(data);
    }catch{
      alert('There was an error loading data')
    }finally{
      setIsLoading(false)
    }
  }

  fetchCities();
 }, [])

  return (
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Homepage />} />
    <Route path="product" element={<Product />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="/login" element={<Login />} />
    <Route path="app" element={<AppLayout />}>
    <Route index element={<CitiesList cities={cities} isLoading={isLoading} />} />
      <Route path="cities" element={<CitiesList cities={cities} isLoading={isLoading} />} />
      <Route path="countries" element={<CountriesList cities={cities} isLoading={isLoading} />} />
      <Route path="form" element={<p>Form</p>} />
    </Route>

    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  )
 
}
