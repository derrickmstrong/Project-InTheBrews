import React, { Fragment, useState, useEffect } from 'react';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState('Alabama');

  const url = `https://api.openbrewerydb.org/breweries/search?query=${search}&sort=city,name`;
  /* Search by State
  const url = `https://api.openbrewerydb.org/breweries/?by_state=${search}&sort=city,name`;
*/
  const fetchAPI = async () => {
    let res = await fetch(url);
    let brewery = await res.json();
    setBreweries(brewery);
    console.log(brewery);
  };

  useEffect(() => {
    fetchAPI();
    return () => {};
  }, [search]);

  const handleChange = (e) => {
    setSearch(`${e.target.value}_ `); // Added underscore to ensures that the full value is received
    console.log(search);
  };

  const brewerySearch =
    breweries &&
    breweries.map((brewery) => {
      return (
        <div key={brewery.id} className='card m-2' style={{ width: '18rem' }}>
          <div className='card-body'>
            <h5 className='card-title'>{brewery.name}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              {brewery.brewery_type === 'micro' ? (
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  class='bi bi-mic-fill'
                  fill='#ff7f00'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z' />
                  <path
                    fill-rule='evenodd'
                    d='M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z'
                  />
                </svg>
              ) : brewery.brewery_type === 'planning' ? (
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  class='bi bi-clipboard-check'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z'
                  />
                  <path
                    fill-rule='evenodd'
                    d='M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z'
                  />
                </svg>
              ) : brewery.brewery_type === 'brewpub' ? (
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  class='bi bi-hourglass-bottom'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z'
                  />
                </svg>
              ) : brewery.brewery_type === 'contract' ? (
                <svg
                  width='1em'
                  height='1em'
                  viewBox='0 0 16 16'
                  class='bi bi-card-checklist'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z'
                  />
                  <path
                    fill-rule='evenodd'
                    d='M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z'
                  />
                </svg>
              ) : null}
              {`${
                brewery.brewery_type.toUpperCase()[0]
              }${brewery.brewery_type.slice(1)} Brewery`}
            </h6>
            <p className='card-text'>{brewery.street}</p>
            <p className='card-text'>
              {brewery.city}, {brewery.state} {brewery.postal_code}{' '}
              {brewery.country}
            </p>
            <p className='card-text'>
              {brewery.phone !== '' ? `Phone: ${brewery.phone}` : null}
            </p>
            {brewery.website_url !== '' ? (
              <a
                href={`${brewery.website_url}`}
                target='_blank'
                rel='noopener noreferrer'
                className='card-link'>
                Website
              </a>
            ) : null}
          </div>
        </div>
      );
    });

  return (
    <Fragment>
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column my-4' style={{ width: '18rem' }}>
          <h1 className='text-center my-4'>In the Brews</h1>
          <h2 className='text-center my-2' style={{ fontSize: '1.25rem' }}>
            Find the best brews near you
          </h2>
          <input
            className='d-flex justify-content-center m-2 p-2'
            type='text'
            placeholder='Search By Name, City, State'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='d-flex flex-wrap justify-content-center '>
        {brewerySearch}
      </div>
    </Fragment>
  );
}

export default App;
