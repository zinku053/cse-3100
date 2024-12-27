import { useEffect, useState } from 'react';
import './Home.css';

const featuredCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h2 className="welcome-title">Welcome to Purrfect Adoption</h2>
        <p className="welcome-text">Find your purrfect companion today!</p>
      </section>

      <section className="featured-section">
        <h2 className="featured-title">Featured Cats</h2>
        <div className="cats-container">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img src={cat.image} alt={cat.name} className="cat-image" />
              <div className="cat-info">
                <h3 className="cat-name">{cat.name}</h3>
                <p className="cat-age">Age: {cat.age}</p>
                <p className="cat-breed">Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
