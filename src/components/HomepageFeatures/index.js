import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mudah',
    Svg: require('https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=826&t=st=1674650186~exp=1674650786~hmac=b1f5a9792ec14da68e50514245038af8aedcbc161291a8569dcb76cfa655eb9f').default,
    description: (
      <>
        Mudahkan pengelolaan keuangan usaha Anda dengan aplikasi pembukuan kami
      </>
    ),
  },
  {
    title: 'Handal',   
    Svg: require('https://img.freepik.com/free-vector/happy-women-sitting-talking-each-other-dialog-psychologist-tablet-flat-illustration_74855-14078.jpg?w=826&t=st=1674650212~exp=1674650812~hmac=580e09feeff3ab278c0a57bbd3d1c7395495958894d7814d2d09dafa2b0f63f9').default,
    description: (
      <>
       Pembukuan keuangan yang mudah dan handal untuk usaha kecil Anda
      </>
    ),
  },
  {
    title: 'Canggih',
    Svg: require('https://img.freepik.com/free-vector/money-income-attraction_74855-6573.jpg?w=740&t=st=1674650148~exp=1674650748~hmac=2f2c79512b51bcba90abfdb455285c3ddd308b120b97efb1d6c31e1bfc560d53').default,
    description: (
      <>
        Efisiensi keuangan usaha Anda dengan aplikasi pembukuan yang canggih
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
