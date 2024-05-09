import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHeartbeat, faCross, faClock } from '@fortawesome/free-solid-svg-icons';
import api from '../../api/api';
import 'moment/locale/pt-br';
import moment from 'moment';
import './styles.css';

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    loadRegion();
  }, []);

  const loadRegion = async () => {
    try {
      const response = await api.get('/countries');
      const {data} = response.data;
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div className="country-list">
        {countries.map(country => (
            <article key={country.country}>
              <div className="box-head">
                <h1>{country.country}</h1>
              </div>
              <div className="box-data">
                <p className="cases">
                  <FontAwesomeIcon icon={faCheck}/>
                  <strong>Casos</strong>
                  {country.cases}
                </p>
                <p className="recovered">
                  <FontAwesomeIcon icon={faHeartbeat}/>
                  <strong>Confirmados</strong>
                  {country.confirmed}
                </p>
                <p className="death">
                  <FontAwesomeIcon icon={faCross}/>
                  <strong>Mortes</strong>
                  {country.deaths}
                </p>
              </div>
              <div className="data">
                <span>
                  <FontAwesomeIcon id="faclock" icon={faClock}/> {moment(country.updated_at).format('llll')}
                </span>
              </div>
            </article>
        ))}
      </div>
  );
}

export default Countries;
