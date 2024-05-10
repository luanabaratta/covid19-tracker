import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle, faCross, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import api from '../../api/api';
import './styles.css';

const Main = () => {
  const [brazilianState, setBrazilianState] = useState([]);

  useEffect(() => {
    loadRegion();
  }, []);

  const loadRegion = async () => {
    try {
      const response = await api.get('/');
      const { data } = response.data;
      setBrazilianState(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
        <div className="region-list">
          {brazilianState.sort((a, b) => a.state.localeCompare(b.state)).map(state => (
              <article key={state.uid}>

                <Link to={`/brazil/uf/${state.uf}`} title={state.state}>
                  <div className="box-head">
                    <img src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`}
                         alt=""/>
                    <h4>{state.state} - {state.uf}</h4>
                  </div>
                  <div className="box-data">
                    <p className="cases">
                      <FontAwesomeIcon icon={faCheck}/>
                      <strong>Casos</strong>{state.cases}
                    </p>
                    <p className="suspect">
                      <FontAwesomeIcon icon={faExclamationTriangle}/>
                      <strong>Suspeitas</strong>{state.suspects}
                    </p>
                    <p className="death">
                      <FontAwesomeIcon icon={faCross}/>
                      <strong>Mortes</strong>{state.deaths}
                    </p>
                  </div>
                </Link>
                <div className="data">
                <span><FontAwesomeIcon icon={faClock}
                                       className="faclock"/> {moment(brazilianState.datetime).format('llll')}</span>
                </div>
              </article>
          ))}
        </div>
  );
}

export default Main;
