import { useEffect, useState } from 'react';
import './AvailableCats.css';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Coco', age: '3', breed: 'Siamese' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  useEffect(() => {
    const filtered = cats.filter(
      (cat) =>
        (breedFilter === '' || cat.breed === breedFilter) &&
        (nameFilter === '' || cat.name.toLowerCase().includes(nameFilter.toLowerCase()))
    );
    setFilteredCats(filtered);
  }, [breedFilter, nameFilter, cats]);

  const breeds = [...new Set(cats.map((cat) => cat.breed))];

  return (
    <section className="available-cats">
      <h2 className="text-center mb-4">Available Cats</h2>
      <p className="text-center mb-4">Meet our adorable cats looking for their forever home!</p>

      <div className="filters">
        <select
          value={breedFilter}
          onChange={(e) => setBreedFilter(e.target.value)}
          className="form-select"
        >
          <option value="">All Breeds</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="cat-card">
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <div className="cat-info">
              <h3>{cat.name}</h3>
              <p>Age: {cat.age}</p>
              <p>Breed: {cat.breed}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
