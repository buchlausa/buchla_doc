import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Steeped in History',
    Svg: require('@site/static/img/slug.svg').default,
    description: (
      <>
        Don Buchla created one of the first electronic music synthesizers. Don continued innovating for decades.
      </>
    ),
  },
  {
    title: 'A Unique Sound',
    Svg: require('@site/static/img/slug.svg').default,
    description: (
      <>
        Despite the vast mix of analog and digital sources, and a variety of compositionals tools, Buchla synthesizers are often immediately identifiable by their musical sound.
      </>
    ),
  },
  {
    title: 'An Endless Web of Options',
    Svg: require('@site/static/img/slug.svg').default,
    description: (
      <>
        Catering to the unique needs of indivual creative musicians, Buchla products often have a variety of ways to install, use, and modify to suit the drives of artists.
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
