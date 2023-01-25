import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mudah',
    Svg: require('@site/static/img/112.svg').default,
    description: (
      <>
        Mudahkan pengelolaan keuangan usaha Anda dengan aplikasi pembukuan kami
      </>
    ),
  },
  {
    title: 'Handal',   
    Svg: require('@site/static/img/handal.jpg').default,
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
