import {useState, useEffect} from 'react';
import api from '../../api/api';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faExclamationTriangle, faCross, faClock} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import './styles.css';

const UF = ({match}) => {
  const [brazilianState, setBrazilianState] = useState({});

  useEffect(() => {
    const fetchStateData = async () => {
      const {uf} = match.params;
      const response = await api.get(`/brazil/uf/${uf}`);
      setBrazilianState(response.data);
    }
    if (match && match.params) {
      fetchStateData();
    }
  }, [match]);


  return (
      <div className="detail">
        <div className="box-data">
          <h1>{brazilianState.state}</h1>
          <p className="cases">
            <small>
              <FontAwesomeIcon icon={faCheck}/>
              <strong>Casos</strong>
            </small>
            <br/> {brazilianState.cases}
          </p>
          <p className="suspect">
            <small>
              <FontAwesomeIcon icon={faExclamationTriangle}/>
              <strong>Suspeitas</strong>
            </small>
            <br/> {brazilianState.suspects}
          </p>
          <p className="death">
            <small>
              <FontAwesomeIcon icon={faCross}/>
              <strong>Mortes</strong>
            </small>
            <br/> {brazilianState.deaths}
          </p>
          <p className="date">
            <FontAwesomeIcon icon={faClock}/> <small><strong>Atualizado
            em</strong></small><br/>{moment(brazilianState.datetime).format('llll')}
          </p>
        </div>
      </div>
  );
};

export default UF;
