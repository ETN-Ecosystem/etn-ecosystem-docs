import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Based on TON',
    Svg: require('@site/static/img/ton.svg').default,
    description: (
      <>
        The TON Blockchain is leaps and bounds ahead and we chose it for our community
      </>
    ),
  },
  {
    title: 'A Community in Need',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Alot of the options Blockchain Technology presents is just 
    another option to most, but to our community its the only option
      </>
    ),
  },
  {
    title: 'Education Centric',
    Svg: require('@site/static/img/etn-learn-logo.svg').default,
    description: (
      <>
        ETN LEARN is an innovative online learning platform offering a wide range of courses from expert instructors, 
    primarily focusing on blockchain and cryptocurrency education. 
    As a key part of the ET Netsa Coin Initiative, ETN LEARN 
    leverages the utility of the ETN token based on The Open Network
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
        <Heading as="h3">{title}</Heading>
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
