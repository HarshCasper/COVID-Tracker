import React from 'react';
import Card from 'react-bootstrap/Card';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';


const Cards = ({data}) => {
    return (
        <div className={styles.container}>
            <Card className={cx(styles.card,styles.infected)}>
                <Card.Body>
                    <Card.Title>Infected</Card.Title>
                    <h2>
                    <Card.Text>
                        <CountUp start={0} end={data.confirmed.value} duration={2.75} separator="," />         
                    </Card.Text>
                    </h2>
                    
                    <Card.Text>
                        Number of active cases of COVID-19.    
                    </Card.Text>
                    
                    <h3>
                    <Card.Text>
                        {new Date(data.lastUpdate).toDateString()}
                    </Card.Text>
                    </h3>
                   
                </Card.Body>
            </Card>

            <Card className={cx(styles.card,styles.recovered)}>
                <Card.Body>
                    <Card.Title>Recovered</Card.Title>
                    <h2>
                    <Card.Text>
                        <CountUp start={0} end={data.recovered.value} duration={2.75} separator="," />         
                    </Card.Text>
                    </h2>
                    
                    <Card.Text>
                        Number of recovered cases of COVID-19.    
                    </Card.Text>
                    
                    <h3>
                    <Card.Text>
                        {new Date(data.lastUpdate).toDateString()}
                    </Card.Text>
                    </h3>
                   
                </Card.Body>
            </Card>

            <Card className={cx(styles.card,styles.deaths)}>
                <Card.Body>
                    <Card.Title>Deaths</Card.Title>
                    <h2>
                    <Card.Text>
                        <CountUp start={0} end={data.deaths.value} duration={2.75} separator="," />         
                    </Card.Text>
                    </h2>
                    
                    <Card.Text>
                        Number of deaths cases of COVID-19.    
                    </Card.Text>
                    
                    <h3>
                    <Card.Text>
                        {new Date(data.lastUpdate).toDateString()}
                    </Card.Text>
                    </h3>
                   
                </Card.Body>
            </Card>
        </div>    
        
    );
}

export default Cards;
