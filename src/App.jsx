import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Greeting from "./components/Greeting"
import StatusBadge from "./components/StatusBadge"
import UserCard from "./components/UserCard"
import Product from "./components/Product"
import Card from "./components/Card"
import BlogPost from "./components/BlogPost"
import MovieList from "./components/MovieList"
import ToggleButton from "./components/ToggleButton"
import Header from './components/Header'
import About from './components/About'
import ProjectShowcase from './components/ProjectShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Optional: ToggleButton with state
import ToggleButtonState from "./components/ToggleButton";
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  // Example project data for ProjectShowcase
  const projects = [
    {
      id: 1,
      name: 'Todo App',
      description: 'Une application React pour gérer vos tâches',
      technologies: ['React', 'JavaScript', 'CSS']
    },
    {
      id: 2,
      name: 'Weather Dashboard',
      description: 'Affichage météo en temps réel via API',
      technologies: ['React', 'API', 'Charts']
    },
    {
      id: 3,
      name: 'E-commerce Site',
      description: 'Expérience complète de shopping en ligne',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ]

  return (
    <>
      {/* Logos */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* Header */}
      <Header name="Sirine Youssef" tagline="Full Stack Developer" />

      {/* Greeting */}
      <Greeting />

      {/* StatusBadge */}
      <StatusBadge />

      {/* User Cards */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <UserCard
          name="Alice"
          email="alice@example.com"
          role="Developer"
        />
        <UserCard
          name="Bob"
          email="bob@example.com"
          role="Designer"
        />
        <UserCard
          name="Charlie"
          email="charlie@example.com"
          role="Manager"
        />
      </div>

      {/* Products */}
      <h2>Products</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Product
          title="Laptop"
          price={999}
          inStock={true}
          rating={4.5}
        />
        <Product
          title="Phone"
          price={499}
          inStock={false}
          rating={4}
        />
        <Product
          title="Headphones"
          price={99}
          inStock={true}
          rating={5}
        />
      </div>

      {/* Cards Example */}
      <h2>Cards Example</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Card title="Card 1">
          <p>This is the content inside Card 1</p>
        </Card>
        <Card title="Card 2">
          <p>This is the content inside Card 2</p>
          <ul>
            <li>Item A</li>
            <li>Item B</li>
          </ul>
        </Card>
        <Card title="Card 3">
          <p>This is the content inside Card 3</p>
          <button>Click Me!</button>
        </Card>
      </div>

      {/* Blog Posts */}
      <h2>Blog Posts</h2>
      <BlogPost
        title="Learning React"
        author={{ name: "Alice", email: "alice@example.com", role: "Developer" }}
        content="React is a powerful library for building UI components..."
        date="Jan 15"
      />
      <BlogPost
        title="React Tips"
        author={{ name: "Bob", email: "bob@example.com", role: "Designer" }}
        content="Here are some useful tips to improve your React apps..."
        date="Jan 20"
      />

      {/* Movie List */}
      <h2>Movie List</h2>
      <MovieList
        movies={[
          { id: 1, title: "The Matrix", director: "Wachowski", year: 1999, rating: 4 },
          { id: 2, title: "Inception", director: "Nolan", year: 2010, rating: 5 },
          { id: 3, title: "The Dark Knight", director: "Nolan", year: 2008, rating: 5 },
          { id: 4, title: "Interstellar", director: "Nolan", year: 2014, rating: 5 }
        ]}
      />

      {/* ToggleButton Preview */}
      <h2>Toggle Button Preview</h2>
      <ToggleButton isVisible={true} />
      <ToggleButton isVisible={false} />

      {/* Interactive ToggleButton */}
      <h2>Interactive ToggleButton</h2>
      <ToggleButtonState />

      {/* Counter Example */}
      <h2>Counter Example</h2>
      <Counter />

      {/* Portfolio Components */}
      <About
        profileImage="https://via.placeholder.com/150"
        bio="Je suis passionnée par le développement web et la création d'expériences utilisateurs uniques."
        skills={['React', 'JavaScript', 'CSS', 'HTML', 'Node.js']}
      />
      <ProjectShowcase projects={projects} />
      <Contact
        email="ysirine28@gmail.com"
        github="github.com/sirineyoussef"
        linkedin="linkedin.com/in/sirineyoussef"
      />
      <Footer name="Sirine Youssef" />

      {/* Counter card */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
