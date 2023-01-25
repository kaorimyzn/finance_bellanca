import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mudah',
    Svg: require('@site/static/img/mudah.svg').default,
    description: (
      <>
        Mudahkan pengelolaan keuangan usaha Anda dengan aplikasi pembukuan kami
      </>
    ),
  },
  {
    title: 'Handal',   
    Svg: require('@site/static/img/handal.svg').default,
    description: (
      <>
       Pembukuan keuangan yang mudah dan handal untuk usaha kecil Anda
      </>
    ),
  },
  {
    title: 'Canggih',
    Svg: require('@site/static/img/canggih.svg').default,
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
