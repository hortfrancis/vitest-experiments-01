import './App.css';
import MySimpleComponent from './components/MySimpleComponent';
import MySimpleTable from './components/MySimpleTable';

const tableData = [
  { id: 1, name: 'Alice', cheese: 'Gouda' },
  { id: 2, name: 'Bob', cheese: 'Cheddar' },
  { id: 3, name: 'Charlie', cheese: 'Brie' },
];

function App() {



  return (
    <>
      <header>
        <h1>Vitest Experiments 01</h1>
        <p>GitHub repo:
          <a
            href='https://github.com/hortfrancis/vitest-experiments-01'
            target='_blank'
          >
            github.com/hortfrancis/vitest-experiments-01
          </a>
        </p>
      </header>
      <main>
        <section>
          <h2>React components</h2>
          <p>These components are generic and used in the test cases.</p>
          <p>There are rendered here, in case you want to take a look at them!</p>
          <hr />
          <section>
            <MySimpleComponent text="This is a simple React component!" />
          </section>
          <hr />
          <section>
            <MySimpleTable data={tableData} />
          </section>
        </section>
      </main>
    </>
  )
}

export default App
